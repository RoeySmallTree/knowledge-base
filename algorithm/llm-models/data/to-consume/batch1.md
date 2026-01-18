# Community & Niche AI Models Analysis
## Undi95, Kwaipilot, NeverSleep, Nex AGI, Microsoft, Allen AI, Arcee AI

---

## Models Overview

This batch covers **11 models** across 7 providers:

| Provider | Model | Category |
|----------|-------|----------|
| Undi95 | ReMM SLERP 13B | Roleplay/Creative |
| Kwaipilot | KAT-Coder-Pro V1 | Coding/Agentic |
| Kwaipilot | KAT-Coder-Pro V1 (free) | Coding/Agentic |
| NeverSleep | Lumimaid v0.2 8B | Roleplay/Creative |
| NeverSleep | Noromaid 20B | Roleplay/Creative |
| Nex AGI | DeepSeek V3.1 Nex N1 | Agentic/Tool Use |
| Microsoft | Phi 4 | Reasoning/Math |
| Allen AI | OLMo 3 7B Instruct | General/Research |
| Arcee AI | Trinity Mini | Reasoning/Agentic |
| Arcee AI | Trinity Mini (free) | Reasoning/Agentic |

**Note:** The free versions of KAT-Coder-Pro V1 and Trinity Mini are rate-limited versions of the same models.

---

## Undi95 ReMM SLERP 13B

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Creative, Storyteller, Roleplayer, Permissive, Colloquial |
| **Total Parameters** | 13B (dense, Llama 2 base) |
| **Architecture** | SLERP merge of ReML + Huginn v1.2 (Llama 2) |
| **Context Window** | 4K tokens (extended variants available) |
| **Creative Score** | **9.0/10** |
| **Logical Score** | 5.0/10 |
| **Efficiency Score** | 7.5/10 |
| **Short Description** | Re:MythoMax - recreation of original MythoMax with updated component models |
| **Special Properties** | SLERP tensor merge technique; combines Chronos-Beluga + Airoboros + Hermes (ReML) with Huginn v1.2; extensive GGUF quantization options; legacy Llama 2 era model |
| **Best For** | Roleplay, ERP, interactive fiction, creative writing |
| **Special Capabilities** | Character consistency, narrative generation, creative scenarios |
| **Recommendation Score** | 6.5/10 |

**Pricing** (per 1M tokens):
- Via API: ~$0.50-1.00 (limited providers)
- Self-hosted: Free (CC-BY-NC-4.0 + Llama 2 license)

**Benchmarks**:
- ARC: 60.9%
- HellaSwag: 83.6%
- MMLU: 55.3%
- TruthfulQA: 52.0%
- WinoGrande: 75.2%
- GSM8K: 9.2% (weak math)

**Hardware Requirements**:
- BF16: ~26GB VRAM
- Q4 GGUF: ~8GB (via TheBloke quantizations)
- Consumer GPUs: RTX 3090/4080+ recommended

**Notes**: Released ~September 2023. Community merge model from Undi95. "Re:MythoMax" recreation using SLERP (Spherical Linear Interpolation) to merge models. Dual-licensed (CC-BY-NC-4.0 + Llama 2) - commercial use requires review. Legacy model but maintains community following for roleplay. Multiple quantizations available via TheBloke. Similar to original MythoMax 13B but with updated base models.

---

## Kwaipilot KAT-Coder-Pro V1

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Tool-Seeker, Stepwise, Deep-Thinker, Analyst |
| **Total Parameters** | ~40B (MoE architecture) |
| **Architecture** | Qwen-based MoE with AutoThink capability |
| **Context Window** | **256K tokens** |
| **Creative Score** | 6.5/10 |
| **Logical Score** | **9.5/10** |
| **Efficiency Score** | 8.5/10 |
| **Short Description** | Kuaishou's flagship agentic coding model - 73.4% SWE-bench Verified |
| **Special Properties** | AutoThink paradigm for dynamic reasoning mode selection; multi-stage training (mid-train → SFT → RFT → agentic RL); Step-SRPO algorithm for intermediate supervision; ranks #1 among open models on LiveCodeBench Pro |
| **Best For** | Agentic coding, software engineering, multi-turn code generation, tool orchestration |
| **Special Capabilities** | Function calling, tool use, code generation, debugging, refactoring, agentic workflows |
| **Recommendation Score** | **9.0/10** |

