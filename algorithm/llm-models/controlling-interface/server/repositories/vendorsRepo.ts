import { supabaseRequest } from '../db/supabase';
import { DbVendorRow } from '../types/db';

const VENDOR_SELECT = [
    'id',
    'slug',
    'display_name',
    'display_order',
    'is_active',
    'created_at',
    'updated_at',
    'link',
    'description'
].join(',');

export const fetchVendors = async () => {
    const response = await supabaseRequest(
        `llm_vendors?select=${VENDOR_SELECT}&order=display_order.asc`
    );
    return (await response.json()) as DbVendorRow[];
};

export const createVendor = async (payload: Partial<DbVendorRow>) => {
    await supabaseRequest('llm_vendors', {
        method: 'POST',
        headers: { Prefer: 'return=minimal' },
        body: JSON.stringify(payload)
    });
};

export const updateVendor = async (id: number, payload: Partial<DbVendorRow>) => {
    await supabaseRequest(`llm_vendors?id=eq.${id}`, {
        method: 'PATCH',
        headers: { Prefer: 'return=minimal' },
        body: JSON.stringify(payload)
    });
};

export const updateVendorsBulk = async (
    updates: Array<{ id: number; payload: Partial<DbVendorRow> }>
) => {
    await Promise.all(updates.map((update) => updateVendor(update.id, update.payload)));
    return updates.length;
};

export const updateVendorOrders = async (
    orders: Array<{ id: number; display_order: number }>
) => {
    await Promise.all(
        orders.map((order) =>
            updateVendor(order.id, { display_order: order.display_order })
        )
    );
    return orders.length;
};
