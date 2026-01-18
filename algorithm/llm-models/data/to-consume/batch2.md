# Chinese AI Models Analysis
## Baidu, ByteDance, Alibaba, MiniMax, Tencent

---

## Models Removed & Reasons

From your 7 models, I've curated to **6 distinct models**:

| Model Removed | Reason |
|---------------|--------|
| **MiniMax M2** | Superseded by M2.1 (significant improvements in coding, agent tasks, same architecture) |

**All 6 kept models support structured output (function calling, tool use).**

---

## Baidu ERNIE 4.5 300B A47B

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Analyst, Context-Heavy, Assertive, Exploit-Focused |
| **Total Parameters** | 300B (47B active per token) |
| **Architecture** | MoE with heterogeneous multimodal structure |
| **Context Window** | 128K tokens |
| **Creative Score** | 7.5/10 |
| **Logical Score** | 8.5/10 |
| **Efficiency Score** | 8.0/10 |
| **Short Description** | Baidu's flagship that beats DeepSeek-V3 on 22/28 benchmarks |
| **Special Properties** | Heterogeneous MoE for cross-modal knowledge fusion; parameter sharing across modalities with dedicated spaces; trained on PaddlePaddle; 47% MFU during pre-training; SOTA on IFEval, Multi-IF, SimpleQA, ChineseSimpleQA |
| **Best For** | Chinese enterprise AI, instruction following, knowledge tasks, bilingual applications |
| **Special Capabilities** | Function calling, tool use, web search integration, structured output |
| **Recommendation Score** | **8.5/10** |

**Pricing** (per 1M tokens):
- Via SiliconFlow: ~$0.14 input / ~$0.57 output
- Self-hosted: Free (Apache 2.0)

**Benchmarks**:
- Beats **DeepSeek-V3-671B-A37B** on 22 out of 28 benchmarks
- SOTA on IFEval, Multi-IF, SimpleQA, ChineseSimpleQA
- Strong performance in generalization, reasoning, knowledge-intensive tasks

**Hardware Requirements**:
- FP8 quantization: 8x H100 80GB GPUs
- Supports vLLM deployment

**Notes**: Released June 30, 2025. Part of ERNIE 4.5 family (10 variants from 0.3B to 424B). Baidu's U-turn to open-source after DeepSeek's success. Novel heterogeneous MoE architecture enhances multimodal understanding without compromising text performance. Apache 2.0 license permits commercial use.

---

## ByteDance Seed 1.6

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Deep-Thinker, Stepwise, Analyst, Self-Correcting, Long-Horizon |
| **Total Parameters** | 230B (23B active per token) |
| **Architecture** | Sparse MoE (10:1 ratio) |
| **Context Window** | 256K tokens |
| **Creative Score** | 8.0/10 |
| **Logical Score** | **9.0/10** |
| **Efficiency Score** | 8.5/10 |
| **Short Description** | Adaptive Chain-of-Thought reasoning with multimodal support |
| **Special Properties** | AdaCoT (Adaptive Chain-of-Thought) for variable reasoning depth; native multimodal (text, image, video); parallel decoding for reasoning paths; 256K context; #1 on 2025 Gaokao Humanities |
| **Best For** | Complex reasoning, academic tasks, multimodal understanding, GUI interaction |
| **Special Capabilities** | Adaptive thinking, function calling, tool use, GUI-based interaction, structured output |
| **Recommendation Score** | **9.0/10** |

**Pricing** (per 1M tokens via Volcano Engine):
- Input: $0.08-0.25 (tiered by length)
- Output: $0.40-2.00 (tiered by length)
- Cache-hit: $0.05

**Benchmarks**:
- **#1 on 2025 Gaokao Humanities** (China's college entrance exam)
- **#2 on 2025 Gaokao Sciences**
- Matches or outperforms Seed1.5-VL on visual tasks
- Competitive with Kimi K2 Thinking on reasoning

**Hardware Requirements**:
- 230B total / 23B active - similar footprint to ~25B dense model
- Available via Volcano Engine API

**Notes**: Released December 2025. Key innovation is AdaCoT (Adaptive Chain-of-Thought) that dynamically adjusts reasoning depth based on question difficulty. Trained with multimodal mixed continual training (MMCT). Proven on rigorous Chinese academic exams including Gaokao and JEE (India). Best-in-class for adaptive reasoning tasks.

