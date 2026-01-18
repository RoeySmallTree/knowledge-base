# Qwen Models Analysis

---

## Models Analyzed (Curated Subset)

From your list of 30 models, I've curated down to **10 distinct models** that represent the best-in-class for each capability tier. Here's what was **removed and why**:

### Removed Models

| Model | Reason for Removal |
|-------|-------------------|
| Qwen3 VL 32B/8B/30B A3B variants | Covered by flagship Qwen3 VL 235B |
| Qwen3 Coder Plus | API wrapper of open Qwen3 Coder 480B - same underlying model |
| Qwen3 Coder 480B (exacto) | Provider-specific routing variant, not a distinct model |
| Qwen Plus 0728 (thinking/non) | Proprietary API-only, covered by open Qwen3 235B |
| Qwen3 30B/235B non-2507 versions | Superseded by July 2507 updates |
| Qwen3 Coder 30B A3B | Covered by larger Qwen3 Coder 480B |
| Qwen3 4B/8B/14B | Too small for enterprise use, covered by 32B dense |
| Qwen2.5 Coder 7B | Too small, covered by 32B version |
| Qwen2.5 VL 32B | Superseded by Qwen3 VL or Qwen2.5 VL 72B |
| Qwen2.5 72B Instruct | Superseded by Qwen3 235B family |

---

## Qwen3 Coder 480B A35B

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Tool-Seeker, Stepwise, Exploit-Focused, Long-Horizon, Self-Correcting, Fast-Twitch |
| **Total / Active Parameters** | 480B / 35B (MoE, 160 experts, 8 active) |
| **Creative Score** | 4.5/10 |
| **Logical Score** | 9.0/10 |
| **Efficiency Score** | 8.5/10 |
| **Short Description** | Most agentic open-source coding model, comparable to Claude Sonnet 4 |
| **Special Properties** | 256K native context (1M with YaRN); 7.5T training tokens (70% code); Agent RL with 20K parallel environments; SWE-Bench Verified SOTA among open models; specialized function call format for agentic platforms; Qwen Code CLI tool included |
| **Best For** | Agentic coding workflows, repository-scale engineering, complex debugging, automated PR workflows, Cursor/Cline/Roo Code integration |
| **Special Capabilities** | Code generation, tool calling, file operations, browser automation, multi-turn coding sessions, TypeScript/Python/Java/Rust/C++/Go |
| **Recommendation Score** | 9.0/10 |

**Notes**: Released July 2025. Apache 2.0 license. Pricing: ~$0.22/1M input, $0.95/1M output (varies by provider). Outperforms GPT-4 and older Claude on coding benchmarks. Does NOT support thinking mode (instruct only). 69.6% SWE-Bench Verified.

---

## Qwen3 235B A22B Thinking 2507

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Deep-Thinker, Analyst, Visionary, Stepwise, Self-Correcting, Long-Horizon |
| **Total / Active Parameters** | 235B / 22B (MoE) |
| **Creative Score** | 6.5/10 |
| **Logical Score** | 9.5/10 |
| **Efficiency Score** | 7.5/10 |
| **Short Description** | SOTA open-source reasoning model, rivals DeepSeek-R1 and o1 |
| **Special Properties** | 256K native context; July 2507 update with significantly improved reasoning; thinking budget control; SOTA among open thinking models on logical reasoning, math, science, coding; enhanced instruction following and tool usage |
| **Best For** | Complex multi-step reasoning, mathematical proofs, scientific analysis, research tasks requiring deep thought |
| **Special Capabilities** | Extended reasoning traces, thinking mode, tool calling, MCP support, 119 language support |
| **Recommendation Score** | 9.0/10 |

**Notes**: Released July 2025. Apache 2.0. Requires longer token sequences for reasoning - recommend 131K+ context. State-of-the-art on AIME, GPQA, and reasoning benchmarks. Use for tasks where thinking depth matters more than speed.

---

