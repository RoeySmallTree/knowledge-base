# OpenAI Models Analysis

---

## Models Removed & Reasons

From your 47 models, I've curated to **18 distinct models**:

| Model Removed | Reason |
|---------------|--------|
| **GPT-5.2 Chat** | Same as GPT-5.2, just ChatGPT interface alias |
| **GPT-5.1 Chat** | Same as GPT-5.1, just ChatGPT interface alias |
| **GPT-5.1-Codex** | Superseded by GPT-5.1-Codex-Max |
| **GPT-5.1-Codex-Mini** | Superseded by Codex Mini (latest) |
| **GPT-5 Image Mini** | Image generation model, not relevant for CABAL |
| **GPT-5 Image** | Image generation model, not relevant |
| **GPT-5 Codex** | Superseded by GPT-5.2-Codex |
| **GPT-5 Pro** | Extended reasoning variant of GPT-5, covered by GPT-5 |
| **Codex Mini** | Superseded by GPT-5.2-Codex |
| **GPT-4o Audio** | Audio-specific model, limited structured output |
| **o3 Mini High** | Superseded by o4-mini High |
| **o3 Mini** | Superseded by o4-mini |
| **o1** | Superseded by o3 |
| **GPT-4o (all dated versions)** | Superseded by GPT-4.1 |
| **GPT-4o-mini (all versions)** | Superseded by GPT-4.1 Mini |
| **GPT-4o (extended)** | Superseded by GPT-4.1 |
| **GPT-4 Turbo (all versions)** | Superseded by GPT-4.1 |
| **GPT-4 (all versions)** | Superseded by GPT-4.1 |
| **GPT-3.5 Turbo (all versions)** | Legacy, superseded by GPT-4.1 Nano |
| **gpt-oss-120b (exacto)** | Same model, different quantization |

**All kept models support structured output (JSON schema mode).**

---

## GPT-5.2

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Analyst, Context-Heavy, Tool-Seeker, Enterprise-Grade, Knowledge-Worker |
| **Total Parameters** | Not disclosed (estimated 1.5-2T) |
| **Creative Score** | 7.0/10 |
| **Logical Score** | 9.5/10 |
| **Efficiency Score** | 7.0/10 |
| **Short Description** | OpenAI's flagship model - SOTA knowledge work and reasoning |
| **Special Properties** | 400K context; 128K output; built-in thinking (reasoning router); 100% AIME 2025; 40.3% FrontierMath; 93.2% GPQA Diamond (Pro); response compaction for infinite sessions; spreadsheet/presentation generation |
| **Best For** | Enterprise knowledge work, complex analysis, agentic workflows, professional document generation |
| **Special Capabilities** | Vision, tool calling, structured outputs, spreadsheets, presentations, extended reasoning (xhigh), compaction |
| **Recommendation Score** | 9.5/10 |

**Pricing**: $1.75/1M input ($0.175 cached), $14.00/1M output

**Variants**:
- **GPT-5.2 (Thinking)**: Default with adaptive reasoning - decides when to think
- **GPT-5.2 Pro**: Maximum reasoning effort, 93.2% GPQA Diamond

**Notes**: Released Dec 11, 2025. Beats human experts on 70.9% of GDPval tasks at 11x speed and <1% cost. First model >90% on ARC-AGI-1. Knowledge cutoff Aug 31, 2025.

---

## GPT-5.2-Codex

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Tool-Seeker, Agentic, Self-Correcting, Long-Horizon, Security-Aware |
| **Total Parameters** | Not disclosed |
| **Creative Score** | 4.5/10 |
| **Logical Score** | 9.5/10 |
| **Efficiency Score** | 7.5/10 |
| **Short Description** | SOTA agentic coding model with cybersecurity capabilities |
| **Special Properties** | SOTA SWE-Bench Pro (55.6%); SOTA Terminal-Bench 2.0; native compaction; Windows environment support; cybersecurity-capable; long-horizon (24hr+ sessions) |
| **Best For** | Agentic coding, security research, large refactors, code migrations, multi-hour dev sessions |
| **Special Capabilities** | Code generation, tool calling, compaction, Windows native, cybersecurity, vision (screenshots/mockups) |
| **Recommendation Score** | 9.0/10 |

