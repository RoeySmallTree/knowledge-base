# Cohere, Deep Cogito & MoonshotAI Models Analysis

## Executive Summary

This analysis covers 12 models from three providers spanning enterprise RAG/tool-use specialists (Cohere), self-improving reasoning models (Deep Cogito), and trillion-parameter agentic models (MoonshotAI). Key findings:

- **Cohere Command A** delivers GPT-4o-tier performance on just 2 GPUs, making it the most hardware-efficient enterprise model
- **Cogito v2.1 671B** claims "best US open-weight model" status, using 60% shorter reasoning chains than DeepSeek R1
- **Kimi K2 Thinking** beats GPT-5 and Claude Sonnet 4.5 on agentic benchmarks, executing 200-300 sequential tool calls

---

## COHERE MODELS

### Command A
**Release:** March 2025 | **Developer:** Cohere

#### Architecture & Specifications
| Specification | Value |
|--------------|-------|
| Parameters | 111B dense |
| Context Window | 256K tokens |
| Max Output | 8K tokens |
| Knowledge Cutoff | June 1, 2024 |
| Hardware Required | 2x A100/H100 GPUs |
| Throughput | 156 tokens/sec (1.75x GPT-4o) |
| Attention | Hybrid (sliding + global) |
| Languages | 23 languages |

#### Training & Methodology
- Multi-stage training: Pre-training → SFT on high-quality data → RL over preference pairs
- Model merging across experts trained for specific capabilities
- Synthetic data generation with execution-based validation
- Code training with database context, diff patches, and unit testing requirements

#### Key Capabilities
- **Tool Use**: Excels at tool selection in real-world, diverse environments; avoids unnecessary tool calls
- **RAG**: Exceptional at grounded generation, attending over long inputs, numerical extraction
- **Agents**: Powers REACT agents for multi-step tool use and complex question decomposition
- **Coding**: Outperforms similar-size models on SQL generation and code translation

#### Benchmarks
| Benchmark | Score |
|-----------|-------|
| Email Classification | 99.0% |
| Coding | 88.0% |
| Hallucinations (acknowledgment) | 98.0% |
| Taubench | Competitive with GPT-4o |
| BFCL-v3 | Leading performance |

#### Pricing
| Provider | Input/M | Output/M |
|----------|---------|----------|
| Cohere API | $2.50 | $10.00 |
| OpenRouter | ~$2.50 | ~$10.00 |

#### Personality Traits
`Tool-Seeker` `Analyst` `Precise` `Stepwise` `Long-Horizon`

#### Best For
Enterprise RAG applications, agentic workflows, tool orchestration, multilingual enterprise tasks, on-premises deployment

#### Model ID
`command-a-03-2025`

---

### Command R7B (12-2024)
**Release:** December 14, 2024 | **Developer:** Cohere

#### Architecture & Specifications
| Specification | Value |
|--------------|-------|
| Parameters | 7B dense |
| Context Window | 128K tokens |
| Architecture | Optimized transformer |
| Languages | 23 languages |

#### Key Capabilities
- **Final model in R series** - designed for efficiency and scalability
- RAG with customizable citations
- Multi-step tool use for REACT agents
- Strong performance on GLUE and SuperGLUE benchmarks
- Edge device and on-premises deployment ready

#### Benchmarks
- Competitive with larger models on enterprise-relevant tasks
- Strong SQL and code translation performance
- Optimized for document classification and sentiment analysis

#### Pricing
| Provider | Input/M | Output/M |
|----------|---------|----------|
| Cohere API | $0.037 | $0.15 |
| OpenRouter | ~$0.04 | ~$0.15 |

#### Personality Traits
`Fast-Twitch` `Tool-Seeker` `Precise` `Analyst` `Concise`

#### Best For
Edge deployment, cost-sensitive applications, prototyping, resource-constrained environments

#### Model ID
`command-r7b-12-2024`

---

### Command R (08-2024)
**Release:** August 2024 | **Developer:** Cohere