**Pricing** (per 1M tokens):
- Input: $0.27 (SiliconFlow)
- Output: $1.00 (SiliconFlow)
- Free tier: Available with rate limits

**Benchmarks**:
- SWE-bench Verified: **73.4%** (beats GPT-5, Claude Sonnet 4)
- LiveCodeBench Pro: **#1** among open models
- Surpasses DeepSeek-R1-0528 and Qwen3-235B-A22B on many tasks
- Strong multi-step planning and tool-use capabilities

**Hardware Requirements**:
- Via API recommended (SiliconFlow, OpenRouter)
- Local: Multi-GPU setup for full precision

**Notes**: Released November 2025. Part of Kuaishou's AI for Software Engineering (AI4SE) division. KAT = Kwaipilot-AutoThink. Key innovation is AutoThink training that dynamically switches between reasoning and non-reasoning modes based on task complexity. Trained with Multi-Token Prediction (MTP)-enhanced knowledge distillation. Technical report: arXiv:2507.08297. Deployed internally at Kuaishou's coding assistant. Trinity Large (200B MoE with 40B active) in training.

---

## NeverSleep Lumimaid v0.2 8B

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Creative, Roleplayer, Permissive, Colloquial, Storyteller |
| **Total Parameters** | 8B (dense, Llama 3.1 base) |
| **Architecture** | Fine-tuned Llama 3.1 8B-Instruct |
| **Context Window** | 32K tokens |
| **Creative Score** | **9.0/10** |
| **Logical Score** | 5.5/10 |
| **Efficiency Score** | 8.5/10 |
| **Short Description** | Specialized roleplay model with heavily curated, "slop-free" dataset |
| **Special Properties** | 60% roleplay/ERP + 40% general data blend; v0.2 features major dataset cleanup removing low-quality outputs; Orthogonal Activation Steering (OAS) variant available for reduced refusals |
| **Best For** | Roleplay, creative writing, character interactions, interactive fiction |
| **Special Capabilities** | Character consistency, narrative generation, minimal refusals |
| **Recommendation Score** | 7.5/10 |

**Pricing** (per 1M tokens):
- Input: $0.09
- Output: $0.60
- Self-hosted: Free (Meta Llama license)

**Benchmarks**:
- Email Classification: 94.0%
- Reasoning: 59.2%
- Ethics: 12.0% (limited)
- Coding: 2.0% (not designed for code)
- General Knowledge: 20.5%
- **Optimized for roleplay, not reasoning tasks**

**Hardware Requirements**:
- ~16GB VRAM for BF16
- Available on Ollama: `ollama pull leeplenty/lumimaid-v0.2:8b`
- Consumer GPUs: RTX 3080+ recommended

**Notes**: Released September 2024. Collaboration between IkariDev and Undi. v0.2 represents "HUGE step up dataset wise" - team purged all "sloppy chats" from training data. Supports both Llama-3-Instruct and Mistral prompt formats. 80-90% performance of larger models (like Qwen2.5 VL 72B) at fraction of cost for creative tasks. OAS (Orthogonal Activation Steering) version available for maximum responsiveness. Available on OpenRouter, Featherless.ai, Ollama.

---

## NeverSleep Noromaid 20B

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Creative, Storyteller, Roleplayer, Permissive, Verbose |
| **Total Parameters** | 20B (dense) |
| **Architecture** | Custom fine-tune (Llama architecture) |
| **Context Window** | 4K tokens |
| **Creative Score** | **9.0/10** |
| **Logical Score** | 4.5/10 |
| **Efficiency Score** | 7.0/10 |
| **Short Description** | Larger roleplay model for enhanced character coherence and narrative depth |
| **Special Properties** | no_robots dataset for more human-like behavior; MinervaAI team dataset (novel); multi-turn character consistency; extensive quantization options (GGUF/GPTQ/AWQ) |
| **Best For** | Roleplay, ERP, interactive fiction, creative scenarios |
| **Special Capabilities** | Long-form narratives, character voice maintenance, creative scenarios |
| **Recommendation Score** | 7.0/10 |

