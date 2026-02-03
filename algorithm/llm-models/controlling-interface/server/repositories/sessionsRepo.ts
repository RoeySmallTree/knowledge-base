import { supabaseRequest } from '../db/supabase';
import { DbSessionRow } from '../types/db';

const SESSION_SELECT = '*,app_user!session_user_id_fkey(display_name),team(name)';

export const fetchSessions = async () => {
    const response = await supabaseRequest(
        `session?select=${SESSION_SELECT}&order=created_at.desc`
    );
    return (await response.json()) as DbSessionRow[];
};