## Qwen3 235B A22B Instruct 2507

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Analyst, Tool-Seeker, Assertive, Context-Heavy, Formal |
| **Total / Active Parameters** | 235B / 22B (MoE) |
| **Creative Score** | 6.0/10 |
| **Logical Score** | 8.5/10 |
| **Efficiency Score** | 8.5/10 |
| **Short Description** | Flagship general-purpose model with improved instruction following |
| **Special Properties** | 256K context; improved long-tail knowledge across languages; better alignment with user preferences; enhanced subjective/open-ended task handling; no thinking tokens (fast responses) |
| **Best For** | General chat, instruction following, creative writing, multilingual tasks, enterprise deployments where speed matters |
| **Special Capabilities** | Fast inference, tool calling, structured outputs, 119 languages, MCP support |
| **Recommendation Score** | 8.5/10 |

**Notes**: Released July 2025. Apache 2.0. Pricing: ~$0.08/1M input, $0.31/1M output. Use Instruct when you need speed over maximum reasoning depth. Competitive with Gemini 2.5 Pro on many benchmarks.

---

## Qwen3 VL 235B A22B Thinking

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Deep-Thinker, Context-Heavy, Analyst, Visionary, Stepwise |
| **Total / Active Parameters** | 235B / 22B (MoE, multimodal) |
| **Creative Score** | 6.5/10 |
| **Logical Score** | 9.0/10 |
| **Efficiency Score** | 7.0/10 |
| **Short Description** | SOTA multimodal reasoning model for STEM and complex visual tasks |
| **Special Properties** | 256K context (1M extendable); Interleaved-MRoPE for spatial-temporal modeling; DeepStack for multi-level ViT fusion; Text-Timestamp Alignment for video; 32-language OCR; visual coding (image → HTML/CSS/JS); 2D/3D grounding |
| **Best For** | STEM visual reasoning, complex document analysis, visual coding, scientific image analysis, embodied AI applications |
| **Special Capabilities** | Vision, video (hours-long), visual agent, GUI operation, spatial reasoning, OCR, chart/diagram analysis, visual coding |
| **Recommendation Score** | 9.0/10 |

**Notes**: Released Sept 2025. Apache 2.0. ~471GB weights. Matches/exceeds Gemini 2.5 Pro on multimodal reasoning benchmarks like MathVision, MMMU, MathVista. Thinking version optimized for STEM.

---

## Qwen3 VL 235B A22B Instruct

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Context-Heavy, Tool-Seeker, Analyst, Fast-Twitch |
| **Total / Active Parameters** | 235B / 22B (MoE, multimodal) |
| **Creative Score** | 6.0/10 |
| **Logical Score** | 8.0/10 |
| **Efficiency Score** | 8.0/10 |
| **Short Description** | Flagship vision-language for general perception and agent tasks |
| **Special Properties** | 256K context; visual agent (PC/mobile GUI control); visual coding; advanced spatial perception; long video understanding; structured outputs; rivals Gemini 2.5 Pro in perception benchmarks |
| **Best For** | Document parsing, VQA, chart extraction, multilingual OCR, video analysis, GUI automation, general multimodal tasks |
| **Special Capabilities** | Vision, video, visual agent, tool use, GUI interaction, document parsing, object grounding |
| **Recommendation Score** | 8.5/10 |

**Notes**: Released Sept 2025. Apache 2.0. Pricing: ~$0.20/1M input, $1.20/1M output. Use Instruct for general perception tasks; use Thinking for complex reasoning.

---

## Qwen3 Next 80B A3B Thinking

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Deep-Thinker, Stepwise, Analyst, Innovative, Self-Correcting |
| **Total / Active Parameters** | 80B / 3B (revolutionary hybrid MoE) |
| **Creative Score** | 5.0/10 |
| **Logical Score** | 8.5/10 |
| **Efficiency Score** | 9.5/10 |
| **Short Description** | Next-gen architecture with 10x throughput at 10% training cost |
| **Special Properties** | **Hybrid Attention** (Gated DeltaNet + Gated Attention); Ultra-sparse MoE (11/512 experts active); 256K native context; 10x inference throughput vs Qwen3-32B for 32K+ contexts; outperforms Gemini-2.5-Flash-Thinking; 90% lower training cost |
| **Best For** | Complex reasoning requiring efficiency, math proofs, code synthesis, agentic planning, ultra-long-context tasks |
| **Special Capabilities** | Extended reasoning traces, tool calling, function calling, structured outputs, ultra-long context |
| **Recommendation Score** | 9.0/10 |