**Pricing** (per 1M tokens):
- Input: $1.00
- Output: $1.75
- Some providers: Free tier available
- Self-hosted: Free (CC-BY-NC-4.0)

**Benchmarks**:
- Email Classification: 94.0%
- Mathematics: 0.0% (not designed for math)
- Reasoning: 0.0% (limited)
- General Knowledge: 0.5%
- Ethics: 10.0%
- Hallucinations: 44.0%
- **Purpose-built for roleplay, not general tasks**

**Hardware Requirements**:
- BF16: ~40GB VRAM
- AWQ 4-bit: ~10.9GB VRAM
- GGUF Q4: ~8-12GB
- Consumer: RTX 3090/4090 with quantization

**Notes**: Released November 26, 2023. Collaboration between IkariDev and Undi. Uses Alpaca prompt format. Includes novel dataset from MinervaAI Team. "no_robots" dataset component adds more human-like behavior. Multiple quantizations available via TheBloke. Maintains coherence across 2048-4096 token contexts. SillyTavern configuration files available. v0.1.1 is primary release. Multi-language support with performance varying by language.

---

## Nex AGI DeepSeek V3.1 Nex N1

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Tool-Seeker, Stepwise, Analyst, Long-Horizon, Assertive |
| **Total Parameters** | 670B total (MoE architecture) |
| **Architecture** | Post-trained DeepSeek-V3.1 (MoE) |
| **Context Window** | 131K tokens |
| **Creative Score** | 7.0/10 |
| **Logical Score** | **9.5/10** |
| **Efficiency Score** | 8.0/10 |
| **Short Description** | Flagship agentic model optimized for autonomous task execution and tool use |
| **Special Properties** | NexAU agent framework integration; MCP support for external server connections; Skills system (like Claude Skills); GlobalStorage and Memory for stateful agents; dynamic tool injection; subagent orchestration |
| **Best For** | Agentic workflows, deep research, multi-step planning, tool orchestration |
| **Special Capabilities** | Function calling, tool use, web search, code generation, autonomous research |
| **Recommendation Score** | **9.0/10** |

**Pricing** (per 1M tokens):
- Input: $0.27 (SiliconFlow)
- Output: $1.00 (SiliconFlow)
- **Free tier**: Available on OpenRouter

**Benchmarks**:
- SWE-bench, GAIA 2, BFCL: Significantly outperforms open models of comparable size
- Strong on practical coding and HTML generation
- Competitive with SOTA open models on agentic tasks
- Excels at multi-step task decomposition and tool use

**Hardware Requirements**:
- Via API recommended (OpenRouter free tier, SiliconFlow)
- Local: Multi-GPU H200 cluster for full model

**Notes**: Released December 2025. Nex AGI is a full-stack agentic platform combining foundation models, synthetic data pipelines, RL training, agent frameworks, and deployment tools. Key differentiator is the complete open ecosystem: model weights, NexAU agent framework, Deep Research Agent, and training infrastructure all open-sourced. Technical report: arXiv:2512.04987. Works with Claude Code and OpenHands frameworks. Emphasis on real-world productivity: mini-app development, website authoring, slide creation, immersive roleplay.

---

## Microsoft Phi 4

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Deep-Thinker, Stepwise, Precise, Analyst, Assertive |
| **Total Parameters** | 14B (dense) |
| **Architecture** | Transformer decoder-only |
| **Context Window** | 16K tokens (extended to 32K with RoPE) |
| **Creative Score** | 7.0/10 |
| **Logical Score** | **9.5/10** |
| **Efficiency Score** | 9.0/10 |
| **Short Description** | State-of-the-art SLM excelling at complex reasoning, especially math |
| **Special Properties** | High-quality synthetic "textbook-like" data training; outperforms much larger models on competition math; SFT + iterative DPO post-training; robust safety alignment; 8% multilingual data |
| **Best For** | Mathematical reasoning, coding, STEM tasks, complex reasoning |
| **Special Capabilities** | Competition math, code generation, logical reasoning, instruction following |
| **Recommendation Score** | **9.0/10** |