#### Architecture & Specifications
| Specification | Value |
|--------------|-------|
| Parameters | 32B dense |
| Context Window | 128K tokens |
| Languages | 23 languages (10 evaluated) |

#### August 2024 Update Improvements
- 50% higher throughput vs previous version
- 20% lower latencies
- Hardware footprint cut by half
- **Rivals previous Command R+ on math, code, reasoning**
- Improved tool use decision-making
- Better instruction following in preamble
- Enhanced multilingual RAG searches
- Improved structured data analysis/creation
- Safety Modes (beta)

#### Pricing
| Provider | Input/M | Output/M |
|----------|---------|----------|
| Cohere API | $0.15 | $0.60 |

#### Personality Traits
`Analyst` `Tool-Seeker` `Stepwise` `Multilingual` `Precise`

#### Best For
Multilingual RAG, tool use, complex reasoning tasks, balanced cost/performance

#### Model ID
`command-r-08-2024`

---

### Command R+ (08-2024)
**Release:** August 2024 | **Developer:** Cohere

#### Architecture & Specifications
| Specification | Value |
|--------------|-------|
| Parameters | ~104B dense |
| Context Window | 128K tokens |
| Languages | 23 languages |

#### August 2024 Update Improvements
- 50% higher throughput vs previous version
- 25% lower latencies
- Same hardware footprint as previous
- Best-in-class for complex enterprise tasks
- Enhanced citation quality with optional RAG citations

#### Pricing
| Provider | Input/M | Output/M |
|----------|---------|----------|
| Cohere API | $2.50 | $10.00 |
| OpenRouter | ~$2.375 | ~$9.50 |

#### Personality Traits
`Deep-Thinker` `Analyst` `Tool-Seeker` `Verbose` `Precise`

#### Best For
Complex enterprise tasks, high-stakes RAG applications, demanding reasoning workloads

#### Model ID
`command-r-plus-08-2024`

---

## DEEP COGITO MODELS

### Cogito v2.1 671B
**Release:** November 19, 2025 | **Developer:** Deep Cogito (San Francisco)

#### Architecture & Specifications
| Specification | Value |
|--------------|-------|
| Parameters | 671B total MoE / 37B active |
| Context Window | 128K tokens |
| Base Model | DeepSeek (forked Nov 2024) |
| Format | BF16 (~1.3TB) / FP8 available |
| Hardware | 8x B200 (1 node) or 16x H200 (2 nodes) |
| Languages | 30+ languages |

#### Training Methodology - Iterated Distillation & Amplification (IDA)
- **Process supervision** for reasoning chains (not just outcome-based)
- Model internalizes reasoning via iterative policy improvement
- Develops stronger "intuition" rather than searching longer at inference
- **60% shorter reasoning chains** than DeepSeek R1
- All 8 Cogito models trained for **<$3.5M combined** (including data generation + experiments)

#### Hybrid Reasoning Modes
- **Standard Mode**: Direct answers using internalized intuition
- **Reasoning Mode**: Step-by-step self-reflection with visible thought chains
- Toggle via `enable_thinking` parameter

#### Benchmarks
| Benchmark | Cogito v2.1 | Comparison |
|-----------|-------------|------------|
| Mathematics | 96.0% | 97th percentile |
| Hallucinations | 100% | Perfect |
| Ethics | 100% | Perfect |
| SWE-Bench | Competitive | Agentless framework |
| AIME 2025 | Strong | Matches DeepSeek R1 0528 |
| GPQA Diamond | Strong | Competitive with o3 |

#### Key Claims
- "Best open-weight LLM by a US company"
- Outperforms DeepSeek R1 while using 60% shorter reasoning chains
- Matches DeepSeek v3 0324 in non-reasoning mode
- Approaches Claude 4 Opus and o3 performance

#### Pricing
| Provider | Input/M | Output/M |
|----------|---------|----------|
| Together AI | $1.25 | $1.25 |
| OpenRouter | $1.25 | $1.25 |
| Self-hosted | Free (open weights) |

