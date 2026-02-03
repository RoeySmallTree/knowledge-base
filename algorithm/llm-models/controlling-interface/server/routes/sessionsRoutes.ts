import { Router } from 'express';
import { asyncHandler, sendList } from '../utils/http';
import { fetchSessions } from '../repositories/sessionsRepo';
import { mapDbSessionToDto } from '../mappers/sessionsMapper';

const router = Router();

router.get('/sessions', asyncHandler(async (_req, res) => {
    const rows = await fetchSessions();
    const sessions = rows.map(mapDbSessionToDto);
    sendList(res, sessions);
}));

export default router;
