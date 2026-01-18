# Mistral Models Analysis

---

## Models Removed & Reasons

From your 27 models, I've curated to **10 distinct models**:

| Model Removed | Reason |
|---------------|--------|
| **Devstral 2 2512 (free)** | Same model as paid, just free-tier routing |
| **Mistral Small 3.1 24B (free)** | Same as paid version |
| **Mistral Small 3.1 24B** | Superseded by Small 3.2 |
| **Mistral Small 3** | Superseded by Small 3.2 |
| **Mistral Medium 3** | Superseded by Medium 3.1 |
| **Mistral Large 2411** | Superseded by Large 3 (2512) |
| **Mistral Large 2407** | Superseded by Large 3 (2512) |
| **Mistral Large** | Alias for older version |
| **Ministral 8B** | Old version, superseded by Ministral 3 8B |
| **Ministral 3B** | Old version, superseded by Ministral 3 3B |
| **Pixtral 12B** | Superseded by Pixtral Large & Mistral Large 3 (native vision) |
| **Mistral Nemo** | 12B model superseded by Ministral 3 14B |
| **Mixtral 8x22B Instruct** | Legacy MoE, superseded by Large 3 |
| **Mistral Tiny** | Too small, no structured output |
| **Mistral: Saba** | Regional/Arabic focus, limited structured output support |
| **Devstral Medium** | Covered by Devstral 2 (123B) |
| **Devstral Small 1.1** | Superseded by Devstral Small 2 (24B) |

**All kept models support structured output (JSON schema mode).**

---

## Mistral Large 3 (2512)

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Analyst, Context-Heavy, Tool-Seeker, Formal, Enterprise-Grade |
| **Total / Active Parameters** | 675B / 41B (Granular MoE) |
| **Creative Score** | 6.5/10 |
| **Logical Score** | 8.5/10 |
| **Efficiency Score** | 7.5/10 |
| **Short Description** | Mistral's flagship multimodal MoE - enterprise-ready generalist |
| **Special Properties** | 256K context; native vision; single-node deployable (FP8 on B200/H200); Apache 2.0 license; trained from scratch on 3000 H200s; EAGLE speculative decoding support |
| **Best For** | Enterprise assistants, RAG systems, scientific workloads, long document understanding, agentic workflows |
| **Special Capabilities** | Vision, function calling, structured outputs, predicted outputs, OCR, agents & conversations, prefix completion |
| **Recommendation Score** | 8.5/10 |

**Pricing**: $0.50/1M input, $1.50/1M output

**Notes**: Released Dec 2025. First Mistral MoE since Mixtral. Strong European sovereignty story. Not a dedicated reasoning model - specialized thinking models outperform on complex reasoning. 100% general knowledge accuracy, 94% math, 91% coding on benchmarks.

---

## Devstral 2 (123B)

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Tool-Seeker, Stepwise, Agentic, Self-Correcting, Long-Horizon |
| **Total Parameters** | 123B (dense) |
| **Creative Score** | 4.5/10 |
| **Logical Score** | 8.5/10 |
| **Efficiency Score** | 7.0/10 |
| **Short Description** | Frontier agentic coding model for software engineering |
| **Special Properties** | 256K context; SOTA on SWE-Bench; dense architecture for stable reasoning; vision support; Mistral Vibe CLI included; tracks dependencies and retries with corrections |
| **Best For** | Agentic coding, repository exploration, multi-file editing, bug fixing, legacy system modernization |
| **Special Capabilities** | Code generation, tool calling, multi-file orchestration, framework dependency tracking, structured outputs |
| **Recommendation Score** | 8.5/10 |

**Pricing**: $0.40/1M input, $2.00/1M output (free tier available)

**Notes**: Released Dec 2025. MIT-style license. Competes with Qwen3 Coder and Claude Sonnet 4 on agentic coding. Dense 123B design trades compute cost for superior reasoning stability in multi-step tasks. Use with Mistral Vibe CLI or Cline/Cursor integrations.

---

## Devstral Small 2 (24B)

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Tool-Seeker, Fast-Twitch, Cost-Saver, Agentic |
| **Total Parameters** | 24B (dense) |
| **Creative Score** | 4.0/10 |
| **Logical Score** | 7.5/10 |
| **Efficiency Score** | 9.0/10 |
| **Short Description** | Lightweight agentic coder - runs on single RTX 4090 |
| **Special Properties** | 256K context; 68% SWE-Bench Verified; runs on 24GB VRAM or 32GB Mac; same architecture as Ministral 3; vision support |
| **Best For** | Local agentic coding, on-device development, cost-sensitive coding workflows |
| **Special Capabilities** | Code generation, tool calling, agentic workflows, structured outputs |
| **Recommendation Score** | 8.0/10 |

