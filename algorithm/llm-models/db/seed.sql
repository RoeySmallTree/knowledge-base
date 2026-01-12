-- LLM Models Seed Data
-- Generated: 2026-01-06T09:24:22.025Z
-- Total vendors: 36
-- Total models: 219

-- ============================================
-- VENDORS
-- ============================================

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('alibaba', 'Alibaba', 0)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('allenai', 'Allenai', 10)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('anthropic', 'Anthropic', 20)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('arcee-ai', 'Arcee Ai', 30)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('baidu', 'Baidu', 40)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('bytedance-seed', 'Bytedance Seed', 50)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('cohere', 'Cohere', 60)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('deepcogito', 'Deepcogito', 70)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('deepseek', 'Deepseek', 80)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('essentialai', 'Essentialai', 90)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('google', 'Google', 100)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('gryphe', 'Gryphe', 110)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('inception', 'Inception', 120)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('kwaipilot', 'Kwaipilot', 130)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('meta-llama', 'Meta Llama', 140)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('microsoft', 'Microsoft', 150)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('minimax', 'Minimax', 160)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('mistralai', 'Mistralai', 170)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('moonshotai', 'Moonshotai', 180)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('neversleep', 'Neversleep', 190)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('nex-agi', 'Nex Agi', 200)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('nousresearch', 'Nousresearch', 210)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('nvidia', 'Nvidia', 220)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('openai', 'Openai', 230)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('opengvlab', 'Opengvlab', 240)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('prime-intellect', 'Prime Intellect', 250)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('qwen', 'Qwen', 260)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('sao10k', 'Sao10k', 270)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('stepfun-ai', 'Stepfun Ai', 280)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('tencent', 'Tencent', 290)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('thedrummer', 'Thedrummer', 300)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('tngtech', 'Tngtech', 310)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('undi95', 'Undi95', 320)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('venice', 'Venice', 330)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('x-ai', 'X Ai', 340)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

INSERT INTO llm_vendors (slug, display_name, display_order)
VALUES ('z-ai', 'Z Ai', 350)
ON CONFLICT (slug) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    updated_at = NOW();

-- ============================================
-- MODELS
-- ============================================

-- bytedance-seed models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'bytedance-seed'),
    'bytedance-seed/seed-1.6-flash',
    'seed-1.6-flash',
    'ByteDance Seed: Seed 1.6 Flash',
    'Seed 1.6 Flash is an ultra-fast multimodal deep thinking model by ByteDance Seed, supporting both text and visual understanding.',
    0,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    262144,
    75000,
    300000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'bytedance-seed'),
    'bytedance-seed/seed-1.6',
    'seed-1.6',
    'ByteDance Seed: Seed 1.6',
    'Seed 1.6 is a general-purpose model released by the ByteDance Seed team.',
    10,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    262144,
    250000,
    2000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- minimax models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'minimax'),
    'minimax/minimax-m2.1',
    'minimax-m2.1',
    'MiniMax: MiniMax M2.1',
    'MiniMax-M2.1 is a lightweight, state-of-the-art large language model optimized for coding, agentic workflows, and modern application development.',
    0,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    196608,
    120000,
    480000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'minimax'),
    'minimax/minimax-m2',
    'minimax-m2',
    'MiniMax: MiniMax M2',
    'MiniMax-M2 is a compact, high-efficiency large language model optimized for end-to-end coding and agentic workflows.',
    10,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    196608,
    200000,
    1000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- z-ai models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'z-ai'),
    'z-ai/glm-4.7',
    'glm-4.7',
    'Z.AI: GLM 4.7',
    'GLM-4.7 is Z.AI’s latest flagship model, featuring upgrades in two key areas: enhanced programming capabilities and more stable multi-step reasoning/execution.',
    0,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    202752,
    160000,
    800000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'z-ai'),
    'z-ai/glm-4.6v',
    'glm-4.6v',
    'Z.AI: GLM 4.6V',
    'GLM-4.6V is a large multimodal model designed for high-fidelity visual understanding and long-context reasoning across images, documents, and mixed media.',
    10,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    131072,
    300000,
    900000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'z-ai'),
    'z-ai/glm-4.6',
    'glm-4.6',
    'Z.AI: GLM 4.6',
    'Compared with GLM-4.5, this generation brings several key improvements:

Longer context window: The context window has been expanded from 128K to 200K tokens, enabling the model to handle more complex agentic tasks.
Superior coding performance: The model achieves higher scores on code benchmarks and demonstrates better real-world performance in applications such as Claude Code、Cline、Roo Code and Kilo Code, including improvements in generating visually polished front-end pages.
Advanced reason...',
    20,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    202752,
    350000,
    1500000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'z-ai'),
    'z-ai/glm-4.6:exacto',
    'glm-4.6:exacto',
    'Z.AI: GLM 4.6 (exacto)',
    'Compared with GLM-4.5, this generation brings several key improvements:

Longer context window: The context window has been expanded from 128K to 200K tokens, enabling the model to handle more complex agentic tasks.
Superior coding performance: The model achieves higher scores on code benchmarks and demonstrates better real-world performance in applications such as Claude Code、Cline、Roo Code and Kilo Code, including improvements in generating visually polished front-end pages.
Advanced reason...',
    30,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    204800,
    440000,
    1760000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'z-ai'),
    'z-ai/glm-4.5v',
    'glm-4.5v',
    'Z.AI: GLM 4.5V',
    'GLM-4.5V is a vision-language foundation model for multimodal agent applications.',
    40,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    65536,
    600000,
    1800000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'z-ai'),
    'z-ai/glm-4.5',
    'glm-4.5',
    'Z.AI: GLM 4.5',
    'GLM-4.5 is our latest flagship foundation model, purpose-built for agent-based applications.',
    50,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    131072,
    350000,
    1550000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'z-ai'),
    'z-ai/glm-4.5-air',
    'glm-4.5-air',
    'Z.AI: GLM 4.5 Air',
    'GLM-4.5-Air is the lightweight variant of our latest flagship model family, also purpose-built for agent-centric applications.',
    60,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    131072,
    50000,
    220000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- google models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'google'),
    'google/gemini-3-flash-preview',
    'gemini-3-flash-preview',
    'Google: Gemini 3 Flash Preview',
    'Gemini 3 Flash Preview is a high speed, high value thinking model designed for agentic workflows, multi turn chat, and coding assistance.',
    0,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    1048576,
    500000,
    3000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'google'),
    'google/gemini-3-pro-image-preview',
    'gemini-3-pro-image-preview',
    'Google: Nano Banana Pro (Gemini 3 Pro Image Preview)',
    'Nano Banana Pro is Google’s most advanced image-generation and editing model, built on Gemini 3 Pro.',
    10,
    ARRAY['reasoning'],
    65536,
    2000000,
    12000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'google'),
    'google/gemini-3-pro-preview',
    'gemini-3-pro-preview',
    'Google: Gemini 3 Pro Preview',
    'Gemini 3 Pro is Google’s flagship frontier model for high-precision multimodal reasoning, combining strong performance across text, image, video, audio, and code with a 1M-token context window.',
    20,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    1048576,
    2000000,
    12000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'google'),
    'google/gemini-2.5-flash-image',
    'gemini-2.5-flash-image',
    'Google: Gemini 2.5 Flash Image (Nano Banana)',
    'Gemini 2.5 Flash Image, a.k.a.',
    30,
    '{}'::TEXT[],
    32768,
    300000,
    2500000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'google'),
    'google/gemini-2.5-flash-preview-09-2025',
    'gemini-2.5-flash-preview-09-2025',
    'Google: Gemini 2.5 Flash Preview 09-2025',
    'Gemini 2.5 Flash Preview September 2025 Checkpoint is Google''s state-of-the-art workhorse model, specifically designed for advanced reasoning, coding, mathematics, and scientific tasks.',
    40,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    1048576,
    300000,
    2500000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'google'),
    'google/gemini-2.5-flash-lite-preview-09-2025',
    'gemini-2.5-flash-lite-preview-09-2025',
    'Google: Gemini 2.5 Flash Lite Preview 09-2025',
    'Gemini 2.5 Flash-Lite is a lightweight reasoning model in the Gemini 2.5 family, optimized for ultra-low latency and cost efficiency.',
    50,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    1048576,
    100000,
    400000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'google'),
    'google/gemini-2.5-flash-image-preview',
    'gemini-2.5-flash-image-preview',
    'Google: Gemini 2.5 Flash Image Preview (Nano Banana)',
    'Gemini 2.5 Flash Image Preview, a.k.a.',
    60,
    '{}'::TEXT[],
    32768,
    300000,
    2500000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'google'),
    'google/gemini-2.5-flash-lite',
    'gemini-2.5-flash-lite',
    'Google: Gemini 2.5 Flash Lite',
    'Gemini 2.5 Flash-Lite is a lightweight reasoning model in the Gemini 2.5 family, optimized for ultra-low latency and cost efficiency.',
    70,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    1048576,
    100000,
    400000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'google'),
    'google/gemini-2.5-flash',
    'gemini-2.5-flash',
    'Google: Gemini 2.5 Flash',
    'Gemini 2.5 Flash is Google''s state-of-the-art workhorse model, specifically designed for advanced reasoning, coding, mathematics, and scientific tasks.',
    80,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    1048576,
    300000,
    2500000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'google'),
    'google/gemini-2.5-pro',
    'gemini-2.5-pro',
    'Google: Gemini 2.5 Pro',
    'Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks.',
    90,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    1048576,
    1250000,
    10000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'google'),
    'google/gemini-2.5-pro-preview',
    'gemini-2.5-pro-preview',
    'Google: Gemini 2.5 Pro Preview 06-05',
    'Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks.',
    100,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    1048576,
    1250000,
    10000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'google'),
    'google/gemini-2.5-pro-preview-05-06',
    'gemini-2.5-pro-preview-05-06',
    'Google: Gemini 2.5 Pro Preview 05-06',
    'Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks.',
    110,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    1048576,
    1250000,
    10000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'google'),
    'google/gemma-3-4b-it:free',
    'gemma-3-4b-it:free',
    'Google: Gemma 3 4B (free)',
    'Gemma 3 introduces multimodality, supporting vision-language input and text outputs.',
    120,
    '{}'::TEXT[],
    32768,
    0,
    0,
    0
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'google'),
    'google/gemma-3-12b-it',
    'gemma-3-12b-it',
    'Google: Gemma 3 12B',
    'Gemma 3 introduces multimodality, supporting vision-language input and text outputs.',
    130,
    '{}'::TEXT[],
    131072,
    30000,
    100000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'google'),
    'google/gemma-3-27b-it:free',
    'gemma-3-27b-it:free',
    'Google: Gemma 3 27B (free)',
    'Gemma 3 introduces multimodality, supporting vision-language input and text outputs.',
    140,
    ARRAY['tools', 'tool_choice'],
    131072,
    0,
    0,
    0
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'google'),
    'google/gemma-3-27b-it',
    'gemma-3-27b-it',
    'Google: Gemma 3 27B',
    'Gemma 3 introduces multimodality, supporting vision-language input and text outputs.',
    150,
    ARRAY['tools', 'tool_choice'],
    131072,
    36000,
    64000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'google'),
    'google/gemini-2.0-flash-lite-001',
    'gemini-2.0-flash-lite-001',
    'Google: Gemini 2.0 Flash Lite',
    'Gemini 2.0 Flash Lite offers a significantly faster time to first token (TTFT) compared to [Gemini Flash 1.5](/google/gemini-flash-1.5), while maintaining quality on par with larger models like [Gemini Pro 1.5](/google/gemini-pro-1.5), all at extremely economical token prices.',
    160,
    ARRAY['tools', 'tool_choice'],
    1048576,
    75000,
    300000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'google'),
    'google/gemini-2.0-flash-001',
    'gemini-2.0-flash-001',
    'Google: Gemini 2.0 Flash',
    'Gemini Flash 2.0 offers a significantly faster time to first token (TTFT) compared to [Gemini Flash 1.5](/google/gemini-flash-1.5), while maintaining quality on par with larger models like [Gemini Pro 1.5](/google/gemini-pro-1.5).',
    170,
    ARRAY['tools', 'tool_choice'],
    1048576,
    100000,
    400000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'google'),
    'google/gemma-2-27b-it',
    'gemma-2-27b-it',
    'Google: Gemma 2 27B',
    'Gemma 2 27B by Google is an open model built from the same research and technology used to create the [Gemini models](/models?q=gemini).

