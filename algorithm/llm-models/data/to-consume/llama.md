# Meta Llama Models Analysis

---

## Models Removed & Reasons

From your 6 models, I've curated to **5 distinct models**:

| Model Removed | Reason |
|---------------|--------|
| **Llama 3 70B Instruct** | Superseded by Llama 3.3 70B (better performance, same resources) |

**All 5 kept models support structured output (function calling, tool use).**

---

## Llama 4 Maverick

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Frontier-Open, Multimodal-Native, Value-King, MoE-Architecture |
| **Total Parameters** | 400B (17B active per token) |
| **Architecture** | MoE with 128 experts |
| **Creative Score** | 8.0/10 |
| **Logical Score** | 8.5/10 |
| **Efficiency Score** | 9.0/10 |
| **Short Description** | Open-source flagship that beats GPT-4o at 1/9th the cost |
| **Special Properties** | 1M context; native multimodality (text+images); early fusion architecture; 12 languages; distilled from Behemoth teacher; beats GPT-4o and Gemini 2.0 Flash |
| **Best For** | Enterprise AI, image understanding, creative writing, general assistant |
| **Special Capabilities** | Function calling, tool use, image grounding, multilingual, structured output |
| **Recommendation Score** | **9.0/10** |

**Pricing** (per 1M tokens, via API providers):
- Input: ~$0.14-0.27
- Output: ~$0.68-0.85
- Meta Estimate (distributed): $0.19 blended

**Benchmarks**:
- LMArena ELO: **1417** (experimental chat)
- MMLU: 85.5%
- LiveCodeBench: 43.4%
- DocVQA: 91.6%
- MBPP: 77.6%
- Competitive with DeepSeek v3.1 at half the active parameters

**Hardware Requirements**:
- Full weights (BF16): 800GB + 16GB KV cache → 8xH100
- FP8 quantized: ~400GB → Single H100 DGX host
- Int4: ~100GB → 2xH100

**Notes**: Released April 5, 2025. First open-weight natively multimodal model. Beats GPT-4o on coding, reasoning, multilingual, long-context, and image benchmarks. Distilled from Llama 4 Behemoth (288B active, still training). EU usage restricted by license.

---

## Llama 4 Scout

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Efficient, Long-Context-King, Single-GPU, Multimodal |
| **Total Parameters** | 109B (17B active per token) |
| **Architecture** | MoE with 16 experts |
| **Creative Score** | 7.0/10 |
| **Logical Score** | 7.5/10 |
| **Efficiency Score** | **10/10** |
| **Short Description** | Industry-leading 10M context window on single H100 |
| **Special Properties** | **10M token context** (longest in industry); native multimodality; iRoPE for length generalization; fits single H100 with Int4; beats Gemma 3, Gemini 2.0 Flash-Lite, Mistral 3.1 |
| **Best For** | Long document analysis, codebase reasoning, memory-intensive apps, edge deployment |
| **Special Capabilities** | Function calling, tool use, image understanding, 10M context retrieval |
| **Recommendation Score** | **8.5/10** |

**Pricing** (per 1M tokens, via API providers):
- Input: ~$0.05-0.10
- Output: ~$0.20-0.40

**Benchmarks**:
- Needle-in-Haystack (10M): ~99% accuracy
- Beats Gemma 3 27B and Gemini 2.0 Flash-Lite across benchmarks
- Supports up to 20 hours of video context

**Hardware Requirements**:
- Full weights (BF16): 216GB + 16GB KV cache → 4xH100
- 8-bit: 109GB + 8GB KV cache → 2xH100
- 4-bit: 54.5GB + 8GB KV cache → **Single H100**
- 2-bit: 27.3GB + 8GB KV cache → Single A100

**Notes**: Released April 5, 2025. Industry-leading 10M token context window (up from 128K in Llama 3). Uses iRoPE architecture for length generalization. Best for applications needing massive context without massive cost.

---

