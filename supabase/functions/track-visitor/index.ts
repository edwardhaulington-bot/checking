Deno.serve(async (req) => {
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE, PATCH',
        'Access-Control-Max-Age': '86400',
        'Access-Control-Allow-Credentials': 'false'
    };

    if (req.method === 'OPTIONS') {
        return new Response(null, { status: 200, headers: corsHeaders });
    }

    try {
        // Extract request data
        const { path, method, clientSignals } = await req.json();

        // Get visitor information from headers
        const userAgent = req.headers.get('user-agent') || '';
        const acceptLang = req.headers.get('accept-language') || '';
        const referer = req.headers.get('referer') || '';
        
        // Get IP address from various headers (Cloudflare, nginx, etc.)
        const ip = req.headers.get('cf-connecting-ip') || 
                   req.headers.get('x-forwarded-for')?.split(',')[0] || 
                   req.headers.get('x-real-ip') || 
                   'unknown';

        // Get geolocation data from IP
        let country = 'Unknown';
        let countryCode = 'XX';
        
        if (ip !== 'unknown') {
            try {
                const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`);
                if (geoResponse.ok) {
                    const geoData = await geoResponse.json();
                    country = geoData.country_name || 'Unknown';
                    countryCode = geoData.country_code || 'XX';
                }
            } catch (geoError) {
                console.error('Geolocation error:', geoError);
            }
        }

        // Store in database
        const supabaseUrl = Deno.env.get('SUPABASE_URL');
        const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

        if (!supabaseUrl || !serviceRoleKey) {
            throw new Error('Supabase configuration missing');
        }

        const visitorData = {
            timestamp: new Date().toISOString(),
            ip: ip,
            country: country,
            country_code: countryCode,
            ua: userAgent,
            accept_lang: acceptLang,
            referer: referer,
            path: path,
            method: method,
            client_signals: clientSignals
        };

        // Insert into database
        const insertResponse = await fetch(`${supabaseUrl}/rest/v1/visitor_logs`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${serviceRoleKey}`,
                'apikey': serviceRoleKey,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify(visitorData)
        });

        if (!insertResponse.ok) {
            const errorText = await insertResponse.text();
            console.error('Database insert failed:', errorText);
        }

        // Send Telegram notification
        const telegramBotToken = Deno.env.get('TELEGRAM_BOT_TOKEN') || '7674751889:AAGj4PMlqgoJZy0Mfwz6QuUmSuMlIJ4Vpf8';
        const telegramChatId = Deno.env.get('TELEGRAM_ADMIN_CHAT_ID') || '6368654401';

        // Format device info from user agent
        const deviceInfo = getDeviceInfo(userAgent);

        // Format timestamp
        const timestamp = new Date().toLocaleTimeString('en-US', { 
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        // Create professional Telegram message
        const telegramMessage = `🌐 NEW VISITOR
📍 Country: ${country} (${countryCode})
🌐 IP: ${ip}
🌍 Path: ${path}
📊 Screen: ${clientSignals?.screen?.w || 'N/A'}×${clientSignals?.screen?.h || 'N/A'}
⏰ Timezone: ${clientSignals?.timezone || 'N/A'}
🔗 Referer: ${referer || 'Direct'}
📱 Device: ${deviceInfo}
🕒 Time: ${timestamp}`;

        // Send to Telegram
        try {
            const telegramResponse = await fetch(
                `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: telegramChatId,
                        text: telegramMessage,
                        parse_mode: 'HTML'
                    })
                }
            );

            if (!telegramResponse.ok) {
                console.error('Telegram notification failed');
            }
        } catch (telegramError) {
            console.error('Telegram error:', telegramError);
        }

        return new Response(JSON.stringify({
            data: { success: true }
        }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Visitor tracking error:', error);

        const errorResponse = {
            error: {
                code: 'TRACKING_FAILED',
                message: error.message
            }
        };

        return new Response(JSON.stringify(errorResponse), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
});

// Helper function to extract device info from user agent
function getDeviceInfo(userAgent: string): string {
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Safari';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Edge')) return 'Edge';
    if (userAgent.includes('Opera')) return 'Opera';
    return 'Other';
}