**Pricing**: ~$0.10/1M input, $0.50/1M output

**Notes**: Released Dec 2025. Apache 2.0. **Best local agentic coding model** - fits on consumer hardware while maintaining strong SWE-Bench performance. Use when you need Devstral capabilities without 123B compute requirements.

---

## Mistral Medium 3.1

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Analyst, Formal, Enterprise-Grade, Cost-Saver |
| **Total Parameters** | ~70B (proprietary, exact undisclosed) |
| **Creative Score** | 6.0/10 |
| **Logical Score** | 8.0/10 |
| **Efficiency Score** | 8.5/10 |
| **Short Description** | Enterprise workhorse - 90% of Sonnet 3.7 at fraction of cost |
| **Special Properties** | 131K context; 8x lower cost than frontier models; on-prem/VPC deployable; continuous pretraining and fine-tuning available; multimodal |
| **Best For** | Enterprise deployments, domain-specific fine-tuning, cost-conscious production, European compliance |
| **Special Capabilities** | Vision, function calling, structured outputs, fine-tuning support |
| **Recommendation Score** | 8.0/10 |

**Pricing**: $0.40/1M input, $2.00/1M output

**Notes**: Released Aug 2025. Proprietary but deployable on-prem. 93% math, 92% coding accuracy. Top-3 in LMSys Arena for Coding and Long Query handling. **Best cost-performance ratio** for enterprise. Mistral's applied AI team offers continuous pretraining and enterprise customization.

---

## Mistral Small 3.2 (24B)

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Fast-Twitch, Tool-Seeker, Cost-Saver |
| **Total Parameters** | 24B (dense) |
| **Creative Score** | 5.5/10 |
| **Logical Score** | 7.5/10 |
| **Efficiency Score** | 9.5/10 |
| **Short Description** | Latency-optimized multimodal - rivals 70B models at 3x speed |
| **Special Properties** | 128K context; 150 tokens/sec; multimodal (text + vision); improved instruction following (84.78%); 50% fewer infinite generations; enhanced function calling |
| **Best For** | Fast-response assistants, low-latency function calling, local deployment, fine-tuning base |
| **Special Capabilities** | Vision, function calling, structured outputs, tool use |
| **Recommendation Score** | 8.5/10 |

**Pricing**: $0.06/1M input, $0.18/1M output

**Notes**: Released June 2025. Apache 2.0. **Best efficiency in class** - matches Llama 3.3 70B quality at 3x speed. Runs on single RTX 4090 (quantized) or 32GB Mac. 81% MMLU, 86% coding, 85% math. 100% reliability (no failures across benchmarks).

---

## Codestral 2508

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Stepwise, Fast-Twitch, Code-First |
| **Total Parameters** | ~22B (dense, code-specialized) |
| **Creative Score** | 3.5/10 |
| **Logical Score** | 7.5/10 |
| **Efficiency Score** | 9.0/10 |
| **Short Description** | Code completion specialist - FIM and autocomplete optimized |
| **Special Properties** | 256K context; +30% accepted completions vs previous; 86.6% HumanEval; 50% fewer irrelevant outputs; Codestral Embed for semantic search |
| **Best For** | IDE autocomplete, fill-in-the-middle, code correction, test generation |
| **Special Capabilities** | FIM completion, code generation, tool calling, structured outputs |
| **Recommendation Score** | 7.5/10 |

**Pricing**: $0.30/1M input, $0.90/1M output

**Notes**: Released July 2025. Optimized for low-latency, high-frequency coding tasks. Use with Mistral Code IDE extension. Different from Devstral (which is agentic) - Codestral is for fast autocomplete. Part of Mistral's complete coding stack with Codestral Embed for semantic code search.

---