---

## ByteDance Seed 1.6 Flash

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Fast-Twitch, Concise, Intuitive, Cost-Saver |
| **Total Parameters** | ~230B (optimized for speed) |
| **Architecture** | Sparse MoE (speed-optimized) |
| **Context Window** | 256K tokens |
| **Output Limit** | 16K tokens |
| **Creative Score** | 7.0/10 |
| **Logical Score** | 7.5/10 |
| **Efficiency Score** | **10/10** |
| **Short Description** | Ultra-fast multimodal deep thinking for real-time applications |
| **Special Properties** | Optimized for speed while maintaining multimodal capabilities; text/image/video input; SOTA on CMTEB (Chinese text embedding) and MMEB-V2 (multimodal); powers Seed-1.6-Embedding |
| **Best For** | Real-time chat, RAG backbone, low-latency applications, embedding generation |
| **Special Capabilities** | Function calling, tool use, video understanding, structured output |
| **Recommendation Score** | **8.0/10** |

**Pricing** (per 1M tokens):
- Input: **$0.075**
- Output: **$0.30**
- (One of the cheapest multimodal models)

**Benchmarks**:
- CMTEB (Chinese text): **75.62 SOTA**
- MMEB-V2 Image: **77.78** (+5.6 over 2nd place)
- MMEB-V2 Video: **+20.1 points** over 2nd place
- Strong multimodal retrieval performance

**Hardware Requirements**:
- Speed-optimized inference
- Available via OpenRouter, Volcano Engine

**Notes**: Released December 23, 2025. "Flash" designation indicates speed optimization. Excellent for RAG systems and retrieval applications. Powers Seed-1.6-Embedding for multimodal hybrid retrieval. Best choice when latency matters more than maximum reasoning depth.

---

## Alibaba Tongyi DeepResearch 30B A3B

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Tool-Seeker, Stepwise, Analyst, Context-Heavy, Explore-Focused |
| **Total Parameters** | 30.5B (3-3.3B active per token) |
| **Architecture** | MoE (Qwen3-MoE lineage) |
| **Context Window** | 128K tokens |
| **Creative Score** | 6.5/10 |
| **Logical Score** | 8.0/10 |
| **Efficiency Score** | **9.5/10** |
| **Short Description** | Purpose-built agentic LLM for deep research and web browsing |
| **Special Properties** | Dual inference modes (ReAct + IterResearch "Heavy"); fully automated synthetic data pipeline; end-to-end on-policy RL with GRPO; SOTA on agentic search benchmarks; beats OpenAI o3 on some research tasks |
| **Best For** | Deep research, web browsing, multi-step information synthesis, autonomous research agents |
| **Special Capabilities** | Web search, web browsing, multi-source synthesis, ReAct reasoning, tool use |
| **Recommendation Score** | **8.5/10** |

**Pricing** (per 1M tokens):
- Input: ~$0.09
- Output: ~$0.45
- Self-hosted: Free (open-source)

**Benchmarks**:
- **SOTA** on: BrowserComp-EN, BrowserComp-ZH, GAIA, xbench-DeepSearch, WebWalkerQA
- Strong on Humanity's Last Exam (research subset)
- Outperforms OpenAI o3 on certain research-oriented evaluations

**Hardware Requirements**:
- Q4 quantization: ~17-18GB VRAM (runs on single RTX 4090)
- FP16: ~61GB VRAM
- Very efficient due to only 3B active parameters

**Notes**: Released September 17, 2025. Specialized for "long-horizon, deep information-seeking tasks" - not a general-purpose chatbot. Trained end-to-end as an agent with agentic continual pre-training. Based on Qwen3-30B-A3B-Base. IterResearch "Heavy" mode uses test-time scaling for maximum performance. Ideal for building research automation systems.

---

## MiniMax M2.1

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Deep-Thinker, Tool-Seeker, Self-Correcting, Cost-Saver |
| **Total Parameters** | 230B (10B active per token) |
| **Architecture** | Sparse MoE with interleaved thinking |
| **Context Window** | 204.8K tokens |
| **Creative Score** | 8.0/10 |
| **Logical Score** | 8.5/10 |
| **Efficiency Score** | **9.5/10** |
| **Short Description** | #1 open-source model globally with exceptional multi-language coding |
| **Special Properties** | Advanced Interleaved Thinking; exceptional in Rust, Java, Golang, C++, Kotlin, Objective-C, TypeScript; VIBE benchmark creator; "Digital Employee" office automation; outperforms Claude Sonnet 4.5 in multilingual coding |
| **Best For** | Multi-language coding, agentic workflows, IDE integration, office automation |
| **Special Capabilities** | Function calling, tool use, browser control, code execution, structured output |
| **Recommendation Score** | **9.0/10** |

