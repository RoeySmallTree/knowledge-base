import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const REQUIRED_ENV = ['SUPABASE_URL'];
const KEYS = ['SUPABASE_SERVICE_ROLE_KEY', 'SUPABASE_ANON_KEY'];

function resolveKey(useServiceRole) {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  return useServiceRole ? serviceKey || anonKey : anonKey || serviceKey;
}

export function createSupabaseClient({ useServiceRole = true, schema = 'public' } = {}) {
  const url = process.env.SUPABASE_URL;
  if (!url) {
    throw new Error('Missing SUPABASE_URL in environment (see .env.example)');
  }

  const key = resolveKey(useServiceRole);
  if (!key) {
    throw new Error('Set SUPABASE_SERVICE_ROLE_KEY or SUPABASE_ANON_KEY in your .env');
  }

  return createClient(url, key, {
    db: { schema },
  });
}

export function printEnvHelp() {
  const requiredPresent = REQUIRED_ENV.filter((name) => process.env[name]);
  const requiredMissing = REQUIRED_ENV.filter((name) => !process.env[name]);
  const keysAvailable = KEYS.filter((name) => process.env[name]);
  return { requiredPresent, requiredMissing, keysAvailable };
}
