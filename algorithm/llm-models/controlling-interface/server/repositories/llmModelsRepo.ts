import { supabaseRequest } from '../db/supabase';
import { DbLlmModelRow } from '../types/db';

const MODEL_SELECT = [
    'id',
    'vendor_id',
    'api_id',
    'slug',
    'display_name',
    'display_order',
    'description',
    'capabilities',
    'context_length',
    'price_prompt_micro',
    'price_completion_micro',
    'price_tier',
    'fallback_model_id',
    'is_active',
    'last_synced_at',
    'parameter_count_b',
    'active_parameter_count_b',
    'personality_traits',
    'professional_traits',
    'best_for',
    'creativity_score',
    'logic_score',
    'efficiency_score',
    'model_family',
    'name_within_family',
    'created_at',
    'updated_at'
].join(',');

export const fetchModels = async (active?: boolean) => {
    const activeFilter = typeof active === 'boolean' ? `&is_active=eq.${active}` : '';
    const response = await supabaseRequest(
        `llm_models?select=${MODEL_SELECT}${activeFilter}&order=display_order.asc`
    );
    return (await response.json()) as DbLlmModelRow[];
};

export const createModel = async (payload: Partial<DbLlmModelRow>) => {
    await supabaseRequest('llm_models', {
        method: 'POST',
        headers: { Prefer: 'return=minimal' },
        body: JSON.stringify(payload)
    });
};

export const updateModel = async (
    filter: { id?: number; api_id?: string },
    payload: Partial<DbLlmModelRow>
) => {
    if (!filter.id && !filter.api_id) {
        throw new Error('Missing model id or api_id.');
    }
    const query = filter.id
        ? `id=eq.${filter.id}`
        : `api_id=eq.${encodeURIComponent(String(filter.api_id))}`;
    await supabaseRequest(`llm_models?${query}`, {
        method: 'PATCH',
        headers: { Prefer: 'return=minimal' },
        body: JSON.stringify(payload)
    });
};

export const updateModelsBulk = async (
    updates: Array<{ filter: { id?: number; api_id?: string }; payload: Partial<DbLlmModelRow> }>
) => {
    await Promise.all(updates.map((update) => updateModel(update.filter, update.payload)));
    return updates.length;
};

export const updateModelOrders = async (
    orders: Array<{ id?: number; api_id?: string; display_order: number }>
) => {
    const updates = orders.filter((order) => Number.isFinite(order.display_order));
    await Promise.all(
        updates.map((order) =>
            updateModel(
                { id: order.id, api_id: order.api_id },
                { display_order: order.display_order }
            )
        )
    );
    return updates.length;
};

export const deleteModel = async (filter: { id?: number; api_id?: string }) => {
    if (!filter.id && !filter.api_id) {
        throw new Error('Missing model id or api_id.');
    }
    const query = filter.id
        ? `id=eq.${filter.id}`
        : `api_id=eq.${encodeURIComponent(String(filter.api_id))}`;
    await supabaseRequest(`llm_models?${query}`, { method: 'DELETE' });
};