## Llama 3.3 70B Instruct

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Balanced, Production-Ready, Cost-Effective, Text-Only |
| **Parameters** | 70B (Dense) |
| **Creative Score** | 7.5/10 |
| **Logical Score** | 8.0/10 |
| **Efficiency Score** | 9.0/10 |
| **Short Description** | 405B performance at 70B cost - last Llama 3 release |
| **Special Properties** | 128K context; matches Llama 3.1 405B performance; 8 languages; better than Llama 3.1 70B and 3.2 90B for text; GQA for inference |
| **Best For** | Production enterprise workloads, cost-conscious deployment, text tasks |
| **Special Capabilities** | Function calling, tool use, multilingual (8 languages), structured output |
| **Recommendation Score** | **8.5/10** |

**Pricing** (per 1M tokens):
- Input: ~$0.10
- Output: ~$0.31
- (25x cheaper than GPT-4o, 30x cheaper than Claude 3.5 Sonnet)

**Benchmarks**:
- IFEval (instruction following): **92.1%** (beats GPT-4o 84.6%)
- HumanEval: 89.0%
- MBPP EvalPlus: 88.6%
- MATH (0-shot CoT): 77.0%
- MGSM (multilingual): 91.1%
- MMLU PRO (5-shot CoT): 68.9%
- GPQA Diamond: 50.5%
- NIH/Multi-Needle (long context): 97.5%

**Hardware Requirements**:
- Full weights: ~140GB VRAM → 2xA100 80GB
- FP8: ~70GB → Single A100 80GB or 2xA6000
- Int4: ~35GB → Single A6000 or RTX 4090

**Notes**: Released December 6, 2024. Final Llama 3 series release. Delivers 405B-level performance at 70B cost. 276 tokens/sec on Groq (25 tok/s faster than 3.1 70B). Best value for text-only enterprise workloads.

---

## Llama 3.1 405B Instruct

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Largest-Open, Teacher-Model, Frontier-Class, Synthetic-Data-Generator |
| **Parameters** | 405B (Dense) |
| **Creative Score** | 8.5/10 |
| **Logical Score** | 9.0/10 |
| **Efficiency Score** | 5.0/10 |
| **Short Description** | World's largest open-source LLM - rivals GPT-4 and Claude 3.5 |
| **Special Properties** | 128K context; rivals GPT-4, GPT-4o, Claude 3.5 Sonnet; synthetic data generation; model distillation; 8 languages; trained on 15T tokens |
| **Best For** | Synthetic data generation, model distillation, R&D, maximum open-source capability |
| **Special Capabilities** | Function calling, tool use, LLM-as-judge, knowledge distillation, structured output |
| **Recommendation Score** | 8.0/10 |

**Pricing** (per 1M tokens, via API providers):
- Input: ~$3.00-6.00
- Output: ~$9.00-12.00

**Benchmarks**:
- MMLU (5-shot): **87.3%** (beats GPT-4 Turbo 86.5%)
- MATH: Strong performance
- Tool Use: Among the best
- Competitive with GPT-4, GPT-4o, Claude 3.5 Sonnet

**Hardware Requirements**:
- Full weights (BF16): ~810GB VRAM → 8xH100
- FP8: ~405GB → 4xH100 or 8xA100
- Minimum: 256 GPUs for training benchmarks

**Notes**: Released July 23, 2024. "Teacher model" for distilling knowledge to smaller models. Largest publicly available open-source LLM. Best for synthetic data generation and training other models. Consider Llama 3.3 70B or Llama 4 for inference workloads.

---

## Llama 3.1 8B Instruct

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Lightweight, Edge-Friendly, Fast, Accessible |
| **Parameters** | 8B (Dense) |
| **Creative Score** | 6.0/10 |
| **Logical Score** | 6.5/10 |
| **Efficiency Score** | **10/10** |
| **Short Description** | Most accessible Llama - runs on consumer hardware |
| **Special Properties** | 128K context; 8 languages; runs on consumer GPUs; edge/mobile ready; tool use capable |
| **Best For** | Prototyping, edge deployment, mobile, resource-constrained environments |
| **Special Capabilities** | Function calling, tool use, multilingual, structured output |
| **Recommendation Score** | 7.5/10 |

**Pricing** (per 1M tokens):
- Input: ~$0.05
- Output: ~$0.08
- Or free self-hosted

**Benchmarks**:
- Competitive with models 2x its size from previous generation
- Strong for resource-constrained scenarios

