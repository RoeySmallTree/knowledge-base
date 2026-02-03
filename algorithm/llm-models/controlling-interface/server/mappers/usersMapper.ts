import { DbAppUserRow } from '../types/db';
import { AppUserDto, AppUserInput } from '../types/api';
import { parseDbNumeric } from '../utils/parse';

export const mapDbUserToDto = (row: DbAppUserRow): AppUserDto => ({
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
    legion_id: row.legion_id ?? null,
    type: row.type,
    plan_code: row.app_user_billing_state?.billing_plan?.code ?? 'no_plan',
    plan_name: row.app_user_billing_state?.billing_plan?.name ?? 'No Plan',
    plan_credits_balance: row.app_user_billing_state?.plan_credits_balance ?? 0,
    last_period_usage_usd: parseDbNumeric(row.app_user_billing_state?.last_period_usage_usd ?? null) ?? 0,
    last_active: row.app_user_billing_state?.updated_at ?? row.created_at
});

export const mapUserInputToDbUpdate = (user: AppUserInput) => ({
    display_name: user.display_name ?? undefined,
    chat_name: user.chat_name ?? null,
    community_name: user.community_name ?? undefined,
    location: user.location ?? null,
    gender: user.gender ?? null,
    profession: user.profession ?? null,
    extras: user.extras ?? null,
    type: user.type ?? undefined
});
