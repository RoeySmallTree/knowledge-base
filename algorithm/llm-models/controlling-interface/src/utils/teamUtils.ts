import { Team, TeamMember } from '../types';

export const LEADER_RANK = { 'Chair': 1, 'Envoy': 2, 'Watchdog': 3 };

export function splitMembersByRole(members: TeamMember[]) {
    const leaders = members.filter(member => member.role !== 'Operative');
    const operatives = members.filter(member => member.role === 'Operative');

    // Sort leaders by rank
    leaders.sort((a, b) => {
        const rankA = LEADER_RANK[a.role as keyof typeof LEADER_RANK] ?? 99;
        const rankB = LEADER_RANK[b.role as keyof typeof LEADER_RANK] ?? 99;
        return rankA - rankB;
    });

    return { leaders, operatives };
}

export function trimTeamRole(teamRole: string) {
    const words = teamRole.split(/\s+/).filter(Boolean);
    return words.slice(0, 2).join(' ');
}

export function shortenTeamRole(teamRole?: string) {
    if (!teamRole) return 'Team Role';
    return trimTeamRole(teamRole);
}

export function normalizeList(value: string[] | string | null | undefined) {
    if (Array.isArray(value)) return value;
    if (typeof value === 'string') {
        return value.split(/\n|,/).map(item => item.trim()).filter(Boolean);
    }
    return [];
}

export function getMissingTeamFields(team: Team) {
    const missing: string[] = [];
    if (!team.name) missing.push('name');
    if (!team.catch_phrase) missing.push('catch_phrase');
    if (!team.description) missing.push('description');
    if (!team.category) missing.push('category');
    if (!team.quick_starts || team.quick_starts.length === 0) missing.push('quick_starts');
    if (team.default_starting_rounds === null || team.default_starting_rounds === undefined) missing.push('default_starting_rounds');
    if (!team.bootstrap_prompt) missing.push('bootstrap_prompt');
    return missing;
}

export function getMissingMemberFields(member: TeamMember) {
    const missing: string[] = [];
    if (!member.name) missing.push('name');
    if (!member.role) missing.push('role');
    return missing;
}
