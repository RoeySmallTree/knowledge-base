import express from 'express';
import cors from 'cors';
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const loadEnvFromFile = () => {
    let currentDir = __dirname;
    // Search up to 5 levels up
    for (let i = 0; i < 5; i++) {
        const envPath = join(currentDir, '.env');
        if (existsSync(envPath)) {
            console.log(`Loading .env from ${envPath}`);
            const content = readFileSync(envPath, 'utf-8');
            content.split('\n').forEach(line => {
                const trimmed = line.trim();
                if (!trimmed || trimmed.startsWith('#')) return;
                const delimiterIndex = trimmed.indexOf('=');
                if (delimiterIndex === -1) return;
                const key = trimmed.slice(0, delimiterIndex).trim();
                let value = trimmed.slice(delimiterIndex + 1).trim();
                // Don't overwrite existing env vars
                if (process.env[key]) return;

                if (
                    (value.startsWith('"') && value.endsWith('"')) ||
                    (value.startsWith("'") && value.endsWith("'"))
                ) {
                    value = value.slice(1, -1);
                }
                process.env[key] = value;
            });
            // We can stop after finding the first .env, or continue if we want to support cascading. 
            // Usually finding the closest one or valid one is enough. 
            // Let's assume the root one has what we need. 
            // But if we find one, we should probably stop? 
            // Actually, loading multiple might be better for cascading, but let's stick to the user's root one.
            // If the user has one in `controlling-interface` AND root, we might want both.
            // But the current implementation was single file. 
            // I'll leave the loop running but continue to check parent dirs to fill in missing keys.
        }
        const parentDir = dirname(currentDir);
        if (parentDir === currentDir) break; // Root reached
        currentDir = parentDir;
    }
};

loadEnvFromFile();

const app = express();
const PORT = 3006;

app.use(cors());
app.use(express.json());


type DbModelRow = {
    id: number;
    vendor_id: number | null;
    api_id: string | null;
    slug: string | null;
    display_name: string | null;
    display_order: number | null;
    description: string | null;
    capabilities: string[] | null;
    context_length: number | null;
    price_prompt_micro: number | null;
    price_completion_micro: number | null;
    price_tier: number | null;
    fallback_model_id: number | null;
    is_active: boolean | null;
    parameter_count_b: number | null;
    active_parameter_count_b: number | null;
    personality_traits: string[] | null;
    professional_traits: string[] | null;
    best_for: string[] | null;
    creativity_score: number | null;
    logic_score: number | null;
    efficiency_score: number | null;
    model_family: string | null;
    name_within_family: string | null;
    created_at: string;
    updated_at: string;
};

type DbVendorRow = {
    id: number;
    slug: string;
    display_name: string;
    display_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    link: string | null;
    description: string | null;
};

const requireSupabaseConfig = () => {
    const supabaseUrl = process.env.SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !serviceRoleKey) {
        throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.');
    }
    return { supabaseUrl, serviceRoleKey };
};

