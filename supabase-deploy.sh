#!/bin/bash
source .env.local

# Set Supabase project reference
PROJECT_REF="mdijhbavkwxeudzgcyjb"

echo "Deploying visitor_logs table..."
# Create table using SQL via REST API
curl -X POST "https://${PROJECT_REF}.supabase.co/rest/v1/rpc" \
  -H "apikey: ${SUPABASE_SERVICE_ROLE_KEY}" \
  -H "Authorization: Bearer ${SUPABASE_SERVICE_ROLE_KEY}" \
  -H "Content-Type: application/json"

echo "Done!"
