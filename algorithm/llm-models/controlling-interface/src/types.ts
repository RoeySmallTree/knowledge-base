export interface LLMModel {
    id?: string;
    api_id?: string;
    slug?: string;
    vendor: string;
    modelFamily: string;
    modelName: string;
    description?: string;
    parametersB: string;
    contextK: number | string;
    context_length?: number;
    personalityTraits: string;
    analyticalTraits: string;
    bestFor: string;
    optimalTeamExamples: string;
    creativeScore: number | null;
    deductiveScore: number | null;
    specialPropertiesNotes: string;
    pricing?: {
        prompt: number;
        completion: number;
        tier: number;
    };
    fallback_model_id?: string;
    capabilities?: string[];
}

export interface ModelsData {
    generatedAt: string;
    totalModels: number;
    models: LLMModel[];
}