## Ministral 3 14B (Reasoning)

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Deep-Thinker, Stepwise, Edge-Optimized |
| **Total Parameters** | 14B (dense) |
| **Creative Score** | 5.0/10 |
| **Logical Score** | 8.0/10 |
| **Efficiency Score** | 9.0/10 |
| **Short Description** | Best edge reasoning model - 85% AIME '25 |
| **Special Properties** | 256K context; vision support; reasoning variant with extended thinking; comparable to Mistral Small 3.2 24B; fits in 24GB VRAM (BF16) or <12GB quantized |
| **Best For** | Edge reasoning, math/STEM on device, local AI assistants requiring reasoning |
| **Special Capabilities** | Vision, reasoning traces, multilingual (40+ languages), structured outputs |
| **Recommendation Score** | 8.0/10 |

**Pricing**: $0.20/1M input, $0.20/1M output

**Notes**: Released Dec 2025. Apache 2.0. **Best reasoning model for edge deployment**. 85% AIME '25 is exceptional for 14B. Instruct variant also available for faster non-reasoning tasks. Part of Ministral 3 family (3B/8B/14B).

---

## Ministral 3 8B (Reasoning)

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Fast-Twitch, Edge-Optimized, Cost-Saver |
| **Total Parameters** | 8B (dense) |
| **Creative Score** | 4.5/10 |
| **Logical Score** | 7.0/10 |
| **Efficiency Score** | 9.5/10 |
| **Short Description** | Balanced edge model with vision and reasoning |
| **Special Properties** | 256K context; vision support; reasoning variant; runs on consumer hardware |
| **Best For** | Mobile/edge deployment, resource-constrained environments, lightweight reasoning |
| **Special Capabilities** | Vision, reasoning, multilingual, structured outputs |
| **Recommendation Score** | 7.5/10 |

**Pricing**: ~$0.10/1M input, $0.10/1M output

**Notes**: Released Dec 2025. Apache 2.0. Middle ground between 3B (tiny) and 14B (capable). Good for applications needing vision + reasoning on limited hardware.

---

## Ministral 3 3B (Reasoning)

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Fast-Twitch, Edge-Optimized, Ultra-Efficient |
| **Total Parameters** | 3B (dense) |
| **Creative Score** | 4.0/10 |
| **Logical Score** | 6.0/10 |
| **Efficiency Score** | 10/10 |
| **Short Description** | Tiny reasoning model - fits in 8GB RAM |
| **Special Properties** | 256K context; vision support; reasoning variant; fits in 16GB VRAM (BF16), <8GB quantized |
| **Best For** | Ultra-edge deployment, IoT, mobile, Jetson devices |
| **Special Capabilities** | Vision, reasoning, multilingual, structured outputs |
| **Recommendation Score** | 7.0/10 |

**Pricing**: ~$0.05/1M tokens

**Notes**: Released Dec 2025. Apache 2.0. **Smallest model with full Mistral capabilities** including vision and reasoning. Use when compute is extremely constrained.

---

## Pixtral Large 2411

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Context-Heavy, Analyst, Vision-First |
| **Total Parameters** | 124B (123B LLM + 1B vision encoder) |
| **Creative Score** | 5.5/10 |
| **Logical Score** | 8.0/10 |
| **Efficiency Score** | 6.5/10 |
| **Short Description** | Frontier multimodal for documents and charts |
| **Special Properties** | 128K context (30+ high-res images); built on Mistral Large 2; SOTA on MathVista (69.4%), DocVQA (93.3%), ChartQA (88.1%) |
| **Best For** | Document analysis, chart interpretation, visual QA, multimodal RAG |
| **Special Capabilities** | Vision, document parsing, chart analysis, structured outputs, function calling |
| **Recommendation Score** | 7.5/10 |

**Pricing**: $2.00/1M input, $6.00/1M output

**Notes**: Released Nov 2024. Mistral Research License (MRL) for research, commercial license available. **Best open-weight multimodal** on LMSys Vision Leaderboard. Superseded for general use by Mistral Large 3 (native vision), but still best for vision-heavy tasks.

---

## Summary Comparison Table

