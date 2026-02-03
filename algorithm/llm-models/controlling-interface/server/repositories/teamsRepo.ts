import { supabaseRequest } from '../db/supabase';
import { DbTeamRow } from '../types/db';

const TEAM_SELECT = '*';

export const fetchTeams = async () => {
    const response = await supabaseRequest(
        `team?select=${TEAM_SELECT}&order=display_order.asc.nullslast,name.asc`
    );
    return (await response.json()) as DbTeamRow[];
};

export const createTeam = async (payload: Partial<DbTeamRow> & { user_id: string }) => {
    await supabaseRequest('team', {
        method: 'POST',
        headers: { Prefer: 'return=minimal' },
        body: JSON.stringify(payload)
    });
};

export const updateTeam = async (id: string, payload: Partial<DbTeamRow>) => {
    await supabaseRequest(`team?id=eq.${id}`, {
        method: 'PATCH',
        headers: { Prefer: 'return=minimal' },
        body: JSON.stringify(payload)
    });
};

export const updateTeamOrders = async (orders: Array<{ id: string; display_order: number }>) => {
    await Promise.all(
        orders.map((order) => updateTeam(order.id, { display_order: order.display_order }))
    );
    return orders.length;
};

export const deleteTeam = async (id: string) => {
    // Delete dependent entities to avoid FK violations when cascade is not configured.
    const teamSharesRes = await supabaseRequest(`team_share?select=id&team_id=eq.${id}`);
    const teamShares = (await teamSharesRes.json()) as Array<{ id: string }>;
    const teamShareIds = teamShares.map((share) => share.id);

    if (teamShareIds.length > 0) {
        const encoded = teamShareIds.map((shareId) => `"${shareId}"`).join(',');
        await supabaseRequest(`team_rating?team_share_id=in.(${encoded})`, { method: 'DELETE' });
    }

    await supabaseRequest(`team_tag?team_id=eq.${id}`, { method: 'DELETE' });
    await supabaseRequest(`team_share?team_id=eq.${id}`, { method: 'DELETE' });
    await supabaseRequest(`session?team_id=eq.${id}`, { method: 'DELETE' });
    await supabaseRequest(`member?team_id=eq.${id}`, { method: 'DELETE' });
    await supabaseRequest(`team?id=eq.${id}`, { method: 'DELETE' });
};

export const duplicateTeam = async (originalTeamId: string) => {
    const teamRes = await supabaseRequest(`team?id=eq.${originalTeamId}`);
    const teams = await teamRes.json();
    const originalTeam = teams?.[0];
    if (!originalTeam) throw new Error('Original team not found');

    const { id, created_at, updated_at, ...teamData } = originalTeam;
    const newTeamPayload = {
        ...teamData,
        name: `${teamData.name} (Copy)`,
        originated_from_team: originalTeamId,
        is_saved: true
    };

    const createRes = await supabaseRequest('team', {
        method: 'POST',
        headers: { Prefer: 'return=representation' },
        body: JSON.stringify(newTeamPayload)
    });
    const newTeams = await createRes.json();
    const newTeam = newTeams?.[0];
    if (!newTeam) throw new Error('Failed to create duplicated team');
    const newTeamId = newTeam.id;

    const membersRes = await supabaseRequest(`member?team_id=eq.${originalTeamId}`);
    const members = await membersRes.json();

    if (members && members.length > 0) {
        const newMembersPayload = members.map((member: any) => {
            const { id: memberId, created_at: memberCreated, team_id: memberTeamId, ...memberData } = member;
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

    return newTeam;
};
