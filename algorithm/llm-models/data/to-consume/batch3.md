# Miscellaneous AI Models Analysis
## NVIDIA, OpenGVLab, Prime Intellect, Venice, EssentialAI, Gryphe, Inception

---

## Models Removed & Reasons

From your 9 models, I've curated to **8 distinct models**:

| Model Removed | Reason |
|---------------|--------|
| **Inception: Mercury** (non-coder) | Chat variant still in closed beta; Mercury Coder is the publicly available product |

**Note on special models:**
- **Venice Uncensored** is a platform routing to various models (primarily Dolphin Mistral 24B Venice Edition) - included for its unique "uncensored" positioning
- **MythoMax 13B** is a legacy model (Llama 2 era) - included due to continued popularity in roleplay/creative communities

---

## NVIDIA Nemotron 3 Nano 30B A3B

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Tool-Seeker, Stepwise, Long-Horizon, Fast-Twitch |
| **Total Parameters** | 31.6B (3.2-3.6B active per token) |
| **Architecture** | Hybrid Mamba-2 + Transformer MoE (23 Mamba-2 + 23 MoE + 6 Attention layers) |
| **Context Window** | **1M tokens** (1,000,000) |
| **Creative Score** | 7.5/10 |
| **Logical Score** | **9.0/10** |
| **Efficiency Score** | **10/10** |
| **Short Description** | NVIDIA's flagship open model: hybrid architecture achieves 3.3x throughput of comparable models |
| **Special Properties** | Hybrid Mamba-Transformer architecture for best-in-class throughput; 1M token context (RULER benchmark leader); 99.2% on AIME with tools; trains on 25T tokens; Nemotron-CC dataset; configurable reasoning traces; 52 total layers |
| **Best For** | Agentic AI, long-context processing, RAG systems, edge deployment |
| **Special Capabilities** | Function calling, tool use, structured outputs, reasoning budget control |
| **Recommendation Score** | **9.5/10** |

**Pricing** (per 1M tokens):
- Via API: ~$0.15-0.30 (varies by provider)
- Self-hosted: Free (NVIDIA Open Model License)

**Benchmarks**:
- AIME 2025: **89.1%** (without tools), **99.2%** (with Python tools)
- SWE-bench Verified: **49.0%**
- τ-Bench (Tool Use): **71.5%**
- RULER @ 1M: **68.2%** (long context SOTA)
- IFBench: **99.2%**
- **3.3x faster** throughput than Qwen3-30B-A3B

**Hardware Requirements**:
- FP8: Single H200 or 2x A100
- BF16: 2x H200
- Consumer: RTX 4090 24GB possible with quantization

**Notes**: Released December 15, 2025. Part of Nemotron 3 family (Nano, Super, Ultra). Key innovation is hybrid Mamba-Transformer architecture that combines state-space models with attention for extreme efficiency. Trained with GRPO (Group Relative Policy Optimization). Open weights, training recipe, and datasets released. NVIDIA Open Model License (commercial use permitted).

---

## NVIDIA Nemotron Nano 9B V2

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Concise, Fast-Twitch, Cost-Saver, Intuitive, Tool-Seeker |
| **Total Parameters** | 9B (dense, distilled from 12B) |
| **Architecture** | Hybrid Mamba-2 + MLP with 4 Attention layers |
| **Context Window** | 128K tokens |
| **Creative Score** | 7.0/10 |
| **Logical Score** | 8.0/10 |
| **Efficiency Score** | **10/10** |
| **Short Description** | 3-6x faster than Qwen3-8B with comparable accuracy |
| **Special Properties** | Distilled from 12B parent using Minitron strategy; runtime thinking budget control; fits on single A10G (22GB); reasoning traces configurable via system prompt; 20T token pre-training |
| **Best For** | Edge devices, Jetson deployment, budget inference, agent steps |
| **Special Capabilities** | Function calling, tool use, reasoning budget control, structured outputs |
| **Recommendation Score** | **8.5/10** |

**Pricing** (per 1M tokens):
- Input: **$0.04**
- Output: **$0.16**
- Self-hosted: **Free** (NVIDIA Open Model License)

