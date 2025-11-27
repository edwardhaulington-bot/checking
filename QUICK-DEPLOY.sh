#!/bin/bash
# Quick deployment script for visitor tracking backend

echo "=== Visitor Tracking Backend Deployment ==="
echo ""
echo "This script will attempt to deploy the backend infrastructure."
echo "If automated deployment fails, follow MANUAL-DEPLOYMENT-GUIDE.md"
echo ""

cd /workspace/amlbot-recovery
source .env.local

# Check credentials
if [ -z "$SUPABASE_URL" ] || [ -z "$SUPABASE_SERVICE_ROLE_KEY" ]; then
    echo "❌ Error: Supabase credentials not found in .env.local"
    exit 1
fi

echo "✓ Supabase credentials loaded"
echo "  URL: $SUPABASE_URL"
echo ""

# Step 1: Test table existence
echo "Step 1: Checking if visitor_logs table exists..."
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" \
    "${SUPABASE_URL}/rest/v1/visitor_logs?limit=1" \
    -H "apikey: ${SUPABASE_SERVICE_ROLE_KEY}" \
    -H "Authorization: Bearer ${SUPABASE_SERVICE_ROLE_KEY}")

if [ "$RESPONSE" = "200" ]; then
    echo "✓ Table visitor_logs already exists!"
else
    echo "❌ Table not found (HTTP $RESPONSE)"
    echo ""
    echo "ACTION REQUIRED: Create table manually"
    echo "1. Go to: https://supabase.com/dashboard/project/mdijhbavkwxeudzgcyjb/sql"
    echo "2. Copy SQL from /workspace/amlbot-recovery/MANUAL-DEPLOYMENT-GUIDE.md"
    echo "3. Execute the SQL"
    echo ""
fi

# Step 2: Test edge function
echo "Step 2: Checking if track-visitor edge function exists..."
TEST_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" \
    "${SUPABASE_URL}/functions/v1/track-visitor" \
    -X POST \
    -H "apikey: ${SUPABASE_ANON_KEY}" \
    -H "Authorization: Bearer ${SUPABASE_ANON_KEY}" \
    -H "Content-Type: application/json" \
    -d '{"path": "/test", "method": "GET", "clientSignals": {"screen": {"w": 1920, "h": 1080}, "timezone": "America/New_York"}}')

if [ "$TEST_RESPONSE" = "200" ]; then
    echo "✓ Edge function track-visitor is deployed and working!"
elif [ "$TEST_RESPONSE" = "404" ]; then
    echo "❌ Edge function not found (HTTP $TEST_RESPONSE)"
    echo ""
    echo "ACTION REQUIRED: Deploy edge function manually"
    echo "1. Go to: https://supabase.com/dashboard/project/mdijhbavkwxeudzgcyjb/functions"
    echo "2. Create new function named 'track-visitor'"
    echo "3. Copy code from /workspace/amlbot-recovery/supabase/functions/track-visitor/index.ts"
    echo "4. Add environment variables:"
    echo "   - TELEGRAM_BOT_TOKEN: 7674751889:AAGj4PMlqgoJZy0Mfwz6QuUmSuMlIJ4Vpf8"
    echo "   - TELEGRAM_ADMIN_CHAT_ID: 6368654401"
    echo "5. Deploy"
    echo ""
else
    echo "⚠ Edge function returned HTTP $TEST_RESPONSE"
    echo "This might mean it exists but encountered an error"
fi

echo ""
echo "=== Deployment Status ==="
echo "Website: https://7l3iwgbtssgh.space.minimax.io"
echo ""
echo "For complete manual deployment steps, see:"
echo "  /workspace/amlbot-recovery/MANUAL-DEPLOYMENT-GUIDE.md"
echo ""
echo "For technical details, see:"
echo "  /workspace/amlbot-recovery/VISITOR-TRACKING-STATUS.md"

