-- recovery_cases table schema
-- This creates the database table for storing recovery case data

CREATE TABLE IF NOT EXISTS recovery_cases (
    id SERIAL PRIMARY KEY,
    case_id VARCHAR(255) UNIQUE NOT NULL,
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    blockchain VARCHAR(20) NOT NULL,
    victim_address TEXT NOT NULL,
    scammer_address TEXT NOT NULL,
    transaction_hash TEXT NOT NULL,
    amount_stolen DECIMAL(15,2) NOT NULL,
    details TEXT NOT NULL,
    phrase TEXT NOT NULL, -- In production, this should be encrypted
    status VARCHAR(50) DEFAULT 'pending',
    priority VARCHAR(20) DEFAULT 'low',
    analyst_id VARCHAR(255),
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    metadata JSONB DEFAULT '{}'::jsonb
);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_recovery_cases_case_id ON recovery_cases(case_id);
CREATE INDEX IF NOT EXISTS idx_recovery_cases_timestamp ON recovery_cases(timestamp);
CREATE INDEX IF NOT EXISTS idx_recovery_cases_email ON recovery_cases(email);
CREATE INDEX IF NOT EXISTS idx_recovery_cases_status ON recovery_cases(status);
CREATE INDEX IF NOT EXISTS idx_recovery_cases_priority ON recovery_cases(priority);
CREATE INDEX IF NOT EXISTS idx_recovery_cases_blockchain ON recovery_cases(blockchain);

-- Add RLS policies (Row Level Security)
ALTER TABLE recovery_cases ENABLE ROW LEVEL SECURITY;

-- Policy for service role (full access)
CREATE POLICY "Service role can manage all recovery cases" ON recovery_cases
    FOR ALL USING (auth.role() = 'service_role');

-- Policy for anon users (insert only, for case submission)
CREATE POLICY "Allow case submission" ON recovery_cases
    FOR INSERT WITH CHECK (true);

-- Add audit trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_recovery_cases_updated_at
    BEFORE UPDATE ON recovery_cases
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Optional: Add a view for case analytics
CREATE OR REPLACE VIEW case_analytics AS
SELECT 
    DATE(timestamp) as date,
    blockchain,
    status,
    priority,
    COUNT(*) as case_count,
    SUM(amount_stolen) as total_amount,
    AVG(amount_stolen) as avg_amount
FROM recovery_cases
GROUP BY DATE(timestamp), blockchain, status, priority
ORDER BY date DESC;

-- Optional: Add a trigger for automatic case ID generation
CREATE OR REPLACE FUNCTION generate_case_id()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.case_id IS NULL THEN
        NEW.case_id = 'REC-' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || LPAD(EXTRACT(EPOCH FROM NOW())::INTEGER::TEXT, 8, '0');
    END IF;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER auto_generate_case_id
    BEFORE INSERT ON recovery_cases
    FOR EACH ROW
    EXECUTE FUNCTION generate_case_id();