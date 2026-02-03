export type DbNumeric = string; // numeric/bigint values returned by PostgREST as strings

export interface DbLlmModelRow {
    id: number;
    vendor_id: number | null;
    api_id: string;
    slug: string;
    display_name: string;
    display_order: number;
    description: string | null;
    capabilities: string[];
    context_length: number | null;
    price_prompt_micro: DbNumeric;
    price_completion_micro: DbNumeric;
    price_tier: number;
    fallback_model_id: number | null;
    is_active: boolean;
    last_synced_at: string;
    created_at: string;
    updated_at: string;
    parameter_count_b: DbNumeric | null;
    personality_traits: string[] | null;
    professional_traits: string[] | null;
    best_for: string[] | null;
    active_parameter_count_b: DbNumeric | null;
    creativity_score: number | null;
    logic_score: number | null;
    efficiency_score: number | null;
    model_family: string | null;
    name_within_family: string | null;
}

export interface DbVendorRow {
    id: number;
    slug: string;
    display_name: string;
    display_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    link: string | null;
    description: string | null;
}

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
    display_order: number;
    created_at: string;
    updated_at: string;
}

export interface DbMemberRow {
    id: string;
    name: string;
    role: string;
    team_role: string | null;
    color: string | null;
    characteristics: unknown | null;
    life_story: string | null;
    special_orders: string | null;
    team_id: string;
    model_id: number;
    display_order: number;
    created_at: string;
    llm_models?: { display_name: string } | null;
}

export interface DbAppUserBillingStateRow {
    plan_credits_balance: number;
    last_period_usage_usd: DbNumeric | null;
    no_plan_since: string | null;
    updated_at: string;
    billing_plan?: {
        code: string;
        name: string;
    } | null;
}

export interface DbAppUserRow {
    id: string;
    email: string;
    display_name: string | null;
    created_at: string;
    chat_name: string | null;
    community_name: string;
    image_url: string | null;
    location: string | null;
    gender: string | null;
    profession: string | null;
    extras: string | null;
    legion_id: string | null;
    type: string;
    app_user_billing_state?: DbAppUserBillingStateRow | null;
}

export interface DbSessionRow {
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
    app_user?: { display_name: string } | null;
    team?: { name: string } | null;
}