**Hardware Requirements**:
- Full weights: ~16GB VRAM → Single RTX 4090 or M1 Pro Mac
- Int4: ~4GB → Consumer laptop GPU

**Notes**: Released July 23, 2024. Best for developers building prototypes or small-scale applications. Runs on single consumer GPU. Good starting point for fine-tuning experiments. Consider Llama 4 Scout for more capability at similar efficiency.

---

## Summary Comparison Table

| Model | Params | Active | Context | Creative | Logic | Efficiency | Price (In/Out) | Rec |
|-------|--------|--------|---------|----------|-------|------------|----------------|-----|
| **Llama 4 Maverick** | 400B | 17B | 1M | 8.0 | 8.5 | 9.0 | ~$0.20/$0.70 | **9.0** |
| **Llama 4 Scout** | 109B | 17B | **10M** | 7.0 | 7.5 | **10** | ~$0.08/$0.30 | **8.5** |
| **Llama 3.3 70B** | 70B | 70B | 128K | 7.5 | 8.0 | 9.0 | **$0.10/$0.31** | **8.5** |
| **Llama 3.1 405B** | 405B | 405B | 128K | 8.5 | 9.0 | 5.0 | $3-6/$9-12 | 8.0 |
| **Llama 3.1 8B** | 8B | 8B | 128K | 6.0 | 6.5 | **10** | ~$0.05/$0.08 | 7.5 |

---

## Pricing Overview

| Model | Input ($/1M) | Output ($/1M) | Self-Host | License |
|-------|--------------|---------------|-----------|---------|
| **Llama 4 Maverick** | ~$0.14-0.27 | ~$0.68-0.85 | Yes | Llama 4 Community |
| **Llama 4 Scout** | ~$0.05-0.10 | ~$0.20-0.40 | Yes | Llama 4 Community |
| **Llama 3.3 70B** | $0.10 | $0.31 | Yes | Llama 3.3 Community |
| **Llama 3.1 405B** | $3.00-6.00 | $9.00-12.00 | Yes | Llama 3.1 Community |
| **Llama 3.1 8B** | ~$0.05 | ~$0.08 | Yes | Llama 3.1 Community |

**Note**: All Llama models are open-weight with permissive commercial licenses. API prices vary by provider (DeepInfra, Together, Lambda, etc.).

---

## Key Architectural Features

### Llama 4 MoE Architecture
- **Mixture of Experts**: Only ~17B parameters active per token despite 109B-400B total
- **Early Fusion**: Native multimodality from pre-training (not bolted-on)
- **iRoPE**: Interleaved attention for extreme context length generalization
- **MetaCLIP Vision**: Enhanced vision encoder trained specifically for Llama 4

### Llama 4 Context Innovation
- Scout: **10M tokens** (industry-leading)
- Maverick: 1M tokens
- Enables: Entire codebases, books, multi-hour videos, months of conversation history

### Llama 3.x Dense Architecture
- Standard decoder-only transformer
- Grouped-Query Attention (GQA) for inference efficiency
- 128K vocabulary tokenizer
- 128K context window

### Distillation Capability
- 405B serves as "teacher model"
- Can distill to smaller models (8B, 70B)
- Synthetic data generation for training
- License allows using outputs to train other models

---

## CABAL Recommendations by Use Case

| Use Case | Recommended Model | Rationale |
|----------|-------------------|-----------|
| **Best Value Frontier** | Llama 4 Maverick | Beats GPT-4o at 1/9th cost |
| **Massive Context** | Llama 4 Scout | 10M tokens, single H100 |
| **Production Text** | Llama 3.3 70B | 405B performance at 70B cost |
| **Synthetic Data** | Llama 3.1 405B | Best for distillation/training |
| **Edge/Mobile** | Llama 3.1 8B | Runs on consumer hardware |
| **Multimodal Open** | Llama 4 Maverick | Native image understanding |
| **Long Document Analysis** | Llama 4 Scout | 10M context, near-perfect retrieval |
| **Budget Production** | Llama 3.3 70B | $0.10/$0.31, excellent quality |

---

## Llama Unique Strengths

