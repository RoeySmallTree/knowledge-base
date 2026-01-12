/**
 * LLM Models Report Generator
 * Generates a comprehensive markdown report of LLM models grouped by vendor.
 * Separates models WITH structured outputs from those WITHOUT.
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
const unique = <T>(arr: T[]): T[] => [...new Set(arr)]

const getVendorName = (slug: string): string => slug.split('/')[0].trim()

const toAnchor = (str: string): string => str.toLowerCase().replace(/[^a-z0-9]+/g, '-')

const formatPricing = (price: string | number): string => {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price
    if (numPrice <= 0) return 'Free'
    return `$${(numPrice * 1_000_000).toFixed(2)}`
}

const formatContext = (tokens: number): string => {
    if (tokens >= 1_048_576) return `${(tokens / 1_048_576).toFixed(1)}M`
    if (tokens >= 1024) return `${Math.round(tokens / 1024)}K`
    return `${tokens}`
}

const formatDate = (timestamp: number): string => {
    const date = new Date(timestamp * 1000)
    return `${date.getMonth() + 1}/${date.getFullYear()}`
}

// Feature checks
const hasStructuredOutputs = (params: string[]): boolean =>
    params.includes('structured_outputs') && params.includes('response_format')

const hasWebSearch = (params: string[]): boolean =>
    params.includes('web_search_options')

const hasTools = (params: string[]): boolean =>
    params.includes('tools')

const hasToolChoice = (params: string[]): boolean =>
    params.includes('tool_choice')

const hasReasoning = (params: string[]): boolean =>
    params.includes('reasoning') || params.includes('include_reasoning')

// Vendor metadata for included vendors
interface VendorInfo {
    description: string
    pros: string[]
    cons: string[]
}

const vendorMetadata: Record<string, VendorInfo> = {
    'alibaba': {
        description: 'Chinese tech giant offering Tongyi/Qwen models with strong multilingual and agentic capabilities.',
        pros: ['Excellent Chinese language support', 'Competitive pricing', 'Strong reasoning models'],
        cons: ['Limited Western availability', 'Potential data residency concerns']
    },
    'allenai': {
        description: 'AI2\'s open research lab creating fully open-source Olmo models under Apache 2.0.',
        pros: ['Fully open-source with weights/code', 'Strong reasoning variants', 'Academic transparency'],
        cons: ['Smaller community than commercial models', 'Less polished for production']
    },
    'anthropic': {
        description: 'Safety-focused AI lab behind the Claude family, known for reliability and long context.',
        pros: ['Excellent instruction following', 'Strong coding & reasoning', '200K+ context windows'],
        cons: ['Higher pricing tier', 'More conservative outputs', 'Rate limits on heavy use']
    },
    'arcee-ai': {
        description: 'Enterprise-focused company specializing in efficient MoE models and domain adaptation.',
        pros: ['Efficient sparse MoE architecture', 'Good tool calling', 'Cost-effective'],
        cons: ['Newer provider', 'Smaller model ecosystem']
    },
    'baidu': {
        description: 'Chinese search giant with ERNIE series, strong in multimodal and Chinese NLP.',
        pros: ['Strong Chinese language models', 'Multimodal capabilities', 'Competitive MoE models'],
        cons: ['Regional availability limits', 'Documentation mainly in Chinese']
    },
    'bytedance-seed': {
        description: 'TikTok parent company\'s AI research division with Seed multimodal models.',
        pros: ['Fast inference speeds', 'Multimodal support', 'Large context windows'],
        cons: ['Newer to LLM space', 'Limited track record']
    },
    'cohere': {
        description: 'Enterprise NLP company known for Command models and excellent embeddings.',
        pros: ['Strong RAG/retrieval integration', 'Enterprise-ready', 'Good multilingual support'],
        cons: ['Smaller model selection', 'Less consumer-focused']
    },
    'deepcogito': {
        description: 'Research lab offering Cogito reasoning models with chain-of-thought capabilities.',
        pros: ['Deep reasoning focus', 'Transparent thinking process', 'Research-driven'],
        cons: ['Smaller scale', 'Limited model variety']
    },
    'deepseek': {
        description: 'Chinese AI lab famous for DeepSeek-R1 reasoning models and cost-efficient inference.',
        pros: ['Exceptional value for money', 'Strong coding abilities', 'Open-weight options'],
        cons: ['Variable availability', 'Some models very slow (reasoning)']
    },
    'essentialai': {
        description: 'AI startup focused on essential, reliable language models for production use.',
        pros: ['Focused on reliability', 'Structured output support'],
        cons: ['Small model selection', 'Limited community']
    },
    'google': {
        description: 'Tech giant offering Gemini series with massive context windows and multimodal capabilities.',
        pros: ['1M+ token context', 'Strong multimodal', 'Fast inference', 'Competitive pricing'],
        cons: ['Output quality varies', 'Less consistent than Claude/GPT for some tasks']
    },
    'gryphe': {
        description: 'Independent creator of MythoMax and fantasy/RP-focused models.',
        pros: ['Creative writing focus', 'Community-driven development'],
        cons: ['Niche use case', 'Smaller scale']
    },
    'inception': {
        description: 'AI startup offering Mercury models optimized for speed and efficiency.',
        pros: ['Fast inference', 'Good structured outputs'],
        cons: ['Limited model range', 'Newer provider']
    },
    'kwaipilot': {
        description: 'Kuaishou\'s AI division with specialized coding and assistant models.',
        pros: ['Coding optimization', 'Competitive pricing'],
        cons: ['Limited availability', 'Smaller ecosystem']
    },
    'meta-llama': {
        description: 'Meta\'s open-weight Llama series, the most popular open foundation models.',
        pros: ['Fully open weights', 'Massive ecosystem', 'Strong community support', 'Free to use'],
        cons: ['Base models need fine-tuning', 'No official API']
    },
    'microsoft': {
        description: 'Tech giant offering Phi and MAI series, known for efficient small models.',
        pros: ['Excellent small models', 'Good efficiency', 'Azure integration'],
        cons: ['Limited large model options', 'Some models very specialized']
    },
    'minimax': {
        description: 'Chinese AI company known for MiniMax models optimized for coding and agents.',
        pros: ['Strong coding performance', 'Efficient MoE', 'Good for agents'],
        cons: ['Regional focus', 'Less mainstream adoption']
    },
    'mistralai': {
        description: 'French AI lab offering efficient European-made models with strong coding abilities.',
        pros: ['Excellent coding models', 'Open-weight options', 'EU data sovereignty', 'Fast inference'],
        cons: ['Smaller than US competitors', 'Some models lag in reasoning']
    },
    'moonshotai': {
        description: 'Chinese AI startup with Kimi models featuring massive context and moonshot thinking.',
        pros: ['Very large context windows', 'Strong long-form reasoning'],
        cons: ['Regional availability', 'Newer provider']
    },
    'neversleep': {
        description: 'Independent AI lab creating Llama-based fine-tunes for creative and RP use cases.',
        pros: ['Creative writing specialization', 'Community-driven'],
        cons: ['Niche focus', 'Limited enterprise features']
    },
    'nex-agi': {
        description: 'Startup focused on AGI-aligned models with enhanced reasoning.',
        pros: ['Reasoning focus', 'Structured output support'],
        cons: ['Very new', 'Limited model options']
    },
    'nousresearch': {
        description: 'Community research group creating popular Hermes fine-tunes and instruction models.',
        pros: ['Strong instruction following', 'Community-driven', 'Open development'],
        cons: ['Based on other models', 'Variable quality']
    },
    'nvidia': {
        description: 'GPU giant offering Nemotron models optimized for their hardware stack.',
        pros: ['Hardware-optimized', 'Strong enterprise support', 'Efficient inference'],
        cons: ['Smaller model selection', 'NVIDIA ecosystem lock-in']
    },
    'openai': {
        description: 'Leading AI lab behind GPT series, setting industry standards for capabilities.',
        pros: ['Best-in-class reasoning', 'Excellent tool use', 'Widest adoption', 'Great documentation'],
        cons: ['Premium pricing', 'Closed weights', 'API rate limits']
    },
    'opengvlab': {
        description: 'Open research lab focused on vision-language models and multimodal AI.',
        pros: ['Strong vision capabilities', 'Open research'],
        cons: ['Specialized focus', 'Limited general use']
    },
    'prime-intellect': {
        description: 'Decentralized AI collective training models with distributed compute.',
        pros: ['Decentralized training', 'Open development'],
        cons: ['Newer approach', 'Limited model selection']
    },
    'qwen': {
        description: 'Alibaba\'s flagship model series with excellent coding and multilingual performance.',
        pros: ['Excellent coding', 'Strong multilingual', 'Many size options', 'Open weights'],
        cons: ['Chinese company concerns for some', 'Variable quality across sizes']
    },
    'sao10k': {
        description: 'Independent creator of Llama fine-tunes focused on creative and roleplay use.',
        pros: ['Creative writing focus', 'Community favorite for RP'],
        cons: ['Niche use case', 'Based on other models']
    },
    'stepfun-ai': {
        description: 'Chinese AI startup with Step series models for general and coding tasks.',
        pros: ['Competitive performance', 'Good pricing'],
        cons: ['Limited availability', 'Newer provider']
    },
    'tencent': {
        description: 'Chinese tech giant offering Hunyuan models with enterprise focus.',
        pros: ['Enterprise integration', 'Strong Chinese support'],
        cons: ['Regional focus', 'Limited global availability']
    },
    'thedrummer': {
        description: 'Independent creator of Llama fine-tunes for creative and uncensored use cases.',
        pros: ['Less filtered outputs', 'Creative focus'],
        cons: ['Niche use case', 'Quality varies']
    },
    'tngtech': {
        description: 'German consulting company offering DeepSeek-based fine-tunes.',
        pros: ['EU-based', 'DeepSeek foundation'],
        cons: ['Small selection', 'Based on other models']
    },
    'undi95': {
        description: 'Independent creator of Llama fine-tunes for roleplay and creative writing.',
        pros: ['RP specialization', 'Community-driven'],
        cons: ['Very niche', 'Limited support']
    },
    'venice': {
        description: 'Privacy-focused AI service running models with no logging guarantees.',
        pros: ['Privacy focus', 'No logging claims'],
        cons: ['Limited model selection', 'Newer service']
    },
    'x-ai': {
        description: 'Elon Musk\'s AI company offering Grok models with real-time information access.',
        pros: ['Real-time knowledge', 'Strong reasoning', 'Integrated with X/Twitter'],
        cons: ['Limited availability', 'Platform-tied features']
    },
    'z-ai': {
        description: 'Chinese AI lab behind GLM (General Language Model) series with hybrid architectures.',
        pros: ['Strong coding focus', 'Good agent performance', 'Large context'],
        cons: ['Regional availability', 'Less mainstream']
    }
}

// Helper to generate model card
function generateModelCard(model: Model, lines: string[], showVendor: boolean = false): void {
    const hasStruct = hasStructuredOutputs(model.supported_parameters)
    const hasWeb = hasWebSearch(model.supported_parameters)
    const hasToolsSupport = hasTools(model.supported_parameters)
    const hasToolChoiceSupport = hasToolChoice(model.supported_parameters)
    const hasReasoningSupport = hasReasoning(model.supported_parameters)

    const statusIcon = hasStruct ? '✅' : '🚫'

    lines.push(`### ${statusIcon} ${model.name}`)
    lines.push('')
    lines.push(`> ${model.description.split('\n')[0]}`)
    lines.push('')

    // Info table
    lines.push('| Property | Value |')
    lines.push('|----------|-------|')
    if (showVendor) {
        const vendor = getVendorName(model.canonical_slug)
        lines.push(`| **Vendor** | ${vendor} |`)
    }
    lines.push(`| **Created** | ${formatDate(model.created)} |`)
    lines.push(`| **Context** | ${formatContext(model.context_length)} tokens |`)
    lines.push(`| **ID** | \`${model.id}\` |`)
    lines.push('')

    // Pricing
    lines.push('**💸 Pricing** (per 1M tokens)')
    lines.push('')
    lines.push(`- Prompt: ${formatPricing(model.pricing.prompt)}`)
    lines.push(`- Completion: ${formatPricing(model.pricing.completion)}`)
    if (model.pricing.web_search && model.pricing.web_search !== '0') {
        lines.push(`- Web Search: ${model.pricing.web_search}`)
    }
    if (model.pricing.internal_reasoning && model.pricing.internal_reasoning !== '0') {
        lines.push(`- Reasoning: ${formatPricing(model.pricing.internal_reasoning)}`)
    }
    lines.push('')

    // Capabilities
    const capabilities: string[] = []
    if (hasStruct) capabilities.push('🧱 Structured Outputs')
    if (hasWeb) capabilities.push('🌐 Web Search')
    if (hasToolsSupport) capabilities.push('🔨 Tools')
    if (hasToolChoiceSupport) capabilities.push('⚙️ Tool Choice')
    if (hasReasoningSupport) capabilities.push('🧠 Reasoning')

    if (capabilities.length > 0) {
        lines.push('**Capabilities:** ' + capabilities.join(' · '))
        lines.push('')
    }
}

// Main generator
function generateReport(): void {
    const modelsPath = path.join(__dirname, '../data/models.json')
    const outputPath = path.join(__dirname, '../models-report.md')

    const raw = fs.readFileSync(modelsPath, 'utf-8')
    const { data: models }: ModelsData = JSON.parse(raw)

    // Split models by structured output support
    const modelsWithStruct = models.filter(m => hasStructuredOutputs(m.supported_parameters))
    const modelsWithoutStruct = models.filter(m => !hasStructuredOutputs(m.supported_parameters))

    // Get all unique supported parameters
    const allParams = unique(models.flatMap(m => m.supported_parameters))

    // Build markdown
    const lines: string[] = []

    // Header
    lines.push('# LLM Models Report')
    lines.push('')
    lines.push(`> Generated: ${new Date().toISOString().split('T')[0]}`)
    lines.push(`> Total Models: ${models.length}`)
    lines.push(`> ✅ With Structured Outputs: ${modelsWithStruct.length}`)
    lines.push(`> 🚫 Without Structured Outputs: ${modelsWithoutStruct.length}`)
    lines.push('')

    // Legend
    lines.push('## Legend')
    lines.push('')
    lines.push('| Symbol | Meaning |')
    lines.push('|--------|---------|')
    lines.push('| ✅ | Supports structured outputs |')
    lines.push('| 🚫 | No structured outputs |')
    lines.push('| 🌐 | Web search |')
    lines.push('| 🔨 | Tool calling |')
    lines.push('| ⚙️ | Tool choice |')
    lines.push('| 🧠 | Reasoning/thinking |')
    lines.push('')

    // Table of Contents
    lines.push('## Table of Contents')
    lines.push('')
    lines.push(`- [✅ Structured Output Compatible](#-structured-output-compatible) (${modelsWithStruct.length} models)`)
    lines.push(`- [🚫 Disabled Vendors (No Structured Outputs)](#-disabled-vendors-no-structured-outputs) (${modelsWithoutStruct.length} models)`)
    lines.push('- [Summary Statistics](#summary-statistics)')
    lines.push('- [All Supported Parameters](#all-supported-parameters)')
    lines.push('')

    // ========================================
    // SECTION 1: Models WITH Structured Outputs
    // ========================================
    lines.push('---')
    lines.push('')
    lines.push('# ✅ Structured Output Compatible')
    lines.push('')
    lines.push(`*${modelsWithStruct.length} models that support \`structured_outputs\` + \`response_format\`*`)
    lines.push('')

    // Group by vendor for structured models
    const structByVendor = modelsWithStruct.reduce<Record<string, Model[]>>((acc, model) => {
        const vendor = getVendorName(model.canonical_slug)
        if (!acc[vendor]) acc[vendor] = []
        acc[vendor].push(model)
        return acc
    }, {})

    const sortedStructVendors = Object.keys(structByVendor).sort()

    // Mini TOC for structured - with links
    const structVendorLinks = sortedStructVendors.map(v =>
        `[${v}](#${toAnchor(v)}) (${structByVendor[v].length})`
    ).join(' · ')
    lines.push('**Vendors:** ' + structVendorLinks)
    lines.push('')

    sortedStructVendors.forEach(vendor => {
        const vendorModels = structByVendor[vendor]
        const meta = vendorMetadata[vendor]

        lines.push('---')
        lines.push('')
        lines.push(`## ${vendor}`)
        lines.push('')

        // Vendor description and pros/cons
        if (meta) {
            lines.push(`> ${meta.description}`)
            lines.push('')
            lines.push('| ✅ Pros | ⚠️ Cons |')
            lines.push('|---------|---------|')
            const maxLen = Math.max(meta.pros.length, meta.cons.length)
            for (let i = 0; i < maxLen; i++) {
                const pro = meta.pros[i] || ''
                const con = meta.cons[i] || ''
                lines.push(`| ${pro} | ${con} |`)
            }
            lines.push('')
        }

        lines.push(`*${vendorModels.length} model${vendorModels.length > 1 ? 's' : ''} with structured outputs*`)
        lines.push('')

        vendorModels.forEach(model => generateModelCard(model, lines))
    })

    // ========================================
    // SECTION 2: Models WITHOUT Structured Outputs (DISABLED)
    // ========================================
    lines.push('---')
    lines.push('')
    lines.push('# 🚫 Disabled Vendors (No Structured Outputs)')
    lines.push('')
    lines.push('> [!WARNING]')
    lines.push('> The following models do NOT support structured outputs and are considered **disabled** for use cases requiring reliable JSON schema compliance.')
    lines.push('')
    lines.push(`*${modelsWithoutStruct.length} models that do NOT support structured outputs*`)
    lines.push('')

    // Group by vendor for non-structured models
    const noStructByVendor = modelsWithoutStruct.reduce<Record<string, Model[]>>((acc, model) => {
        const vendor = getVendorName(model.canonical_slug)
        if (!acc[vendor]) acc[vendor] = []
        acc[vendor].push(model)
        return acc
    }, {})

    const sortedNoStructVendors = Object.keys(noStructByVendor).sort()

    // Mini TOC for non-structured - with links
    const disabledVendorLinks = sortedNoStructVendors.map(v =>
        `[~~${v}~~](#${toAnchor(v)}-disabled) (${noStructByVendor[v].length})`
    ).join(' · ')
    lines.push('**Disabled Vendors:** ' + disabledVendorLinks)
    lines.push('')

    sortedNoStructVendors.forEach(vendor => {
        const vendorModels = noStructByVendor[vendor]

        lines.push('---')
        lines.push('')
        lines.push(`## ~~${vendor}~~ [DISABLED]`)
        lines.push('')
        lines.push(`*${vendorModels.length} model${vendorModels.length > 1 ? 's' : ''} — no structured outputs*`)
        lines.push('')

        vendorModels.forEach(model => generateModelCard(model, lines))
    })

    // Summary section
    lines.push('---')
    lines.push('')
    lines.push('## Summary Statistics')
    lines.push('')

    const withStruct = modelsWithStruct.length
    const withTools = models.filter(m => hasTools(m.supported_parameters)).length
    const withReasoning = models.filter(m => hasReasoning(m.supported_parameters)).length
    const freeModels = models.filter(m => parseFloat(m.pricing.prompt) <= 0).length

    lines.push('| Metric | Count | Percentage |')
    lines.push('|--------|-------|------------|')
    lines.push(`| Total Models | ${models.length} | 100% |`)
    lines.push(`| ✅ With Structured Outputs | ${withStruct} | ${((withStruct / models.length) * 100).toFixed(1)}% |`)
    lines.push(`| 🚫 Without Structured Outputs | ${modelsWithoutStruct.length} | ${((modelsWithoutStruct.length / models.length) * 100).toFixed(1)}% |`)
    lines.push(`| With Tool Calling | ${withTools} | ${((withTools / models.length) * 100).toFixed(1)}% |`)
    lines.push(`| With Reasoning | ${withReasoning} | ${((withReasoning / models.length) * 100).toFixed(1)}% |`)
    lines.push(`| Free Models | ${freeModels} | ${((freeModels / models.length) * 100).toFixed(1)}% |`)
    lines.push('')

    // All supported parameters
    lines.push('## All Supported Parameters')
    lines.push('')
    lines.push(allParams.sort().map(p => `\`${p}\``).join(', '))
    lines.push('')

    // Write file
    const content = lines.join('\n')
    fs.writeFileSync(outputPath, content, 'utf-8')

    console.log(`✅ Report generated: ${outputPath}`)
    console.log(`   - ${models.length} total models`)
    console.log(`   - ✅ ${modelsWithStruct.length} with structured outputs (${sortedStructVendors.length} vendors)`)
    console.log(`   - 🚫 ${modelsWithoutStruct.length} disabled (${sortedNoStructVendors.length} vendors)`)
}

generateReport()
