import { supabaseRequest } from '../db/supabase';
import { DbMemberRow } from '../types/db';

const MEMBER_SELECT = '*,llm_models(display_name)';

export const fetchMembers = async () => {
    const response = await supabaseRequest(
        `member?select=${MEMBER_SELECT}&order=display_order.asc.nullslast,created_at.asc`
    );
    return (await response.json()) as DbMemberRow[];
};

export const createMember = async (payload: Partial<DbMemberRow>) => {
    await supabaseRequest('member', {
        method: 'POST',
        headers: { Prefer: 'return=minimal' },
        body: JSON.stringify(payload)
    });
};

export const updateMember = async (id: string, payload: Partial<DbMemberRow>) => {
    await supabaseRequest(`member?id=eq.${id}`, {
        method: 'PATCH',
        headers: { Prefer: 'return=minimal' },
        body: JSON.stringify(payload)
    });
};

export const updateMemberOrders = async (orders: Array<{ id: string; display_order: number }>) => {
    await Promise.all(
        orders.map((order) => updateMember(order.id, { display_order: order.display_order }))
    );
    return orders.length;
};

export const deleteMember = async (id: string) => {
    await supabaseRequest(`member?id=eq.${id}`, { method: 'DELETE' });
};

export const migrateMembersModel = async (fromModelId: number, toModelId: number) => {
    await supabaseRequest(`member?model_id=eq.${fromModelId}`, {
        method: 'PATCH',
        headers: { Prefer: 'return=minimal' },
        body: JSON.stringify({ model_id: toModelId })
    });
};
