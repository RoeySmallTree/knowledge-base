// Server API type definitions
// Re-exports shared types and adds server-specific types

import {
    ApiListResponse,
    LLMModel,
    Vendor,
    Team,
    TeamMember,
    AppUser,
    Session,
    Pricing
} from '../../src/shared/types';

// Type aliases for server DTOs (maintains backward compatibility)
export type LlmModelDto = LLMModel;
export type VendorDto = Vendor;
export type TeamDto = Team;
export type MemberDto = TeamMember;
export type AppUserDto = AppUser;
export type SessionDto = Session;

// Re-export shared types
export type { ApiListResponse, Pricing };

// Server-specific input types (partial types for updates)
export type LlmModelInput = Partial<Omit<LlmModelDto, 'id'>> & {
    id?: number;
    api_id?: string;
};

export type VendorInput = Partial<Omit<VendorDto, 'id'>> & { id?: number };

export type TeamInput = Partial<Omit<TeamDto, 'id'>> & { id?: string };

export type MemberInput = Partial<Omit<MemberDto, 'id' | 'model_name' | 'created_at'>> & { id?: string };

export type AppUserInput = Partial<Omit<AppUserDto, 'id'>> & { id?: string };

// Server-specific request/response types
export interface UpdateOrdersRequest {
    orders: Array<{ id?: string | number; api_id?: string; display_order: number }>;
}

export interface UpdateModelsRequest {
    models: LlmModelInput[];
}

export interface UpdateVendorsRequest {
    vendors: VendorInput[];
}

export interface UpdateTeamsRequest {
    teams: TeamInput[];
}

export interface UpdateMembersRequest {
    members: MemberInput[];
}

export interface UpdateUserRequest {
    user: AppUserInput;
}

export interface UpdateSettingsRequest {
    irrelevant_models_api_keys: string[];
}

export interface ApiSuccessResponse {
    success: true;
    updated?: number;
}
