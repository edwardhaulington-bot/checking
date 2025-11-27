#!/usr/bin/env python3
import os
import json
import requests
from pathlib import Path

# Load environment variables
env_file = Path('/workspace/amlbot-recovery/.env.local')
env_vars = {}
with open(env_file) as f:
    for line in f:
        line = line.strip()
        if line and not line.startswith('#'):
            key, value = line.split('=', 1)
            env_vars[key] = value

SUPABASE_URL = env_vars['SUPABASE_URL']
SERVICE_ROLE_KEY = env_vars['SUPABASE_SERVICE_ROLE_KEY']
PROJECT_REF = SUPABASE_URL.split('//')[1].split('.')[0]

print(f"Deploying to Supabase project: {PROJECT_REF}")
print(f"URL: {SUPABASE_URL}")

# Check what tables exist
print("\n=== Checking existing tables ===")
tables_response = requests.get(
    f"{SUPABASE_URL}/rest/v1/",
    headers={
        'apikey': SERVICE_ROLE_KEY,
        'Authorization': f'Bearer {SERVICE_ROLE_KEY}',
        'Accept': 'application/json'
    }
)
print(f"Tables endpoint status: {tables_response.status_code}")
if tables_response.status_code == 200:
    print(f"Available endpoints: {tables_response.text[:500]}")

# Try to list all tables using pg_catalog
print("\n=== Trying to query pg_catalog ===")
catalog_response = requests.get(
    f"{SUPABASE_URL}/rest/v1/",
    headers={
        'apikey': SERVICE_ROLE_KEY,
        'Authorization': f'Bearer {SERVICE_ROLE_KEY}'
    }
)
print(f"Catalog status: {catalog_response.status_code}")
print(f"Response: {catalog_response.text[:200]}")

# Since REST API doesn't support DDL, we need to use Supabase Management API
# or use the SQL editor endpoint which requires Management API token
print("\n=== Solution Required ===")
print("The Supabase REST API (PostgREST) does not support DDL operations.")
print("To create tables, we need ONE of these approaches:")
print("1. Supabase Management API token (requires batch_create_tables tool)")
print("2. Direct PostgreSQL connection (psql with connection string)")
print("3. Supabase Dashboard SQL Editor (manual)")
print()
print("Checking for PostgreSQL connection options...")

# Try to get database connection info
print("\n=== Checking for psql availability ===")
import subprocess
try:
    result = subprocess.run(['which', 'psql'], capture_output=True, text=True)
    if result.returncode == 0:
        print(f"✓ psql found at: {result.stdout.strip()}")
        print("Can create table using direct PostgreSQL connection if we have connection string")
    else:
        print("✗ psql not available")
except Exception as e:
    print(f"✗ psql check failed: {e}")

print("\n=== Alternative: Use Supabase project-specific API ===")
print(f"Project Reference: {PROJECT_REF}")
print("We can try the database API endpoint...")

# Try database-specific endpoint
db_response = requests.post(
    f"https://api.supabase.com/v1/projects/{PROJECT_REF}/database/query",
    headers={
        'apikey': SERVICE_ROLE_KEY,
        'Authorization': f'Bearer {SERVICE_ROLE_KEY}',
        'Content-Type': 'application/json'
    },
    json={
        'query': 'SELECT version();'
    }
)
print(f"Database query endpoint status: {db_response.status_code}")
print(f"Response: {db_response.text[:300]}")

print("\n=== RECOMMENDATION ===")
print("Use batch_create_tables or batch_deploy_edge_functions tools")
print("These tools will request proper authentication via ask_for_supabase_auth")
