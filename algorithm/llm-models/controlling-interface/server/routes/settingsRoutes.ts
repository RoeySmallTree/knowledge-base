import { Router } from 'express';
import { asyncHandler } from '../utils/http';
import { readModelSettings, writeModelSettings } from '../services/settingsService';
import { UpdateSettingsRequest } from '../types/api';

const router = Router();

router.get('/settings/models', asyncHandler(async (_req, res) => {
    const settings = readModelSettings();
    res.json(settings);
}));

router.put('/settings/models', asyncHandler(async (req, res) => {
    const settings = req.body as UpdateSettingsRequest | undefined;
    if (!settings || !Array.isArray(settings.irrelevant_models_api_keys)) {
        return res.status(400).json({ error: 'Invalid settings format' });
    }
    writeModelSettings(settings);
    res.json({ success: true });
}));

export default router;