**Pricing** (per 1M tokens):
- Azure AI Foundry: Variable (consumption-based)
- Self-hosted: Free (MIT license)
- OpenRouter/other providers: ~$0.07-0.15 input, $0.14-0.30 output

**Benchmarks**:
- AMC-10/12 (Nov 2024): **Outperforms GPT-4, Claude, Gemini** on fresh test data
- MATH: Competitive with 10x larger models
- GPQA Diamond: Strong graduate-level science
- HumanEval: Strong code generation
- SimpleQA: Strong factual responses
- MMLU: Competitive multi-task understanding

**Hardware Requirements**:
- BF16: ~28GB VRAM
- Quantized: 12-16GB for consumer GPUs
- Edge deployment possible with optimization

**Notes**: Released December 2024. Fourth generation of Microsoft's Phi family. Key innovation is high-quality synthetic data focused on reasoning ability. Fresh test on November 2024 AMC-10/12 (after training cutoff) shows genuine reasoning capability, not benchmark overfitting. Phi-4 family expanded to include Phi-4-mini (3.8B), Phi-4-multimodal (5.6B), and Phi-4-reasoning variants. Available on Azure AI Foundry and Hugging Face. MIT license for commercial use.

---

## Microsoft Phi 4 Family Extensions

### Phi-4-mini-instruct (3.8B)
- Dense decoder-only, 128K context
- 200K vocabulary, grouped-query attention
- Optimized for edge/mobile deployment
- Strong instruction following and function calling

### Phi-4-multimodal-instruct (5.6B)
- First multimodal Phi model (speech + vision + text)
- #1 on Huggingface OpenASR leaderboard (6.14% WER)
- Outperforms WhisperV3 on ASR/ST
- First open model for speech summarization

### Phi-4-reasoning / Phi-4-reasoning-plus (14B)
- Extended to 64K tokens for reasoning
- Trained with SFT on 1.4M reasoning traces
- Phi-4-reasoning-plus adds RL for 1.5x more reasoning tokens
- **Beats DeepSeek-R1 (671B) on AIME 2025**
- Competitive with o1-mini across reasoning benchmarks
- Available for Copilot+ PC NPUs (ONNX optimized)

---

## Allen AI OLMo 3 7B Instruct

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Analyst, Self-Correcting, Cautious, Didactic, Tool-Seeker |
| **Total Parameters** | 7B (dense) |
| **Architecture** | Transformer (staged training approach) |
| **Context Window** | 65K+ tokens |
| **Creative Score** | 7.0/10 |
| **Logical Score** | 8.5/10 |
| **Efficiency Score** | 8.5/10 |
| **Short Description** | Fully open language model with complete transparency - data, code, checkpoints |
| **Special Properties** | Dolma 3 dataset (6T tokens); complete model flow transparency; all training logs, checkpoints, and code released; SFT + DPO + RL from verifiable rewards (RLVR); first fully open 32B reasoning model |
| **Best For** | Research, reproducibility, fine-tuning, RL experimentation |
| **Special Capabilities** | Function calling, tool use, multi-turn dialogue, instruction following |
| **Recommendation Score** | **8.5/10** |

**Pricing** (per 1M tokens):
- Via API: Varies by provider
- Self-hosted: **Free** (Apache 2.0)

**Benchmarks**:
- Competitive with Qwen 2.5, Gemma 3, Llama 3.1 at 7B scale
- OLMo 3-Think (7B) matches Qwen 3 8B on MATH
- AIME 2024/2025: Within few points of Qwen 3 8B
- HumanEvalPlus: **Leads** all comparison models
- Strong on MBPP, LiveCodeBench

**Hardware Requirements**:
- 7B: ~14GB VRAM (BF16)
- Available on LM Studio (~4.16GB download for GGUF)
- Consumer GPUs: RTX 3070+ with quantization