**Pricing**: Available in Codex (ChatGPT subscription)

**Notes**: Released Dec 11, 2025. Built on GPT-5.2 + optimized for Codex CLI/IDE. Found React security vulnerabilities in production. Strongest cybersecurity model OpenAI has deployed.

---

## GPT-5.1-Codex-Max

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Tool-Seeker, Agentic, Long-Horizon, Compaction-Native |
| **Total Parameters** | Not disclosed |
| **Creative Score** | 4.5/10 |
| **Logical Score** | 9.0/10 |
| **Efficiency Score** | 8.0/10 |
| **Short Description** | Previous frontier agentic coding - first with native compaction |
| **Special Properties** | 400K context; 128K output; 77.9% SWE-Bench Verified; 58.1% Terminal-Bench 2.0; first Windows-native model; compaction for million-token sessions; 30% fewer thinking tokens than GPT-5.1-Codex |
| **Best For** | Long-running coding tasks, project-scale refactors, deep debugging |
| **Special Capabilities** | Code generation, compaction, Windows support, tool calling, structured outputs |
| **Recommendation Score** | 8.5/10 |

**Pricing**: $1.25/1M input, $10.00/1M output

**Notes**: Released Nov 18, 2025. First model trained to operate across multiple context windows. Completed 24-hour internal tasks. Superseded by GPT-5.2-Codex but still excellent.

---

## GPT-5.1

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Warm, Conversational, Adaptive, Precise, Instruction-Following |
| **Total Parameters** | Not disclosed |
| **Creative Score** | 7.5/10 |
| **Logical Score** | 8.5/10 |
| **Efficiency Score** | 8.0/10 |
| **Short Description** | Warmer, more conversational GPT-5 with adaptive reasoning |
| **Special Properties** | 400K context; adaptive reasoning (decides when to think); warmer default tone; better instruction following; customizable style/personality (8 options); improved AIME 2025 and Codeforces |
| **Best For** | Conversational AI, customer-facing applications, personalized assistants |
| **Special Capabilities** | Vision, tool calling, structured outputs, style customization, adaptive reasoning |
| **Recommendation Score** | 8.5/10 |

**Pricing**: $1.25/1M input ($0.125 cached), $10.00/1M output

**Variants**:
- **GPT-5.1 Instant**: Fast responses, warmer by default
- **GPT-5.1 Thinking**: Deeper reasoning, more persistent on complex tasks

**Notes**: Released Oct 2025. Focus on user experience and tone. Custom instructions now apply across all chats immediately.

---

## GPT-5

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Analyst, Unified, Tool-Seeker, Health-Aware |
| **Total Parameters** | Not disclosed |
| **Creative Score** | 7.0/10 |
| **Logical Score** | 9.0/10 |
| **Efficiency Score** | 7.5/10 |
| **Short Description** | Unified reasoning system - smart router decides when to think |
| **Special Properties** | 400K context; 94.6% AIME 2025 (no tools); 74.9% SWE-Bench Verified; 88% Aider Polyglot; 84.2% MMMU; 88.4% GPQA (Pro); 45% fewer hallucinations than GPT-4o; 80% fewer than o3 when thinking |
| **Best For** | General-purpose flagship, coding, health queries, multimodal tasks |
| **Special Capabilities** | Vision, tool calling, structured outputs, reasoning (auto-routed), health expertise |
| **Recommendation Score** | 9.0/10 |

**Pricing**: $1.25/1M input ($0.125 cached), $10.00/1M output

**Variants**:
- **GPT-5 Pro**: Extended reasoning for hardest problems

**Notes**: Released Aug 7, 2025. First unified system with smart routing between instant and thinking modes. Best health model (HealthBench leader). 50-80% fewer output tokens than o3 for same quality.

---

