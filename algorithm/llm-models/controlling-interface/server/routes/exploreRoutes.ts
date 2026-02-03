import { Router } from 'express';
import { asyncHandler } from '../utils/http';
import { getExploreModels } from '../services/exploreService';

const router = Router();

router.get('/explore/models', asyncHandler(async (req, res) => {
    const forceRefresh = req.query.force === 'true';
    const data = await getExploreModels(forceRefresh);
    res.json(data);
}));

export default router;