**Notes**: Released Sept 2025. Apache 2.0. Pricing: ~$0.15/1M input, $1.20/1M output. **This is the future of efficient reasoning** - revolutionary architecture. Outperforms Qwen3-32B-Thinking with only 3B active params.

---

## Qwen3 Next 80B A3B Instruct

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Fast-Twitch, Tool-Seeker, Analyst, Cost-Saver |
| **Total / Active Parameters** | 80B / 3B (hybrid MoE) |
| **Creative Score** | 5.0/10 |
| **Logical Score** | 7.5/10 |
| **Efficiency Score** | 9.5/10 |
| **Short Description** | Performance of 235B at fraction of cost with next-gen architecture |
| **Special Properties** | Performs on par with Qwen3-235B-A22B-Instruct-2507 on many benchmarks; excels at ultra-long-context tasks (256K); hybrid attention for efficient context modeling |
| **Best For** | High-volume production, cost-sensitive deployments, long-document processing, efficient instruction following |
| **Special Capabilities** | Fast inference, tool calling, structured outputs, ultra-long context |
| **Recommendation Score** | 8.5/10 |

**Notes**: Released Sept 2025. Apache 2.0. **Best cost-efficiency in the Qwen3 lineup**. Use for production workloads where you need near-flagship performance at dramatically lower cost.

---

## QwQ-32B

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Deep-Thinker, Stepwise, Self-Correcting, Analyst |
| **Total Parameters** | 32.5B (dense) |
| **Creative Score** | 5.0/10 |
| **Logical Score** | 9.0/10 |
| **Efficiency Score** | 8.5/10 |
| **Short Description** | Compact reasoning powerhouse rivaling DeepSeek-R1 at 1/20th size |
| **Special Properties** | 131K context; matches DeepSeek-R1 (671B) performance; RL-trained on outcome-based rewards; agent capabilities integrated; two-stage RL for reasoning + general capabilities; 64 layers, 40 query heads |
| **Best For** | Math reasoning, coding tasks, tool-calling agents, local deployment on consumer GPUs |
| **Special Capabilities** | Chain-of-thought reasoning, function calling, tool use, self-correction, multilingual (29 languages) |
| **Recommendation Score** | 8.5/10 |

**Notes**: Released March 2025. Apache 2.0. Pricing: ~$0.29/1M input, $0.39/1M output (Groq). **Best reasoning model that can run locally** on 24GB VRAM (quantized). 86% AIME 2024, 63.4% LiveCodeBench, 66.4% BFCL (beats o1-mini and R1 on function calling).

---

## Qwen3 30B A3B

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Fast-Twitch, Cost-Saver, Analyst, Stepwise |
| **Total / Active Parameters** | 30B / 3B (MoE) |
| **Creative Score** | 5.0/10 |
| **Logical Score** | 7.5/10 |
| **Efficiency Score** | 9.5/10 |
| **Short Description** | Sweet-spot MoE that outperforms QwQ-32B with fewer active params |
| **Special Properties** | Thinking/non-thinking mode switching; comparable to QwQ-32B with 10x fewer active parameters; thinking budget control; excellent cost-efficiency |
| **Best For** | Cost-sensitive production, high-volume API usage, general reasoning at scale |
| **Special Capabilities** | Dual-mode (thinking/non-thinking), tool calling, 119 languages |
| **Recommendation Score** | 8.0/10 |

**Notes**: Released April 2025. Apache 2.0. **Best value MoE model** - achieves QwQ-32B performance with 3B active params. Use for cost-conscious deployments needing reasonable reasoning.

---