**Benchmarks**:
- MATH-500: **97.8%**
- IFEval: **90.3%**
- AIME 2025: **72.1%**
- Outperforms or matches Qwen3-8B across reasoning benchmarks
- **3-6x higher throughput** than Qwen3-8B

**Hardware Requirements**:
- Single NVIDIA A10G (22GB) for 128K context
- Jetson AGX Thor compatible
- Consumer GPUs with quantization

**Notes**: Released August 18, 2025. Distilled from Nemotron-Nano-12B-v2-Base. "Thinking budget" feature allows runtime control of reasoning depth - crucial for latency-sensitive applications. Extremely cost-effective at $0.04 input. Supports 15+ languages and 43 programming languages.

---

## OpenGVLab InternVL3 78B

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Analyst, Context-Heavy, Precise, Deep-Thinker, Premium-Tier |
| **Total Parameters** | ~78B (5.5B ViT + 172M MLP + 72.7B Qwen2.5 LLM) |
| **Architecture** | ViT-MLP-LLM paradigm with V2PE |
| **Context Window** | 32K tokens (visual + text) |
| **Creative Score** | 8.0/10 |
| **Logical Score** | 8.5/10 |
| **Efficiency Score** | 7.0/10 |
| **Short Description** | SOTA open-source multimodal model rivaling GPT-4o |
| **Special Properties** | Variable Visual Position Encoding (V2PE) for long-context vision; Native Multimodal Pre-Training (unified text+vision training); Mixed Preference Optimization (MPO); pixel unshuffle for efficient high-res; 448×448 tile dynamic resolution |
| **Best For** | Multimodal reasoning, document analysis, video understanding, GUI agents |
| **Special Capabilities** | Image understanding, video processing, OCR, document analysis, chart interpretation, 3D vision |
| **Recommendation Score** | **8.5/10** |

**Pricing** (per 1M tokens via OpenRouter):
- Input: ~$0.07
- Output: ~$0.26
- Self-hosted: Free (open-source)

**Benchmarks**:
- SOTA on open-source multimodal models
- Outperforms base Qwen2.5 on text-only tasks despite multimodal focus
- Strong on: MMBench, MMStar, MMMU, MathVista, HallusionBench, OCRBench
- MPO improves reasoning by 4.1 points over non-MPO variants

**Hardware Requirements**:
- BF16: 80GB+ VRAM recommended (multi-GPU)
- Int8: ~40GB VRAM
- Multi-GPU deployment recommended for 78B

**Notes**: Released April 11, 2025. Key innovation is Native Multimodal Pre-Training - unlike models that adapt text LLMs to vision, InternVL3 trains on multimodal data from the start. This leads to better vision-language alignment. V2PE enables flexible position encoding for visual tokens. InternVL3.5 (August 2025) extends this further with CascadeRL. Open weights and training data available.

---

## Prime Intellect INTELLECT-3

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Deep-Thinker, Stepwise, Self-Correcting, Assertive, Tool-Seeker |
| **Total Parameters** | 106B (12B active per token) |
| **Architecture** | Sparse MoE (based on GLM-4.5-Air) |
| **Context Window** | ~128K tokens |
| **Creative Score** | 7.5/10 |
| **Logical Score** | **9.5/10** |
| **Efficiency Score** | 8.5/10 |
| **Short Description** | SOTA reasoning model trained with large-scale RL on open infrastructure |
| **Special Properties** | Trained with prime-rl (open asynchronous RL framework); 512 H200 GPUs; SFT + RL pipeline; outperforms GLM-4.5-Air by 8% on LiveCodeBench; Environments Hub for agentic training; all infrastructure open-sourced |
| **Best For** | Math reasoning, coding, scientific analysis, agentic tasks |
| **Special Capabilities** | Function calling, tool use, multi-turn reasoning, agentic workflows |
| **Recommendation Score** | **9.0/10** |

**Pricing** (per 1M tokens):
- Via API: Competitive (check chat.primeintellect.ai)
- Self-hosted: **Free** (MIT + Apache 2.0)

