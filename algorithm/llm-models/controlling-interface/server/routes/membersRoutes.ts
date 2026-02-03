import { Router } from 'express';
import { asyncHandler, sendList } from '../utils/http';
import { createMember, deleteMember, fetchMembers, updateMember, updateMemberOrders, migrateMembersModel } from '../repositories/membersRepo';
import { mapDbMemberToDto, mapMemberInputToDbUpdate } from '../mappers/membersMapper';
import { MemberInput, UpdateOrdersRequest } from '../types/api';

const router = Router();

router.get('/members', asyncHandler(async (_req, res) => {
    const rows = await fetchMembers();
    const members = rows.map(mapDbMemberToDto);
    sendList(res, members);
}));

router.post('/members', asyncHandler(async (req, res) => {
    const member = (req.body?.member ?? req.body) as MemberInput | undefined;
    if (!member) {
        return res.status(400).json({ error: 'Missing member payload' });
    }
    if (!member.name || !member.role || !member.team_id || !member.model_id) {
        return res.status(400).json({ error: 'Missing required fields: name, role, team_id, model_id' });
    }

    await createMember(mapMemberInputToDbUpdate(member));
    res.json({ success: true });
}));

router.patch('/members/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).json({ error: 'Invalid member id' });
    }
    const member = (req.body?.member ?? req.body) as MemberInput | undefined;
    if (!member) {
        return res.status(400).json({ error: 'Missing member payload' });
    }

    await updateMember(id, mapMemberInputToDbUpdate(member));
    res.json({ success: true });
}));

router.patch('/members/order', asyncHandler(async (req, res) => {
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

    const updatedCount = await updateMemberOrders(normalized);
    res.json({ success: true, updated: updatedCount });
}));

router.delete('/members/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).json({ error: 'Invalid member id' });
    }

    await deleteMember(id);
    res.json({ success: true });
}));

router.post('/members/migrate-model', asyncHandler(async (req, res) => {
    const { fromModelId, toModelId } = req.body;
    if (!fromModelId || !toModelId) {
        return res.status(400).json({ error: 'Missing fromModelId or toModelId' });
    }
    if (!Number.isFinite(Number(fromModelId)) || !Number.isFinite(Number(toModelId))) {
        return res.status(400).json({ error: 'Invalid model IDs' });
    }

    await migrateMembersModel(Number(fromModelId), Number(toModelId));
    res.json({ success: true });
}));

export default router;
