import { join } from 'path';

export const ROOT_DIR = process.cwd();
export const SETTINGS_DIR = join(ROOT_DIR, 'settings');
export const MODEL_SETTINGS_PATH = join(SETTINGS_DIR, 'model-settings.json');
export const EXPLORE_CACHE_PATH = join(SETTINGS_DIR, 'explore-cache.json');