#### Personality Traits
`Deep-Thinker` `Self-Correcting` `Analyst` `Stepwise` `Token-Efficient`

#### Best For
Complex reasoning, coding/STEM, tool calling, instruction following, creative writing, US data sovereignty

#### Model ID
`deepcogito/cogito-v2.1-671b`

---

### Cogito V2 Preview Llama 405B
**Release:** October 2025 | **Developer:** Deep Cogito

#### Architecture & Specifications
| Specification | Value |
|--------------|-------|
| Parameters | 405B dense |
| Base Model | Llama 3.1 405B |
| Context Window | ~32K tokens |
| Training Focus | Non-reasoning mode intuition enhancement |

#### Key Features
- Hybrid reasoning (standard + self-reflection modes)
- Distilled reasoning capabilities into base parameters
- "Close to best frontier intelligence models" in its size class
- Improved intuition for trajectory selection during decoding
- Strong performance without backtracking heuristics

#### Pricing
| Provider | Input/M | Output/M |
|----------|---------|----------|
| Together AI | $3.50 | $3.50 |
| OpenRouter | ~$3.50 | ~$3.50 |

#### Personality Traits
`Deep-Thinker` `Analyst` `Stepwise` `Assertive` `Self-Correcting`

#### Best For
Complex reasoning requiring dense architecture, research applications, fine-tuning base

#### Model ID
`deepcogito/cogito-v2-preview-llama-405B`

---

### Cogito V2 Preview Llama 70B
**Release:** October 2025 | **Developer:** Deep Cogito

#### Architecture & Specifications
| Specification | Value |
|--------------|-------|
| Parameters | 70B dense |
| Base Model | Llama 3.1 70B |
| Context Window | 128K tokens |
| Languages | 30+ languages |

#### Key Features
- Substantial improvement over base Llama 70B
- Hybrid reasoning modes (standard + thinking)
- Optimized for coding, STEM, instruction following
- Enhanced tool calling capabilities
- **Emergent multimodal capabilities** - can reason about images despite no explicit visual training

#### Pricing
| Provider | Input/M | Output/M |
|----------|---------|----------|
| Together AI | $0.88 | $0.88 |

#### Personality Traits
`Analyst` `Stepwise` `Tool-Seeker` `Self-Correcting` `Efficient`

#### Best For
Balanced performance/cost ratio, edge deployment at scale, general-purpose reasoning

#### Model ID
`deepcogito/cogito-v2-preview-llama-70B`

---

## MOONSHOTAI MODELS

### Kimi K2 Thinking
**Release:** November 6, 2025 | **Developer:** Moonshot AI (Beijing)

#### Architecture & Specifications
| Specification | Value |
|--------------|-------|
| Parameters | 1T total MoE / 32B active |
| Context Window | 256K tokens |
| Experts | 384 total, 8 selected + 1 shared |
| Attention | MLA (Multi-head Latent Attention) |
| Vocabulary | 160K tokens |
| Layers | 61 (1 dense) |
| Quantization | Native INT4 (QAT during post-training) |
| Model Size | ~594GB (HuggingFace) |
| Training Cost | ~$4.6M (reported) |

#### Training Methodology
- Built on Kimi K2 base with enhanced reasoning
- Quantization-Aware Training (QAT) during post-training
- INT4 precision with **lossless quality** and **2x speed improvement**
- MuonClip optimizer for stable 1T parameter training
- 15.5T tokens training data

#### Interleaved Thinking Architecture
- **Thinking Agent**: Reasons step-by-step while dynamically invoking tools
- Mimics human workflow: action → reflection → assessment → next move
- **200-300 sequential tool calls** without human intervention
- Maintains coherent goal-directed behavior across long horizons