## GPT-5 Mini

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Fast-Twitch, Precise, Cost-Saver, Efficient |
| **Total Parameters** | Not disclosed |
| **Creative Score** | 6.0/10 |
| **Logical Score** | 8.0/10 |
| **Efficiency Score** | 9.0/10 |
| **Short Description** | Cost-efficient GPT-5 for well-defined tasks |
| **Special Properties** | High reasoning at reduced cost; great for precise prompts; faster than GPT-5 |
| **Best For** | High-volume tasks, well-defined workflows, cost-sensitive applications |
| **Special Capabilities** | Vision, tool calling, structured outputs |
| **Recommendation Score** | 8.0/10 |

**Pricing**: $0.25/1M input, $1.00/1M output (estimated)

**Notes**: Released Aug 7, 2025. Successor to o4-mini for production workloads.

---

## GPT-5 Nano

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Ultra-Fast, Cost-Saver, Classification-Focused |
| **Total Parameters** | Not disclosed |
| **Creative Score** | 5.0/10 |
| **Logical Score** | 6.5/10 |
| **Efficiency Score** | 10/10 |
| **Short Description** | Fastest, cheapest GPT-5 variant for simple tasks |
| **Special Properties** | Very fast inference; optimized for summarization and classification |
| **Best For** | Classification, summarization, routing, high-volume simple tasks |
| **Special Capabilities** | Tool calling, structured outputs |
| **Recommendation Score** | 7.0/10 |

**Pricing**: ~$0.05/1M input, $0.20/1M output (estimated)

**Notes**: Released Aug 7, 2025. Fastest model in GPT-5 family.

---

## o3

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Deep-Thinker, Precise, Stepwise, Tool-Master, Visual-Reasoner |
| **Total Parameters** | Not disclosed |
| **Creative Score** | 5.5/10 |
| **Logical Score** | 9.5/10 |
| **Efficiency Score** | 6.5/10 |
| **Short Description** | OpenAI's most capable reasoning model with full tool access |
| **Special Properties** | 200K context; 100K output; 88.9% AIME 2025 (no tools), 98.4% (with tools); 87.7% GPQA Diamond; 2706 Codeforces ELO; 20% fewer major errors than o1; "thinks with images" |
| **Best For** | Complex multi-step reasoning, scientific research, hypothesis generation, visual analysis |
| **Special Capabilities** | Vision, tool orchestration, structured outputs, image generation (via tool), web search, Python execution |
| **Recommendation Score** | 9.0/10 |

**Pricing**: $2.00/1M input ($0.50 cached), $8.00/1M output

**Notes**: Released Apr 16, 2025. 80% price cut in Jun 2025. First reasoning model with full agentic tool access. Integrates images into chain-of-thought reasoning.

---

## o3 Pro

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Deep-Thinker, Ultra-Reliable, Mission-Critical, Slower |
| **Total Parameters** | Not disclosed |
| **Creative Score** | 5.5/10 |
| **Logical Score** | 9.8/10 |
| **Efficiency Score** | 5.0/10 |
| **Short Description** | Maximum compute o3 for highest reliability |
| **Special Properties** | 200K context; 100K output; 90% AIME (4/4 reliability); 76% GPQA Diamond (4/4); 2301 Codeforces ELO; preferred over o3 in 64% of expert evaluations |
| **Best For** | Mission-critical tasks, high-stakes decisions, scientific proofs, maximum accuracy requirements |
| **Special Capabilities** | Vision, tool orchestration, structured outputs, web search, Python, memory |
| **Recommendation Score** | 8.5/10 |

**Pricing**: $20.00/1M input, $80.00/1M output (87% cheaper than o1-pro)

**Notes**: Released Jun 10, 2025. Same architecture as o3, tuned for reliability over speed. Replaces o1-pro. Slower but more consistent.

---