| Model | Params | Type | Creative | Logic | Efficiency | Context | Structured | Rec |
|-------|--------|------|----------|-------|------------|---------|------------|-----|
| **Mistral Large 3** | 675B/41B | MoE+Vision | 6.5 | **8.5** | 7.5 | 256K | ✅ | **8.5** |
| **Devstral 2** | 123B | Dense | 4.5 | **8.5** | 7.0 | 256K | ✅ | **8.5** |
| **Devstral Small 2** | 24B | Dense | 4.0 | 7.5 | **9.0** | 256K | ✅ | 8.0 |
| **Mistral Medium 3.1** | ~70B | Proprietary | 6.0 | 8.0 | 8.5 | 131K | ✅ | 8.0 |
| **Mistral Small 3.2** | 24B | Dense+Vision | 5.5 | 7.5 | **9.5** | 128K | ✅ | **8.5** |
| **Codestral 2508** | ~22B | Dense | 3.5 | 7.5 | **9.0** | 256K | ✅ | 7.5 |
| **Ministral 3 14B** | 14B | Dense+Vision | 5.0 | 8.0 | **9.0** | 256K | ✅ | 8.0 |
| **Ministral 3 8B** | 8B | Dense+Vision | 4.5 | 7.0 | **9.5** | 256K | ✅ | 7.5 |
| **Ministral 3 3B** | 3B | Dense+Vision | 4.0 | 6.0 | **10** | 256K | ✅ | 7.0 |
| **Pixtral Large** | 124B | Dense+Vision | 5.5 | 8.0 | 6.5 | 128K | ✅ | 7.5 |

---

## Pricing Overview

| Model | Input ($/1M) | Output ($/1M) | Notes |
|-------|--------------|---------------|-------|
| **Mistral Large 3** | $0.50 | $1.50 | Flagship |
| **Devstral 2** | $0.40 | $2.00 | Free tier available |
| **Mistral Medium 3.1** | $0.40 | $2.00 | Best enterprise value |
| **Pixtral Large** | $2.00 | $6.00 | Vision-specialized |
| **Codestral 2508** | $0.30 | $0.90 | Code completion |
| **Ministral 3 14B** | $0.20 | $0.20 | Edge flagship |
| **Mistral Small 3.2** | $0.06 | $0.18 | **Best value** |
| **Ministral 3 8B** | ~$0.10 | ~$0.10 | Edge balanced |
| **Ministral 3 3B** | ~$0.05 | ~$0.05 | Ultra-edge |

---

## Key Takeaways for CABAL Integration

1. **Mistral Large 3** is the flagship - 675B MoE with native vision, competitive with frontier models
2. **Devstral 2** rivals Qwen3 Coder and Claude Sonnet 4 for agentic coding
3. **Mistral Small 3.2** offers **best efficiency** - 70B-class quality at 24B cost
4. **Ministral 3 family** provides full capability stack (vision + reasoning) from 3B to 14B
5. **All models support structured output** (JSON schema mode) - critical for CABAL
6. **European sovereignty** - Mistral offers on-prem/VPC deployment for compliance
7. **Apache 2.0** on most models - full commercial use permitted
8. **Mistral Vibe CLI** included with Devstral for terminal-based agentic coding
9. **256K context** is standard across modern Mistral models
10. Codestral is for **autocomplete**, Devstral is for **agentic** coding - different use cases

---

## CABAL Recommendations by Use Case

| Use Case | Recommended Model | Rationale |
|----------|-------------------|-----------|
| **General Enterprise** | Mistral Large 3 | Flagship with native vision |
| **Agentic Coding** | Devstral 2 (123B) | SOTA SWE-Bench, multi-file |
| **Local Agentic Coding** | Devstral Small 2 (24B) | Fits on RTX 4090 |
| **Cost-Optimized Enterprise** | Mistral Medium 3.1 | 90% frontier at 8x less cost |
| **Fast Assistants** | Mistral Small 3.2 | 150 tok/s, multimodal |
| **Code Autocomplete** | Codestral 2508 | FIM-optimized |
| **Edge Reasoning** | Ministral 3 14B Reasoning | 85% AIME, 14B |
| **Ultra-Edge** | Ministral 3 3B | 8GB RAM, vision + reasoning |
| **Document Analysis** | Pixtral Large | SOTA on DocVQA, ChartQA |

---

## Mistral Unique Strengths

- **European sovereignty** - French company, GDPR-friendly, on-prem options
- **Granular MoE** in Large 3 - efficient 41B activation from 675B total
- **Complete coding stack** - Codestral (autocomplete) + Devstral (agentic) + Codestral Embed (search)
- **Ministral 3 family** - vision + reasoning at edge sizes (3B/8B/14B)
- **Structured output** on ALL modern models - critical for orchestration
- **256K context** standard - longer than most competitors
- **Apache 2.0 licensing** on open models
- **Mistral Vibe CLI** - terminal-native agentic coding tool
- **Enterprise customization** - continuous pretraining and fine-tuning via Mistral's applied AI team