**Notes**: Released November 2025. Allen Institute for AI (Ai2) non-profit research institute. "OLMo" = Open Language Models. Key differentiator is **complete openness**: training data (Dolma 3), code, all checkpoints, training logs - everything is public. Enables studying interaction between reasoning traces and downstream behavior. Addresses data contamination concerns that plague other models (e.g., Qwen). Family includes Base, Instruct, Think, and RL Zero variants. OLMo 3.1 extends to 32B. Ai2 Playground available for testing.

---

## Allen AI OLMo 3 Family

### OLMo 3-Base (7B, 32B)
- Pretrained on Dolma 3 (6T tokens)
- Strong in programming, reading comprehension, math
- 65K+ context with maintained performance
- Foundation for continued pretraining and fine-tuning

### OLMo 3-Think (7B, 32B)
- Long chain-of-thought reasoning
- 32B is **strongest fully open reasoning model**
- Within 1-2 points of Qwen3 thinking models
- Wins or ties on MATH, OMEGA, BigBenchHard, HumanEvalPlus

### OLMo 3-Instruct (7B, 32B)
- Optimized for instruction following, tool use, multi-turn dialogue
- Clear upgrade on Llama 3.1 8B
- "Best 7B model from a Western company"

### OLMo 3-RL Zero (7B)
- RL from verifiable rewards without SFT
- Code and Math variants available
- Enables studying RL training dynamics with full transparency

---

## Arcee AI Trinity Mini

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Tool-Seeker, Stepwise, Fast-Twitch, Assertive |
| **Total Parameters** | 26B total / 3B active per token |
| **Architecture** | AFMoE (Attention-First MoE) - 128 experts, 8 active + 1 shared |
| **Context Window** | **128K tokens** |
| **Creative Score** | 7.5/10 |
| **Logical Score** | 8.5/10 |
| **Efficiency Score** | **9.5/10** |
| **Short Description** | U.S.-trained open MoE for enterprise - strong reasoning with full data sovereignty |
| **Special Properties** | Trained end-to-end in USA on 512 H200 GPUs; 10T token dataset from Datology partnership; DeepSeekMoE-style fine-grained experts; gated attention (G1 from Qwen); grouped-query attention; sigmoid routing |
| **Best For** | Multi-turn agents, tool orchestration, enterprise deployment, on-prem AI |
| **Special Capabilities** | Function calling, tool use, structured outputs, multi-turn dialogue, reasoning |
| **Recommendation Score** | **8.5/10** |

**Pricing** (per 1M tokens):
- Input: **$0.045**
- Output: **$0.15**
- **Free tier**: Available on OpenRouter (rate limited)
- Self-hosted: Free (Apache 2.0)

**Benchmarks**:
- Outperforms GPT-OSS on SimpleQA, MMLU, BFCL V3
- 200+ tokens/sec throughput
- Sub-3-second E2E latency
- Competitive with larger models on reasoning tasks

**Hardware Requirements**:
- Via API recommended (OpenRouter, Together, Clarifai)
- Local: Multi-GPU for BF16, consumer GPUs with quantization
- GGUF available: q4_k_m ~8GB

**Notes**: Released December 2025. Arcee AI's response to Chinese dominance in open MoE. "Trinity Manifesto" emphasizes U.S. data sovereignty and enterprise ownership. Trained on 10T tokens curated by Datology (7T general, 1.8T high-quality, 1.2T STEM). Training on Prime Intellect infrastructure. Architecture intentionally derivative (honest about borrowing from DeepSeek, Qwen). Trinity Large (420B/13B active) training on 2048 B300 GPUs for January 2026 release. Apache 2.0 license for full commercial freedom.

---

## Arcee AI Trinity Family

### Trinity Nano Preview (6B / 800M active)
- Experimental, chat-focused model
- "Delightful personality and charm"
- Pushing limits of sparsity in small models
- May be unstable in edge cases
- Not a production/thinking model

### Trinity Mini (26B / 3B active)
- Primary production model
- Optimized for multi-turn agents
- Robust function calling and tool use
- Enterprise-ready

### Trinity Large (Coming January 2026)
- 420B parameters / 13B active
- Training on 2048 B300 GPUs
- Larger contexts, complex reasoning and coding