1. **Open Weights**: Full model weights available for download
2. **Commercial License**: Permissive for commercial use
3. **Self-Hosting**: No API lock-in, data sovereignty
4. **Context Leadership**: Scout's 10M tokens is industry-leading
5. **MoE Efficiency**: Llama 4 activates only 17B of 400B parameters
6. **Native Multimodality**: Early fusion, not bolted-on
7. **Distillation Rights**: License allows training other models
8. **Community Ecosystem**: 100,000+ variants on HuggingFace
9. **Cost Efficiency**: 9-23x cheaper than GPT-4o
10. **Behemoth Distillation**: Benefits from unreleased 288B teacher

---

## Comparison to Competitors

**vs OpenAI GPT-4o/5:**
- Maverick beats GPT-4o on multiple benchmarks
- 9-23x cheaper
- Open weights vs closed
- Self-hosting available

**vs Anthropic Claude:**
- Claude leads on coding (SWE-bench)
- Llama leads on context (10M vs 200K)
- Claude leads on safety
- Llama is open-source

**vs Google Gemini:**
- Scout beats Gemini 2.0 Flash-Lite
- Maverick competitive with Gemini 2.0 Flash
- Llama has longer context (10M vs 1M)
- Both have multimodal, but Llama is open

**vs DeepSeek:**
- Similar MoE approach
- DeepSeek slightly ahead on some benchmarks
- Llama has better ecosystem
- DeepSeek cheaper on API

---

## Model Evolution Timeline

```
April 2024: Llama 3 (8B, 70B) - initial release
July 2024: Llama 3.1 (8B, 70B, 405B) - 128K context, multilingual
September 2024: Llama 3.2 (1B, 3B, 11B, 90B) - vision models
December 2024: Llama 3.3 70B - matches 405B performance
April 2025: Llama 4 (Scout, Maverick) - MoE, 10M context, native multimodal
[Training]: Llama 4 Behemoth (288B active) - teacher model
```

---

## Deployment & Hardware Guide

### Llama 4 Scout (Best for single-GPU)
| Quantization | VRAM | Configuration |
|--------------|------|---------------|
| BF16 | 216GB | 4xH100 |
| Int8 | 109GB | 2xH100 |
| **Int4** | **54.5GB** | **1xH100** |
| Int2 | 27GB | 1xA100 |

### Llama 4 Maverick
| Quantization | VRAM | Configuration |
|--------------|------|---------------|
| BF16 | 800GB | 8xH100 |
| **FP8** | **400GB** | **1xH100 DGX** |
| Int4 | 100GB | 2xH100 |

### Llama 3.3 70B
| Quantization | VRAM | Configuration |
|--------------|------|---------------|
| BF16 | 140GB | 2xA100 80GB |
| FP8 | 70GB | 1xA100 80GB |
| **Int4** | **35GB** | **1xRTX 4090** |

### Llama 3.1 8B
| Quantization | VRAM | Configuration |
|--------------|------|---------------|
| BF16 | 16GB | 1xRTX 4090 |
| **Int4** | **4GB** | **Consumer laptop** |

---

## API Providers

| Provider | Scout | Maverick | 3.3 70B | 3.1 405B | 3.1 8B |
|----------|-------|----------|---------|----------|--------|
| Together AI | ✓ | ✓ | ✓ | ✓ | ✓ |
| DeepInfra | ✓ | ✓ | ✓ | ✓ | ✓ |
| Lambda | ✓ | ✓ | ✓ | ✓ | ✓ |
| AWS Bedrock | - | - | ✓ | ✓ | ✓ |
| Groq | - | - | ✓ | - | ✓ |
| Cerebras | - | - | - | ✓ | ✓ |
| Ollama (local) | ✓ | ✓ | ✓ | ✓ | ✓ |

---

## License Restrictions

**Llama 4 Community License:**
- ⚠️ **EU Usage Restricted** - Cannot deploy in European Union
- Commercial use allowed
- Model distillation allowed
- Synthetic data generation allowed
- Cannot use outputs to train competing LLMs

**Llama 3.x Community License:**
- Commercial use allowed
- Model distillation allowed
- More permissive than Llama 4