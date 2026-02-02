import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {
    CreateSessionRequest,
    CreateSessionResponse,
    CreateCollabRequest,
    CreateCollabResponse,
    SendChatRequest,
    SendChatResponse,
    RunSessionRequest,
    RunSessionResponse,
    ProductTreeResponse,
    SessionRound,
    SessionEvent,
    SessionUsage,
    SessionTeam,
    DebugStoryResponse,
    SessionOverview,
    ProductListResponse,
    ProductDetailResponse,
    VersionSummaryResponse,
    VersionDetailResponse,
    TeamMembersResponse,
    TeamActivityResponse,
    UnreadSummaryResponse,
    DebugProgressionResponse,
    DebugArtifactsResponse,
    DebugErrorsResponse,
    Collab,
    ChatMessage // Added these to types
} from '../types/api';

// Use VITE_BACKEND_URL if available, otherwise fallback to the value in .env (http://localhost:8080)
const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080';

class SessionService {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: BASE_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Add interceptor for API Key if needed later
        // this.client.interceptors.request.use((config) => { ... });
    }

    // -- Core Session Routes --

    async createSession(data: CreateSessionRequest): Promise<CreateSessionResponse> {
        const response = await this.client.post<CreateSessionResponse>('/sessions/', data);
        return response.data;
    }

    async getSession(sessionId: string): Promise<any> {
        const response = await this.client.get<any>(`/sessions/${sessionId}`);
        return response.data;
    }

    async runSession(sessionId: string, data: RunSessionRequest): Promise<RunSessionResponse> {
        const response = await this.client.post<RunSessionResponse>(`/sessions/${sessionId}/run`, data);
        return response.data;
    }

    async getSessionTree(sessionId: string): Promise<ProductTreeResponse> {
        const response = await this.client.get<ProductTreeResponse>(`/sessions/${sessionId}/tree`);
        return response.data;
    }

    async getSessionCollabs(sessionId: string, params?: {
        unresolved?: boolean;
        productId?: string;
        authorKind?: 'user' | 'operative' | 'chair' | 'watchdog' | 'envoy' | 'system';
    }): Promise<Collab[]> {
        const response = await this.client.get<Collab[]>(`/sessions/${sessionId}/collabs`, { params });
        return response.data;
    }

    async createCollab(sessionId: string, data: CreateCollabRequest): Promise<CreateCollabResponse> {
        const response = await this.client.post<CreateCollabResponse>(`/sessions/${sessionId}/collabs`, data);
        return response.data;
    }

    async getSessionChat(sessionId: string): Promise<ChatMessage[]> {
        const response = await this.client.get<ChatMessage[]>(`/sessions/${sessionId}/chat`);
        return response.data;
    }

    async sendChatMessage(sessionId: string, data: SendChatRequest): Promise<SendChatResponse> {
        const response = await this.client.post<SendChatResponse>(`/sessions/${sessionId}/chat`, data);
        return response.data;
    }

    async getSessionRounds(sessionId: string): Promise<SessionRound[]> {
        const response = await this.client.get<SessionRound[]>(`/sessions/${sessionId}/rounds`);
        return response.data;
    }

    async getSessionEvents(sessionId: string): Promise<SessionEvent[]> {
        const response = await this.client.get<SessionEvent[]>(`/sessions/${sessionId}/events`);
        return response.data;
    }

    async getSessionUsage(sessionId: string): Promise<SessionUsage> {
        const response = await this.client.get<SessionUsage>(`/sessions/${sessionId}/usage`);
        return response.data;
    }

    async getSessionTeam(sessionId: string): Promise<SessionTeam> {
        const response = await this.client.get<SessionTeam>(`/sessions/${sessionId}/team`);
        return response.data;
    }

    async getDebugStory(sessionId: string): Promise<DebugStoryResponse> {
        const response = await this.client.get<DebugStoryResponse>(`/sessions/${sessionId}/debug/story`);
        return response.data;
    }

    // -- Frontend Optimized Routes --

    async getSessionsList(userId?: string): Promise<any> {
        const response = await this.client.get<any>('/api/sessions/', { params: { user_id: userId } });
        return response.data;
    }

    async getSessionOverview(sessionId: string): Promise<SessionOverview> {
        const response = await this.client.get<SessionOverview>(`/api/sessions/${sessionId}/overview`);
        return response.data;
    }

    async getProductsList(sessionId: string, params?: {
        since?: string;
        include_counts?: string;
    }): Promise<ProductListResponse> {
        const response = await this.client.get<ProductListResponse>(`/api/sessions/${sessionId}/products`, { params });
        return response.data;
    }

    async getProductDetail(sessionId: string, productId: string): Promise<ProductDetailResponse> {
        const response = await this.client.get<ProductDetailResponse>(`/api/sessions/${sessionId}/products/${productId}`);
        return response.data;
    }

    async getVersionSummaries(sessionId: string, productId: string, limit?: string): Promise<VersionSummaryResponse> {
        const response = await this.client.get<VersionSummaryResponse>(`/api/sessions/${sessionId}/products/${productId}/versions`, { params: { limit } });
        return response.data;
    }

    async getVersionDetail(sessionId: string, productId: string, versionId: string): Promise<VersionDetailResponse> {
        const response = await this.client.get<VersionDetailResponse>(`/api/sessions/${sessionId}/products/${productId}/versions/${versionId}`);
        return response.data;
    }

    async getTeamMembers(sessionId: string): Promise<TeamMembersResponse> {
        const response = await this.client.get<TeamMembersResponse>(`/api/sessions/${sessionId}/team/members`);
        return response.data;
    }

    async getTeamActivity(sessionId: string): Promise<TeamActivityResponse> {
        const response = await this.client.get<TeamActivityResponse>(`/api/sessions/${sessionId}/team/activity`);
        return response.data;
    }

    async getFrontendChat(sessionId: string, params?: {
        since?: string;
        limit?: string;
        cursor?: string;
    }): Promise<any> {
        const response = await this.client.get<any>(`/api/sessions/${sessionId}/chat`, { params });
        return response.data;
    }

    async getProductCollabs(sessionId: string, productId: string, params?: {
        unresolved_only?: string;
        since?: string;
        limit?: string;
        cursor?: string;
    }): Promise<any> {
        const response = await this.client.get<any>(`/api/sessions/${sessionId}/products/${productId}/collabs`, { params });
        return response.data;
    }

    async getUnreadCollabs(sessionId: string): Promise<any> {
        const response = await this.client.get<any>(`/api/sessions/${sessionId}/collabs/unread`);
        return response.data;
    }

    async markProductRead(sessionId: string, productId: string): Promise<void> {
        await this.client.post(`/api/sessions/${sessionId}/products/${productId}/mark-read`);
    }

    async markChatRead(sessionId: string): Promise<void> {
        await this.client.post(`/api/sessions/${sessionId}/mark-chat-read`);
    }

    async getUnreadSummary(sessionId: string): Promise<UnreadSummaryResponse> {
        const response = await this.client.get<UnreadSummaryResponse>(`/api/sessions/${sessionId}/unread-summary`);
        return response.data;
    }

    // -- Debug Routes --

    async getDebugRounds(sessionId: string): Promise<any[]> {
        const response = await this.client.get<any[]>(`/debug/sessions/${sessionId}/rounds`);
        return response.data;
    }

    async getDebugProgression(sessionId: string): Promise<DebugProgressionResponse> {
        const response = await this.client.get<DebugProgressionResponse>(`/debug/sessions/${sessionId}/progression`);
        return response.data;
    }

    async getDebugArtifacts(sessionId: string): Promise<DebugArtifactsResponse> {
        const response = await this.client.get<DebugArtifactsResponse>(`/debug/sessions/${sessionId}/artifacts`);
        return response.data;
    }

    async getDebugErrors(sessionId: string): Promise<DebugErrorsResponse> {
        const response = await this.client.get<DebugErrorsResponse>(`/debug/sessions/${sessionId}/errors`);
        return response.data;
    }
}

export const sessionService = new SessionService();