Gemma models are well-suited for a variety of text generation tasks, including question answering, summarization, and reasoning.

See the [launch announcement](https://blog.google/technology/developers/google-gemma-2/) for more details.',
    180,
    '{}'::TEXT[],
    8192,
    650000,
    650000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- allenai models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'allenai'),
    'allenai/olmo-3.1-32b-think:free',
    'olmo-3.1-32b-think:free',
    'AllenAI: Olmo 3.1 32B Think (free)',
    'Olmo 3.1 32B Think is a large-scale, 32-billion-parameter model designed for deep reasoning, complex multi-step logic, and advanced instruction following.',
    0,
    ARRAY['reasoning'],
    65536,
    0,
    0,
    0
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'allenai'),
    'allenai/olmo-3-32b-think:free',
    'olmo-3-32b-think:free',
    'AllenAI: Olmo 3 32B Think (free)',
    'Olmo 3 32B Think is a large-scale, 32-billion-parameter model purpose-built for deep reasoning, complex logic chains and advanced instruction-following scenarios.',
    10,
    ARRAY['reasoning'],
    65536,
    0,
    0,
    0
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'allenai'),
    'allenai/olmo-3-7b-instruct',
    'olmo-3-7b-instruct',
    'AllenAI: Olmo 3 7B Instruct',
    'Olmo 3 7B Instruct is a supervised instruction-fine-tuned variant of the Olmo 3 7B base model, optimized for instruction-following, question-answering, and natural conversational dialogue.',
    20,
    ARRAY['tools', 'tool_choice'],
    65536,
    100000,
    200000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'allenai'),
    'allenai/olmo-3-7b-think',
    'olmo-3-7b-think',
    'AllenAI: Olmo 3 7B Think',
    'Olmo 3 7B Think is a research-oriented language model in the Olmo family designed for advanced reasoning and instruction-driven tasks.',
    30,
    ARRAY['reasoning'],
    65536,
    120000,
    200000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- nvidia models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'nvidia'),
    'nvidia/nemotron-3-nano-30b-a3b',
    'nemotron-3-nano-30b-a3b',
    'NVIDIA: Nemotron 3 Nano 30B A3B',
    'NVIDIA Nemotron 3 Nano 30B A3B is a small language MoE model with highest compute efficiency and accuracy for developers to build specialized agentic AI systems.

The model is fully open with open-weights, datasets and recipes so developers can easily
customize, optimize, and deploy the model on their infrastructure for maximum privacy and
security.

Note: For the free endpoint, all prompts and output are logged to improve the provider''s model and its product and services.',
    0,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    262144,
    60000,
    240000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'nvidia'),
    'nvidia/nemotron-nano-9b-v2:free',
    'nemotron-nano-9b-v2:free',
    'NVIDIA: Nemotron Nano 9B V2 (free)',
    'NVIDIA-Nemotron-Nano-9B-v2 is a large language model (LLM) trained from scratch by NVIDIA, and designed as a unified model for both reasoning and non-reasoning tasks.',
    10,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    128000,
    0,
    0,
    0
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'nvidia'),
    'nvidia/llama-3.1-nemotron-ultra-253b-v1',
    'llama-3.1-nemotron-ultra-253b-v1',
    'NVIDIA: Llama 3.1 Nemotron Ultra 253B v1',
    'Llama-3.1-Nemotron-Ultra-253B-v1 is a large language model (LLM) optimized for advanced reasoning, human-interactive chat, retrieval-augmented generation (RAG), and tool-calling tasks.',
    20,
    ARRAY['reasoning'],
    131072,
    600000,
    1800000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- openai models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-5.2-chat',
    'gpt-5.2-chat',
    'OpenAI: GPT-5.2 Chat',
    'GPT-5.2 Chat (AKA Instant) is the fast, lightweight member of the 5.2 family, optimized for low-latency chat while retaining strong general intelligence.',
    0,
    ARRAY['tools', 'tool_choice'],
    128000,
    1750000,
    14000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-5.2-pro',
    'gpt-5.2-pro',
    'OpenAI: GPT-5.2 Pro',
    'GPT-5.2 Pro is OpenAI’s most advanced model, offering major improvements in agentic coding and long context performance over GPT-5 Pro.',
    10,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    400000,
    21000000,
    168000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-5.2',
    'gpt-5.2',
    'OpenAI: GPT-5.2',
    'GPT-5.2 is the latest frontier-grade model in the GPT-5 series, offering stronger agentic and long context perfomance compared to GPT-5.1.',
    20,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    400000,
    1750000,
    14000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-5.1-codex-max',
    'gpt-5.1-codex-max',
    'OpenAI: GPT-5.1-Codex-Max',
    'GPT-5.1-Codex-Max is OpenAI’s latest agentic coding model, designed for long-running, high-context software development tasks.',
    30,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    400000,
    1250000,
    10000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-5.1',
    'gpt-5.1',
    'OpenAI: GPT-5.1',
    'GPT-5.1 is the latest frontier-grade model in the GPT-5 series, offering stronger general-purpose reasoning, improved instruction adherence, and a more natural conversational style compared to GPT-5.',
    40,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    400000,
    1250000,
    10000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-5.1-chat',
    'gpt-5.1-chat',
    'OpenAI: GPT-5.1 Chat',
    'GPT-5.1 Chat (AKA Instant is the fast, lightweight member of the 5.1 family, optimized for low-latency chat while retaining strong general intelligence.',
    50,
    ARRAY['tools', 'tool_choice'],
    128000,
    1250000,
    10000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-5.1-codex',
    'gpt-5.1-codex',
    'OpenAI: GPT-5.1-Codex',
    'GPT-5.1-Codex is a specialized version of GPT-5.1 optimized for software engineering and coding workflows.',
    60,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    400000,
    1250000,
    10000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-5.1-codex-mini',
    'gpt-5.1-codex-mini',
    'OpenAI: GPT-5.1-Codex-Mini',
    'GPT-5.1-Codex-Mini is a smaller and faster version of GPT-5.1-Codex',
    70,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    400000,
    250000,
    2000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-5-image-mini',
    'gpt-5-image-mini',
    'OpenAI: GPT-5 Image Mini',
    'GPT-5 Image Mini combines OpenAI''s advanced language capabilities, powered by [GPT-5 Mini](https://openrouter.ai/openai/gpt-5-mini), with GPT Image 1 Mini for efficient image generation.',
    80,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    400000,
    2500000,
    2000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-5-image',
    'gpt-5-image',
    'OpenAI: GPT-5 Image',
    '[GPT-5](https://openrouter.ai/openai/gpt-5) Image combines OpenAI''s GPT-5 model with state-of-the-art image generation capabilities.',
    90,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    400000,
    10000000,
    10000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/o3-deep-research',
    'o3-deep-research',
    'OpenAI: o3 Deep Research',
    'o3-deep-research is OpenAI''s advanced model for deep research, designed to tackle complex, multi-step research tasks.

Note: This model always uses the ''web_search'' tool which adds additional cost.',
    100,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    200000,
    10000000,
    40000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/o4-mini-deep-research',
    'o4-mini-deep-research',
    'OpenAI: o4 Mini Deep Research',
    'o4-mini-deep-research is OpenAI''s faster, more affordable deep research model—ideal for tackling complex, multi-step research tasks.