**Pricing** (per 1M tokens):
- Input: ~$0.20
- Output: ~$1.00
- Self-hosted: Free (open-source)

**Benchmarks**:
- **#1 open-source globally** (Artificial Analysis composite)
- SWE-bench Verified: **74.0%**
- SWE-bench Multilingual: **72.5%**
- VIBE (full-stack development): **88.6%** average
- MMLU: 88%
- Matches/exceeds Claude Sonnet 4.5 in multilingual coding

**Hardware Requirements**:
- 4x H200/H20 or 4x A100/A800 GPUs
- FP8 native quantization
- Supports vLLM, SGLang, Transformers

**Notes**: Released December 23, 2025. Significant improvements over M2 in multi-language programming and office scenarios. First open-source model with Advanced Interleaved Thinking. "Digital Employee" feature for end-to-end office automation. Excellent framework compatibility (Claude Code, Cline, Kilo Code, Roo Code). Uses `<think>...</think>` format - must preserve in conversation history.

---

## Tencent Hunyuan A13B Instruct

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Tool-Seeker, Stepwise, Analyst, Assertive, Exploit-Focused |
| **Total Parameters** | 80B (13B active per token) |
| **Architecture** | Fine-grained MoE (1 shared + 64 non-shared experts, 8 active) |
| **Context Window** | 256K tokens (default 128K) |
| **Creative Score** | 7.5/10 |
| **Logical Score** | 8.5/10 |
| **Efficiency Score** | **9.0/10** |
| **Short Description** | Dual-mode reasoning (fast/slow) with leading agent capabilities |
| **Special Properties** | Hybrid reasoning (/think and /no_think commands); fine-grained MoE with 64 experts; 20T token training (250B STEM); SOTA on agent benchmarks (BFCL-v3, τ-Bench, C3-Bench); beats Qwen3-A22B with 40% fewer active params |
| **Best For** | Agent tasks, function calling, tool use, math/science, reasoning |
| **Special Capabilities** | Dual-mode thinking, function calling, tool use, structured output |
| **Recommendation Score** | **8.5/10** |

**Pricing** (per 1M tokens via SiliconFlow):
- Input: $0.14
- Output: $0.57