## o4-mini

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Fast-Twitch, Precise, Cost-Saver, Math-Strong, Visual |
| **Total Parameters** | Not disclosed |
| **Creative Score** | 5.0/10 |
| **Logical Score** | 8.5/10 |
| **Efficiency Score** | 9.5/10 |
| **Short Description** | Fast, cost-efficient reasoning - SOTA on AIME |
| **Special Properties** | 200K context; 100K output; 92.7% AIME 2025 (no tools), 99.5% (with tools); 2719 Codeforces ELO; 81.4% GPQA Diamond; 68.1% SWE-Bench Verified; native multimodal |
| **Best For** | High-volume reasoning, math tasks, coding at scale, cost-sensitive reasoning |
| **Special Capabilities** | Vision, tool calling, structured outputs, Python, browsing |
| **Recommendation Score** | 9.0/10 |

**Pricing**: $1.10/1M input, $4.40/1M output (~10x cheaper than o3)

**Notes**: Released Apr 16, 2025. First mini reasoning model with full multimodality. Outperforms o3 on AIME benchmarks. Best cost/performance for reasoning.

---

## o4-mini High

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Fast-Twitch, Precise, Enhanced-Reasoning |
| **Total Parameters** | Not disclosed |
| **Creative Score** | 5.0/10 |
| **Logical Score** | 9.0/10 |
| **Efficiency Score** | 8.5/10 |
| **Short Description** | Higher reasoning effort o4-mini for complex tasks |
| **Special Properties** | Same as o4-mini but with high reasoning effort; better accuracy on complex tasks |
| **Best For** | Complex reasoning at scale, when accuracy matters more than speed |
| **Special Capabilities** | Vision, tool calling, structured outputs |
| **Recommendation Score** | 8.5/10 |

**Pricing**: Same as o4-mini (higher token usage)

**Notes**: Available to paid ChatGPT users. Slower but more accurate than standard o4-mini.

---

## o3 Deep Research

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Researcher, Synthesizer, Multi-Step, Web-Native |
| **Total Parameters** | Not disclosed |
| **Creative Score** | 6.0/10 |
| **Logical Score** | 9.0/10 |
| **Efficiency Score** | 5.0/10 |
| **Short Description** | Most powerful deep research model - multi-step web research agent |
| **Special Properties** | Autonomous web research; synthesizes across 100+ sources; produces comprehensive reports in 5-30 minutes; MCP connector support for custom data |
| **Best For** | Complex research tasks, market analysis, literature reviews, competitive intelligence |
| **Special Capabilities** | Web search, synthesis, report generation, MCP integration, structured outputs |
| **Recommendation Score** | 8.5/10 |

**Pricing**: Special pricing (per-research task)

**Notes**: Launched Feb 2025 as ChatGPT feature, now in API. Pro users: 250 queries/month. Plus: 25/month. Accomplishes in minutes what takes humans hours.

---

## o4-mini Deep Research

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Researcher, Fast, Cost-Efficient |
| **Total Parameters** | Not disclosed |
| **Creative Score** | 5.5/10 |
| **Logical Score** | 8.0/10 |
| **Efficiency Score** | 8.5/10 |
| **Short Description** | Faster, more affordable deep research |
| **Special Properties** | Cost-efficient research; MCP connector support; good quality at lower cost |
| **Best For** | High-volume research, cost-sensitive research tasks |
| **Special Capabilities** | Web search, synthesis, MCP integration, structured outputs |
| **Recommendation Score** | 7.5/10 |

**Pricing**: Lower than o3 Deep Research

**Notes**: Lightweight version for when full o3 Deep Research quota is exhausted.

---

## GPT-4.1

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Tool-Master, Long-Context, Instruction-Follower |
| **Total Parameters** | Not disclosed |
| **Creative Score** | 6.5/10 |
| **Logical Score** | 8.0/10 |
| **Efficiency Score** | 8.5/10 |
| **Short Description** | 1M context, instruction-following champion |
| **Special Properties** | 1M context window; 100% needle-in-haystack accuracy; 38.3% MultiChallenge; 87.4% IFEval; 72.0% Video-MME; 21.4% better than GPT-4o on SWE-Bench |
| **Best For** | Long document processing, code repositories, instruction-heavy tasks, tool calling |
| **Special Capabilities** | Vision, tool calling, structured outputs, 1M context |
| **Recommendation Score** | 8.5/10 |