Note: This model always uses the ''web_search'' tool which adds additional cost.',
    110,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    200000,
    2000000,
    8000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-5-pro',
    'gpt-5-pro',
    'OpenAI: GPT-5 Pro',
    'GPT-5 Pro is OpenAI’s most advanced model, offering major improvements in reasoning, code quality, and user experience.',
    120,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    400000,
    15000000,
    120000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-5-codex',
    'gpt-5-codex',
    'OpenAI: GPT-5 Codex',
    'GPT-5-Codex is a specialized version of GPT-5 optimized for software engineering and coding workflows.',
    130,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    400000,
    1250000,
    10000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-4o-audio-preview',
    'gpt-4o-audio-preview',
    'OpenAI: GPT-4o Audio',
    'The gpt-4o-audio-preview model adds support for audio inputs as prompts.',
    140,
    ARRAY['tools', 'tool_choice'],
    128000,
    2500000,
    10000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-5-chat',
    'gpt-5-chat',
    'OpenAI: GPT-5 Chat',
    'GPT-5 Chat is designed for advanced, natural, multimodal, and context-aware conversations for enterprise applications.',
    150,
    '{}'::TEXT[],
    128000,
    1250000,
    10000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-5',
    'gpt-5',
    'OpenAI: GPT-5',
    'GPT-5 is OpenAI’s most advanced model, offering major improvements in reasoning, code quality, and user experience.',
    160,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    400000,
    1250000,
    10000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-5-mini',
    'gpt-5-mini',
    'OpenAI: GPT-5 Mini',
    'GPT-5 Mini is a compact version of GPT-5, designed to handle lighter-weight reasoning tasks.',
    170,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    400000,
    250000,
    2000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-5-nano',
    'gpt-5-nano',
    'OpenAI: GPT-5 Nano',
    'GPT-5-Nano is the smallest and fastest variant in the GPT-5 system, optimized for developer tools, rapid interactions, and ultra-low latency environments.',
    180,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    400000,
    50000,
    400000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-oss-120b',
    'gpt-oss-120b',
    'OpenAI: gpt-oss-120b',
    'gpt-oss-120b is an open-weight, 117B-parameter Mixture-of-Experts (MoE) language model from OpenAI designed for high-reasoning, agentic, and general-purpose production use cases.',
    190,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    131072,
    20000,
    100000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-oss-120b:exacto',
    'gpt-oss-120b:exacto',
    'OpenAI: gpt-oss-120b (exacto)',
    'gpt-oss-120b is an open-weight, 117B-parameter Mixture-of-Experts (MoE) language model from OpenAI designed for high-reasoning, agentic, and general-purpose production use cases.',
    200,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    131072,
    39000,
    190000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-oss-20b',
    'gpt-oss-20b',
    'OpenAI: gpt-oss-20b',
    'gpt-oss-20b is an open-weight 21B parameter model released by OpenAI under the Apache 2.0 license.',
    210,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    131072,
    16000,
    60000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/o3-pro',
    'o3-pro',
    'OpenAI: o3 Pro',
    'The o-series of models are trained with reinforcement learning to think before they answer and perform complex reasoning.',
    220,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    200000,
    20000000,
    80000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/codex-mini',
    'codex-mini',
    'OpenAI: Codex Mini',
    'codex-mini-latest is a fine-tuned version of o4-mini specifically for use in Codex CLI.',
    230,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    200000,
    1500000,
    6000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/o4-mini-high',
    'o4-mini-high',
    'OpenAI: o4 Mini High',
    'OpenAI o4-mini-high is the same model as [o4-mini](/openai/o4-mini) with reasoning_effort set to high.',
    240,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    200000,
    1100000,
    4400000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/o3',
    'o3',
    'OpenAI: o3',
    'o3 is a well-rounded and powerful model across domains.',
    250,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    200000,
    2000000,
    8000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/o4-mini',
    'o4-mini',
    'OpenAI: o4 Mini',
    'OpenAI o4-mini is a compact reasoning model in the o-series, optimized for fast, cost-efficient performance while retaining strong multimodal and agentic capabilities.',
    260,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    200000,
    1100000,
    4400000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-4.1',
    'gpt-4.1',
    'OpenAI: GPT-4.1',
    'GPT-4.1 is a flagship large language model optimized for advanced instruction following, real-world software engineering, and long-context reasoning.',
    270,
    ARRAY['tools', 'tool_choice'],
    1047576,
    2000000,
    8000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-4.1-mini',
    'gpt-4.1-mini',
    'OpenAI: GPT-4.1 Mini',
    'GPT-4.1 Mini is a mid-sized model delivering performance competitive with GPT-4o at substantially lower latency and cost.',
    280,
    ARRAY['tools', 'tool_choice'],
    1047576,
    400000,
    1600000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-4.1-nano',
    'gpt-4.1-nano',
    'OpenAI: GPT-4.1 Nano',
    'For tasks that demand low latency, GPT‑4.1 nano is the fastest and cheapest model in the GPT-4.1 series.',
    290,
    ARRAY['tools', 'tool_choice'],
    1047576,
    100000,
    400000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/o1-pro',
    'o1-pro',
    'OpenAI: o1-pro',
    'The o1 series of models are trained with reinforcement learning to think before they answer and perform complex reasoning.',
    300,
    ARRAY['reasoning'],
    200000,
    150000000,
    600000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-4o-mini-search-preview',
    'gpt-4o-mini-search-preview',
    'OpenAI: GPT-4o-mini Search Preview',
    'GPT-4o mini Search Preview is a specialized model for web search in Chat Completions.',
    310,
    ARRAY['web_search'],
    128000,
    150000,
    600000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-4o-search-preview',
    'gpt-4o-search-preview',
    'OpenAI: GPT-4o Search Preview',
    'GPT-4o Search Previewis a specialized model for web search in Chat Completions.',
    320,
    ARRAY['web_search'],
    128000,
    2500000,
    10000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/o3-mini-high',
    'o3-mini-high',
    'OpenAI: o3 Mini High',
    'OpenAI o3-mini-high is the same model as [o3-mini](/openai/o3-mini) with reasoning_effort set to high.',
    330,
    ARRAY['tools', 'tool_choice'],
    200000,
    1100000,
    4400000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/o3-mini',
    'o3-mini',
    'OpenAI: o3 Mini',
    'OpenAI o3-mini is a cost-efficient language model optimized for STEM reasoning tasks, particularly excelling in science, mathematics, and coding.

This model supports the `reasoning_effort` parameter, which can be set to "high", "medium", or "low" to control the thinking time of the model.',
    340,
    ARRAY['tools', 'tool_choice'],
    200000,
    1100000,
    4400000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/o1',
    'o1',
    'OpenAI: o1',
    'The latest and strongest model family from OpenAI, o1 is designed to spend more time thinking before responding.',
    350,
    ARRAY['tools', 'tool_choice'],
    200000,
    15000000,
    60000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-4o-2024-11-20',
    'gpt-4o-2024-11-20',
    'OpenAI: GPT-4o (2024-11-20)',
    'The 2024-11-20 version of GPT-4o offers a leveled-up creative writing ability with more natural, engaging, and tailored writing to improve relevance & readability.',
    360,
    ARRAY['tools', 'tool_choice', 'web_search'],
    128000,
    2500000,
    10000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/chatgpt-4o-latest',
    'chatgpt-4o-latest',
    'OpenAI: ChatGPT-4o',
    'OpenAI ChatGPT 4o is continually updated by OpenAI to point to the current version of GPT-4o used by ChatGPT.',
    370,
    '{}'::TEXT[],
    128000,
    5000000,
    15000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-4o-2024-08-06',
    'gpt-4o-2024-08-06',
    'OpenAI: GPT-4o (2024-08-06)',
    'The 2024-08-06 version of GPT-4o offers improved performance in structured outputs, with the ability to supply a JSON schema in the respone_format.',
    380,
    ARRAY['tools', 'tool_choice', 'web_search'],
    128000,
    2500000,
    10000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-4o-mini-2024-07-18',
    'gpt-4o-mini-2024-07-18',
    'OpenAI: GPT-4o-mini (2024-07-18)',
    'GPT-4o mini is OpenAI''s newest model after [GPT-4 Omni](/models/openai/gpt-4o), supporting both text and image inputs with text outputs.

As their most advanced small model, it is many multiples more affordable than other recent frontier models, and more than 60% cheaper than [GPT-3.5 Turbo](/models/openai/gpt-3.5-turbo).',
    390,
    ARRAY['tools', 'tool_choice', 'web_search'],
    128000,
    150000,
    600000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-4o-mini',
    'gpt-4o-mini',
    'OpenAI: GPT-4o-mini',
    'GPT-4o mini is OpenAI''s newest model after [GPT-4 Omni](/models/openai/gpt-4o), supporting both text and image inputs with text outputs.

