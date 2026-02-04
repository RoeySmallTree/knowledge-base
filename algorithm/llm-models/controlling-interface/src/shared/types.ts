// Shared type definitions used by both frontend and server
// This is the single source of truth for domain models

export interface ApiListResponse<T> {
    generatedAt: string;
    total: number;
    items: T[];
}

export interface Pricing {
    prompt: number;
    completion: number;
    tier: number;
}

export interface LLMModel {
    id: number;
    api_id: string;
    slug: string;
    vendor_id: number | null;
    modelFamily: string | null;
    modelName: string;
    name_within_family: string | null;
    display_order: number;
    description: string | null;
    capabilities: string[];
    contextK: number | null;
    context_length: number | null;
    parameter_count_b: number | null;
    active_parameter_count_b: number | null;
    personalityTraits: string;
    analyticalTraits: string;
    bestFor: string;
    creativeScore: number | null;
    deductiveScore: number | null;
    efficiencyScore: number | null;
    pricing: Pricing;
    fallback_model_id: number | null;
    active: boolean;
    last_synced_at: string | null;
    created_at: string;
    updated_at: string;
}

export interface Vendor {
    id: number;
    slug: string;
    display_name: string;
    display_order: number;
    is_active: boolean;
    link: string | null;
    description: string | null;
    created_at: string;
    updated_at: string;
}

export type TeamCategory = 'CORTEX' | 'VITALS' | 'OPS' | 'ARCADE';
export type TeamRole = 'Chair' | 'Envoy' | 'Watchdog' | 'Operative';

export interface Team {
    id: string;
    user_id: string;
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
    display_order: number;
    created_at: string;
    updated_at: string;
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
    display_order: number;
    model_name: string;
    created_at: string;
}

export interface AppUser {
    id: string;
    email: string;
    display_name: string;
    created_at: string;
    chat_name: string;
    community_name: string;
    image_url: string;
    location: string;
    gender: string;
    profession: string;
    extras: string;
    legion_id: string | null;
    type: string;
    plan_code: string;
    plan_name: string;
    plan_credits_balance: number;
    last_period_usage_usd: number;
    last_active: string;
}

export interface Session {
    id: string;
    user_id: string;
    name: string;
    status: string;
    halt_reason: string | null;
    halted_on_step: string | null;
    access: string | null;
    root_product_id: string | null;
    rounds_left: number;
    current_round: number;
    created_at: string;
    updated_at: string;
    mission_charter: string | null;
    archived_at: string | null;
    team_id: string;
    error: string | null;
    round_status: string | null;
    legion_id: string | null;
    repository_id: string | null;
    user_name: string;
    team_name: string;
}
