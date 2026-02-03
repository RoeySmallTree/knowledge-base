import { Router } from 'express';
import { asyncHandler, sendList } from '../utils/http';
import { fetchModels, createModel, updateModel, updateModelsBulk, updateModelOrders, deleteModel } from '../repositories/llmModelsRepo';
import { mapDbModelToDto, mapModelInputToDbUpdate } from '../mappers/llmModelsMapper';
import { LlmModelInput, UpdateModelsRequest, UpdateOrdersRequest } from '../types/api';

const router = Router();

router.get('/models', asyncHandler(async (req, res) => {
    const activeParam = req.query.active;
    const active = activeParam === 'true' ? true : activeParam === 'false' ? false : undefined;
    const rows = await fetchModels(active);
    const models = rows.map(mapDbModelToDto);
    sendList(res, models);
}));

router.post('/models', asyncHandler(async (req, res) => {
    const model = (req.body?.model ?? req.body) as LlmModelInput | undefined;
    if (!model) {
        return res.status(400).json({ error: 'Missing model payload' });
    }
    if (!model.api_id || !model.slug || !model.modelName) {
        return res.status(400).json({ error: 'Missing required fields: api_id, slug, modelName' });
    }

    const payload = {
        ...mapModelInputToDbUpdate(model),
        is_active: typeof model.active === 'boolean' ? model.active : true
    };

    await createModel(payload);
    res.json({ success: true });
}));

router.patch('/models', asyncHandler(async (req, res) => {
    const { models } = (req.body ?? {}) as UpdateModelsRequest;
    if (!Array.isArray(models)) {
        return res.status(400).json({ error: 'Invalid models payload' });
    }

    const updates = models.map((model) => {
        const filter = { id: model.id, api_id: model.api_id };
        if (!filter.id && !filter.api_id) {
            throw new Error('Missing model id or api_id for bulk update');
        }
        return { filter, payload: mapModelInputToDbUpdate(model) };
    });

    const updatedCount = await updateModelsBulk(updates);
    res.json({ success: true, updated: updatedCount });
}));

router.patch('/models/order', asyncHandler(async (req, res) => {
    const { orders } = (req.body ?? {}) as UpdateOrdersRequest;
    if (!Array.isArray(orders)) {
        return res.status(400).json({ error: 'Invalid orders payload' });
    }

    const normalized = orders.map((order) => ({
        id: typeof order.id === 'number' ? order.id : order.id ? Number(order.id) : undefined,
        api_id: order.api_id,
        display_order: Number(order.display_order)
    }));

    if (normalized.some((order) => !Number.isFinite(order.display_order))) {
        return res.status(400).json({ error: 'Invalid display_order values' });
    }

    const updatedCount = await updateModelOrders(normalized);
    res.json({ success: true, updated: updatedCount });
}));

router.patch('/models/:id', asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isFinite(id)) {
        return res.status(400).json({ error: 'Invalid model id' });
    }

    const model = (req.body?.model ?? req.body) as LlmModelInput | undefined;
    if (!model) {
        return res.status(400).json({ error: 'Missing model payload' });
    }

    await updateModel({ id }, mapModelInputToDbUpdate(model));
    res.json({ success: true });
}));

router.delete('/models/:id', asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isFinite(id)) {
        return res.status(400).json({ error: 'Invalid model id' });
    }

    await deleteModel({ id });
    res.json({ success: true });
}));

export default router;