As their most advanced small model, it is many multiples more affordable than other recent frontier models, and more than 60% cheaper than [GPT-3.5 Turbo](/models/openai/gpt-3.5-turbo).',
    400,
    ARRAY['tools', 'tool_choice', 'web_search'],
    128000,
    150000,
    600000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-4o-2024-05-13',
    'gpt-4o-2024-05-13',
    'OpenAI: GPT-4o (2024-05-13)',
    'GPT-4o ("o" for "omni") is OpenAI''s latest AI model, supporting both text and image inputs with text outputs.',
    410,
    ARRAY['tools', 'tool_choice', 'web_search'],
    128000,
    5000000,
    15000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-4o',
    'gpt-4o',
    'OpenAI: GPT-4o',
    'GPT-4o ("o" for "omni") is OpenAI''s latest AI model, supporting both text and image inputs with text outputs.',
    420,
    ARRAY['tools', 'tool_choice', 'web_search'],
    128000,
    2500000,
    10000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-4o:extended',
    'gpt-4o:extended',
    'OpenAI: GPT-4o (extended)',
    'GPT-4o ("o" for "omni") is OpenAI''s latest AI model, supporting both text and image inputs with text outputs.',
    430,
    ARRAY['tools', 'tool_choice', 'web_search'],
    128000,
    6000000,
    18000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-4-turbo',
    'gpt-4-turbo',
    'OpenAI: GPT-4 Turbo',
    'The latest GPT-4 Turbo model with vision capabilities.',
    440,
    ARRAY['tools', 'tool_choice'],
    128000,
    10000000,
    30000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-3.5-turbo-0613',
    'gpt-3.5-turbo-0613',
    'OpenAI: GPT-3.5 Turbo (older v0613)',
    'GPT-3.5 Turbo is OpenAI''s fastest model.',
    450,
    ARRAY['tools', 'tool_choice'],
    4095,
    1000000,
    2000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-4-turbo-preview',
    'gpt-4-turbo-preview',
    'OpenAI: GPT-4 Turbo Preview',
    'The preview GPT-4 model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more.',
    460,
    ARRAY['tools', 'tool_choice'],
    128000,
    10000000,
    30000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-4-1106-preview',
    'gpt-4-1106-preview',
    'OpenAI: GPT-4 Turbo (older v1106)',
    'The latest GPT-4 Turbo model with vision capabilities.',
    470,
    ARRAY['tools', 'tool_choice'],
    128000,
    10000000,
    30000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-3.5-turbo-instruct',
    'gpt-3.5-turbo-instruct',
    'OpenAI: GPT-3.5 Turbo Instruct',
    'This model is a variant of GPT-3.5 Turbo tuned for instructional prompts and omitting chat-related optimizations.',
    480,
    '{}'::TEXT[],
    4095,
    1500000,
    2000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-3.5-turbo-16k',
    'gpt-3.5-turbo-16k',
    'OpenAI: GPT-3.5 Turbo 16k',
    'This model offers four times the context length of gpt-3.5-turbo, allowing it to support approximately 20 pages of text in a single request at a higher cost.',
    490,
    ARRAY['tools', 'tool_choice'],
    16385,
    3000000,
    4000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-4-0314',
    'gpt-4-0314',
    'OpenAI: GPT-4 (older v0314)',
    'GPT-4-0314 is the first version of GPT-4 released, with a context length of 8,192 tokens, and was supported until June 14.',
    500,
    ARRAY['tools', 'tool_choice'],
    8191,
    30000000,
    60000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-4',
    'gpt-4',
    'OpenAI: GPT-4',
    'OpenAI''s flagship model, GPT-4 is a large-scale multimodal language model capable of solving difficult problems with greater accuracy than previous models due to its broader general knowledge and advanced reasoning capabilities.',
    510,
    ARRAY['tools', 'tool_choice'],
    8191,
    30000000,
    60000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'openai'),
    'openai/gpt-3.5-turbo',
    'gpt-3.5-turbo',
    'OpenAI: GPT-3.5 Turbo',
    'GPT-3.5 Turbo is OpenAI''s fastest model.',
    520,
    ARRAY['tools', 'tool_choice'],
    16385,
    500000,
    1500000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- mistralai models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/devstral-2512:free',
    'devstral-2512:free',
    'Mistral: Devstral 2 2512 (free)',
    'Devstral 2 is a state-of-the-art open-source model by Mistral AI specializing in agentic coding.',
    0,
    ARRAY['tools', 'tool_choice'],
    262144,
    0,
    0,
    0
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/devstral-2512',
    'devstral-2512',
    'Mistral: Devstral 2 2512',
    'Devstral 2 is a state-of-the-art open-source model by Mistral AI specializing in agentic coding.',
    10,
    ARRAY['tools', 'tool_choice'],
    262144,
    50000,
    220000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/ministral-14b-2512',
    'ministral-14b-2512',
    'Mistral: Ministral 3 14B 2512',
    'The largest model in the Ministral 3 family, Ministral 3 14B offers frontier capabilities and performance comparable to its larger Mistral Small 3.2 24B counterpart.',
    20,
    ARRAY['tools', 'tool_choice'],
    262144,
    200000,
    200000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/ministral-8b-2512',
    'ministral-8b-2512',
    'Mistral: Ministral 3 8B 2512',
    'A balanced model in the Ministral 3 family, Ministral 3 8B is a powerful, efficient tiny language model with vision capabilities.',
    30,
    ARRAY['tools', 'tool_choice'],
    262144,
    150000,
    150000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/ministral-3b-2512',
    'ministral-3b-2512',
    'Mistral: Ministral 3 3B 2512',
    'The smallest model in the Ministral 3 family, Ministral 3 3B is a powerful, efficient tiny language model with vision capabilities.',
    40,
    ARRAY['tools', 'tool_choice'],
    131072,
    100000,
    100000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/mistral-large-2512',
    'mistral-large-2512',
    'Mistral: Mistral Large 3 2512',
    'Mistral Large 3 2512 is Mistral’s most capable model to date, featuring a sparse mixture-of-experts architecture with 41B active parameters (675B total), and released under the Apache 2.0 license.',
    50,
    ARRAY['tools', 'tool_choice'],
    262144,
    500000,
    1500000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/voxtral-small-24b-2507',
    'voxtral-small-24b-2507',
    'Mistral: Voxtral Small 24B 2507',
    'Voxtral Small is an enhancement of Mistral Small 3, incorporating state-of-the-art audio input capabilities while retaining best-in-class text performance.',
    60,
    ARRAY['tools', 'tool_choice'],
    32000,
    100000,
    300000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/mistral-medium-3.1',
    'mistral-medium-3.1',
    'Mistral: Mistral Medium 3.1',
    'Mistral Medium 3.1 is an updated version of Mistral Medium 3, which is a high-performance enterprise-grade language model designed to deliver frontier-level capabilities at significantly reduced operational cost.',
    70,
    ARRAY['tools', 'tool_choice'],
    131072,
    400000,
    2000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/codestral-2508',
    'codestral-2508',
    'Mistral: Codestral 2508',
    'Mistral''s cutting-edge language model for coding released end of July 2025.',
    80,
    ARRAY['tools', 'tool_choice'],
    256000,
    300000,
    900000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/devstral-medium',
    'devstral-medium',
    'Mistral: Devstral Medium',
    'Devstral Medium is a high-performance code generation and agentic reasoning model developed jointly by Mistral AI and All Hands AI.',
    90,
    ARRAY['tools', 'tool_choice'],
    131072,
    400000,
    2000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/devstral-small',
    'devstral-small',
    'Mistral: Devstral Small 1.1',
    'Devstral Small 1.1 is a 24B parameter open-weight language model for software engineering agents, developed by Mistral AI in collaboration with All Hands AI.',
    100,
    ARRAY['tools', 'tool_choice'],
    128000,
    70000,
    280000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/mistral-small-3.2-24b-instruct',
    'mistral-small-3.2-24b-instruct',
    'Mistral: Mistral Small 3.2 24B',
    'Mistral-Small-3.2-24B-Instruct-2506 is an updated 24B parameter model from Mistral optimized for instruction following, repetition reduction, and improved function calling.',
    110,
    ARRAY['tools', 'tool_choice'],
    131072,
    60000,
    180000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/mistral-medium-3',
    'mistral-medium-3',
    'Mistral: Mistral Medium 3',
    'Mistral Medium 3 is a high-performance enterprise-grade language model designed to deliver frontier-level capabilities at significantly reduced operational cost.',
    120,
    ARRAY['tools', 'tool_choice'],
    131072,
    400000,
    2000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/mistral-small-3.1-24b-instruct:free',
    'mistral-small-3.1-24b-instruct:free',
    'Mistral: Mistral Small 3.1 24B (free)',
    'Mistral Small 3.1 24B Instruct is an upgraded variant of Mistral Small 3 (2501), featuring 24 billion parameters with advanced multimodal capabilities.',
    130,
    ARRAY['tools', 'tool_choice'],
    128000,
    0,
    0,
    0
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/mistral-small-3.1-24b-instruct',
    'mistral-small-3.1-24b-instruct',
    'Mistral: Mistral Small 3.1 24B',
    'Mistral Small 3.1 24B Instruct is an upgraded variant of Mistral Small 3 (2501), featuring 24 billion parameters with advanced multimodal capabilities.',
    140,
    ARRAY['tools', 'tool_choice'],
    131072,
    30000,
    110000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/mistral-saba',
    'mistral-saba',
    'Mistral: Saba',
    'Mistral Saba is a 24B-parameter language model specifically designed for the Middle East and South Asia, delivering accurate and contextually relevant responses while maintaining efficient performance.',
    150,
    ARRAY['tools', 'tool_choice'],
    32768,
    200000,
    600000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/mistral-small-24b-instruct-2501',
    'mistral-small-24b-instruct-2501',
    'Mistral: Mistral Small 3',
    'Mistral Small 3 is a 24B-parameter language model optimized for low-latency performance across common AI tasks.',
    160,
    ARRAY['tools', 'tool_choice'],
    32768,
    30000,
    110000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/mistral-large-2411',
    'mistral-large-2411',
    'Mistral Large 2411',
    'Mistral Large 2 2411 is an update of [Mistral Large 2](/mistralai/mistral-large) released together with [Pixtral Large 2411](/mistralai/pixtral-large-2411)

It provides a significant upgrade on the previous [Mistral Large 24.07](/mistralai/mistral-large-2407), with notable improvements in long context understanding, a new system prompt, and more accurate function calling.',
    170,
    ARRAY['tools', 'tool_choice'],
    131072,
    2000000,
    6000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/mistral-large-2407',
    'mistral-large-2407',
    'Mistral Large 2407',
    'This is Mistral AI''s flagship model, Mistral Large 2 (version mistral-large-2407).',
    180,
    ARRAY['tools', 'tool_choice'],
    131072,
    2000000,
    6000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/pixtral-large-2411',
    'pixtral-large-2411',
    'Mistral: Pixtral Large 2411',
    'Pixtral Large is a 124B parameter, open-weight, multimodal model built on top of [Mistral Large 2](/mistralai/mistral-large-2411).',
    190,
    ARRAY['tools', 'tool_choice'],
    131072,
    2000000,
    6000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/ministral-8b',
    'ministral-8b',
    'Mistral: Ministral 8B',
    'Ministral 8B is an 8B parameter model featuring a unique interleaved sliding-window attention pattern for faster, memory-efficient inference.',
    200,
    ARRAY['tools', 'tool_choice'],
    131072,
    100000,
    100000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/ministral-3b',
    'ministral-3b',
    'Mistral: Ministral 3B',
    'Ministral 3B is a 3B parameter model optimized for on-device and edge computing.',
    210,
    ARRAY['tools', 'tool_choice'],
    131072,
    40000,
    40000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/pixtral-12b',
    'pixtral-12b',
    'Mistral: Pixtral 12B',
    'The first multi-modal, text+image-to-text model from Mistral AI.',
    220,
    ARRAY['tools', 'tool_choice'],
    32768,
    100000,
    100000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/mistral-nemo',
    'mistral-nemo',
    'Mistral: Mistral Nemo',
    'A 12B parameter model with a 128k token context length built by Mistral in collaboration with NVIDIA.