**Benchmarks**:
- AIME 2024: **87.3%** (vs o1's 74.3%)
- BBH (logical reasoning): **89.1%**
- ZebraLogic: **84.7%**
- BFCL-v3, τ-Bench, C3-Bench: **Leading** on all agent benchmarks
- Outperforms previous 52B Hunyuan-Large on 12/14 tasks

**Hardware Requirements**:
- FP8: 2x GPUs (TP=2)
- Int4 (GPTQ): Single high-end GPU
- Docker images available for TensorRT-LLM, vLLM, SGLang

**Notes**: Released June 27, 2025. Key innovation is dual-mode reasoning: fast mode for simple queries, slow mode (with CoT) for complex reasoning. 32 layers, SwiGLU activations, GQA for memory efficiency. Trained on 20T tokens including 250B STEM-focused. Released with ArtifactsBench (code generation) and C3-Bench (agent evaluation) datasets. Apache 2.0 license.

---

## Summary Comparison Table

| Model | Total | Active | Context | Creative | Logic | Efficiency | Price (In/Out) | Rec |
|-------|-------|--------|---------|----------|-------|------------|----------------|-----|
| **ERNIE 4.5 300B** | 300B | 47B | 128K | 7.5 | 8.5 | 8.0 | ~$0.14/$0.57 | **8.5** |
| **Seed 1.6** | 230B | 23B | 256K | 8.0 | **9.0** | 8.5 | $0.08-0.25/varied | **9.0** |
| **Seed 1.6 Flash** | 230B | ~23B | 256K | 7.0 | 7.5 | **10** | **$0.075/$0.30** | 8.0 |
| **Tongyi DeepResearch** | 30.5B | 3.3B | 128K | 6.5 | 8.0 | **9.5** | $0.09/$0.45 | **8.5** |
| **MiniMax M2.1** | 230B | 10B | 204.8K | 8.0 | 8.5 | **9.5** | $0.20/$1.00 | **9.0** |
| **Hunyuan A13B** | 80B | 13B | 256K | 7.5 | 8.5 | **9.0** | $0.14/$0.57 | **8.5** |

---

## Pricing Overview

| Model | Input ($/1M) | Output ($/1M) | Self-Host | License |
|-------|--------------|---------------|-----------|---------|
| **ERNIE 4.5 300B A47B** | ~$0.14 | ~$0.57 | Yes | Apache 2.0 |
| **Seed 1.6** | $0.08-0.25 | $0.40-2.00 | No | Proprietary |
| **Seed 1.6 Flash** | **$0.075** | **$0.30** | No | Proprietary |
| **Tongyi DeepResearch** | $0.09 | $0.45 | Yes | Open-source |
| **MiniMax M2.1** | $0.20 | $1.00 | Yes | Open-source |
| **Hunyuan A13B** | $0.14 | $0.57 | Yes | Tencent License |

---

## Key Architectural Innovations

### ERNIE 4.5 - Heterogeneous Multimodal MoE
- Cross-modal parameter sharing with dedicated modality spaces
- Enhances multimodal without compromising text performance
- 47% Model FLOPs Utilization (MFU) - highly efficient training

### Seed 1.6 - Adaptive Chain-of-Thought (AdaCoT)
- Dynamically adjusts reasoning depth based on question difficulty
- Parallel decoding for reasoning paths reduces latency
- Proven on rigorous academic exams (Gaokao, JEE)

### Tongyi DeepResearch - Agentic Training Pipeline
- Fully automated synthetic data generation
- End-to-end on-policy RL with custom GRPO
- Dual inference: ReAct (core evaluation) + IterResearch (maximum ceiling)

### MiniMax M2.1 - Advanced Interleaved Thinking
- First open-source model with interleaved thinking
- "Digital Employee" for office automation
- Exceptional multi-language (Rust, Java, Go, C++, Kotlin, Obj-C, TS, JS)

### Hunyuan A13B - Dual-Mode Reasoning
- Fast mode (`/no_think`) for simple queries
- Slow mode (`/think`) for complex reasoning with CoT
- Fine-grained MoE: 1 shared + 64 non-shared experts, 8 active

---

## CABAL Recommendations by Use Case

| Use Case | Recommended Model | Rationale |
|----------|-------------------|-----------|
| **Complex Reasoning** | Seed 1.6 | AdaCoT, #1 on Gaokao exams |
| **Multi-Language Coding** | MiniMax M2.1 | #1 open-source, exceptional in 8+ languages |
| **Deep Research/Web** | Tongyi DeepResearch | Purpose-built for research agents |
| **Agent Tasks** | Hunyuan A13B | SOTA on agent benchmarks |
| **Chinese Enterprise** | ERNIE 4.5 300B | Beats DeepSeek-V3, Chinese-optimized |
| **Low-Latency/RAG** | Seed 1.6 Flash | $0.075 input, ultra-fast, SOTA embeddings |
| **Budget Multimodal** | Seed 1.6 Flash | Cheapest multimodal with quality |
| **Self-Hosted Research** | Tongyi DeepResearch | Only 3B active, runs on RTX 4090 |
| **Self-Hosted Coding** | MiniMax M2.1 | Open-source, #1 globally |
| **Office Automation** | MiniMax M2.1 | "Digital Employee" feature |

---

## Chinese AI Unique Strengths

1. **Extreme Efficiency**: All use MoE with 5-23% activation ratios
2. **Adaptive Reasoning**: Seed 1.6 (AdaCoT), Hunyuan (/think modes)
3. **Agent Specialization**: Tongyi DeepResearch, Hunyuan A13B
4. **Open-Source Leadership**: All except Seed are fully open
5. **Chinese Language Excellence**: Optimized for Mandarin
6. **Academic Validation**: Seed 1.6 tested on real exams (Gaokao, JEE)
7. **Multimodal Native**: ERNIE, Seed support text/image/video
8. **Multi-Language Coding**: M2.1 leads in non-Python languages
9. **Research Automation**: Tongyi built specifically for web research
10. **Cost Leadership**: Seed Flash at $0.075 input is extremely cheap

---

## Comparison to Western Models

**vs OpenAI:**
- ERNIE beats DeepSeek-V3 which competes with GPT-4
- Hunyuan beats o1 on AIME 2024 (87.3% vs 74.3%)
- M2.1 matches/exceeds GPT-4 on coding
- Generally cheaper with similar quality

**vs Anthropic Claude:**
- M2.1 outperforms Claude Sonnet 4.5 in multilingual coding
- M2.1 approaches Claude Opus 4.5 performance
- Hunyuan competitive on reasoning tasks

**vs Google Gemini:**
- Similar context lengths (256K)
- Chinese models excel in agent/tool tasks
- Gemini leads on some multimodal benchmarks

**vs DeepSeek:**
- ERNIE 4.5 beats DeepSeek-V3 on 22/28 benchmarks
- Similar MoE architectures
- DeepSeek has MIT license advantage

---

## Model Evolution & Release Dates

```
June 2025: ERNIE 4.5 family (Baidu's open-source pivot)
June 2025: Hunyuan A13B (Tencent)
September 2025: Tongyi DeepResearch (Alibaba)
October 2025: MiniMax M2
December 2025: Seed 1.6, Seed 1.6 Flash (ByteDance)
December 2025: MiniMax M2.1 (major upgrade)
```

---

## Hardware & Deployment Guide

### Lightest Models (Single GPU possible)

| Model | Quantization | VRAM | Configuration |
|-------|--------------|------|---------------|
| **Tongyi DeepResearch** | Q4 | ~17GB | **Single RTX 4090** |
| **Tongyi DeepResearch** | FP16 | ~61GB | 1x A100 80GB |
| **Hunyuan A13B** | Int4 | ~40GB | Single A100 |
| **Hunyuan A13B** | FP8 | ~80GB | 2x GPUs |

### Medium Models (Multi-GPU)

| Model | Quantization | VRAM | Configuration |
|-------|--------------|------|---------------|
| **MiniMax M2.1** | FP8 | ~200GB | 4x A100/H100 |
| **Seed 1.6** | - | - | Via API only |

### Heavy Models (8+ GPUs)

| Model | Quantization | VRAM | Configuration |
|-------|--------------|------|---------------|
| **ERNIE 4.5 300B** | FP8 | ~600GB | 8x H100 |

---

## API Providers

| Provider | ERNIE 4.5 | Seed 1.6 | Tongyi DR | M2.1 | Hunyuan |
|----------|-----------|----------|-----------|------|---------|
| SiliconFlow | ✓ | - | - | ✓ | ✓ |
| OpenRouter | - | ✓ | ✓ | ✓ | ✓ |
| Volcano Engine | - | ✓ | - | - | - |
| MiniMax Platform | - | - | - | ✓ | - |
| Tencent Cloud | - | - | - | - | ✓ |
| Self-hosted | ✓ | ✗ | ✓ | ✓ | ✓ |

---

## License Summary

| Model | License | Commercial Use | Self-Host | Train Others |
|-------|---------|----------------|-----------|--------------|
| **ERNIE 4.5** | Apache 2.0 | ✓ | ✓ | ✓ |
| **Seed 1.6** | Proprietary | Via API | ✗ | ✗ |
| **Seed 1.6 Flash** | Proprietary | Via API | ✗ | ✗ |
| **Tongyi DeepResearch** | Open-source | ✓ | ✓ | ✓ |
| **MiniMax M2.1** | Open-source | ✓ | ✓ | ✓ |
| **Hunyuan A13B** | Tencent License | ✓ | ✓ | Check terms |

---

## Key Differentiators

| Model | Unique Selling Point |
|-------|---------------------|
| **ERNIE 4.5 300B** | Beats DeepSeek-V3 with half the active params; heterogeneous multimodal MoE |
| **Seed 1.6** | AdaCoT adaptive reasoning; #1 on Chinese academic exams |
| **Seed 1.6 Flash** | Cheapest quality multimodal ($0.075); SOTA embeddings |
| **Tongyi DeepResearch** | Purpose-built for autonomous research agents; only 3B active |
| **MiniMax M2.1** | #1 open-source globally; exceptional multi-language coding; Digital Employee |
| **Hunyuan A13B** | Dual-mode reasoning (/think, /no_think); SOTA on agent benchmarks |