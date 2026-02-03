import { DbTeamRow } from '../types/db';
import { TeamDto, TeamInput } from '../types/api';
import { toInteger } from '../utils/parse';

export const mapDbTeamToDto = (row: DbTeamRow): TeamDto => ({
    id: row.id,
    user_id: row.user_id,
    name: row.name,
    description: row.description ?? '',
    is_public: row.is_public ?? false,
    catch_phrase: row.catch_phrase ?? '',
    category: row.category ?? 'OPS',
    quick_starts: row.quick_starts ?? [],
    default_starting_rounds: row.default_starting_rounds ?? null,
    bootstrap_prompt: row.bootstrap_prompt ?? null,
    is_saved: row.is_saved ?? false,
    originated_from_team: row.originated_from_team ?? null,
    display_order: row.display_order ?? 0,
    created_at: row.created_at,
    updated_at: row.updated_at
});

export const mapTeamInputToDbUpdate = (team: TeamInput) => ({
    user_id: team.user_id ?? undefined,
    name: team.name ?? undefined,
    description: team.description ?? undefined,
    is_public: typeof team.is_public === 'boolean' ? team.is_public : undefined,
    catch_phrase: team.catch_phrase ?? undefined,
    category: team.category ?? undefined,
    quick_starts: team.quick_starts ?? undefined,
    default_starting_rounds: team.default_starting_rounds ?? undefined,
    bootstrap_prompt: team.bootstrap_prompt ?? undefined,
    is_saved: typeof team.is_saved === 'boolean' ? team.is_saved : undefined,
    originated_from_team: team.originated_from_team ?? undefined,
    display_order: toInteger(team.display_order) ?? undefined,
    updated_at: new Date().toISOString()
});
