import { supabaseRequest } from '../db/supabase';
import { DbAppUserRow } from '../types/db';

const USER_SELECT =
    '*,app_user_billing_state(plan_credits_balance,last_period_usage_usd,no_plan_since,updated_at,billing_plan!app_user_billing_state_current_plan_id_fkey(code,name))';

export const fetchUsers = async () => {
    const response = await supabaseRequest(
        `app_user?select=${USER_SELECT}&order=created_at.desc`
    );
    return (await response.json()) as DbAppUserRow[];
};

export const updateUser = async (id: string, payload: Partial<DbAppUserRow>) => {
    await supabaseRequest(`app_user?id=eq.${id}`, {
        method: 'PATCH',
        headers: { Prefer: 'return=minimal' },
        body: JSON.stringify(payload)
    });
};
