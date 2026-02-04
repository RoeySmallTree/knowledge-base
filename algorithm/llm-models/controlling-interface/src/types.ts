// Frontend type definitions
// Re-exports shared types and adds frontend-specific types

import {
    ApiListResponse,
    LLMModel as SharedLLMModel,
    Vendor,
    Team as SharedTeam,
    TeamMember as SharedTeamMember,
    TeamCategory,
    TeamRole,
    AppUser,
    Session,
    Pricing
} from './shared/types';

// Re-export shared types
export type { ApiListResponse, Pricing, Vendor, TeamCategory, TeamRole, AppUser, Session };

// Frontend-specific LLMModel type (extends shared with optional fields for partial models)
export interface LLMModel extends Omit<SharedLLMModel, 'id'> {
    id?: number;
    optimalTeamExamples?: string;
    specialPropertiesNotes?: string;
}

// Frontend-specific Team type (extends shared with optional fields)
export interface Team extends Omit<SharedTeam, 'display_order' | 'created_at' | 'updated_at'> {
    display_order?: number;
    created_at?: string;
    updated_at?: string;
}

// Frontend-specific TeamMember type (extends shared with optional fields)
export interface TeamMember extends Omit<SharedTeamMember, 'display_order' | 'model_name' | 'created_at'> {
    display_order?: number;
    model_name?: string;
    created_at?: string;
}

// Type aliases
export type ModelsData = ApiListResponse<LLMModel>;
export type VendorsData = ApiListResponse<Vendor>;
export type TeamsData = ApiListResponse<Team>;
export type MembersData = ApiListResponse<TeamMember>;
export type Member = TeamMember;
export type UsersData = ApiListResponse<AppUser>;
export type SessionsData = ApiListResponse<Session>;

// Third-party API types (OpenRouter)
export interface OpenRouterModel {
    id: string;
    name: string;
    description: string;
    context_length: number;
    pricing: {
        prompt: string;
        completion: string;
    };
    created: number;
}
