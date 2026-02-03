export const toNumber = (value: unknown) => {
    if (value === null || value === undefined) return null;
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
};

export const toInteger = (value: unknown) => {
    const parsed = toNumber(value);
    return parsed === null ? null : Math.round(parsed);
};

export const parseDbNumeric = (value: string | null) => {
    if (value === null) return null;
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
};

export const joinList = (items: string[] | null | undefined) =>
    items?.map((item) => item.trim()).filter(Boolean).join(', ') ?? '';

export const splitList = (value: string | null | undefined) => {
    if (!value) return [];
    return value.split(',').map((item) => item.trim()).filter(Boolean);
};
