import { existsSync, readFileSync } from 'fs';
import { dirname, join } from 'path';

export interface EnvConfig {
    port: number;
    supabaseUrl: string;
    supabaseServiceRoleKey: string;
    openRouterApiKey?: string;
}

const parseEnvFile = (content: string) => {
    content.split('\n').forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return;
        const delimiterIndex = trimmed.indexOf('=');
        if (delimiterIndex === -1) return;
        const key = trimmed.slice(0, delimiterIndex).trim();
        let value = trimmed.slice(delimiterIndex + 1).trim();

        if (process.env[key]) return;

        if (
            (value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))
        ) {
            value = value.slice(1, -1);
        }
        process.env[key] = value;
    });
};

export const loadEnv = (startDir = process.cwd(), maxDepth = 5) => {
    let currentDir = startDir;
    const loaded: string[] = [];
    for (let i = 0; i < maxDepth; i += 1) {
        const envPath = join(currentDir, '.env');
        if (existsSync(envPath)) {
            parseEnvFile(readFileSync(envPath, 'utf-8'));
            loaded.push(envPath);
        }
        const parentDir = dirname(currentDir);
        if (parentDir === currentDir) break;
        currentDir = parentDir;
    }
    return loaded;
};

const parsePort = (value: string | undefined, fallback: number) => {
    const parsed = value ? Number(value) : NaN;
    return Number.isFinite(parsed) ? parsed : fallback;
};

export const getEnv = (): EnvConfig => {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceRoleKey) {
        throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.');
    }

    return {
        port: parsePort(process.env.PORT, 3006),
        supabaseUrl,
        supabaseServiceRoleKey,
        openRouterApiKey: process.env.OPEN_ROUTER_API_KEY
    };
};
