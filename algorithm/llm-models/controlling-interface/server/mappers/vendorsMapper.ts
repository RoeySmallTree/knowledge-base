import { DbVendorRow } from '../types/db';
import { VendorDto, VendorInput } from '../types/api';
import { toInteger } from '../utils/parse';

export const mapDbVendorToDto = (row: DbVendorRow): VendorDto => ({
    id: row.id,
    slug: row.slug,
    display_name: row.display_name,
    display_order: row.display_order ?? 0,
    is_active: row.is_active ?? true,
    created_at: row.created_at,
    updated_at: row.updated_at,
    link: row.link ?? null,
    description: row.description ?? null
});

export const mapVendorInputToDbUpdate = (vendor: VendorInput) => ({
    slug: vendor.slug ?? undefined,
    display_name: vendor.display_name ?? undefined,
    is_active: typeof vendor.is_active === 'boolean' ? vendor.is_active : undefined,
    display_order: toInteger(vendor.display_order) ?? undefined,
    link: vendor.link ?? undefined,
    description: vendor.description ?? undefined
});
