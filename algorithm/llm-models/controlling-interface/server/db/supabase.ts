import { getEnv } from '../config/env';

export const supabaseRequest = async (path: string, options: RequestInit = {}) => {
    const { supabaseUrl, supabaseServiceRoleKey } = getEnv();
    const response = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
        ...options,
        headers: {
            apikey: supabaseServiceRoleKey,
            Authorization: `Bearer ${supabaseServiceRoleKey}`,
            'Content-Type': 'application/json',
            ...options.headers
        }
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Supabase request failed: ${response.status} ${text}`);
    }

    return response;
};