The model is multilingual, supporting English, French, German, Spanish, Italian, Portuguese, Chinese, Japanese, Korean, Arabic, and Hindi.

It supports function calling and is released under the Apache 2.0 license.',
    230,
    ARRAY['tools', 'tool_choice'],
    131072,
    20000,
    40000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/mixtral-8x22b-instruct',
    'mixtral-8x22b-instruct',
    'Mistral: Mixtral 8x22B Instruct',
    'Mistral''s official instruct fine-tuned version of [Mixtral 8x22B](/models/mistralai/mixtral-8x22b).',
    240,
    ARRAY['tools', 'tool_choice'],
    65536,
    2000000,
    6000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/mistral-large',
    'mistral-large',
    'Mistral Large',
    'This is Mistral AI''s flagship model, Mistral Large 2 (version `mistral-large-2407`).',
    250,
    ARRAY['tools', 'tool_choice'],
    128000,
    2000000,
    6000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'mistralai'),
    'mistralai/mistral-tiny',
    'mistral-tiny',
    'Mistral Tiny',
    'Note: This model is being deprecated.',
    260,
    ARRAY['tools', 'tool_choice'],
    32768,
    250000,
    250000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- nex-agi models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'nex-agi'),
    'nex-agi/deepseek-v3.1-nex-n1:free',
    'deepseek-v3.1-nex-n1:free',
    'Nex AGI: DeepSeek V3.1 Nex N1 (free)',
    'DeepSeek V3.1 Nex-N1 is the flagship release of the Nex-N1 series — a post-trained model designed to highlight agent autonomy, tool use, and real-world productivity.',
    0,
    ARRAY['tools', 'tool_choice'],
    131072,
    0,
    0,
    0
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- essentialai models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'essentialai'),
    'essentialai/rnj-1-instruct',
    'rnj-1-instruct',
    'EssentialAI: Rnj 1 Instruct',
    'Rnj-1 is an 8B-parameter, dense, open-weight model family developed by Essential AI and trained from scratch with a focus on programming, math, and scientific reasoning.',
    0,
    '{}'::TEXT[],
    32768,
    150000,
    150000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- arcee-ai models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'arcee-ai'),
    'arcee-ai/trinity-mini:free',
    'trinity-mini:free',
    'Arcee AI: Trinity Mini (free)',
    'Trinity Mini is a 26B-parameter (3B active) sparse mixture-of-experts language model featuring 128 experts with 8 active per token.',
    0,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    131072,
    0,
    0,
    0
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'arcee-ai'),
    'arcee-ai/trinity-mini',
    'trinity-mini',
    'Arcee AI: Trinity Mini',
    'Trinity Mini is a 26B-parameter (3B active) sparse mixture-of-experts language model featuring 128 experts with 8 active per token.',
    10,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    131072,
    45000,
    150000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- deepseek models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'deepseek'),
    'deepseek/deepseek-v3.2-speciale',
    'deepseek-v3.2-speciale',
    'DeepSeek: DeepSeek V3.2 Speciale',
    'DeepSeek-V3.2-Speciale is a high-compute variant of DeepSeek-V3.2 optimized for maximum reasoning and agentic performance.',
    0,
    ARRAY['reasoning'],
    163840,
    270000,
    410000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'deepseek'),
    'deepseek/deepseek-v3.2',
    'deepseek-v3.2',
    'DeepSeek: DeepSeek V3.2',
    'DeepSeek-V3.2 is a large language model designed to harmonize high computational efficiency with strong reasoning and agentic tool-use performance.',
    10,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    163840,
    250000,
    380000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'deepseek'),
    'deepseek/deepseek-v3.2-exp',
    'deepseek-v3.2-exp',
    'DeepSeek: DeepSeek V3.2 Exp',
    'DeepSeek-V3.2-Exp is an experimental large language model released by DeepSeek as an intermediate step between V3.1 and future architectures.',
    20,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    163840,
    210000,
    320000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'deepseek'),
    'deepseek/deepseek-v3.1-terminus:exacto',
    'deepseek-v3.1-terminus:exacto',
    'DeepSeek: DeepSeek V3.1 Terminus (exacto)',
    'DeepSeek-V3.1 Terminus is an update to [DeepSeek V3.1](/deepseek/deepseek-chat-v3.1) that maintains the model''s original capabilities while addressing issues reported by users, including language consistency and agent capabilities, further optimizing the model''s performance in coding and search agents.',
    30,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    163840,
    210000,
    790000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'deepseek'),
    'deepseek/deepseek-v3.1-terminus',
    'deepseek-v3.1-terminus',
    'DeepSeek: DeepSeek V3.1 Terminus',
    'DeepSeek-V3.1 Terminus is an update to [DeepSeek V3.1](/deepseek/deepseek-chat-v3.1) that maintains the model''s original capabilities while addressing issues reported by users, including language consistency and agent capabilities, further optimizing the model''s performance in coding and search agents.',
    40,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    163840,
    210000,
    790000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'deepseek'),
    'deepseek/deepseek-chat-v3.1',
    'deepseek-chat-v3.1',
    'DeepSeek: DeepSeek V3.1',
    'DeepSeek-V3.1 is a large hybrid reasoning model (671B parameters, 37B active) that supports both thinking and non-thinking modes via prompt templates.',
    50,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    32768,
    150000,
    750000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'deepseek'),
    'deepseek/deepseek-r1-0528',
    'deepseek-r1-0528',
    'DeepSeek: R1 0528',
    'May 28th update to the [original DeepSeek R1](/deepseek/deepseek-r1) Performance on par with [OpenAI o1](/openai/o1), but open-sourced and with fully open reasoning tokens.',
    60,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    163840,
    400000,
    1750000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'deepseek'),
    'deepseek/deepseek-chat-v3-0324',
    'deepseek-chat-v3-0324',
    'DeepSeek: DeepSeek V3 0324',
    'DeepSeek V3, a 685B-parameter, mixture-of-experts model, is the latest iteration of the flagship chat model family from the DeepSeek team.