#### Benchmarks (SOTA Claims)
| Benchmark | K2 Thinking | GPT-5 | Claude 4.5 |
|-----------|-------------|-------|------------|
| HLE (Humanity's Last Exam) | **SOTA** | - | - |
| BrowseComp | **60.2%** | 54.9% | 24.1% |
| GPQA Diamond | **85.7%** | 84.5% | - |
| SWE-Bench Verified | **71.3%** | - | - |
| LiveCodeBench | **SOTA** | - | - |
| AIME 2025 | Matches | GPT-5 | - |

#### Pricing
| Provider | Input/M | Output/M |
|----------|---------|----------|
| Moonshot API | $0.15 | $2.50 |
| OpenRouter | ~$0.57 | ~$2.42 |

#### Personality Traits
`Deep-Thinker` `Tool-Seeker` `Long-Horizon` `Stepwise` `Persistent`

#### Best For
Deep research, autonomous coding, multi-step agentic workflows, complex reasoning requiring tool orchestration

#### Model ID
`moonshotai/kimi-k2-thinking`

---

### Kimi K2 0905
**Release:** September 5, 2025 | **Developer:** Moonshot AI

#### Architecture & Specifications
| Specification | Value |
|--------------|-------|
| Parameters | 1T total MoE / 32B active |
| Context Window | 256K tokens (doubled from 0711) |
| Experts | 384 total, 8 selected + 1 shared |
| Training | 15.5T tokens with MuonClip |

#### Improvements over K2 0711
- Context extended from 128K → 256K tokens
- Enhanced agentic coding accuracy and generalization
- Improved frontend coding aesthetics and functionality
- Better web, 3D, and related task outputs
- Reduced hallucination rates
- Better instruction following
- Claude Code compatibility

#### Benchmarks
| Benchmark | K2 0905 | K2 0711 |
|-----------|---------|---------|
| SWE-Bench Verified | 69.2% (±0.63) | 65.8% |
| SWE-Bench Multilingual | 55.9% (±0.72) | 47.3% |
| Terminal-Bench | 44.5% (±2.03) | 37.5% |
| SWE-Dev | 66.6% (±0.72) | - |

#### Pricing
| Provider | Input/M | Output/M |
|----------|---------|----------|
| OpenRouter | $0.39 | $1.90 |
| Moonshot API | ~$0.40 | ~$2.00 |

#### Personality Traits
`Tool-Seeker` `Precise` `Stepwise` `Creative` `Assertive`

#### Best For
Agentic coding, frontend development, long-context applications, Claude Code integration

#### Model ID
`moonshotai/kimi-k2-0905`

---

### Kimi K2 0905 (exacto)
**Release:** September 2025 | **Developer:** Moonshot AI + OpenRouter curation

#### Overview
The "exacto" variant is **not a different model** but an OpenRouter routing optimization that directs requests to providers with proven higher tool-calling accuracy.

#### Exacto Routing Criteria
- Top-tier tool-calling accuracy from real traffic (billions of calls)
- Normal range of tool-calling propensity
- Not frequently ignored/blacklisted by users for tool calls

#### Benefits
- Materially fewer tool-calling failures
- More reliable tool use
- Optimized for agentic workflows

#### Pricing
| Provider | Input/M | Output/M |
|----------|---------|----------|
| OpenRouter (exacto) | $0.60 | $2.50 |

#### Personality Traits
Same as K2 0905: `Tool-Seeker` `Precise` `Stepwise` `Creative` `Assertive`

#### Best For
Production agentic workflows where tool-calling reliability is critical

#### Model ID
`moonshotai/kimi-k2-0905:exacto`

---

### Kimi K2 0711
**Release:** July 11, 2025 | **Developer:** Moonshot AI

#### Architecture & Specifications
| Specification | Value |
|--------------|-------|
| Parameters | 1T total MoE / 32B active |
| Context Window | 128K tokens |
| Experts | 384 total, 8 selected + 1 shared |
| Attention | MLA |
| Training | 15.5T tokens, zero instability |

#### Key Features (Original K2 Release)
- First trillion-parameter open MoE with MuonClip optimizer
- Exceptional agentic capabilities from day one
- Strong creative writing and general knowledge
- 65.8% SWE-Bench Verified (at release)
- Block-FP8 format for efficient hosting

#### Benchmarks
| Benchmark | Score |
|-----------|-------|
| SWE-Bench Verified | 65.8% pass@1 |
| SWE-Bench Multilingual | 47.3% pass@1 |
| LiveCodeBench | Strong |
| ZebraLogic | Strong |
| Tau2/AceBench | Strong |

#### Pricing
| Provider | Input/M | Output/M |
|----------|---------|----------|
| OpenRouter | $0.50 | $2.40 |
| OpenRouter (free) | Free | Free |

#### Personality Traits
`Creative` `Tool-Seeker` `Analyst` `Assertive` `Stepwise`

#### Best For
General-purpose agentic tasks, creative writing, cost-effective deployment, free tier experimentation

#### Model ID
`moonshotai/kimi-k2` or `moonshotai/kimi-k2:free`

---

### Kimi Dev 72B
**Release:** June 16, 2025 | **Developer:** Moonshot AI

#### Architecture & Specifications
| Specification | Value |
|--------------|-------|
| Parameters | 72B dense |
| Base Model | Qwen 2.5-72B |
| Context Window | 131K tokens |
| Training Data | ~150B tokens from GitHub issues/PRs |

#### Training Methodology
- **Mid-training** on real-world GitHub data (issues + PR commits)
- **Large-scale RL** with autonomous patching in Docker environments
- Rewards only when **entire test suite passes**
- Strict data decontamination (SWE-bench excluded)
- "BugFixer" + "TestWriter" dual-role system
- Test-time self-play between roles

#### Two-Stage Framework
1. **File Localization**: Identify key files needing modification
2. **Code Editing**: Precise code modifications on located files

#### Benchmarks
| Benchmark | Score |
|-----------|-------|
| SWE-Bench Verified | **60.4%** (SOTA open-source) |
| File Localization | Strong |
| Code Edits | Strong via RL |

#### Pricing
| Provider | Input/M | Output/M |
|----------|---------|----------|
| OpenRouter | $0.29 | $1.15 |

#### Personality Traits
`Precise` `Tool-Seeker` `Stepwise` `Self-Correcting` `Analyst`

#### Best For
Bug fixing, code generation, unit test creation, software engineering automation

#### Model ID
`moonshotai/kimi-dev-72b`

---

## Cross-Provider Comparison

### By Capability Category

| Category | Top Choice | Runner-up |
|----------|-----------|-----------|
| **Agentic Tool Use** | Kimi K2 Thinking (200-300 calls) | Command A |
| **Coding/SWE-Bench** | Kimi K2 Thinking (71.3%) | Kimi K2 0905 (69.2%) |
| **Enterprise RAG** | Command A | Command R+ 08-2024 |
| **Reasoning Efficiency** | Cogito v2.1 (60% fewer tokens) | Kimi K2 Thinking |
| **Hardware Efficiency** | Command A (2 GPUs) | Command R7B |
| **US Data Sovereignty** | Cogito v2.1 | - |
| **Budget Deployment** | Command R7B ($0.037/$0.15) | Kimi K2 0711 (free) |
| **Bug Fixing** | Kimi Dev 72B (60.4% SWE) | Kimi K2 0905 |

### Pricing Comparison (per million tokens)

| Model | Input | Output | Notes |
|-------|-------|--------|-------|
| Command R7B | $0.037 | $0.15 | Best value small |
| Command R | $0.15 | $0.60 | Balanced |
| Kimi Dev 72B | $0.29 | $1.15 | Coding specialist |
| Kimi K2 0905 | $0.39 | $1.90 | Agentic general |
| Kimi K2 0711 | $0.50 | $2.40 | Legacy / free tier |
| Cogito 70B | $0.88 | $0.88 | US open-weight |
| Cogito v2.1 671B | $1.25 | $1.25 | Best US reasoning |
| Command A | $2.50 | $10.00 | Enterprise flagship |
| Command R+ | $2.50 | $10.00 | Complex enterprise |
| Cogito 405B | $3.50 | $3.50 | Dense reasoning |

### Hardware Requirements

| Model | Minimum Hardware | Self-Hosting |
|-------|-----------------|--------------|
| Command R7B | Consumer GPU | Yes (CC-BY-NC) |
| Kimi Dev 72B | 4x A100 | Yes (MIT) |
| Cogito 70B | 4x A100 | Yes (open) |
| Command R | 4-8x A100 | Yes (CC-BY-NC) |
| Command A | **2x A100/H100** | Yes (CC-BY-NC) |
| Command R+ | 8x A100 | Yes (CC-BY-NC) |
| Cogito 405B | 8x A100/H100 | Yes (open) |
| Kimi K2 series | 8x H100+ | Yes (MIT) |
| Cogito v2.1 | 16x H200 / 8x B200 | Yes (open) |

---

## Key Themes & Insights

### 1. Hardware Efficiency Revolution
**Command A** sets a new standard: 111B parameters delivering GPT-4o-tier performance on just 2 GPUs. This 4-16x hardware reduction vs competitors makes enterprise on-prem deployment practical.

### 2. US vs China Open Model Race
- **Cogito v2.1** positions as "best US open-weight model"
- **Kimi K2 Thinking** claims benchmark leads vs GPT-5/Claude
- Both emphasize data sovereignty and open weights
- Training cost transparency: Cogito <$3.5M, K2 Thinking ~$4.6M

### 3. Reasoning Efficiency Innovation
Cogito's IDA methodology achieves **60% shorter reasoning chains** while matching DeepSeek R1 performance. This represents a paradigm shift from "search longer" to "develop better intuition."

### 4. Agentic Capability Scaling
Kimi K2 Thinking's **200-300 sequential tool calls** far exceeds typical model limits of 30-50 calls. This enables truly autonomous multi-step workflows previously impossible.

### 5. Quantization Without Compromise
K2 Thinking's **native INT4** via QAT during post-training achieves 2x speed improvement with "lossless" quality - proving production-ready quantization at frontier scale.

### 6. Specialized Coding Models
**Kimi Dev 72B** demonstrates that focused RL on real-world code tasks (GitHub issues/PRs) with strict test-suite validation outperforms larger general models on SWE-Bench.

---

## API Model Strings Reference

### Cohere
- `command-a-03-2025`
- `command-r7b-12-2024`
- `command-r-08-2024`
- `command-r-plus-08-2024`

### Deep Cogito
- `deepcogito/cogito-v2.1-671b`
- `deepcogito/cogito-v2-preview-llama-405B`
- `deepcogito/cogito-v2-preview-llama-70B`

### MoonshotAI
- `moonshotai/kimi-k2-thinking`
- `moonshotai/kimi-k2-0905`
- `moonshotai/kimi-k2-0905:exacto`
- `moonshotai/kimi-k2` (0711)
- `moonshotai/kimi-k2:free`
- `moonshotai/kimi-dev-72b`

---

## Recommendations by Use Case

| Use Case | Recommended Model | Rationale |
|----------|------------------|-----------|
| **Enterprise RAG** | Command A | Best RAG performance, 2-GPU deployment |
| **Agentic Workflows** | Kimi K2 Thinking | 200-300 tool calls, best agentic benchmarks |
| **Budget Coding** | Kimi Dev 72B | 60.4% SWE-Bench at $0.29/$1.15 |
| **US Data Sovereignty** | Cogito v2.1 671B | Best US open model, full control |
| **Edge Deployment** | Command R7B | 7B params, $0.037/$0.15 |
| **Complex Reasoning** | Cogito v2.1 671B | 60% fewer tokens, process supervision |
| **Frontend Development** | Kimi K2 0905 | Enhanced aesthetics, 256K context |
| **Free Experimentation** | Kimi K2 0711 (free) | Full trillion-parameter model, no cost |
| **Tool-Calling Reliability** | Kimi K2 0905 (exacto) | Curated providers for accuracy |