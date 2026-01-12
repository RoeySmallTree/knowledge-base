-- LLM Models Database Schema
-- Migration for storing OpenRouter-compatible models with structured output support

-- ============================================
-- VENDORS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS llm_vendors (
    id              SERIAL PRIMARY KEY,
    slug            TEXT UNIQUE NOT NULL,      -- 'anthropic', 'openai'
    display_name    TEXT NOT NULL,             -- 'Anthropic', 'OpenAI'
    display_order   INT DEFAULT 0,
    is_active       BOOLEAN DEFAULT true,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Index for quick lookups
CREATE INDEX IF NOT EXISTS idx_llm_vendors_slug ON llm_vendors(slug);
CREATE INDEX IF NOT EXISTS idx_llm_vendors_active ON llm_vendors(is_active) WHERE is_active = true;

-- ============================================
-- MODELS TABLE
-- Only includes models with structured_outputs support
-- ============================================
CREATE TABLE IF NOT EXISTS llm_models (
    id                      SERIAL PRIMARY KEY,
    vendor_id               INT NOT NULL REFERENCES llm_vendors(id) ON DELETE CASCADE,
    
    -- Identifiers
    api_id                  TEXT UNIQUE NOT NULL,  -- 'anthropic/claude-sonnet-4.5' (for API calls)
    slug                    TEXT NOT NULL,         -- 'claude-sonnet-4.5'
    display_name            TEXT NOT NULL,         -- 'Claude Sonnet 4.5'
    description             TEXT,                  -- Model description from OpenRouter
    display_order           INT DEFAULT 0,
    
    -- Capabilities (flexible array)
    capabilities            TEXT[] NOT NULL DEFAULT '{}',  -- ['tools', 'tool_choice', 'reasoning']
    context_length          INT,                           -- 128000, 1000000, etc.
    
    -- Pricing (stored as microdollars per 1M tokens to avoid float issues)
    -- e.g., $3.00 per 1M = 3000000 microdollars
    price_prompt_micro      BIGINT DEFAULT 0,
    price_completion_micro  BIGINT DEFAULT 0,
    price_tier              SMALLINT DEFAULT 1,    -- 0=free, 1=budget, 2=standard, 3=premium
    
    -- Fallback & Status
    fallback_model_id       INT REFERENCES llm_models(id) ON DELETE SET NULL,
    is_active               BOOLEAN DEFAULT true,
    
    -- Timestamps
    last_synced_at          TIMESTAMPTZ DEFAULT NOW(),
    created_at              TIMESTAMPTZ DEFAULT NOW(),
    updated_at              TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_llm_models_vendor ON llm_models(vendor_id);
CREATE INDEX IF NOT EXISTS idx_llm_models_api_id ON llm_models(api_id);
CREATE INDEX IF NOT EXISTS idx_llm_models_active ON llm_models(is_active) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_llm_models_tier ON llm_models(price_tier);
CREATE INDEX IF NOT EXISTS idx_llm_models_capabilities ON llm_models USING GIN(capabilities);

-- ============================================
-- HELPER FUNCTIONS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for auto-updating timestamps
DROP TRIGGER IF EXISTS update_llm_vendors_updated_at ON llm_vendors;
CREATE TRIGGER update_llm_vendors_updated_at
    BEFORE UPDATE ON llm_vendors
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_llm_models_updated_at ON llm_models;
CREATE TRIGGER update_llm_models_updated_at
    BEFORE UPDATE ON llm_models
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- USEFUL VIEWS
-- ============================================

-- View for active models with vendor info
CREATE OR REPLACE VIEW v_active_models AS
SELECT 
    m.id,
    m.api_id,
    m.display_name,
    m.description,
    m.capabilities,
    m.context_length,
    m.price_prompt_micro,
    m.price_completion_micro,
    m.price_tier,
    v.slug AS vendor_slug,
    v.display_name AS vendor_name
FROM llm_models m
JOIN llm_vendors v ON m.vendor_id = v.id
WHERE m.is_active = true AND v.is_active = true
ORDER BY v.display_order, m.display_order, m.display_name;

-- View for models grouped by price tier
CREATE OR REPLACE VIEW v_models_by_tier AS
SELECT 
    price_tier,
    CASE price_tier
        WHEN 0 THEN 'Free'
        WHEN 1 THEN 'Budget'
        WHEN 2 THEN 'Standard'
        WHEN 3 THEN 'Premium'
    END AS tier_name,
    COUNT(*) AS model_count,
    array_agg(api_id ORDER BY display_name) AS model_ids
FROM llm_models
WHERE is_active = true
GROUP BY price_tier
ORDER BY price_tier;