It succeeds the [DeepSeek V3](/deepseek/deepseek-chat-v3) model and performs really well on a variety of tasks.',
    70,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    163840,
    190000,
    870000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'deepseek'),
    'deepseek/deepseek-r1-distill-qwen-32b',
    'deepseek-r1-distill-qwen-32b',
    'DeepSeek: R1 Distill Qwen 32B',
    'DeepSeek R1 Distill Qwen 32B is a distilled large language model based on [Qwen 2.5 32B](https://huggingface.co/Qwen/Qwen2.5-32B), using outputs from [DeepSeek R1](/deepseek/deepseek-r1).',
    80,
    ARRAY['reasoning'],
    131072,
    270000,
    270000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'deepseek'),
    'deepseek/deepseek-r1-distill-qwen-14b',
    'deepseek-r1-distill-qwen-14b',
    'DeepSeek: R1 Distill Qwen 14B',
    'DeepSeek R1 Distill Qwen 14B is a distilled large language model based on [Qwen 2.5 14B](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B), using outputs from [DeepSeek R1](/deepseek/deepseek-r1).',
    90,
    ARRAY['reasoning'],
    32768,
    150000,
    150000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'deepseek'),
    'deepseek/deepseek-r1-distill-llama-70b',
    'deepseek-r1-distill-llama-70b',
    'DeepSeek: R1 Distill Llama 70B',
    'DeepSeek R1 Distill Llama 70B is a distilled large language model based on [Llama-3.3-70B-Instruct](/meta-llama/llama-3.3-70b-instruct), using outputs from [DeepSeek R1](/deepseek/deepseek-r1).',
    100,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    131072,
    30000,
    110000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'deepseek'),
    'deepseek/deepseek-chat',
    'deepseek-chat',
    'DeepSeek: DeepSeek V3',
    'DeepSeek-V3 is the latest model from the DeepSeek team, building upon the instruction following and coding abilities of the previous versions.',
    110,
    ARRAY['tools', 'tool_choice'],
    163840,
    300000,
    1200000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- prime-intellect models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'prime-intellect'),
    'prime-intellect/intellect-3',
    'intellect-3',
    'Prime Intellect: INTELLECT-3',
    'INTELLECT-3 is a 106B-parameter Mixture-of-Experts model (12B active) post-trained from GLM-4.5-Air-Base using supervised fine-tuning (SFT) followed by large-scale reinforcement learning (RL).',
    0,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    131072,
    200000,
    1100000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- anthropic models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'anthropic'),
    'anthropic/claude-opus-4.5',
    'claude-opus-4.5',
    'Anthropic: Claude Opus 4.5',
    'Claude Opus 4.5 is Anthropic’s frontier reasoning model optimized for complex software engineering, agentic workflows, and long-horizon computer use.',
    0,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    200000,
    5000000,
    25000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'anthropic'),
    'anthropic/claude-sonnet-4.5',
    'claude-sonnet-4.5',
    'Anthropic: Claude Sonnet 4.5',
    'Claude Sonnet 4.5 is Anthropic’s most advanced Sonnet model to date, optimized for real-world agents and coding workflows.',
    10,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    1000000,
    3000000,
    15000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'anthropic'),
    'anthropic/claude-opus-4.1',
    'claude-opus-4.1',
    'Anthropic: Claude Opus 4.1',
    'Claude Opus 4.1 is an updated version of Anthropic’s flagship model, offering improved performance in coding, reasoning, and agentic tasks.',
    20,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    200000,
    15000000,
    75000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- x-ai models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'x-ai'),
    'x-ai/grok-4.1-fast',
    'grok-4.1-fast',
    'xAI: Grok 4.1 Fast',
    'Grok 4.1 Fast is xAI''s best agentic tool calling model that shines in real-world use cases like customer support and deep research.',
    0,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    2000000,
    200000,
    500000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'x-ai'),
    'x-ai/grok-4-fast',
    'grok-4-fast',
    'xAI: Grok 4 Fast',
    'Grok 4 Fast is xAI''s latest multimodal model with SOTA cost-efficiency and a 2M token context window.',
    10,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    2000000,
    200000,
    500000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'x-ai'),
    'x-ai/grok-code-fast-1',
    'grok-code-fast-1',
    'xAI: Grok Code Fast 1',
    'Grok Code Fast 1 is a speedy and economical reasoning model that excels at agentic coding.',
    20,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    256000,
    200000,
    1500000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'x-ai'),
    'x-ai/grok-4',
    'grok-4',
    'xAI: Grok 4',
    'Grok 4 is xAI''s latest reasoning model with a 256k context window.',
    30,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    256000,
    3000000,
    15000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'x-ai'),
    'x-ai/grok-3-mini',
    'grok-3-mini',
    'xAI: Grok 3 Mini',
    'A lightweight model that thinks before responding.',
    40,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    131072,
    300000,
    500000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'x-ai'),
    'x-ai/grok-3',
    'grok-3',
    'xAI: Grok 3',
    'Grok 3 is the latest model from xAI.',
    50,
    ARRAY['tools', 'tool_choice'],
    131072,
    3000000,
    15000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- deepcogito models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'deepcogito'),
    'deepcogito/cogito-v2.1-671b',
    'cogito-v2.1-671b',
    'Deep Cogito: Cogito v2.1 671B',
    'Cogito v2.1 671B MoE represents one of the strongest open models globally, matching performance of frontier closed and open models.',
    0,
    ARRAY['reasoning'],
    128000,
    1250000,
    1250000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'deepcogito'),
    'deepcogito/cogito-v2-preview-llama-405b',
    'cogito-v2-preview-llama-405b',
    'Deep Cogito: Cogito V2 Preview Llama 405B',
    'Cogito v2 405B is a dense hybrid reasoning model that combines direct answering capabilities with advanced self-reflection.',
    10,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    32768,
    3500000,
    3500000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'deepcogito'),
    'deepcogito/cogito-v2-preview-llama-70b',
    'cogito-v2-preview-llama-70b',
    'Deep Cogito: Cogito V2 Preview Llama 70B',
    'Cogito v2 70B is a dense hybrid reasoning model that combines direct answering capabilities with advanced self-reflection.',
    20,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    32768,
    880000,
    880000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- kwaipilot models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'kwaipilot'),
    'kwaipilot/kat-coder-pro:free',
    'kat-coder-pro:free',
    'Kwaipilot: KAT-Coder-Pro V1 (free)',
    'KAT-Coder-Pro V1 is KwaiKAT''s most advanced agentic coding model in the KAT-Coder series.',
    0,
    ARRAY['tools', 'tool_choice'],
    256000,
    0,
    0,
    0
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'kwaipilot'),
    'kwaipilot/kat-coder-pro',
    'kat-coder-pro',
    'Kwaipilot: KAT-Coder-Pro V1',
    'KAT-Coder-Pro V1 is KwaiKAT''s most advanced agentic coding model in the KAT-Coder series.',
    10,
    ARRAY['tools', 'tool_choice'],
    256000,
    207000,
    828000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- moonshotai models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'moonshotai'),
    'moonshotai/kimi-k2-thinking',
    'kimi-k2-thinking',
    'MoonshotAI: Kimi K2 Thinking',
    'Kimi K2 Thinking is Moonshot AI’s most advanced open reasoning model to date, extending the K2 series into agentic, long-horizon reasoning.',
    0,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    262144,
    320000,
    480000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'moonshotai'),
    'moonshotai/kimi-k2-0905',
    'kimi-k2-0905',
    'MoonshotAI: Kimi K2 0905',
    'Kimi K2 0905 is the September update of [Kimi K2 0711](moonshotai/kimi-k2).',
    10,
    ARRAY['tools', 'tool_choice'],
    262144,
    390000,
    1900000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'moonshotai'),
    'moonshotai/kimi-k2-0905:exacto',
    'kimi-k2-0905:exacto',
    'MoonshotAI: Kimi K2 0905 (exacto)',
    'Kimi K2 0905 is the September update of [Kimi K2 0711](moonshotai/kimi-k2).',
    20,
    ARRAY['tools', 'tool_choice'],
    262144,
    600000,
    2500000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'moonshotai'),
    'moonshotai/kimi-k2',
    'kimi-k2',
    'MoonshotAI: Kimi K2 0711',
    'Kimi K2 Instruct is a large-scale Mixture-of-Experts (MoE) language model developed by Moonshot AI, featuring 1 trillion total parameters with 32 billion active per forward pass.',
    30,
    ARRAY['tools', 'tool_choice'],
    131072,
    500000,
    2400000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'moonshotai'),
    'moonshotai/kimi-dev-72b',
    'kimi-dev-72b',
    'MoonshotAI: Kimi Dev 72B',
    'Kimi-Dev-72B is an open-source large language model fine-tuned for software engineering and issue resolution tasks.',
    40,
    ARRAY['reasoning'],
    131072,
    290000,
    1150000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- qwen models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-vl-32b-instruct',
    'qwen3-vl-32b-instruct',
    'Qwen: Qwen3 VL 32B Instruct',
    'Qwen3-VL-32B-Instruct is a large-scale multimodal vision-language model designed for high-precision understanding and reasoning across text, images, and video.',
    0,
    '{}'::TEXT[],
    262144,
    500000,
    1500000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-vl-8b-thinking',
    'qwen3-vl-8b-thinking',
    'Qwen: Qwen3 VL 8B Thinking',
    'Qwen3-VL-8B-Thinking is the reasoning-optimized variant of the Qwen3-VL-8B multimodal model, designed for advanced visual and textual reasoning across complex scenes, documents, and temporal sequences.',
    10,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    256000,
    180000,
    2100000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-vl-8b-instruct',
    'qwen3-vl-8b-instruct',
    'Qwen: Qwen3 VL 8B Instruct',
    'Qwen3-VL-8B-Instruct is a multimodal vision-language model from the Qwen3-VL series, built for high-fidelity understanding and reasoning across text, images, and video.',
    20,
    ARRAY['tools', 'tool_choice'],
    131072,
    80000,
    500000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-vl-30b-a3b-thinking',
    'qwen3-vl-30b-a3b-thinking',
    'Qwen: Qwen3 VL 30B A3B Thinking',
    'Qwen3-VL-30B-A3B-Thinking is a multimodal model that unifies strong text generation with visual understanding for images and videos.',
    30,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    131072,
    200000,
    1000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-vl-30b-a3b-instruct',
    'qwen3-vl-30b-a3b-instruct',
    'Qwen: Qwen3 VL 30B A3B Instruct',
    'Qwen3-VL-30B-A3B-Instruct is a multimodal model that unifies strong text generation with visual understanding for images and videos.',
    40,
    ARRAY['tools', 'tool_choice'],
    262144,
    150000,
    600000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-vl-235b-a22b-thinking',
    'qwen3-vl-235b-a22b-thinking',
    'Qwen: Qwen3 VL 235B A22B Thinking',
    'Qwen3-VL-235B-A22B Thinking is a multimodal model that unifies strong text generation with visual understanding across images and video.',
    50,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    262144,
    450000,
    3500000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-vl-235b-a22b-instruct',
    'qwen3-vl-235b-a22b-instruct',
    'Qwen: Qwen3 VL 235B A22B Instruct',
    'Qwen3-VL-235B-A22B Instruct is an open-weight multimodal model that unifies strong text generation with visual understanding across images and video.',
    60,
    ARRAY['tools', 'tool_choice'],
    262144,
    120000,
    560000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-coder-plus',
    'qwen3-coder-plus',
    'Qwen: Qwen3 Coder Plus',
    'Qwen3 Coder Plus is Alibaba''s proprietary version of the Open Source Qwen3 Coder 480B A35B.',
    70,
    ARRAY['tools', 'tool_choice'],
    128000,
    1000000,
    5000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-next-80b-a3b-thinking',
    'qwen3-next-80b-a3b-thinking',
    'Qwen: Qwen3 Next 80B A3B Thinking',
    'Qwen3-Next-80B-A3B-Thinking is a reasoning-first chat model in the Qwen3-Next line that outputs structured “thinking” traces by default.',
    80,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    262144,
    150000,
    1200000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-next-80b-a3b-instruct',
    'qwen3-next-80b-a3b-instruct',
    'Qwen: Qwen3 Next 80B A3B Instruct',
    'Qwen3-Next-80B-A3B-Instruct is an instruction-tuned chat model in the Qwen3-Next series optimized for fast, stable responses without “thinking” traces.',
    90,
    ARRAY['tools', 'tool_choice'],
    262144,
    60000,
    600000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen-plus-2025-07-28',
    'qwen-plus-2025-07-28',
    'Qwen: Qwen Plus 0728',
    'Qwen Plus 0728, based on the Qwen3 foundation model, is a 1 million context hybrid reasoning model with a balanced performance, speed, and cost combination.',
    100,
    ARRAY['tools', 'tool_choice'],
    1000000,
    400000,
    1200000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen-plus-2025-07-28:thinking',
    'qwen-plus-2025-07-28:thinking',
    'Qwen: Qwen Plus 0728 (thinking)',
    'Qwen Plus 0728, based on the Qwen3 foundation model, is a 1 million context hybrid reasoning model with a balanced performance, speed, and cost combination.',
    110,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    1000000,
    400000,
    4000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-30b-a3b-thinking-2507',
    'qwen3-30b-a3b-thinking-2507',
    'Qwen: Qwen3 30B A3B Thinking 2507',
    'Qwen3-30B-A3B-Thinking-2507 is a 30B parameter Mixture-of-Experts reasoning model optimized for complex tasks requiring extended multi-step thinking.',
    120,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    32768,
    51000,
    340000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-coder-30b-a3b-instruct',
    'qwen3-coder-30b-a3b-instruct',
    'Qwen: Qwen3 Coder 30B A3B Instruct',
    'Qwen3-Coder-30B-A3B-Instruct is a 30.5B parameter Mixture-of-Experts (MoE) model with 128 experts (8 active per forward pass), designed for advanced code generation, repository-scale understanding, and agentic tool use.',
    130,
    ARRAY['tools', 'tool_choice'],
    160000,
    70000,
    270000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-30b-a3b-instruct-2507',
    'qwen3-30b-a3b-instruct-2507',
    'Qwen: Qwen3 30B A3B Instruct 2507',
    'Qwen3-30B-A3B-Instruct-2507 is a 30.5B-parameter mixture-of-experts language model from Qwen, with 3.3B active parameters per inference.',
    140,
    ARRAY['tools', 'tool_choice'],
    262144,
    80000,
    330000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-235b-a22b-thinking-2507',
    'qwen3-235b-a22b-thinking-2507',
    'Qwen: Qwen3 235B A22B Thinking 2507',
    'Qwen3-235B-A22B-Thinking-2507 is a high-performance, open-weight Mixture-of-Experts (MoE) language model optimized for complex reasoning tasks.',
    150,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    262144,
    110000,
    600000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-coder',
    'qwen3-coder',
    'Qwen: Qwen3 Coder 480B A35B',
    'Qwen3-Coder-480B-A35B-Instruct is a Mixture-of-Experts (MoE) code generation model developed by the Qwen team.',
    160,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    262144,
    220000,
    950000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-coder:exacto',
    'qwen3-coder:exacto',
    'Qwen: Qwen3 Coder 480B A35B (exacto)',
    'Qwen3-Coder-480B-A35B-Instruct is a Mixture-of-Experts (MoE) code generation model developed by the Qwen team.',
    170,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    262144,
    220000,
    1800000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-235b-a22b-2507',
    'qwen3-235b-a22b-2507',
    'Qwen: Qwen3 235B A22B Instruct 2507',
    'Qwen3-235B-A22B-Instruct-2507 is a multilingual, instruction-tuned mixture-of-experts language model based on the Qwen3-235B architecture, with 22B active parameters per forward pass.',
    180,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    262144,
    71000,
    463000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-4b:free',
    'qwen3-4b:free',
    'Qwen: Qwen3 4B (free)',
    'Qwen3-4B is a 4 billion parameter dense language model from the Qwen3 series, designed to support both general-purpose and reasoning-intensive tasks.',
    190,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    40960,
    0,
    0,
    0
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-30b-a3b',
    'qwen3-30b-a3b',
    'Qwen: Qwen3 30B A3B',
    'Qwen3, the latest generation in the Qwen large language model series, features both dense and mixture-of-experts (MoE) architectures to excel in reasoning, multilingual support, and advanced agent tasks.',
    200,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    40960,
    60000,
    220000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-8b',
    'qwen3-8b',
    'Qwen: Qwen3 8B',
    'Qwen3-8B is a dense 8.2B parameter causal language model from the Qwen3 series, designed for both reasoning-heavy tasks and efficient dialogue.',
    210,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    128000,
    35000,
    138000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-14b',
    'qwen3-14b',
    'Qwen: Qwen3 14B',
    'Qwen3-14B is a dense 14.8B parameter causal language model from the Qwen3 series, designed for both complex reasoning and efficient dialogue.',
    220,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    40960,
    50000,
    220000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-32b',
    'qwen3-32b',
    'Qwen: Qwen3 32B',
    'Qwen3-32B is a dense 32.8B parameter causal language model from the Qwen3 series, optimized for both complex reasoning and efficient dialogue.',
    230,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    40960,
    80000,
    240000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen3-235b-a22b',
    'qwen3-235b-a22b',
    'Qwen: Qwen3 235B A22B',
    'Qwen3-235B-A22B is a 235B parameter mixture-of-experts (MoE) model developed by Qwen, activating 22B parameters per forward pass.',
    240,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    40960,
    180000,
    540000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen2.5-coder-7b-instruct',
    'qwen2.5-coder-7b-instruct',
    'Qwen: Qwen2.5 Coder 7B Instruct',
    'Qwen2.5-Coder-7B-Instruct is a 7B parameter instruction-tuned language model optimized for code-related tasks such as code generation, reasoning, and bug fixing.',
    250,
    '{}'::TEXT[],
    32768,
    30000,
    90000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen2.5-vl-32b-instruct',
    'qwen2.5-vl-32b-instruct',
    'Qwen: Qwen2.5 VL 32B Instruct',
    'Qwen2.5-VL-32B is a multimodal vision-language model fine-tuned through reinforcement learning for enhanced mathematical reasoning, structured outputs, and visual problem-solving capabilities.',
    260,
    '{}'::TEXT[],
    16384,
    50000,
    220000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwq-32b',
    'qwq-32b',
    'Qwen: QwQ 32B',
    'QwQ is the reasoning model of the Qwen series.',
    270,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    32768,
    150000,
    400000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen2.5-vl-72b-instruct',
    'qwen2.5-vl-72b-instruct',
    'Qwen: Qwen2.5 VL 72B Instruct',
    'Qwen2.5-VL is proficient in recognizing common objects such as flowers, birds, fish, and insects.',
    280,
    '{}'::TEXT[],
    32768,
    150000,
    600000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen-2.5-coder-32b-instruct',
    'qwen-2.5-coder-32b-instruct',
    'Qwen2.5 Coder 32B Instruct',
    'Qwen2.5-Coder is the latest series of Code-Specific Qwen large language models (formerly known as CodeQwen).',
    290,
    '{}'::TEXT[],
    32768,
    30000,
    110000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'qwen'),
    'qwen/qwen-2.5-72b-instruct',
    'qwen-2.5-72b-instruct',
    'Qwen2.5 72B Instruct',
    'Qwen2.5 72B is the latest series of Qwen large language models.',
    300,
    ARRAY['tools', 'tool_choice'],
    32768,
    120000,
    390000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- thedrummer models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'thedrummer'),
    'thedrummer/cydonia-24b-v4.1',
    'cydonia-24b-v4.1',
    'TheDrummer: Cydonia 24B V4.1',
    'Uncensored and creative writing model based on Mistral Small 3.2 24B with good recall, prompt adherence, and intelligence.',
    0,
    '{}'::TEXT[],
    131072,
    300000,
    500000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'thedrummer'),
    'thedrummer/unslopnemo-12b',
    'unslopnemo-12b',
    'TheDrummer: UnslopNemo 12B',
    'UnslopNemo v4.1 is the latest addition from the creator of Rocinante, designed for adventure writing and role-play scenarios.',
    10,
    ARRAY['tools', 'tool_choice'],
    32768,
    400000,
    400000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'thedrummer'),
    'thedrummer/rocinante-12b',
    'rocinante-12b',
    'TheDrummer: Rocinante 12B',
    'Rocinante 12B is designed for engaging storytelling and rich prose.

