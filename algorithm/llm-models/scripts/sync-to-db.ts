/**
 * LLM Models Database Sync Script
 * Reads models.json and generates SQL INSERT statements for the database.
 * Only includes models that support structured outputs.
 */

import * as fs from 'fs'
import * as path from 'path'

// Types
interface Pricing {
    prompt: string
    completion: string
    request: string
    image: string
    web_search: string
    internal_reasoning: string
}

interface Model {
    id: string
    canonical_slug: string
    name: string
    description: string
    created: number
    context_length: number
    pricing: Pricing
    supported_parameters: string[]
}

interface ModelsData {
    data: Model[]
}

// Utilities
const getVendorSlug = (slug: string): string => slug.split('/')[0].trim()

const getModelSlug = (id: string): string => {
    const parts = id.split('/')
    return parts.length > 1 ? parts.slice(1).join('/') : parts[0]
}

const escapeSQL = (str: string): string => {
    if (!str) return ''
    return str.replace(/'/g, "''").replace(/\\/g, '\\\\')
}

const toMicroDollars = (price: string | number): number => {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price
    if (isNaN(numPrice) || numPrice <= 0) return 0
    // Price is per token, convert to per 1M tokens, then to microdollars
    return Math.round(numPrice * 1_000_000 * 1_000_000)
}

const calculatePriceTier = (promptPrice: number, completionPrice: number): number => {
    const avgMicro = (promptPrice + completionPrice) / 2
    if (avgMicro === 0) return 0           // Free
    if (avgMicro < 500_000) return 1       // Budget (< $0.50/1M)
    if (avgMicro < 5_000_000) return 2     // Standard (< $5/1M)
    return 3                                // Premium
}

// Feature checks
const hasStructuredOutputs = (params: string[]): boolean =>
    params.includes('structured_outputs') && params.includes('response_format')

const getCapabilities = (params: string[]): string[] => {
    const caps: string[] = []
    if (params.includes('tools')) caps.push('tools')
    if (params.includes('tool_choice')) caps.push('tool_choice')
    if (params.includes('reasoning') || params.includes('include_reasoning')) caps.push('reasoning')
    if (params.includes('web_search_options')) caps.push('web_search')
    return caps
}

// Main sync function
function generateSyncSQL(): void {
    const modelsPath = path.join(__dirname, '../data/models.json')
    const outputPath = path.join(__dirname, '../db', 'seed.sql')

    const raw = fs.readFileSync(modelsPath, 'utf-8')
    const { data: models }: ModelsData = JSON.parse(raw)

    // Filter to structured output models only
    const structuredModels = models.filter(m => hasStructuredOutputs(m.supported_parameters))

    // Extract unique vendors
    const vendorSlugs = [...new Set(structuredModels.map(m => getVendorSlug(m.canonical_slug)))]
    vendorSlugs.sort()

    // Build SQL
    const lines: string[] = []

    lines.push('-- LLM Models Seed Data')
    lines.push(`-- Generated: ${new Date().toISOString()}`)
    lines.push(`-- Total vendors: ${vendorSlugs.length}`)
    lines.push(`-- Total models: ${structuredModels.length}`)
    lines.push('')
    lines.push('-- ============================================')
    lines.push('-- VENDORS')
    lines.push('-- ============================================')
    lines.push('')

    // Insert vendors
    vendorSlugs.forEach((slug, index) => {
        // Create display name from slug
        const displayName = slug
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')

        lines.push(`INSERT INTO llm_vendors (slug, display_name, display_order)`)
        lines.push(`VALUES ('${escapeSQL(slug)}', '${escapeSQL(displayName)}', ${index * 10})`)
        lines.push(`ON CONFLICT (slug) DO UPDATE SET`)
        lines.push(`    display_name = EXCLUDED.display_name,`)
        lines.push(`    updated_at = NOW();`)
        lines.push('')
    })

    lines.push('-- ============================================')
    lines.push('-- MODELS')
    lines.push('-- ============================================')
    lines.push('')

    // Group models by vendor for display order
    const modelsByVendor: Record<string, Model[]> = {}
    structuredModels.forEach(model => {
        const vendor = getVendorSlug(model.canonical_slug)
        if (!modelsByVendor[vendor]) modelsByVendor[vendor] = []
        modelsByVendor[vendor].push(model)
    })

    // Insert models
    Object.entries(modelsByVendor).forEach(([vendor, vendorModels]) => {
        lines.push(`-- ${vendor} models`)

        vendorModels.forEach((model, index) => {
            const modelSlug = getModelSlug(model.id)
            const capabilities = getCapabilities(model.supported_parameters)
            const capabilitiesSQL = capabilities.length > 0
                ? `ARRAY[${capabilities.map(c => `'${c}'`).join(', ')}]`
                : `'{}'::TEXT[]`

            const promptMicro = toMicroDollars(model.pricing.prompt)
            const completionMicro = toMicroDollars(model.pricing.completion)
            const priceTier = calculatePriceTier(promptMicro, completionMicro)

            // Truncate description to first sentence or 500 chars
            let desc = model.description || ''
            const firstSentenceEnd = desc.indexOf('. ')
            if (firstSentenceEnd > 0 && firstSentenceEnd < 500) {
                desc = desc.substring(0, firstSentenceEnd + 1)
            } else if (desc.length > 500) {
                desc = desc.substring(0, 497) + '...'
            }

            lines.push(`INSERT INTO llm_models (`)
            lines.push(`    vendor_id, api_id, slug, display_name, description,`)
            lines.push(`    display_order, capabilities, context_length,`)
            lines.push(`    price_prompt_micro, price_completion_micro, price_tier`)
            lines.push(`) VALUES (`)
            lines.push(`    (SELECT id FROM llm_vendors WHERE slug = '${escapeSQL(vendor)}'),`)
            lines.push(`    '${escapeSQL(model.id)}',`)
            lines.push(`    '${escapeSQL(modelSlug)}',`)
            lines.push(`    '${escapeSQL(model.name)}',`)
            lines.push(`    '${escapeSQL(desc)}',`)
            lines.push(`    ${index * 10},`)
            lines.push(`    ${capabilitiesSQL},`)
            lines.push(`    ${model.context_length || 'NULL'},`)
            lines.push(`    ${promptMicro},`)
            lines.push(`    ${completionMicro},`)
            lines.push(`    ${priceTier}`)
            lines.push(`)`)
            lines.push(`ON CONFLICT (api_id) DO UPDATE SET`)
            lines.push(`    display_name = EXCLUDED.display_name,`)
            lines.push(`    description = EXCLUDED.description,`)
            lines.push(`    capabilities = EXCLUDED.capabilities,`)
            lines.push(`    context_length = EXCLUDED.context_length,`)
            lines.push(`    price_prompt_micro = EXCLUDED.price_prompt_micro,`)
            lines.push(`    price_completion_micro = EXCLUDED.price_completion_micro,`)
            lines.push(`    price_tier = EXCLUDED.price_tier,`)
            lines.push(`    last_synced_at = NOW(),`)
            lines.push(`    updated_at = NOW();`)
            lines.push('')
        })
    })

    // Summary stats
    lines.push('-- ============================================')
    lines.push('-- SYNC SUMMARY')
    lines.push('-- ============================================')
    lines.push('')
    lines.push('-- Price tier distribution:')

    const tierCounts = [0, 0, 0, 0]
    structuredModels.forEach(model => {
        const promptMicro = toMicroDollars(model.pricing.prompt)
        const completionMicro = toMicroDollars(model.pricing.completion)
        tierCounts[calculatePriceTier(promptMicro, completionMicro)]++
    })
    lines.push(`--   Tier 0 (Free):     ${tierCounts[0]} models`)
    lines.push(`--   Tier 1 (Budget):   ${tierCounts[1]} models`)
    lines.push(`--   Tier 2 (Standard): ${tierCounts[2]} models`)
    lines.push(`--   Tier 3 (Premium):  ${tierCounts[3]} models`)

    // Write file
    const content = lines.join('\n')
    fs.writeFileSync(outputPath, content, 'utf-8')

    console.log(`✅ Seed SQL generated: ${outputPath}`)
    console.log(`   - ${vendorSlugs.length} vendors`)
    console.log(`   - ${structuredModels.length} models`)
    console.log(`   - Price tiers: Free(${tierCounts[0]}), Budget(${tierCounts[1]}), Standard(${tierCounts[2]}), Premium(${tierCounts[3]})`)
}

generateSyncSQL()