**Pricing**: $2.00/1M input, $8.00/1M output

**Notes**: Released Apr 14, 2025. API-only initially, now in ChatGPT. Knowledge cutoff Jun 2024. Smartest non-reasoning model. 8x context of GPT-4o.

---

## GPT-4.1 Mini

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Fast-Twitch, Precise, Cost-Saver, Long-Context |
| **Total Parameters** | Not disclosed |
| **Creative Score** | 5.5/10 |
| **Logical Score** | 7.5/10 |
| **Efficiency Score** | 9.5/10 |
| **Short Description** | Beats GPT-4o at 83% lower cost |
| **Special Properties** | 1M context window; matches/exceeds GPT-4o intelligence; 83% cost reduction; half the latency |
| **Best For** | High-volume production, cost-sensitive pipelines, bulk processing |
| **Special Capabilities** | Vision, tool calling, structured outputs, 1M context |
| **Recommendation Score** | 8.5/10 |

**Pricing**: $0.40/1M input, $1.60/1M output

**Notes**: Released Apr 14, 2025. Significant leap in small model performance. Replaced GPT-4o-mini.

---

## GPT-4.1 Nano

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Ultra-Fast, Classification-Focused, Cost-Saver |
| **Total Parameters** | Not disclosed |
| **Creative Score** | 4.5/10 |
| **Logical Score** | 6.5/10 |
| **Efficiency Score** | 10/10 |
| **Short Description** | Fastest, cheapest model - sub-second responses |
| **Special Properties** | 1M context window; 32K output; optimized for classification and autocompletion; sub-second latency |
| **Best For** | Classification, autocompletion, routing, real-time applications |
| **Special Capabilities** | Tool calling, structured outputs, 1M context |
| **Recommendation Score** | 7.5/10 |

**Pricing**: $0.10/1M input, $0.40/1M output

**Notes**: Released Apr 14, 2025. First "nano" model from OpenAI. Knowledge cutoff Jun 2024.

---

## gpt-oss-120b

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Open-Weight, Reasoning, Agentic, Tool-Native |
| **Total / Active Parameters** | 117B / 5.1B (MoE) |
| **Creative Score** | 5.0/10 |
| **Logical Score** | 8.5/10 |
| **Efficiency Score** | 9.0/10 |
| **Short Description** | OpenAI's flagship open-weight model - Apache 2.0 |
| **Special Properties** | 128K context; MoE with 128 experts (Top-4 routing); fits on single H100 (80GB); matches o4-mini on many benchmarks; outperforms o3-mini; full chain-of-thought visible; configurable reasoning effort |
| **Best For** | Self-hosted production, fine-tuning, on-premise deployments, privacy-sensitive applications |
| **Special Capabilities** | Function calling, web browsing, Python execution, structured outputs, full CoT visibility |
| **Recommendation Score** | 9.0/10 |

**Pricing**: Free (Apache 2.0) - hosting costs only

**Notes**: Released Aug 6, 2025. OpenAI's first truly open-source model. Trained with techniques from o3 and frontier systems. MXFP4 quantization for efficiency.

---

## gpt-oss-20b

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Open-Weight, Edge-Ready, Cost-Saver |
| **Total / Active Parameters** | 21B / 3.6B (MoE) |
| **Creative Score** | 4.5/10 |
| **Logical Score** | 7.5/10 |
| **Efficiency Score** | 9.5/10 |
| **Short Description** | Lightweight open-weight for edge and local |
| **Special Properties** | 128K context; runs on 16GB memory; matches o3-mini performance; full CoT visible; configurable reasoning |
| **Best For** | Local deployment, edge devices, rapid iteration, low-cost self-hosting |
| **Special Capabilities** | Function calling, structured outputs, full CoT visibility |
| **Recommendation Score** | 8.0/10 |