Early testers have reported:
- Expanded vocabulary with unique and expressive word choices
- Enhanced creativity for vivid narratives
- Adventure-filled and captivating stories',
    20,
    ARRAY['tools', 'tool_choice'],
    32768,
    170000,
    430000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- alibaba models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'alibaba'),
    'alibaba/tongyi-deepresearch-30b-a3b',
    'tongyi-deepresearch-30b-a3b',
    'Tongyi DeepResearch 30B A3B',
    'Tongyi DeepResearch is an agentic large language model developed by Tongyi Lab, with 30 billion total parameters activating only 3 billion per token.',
    0,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    131072,
    90000,
    400000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- opengvlab models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'opengvlab'),
    'opengvlab/internvl3-78b',
    'internvl3-78b',
    'OpenGVLab: InternVL3 78B',
    'The InternVL3 series is an advanced multimodal large language model (MLLM).',
    0,
    '{}'::TEXT[],
    32768,
    100000,
    390000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- stepfun-ai models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'stepfun-ai'),
    'stepfun-ai/step3',
    'step3',
    'StepFun: Step3',
    'Step3 is a cutting-edge multimodal reasoning model—built on a Mixture-of-Experts architecture with 321B total parameters and 38B active.',
    0,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    65536,
    570000,
    1420000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- nousresearch models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'nousresearch'),
    'nousresearch/hermes-4-70b',
    'hermes-4-70b',
    'Nous: Hermes 4 70B',
    'Hermes 4 70B is a hybrid reasoning model from Nous Research, built on Meta-Llama-3.1-70B.',
    0,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    131072,
    110000,
    380000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'nousresearch'),
    'nousresearch/deephermes-3-mistral-24b-preview',
    'deephermes-3-mistral-24b-preview',
    'Nous: DeepHermes 3 Mistral 24B Preview',
    'DeepHermes 3 (Mistral 24B Preview) is an instruction-tuned language model by Nous Research based on Mistral-Small-24B, designed for chat, function calling, and advanced multi-turn reasoning.',
    10,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    32768,
    20000,
    100000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'nousresearch'),
    'nousresearch/hermes-3-llama-3.1-70b',
    'hermes-3-llama-3.1-70b',
    'Nous: Hermes 3 70B Instruct',
    'Hermes 3 is a generalist language model with many improvements over [Hermes 2](/models/nousresearch/nous-hermes-2-mistral-7b-dpo), including advanced agentic capabilities, much better roleplaying, reasoning, multi-turn conversation, long context coherence, and improvements across the board.

