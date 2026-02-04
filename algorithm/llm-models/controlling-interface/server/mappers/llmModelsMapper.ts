import { DbLlmModelRow } from '../types/db';
import { LlmModelDto, LlmModelInput } from '../types/api';
import { joinList, parseDbNumeric, splitList, toInteger, toNumber } from '../utils/parse';

export const mapDbModelToDto = (row: DbLlmModelRow): LlmModelDto => {
    const contextLength = row.context_length ?? null;
    const contextK = contextLength !== null ? contextLength / 1024 : null;

    return {
        id: row.id,
        api_id: row.api_id,
        slug: row.slug,
        vendor_id: row.vendor_id ?? null,
        modelFamily: row.model_family ?? null,
        modelName: row.display_name,
        name_within_family: row.name_within_family ?? null,
        display_order: row.display_order ?? 0,
        description: row.description ?? null,
        capabilities: row.capabilities ?? [],
        contextK,
        context_length: contextLength,
        parameter_count_b: parseDbNumeric(row.parameter_count_b) ?? null,
        active_parameter_count_b: parseDbNumeric(row.active_parameter_count_b) ?? null,
        personalityTraits: joinList(row.personality_traits),
        analyticalTraits: joinList(row.professional_traits),
        bestFor: joinList(row.best_for),
        creativeScore: row.creativity_score ?? null,
        deductiveScore: row.logic_score ?? null,
        efficiencyScore: row.efficiency_score ?? null,
        pricing: {
            prompt: parseDbNumeric(row.price_prompt_micro) ?? 0,
            completion: parseDbNumeric(row.price_completion_micro) ?? 0,
            tier: row.price_tier ?? 1
        },
        fallback_model_id: row.fallback_model_id ?? null,
        active: row.is_active ?? true,
        last_synced_at: row.last_synced_at ?? null,
        created_at: row.created_at,
        updated_at: row.updated_at
    };
};

export const mapModelInputToDbUpdate = (model: LlmModelInput) => {
    const contextK = toNumber(model.contextK);
    const contextLength = contextK !== null ? Math.round(contextK * 1024) : toInteger(model.context_length);

    const vendorId = toInteger(model.vendor_id ?? null);
    const displayOrder = toInteger(model.display_order) ?? 0;

    return {
        api_id: model.api_id ?? undefined,
        slug: model.slug ?? undefined,
        vendor_id: vendorId ?? undefined,
        display_name: model.modelName ?? undefined,
        model_family: model.modelFamily ?? undefined,
        name_within_family: model.name_within_family ?? undefined,
        display_order: displayOrder,
        description: model.description ?? undefined,
        capabilities: Array.isArray(model.capabilities) ? model.capabilities : undefined,
        context_length: contextLength ?? undefined,
        price_prompt_micro: toInteger(model.pricing?.prompt) ?? undefined,
        price_completion_micro: toInteger(model.pricing?.completion) ?? undefined,
        price_tier: toInteger(model.pricing?.tier) ?? undefined,
        fallback_model_id: toInteger(model.fallback_model_id) ?? undefined,
        parameter_count_b: toNumber(model.parameter_count_b) ?? undefined,
        active_parameter_count_b: toNumber(model.active_parameter_count_b) ?? undefined,
        personality_traits: splitList(model.personalityTraits),
        professional_traits: splitList(model.analyticalTraits),
        best_for: splitList(model.bestFor),
        creativity_score: toInteger(model.creativeScore),
        logic_score: toInteger(model.deductiveScore),
        efficiency_score: toInteger(model.efficiencyScore),
        is_active: typeof model.active === 'boolean' ? model.active : undefined
    };
};
