# Manual Deployment Guide for Visitor Tracking System

## Current Status
- ✅ Website deployed: https://7l3iwgbtssgh.space.minimax.io
- ✅ Frontend tracking code ready with Supabase credentials
- ✅ Edge function code complete: `/workspace/amlbot-recovery/supabase/functions/track-visitor/index.ts`
- ⚠️ Backend infrastructure not deployed (table + edge function)

## Why Backend Deployment Failed
The Supabase REST API (PostgREST) does not support DDL operations (CREATE TABLE, etc.). These operations require:
1. Supabase Management API token (via batch_create_tables tool), OR
2. Direct PostgreSQL connection (psql), OR  
3. Manual deployment via Supabase Dashboard

## Manual Deployment Steps

### Step 1: Create visitor_logs Table

Go to Supabase Dashboard SQL Editor:
https://supabase.com/dashboard/project/mdijhbavkwxeudzgcyjb/sql

Execute this SQL:

```sql
CREATE TABLE IF NOT EXISTS visitor_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    ip TEXT NOT NULL,
    ip_hash TEXT NOT NULL,
    country TEXT,
    country_code TEXT,
    user_agent TEXT,
    accept_lang TEXT,
    referer TEXT,
    path TEXT,
    method TEXT,
    screen_width INTEGER,
    screen_height INTEGER,
    timezone TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_visitor_logs_timestamp ON visitor_logs(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_visitor_logs_country ON visitor_logs(country);

ALTER TABLE visitor_logs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow edge function writes" ON visitor_logs;
CREATE POLICY "Allow edge function writes" ON visitor_logs
  FOR INSERT
  WITH CHECK (auth.role() IN ('anon', 'service_role'));

DROP POLICY IF EXISTS "Allow service role to read" ON visitor_logs
  FOR SELECT
  USING (auth.role() = 'service_role');
```

### Step 2: Deploy Edge Function

Go to Supabase Dashboard Edge Functions:
https://supabase.com/dashboard/project/mdijhbavkwxeudzgcyjb/functions

1. Click "Create a new function"
2. Name: `track-visitor`
3. Copy the code from `/workspace/amlbot-recovery/supabase/functions/track-visitor/index.ts`
4. Click "Deploy"

### Step 3: Set Environment Variables (Edge Function)

In the Edge Function settings, add these environment variables:
- `TELEGRAM_BOT_TOKEN`: 7674751889:AAGj4PMlqgoJZy0Mfwz6QuUmSuMlIJ4Vpf8
- `TELEGRAM_ADMIN_CHAT_ID`: 6368654401

(Note: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are automatically available)

### Step 4: Test the System

1. Visit https://7l3iwgbtssgh.space.minimax.io
2. Navigate between pages
3. Check Telegram chat (ID: 6368654401) for visitor notifications
4. Check Supabase Dashboard → Table Editor → visitor_logs for data

## Expected Telegram Notification

```
🌐 NEW VISITOR
📍 Country: United States (US)
🌐 IP: 192.168.1.100
🌍 Path: /contact-form
📊 Screen: 1920×1080
⏰ Timezone: America/New_York
🔗 Referer: https://google.com
📱 Device: Chrome
🕒 Time: 22:30:15
```

## Automated Deployment (When Coordinator Available)

The coordinator can enable automated deployment by calling:
1. `ask_for_supabase_auth` - Get Management API token
2. `batch_create_tables` - Create visitor_logs table
3. `batch_deploy_edge_functions` - Deploy track-visitor function

This will complete the deployment automatically without manual steps.

## Troubleshooting

### Table Not Found Error
If you see "Could not find the table 'public.visitor_logs'" after creating the table:
- Wait 10-30 seconds for PostgREST schema cache to refresh
- Or restart PostgREST from Dashboard → Settings → API

### Edge Function 500 Error
Check edge function logs in Dashboard → Edge Functions → track-visitor → Logs

Common issues:
- Missing environment variables
- RLS policy blocking inserts
- IP geolocation API rate limit

### No Telegram Notifications
- Verify bot token is correct
- Check chat ID is correct  
- Ensure bot has access to send messages to the chat
- Check edge function logs for Telegram API errors

## Files Reference

- Frontend hook: `/workspace/amlbot-recovery/src/hooks/useVisitorTracking.ts`
- Edge function: `/workspace/amlbot-recovery/supabase/functions/track-visitor/index.ts`
- App integration: `/workspace/amlbot-recovery/src/App.tsx`
- Environment: `/workspace/amlbot-recovery/.env.local`
