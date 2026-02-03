import { DbMemberRow } from '../types/db';
import { MemberDto, MemberInput } from '../types/api';
import { toInteger } from '../utils/parse';

const normalizeCharacteristics = (value: unknown): string[] => {
    if (Array.isArray(value)) return value.map((item) => String(item)).filter(Boolean);
    if (typeof value === 'string') {
        return value.split(',').map((item) => item.trim()).filter(Boolean);
    }
    if (value && typeof value === 'object') {
        return Object.values(value as Record<string, unknown>)
            .map((item) => String(item))
            .filter(Boolean);
    }
    return [];
};

export const mapDbMemberToDto = (row: DbMemberRow): MemberDto => ({
    id: row.id,
    name: row.name,
    role: row.role,
    team_role: row.team_role ?? '',
    color: row.color ?? null,
    characteristics: normalizeCharacteristics(row.characteristics),
    life_story: row.life_story ?? null,
    special_orders: row.special_orders ?? null,
    team_id: row.team_id,
    model_id: row.model_id,
    display_order: row.display_order ?? 0,
    model_name: row.llm_models?.display_name ?? '',
    created_at: row.created_at
});

export const mapMemberInputToDbUpdate = (member: MemberInput) => ({
    name: member.name ?? undefined,
    role: member.role ?? undefined,
    team_role: member.team_role ?? undefined,
    color: member.color ?? undefined,
    characteristics: member.characteristics ?? undefined,
    life_story: member.life_story ?? undefined,
    special_orders: member.special_orders ?? undefined,
    team_id: member.team_id ?? undefined,
    model_id: toInteger(member.model_id) ?? undefined,
    display_order: toInteger(member.display_order) ?? undefined
});
