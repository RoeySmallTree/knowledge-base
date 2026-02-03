import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname } from 'path';
import { MODEL_SETTINGS_PATH } from '../config/paths';

export interface ModelSettings {
    irrelevant_models_api_keys: string[];
}

export const readModelSettings = (): ModelSettings => {
    try {
        if (!existsSync(MODEL_SETTINGS_PATH)) {
            return { irrelevant_models_api_keys: [] };
        }
        const content = readFileSync(MODEL_SETTINGS_PATH, 'utf-8');
        const parsed = JSON.parse(content);
        if (!parsed || !Array.isArray(parsed.irrelevant_models_api_keys)) {
            return { irrelevant_models_api_keys: [] };
        }
        return parsed;
    } catch (error) {
        console.error('Error reading settings file:', error);
        return { irrelevant_models_api_keys: [] };
    }
};

export const writeModelSettings = (settings: ModelSettings) => {
    const dir = dirname(MODEL_SETTINGS_PATH);
    if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
    }
    writeFileSync(MODEL_SETTINGS_PATH, JSON.stringify(settings, null, 2));
};