Hermes 3 70B is a competitive, if not superior finetune of the [Llama-3.1 70B foundation model](/models/meta-llama/llama-3.1-70b-instruct), focused on aligning LLMs to the user, with powerful steering cap...',
    20,
    '{}'::TEXT[],
    65536,
    300000,
    300000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'nousresearch'),
    'nousresearch/hermes-2-pro-llama-3-8b',
    'hermes-2-pro-llama-3-8b',
    'NousResearch: Hermes 2 Pro - Llama-3 8B',
    'Hermes 2 Pro is an upgraded, retrained version of Nous Hermes 2, consisting of an updated and cleaned version of the OpenHermes 2.5 Dataset, as well as a newly introduced Function Calling and JSON Mode dataset developed in-house.',
    30,
    '{}'::TEXT[],
    8192,
    25000,
    80000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- venice models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'venice'),
    'cognitivecomputations/dolphin-mistral-24b-venice-edition:free',
    'dolphin-mistral-24b-venice-edition:free',
    'Venice: Uncensored (free)',
    'Venice Uncensored Dolphin Mistral 24B Venice Edition is a fine-tuned variant of Mistral-Small-24B-Instruct-2501, developed by dphn.ai in collaboration with Venice.ai.',
    0,
    '{}'::TEXT[],
    32768,
    0,
    0,
    0
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- tencent models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'tencent'),
    'tencent/hunyuan-a13b-instruct',
    'hunyuan-a13b-instruct',
    'Tencent: Hunyuan A13B Instruct',
    'Hunyuan-A13B is a 13B active parameter Mixture-of-Experts (MoE) language model developed by Tencent, with a total parameter count of 80B and support for reasoning via Chain-of-Thought.',
    0,
    ARRAY['reasoning'],
    131072,
    140000,
    570000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- tngtech models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'tngtech'),
    'tngtech/deepseek-r1t2-chimera',
    'deepseek-r1t2-chimera',
    'TNG: DeepSeek R1T2 Chimera',
    'DeepSeek-TNG-R1T2-Chimera is the second-generation Chimera model from TNG Tech.',
    0,
    ARRAY['tools', 'tool_choice', 'reasoning'],
    163840,
    250000,
    850000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'tngtech'),
    'tngtech/deepseek-r1t-chimera',
    'deepseek-r1t-chimera',
    'TNG: DeepSeek R1T Chimera',
    'DeepSeek-R1T-Chimera is created by merging DeepSeek-R1 and DeepSeek-V3 (0324), combining the reasoning capabilities of R1 with the token efficiency improvements of V3.',
    10,
    ARRAY['reasoning'],
    163840,
    300000,
    1200000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- baidu models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'baidu'),
    'baidu/ernie-4.5-300b-a47b',
    'ernie-4.5-300b-a47b',
    'Baidu: ERNIE 4.5 300B A47B ',
    'ERNIE-4.5-300B-A47B is a 300B parameter Mixture-of-Experts (MoE) language model developed by Baidu as part of the ERNIE 4.5 series.',
    0,
    '{}'::TEXT[],
    123000,
    280000,
    1100000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- inception models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'inception'),
    'inception/mercury',
    'mercury',
    'Inception: Mercury',
    'Mercury is the first diffusion large language model (dLLM).',
    0,
    ARRAY['tools', 'tool_choice'],
    128000,
    250000,
    1000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'inception'),
    'inception/mercury-coder',
    'mercury-coder',
    'Inception: Mercury Coder',
    'Mercury Coder is the first diffusion large language model (dLLM).',
    10,
    ARRAY['tools', 'tool_choice'],
    128000,
    250000,
    1000000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- meta-llama models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'meta-llama'),
    'meta-llama/llama-4-maverick',
    'llama-4-maverick',
    'Meta: Llama 4 Maverick',
    'Llama 4 Maverick 17B Instruct (128E) is a high-capacity multimodal language model from Meta, built on a mixture-of-experts (MoE) architecture with 128 experts and 17 billion active parameters per forward pass (400B total).',
    0,
    ARRAY['tools', 'tool_choice'],
    1048576,
    150000,
    600000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'meta-llama'),
    'meta-llama/llama-4-scout',
    'llama-4-scout',
    'Meta: Llama 4 Scout',
    'Llama 4 Scout 17B Instruct (16E) is a mixture-of-experts (MoE) language model developed by Meta, activating 17 billion parameters out of a total of 109B.',
    10,
    ARRAY['tools', 'tool_choice'],
    327680,
    80000,
    300000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'meta-llama'),
    'meta-llama/llama-3.3-70b-instruct',
    'llama-3.3-70b-instruct',
    'Meta: Llama 3.3 70B Instruct',
    'The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out).',
    20,
    ARRAY['tools', 'tool_choice'],
    131072,
    100000,
    320000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'meta-llama'),
    'meta-llama/llama-3.1-8b-instruct',
    'llama-3.1-8b-instruct',
    'Meta: Llama 3.1 8B Instruct',
    'Meta''s latest class of model (Llama 3.1) launched with a variety of sizes & flavors.',
    30,
    ARRAY['tools', 'tool_choice'],
    131072,
    20000,
    30000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'meta-llama'),
    'meta-llama/llama-3.1-405b-instruct',
    'llama-3.1-405b-instruct',
    'Meta: Llama 3.1 405B Instruct',
    'The highly anticipated 400B class of Llama3 is here! Clocking in at 128k context with impressive eval scores, the Meta AI team continues to push the frontier of open-source LLMs.

Meta''s latest class of model (Llama 3.1) launched with a variety of sizes & flavors.',
    40,
    ARRAY['tools', 'tool_choice'],
    10000,
    3500000,
    3500000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'meta-llama'),
    'meta-llama/llama-3-70b-instruct',
    'llama-3-70b-instruct',
    'Meta: Llama 3 70B Instruct',
    'Meta''s latest class of model (Llama 3) launched with a variety of sizes & flavors.',
    50,
    ARRAY['tools', 'tool_choice'],
    8192,
    300000,
    400000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- cohere models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'cohere'),
    'cohere/command-a',
    'command-a',
    'Cohere: Command A',
    'Command A is an open-weights 111B parameter model with a 256k context window focused on delivering great performance across agentic, multilingual, and coding use cases.
Compared to other leading proprietary and open-weights models Command A delivers maximum performance with minimum hardware costs, excelling on business-critical agentic and multilingual tasks.',
    0,
    '{}'::TEXT[],
    256000,
    2500000,
    10000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'cohere'),
    'cohere/command-r7b-12-2024',
    'command-r7b-12-2024',
    'Cohere: Command R7B (12-2024)',
    'Command R7B (12-2024) is a small, fast update of the Command R+ model, delivered in December 2024.',
    10,
    '{}'::TEXT[],
    128000,
    37500,
    150000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'cohere'),
    'cohere/command-r-08-2024',
    'command-r-08-2024',
    'Cohere: Command R (08-2024)',
    'command-r-08-2024 is an update of the [Command R](/models/cohere/command-r) with improved performance for multilingual retrieval-augmented generation (RAG) and tool use.',
    20,
    ARRAY['tools', 'tool_choice'],
    128000,
    150000,
    600000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'cohere'),
    'cohere/command-r-plus-08-2024',
    'command-r-plus-08-2024',
    'Cohere: Command R+ (08-2024)',
    'command-r-plus-08-2024 is an update of the [Command R+](/models/cohere/command-r-plus) with roughly 50% higher throughput and 25% lower latencies as compared to the previous Command R+ version, while keeping the hardware footprint the same.

Read the launch post [here](https://docs.cohere.com/changelog/command-gets-refreshed).

Use of this model is subject to Cohere''s [Usage Policy](https://docs.cohere.com/docs/usage-policy) and [SaaS Agreement](https://cohere.com/saas-agreement).',
    30,
    ARRAY['tools', 'tool_choice'],
    128000,
    2500000,
    10000000,
    3
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- microsoft models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'microsoft'),
    'microsoft/phi-4',
    'phi-4',
    'Microsoft: Phi 4',
    '[Microsoft Research](/microsoft) Phi-4 is designed to perform well in complex reasoning tasks and can operate efficiently in situations with limited memory or where quick responses are needed.',
    0,
    '{}'::TEXT[],
    16384,
    60000,
    140000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- sao10k models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'sao10k'),
    'sao10k/l3.3-euryale-70b',
    'l3.3-euryale-70b',
    'Sao10K: Llama 3.3 Euryale 70B',
    'Euryale L3.3 70B is a model focused on creative roleplay from [Sao10k](https://ko-fi.com/sao10k).',
    0,
    '{}'::TEXT[],
    131072,
    650000,
    750000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'sao10k'),
    'sao10k/l3.1-euryale-70b',
    'l3.1-euryale-70b',
    'Sao10K: Llama 3.1 Euryale 70B v2.2',
    'Euryale L3.1 70B v2.2 is a model focused on creative roleplay from [Sao10k](https://ko-fi.com/sao10k).',
    10,
    ARRAY['tools', 'tool_choice'],
    32768,
    650000,
    750000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'sao10k'),
    'sao10k/l3-lunaris-8b',
    'l3-lunaris-8b',
    'Sao10K: Llama 3 8B Lunaris',
    'Lunaris 8B is a versatile generalist and roleplaying model based on Llama 3.',
    20,
    '{}'::TEXT[],
    8192,
    40000,
    50000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- neversleep models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'neversleep'),
    'neversleep/llama-3.1-lumimaid-8b',
    'llama-3.1-lumimaid-8b',
    'NeverSleep: Lumimaid v0.2 8B',
    'Lumimaid v0.2 8B is a finetune of [Llama 3.1 8B](/models/meta-llama/llama-3.1-8b-instruct) with a "HUGE step up dataset wise" compared to Lumimaid v0.1.',
    0,
    '{}'::TEXT[],
    32768,
    90000,
    600000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'neversleep'),
    'neversleep/noromaid-20b',
    'noromaid-20b',
    'Noromaid 20B',
    'A collab between IkariDev and Undi.',
    10,
    '{}'::TEXT[],
    4096,
    1000000,
    1750000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- undi95 models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'undi95'),
    'undi95/remm-slerp-l2-13b',
    'remm-slerp-l2-13b',
    'ReMM SLERP 13B',
    'A recreation trial of the original MythoMax-L2-B13 but with updated models.',
    0,
    '{}'::TEXT[],
    6144,
    450000,
    650000,
    2
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- gryphe models
INSERT INTO llm_models (
    vendor_id, api_id, slug, display_name, description,
    display_order, capabilities, context_length,
    price_prompt_micro, price_completion_micro, price_tier
) VALUES (
    (SELECT id FROM llm_vendors WHERE slug = 'gryphe'),
    'gryphe/mythomax-l2-13b',
    'mythomax-l2-13b',
    'MythoMax 13B',
    'One of the highest performing and most popular fine-tunes of Llama 2 13B, with rich descriptions and roleplay.',
    0,
    '{}'::TEXT[],
    4096,
    60000,
    60000,
    1
)
ON CONFLICT (api_id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    description = EXCLUDED.description,
    capabilities = EXCLUDED.capabilities,
    context_length = EXCLUDED.context_length,
    price_prompt_micro = EXCLUDED.price_prompt_micro,
    price_completion_micro = EXCLUDED.price_completion_micro,
    price_tier = EXCLUDED.price_tier,
    last_synced_at = NOW(),
    updated_at = NOW();

-- ============================================
-- SYNC SUMMARY
-- ============================================

-- Price tier distribution:
--   Tier 0 (Free):     12 models
--   Tier 1 (Budget):   90 models
--   Tier 2 (Standard): 73 models
--   Tier 3 (Premium):  44 models