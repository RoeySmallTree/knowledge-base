export interface LLMModel {
    id?: string;
    api_id?: string;
    slug?: string;
    vendor_id: number | string;
    modelFamily: string;
    modelName: string;
    name_within_family?: string;
    display_order?: number;
    description?: string;
    // parametersB: string; // Deprecated by schema
    parameter_count_b?: number;
    contextK: number | string; // contextK is special, often "128k" but sometimes number
    context_length?: number;
    personalityTraits: string;
    analyticalTraits: string;
    bestFor: string;
    optimalTeamExamples: string;
    creativeScore: number | null;
    deductiveScore: number | null;
    efficiencyScore?: number | null;
    specialPropertiesNotes: string;
    pricing?: {
        prompt: number;
        completion: number;
        tier: number;
    };
    fallback_model_id?: number | string;
    capabilities?: string[];
    active?: boolean;
    last_synced_at?: string;
    created_at?: string;
    updated_at?: string;
    active_parameter_count_b?: number;
    model_family?: string;
}

export interface Vendor {
    id: number | string;
    display_name: string;
    is_active: boolean;
    display_order: number;
    slug?: string;
    link?: string;
    description?: string;
    created_at?: string;
    updated_at?: string;
}

export interface ModelsData {
    generatedAt: string;
    totalModels: number;
    models: LLMModel[];
}

export interface VendorsData {
    generatedAt: string;
    totalVendors: number;
    vendors: Vendor[];
}


export type TeamCategory = 'CORTEX' | 'VITALS' | 'OPS' | 'ARCADE';
export type TeamRole = 'Chair' | 'Envoy' | 'Watchdog' | 'Operative';

// Raw DB Rows
export interface DbTeamRow {
    id: string;
    user_id: string;
    name: string;
    description: string | null;
    is_public: boolean;
    catch_phrase: string | null;
    category: string | null;
    quick_starts: string[] | null;
    default_starting_rounds: number | null;
    bootstrap_prompt: string | null;
    is_saved: boolean;
    originated_from_team: string | null;
    created_at: string;
    updated_at: string;
}

export interface DbMemberRow {
    id: string;
    name: string;
    role: string;
    team_role: string | null;
    color: string | null;
    characteristics: string[] | null; // jsonb in DB, simplified to array here
    life_story: string | null;
    special_orders: string | null;
    team_id: string;
    model_id: number;
    created_at: string;
}

// App Types (aligned with DB but cleaner for UI if needed)
export interface Team {
    id: string;
    user_id?: string; // Optional for UI if inferred
    name: string;
    description: string;
    is_public: boolean;
    catch_phrase: string;
    category: TeamCategory;
    quick_starts: string[];
    default_starting_rounds: number | null;
    bootstrap_prompt: string | null;
    is_saved: boolean;
    originated_from_team: string | null;
    created_at?: string;
    updated_at?: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: TeamRole;
    team_role: string;
    color: string | null;
    characteristics: string[];
    life_story: string | null;
    special_orders: string | null;
    team_id: string;
    model_id: number;
    // model_name is often needed for display but not in DB member table (joined)
    model_name?: string;
    created_at?: string;
}

export interface TeamsData {
    generatedAt: string;
    totalTeams: number;
    teams: Team[];
}

export interface MembersData {
    generatedAt: string;
    totalMembers: number;
    members: TeamMember[];
}

export type Member = TeamMember;