**Benchmarks**:
- AIME 2024: **90.8%** (beats DeepSeek-R1's 83.2%)
- AIME 2025: **88.0%**
- LiveCodeBench v6: **69.3%**
- GPQA Diamond: **74.4%**
- MMLU-Pro: **81.9%**
- Mathematics: **96.0%** (95th percentile)
- Outperforms GLM-4.5 (3x larger) on many benchmarks

**Hardware Requirements**:
- BF16: 2x H200 (tensor parallel)
- FP8: Single H200
- Supports vLLM with qwen3_coder tool parser

**Notes**: Released November 26, 2025. Built on GLM-4.5-Air base model from Zhipu AI. Prime Intellect's value proposition is the open infrastructure stack: prime-rl (RL framework), verifiers (environment library), Environments Hub (community platform), and Prime Sandboxes (secure code execution). All released under permissive licenses. Training still showed improving rewards at end - model hasn't plateaued.

---

## Venice Uncensored (Dolphin Mistral 24B Venice Edition)

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Permissive, Creative, Guardrail-Lite, Colloquial, Roleplayer |
| **Total Parameters** | 24B (Mistral-based) |
| **Architecture** | Dense Transformer (Mistral) |
| **Context Window** | 32K tokens |
| **Creative Score** | **9.0/10** |
| **Logical Score** | 7.0/10 |
| **Efficiency Score** | 8.0/10 |
| **Short Description** | Most uncensored AI model with 2.2% refusal rate |
| **Special Properties** | Co-developed with Dolphin team; privacy-by-design (local storage, no server retention); consequentialist ethical reasoning; trained to minimize content restrictions; decentralized GPU inference |
| **Best For** | Creative writing, roleplay, philosophical discussions, unrestricted brainstorming |
| **Special Capabilities** | Web search, minimal content filtering, character creation |
| **Recommendation Score** | **7.5/10** (niche use case) |

**Pricing**:
- Venice Free: 25 text prompts/day
- Venice Pro: **$18/month** unlimited
- API: $0.50/M input, $2.00/M output

**Benchmarks**:
- Censorship refusal rate: **2.2%** (lowest in class)
- Limited standardized benchmarks available
- Optimized for creative tasks, not reasoning

**Hardware Requirements** (self-hosted):
- BF16: ~60GB VRAM
- Available primarily via Venice.ai platform

**Notes**: Released April 28, 2025 (v1.0), updated July 3, 2025 (v1.1). Venice.ai is a platform that routes to multiple models, but "Venice Uncensored" specifically refers to Dolphin Mistral 24B Venice Edition. Key differentiator is privacy (local chat storage, no server logging) and minimal content restrictions. Not recommended for tasks requiring accuracy or reasoning - optimized for creative freedom. Model uses consequentialist ethical reasoning rather than deontological guardrails.

---

## EssentialAI Rnj-1 Instruct

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Tool-Seeker, Stepwise, Analyst, Cost-Saver |
| **Total Parameters** | 8B (dense) |
| **Architecture** | Gemma 3-like with global attention + YaRN |
| **Context Window** | 32K tokens |
| **Creative Score** | 6.5/10 |
| **Logical Score** | **8.5/10** |
| **Efficiency Score** | **9.0/10** |
| **Short Description** | 8B model that beats 32B competitors on SWE-bench |
| **Special Properties** | Trained from scratch on 8.4T tokens; FIM-trained for code infilling; 10x stronger than similar-sized models on SWE-bench; uses profiler for iterative code optimization; Muon optimizer; named after Ramanujan |
| **Best For** | Agentic coding, software engineering, STEM problem solving, tool use |
| **Special Capabilities** | Function calling, tool use, code infilling (FIM), iterative code optimization |
| **Recommendation Score** | **8.5/10** |

**Pricing** (per 1M tokens):
- Very competitive (via OpenRouter)
- Self-hosted: **Free** (Apache 2.0)

**Benchmarks**:
- SWE-bench Verified (bash-only): **20.8%** (beats Gemini 2.0 Flash, Qwen2.5-Coder 32B)
- HE-FIM-Python: **86.21%** (code infilling)
- BFCL (tool use): Surpasses comparable models
- HumanEval+, MBPP+: Competitive with top open models
- Enamel (efficient code): Outperforms all baselines

**Hardware Requirements**:
- 8B dense model - runs on consumer GPUs
- ~16GB VRAM for BF16
- Quantized versions available via Ollama

**Notes**: Released December 6, 2025. Created by Essential AI, founded by Ashish Vaswani (Transformer co-author). Deliberately minimal post-training to enable community specialization. Key differentiator is agentic coding - the model can operate inside frameworks like mini-SWE-agent and iteratively improve code using profilers. Pass@32 results show significant test-time scaling potential.

---

## Gryphe MythoMax L2 13B

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Creative, Storyteller, Roleplayer, Permissive, Verbose |
| **Total Parameters** | 13B (dense) |
| **Architecture** | Llama 2 13B with tensor merge |
| **Context Window** | 4-8K tokens |
| **Creative Score** | **9.5/10** |
| **Logical Score** | 5.5/10 |
| **Efficiency Score** | 8.5/10 |
| **Short Description** | The most popular Llama 2 fine-tune for roleplay and creative writing |
| **Special Properties** | Tensor type merge of MythoLogic-L2 + Huginn; optimized for narrative coherence; rich descriptive output; extensive community quantizations available; input understanding + output writing capability merged |
| **Best For** | Roleplay, interactive fiction, creative writing, character-driven narratives |
| **Special Capabilities** | Long-form storytelling, character consistency, narrative coherence |
| **Recommendation Score** | **7.0/10** (legacy, specialized) |

**Pricing** (per 1M tokens):
- Input: **$0.0005** (extremely cheap)
- Output: **$0.0005**
- Self-hosted: Free

**Benchmarks**:
- ARC: 60.9%
- HellaSwag: 83.6%
- MMLU: 55.3%
- TruthfulQA: 52.0%
- Note: Weak on reasoning/coding, strong on creative tasks

**Hardware Requirements**:
- BF16: ~26GB VRAM
- Q4 GGUF: ~8GB VRAM (consumer GPUs)
- Extensive quantization options via TheBloke

**Notes**: Legacy model based on Llama 2 (2023). Creator Gryphe notes "time to slowly fade away" with Llama 3 release, but model remains extremely popular for roleplay/creative communities. Uses experimental tensor merge technique combining MythoLogic-L2's understanding with Huginn's writing capability. Not suitable for reasoning, coding, or factual tasks - purely creative focus. Inspired derivative models like Pygmalion Mythalion.

---

## Inception Mercury Coder

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Fast-Twitch, Precise, Concise, Deterministic-Lean, Exploit-Focused |
| **Total Parameters** | Not disclosed (Mini and Small variants) |
| **Architecture** | **Diffusion LLM** (dLLM) - Transformer-based |
| **Context Window** | 128K tokens |
| **Creative Score** | 6.5/10 |
| **Logical Score** | 8.0/10 |
| **Efficiency Score** | **10/10** |
| **Short Description** | World's first commercial diffusion LLM - 10x faster than autoregressive models |
| **Special Properties** | Diffusion-based generation (parallel token prediction); 1100+ tokens/sec on H100; denoising diffusion loss; error correction during generation; Apply-Edit feature (92% accuracy, 46x faster than GPT-5) |
| **Best For** | Code generation, code completion, Apply-Edit workflows, latency-critical coding |
| **Special Capabilities** | Fill-in-the-middle (FIM), Apply-Edit, code autocomplete, Next-Edit |
| **Recommendation Score** | **8.5/10** |

**Pricing** (per 1M tokens):
- Input: **$0.25**
- Output: **$1.00**

**Benchmarks**:
- Throughput: **1109 tokens/sec** (Mini), **737 tokens/sec** (Small)
- HumanEval: **90.0%** (Small)
- MultiPL-E: **76.2%** (average across 6 languages)
- Copilot Arena: **#2 quality**, **#1 speed**
- Apply-Edit: **92%** accuracy (matches GPT-5, 46x faster)
- **5-10x faster** than speed-optimized autoregressive models

**Hardware Requirements**:
- Runs on commodity NVIDIA H100s
- Not self-hostable (API only)

**Notes**: Released June 17, 2025 (Mercury Coder), with Apply-Edit in late 2025. First commercial diffusion LLM - paradigm shift from autoregressive generation. Generates multiple tokens in parallel during each denoising step. Compatible with existing SFT/RLHF pipelines and existing infrastructure. Chat variant in closed beta. Throughputs previously only achievable with specialized hardware (Groq, Cerebras, SambaNova) now possible on standard GPUs.

---

## Summary Comparison Table

| Model | Total | Active | Context | Creative | Logic | Efficiency | Price (In/Out) | Rec |
|-------|-------|--------|---------|----------|-------|------------|----------------|-----|
| **Nemotron 3 Nano 30B** | 31.6B | 3.2B | **1M** | 7.5 | **9.0** | **10** | ~$0.15-0.30 | **9.5** |
| **Nemotron Nano 9B V2** | 9B | 9B | 128K | 7.0 | 8.0 | **10** | **$0.04/$0.16** | **8.5** |
| **InternVL3 78B** | ~78B | ~78B | 32K | 8.0 | 8.5 | 7.0 | $0.07/$0.26 | **8.5** |
| **INTELLECT-3** | 106B | 12B | 128K | 7.5 | **9.5** | 8.5 | Competitive | **9.0** |
| **Venice Uncensored** | 24B | 24B | 32K | **9.0** | 7.0 | 8.0 | $18/mo or API | 7.5 |
| **Rnj-1 Instruct** | 8B | 8B | 32K | 6.5 | 8.5 | **9.0** | Very cheap | **8.5** |
| **MythoMax 13B** | 13B | 13B | 4-8K | **9.5** | 5.5 | 8.5 | **$0.0005** | 7.0 |
| **Mercury Coder** | N/A | N/A | 128K | 6.5 | 8.0 | **10** | $0.25/$1.00 | **8.5** |

---

## Pricing Overview

| Model | Input ($/1M) | Output ($/1M) | Self-Host | License |
|-------|--------------|---------------|-----------|---------|
| **Nemotron 3 Nano 30B A3B** | ~$0.15 | ~$0.30 | Yes | NVIDIA Open Model |
| **Nemotron Nano 9B V2** | **$0.04** | **$0.16** | Yes | NVIDIA Open Model |
| **InternVL3 78B** | $0.07 | $0.26 | Yes | Open-source |
| **INTELLECT-3** | Competitive | Competitive | Yes | MIT + Apache 2.0 |
| **Venice Uncensored** | $0.50 | $2.00 | No | Proprietary |
| **Rnj-1 Instruct** | Very cheap | Very cheap | Yes | Apache 2.0 |
| **MythoMax 13B** | **$0.0005** | **$0.0005** | Yes | Other (Llama 2) |
| **Mercury Coder** | $0.25 | $1.00 | No | Proprietary |

---

## Key Architectural Innovations

### Nemotron 3 Nano - Hybrid Mamba-Transformer MoE
- Combines Mamba-2 state-space models with Transformer attention
- 23 Mamba-2 + 23 MoE + 6 Attention layers
- Achieves 3.3x throughput of pure Transformer MoE
- 1M token context through Mamba's linear complexity

### InternVL3 - Variable Visual Position Encoding (V2PE)
- Flexible position increments for visual tokens
- Enables long-context visual understanding without position window extension
- Native Multimodal Pre-Training (not adapted from text-only)
- Better vision-language alignment from ground up

### INTELLECT-3 - End-to-End RL Infrastructure
- prime-rl: Asynchronous RL framework for 512+ GPU clusters
- Environments Hub: Community platform for agentic training environments
- Prime Sandboxes: Sub-10-second sandbox spin-up for code execution
- All infrastructure open-sourced

### Mercury Coder - Diffusion Language Model (dLLM)
- Parallel token generation via denoising diffusion
- 5-10x faster than autoregressive models
- Error correction built into generation process
- Same Transformer architecture, different training/inference algorithm

### Rnj-1 - Dense Efficiency
- 8B dense model achieves 20.8% on SWE-bench (beats 32B models)
- FIM (Fill-in-the-Middle) training for code infilling
- Muon optimizer for stable training
- Minimal post-training preserves specialization potential

---

## CABAL Recommendations by Use Case

| Use Case | Recommended Model | Rationale |
|----------|-------------------|-----------|
| **Agentic AI** | Nemotron 3 Nano 30B | 1M context, 3.3x throughput, tool use |
| **Edge/Budget Inference** | Nemotron Nano 9B V2 | $0.04 input, fits A10G |
| **Multimodal Understanding** | InternVL3 78B | SOTA open-source VLM |
| **Math/Reasoning** | INTELLECT-3 | 90.8% AIME 2024, open RL stack |
| **Unrestricted Creative** | Venice Uncensored | 2.2% refusal rate |
| **Agentic Coding (Small)** | Rnj-1 Instruct | 8B beats 32B on SWE-bench |
| **Roleplay/Fiction** | MythoMax 13B | Community standard, extremely cheap |
| **Fast Code Generation** | Mercury Coder | 1100 tokens/sec, 10x faster |
| **Long-Context RAG** | Nemotron 3 Nano 30B | 1M context with efficiency |
| **Budget Multimodal** | InternVL3 8B/14B variants | Smaller models available |

---

## Category Leaders

### Speed Champions
1. **Mercury Coder**: 1109 tokens/sec (diffusion)
2. **Nemotron 3 Nano 30B**: 3.3x throughput vs competitors
3. **Nemotron Nano 9B V2**: 3-6x faster than Qwen3-8B

### Reasoning Champions
1. **INTELLECT-3**: 90.8% AIME 2024
2. **Nemotron 3 Nano 30B**: 89.1% AIME 2025 (99.2% with tools)
3. **Nemotron Nano 9B V2**: 97.8% MATH-500

### Cost Champions
1. **MythoMax 13B**: $0.0005/1K tokens
2. **Nemotron Nano 9B V2**: $0.04 input
3. **Rnj-1 Instruct**: Very competitive

### Creative Champions
1. **MythoMax 13B**: Community standard for roleplay
2. **Venice Uncensored**: Minimal restrictions
3. **InternVL3 78B**: Multimodal creativity

### Agentic Champions
1. **Rnj-1 Instruct**: 20.8% SWE-bench at 8B
2. **INTELLECT-3**: Full RL infrastructure stack
3. **Nemotron 3 Nano 30B**: Tool use focus

---

## Hardware & Deployment Guide

### Consumer GPU Friendly (RTX 4090 / 24GB)

| Model | Quantization | VRAM | Notes |
|-------|--------------|------|-------|
| **Nemotron Nano 9B V2** | BF16 | ~18GB | Full precision possible |
| **Rnj-1 Instruct** | BF16 | ~16GB | 8B dense |
| **MythoMax 13B** | Q4 GGUF | ~8GB | Extensive quantizations |
| **Nemotron 3 Nano 30B** | Q4 | ~18GB | 3B active makes this viable |

### Single H100/H200

| Model | Quantization | Notes |
|-------|--------------|-------|
| **INTELLECT-3** | FP8 | Single H200 |
| **Nemotron 3 Nano 30B** | FP8 | Single H200 |
| **InternVL3 78B** | Int8 | Tight fit |

### Multi-GPU

| Model | Configuration |
|-------|---------------|
| **INTELLECT-3** | 2x H200 for BF16 |
| **InternVL3 78B** | 2-4x GPUs recommended |

---

## API Providers

| Provider | Nemotron 3 | Nemotron 9B | InternVL3 | INTELLECT-3 | Venice | Rnj-1 | MythoMax | Mercury |
|----------|------------|-------------|-----------|-------------|--------|-------|----------|---------|
| OpenRouter | ✓ | ✓ | ✓ | ✓ | - | ✓ | ✓ | - |
| NVIDIA NIM | ✓ | ✓ | - | - | - | - | - | - |
| DeepInfra | ✓ | ✓ | - | - | - | - | - | - |
| Venice.ai | - | - | - | - | ✓ | - | - | - |
| Inception API | - | - | - | - | - | - | - | ✓ |
| Together AI | - | - | - | - | - | - | ✓ | - |
| Self-hosted | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | ✗ |

---

## License Summary

| Model | License | Commercial Use | Self-Host | Fine-Tune |
|-------|---------|----------------|-----------|-----------|
| **Nemotron 3 Nano 30B** | NVIDIA Open Model | ✓ | ✓ | ✓ |
| **Nemotron Nano 9B V2** | NVIDIA Open Model | ✓ | ✓ | ✓ |
| **InternVL3 78B** | Open-source | ✓ | ✓ | ✓ |
| **INTELLECT-3** | MIT + Apache 2.0 | ✓ | ✓ | ✓ |
| **Venice Uncensored** | Proprietary | Via platform | ✗ | ✗ |
| **Rnj-1 Instruct** | Apache 2.0 | ✓ | ✓ | ✓ |
| **MythoMax 13B** | Other + Llama 2 | Check terms | ✓ | ✓ |
| **Mercury Coder** | Proprietary | Via API | ✗ | Enterprise |

---

## Key Differentiators

| Model | Unique Selling Point |
|-------|---------------------|
| **Nemotron 3 Nano 30B** | 1M context + hybrid Mamba architecture = best efficiency-capability tradeoff |
| **Nemotron Nano 9B V2** | $0.04 input with runtime thinking budget control for edge |
| **InternVL3 78B** | Native multimodal training rivals GPT-4o at open-source |
| **INTELLECT-3** | Complete open-source RL infrastructure stack included |
| **Venice Uncensored** | Privacy-first + 2.2% refusal rate for unrestricted creative |
| **Rnj-1 Instruct** | 8B model beats 32B models on agentic coding (SWE-bench) |
| **MythoMax 13B** | Community roleplay standard, $0.0005/1K tokens |
| **Mercury Coder** | Diffusion LLM paradigm - 10x faster code generation |

---

## Model Lineage & Release Timeline

```
August 2025: Nemotron Nano 9B V2 (NVIDIA)
April 2025: InternVL3 78B (OpenGVLab)
June 2025: Mercury Coder (Inception Labs)
July 2025: Venice Uncensored 1.1 (Venice.ai + Dolphin)
November 2025: INTELLECT-3 (Prime Intellect)
December 2025: Rnj-1 Instruct (EssentialAI)
December 2025: Nemotron 3 Nano 30B A3B (NVIDIA)
Legacy: MythoMax 13B (2023, Llama 2 era)
```

---

## Special Notes for CABAL Integration

### Models with Tool Use Support
- ✓ Nemotron 3 Nano 30B A3B
- ✓ Nemotron Nano 9B V2
- ✓ InternVL3 78B (limited)
- ✓ INTELLECT-3
- ✓ Rnj-1 Instruct (BFCL leader at 8B)
- ✗ Venice Uncensored (web search only)
- ✗ MythoMax 13B (not designed for tools)
- ✓ Mercury Coder (FIM/Apply-Edit)

### Models with Reasoning Traces
- ✓ Nemotron 3 Nano 30B (configurable)
- ✓ Nemotron Nano 9B V2 (thinking budget control)
- ✗ InternVL3 78B (MPO optimized, not CoT)
- ✓ INTELLECT-3 (full reasoning)
- ✗ Venice Uncensored (optional via model selection)
- ✗ Rnj-1 Instruct (dense, no explicit reasoning)
- ✗ MythoMax 13B (not applicable)
- ✗ Mercury Coder (diffusion process, not CoT)

### Self-Hosting Priority (Best Value)
1. **Rnj-1 Instruct**: 8B, Apache 2.0, consumer GPU friendly
2. **Nemotron Nano 9B V2**: Edge-optimized, NVIDIA license
3. **MythoMax 13B**: Legacy but extremely cheap
4. **INTELLECT-3**: Full infrastructure stack included
5. **Nemotron 3 Nano 30B**: Best performance/efficiency ratio

### API Priority (Best for Scale)
1. **Mercury Coder**: Unmatched speed for coding
2. **Nemotron Nano 9B V2**: $0.04 input is cheapest capable model
3. **InternVL3 78B**: Best open multimodal
4. **INTELLECT-3**: Best open reasoning