**Pricing**: Free (Apache 2.0) - hosting costs only

**Notes**: Released Aug 6, 2025. Runs on consumer hardware via Ollama, LM Studio. Better than o3-mini on math and health despite smaller size.

---

## Summary Comparison Table

| Model | Type | Creative | Logic | Efficiency | Context | Structured | Rec |
|-------|------|----------|-------|------------|---------|------------|-----|
| **GPT-5.2** | Flagship | 7.0 | **9.5** | 7.0 | 400K | ✅ | **9.5** |
| **GPT-5.2-Codex** | Agentic Coding | 4.5 | **9.5** | 7.5 | 400K | ✅ | 9.0 |
| **GPT-5.1-Codex-Max** | Agentic Coding | 4.5 | 9.0 | 8.0 | 400K | ✅ | 8.5 |
| **GPT-5.1** | Conversational | 7.5 | 8.5 | 8.0 | 400K | ✅ | 8.5 |
| **GPT-5** | Unified | 7.0 | 9.0 | 7.5 | 400K | ✅ | 9.0 |
| **GPT-5 Mini** | Cost-Efficient | 6.0 | 8.0 | **9.0** | 400K | ✅ | 8.0 |
| **GPT-5 Nano** | Ultra-Fast | 5.0 | 6.5 | **10** | 400K | ✅ | 7.0 |
| **o3** | Reasoning | 5.5 | **9.5** | 6.5 | 200K | ✅ | 9.0 |
| **o3 Pro** | Max Reasoning | 5.5 | **9.8** | 5.0 | 200K | ✅ | 8.5 |
| **o4-mini** | Fast Reasoning | 5.0 | 8.5 | **9.5** | 200K | ✅ | 9.0 |
| **o4-mini High** | Enhanced Reasoning | 5.0 | 9.0 | 8.5 | 200K | ✅ | 8.5 |
| **o3 Deep Research** | Research Agent | 6.0 | 9.0 | 5.0 | Special | ✅ | 8.5 |
| **o4-mini Deep Research** | Fast Research | 5.5 | 8.0 | 8.5 | Special | ✅ | 7.5 |
| **GPT-4.1** | Long-Context | 6.5 | 8.0 | 8.5 | **1M** | ✅ | 8.5 |
| **GPT-4.1 Mini** | Cost-Efficient | 5.5 | 7.5 | **9.5** | **1M** | ✅ | 8.5 |
| **GPT-4.1 Nano** | Ultra-Fast | 4.5 | 6.5 | **10** | **1M** | ✅ | 7.5 |
| **gpt-oss-120b** | Open-Weight | 5.0 | 8.5 | **9.0** | 128K | ✅ | 9.0 |
| **gpt-oss-20b** | Open-Weight Edge | 4.5 | 7.5 | **9.5** | 128K | ✅ | 8.0 |

---

## Pricing Overview

| Model | Input ($/1M) | Output ($/1M) | Notes |
|-------|--------------|---------------|-------|
| **GPT-5.2** | $1.75 | $14.00 | Flagship, cached $0.175 |
| **GPT-5.1** | $1.25 | $10.00 | Cached $0.125 |
| **GPT-5** | $1.25 | $10.00 | Cached $0.125 |
| **GPT-5 Mini** | $0.25 | $1.00 | Cost-efficient |
| **o3** | $2.00 | $8.00 | 80% price cut Jun 2025 |
| **o3 Pro** | $20.00 | $80.00 | 87% cheaper than o1-pro |
| **o4-mini** | $1.10 | $4.40 | 10x cheaper than o3 |
| **GPT-4.1** | $2.00 | $8.00 | 1M context |
| **GPT-4.1 Mini** | $0.40 | $1.60 | 83% cheaper than GPT-4o |
| **GPT-4.1 Nano** | $0.10 | $0.40 | Cheapest API model |
| **gpt-oss-120b** | Free | Free | Self-hosted (Apache 2.0) |
| **gpt-oss-20b** | Free | Free | Self-hosted (Apache 2.0) |

