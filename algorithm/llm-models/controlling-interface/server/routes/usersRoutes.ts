import { Router } from 'express';
import { asyncHandler, sendList } from '../utils/http';
import { fetchUsers, updateUser } from '../repositories/usersRepo';
import { mapDbUserToDto, mapUserInputToDbUpdate } from '../mappers/usersMapper';
import { AppUserInput } from '../types/api';

const router = Router();

router.get('/users', asyncHandler(async (_req, res) => {
    const rows = await fetchUsers();
    const users = rows.map(mapDbUserToDto);
    sendList(res, users);
}));

router.patch('/users/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).json({ error: 'Invalid user id' });
    }
    const user = (req.body?.user ?? req.body) as AppUserInput | undefined;
    if (!user) {
        return res.status(400).json({ error: 'Missing user payload' });
    }

    await updateUser(id, mapUserInputToDbUpdate(user));
    res.json({ success: true });
}));

export default router;