## Qwen3 32B

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Analyst, Assertive, Stepwise, Context-Heavy |
| **Total Parameters** | 32B (dense) |
| **Creative Score** | 5.5/10 |
| **Logical Score** | 8.0/10 |
| **Efficiency Score** | 7.5/10 |
| **Short Description** | Best dense model, ideal for fine-tuning and local deployment |
| **Special Properties** | Thinking/non-thinking modes; 131K context; excels in thinking mode reasoning; easy to fine-tune (single architecture); no MoE complexity |
| **Best For** | Fine-tuning base, local deployment, situations requiring dense architecture, production stability |
| **Special Capabilities** | Dual-mode, tool calling, structured outputs, fine-tuning friendly |
| **Recommendation Score** | 7.5/10 |

**Notes**: Released April 2025. Apache 2.0. Best choice when you need a **dense model for fine-tuning** or when MoE inference isn't well-supported in your stack.

---

## Qwen2.5 VL 72B Instruct

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Context-Heavy, Analyst, Tool-Seeker |
| **Total Parameters** | 72B (dense, multimodal) |
| **Creative Score** | 5.5/10 |
| **Logical Score** | 7.5/10 |
| **Efficiency Score** | 7.0/10 |
| **Short Description** | Previous-gen vision flagship, battle-tested and stable |
| **Special Properties** | Dynamic resolution ViT; Window Attention optimization; hour-long video understanding; object localization (bbox/points); structured data extraction; matches GPT-4o on document understanding |
| **Best For** | Production vision deployments, document parsing, video analysis, GUI agent tasks |
| **Special Capabilities** | Vision, video, OCR, visual agent, document parsing, object grounding |
| **Recommendation Score** | 7.5/10 |

**Notes**: Released Jan 2025. Apache 2.0. Pricing: ~$0.59/1M tokens. Use when you need **proven stability** over bleeding-edge Qwen3 VL. DocVQA: 96.4, VideoMME: 73.3/79.1.

---

## Qwen2.5 Coder 32B Instruct

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Stepwise, Tool-Seeker, Fast-Twitch |
| **Total Parameters** | 32B (dense) |
| **Creative Score** | 4.0/10 |
| **Logical Score** | 7.5/10 |
| **Efficiency Score** | 8.0/10 |
| **Short Description** | Solid previous-gen coding model, stable and well-tested |
| **Special Properties** | 128K context; strong multi-language coding; production-proven; easy to fine-tune; outperforms GPT-4 on many coding benchmarks |
| **Best For** | Production coding assistants, fine-tuning base for coding, local code completion |
| **Special Capabilities** | Code generation, debugging, explanation, multi-language support |
| **Recommendation Score** | 7.0/10 |

**Notes**: Released late 2024. Apache 2.0. Use when you need **stable, dense coding model** for fine-tuning. Superseded by Qwen3 Coder 480B for raw capability, but easier to deploy and fine-tune.

---

## Summary Comparison Table

| Model | Type | Active Params | Creative | Logic | Efficiency | Context | Rec |
|-------|------|---------------|----------|-------|------------|---------|-----|
| **Qwen3 Coder 480B A35B** | MoE | 35B | 4.5 | **9.0** | 8.5 | 256K (1M) | **9.0** |
| **Qwen3 235B A22B Thinking** | MoE | 22B | 6.5 | **9.5** | 7.5 | 256K | **9.0** |
| **Qwen3 235B A22B Instruct** | MoE | 22B | 6.0 | 8.5 | 8.5 | 256K | 8.5 |
| **Qwen3 VL 235B Thinking** | MoE/MM | 22B | 6.5 | **9.0** | 7.0 | 256K (1M) | **9.0** |
| **Qwen3 VL 235B Instruct** | MoE/MM | 22B | 6.0 | 8.0 | 8.0 | 256K | 8.5 |
| **Qwen3 Next 80B A3B Thinking** | Hybrid | **3B** | 5.0 | 8.5 | **9.5** | 256K | **9.0** |
| **Qwen3 Next 80B A3B Instruct** | Hybrid | **3B** | 5.0 | 7.5 | **9.5** | 256K | 8.5 |
| **QwQ-32B** | Dense | 32B | 5.0 | **9.0** | 8.5 | 131K | 8.5 |
| **Qwen3 30B A3B** | MoE | 3B | 5.0 | 7.5 | **9.5** | 128K | 8.0 |
| **Qwen3 32B** | Dense | 32B | 5.5 | 8.0 | 7.5 | 131K | 7.5 |
| **Qwen2.5 VL 72B** | Dense/MM | 72B | 5.5 | 7.5 | 7.0 | 131K | 7.5 |
| **Qwen2.5 Coder 32B** | Dense | 32B | 4.0 | 7.5 | 8.0 | 128K | 7.0 |

