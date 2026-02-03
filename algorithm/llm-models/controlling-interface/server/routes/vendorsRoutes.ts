import { Router } from 'express';
import { asyncHandler, sendList } from '../utils/http';
import { fetchVendors, createVendor, updateVendor, updateVendorsBulk, updateVendorOrders } from '../repositories/vendorsRepo';
import { mapDbVendorToDto, mapVendorInputToDbUpdate } from '../mappers/vendorsMapper';
import { UpdateOrdersRequest, UpdateVendorsRequest, VendorInput } from '../types/api';

const router = Router();

router.get('/vendors', asyncHandler(async (_req, res) => {
    const rows = await fetchVendors();
    const vendors = rows.map(mapDbVendorToDto);
    sendList(res, vendors);
}));

router.post('/vendors', asyncHandler(async (req, res) => {
    const vendor = (req.body?.vendor ?? req.body) as VendorInput | undefined;
    if (!vendor) {
        return res.status(400).json({ error: 'Missing vendor payload' });
    }
    if (!vendor.slug || !vendor.display_name) {
        return res.status(400).json({ error: 'Missing required fields: slug, display_name' });
    }

    await createVendor(mapVendorInputToDbUpdate(vendor));
    res.json({ success: true });
}));

router.patch('/vendors', asyncHandler(async (req, res) => {
    const { vendors } = (req.body ?? {}) as UpdateVendorsRequest;
    if (!Array.isArray(vendors)) {
        return res.status(400).json({ error: 'Invalid vendors payload' });
    }

    const updates = vendors.map((vendor) => {
        if (!vendor.id) {
            throw new Error('Missing vendor id for bulk update');
        }
        return { id: Number(vendor.id), payload: mapVendorInputToDbUpdate(vendor) };
    });

    const updatedCount = await updateVendorsBulk(updates);
    res.json({ success: true, updated: updatedCount });
}));

router.patch('/vendors/order', asyncHandler(async (req, res) => {
    const { orders } = (req.body ?? {}) as UpdateOrdersRequest;
    if (!Array.isArray(orders)) {
        return res.status(400).json({ error: 'Invalid orders payload' });
    }

    const normalized = orders.map((order) => ({
        id: Number(order.id),
        display_order: Number(order.display_order)
    }));

    if (normalized.some((order) => !Number.isFinite(order.id) || !Number.isFinite(order.display_order))) {
        return res.status(400).json({ error: 'Invalid order values' });
    }

    const updatedCount = await updateVendorOrders(normalized);
    res.json({ success: true, updated: updatedCount });
}));

router.patch('/vendors/:id', asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isFinite(id)) {
        return res.status(400).json({ error: 'Invalid vendor id' });
    }
    const vendor = (req.body?.vendor ?? req.body) as VendorInput | undefined;
    if (!vendor) {
        return res.status(400).json({ error: 'Missing vendor payload' });
    }

    await updateVendor(id, mapVendorInputToDbUpdate(vendor));
    res.json({ success: true });
}));

export default router;