---

## Cross-Model Comparison

### By Category

| Category | Best Choice | Runner-up |
|----------|-------------|-----------|
| **Agentic Coding** | KAT-Coder-Pro V1 (73.4% SWE-bench) | Nex N1 |
| **Mathematical Reasoning** | Microsoft Phi 4 | OLMo 3-Think |
| **Roleplay/Creative** | Noromaid 20B | Lumimaid v0.2 8B |
| **Enterprise/Sovereign AI** | Trinity Mini | OLMo 3 |
| **Research/Reproducibility** | OLMo 3 | Trinity Mini |
| **Tool Use/Agents** | Nex N1 | KAT-Coder-Pro V1 |
| **Budget Creative** | Lumimaid v0.2 8B | ReMM SLERP 13B |
| **Edge Deployment** | Phi 4-mini | Trinity Nano |

### By Pricing Efficiency

| Model | Input/M | Output/M | Best Value For |
|-------|---------|----------|----------------|
| Trinity Mini | $0.045 | $0.15 | Enterprise MoE |
| Lumimaid v0.2 8B | $0.09 | $0.60 | Budget roleplay |
| KAT-Coder-Pro V1 | $0.27 | $1.00 | Agentic coding |
| Nex N1 | $0.27 | $1.00 | Tool use |
| Noromaid 20B | $1.00 | $1.75 | Extended roleplay |

### By Openness Level

| Level | Models |
|-------|--------|
| **Fully Open** (data + code + weights + logs) | OLMo 3 |
| **Open Weights** (Apache 2.0) | Trinity Mini, Phi 4 |
| **Open Weights** (Other licenses) | ReMM SLERP, Noromaid, Lumimaid |
| **API + Weights** | KAT-Coder-Pro V1, Nex N1 |

---

## API Model Strings

```
undi95/remm-slerp-l2-13b
kwaipilot/kat-coder-pro (paid)
kwaipilot/kat-coder-pro:free
neversleep/llama-3.1-lumimaid-8b
neversleep/noromaid-20b
nex-agi/deepseek-v3.1-nex-n1 (paid)
nex-agi/deepseek-v3.1-nex-n1:free
microsoft/phi-4
allenai/olmo-3-7b-instruct
arcee-ai/trinity-mini (paid)
arcee-ai/trinity-mini:free
```

---

## API Providers

| Model | Primary Providers |
|-------|-------------------|
| ReMM SLERP 13B | Featherless.ai, Local (GGUF) |
| KAT-Coder-Pro V1 | OpenRouter, SiliconFlow, Kilo Code |
| Lumimaid v0.2 8B | OpenRouter, Featherless.ai, Ollama |
| Noromaid 20B | OpenRouter, Ridvay, Local |
| Nex N1 | OpenRouter (free), SiliconFlow, NVIDIA NIM |
| Phi 4 | Azure AI Foundry, Hugging Face, OpenRouter |
| OLMo 3 | Ai2 Playground, Hugging Face, LM Studio |
| Trinity Mini | OpenRouter (free), Together, Clarifai, Arcee |

---

## Key Themes Across This Batch

1. **Roleplay Specialization**: NeverSleep and Undi95 models demonstrate that purpose-built models for creative/roleplay tasks can deliver superior experiences in their niche, even with lower general benchmarks

2. **U.S. AI Sovereignty**: Both Arcee (Trinity) and Allen AI (OLMo 3) explicitly position as American alternatives to Chinese-dominated open model landscape, emphasizing data provenance and enterprise ownership

3. **Full Openness Movement**: OLMo 3 represents the gold standard for research reproducibility - complete training data, code, checkpoints, and logs released

4. **Agentic Focus**: KAT-Coder-Pro and Nex N1 show the industry shift toward agentic models optimized for tool use, multi-step planning, and autonomous task completion

5. **Small Model Efficiency**: Microsoft Phi 4 proves that 14B parameters with high-quality synthetic data can beat much larger models on reasoning tasks

6. **MoE Efficiency**: Trinity Mini's 26B/3B architecture achieves strong performance at consumer-friendly inference costs ($0.045/M input)