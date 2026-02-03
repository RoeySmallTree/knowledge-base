import { DbSessionRow } from '../types/db';
import { SessionDto } from '../types/api';

export const mapDbSessionToDto = (row: DbSessionRow): SessionDto => ({
    id: row.id,
    user_id: row.user_id,
    name: row.name,
    status: row.status,
    halt_reason: row.halt_reason ?? null,
    halted_on_step: row.halted_on_step ?? null,
    access: row.access ?? null,
    root_product_id: row.root_product_id ?? null,
    rounds_left: row.rounds_left,
    current_round: row.current_round,
    created_at: row.created_at,
    updated_at: row.updated_at,
    mission_charter: row.mission_charter ?? null,
    archived_at: row.archived_at ?? null,
    team_id: row.team_id,
    error: row.error ?? null,
    round_status: row.round_status ?? null,
    legion_id: row.legion_id ?? null,
    repository_id: row.repository_id ?? null,
    user_name: row.app_user?.display_name ?? 'Unknown User',
    team_name: row.team?.name ?? 'Unknown Team'
});