---

## Pricing Overview

| Model | Input ($/1M) | Output ($/1M) | Notes |
|-------|--------------|---------------|-------|
| **Qwen3 Coder 480B** | $0.22-0.45 | $0.95-1.80 | Varies by provider |
| **Qwen3 235B A22B 2507** | $0.08 | $0.31 | Alibaba pricing |
| **Qwen3 VL 235B** | $0.20 | $1.20 | |
| **Qwen3 Next 80B** | $0.15 | $1.20 | Excellent value |
| **QwQ-32B** | $0.29 | $0.39 | Groq pricing |
| **Qwen3 30B A3B** | ~$0.10 | ~$0.50 | Budget option |
| **Qwen3 32B** | $0.15 | $0.75 | |
| **Qwen2.5 VL 72B** | $0.59 | $0.59 | SiliconFlow |
| **Qwen2.5 Coder 32B** | ~$0.20 | ~$0.80 | |

---

## Key Takeaways for CABAL Integration

1. **Qwen3 Coder 480B** is the crown jewel for coding - SOTA agentic coding comparable to Claude Sonnet 4
2. **Qwen3 Next 80B** is revolutionary - 235B performance with 3B active params, 10x throughput
3. **QwQ-32B** is the reasoning champion for local deployment - matches DeepSeek-R1 on consumer GPUs
4. **Qwen3 VL 235B Thinking** leads multimodal reasoning - SOTA on STEM visual tasks
5. All models are **Apache 2.0** - full commercial use, fine-tuning, and self-hosting permitted
6. **Thinking vs Instruct** versions available for most models - use Thinking for complex reasoning, Instruct for speed
7. Qwen3 introduces **thinking budget control** - fine-grained inference cost management
8. **119 language support** across the Qwen3 family
9. Strong **MCP support** for tool orchestration
10. **Qwen Code CLI** included with Qwen3 Coder for agentic coding workflows

---

## CABAL Recommendations by Use Case

| Use Case | Recommended Model | Rationale |
|----------|-------------------|-----------|
| **Agentic Coding** | Qwen3 Coder 480B | SOTA open-source, Agent RL trained |
| **Complex Reasoning** | Qwen3 235B Thinking 2507 | Best open reasoning model |
| **Cost-Efficient Reasoning** | Qwen3 Next 80B Thinking | 10x efficiency with comparable quality |
| **Local Reasoning** | QwQ-32B | Fits on consumer GPU, rivals R1 |
| **Vision + Reasoning** | Qwen3 VL 235B Thinking | SOTA multimodal STEM |
| **High-Volume Chat** | Qwen3 30B A3B | Best cost/performance ratio |
| **Fine-Tuning Base** | Qwen3 32B | Dense architecture, easiest to tune |
| **Production Vision** | Qwen2.5 VL 72B | Battle-tested, stable |

---

## Qwen Unique Strengths

- **Open weights** with permissive Apache 2.0 license
- **Thinking/Non-thinking mode switching** in single model
- **Thinking budget control** for cost optimization
- **119 languages** - best multilingual coverage among open models
- **MoE efficiency** - flagship performance at fraction of compute
- **Qwen3 Next architecture** - revolutionary hybrid attention for ultra-long context
- **Agent RL training** - specifically optimized for tool use and multi-turn interaction
- **Qwen Code CLI** - included tooling for agentic workflows