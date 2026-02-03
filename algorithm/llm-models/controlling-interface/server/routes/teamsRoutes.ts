import { Router } from 'express';
import { asyncHandler, sendList } from '../utils/http';
import { createTeam, deleteTeam, duplicateTeam, fetchTeams, updateTeam, updateTeamOrders } from '../repositories/teamsRepo';
import { mapDbTeamToDto, mapTeamInputToDbUpdate } from '../mappers/teamsMapper';
import { TeamInput, UpdateOrdersRequest } from '../types/api';

const router = Router();

router.get('/teams', asyncHandler(async (_req, res) => {
    const rows = await fetchTeams();
    const teams = rows.map(mapDbTeamToDto);
    sendList(res, teams);
}));

router.post('/teams', asyncHandler(async (req, res) => {
    const team = (req.body?.team ?? req.body) as TeamInput | undefined;
    if (!team) {
        return res.status(400).json({ error: 'Missing team payload' });
    }
    if (!team.user_id || !team.name) {
        return res.status(400).json({ error: 'Missing required fields: user_id, name' });
    }

    await createTeam(mapTeamInputToDbUpdate(team) as { user_id: string });
    res.json({ success: true });
}));

router.patch('/teams/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).json({ error: 'Invalid team id' });
    }
    const team = (req.body?.team ?? req.body) as TeamInput | undefined;
    if (!team) {
        return res.status(400).json({ error: 'Missing team payload' });
    }

    await updateTeam(id, mapTeamInputToDbUpdate(team));
    res.json({ success: true });
}));

router.patch('/teams/order', asyncHandler(async (req, res) => {
    const { orders } = (req.body ?? {}) as UpdateOrdersRequest;
    if (!Array.isArray(orders)) {
        return res.status(400).json({ error: 'Invalid orders payload' });
    }

    const normalized = orders.map((order) => ({
        id: String(order.id),
        display_order: Number(order.display_order)
    }));

    if (normalized.some((order) => !order.id || !Number.isFinite(order.display_order))) {
        return res.status(400).json({ error: 'Invalid order values' });
    }

    const updatedCount = await updateTeamOrders(normalized);
    res.json({ success: true, updated: updatedCount });
}));

router.delete('/teams/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).json({ error: 'Invalid team id' });
    }

    await deleteTeam(id);
    res.json({ success: true });
}));

router.post('/teams/:id/duplicate', asyncHandler(async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).json({ error: 'Invalid team id' });
    }

    const newTeam = await duplicateTeam(id);
    res.json({ success: true, team: newTeam });
}));

export default router;
