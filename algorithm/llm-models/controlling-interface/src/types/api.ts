export interface ApiError {
    ok: boolean;
    error: string;
}

export interface HealthResponse {
    ok: boolean;
    service: string;
    version: string;
    time: string;
}

// -- Session Schemas --

export interface CreateSessionRequest {
    name: string;
    description?: string;
}

export interface CreateSessionResponse {
    id: string;
    root_product_id: string;
    status: string;
}

export interface Session {
    id: string;
    [key: string]: any; // Based on "additionalProperties": true
}

export interface RunSessionRequest {
    addRounds?: number; // min 1, max 10, default 1
    routing?: {
        chair?: { model: string };
        watchdog?: { model: string };
        operative?: { model: string };
        envoy?: { model: string };
    };
}

export interface RunSessionResponse {
    sessionId: string;
    status: string;
    message?: string;
}

export interface ProductTreeResponse {
    root: Record<string, any>;
}

// -- Collab Schemas --

export interface Collab {
    [key: string]: any;
}

export interface CreateCollabRequest {
    refersToProduct: string;
    importance?: number; // default 5
    comment: string;
    shortestSummary?: string;
    addresseeIds?: string[];
    referencesProductIds?: string[];
    respondingToCollabIds?: string[];
}

export interface CreateCollabResponse {
    id: string;
}

// -- Chat Schemas --

export interface ChatMessage {
    [key: string]: any;
}

export interface SendChatRequest {
    message: string;
}

export interface SendChatResponse {
    id: string;
}

// -- Analysis/Debug/Info --

export interface SessionRound {
    round: number;
    started_at: string;
    ended_at?: string;
    duration_ms?: number;
    executionId?: string;
    deltas?: Record<string, any>;
    status: 'running' | 'completed' | 'pending';
}

export interface SessionEvent {
    [key: string]: any;
}

export interface SessionUsage {
    total_tokens: number;
    prompt_tokens: number;
    output_tokens: number;
    events: number;
}

export interface SessionTeam {
    [key: string]: any;
}

export interface DebugStoryResponse {
    enabled: boolean;
    files: string[];
    content: string;
}

// -- Frontend API (Sidebar/Overview) --

export interface SessionOverview {
    // Response description is empty in spec, typing as any for now or undefined if 204
    [key: string]: any;
}

export interface ProductListResponse {
    // Response description is empty
    [key: string]: any;
}

export interface ProductDetailResponse {
    // Response description is empty
    [key: string]: any;
}

export interface VersionSummaryResponse {
    // Response description is empty
    [key: string]: any;
}

export interface VersionDetailResponse {
    // Response description is empty
    [key: string]: any;
}

export interface TeamMembersResponse {
    // Response description is empty
    [key: string]: any;
}

export interface TeamActivityResponse {
    // Response description is empty
    [key: string]: any;
}

export interface UnreadSummaryResponse {
    // Response description is empty
    [key: string]: any;
}

export interface DebugProgressionResponse {
    session: {
        id: string;
        status: string;
        current_round: number;
        rounds_left: number;
    };
    rounds: {
        round: number;
        duration_ms?: number;
        executionId?: string;
        status: string;
    }[];
    health: {
        totalRounds: number;
        completedRounds: number;
        runningRounds: number;
        averageDuration_ms?: number;
        possiblyStalled: boolean;
    };
}

export interface DebugArtifactsResponse {
    rounds: {
        round: number;
        artifacts: {
            versions: number;
            products: number;
            collabs: number;
            assignments: number;
            reflections: number;
            chatMessages: number;
            operativesSkipped: number;
            total: number;
        };
        hasProgress: boolean;
    }[];
    stall: {
        isStalled: boolean;
        consecutiveEmptyRounds: number;
        lastRoundWithArtifacts?: number;
    };
}

export interface DebugErrorsResponse {
    total: number;
    errors: {
        round: number;
        step: string;
        caller: string;
        error_code?: string;
        error_message?: string;
        created_at: string;
    }[];
}