---

## Key Takeaways for CABAL Integration

1. **GPT-5.2** is the absolute flagship - 100% AIME, 93.2% GPQA, best knowledge worker
2. **o4-mini** offers best cost/performance for reasoning tasks (~10x cheaper than o3)
3. **GPT-4.1 family** has 1M context - 8x larger than previous models
4. **gpt-oss-120b/20b** are Apache 2.0 - fully open, self-hostable, fine-tunable
5. **All models support structured output** (JSON schema mode) - critical for CABAL
6. **Unified GPT-5 system** auto-routes between instant and thinking modes
7. **Compaction** in Codex models enables infinite sessions
8. **Deep Research** models are research agents, not chat models - special pricing
9. **o-series** excels at math/science/coding, GPT-series at general tasks
10. **Price cuts** have made frontier models accessible (o3 80% cheaper, o3-pro 87% cheaper)

---

## CABAL Recommendations by Use Case

| Use Case | Recommended Model | Rationale |
|----------|-------------------|-----------|
| **Enterprise Flagship** | GPT-5.2 | Best overall, knowledge work SOTA |
| **Agentic Coding** | GPT-5.2-Codex | SOTA SWE-Bench Pro, cybersecurity |
| **Complex Reasoning** | o3 | Best reasoning with full tools |
| **Mission-Critical** | o3 Pro | Maximum reliability, 4/4 accuracy |
| **High-Volume Reasoning** | o4-mini | 10x cheaper than o3, AIME SOTA |
| **Conversational AI** | GPT-5.1 | Warmer tone, adaptive reasoning |
| **Long Documents** | GPT-4.1 | 1M context, 100% needle retrieval |
| **Cost-Sensitive Production** | GPT-4.1 Mini | Beats GPT-4o at 83% less cost |
| **Classification/Routing** | GPT-4.1 Nano | Fastest, sub-second responses |
| **Self-Hosted/On-Prem** | gpt-oss-120b | Apache 2.0, matches o4-mini |
| **Edge/Local** | gpt-oss-20b | 16GB RAM, matches o3-mini |
| **Research Agent** | o3 Deep Research | Multi-step web research |

---

## OpenAI Unique Strengths

- **Unified Intelligence**: GPT-5 auto-routes between fast and thinking modes
- **Compaction**: Codex models work across multiple context windows for infinite sessions
- **1M Context**: GPT-4.1 family with 8x larger context than competitors
- **Open-Source**: gpt-oss models are Apache 2.0 with full CoT visibility
- **Deep Research**: Autonomous research agents that synthesize 100+ sources
- **Structured Output**: All models support JSON schema mode
- **Tool Integration**: o3/o4-mini can orchestrate web search, Python, vision, image gen
- **Price Accessibility**: 80-87% price cuts on frontier reasoning models
- **Windows Support**: Codex models native to Windows environments
- **Cybersecurity**: GPT-5.2-Codex found React vulnerabilities in production

---

## Model Family Summary

**GPT-5.x Series** (Aug-Dec 2025):
- GPT-5.2 → Flagship knowledge worker (Dec 2025)
- GPT-5.1 → Warmer conversational (Oct 2025)
- GPT-5 → Unified reasoning router (Aug 2025)
- GPT-5 Mini/Nano → Cost-efficient variants

**o-Series** (Jan-Jun 2025):
- o3 Pro → Maximum reliability (Jun 2025)
- o3 → Best reasoning with tools (Apr 2025)
- o4-mini → Cost-efficient reasoning SOTA (Apr 2025)
- o3-mini → Superseded by o4-mini

**GPT-4.1 Series** (Apr 2025):
- GPT-4.1 → 1M context flagship
- GPT-4.1 Mini → 83% cheaper than GPT-4o
- GPT-4.1 Nano → Fastest, cheapest

**Open-Source** (Aug 2025):
- gpt-oss-120b → Production MoE (Apache 2.0)
- gpt-oss-20b → Edge MoE (Apache 2.0)