const supabaseRequest = async (path: string, options: RequestInit = {}) => {
    const { supabaseUrl, serviceRoleKey } = requireSupabaseConfig();
    const response = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
        ...options,
        headers: {
            apikey: serviceRoleKey,
            Authorization: `Bearer ${serviceRoleKey}`,
            'Content-Type': 'application/json',
            ...options.headers
        }
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Supabase request failed: ${response.status} ${text}`);
    }
    return response;
};

const EXPLORE_CACHE_PATH = join(__dirname, 'settings', 'explore-cache.json');

app.get('/api/explore/models', async (req, res) => {
    try {
        const forceRefresh = req.query.force === 'true';

        // Ensure cache directory exists
        const cacheDir = dirname(EXPLORE_CACHE_PATH);
        if (!existsSync(cacheDir)) {
            mkdirSync(cacheDir, { recursive: true });
        }

        // Return cache if exists and not forced
        if (!forceRefresh && existsSync(EXPLORE_CACHE_PATH)) {
            try {
                const cached = JSON.parse(readFileSync(EXPLORE_CACHE_PATH, 'utf-8'));
                // Basic validation
                if (cached && cached.data && Array.isArray(cached.data)) {
                    // console.log('Serving explore models from cache');
                    return res.json(cached);
                }
            } catch (e) {
                console.warn('Failed to read explore cache, fetching fresh.', e);
            }
        }

        const apiKey = process.env.OPEN_ROUTER_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: 'Missing OPEN_ROUTER_API_KEY in environment' });
        }

        // console.log('Fetching explore models from OpenRouter...');
        const openRouterResponse = await fetch('https://openrouter.ai/api/v1/models?supported_parameters=structured_outputs', {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        if (!openRouterResponse.ok) {
            const text = await openRouterResponse.text();
            return res.status(openRouterResponse.status).json({ error: `OpenRouter API failed: ${text}` });
        }

        const data = await openRouterResponse.json();

        // Write to cache
        try {
            writeFileSync(EXPLORE_CACHE_PATH, JSON.stringify(data, null, 2));
            // console.log('Explore models cached.');
        } catch (e) {
            console.error('Failed to write explore cache:', e);
        }

        res.json(data);
    } catch (err: any) {
        console.error('Error fetching explore models:', err);
        res.status(500).json({ error: err.message });
    }
});

const toNumber = (value: unknown) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
};

const toInteger = (value: unknown) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? Math.round(parsed) : null;
};

const joinList = (items: string[] | null | undefined) =>
    items?.map(item => item.trim()).filter(Boolean).join(', ') ?? '';

const splitList = (value: string | null | undefined) => {
    if (!value) return [];
    return value.split(',').map(item => item.trim()).filter(Boolean);
};

const mapDbModelToAppModel = (row: DbModelRow) => {
    const contextLength = row.context_length ?? null;
    const contextK = contextLength !== null ? contextLength / 1024 : null;
    const parametersB = row.active_parameter_count_b ?? row.parameter_count_b;

    return {
        id: row.id ? String(row.id) : undefined,
        api_id: row.api_id ?? undefined,
        slug: row.slug ?? undefined,
        vendor_id: row.vendor_id ?? '',
        modelFamily: row.model_family ?? '',
        modelName: row.display_name ?? '',
        display_order: row.display_order ?? 0,
        description: row.description ?? '',
        parametersB: parametersB !== null ? String(parametersB) : '', // Legacy support
        parameter_count_b: row.parameter_count_b ?? undefined,
        active_parameter_count_b: row.active_parameter_count_b ?? undefined,
        contextK: contextK !== null ? contextK : '',
        context_length: contextLength ?? undefined,
        personalityTraits: joinList(row.personality_traits),
        analyticalTraits: joinList(row.professional_traits),
        bestFor: joinList(row.best_for),
        optimalTeamExamples: '',
        creativeScore: row.creativity_score ?? null,
        deductiveScore: row.logic_score ?? null,
        efficiencyScore: row.efficiency_score ?? null,
        specialPropertiesNotes: '',
        pricing: {
            prompt: row.price_prompt_micro ?? 0,
            completion: row.price_completion_micro ?? 0,
            tier: row.price_tier ?? 1
        },
        fallback_model_id: row.fallback_model_id ?? undefined,
        capabilities: row.capabilities ?? [],
        active: row.is_active ?? true,
        last_synced_at: undefined, // Add if available in DB row
        created_at: row.created_at,
        updated_at: row.updated_at,
        model_family: row.model_family ?? undefined,
        name_within_family: row.name_within_family ?? undefined
    };
};

const mapAppModelToDbUpdate = (model: any, isActive?: boolean) => {
    const contextK = toNumber(model.contextK);
    const contextLength = contextK !== null ? Math.round(contextK * 1024) : toInteger(model.context_length);
    // const parametersB = toNumber(model.parametersB); // Old field
    const parameterCountB = toInteger(model.parameter_count_b); // New field (DB is smallint)
    const activeParameterCountB = toInteger(model.active_parameter_count_b);

    const fallbackId = toInteger(model.fallback_model_id);
    const vendorId = toInteger(model.vendor_id);
    const displayOrder = toInteger(model.display_order) ?? 0;
    const pricing = model.pricing ?? {};
    const pricePrompt = toInteger(pricing.prompt);
    const priceCompletion = toInteger(pricing.completion);
    const priceTier = toInteger(pricing.tier);

    // Resolve active status: explicit argument > model property > undefined (no change)
    let activeStatus: boolean | undefined = undefined;
    if (typeof isActive === 'boolean') {
        activeStatus = isActive;
    } else if (typeof model.active === 'boolean') {
        activeStatus = model.active;
    } else if (typeof model.is_active === 'boolean') {
        activeStatus = model.is_active;
    }

    return {
        id: toInteger(model.id),
        api_id: model.api_id ?? undefined,
        slug: model.slug ?? undefined,
        vendor_id: vendorId ?? undefined,
        display_name: model.modelName ?? undefined,
        model_family: model.modelFamily ?? undefined,
        name_within_family: model.name_within_family ?? undefined,
        display_order: displayOrder,
        description: model.description ?? undefined,
        capabilities: Array.isArray(model.capabilities) ? model.capabilities : undefined,
        context_length: contextLength ?? undefined,
        price_prompt_micro: pricePrompt ?? undefined,
        price_completion_micro: priceCompletion ?? undefined,
        price_tier: priceTier ?? undefined,
        fallback_model_id: fallbackId ?? undefined,
        parameter_count_b: parameterCountB ?? undefined, // Correct mapping to schema
        active_parameter_count_b: activeParameterCountB ?? undefined,
        personality_traits: splitList(model.personalityTraits),
        professional_traits: splitList(model.analyticalTraits),
        best_for: splitList(model.bestFor),
        creativity_score: toInteger(model.creativeScore),
        logic_score: toInteger(model.deductiveScore),
        efficiency_score: toInteger(model.efficiencyScore),
        is_active: activeStatus
    };
};

const fetchModelsFromDb = async (isActive?: boolean) => {
    const activeFilter = typeof isActive === 'boolean' ? `&is_active=eq.${isActive}` : '';
    const response = await supabaseRequest(
        `llm_models?select=id,vendor_id,api_id,slug,display_name,display_order,description,capabilities,context_length,price_prompt_micro,price_completion_micro,price_tier,fallback_model_id,is_active,parameter_count_b,active_parameter_count_b,personality_traits,professional_traits,best_for,creativity_score,logic_score,efficiency_score,model_family,name_within_family,created_at,updated_at${activeFilter}&order=display_order.asc`
    );
    const rows = (await response.json()) as DbModelRow[];
    return rows.map(mapDbModelToAppModel);
};

const fetchVendorsFromDb = async () => {
    const response = await supabaseRequest(
        'llm_vendors?select=id,slug,display_name,display_order,is_active,created_at,updated_at,link,description&order=display_order.asc'
    );
    return (await response.json()) as DbVendorRow[];
};

const updateModelsInDb = async (models: any[], isActive?: boolean) => {
    const updates = models
        .map(model => mapAppModelToDbUpdate(model, isActive))
        .filter(update => update.id || update.api_id);

    await Promise.all(
        updates.map(async update => {
            const { id, api_id, ...payload } = update;
            const filter = id
                ? `id=eq.${id}`
                : `api_id=eq.${encodeURIComponent(String(api_id))}`;
            await supabaseRequest(`llm_models?${filter}`, {
                method: 'PATCH',
                headers: { Prefer: 'return=minimal' },
                body: JSON.stringify(payload)
            });
        })
    );
    return updates.length;
};

const updateModelOrdersInDb = async (orders: any[]) => {
    const updates = orders
        .map(entry => {
            if (!entry) return null;
            const id = toInteger(entry.id);
            const apiId = entry.api_id ? String(entry.api_id) : undefined;
            const displayOrder = toInteger(entry.display_order);
            if (displayOrder === null) return null;
            if (!id && !apiId) return null;
            return { id, apiId, display_order: displayOrder };
        })
        .filter(Boolean) as Array<{ id?: number | null; apiId?: string; display_order: number }>;

    await Promise.all(
        updates.map(async update => {
            const filter = update.id
                ? `id=eq.${update.id}`
                : `api_id=eq.${encodeURIComponent(String(update.apiId))}`;
            await supabaseRequest(`llm_models?${filter}`, {
                method: 'PATCH',
                headers: { Prefer: 'return=minimal' },
                body: JSON.stringify({ display_order: update.display_order })
            });
        })
    );

    return updates.length;
};

const updateModelInDb = async (model: any, isActive?: boolean) => {
    const update = mapAppModelToDbUpdate(model, isActive);
    const { id, api_id, ...payload } = update;
    if (!id && !api_id) {
        throw new Error('Missing model id or api_id.');
    }
    const filter = id
        ? `id=eq.${id}`
        : `api_id=eq.${encodeURIComponent(String(api_id))}`;
    await supabaseRequest(`llm_models?${filter}`, {
        method: 'PATCH',
        headers: { Prefer: 'return=minimal' },
        body: JSON.stringify(payload)
    });
};

const updateVendorsInDb = async (vendors: any[]) => {
    const updates = vendors
        .map((vendor: any) => ({
            id: toInteger(vendor.id),
            slug: vendor.slug ?? undefined,
            display_name: vendor.display_name ?? undefined,
            is_active: vendor.is_active ?? undefined,
            display_order: toInteger(vendor.display_order) ?? undefined,
            link: vendor.link ?? undefined,
            description: vendor.description ?? undefined
        }))
        .filter(update => update.id !== null);

    await Promise.all(
        updates.map(async update => {
            const { id, ...payload } = update;
            await supabaseRequest(`llm_vendors?id=eq.${id}`, {
                method: 'PATCH',
                headers: { Prefer: 'return=minimal' },
                body: JSON.stringify(payload)
            });
        })
    );

    return updates.length;
};

const updateVendorOrdersInDb = async (orders: any[]) => {
    const updates = orders
        .map(entry => {
            if (!entry) return null;
            const id = toInteger(entry.id);
            const displayOrder = toInteger(entry.display_order);
            if (id === null || displayOrder === null) return null;
            return { id, display_order: displayOrder };
        })
        .filter(Boolean) as Array<{ id: number; display_order: number }>;

    await Promise.all(
        updates.map(async update => {
            await supabaseRequest(`llm_vendors?id=eq.${update.id}`, {
                method: 'PATCH',
                headers: { Prefer: 'return=minimal' },
                body: JSON.stringify({ display_order: update.display_order })
            });
        })
    );

    return updates.length;
};

const deleteModelInDb = async (id?: number | null, apiId?: string | null) => {
    if (!id && !apiId) {
        throw new Error('Missing model id or api_id.');
    }
    const filter = id ? `id=eq.${id}` : `api_id=eq.${encodeURIComponent(String(apiId))}`;
    await supabaseRequest(`llm_models?${filter}`, {
        method: 'DELETE',
        headers: { Prefer: 'return=minimal' }
    });
};

// GET all models
app.get('/api/models', async (req, res) => {
    try {
        const models = await fetchModelsFromDb(true);
        res.json({
            generatedAt: new Date().toISOString(),
            totalModels: models.length,
            models
        });
    } catch (error) {
        console.error('Error reading models from database:', error);
        res.status(500).json({ error: 'Failed to read models from database' });
    }
});

// POST update model display order only
app.post('/api/models/order', async (req, res) => {
    try {
        const { orders } = req.body ?? {};
        if (!Array.isArray(orders)) {
            return res.status(400).json({ error: 'Invalid data format' });
        }
        const updatedCount = await updateModelOrdersInDb(orders);
        res.json({ success: true, updated: updatedCount });
    } catch (error) {
        console.error('Error updating model order in database:', error);
        res.status(500).json({ error: 'Failed to update model order' });
    }
});

// --- Settings Operations ---
const SETTINGS_FILE_PATH = join(__dirname, 'settings', 'model-settings.json');

const ensureSettingsDir = () => {
    const dir = dirname(SETTINGS_FILE_PATH);
    if (!existsSync(dir)) {
        // use run_command logic? No, just use fs here since it is node server code
        // But `fs` was imported from 'fs' at top. 
        // Need to import mkdirSync if not present or use shell. 
        // Actually I can just use fs.mkdirSync. 
        // Let's check imports.
        // Imports are: { existsSync, readFileSync, writeFileSync } from 'fs';
        // efficient to add mkdirSync to imports or just assume fs? 
        // I will add mkdirSync to imports in another edit if needed, or just import * as fs.
        // Wait, I can't easily change imports way up top in same block without reading file.
        // I'll assume I can add it to the import list or use a separate import line if I was replacing top.
        // Since I'm replacing middle of file, I'll use a dynamic import or just add the endpoints and fix imports in next step?
        // Better: I will use `fs` if available or `mkdirSync`.
        // Let's strictly follow the file content. 
        // I'll add the endpoints and helper functions first.
    }
};

const readModelSettings = () => {
    try {
        if (!existsSync(SETTINGS_FILE_PATH)) {
            return { irrelevant_models_api_keys: [] };
        }
        const content = readFileSync(SETTINGS_FILE_PATH, 'utf-8');
        return JSON.parse(content);
    } catch (error) {
        console.error('Error reading settings file:', error);
        return { irrelevant_models_api_keys: [] };
    }
};

const writeModelSettings = (settings: any) => {
    const dir = dirname(SETTINGS_FILE_PATH);
    if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
    }
    writeFileSync(SETTINGS_FILE_PATH, JSON.stringify(settings, null, 2));
};

// GET settings
app.get('/api/settings/models', (req, res) => {
    const settings = readModelSettings();
    res.json(settings);
});

// POST settings
app.post('/api/settings/models', (req, res) => {
    try {
        const settings = req.body;
        if (!settings || !Array.isArray(settings.irrelevant_models_api_keys)) {
            return res.status(400).json({ error: 'Invalid settings format' });
        }
        writeModelSettings(settings);
        res.json({ success: true });
    } catch (error) {
        console.error('Error writing settings:', error);
        res.status(500).json({ error: 'Failed to save settings' });
    }
});

// GET all vendors
app.get('/api/vendors', async (req, res) => {
    try {
        const vendors = await fetchVendorsFromDb();
        res.json({
            generatedAt: new Date().toISOString(),
            totalVendors: vendors.length,
            vendors
        });
    } catch (error) {
        console.error('Error reading vendors from database:', error);
        res.status(500).json({ error: 'Failed to read vendors from database' });
    }
});

// POST update vendors
app.post('/api/vendors', async (req, res) => {
    try {
        const newContent = req.body;
        if (!newContent || !Array.isArray(newContent.vendors)) {
            return res.status(400).json({ error: 'Invalid data format' });
        }

        const updatedCount = await updateVendorsInDb(newContent.vendors);
        res.json({ success: true, updated: updatedCount });
    } catch (error) {
        console.error('Error updating vendors in database:', error);
        res.status(500).json({ error: 'Failed to save vendors to database' });
    }
});

// POST update vendor display order only
app.post('/api/vendors/order', async (req, res) => {
    try {
        const { orders } = req.body ?? {};
        if (!Array.isArray(orders)) {
            return res.status(400).json({ error: 'Invalid data format' });
        }
        const updatedCount = await updateVendorOrdersInDb(orders);
        res.json({ success: true, updated: updatedCount });
    } catch (error) {
        console.error('Error updating vendor order in database:', error);
        res.status(500).json({ error: 'Failed to update vendor order' });
    }
});

// POST update models
app.post('/api/models', async (req, res) => {
    try {
        const newContent = req.body;
        // Basic validation to ensure it has the models array
        if (!newContent || !Array.isArray(newContent.models)) {
            return res.status(400).json({ error: 'Invalid data format' });
        }

        const updatedCount = await updateModelsInDb(newContent.models);
        res.json({ success: true, updated: updatedCount });
    } catch (error) {
        console.error('Error updating models in database:', error);
        res.status(500).json({ error: 'Failed to save models to database' });
    }
});

// POST update a single model
app.post('/api/models/update', async (req, res) => {
    try {
        const model = req.body?.model ?? req.body;
        if (!model) {
            return res.status(400).json({ error: 'Missing model payload' });
        }
        await updateModelInDb(model);
        res.json({ success: true });
    } catch (error) {
        console.error('Error updating model in database:', error);
        res.status(500).json({ error: 'Failed to update model in database' });
    }
});

const createModelInDb = async (model: any) => {
    const update = mapAppModelToDbUpdate(model, true);
    // Remove id to let DB auto-increment
    const { id, ...payload } = update;

    // Ensure critical fields are set or defaulted
    if (!payload.vendor_id || !payload.display_name) {
        throw new Error('Missing required fields: vendor_id or display_name');
    }

    await supabaseRequest('llm_models', {
        method: 'POST',
        headers: { 'Prefer': 'return=minimal' },
        body: JSON.stringify(payload)
    });
};

// POST create a new model
app.post('/api/models/create', async (req, res) => {
    try {
        const model = req.body?.model ?? req.body;
        if (!model) {
            return res.status(400).json({ error: 'Missing model payload' });
        }
        await createModelInDb(model);
        res.json({ success: true });
    } catch (error) {
        console.error('Error creating model in database:', error);
        res.status(500).json({ error: 'Failed to create model in database' });
    }
});

// DELETE a model
app.delete('/api/models', async (req, res) => {
    try {
        const { id, api_id } = req.body ?? {};
        await deleteModelInDb(toInteger(id) ?? undefined, api_id ?? undefined);
        res.json({ success: true });
    } catch (error) {
        console.error('Error deleting model from database:', error);
        res.status(500).json({ error: 'Failed to delete model from database' });
    }
});

// GET archived models
app.get('/api/archive', async (req, res) => {
    try {
        const models = await fetchModelsFromDb(false);
        res.json({
            generatedAt: new Date().toISOString(),
            totalModels: models.length,
            models
        });
    } catch (error) {
        console.error('Error reading archived models from database:', error);
        res.status(500).json({ error: 'Failed to read archive from database' });
    }
});

// POST update archived models
app.post('/api/archive', async (req, res) => {
    try {
        const newContent = req.body;
        if (!newContent || !Array.isArray(newContent.models)) {
            return res.status(400).json({ error: 'Invalid data format' });
        }

        const updatedCount = await updateModelsInDb(newContent.models);
        res.json({ success: true, updated: updatedCount });
    } catch (error) {
        console.error('Error updating archived models in database:', error);
        res.status(500).json({ error: 'Failed to save archive to database' });
    }
});

// --- DB Types & Mappers for Teams/Members ---

type DbTeamRow = {
    id: string;
    user_id: string;
    name: string;
    description: string | null;
    is_public: boolean;
    catch_phrase: string | null;
    category: string | null;
    quick_starts: string[] | null;
    default_starting_rounds: number | null;
    bootstrap_prompt: string | null;
    is_saved: boolean;
    originated_from_team: string | null;
    display_order: number | null;
    created_at: string;
    updated_at: string;
};

type DbMemberRow = {
    id: string;
    name: string;
    role: string;
    team_role: string | null;
    color: string | null;
    characteristics: any | null; // jsonb
    life_story: string | null;
    special_orders: string | null;
    team_id: string;
    model_id: number | null; // nullable in DB schema if set null on delete
    display_order: number | null;
    created_at: string;
    // joined fields
    llm_models?: { display_name: string } | null;
};

const mapDbTeamToAppTeam = (row: DbTeamRow) => ({
    id: row.id,
    user_id: row.user_id,
    name: row.name,
    description: row.description ?? '',
    is_public: row.is_public,
    catch_phrase: row.catch_phrase ?? '',
    category: (row.category as any) ?? 'OPS',
    quick_starts: row.quick_starts ?? [],
    default_starting_rounds: row.default_starting_rounds,
    bootstrap_prompt: row.bootstrap_prompt,
    is_saved: row.is_saved,
    originated_from_team: row.originated_from_team,
    display_order: row.display_order ?? undefined,
    created_at: row.created_at,
    updated_at: row.updated_at
});

const mapDbMemberToAppMember = (row: DbMemberRow) => ({
    id: row.id,
    name: row.name,
    role: (row.role as any),
    team_role: row.team_role ?? '',
    color: row.color,
    characteristics: Array.isArray(row.characteristics) ? row.characteristics : [],
    life_story: row.life_story,
    special_orders: row.special_orders,
    team_id: row.team_id,
    model_id: row.model_id ?? 0,
    display_order: row.display_order ?? undefined,
    model_name: row.llm_models?.display_name ?? '',
    created_at: row.created_at
});

// --- Teams Operations ---

const fetchTeamsFromDb = async () => {
    // For now, fetching all teams. In real app, filter by user_id or is_public.
    const response = await supabaseRequest(
        `team?select=*&order=display_order.asc.nullslast,name.asc`
    );
    const rows = (await response.json()) as DbTeamRow[];
    return rows.map(mapDbTeamToAppTeam);
};

const updateTeamOrdersInDb = async (orders: any[]) => {
    const updates = orders
        .map(entry => {
            if (!entry || !entry.id) return null;
            const displayOrder = toInteger(entry.display_order);
            if (displayOrder === null) return null;
            return { id: entry.id, display_order: displayOrder };
        })
        .filter(Boolean) as Array<{ id: string; display_order: number }>;

    await Promise.all(
        updates.map(async update => {
            await supabaseRequest(`team?id=eq.${update.id}`, {
                method: 'PATCH',
                headers: { Prefer: 'return=minimal' },
                body: JSON.stringify({ display_order: update.display_order })
            });
        })
    );

    return updates.length;
};

// --- DB Types & Mappers for Users/Sessions ---

type DbAppUserRow = {
    id: string;
    email: string;
    display_name: string | null;
    created_at: string;
    chat_name: string | null;
    community_name: string;
    image_url: string | null;
    location: string | null;
    gender: string | null;
    profession: string | null;
    extras: string | null;
    legion_id: string | null;
    type: string; // user type
    // joined billing
    app_user_billing_state?: {
        plan_credits_balance: number;
        last_period_usage_usd: number;
        no_plan_since: string | null;
        updated_at: string;
        billing_plan?: {
            code: string;
            name: string;
        } | null;
    } | null;
};

type DbSessionRow = {
    id: string;
    user_id: string;
    name: string;
    status: string;
    halt_reason: string | null;
    halted_on_step: string | null;
    access: string | null;
    root_product_id: string | null;
    rounds_left: number;
    current_round: number;
    created_at: string;
    updated_at: string;
    mission_charter: string | null;
    archived_at: string | null;
    team_id: string;
    error: string | null;
    round_status: string | null;
    legion_id: string | null;
    repository_id: string | null;
    // joined fields
    app_user?: { display_name: string } | null;
    team?: { name: string } | null;
};

const mapDbUserToAppUser = (row: DbAppUserRow) => ({
    id: row.id,
    email: row.email,
    display_name: row.display_name ?? '',
    created_at: row.created_at,
    chat_name: row.chat_name ?? '',
    community_name: row.community_name,
    image_url: row.image_url ?? '',
    location: row.location ?? '',
    gender: row.gender ?? '',
    profession: row.profession ?? '',
    extras: row.extras ?? '',
    legion_id: row.legion_id,
    type: row.type,
    // usage stats
    plan_credits_balance: row.app_user_billing_state?.plan_credits_balance ?? 0,
    last_period_usage_usd: row.app_user_billing_state?.last_period_usage_usd ?? 0,
    last_active: row.app_user_billing_state?.updated_at ?? row.created_at,
    // plan info
    plan_code: row.app_user_billing_state?.billing_plan?.code ?? 'no_plan',
    plan_name: row.app_user_billing_state?.billing_plan?.name ?? 'No Plan',
});

const mapDbSessionToAppSession = (row: DbSessionRow) => ({
    id: row.id,
    user_id: row.user_id,
    name: row.name,
    status: row.status,
    halt_reason: row.halt_reason,
    halted_on_step: row.halted_on_step,
    access: row.access,
    root_product_id: row.root_product_id,
    rounds_left: row.rounds_left,
    current_round: row.current_round,
    created_at: row.created_at,
    updated_at: row.updated_at,
    mission_charter: row.mission_charter,
    archived_at: row.archived_at,
    team_id: row.team_id,
    error: row.error,
    round_status: row.round_status,
    legion_id: row.legion_id,
    repository_id: row.repository_id,
    user_name: row.app_user?.display_name ?? 'Unknown User',
    team_name: row.team?.name ?? 'Unknown Team'
});

// --- Users/Sessions Operations ---

const fetchUsersFromDb = async () => {
    // select=*,app_user_billing_state(plan_credits_balance,last_period_usage_usd,billing_plan(code,name))
    // Note: billing_plan is a nested relation inside billing_state
    const response = await supabaseRequest(
        `app_user?select=*,app_user_billing_state(plan_credits_balance,last_period_usage_usd,updated_at,billing_plan(code,name))&order=created_at.desc`
    );
    const rows = (await response.json()) as DbAppUserRow[];
    return rows.map(mapDbUserToAppUser);
};

const fetchSessionsFromDb = async () => {
    const response = await supabaseRequest(
        `session?select=*,app_user!session_user_id_fkey(display_name),team(name)&order=created_at.desc`
    );
    const rows = (await response.json()) as DbSessionRow[];
    return rows.map(mapDbSessionToAppSession);
};

// GET all users
app.get('/api/users', async (req, res) => {
    try {
        const users = await fetchUsersFromDb();
        res.json({
            generatedAt: new Date().toISOString(),
            totalUsers: users.length,
            users
        });
    } catch (error) {
        console.error('Error reading users from database:', error);
        res.status(500).json({ error: 'Failed to read users from database' });
    }
});

const updateUserInDb = async (user: any) => {
    const payload = {
        display_name: user.display_name,
        chat_name: user.chat_name || null,
        community_name: user.community_name,
        location: user.location || null,
        gender: user.gender || null,
        profession: user.profession || null,
        extras: user.extras || null,
        type: user.type
    };

    if (!user.id) throw new Error('Missing user id');

    await supabaseRequest(`app_user?id=eq.${user.id}`, {
        method: 'PATCH',
        body: JSON.stringify(payload)
    });
};

// POST update user
app.post('/api/users/update', async (req, res) => {
    try {
        const user = req.body?.user ?? req.body;
        if (!user || !user.id) {
            return res.status(400).json({ error: 'Missing user payload' });
        }
        await updateUserInDb(user);
        res.json({ success: true });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Failed to update user' });
    }
});

// GET all sessions
app.get('/api/sessions', async (req, res) => {
    try {
        const sessions = await fetchSessionsFromDb();
        res.json({
            generatedAt: new Date().toISOString(),
            totalSessions: sessions.length,
            sessions
        });
    } catch (error) {
        console.error('Error reading sessions from database:', error);
        res.status(500).json({ error: 'Failed to read sessions from database' });
    }
});
const updateTeamInDb = async (team: any) => {
    const payload = {
        name: team.name,
        description: team.description || null,
        is_public: team.is_public ?? false,
        catch_phrase: team.catch_phrase || null,
        category: team.category,
        quick_starts: team.quick_starts || [],
        default_starting_rounds: team.default_starting_rounds,
        bootstrap_prompt: team.bootstrap_prompt || null,
        is_saved: team.is_saved ?? true,
        updated_at: new Date().toISOString()
    };

    if (team.id) {
        await supabaseRequest(`team?id=eq.${team.id}`, {
            method: 'PATCH',
            body: JSON.stringify(payload)
        });
    } else {
        // Create
        // HARDCODED user_id for now as per context limitations (single user dev environment usually)
        // Ideally user_id comes from auth context. Using a placeholder or first user if needed.
        // Since we don't have auth, we might need a dummy UUID or check app_user table.
        // For this task, assuming a default user exists or we can use a hardcoded compatible UUID.
        // Let's fetch the first user to be safe.
        const userResp = await supabaseRequest(`app_user?limit=1&select=id`);
        const users = await userResp.json();
        const userId = users?.[0]?.id;

        if (!userId) throw new Error("No app_user found to assign team to.");

        await supabaseRequest(`team`, {
            method: 'POST',
            body: JSON.stringify({
                ...payload,
                user_id: userId,
                is_saved: true // explicitly true on create as requested
            })
        });
    }
};

const deleteTeamInDb = async (id: string) => {
    // Manual cascade delete to handle foreign key constraints
    // 1. Delete associated sessions
    await supabaseRequest(`session?team_id=eq.${id}`, { method: 'DELETE' });

    // 2. Delete associated members (though members usually cascade from team, safe to explicit delete)
    await supabaseRequest(`member?team_id=eq.${id}`, { method: 'DELETE' });

    // 3. Delete the team itself
    await supabaseRequest(`team?id=eq.${id}`, { method: 'DELETE' });
};

// --- Members Operations ---

const fetchMembersFromDb = async () => {
    // Join with llm_models to get model name
    const response = await supabaseRequest(
        `member?select=*,llm_models(display_name)&order=display_order.asc.nullslast,created_at.asc`
    );
    const rows = (await response.json()) as DbMemberRow[];
    return rows.map(mapDbMemberToAppMember);
};

const updateMemberOrdersInDb = async (orders: any[]) => {
    const updates = orders
        .map(entry => {
            if (!entry || !entry.id) return null;
            const displayOrder = toInteger(entry.display_order);
            if (displayOrder === null) return null;
            return { id: entry.id, display_order: displayOrder };
        })
        .filter(Boolean) as Array<{ id: string; display_order: number }>;

    await Promise.all(
        updates.map(async update => {
            await supabaseRequest(`member?id=eq.${update.id}`, {
                method: 'PATCH',
                headers: { Prefer: 'return=minimal' },
                body: JSON.stringify({ display_order: update.display_order })
            });
        })
    );

    return updates.length;
};

const updateMemberInDb = async (member: any) => {
    const payload = {
        name: member.name,
        role: member.role,
        team_role: member.team_role || null,
        color: member.color || null,
        characteristics: member.characteristics || [],
        life_story: member.life_story || null,
        special_orders: member.special_orders || null,
        team_id: member.team_id,
        model_id: member.model_id
    };

    if (member.id) {
        await supabaseRequest(`member?id=eq.${member.id}`, {
            method: 'PATCH',
            body: JSON.stringify(payload)
        });
    } else {
        await supabaseRequest(`member`, {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    }
};

const deleteMemberInDb = async (id: string) => {
    await supabaseRequest(`member?id=eq.${id}`, { method: 'DELETE' });
};

// --- API Endpoints Replacement ---

// GET teams from DB
app.get('/api/teams', async (req, res) => {
    try {
        const teams = await fetchTeamsFromDb();
        res.json({
            generatedAt: new Date().toISOString(),
            totalTeams: teams.length,
            teams
        });
    } catch (error) {
        console.error('Error reading teams from database:', error);
        res.status(500).json({ error: 'Failed to read teams from database' });
    }
});

// POST update/create team
app.post('/api/teams', async (req, res) => {
    try {
        const payload = req.body;
        // Supports batch or single. If array (legacy format compatibility), handle multiple.
        if (payload?.teams && Array.isArray(payload.teams)) {
            // If full sync is requested, we might need logic to delete missing?
            // For now, let's assume this endpoint is used for "Upsert All" or just accept it processes updates.
            // Given the request "handle everything against the database", straightforward CRUD is better.
            // But to keep compatibility with `TeamsView` likely sending a list for reorder/bulk save:
            for (const team of payload.teams) {
                await updateTeamInDb(team);
            }
            const count = payload.teams.length;
            res.json({ success: true, updated: count });
        } else if (payload?.team) {
            // Single update/create
            await updateTeamInDb(payload.team);
            res.json({ success: true });
        } else {
            // Fallback if direct body is the team object
            await updateTeamInDb(payload);
            res.json({ success: true });
        }
    } catch (error) {
        console.error('Error saving team(s):', error);
        res.status(500).json({ error: 'Failed to save team(s)' });
    }
});

// POST update team display order only
app.post('/api/teams/order', async (req, res) => {
    try {
        const { orders } = req.body ?? {};
        if (!Array.isArray(orders)) {
            return res.status(400).json({ error: 'Invalid data format' });
        }
        const updatedCount = await updateTeamOrdersInDb(orders);
        res.json({ success: true, updated: updatedCount });
    } catch (error) {
        console.error('Error updating team order in database:', error);
        res.status(500).json({ error: 'Failed to update team order' });
    }
});


const duplicateTeamInDb = async (originalTeamId: string) => {
    // 1. Fetch original team
    const teamRes = await supabaseRequest(`team?id=eq.${originalTeamId}`);
    const teams = await teamRes.json();
    const originalTeam = teams?.[0];
    if (!originalTeam) throw new Error("Original team not found");

    // 2. Prepare new team payload
    // Remove ID, created_at, updated_at to let DB handle them
    // Add "Copy of" to name
    const { id, created_at, updated_at, ...teamData } = originalTeam;
    const newTeamPayload = {
        ...teamData,
        name: `${teamData.name} (Copy)`,
        originated_from_team: originalTeamId,
        is_saved: true
    };

    // 3. Create new team -> Return representation to get the new ID
    const createRes = await supabaseRequest('team', {
        method: 'POST',
        headers: { 'Prefer': 'return=representation' },
        body: JSON.stringify(newTeamPayload)
    });
    const newTeams = await createRes.json();
    const newTeam = newTeams?.[0];
    if (!newTeam) throw new Error("Failed to create duplicated team");
    const newTeamId = newTeam.id;

    // 4. Fetch original members
    const membersRes = await supabaseRequest(`member?team_id=eq.${originalTeamId}`);
    const members = await membersRes.json();

    // 5. Duplicate members
    if (members && members.length > 0) {
        const newMembersPayload = members.map((member: any) => {
            const { id, created_at, team_id, ...memberData } = member;
            return {
                ...memberData,
                team_id: newTeamId
            };
        });

        await supabaseRequest('member', {
            method: 'POST',
            body: JSON.stringify(newMembersPayload)
        });
    }

    return newTeam; // Return the full new team object
};


// DELETE team
app.delete('/api/teams', async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) return res.status(400).json({ error: 'Missing team id' });
        await deleteTeamInDb(id);
        res.json({ success: true });
    } catch (error) {
        console.error('Error deleting team:', error);
        res.status(500).json({ error: 'Failed to delete team' });
    }
});

// DUPLICATE team
app.post('/api/teams/duplicate', async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) return res.status(400).json({ error: 'Missing team id to duplicate' });
        const newTeam = await duplicateTeamInDb(id);
        res.json({ success: true, team: newTeam });
    } catch (error) {
        console.error('Error duplicating team:', error);
        res.status(500).json({ error: 'Failed to duplicate team' });
    }
});


// GET members from DB
app.get('/api/members', async (req, res) => {
    try {
        const members = await fetchMembersFromDb();
        res.json({
            generatedAt: new Date().toISOString(),
            totalMembers: members.length,
            members
        });
    } catch (error) {
        console.error('Error reading members from database:', error);
        res.status(500).json({ error: 'Failed to read members from database' });
    }
});

// POST update/create member
app.post('/api/members', async (req, res) => {
    try {
        const payload = req.body;
        if (payload?.members && Array.isArray(payload.members)) {
            for (const member of payload.members) {
                await updateMemberInDb(member);
            }
            res.json({ success: true, updated: payload.members.length });
        } else if (payload?.member) {
            await updateMemberInDb(payload.member);
            res.json({ success: true });
        } else {
            await updateMemberInDb(payload);
            res.json({ success: true });
        }
    } catch (error) {
        console.error('Error saving member(s):', error);
        res.status(500).json({ error: 'Failed to save member(s)' });
    }
});

// POST update member display order only
app.post('/api/members/order', async (req, res) => {
    try {
        const { orders } = req.body ?? {};
        if (!Array.isArray(orders)) {
            return res.status(400).json({ error: 'Invalid data format' });
        }
        const updatedCount = await updateMemberOrdersInDb(orders);
        res.json({ success: true, updated: updatedCount });
    } catch (error) {
        console.error('Error updating member order in database:', error);
        res.status(500).json({ error: 'Failed to update member order' });
    }
});

// DELETE member
app.delete('/api/members', async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) return res.status(400).json({ error: 'Missing member id' });
        await deleteMemberInDb(id);
        res.json({ success: true });
    } catch (error) {
        console.error('Error deleting member:', error);
        res.status(500).json({ error: 'Failed to delete member' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`API available at http://localhost:${PORT}/api/models`);
});
