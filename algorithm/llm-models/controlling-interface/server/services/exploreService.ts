import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname } from 'path';
import { getEnv } from '../config/env';
import { EXPLORE_CACHE_PATH } from '../config/paths';

export const readExploreCache = () => {
    if (!existsSync(EXPLORE_CACHE_PATH)) return null;
    try {
        const cached = JSON.parse(readFileSync(EXPLORE_CACHE_PATH, 'utf-8'));
        if (cached && cached.data && Array.isArray(cached.data)) {
            return cached;
        }
    } catch (error) {
        console.warn('Failed to read explore cache:', error);
    }
    return null;
};

export const writeExploreCache = (data: unknown) => {
    const cacheDir = dirname(EXPLORE_CACHE_PATH);
    if (!existsSync(cacheDir)) {
        mkdirSync(cacheDir, { recursive: true });
    }
    writeFileSync(EXPLORE_CACHE_PATH, JSON.stringify(data, null, 2));
};

export const fetchExploreModels = async () => {
    const { openRouterApiKey } = getEnv();
    if (!openRouterApiKey) {
        throw new Error('Missing OPEN_ROUTER_API_KEY in environment');
    }

    const response = await fetch(
        'https://openrouter.ai/api/v1/models?supported_parameters=structured_outputs',
        {
            headers: {
                Authorization: `Bearer ${openRouterApiKey}`
            }
        }
    );

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`OpenRouter API failed: ${text}`);
    }

    return response.json();
};

export const getExploreModels = async (forceRefresh: boolean) => {
    if (!forceRefresh) {
        const cached = readExploreCache();
        if (cached) return cached;
    }

    const data = await fetchExploreModels();
    try {
        writeExploreCache(data);
    } catch (error) {
        console.error('Failed to write explore cache:', error);
    }

    return data;
};
