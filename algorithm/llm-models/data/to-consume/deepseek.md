# DeepSeek Models Analysis

---

## Models Removed & Reasons

From your 12 models, I've curated to **7 distinct models**:

| Model Removed | Reason |
|---------------|--------|
| **DeepSeek V3.1 Terminus (exacto)** | Same as V3.1 Terminus, different quantization |
| **DeepSeek V3.1** | Superseded by V3.1 Terminus (stability improvements) |
| **DeepSeek V3 0324** | Superseded by V3.1 and V3.2 series |
| **DeepSeek V3** | Superseded by V3.1 Terminus and V3.2 |
| **DeepSeek V3.2 Exp** | Superseded by V3.2 (experimental → production) |

**All kept models support structured output (JSON schema mode, function calling).**

---

## DeepSeek V3.2

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Deep-Thinker, Agentic, Tool-Master, Cost-Efficient, Open-Source |
| **Total / Active Parameters** | 685B / ~37B (MoE) |
| **Creative Score** | 6.5/10 |
| **Logical Score** | 9.0/10 |
| **Efficiency Score** | 9.5/10 |
| **Short Description** | Frontier open-source with integrated thinking + tool-use |
| **Special Properties** | 128K context; DeepSeek Sparse Attention (DSA); first model with thinking integrated into tool-use; 1,800+ agentic environments; 85k+ training instructions; comparable to GPT-5; MIT License |
| **Best For** | Agentic workflows, tool-use, cost-sensitive enterprise, self-hosting |
| **Special Capabilities** | Tool calling, structured outputs, thinking mode, non-thinking mode, code agents, search agents, FIM completion |
| **Recommendation Score** | 9.5/10 |

**Pricing** (per 1M tokens):
- Cache Hit: $0.028
- Cache Miss: $0.28
- Output: $0.42

**Benchmarks**:
- AIME 2025: 89.3%
- MMLU-Pro: 85.0%
- GPQA Diamond: 79.9%
- Codeforces: 2121 ELO
- BrowseComp: 40.1%

**Notes**: Released Dec 1, 2025. First DeepSeek model to integrate thinking directly into tool-use. Supports both thinking and non-thinking modes. DSA reduces computational complexity from O(L²) to O(Lk) for long contexts. ~95% cheaper than GPT-5.

---

## DeepSeek V3.2-Speciale

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Ultra-Deep-Thinker, Competition-Grade, Math-Olympiad, No-Tools |
| **Total / Active Parameters** | 685B / ~37B (MoE) |
| **Creative Score** | 5.0/10 |
| **Logical Score** | **10/10** |
| **Efficiency Score** | 5.0/10 |
| **Short Description** | Maximum reasoning - Gold medals in IMO, IOI, ICPC 2025 |
| **Special Properties** | Relaxed length constraints for massive reasoning chains; surpasses GPT-5; matches Gemini 3.0 Pro; 96.0% AIME 2025; Gold Medal IMO/CMO/IOI/ICPC World Finals 2025; **NO tool calling** |
| **Best For** | Competition math, olympiad problems, complex proofs, research-grade reasoning |
| **Special Capabilities** | Extended thinking only - no tools, no function calling |
| **Recommendation Score** | 8.0/10 (specialized) |

**Pricing**: Same as V3.2 ($0.028/$0.28/$0.42)

**Benchmarks**:
- AIME 2025: **96.0%** (beats GPT-5 High's 94.6%)
- Codeforces: **2701 ELO** (Grandmaster tier)
- IMO 2025: **Gold Medal**
- IOI 2025: **Gold Medal** (10th place)
- ICPC World Finals 2025: **2nd place**
- CMO 2025: **Gold Medal**

**Notes**: Released Dec 1, 2025. Temporary endpoint expired Dec 15, 2025. Designed exclusively for deep reasoning - does NOT support tool calling. Uses relaxed length penalty to generate massive internal reasoning chains. Extremely compute-intensive.

---

## DeepSeek V3.1 Terminus

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Stable, Agentic, Tool-Master, Production-Ready |
| **Total / Active Parameters** | 685B / ~37B (MoE) |
| **Creative Score** | 6.5/10 |
| **Logical Score** | 8.5/10 |
| **Efficiency Score** | 8.5/10 |
| **Short Description** | Stabilized V3.1 with improved agentic capabilities |
| **Special Properties** | 128K context; hybrid thinking/non-thinking modes; fixed language mixing issues; improved Code Agent and Search Agent; FP8 microscaling; MIT License |
| **Best For** | Production agentic workflows, multilingual applications, stable deployments |
| **Special Capabilities** | Tool calling, structured outputs, thinking mode, FIM completion, JSON output |
| **Recommendation Score** | 8.5/10 |

**Pricing** (per 1M tokens):
- Input: $0.21
- Output: $0.79

**Benchmarks**:
- SimpleQA: 96.8% (up from 93.4%)
- BrowseComp: 38.5% (up from 30.0%)
- SWE Verified: 68.4% (up from 66.0%)
- Terminal-bench: 36.7% (up from 31.3%)
- GPQA Diamond: 80.7%

**Notes**: Released Sep 22, 2025. "Terminus" indicates final version of V3 series before V4. Focus on stability and language consistency (fixed Chinese/English mixing). Recommended for production over experimental V3.2-Exp.

---

## DeepSeek R1 0528

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Deep-Thinker, Math-Strong, Open-Reasoning, Self-Verifying |
| **Total / Active Parameters** | 685B / ~37B (MoE) |
| **Creative Score** | 5.5/10 |
| **Logical Score** | 9.0/10 |
| **Efficiency Score** | 7.5/10 |
| **Short Description** | Major R1 upgrade - approaches o3 and Gemini 2.5 Pro |
| **Special Properties** | 128K context; 64K max output; visible chain-of-thought; 87.5% AIME 2025 (up from 70%); ~23K avg thinking tokens (up from 12K); system prompt support; reduced hallucinations; function calling support |
| **Best For** | Complex reasoning, math, coding, research, visible thought process |
| **Special Capabilities** | Chain-of-thought reasoning, JSON output, function calling, web search |
| **Recommendation Score** | 9.0/10 |

**Pricing** (per 1M tokens):
- Cache Hit: $0.14
- Cache Miss: $0.55
- Output: $2.19

**Benchmarks**:
- AIME 2025: **87.5%** (up from 70%)
- AIME 2024: 91.4% (up from 79.8%)
- Codeforces: 1930 ELO (up ~400 points)
- LiveCodeBench: 73.3%
- GPQA Diamond: ~81%

**Notes**: Released May 28, 2025. "Minor upgrade" that delivered major improvements. Nearly doubled thinking depth (23K vs 12K tokens). Now supports system prompts (previous R1 didn't). Approaches o3 performance at fraction of cost. MIT License with full open reasoning tokens.

---

## R1 Distill Qwen 32B

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Distilled-Reasoning, Dense, Local-Friendly |
| **Total Parameters** | 32B (Dense) |
| **Creative Score** | 5.0/10 |
| **Logical Score** | 8.0/10 |
| **Efficiency Score** | 9.0/10 |
| **Short Description** | Distilled R1 reasoning into Qwen 2.5 32B - beats o1-mini |
| **Special Properties** | 32K context; 32K max output; outperforms OpenAI o1-mini; distilled from 800K R1 samples; dense architecture (no MoE); runs on consumer GPUs |
| **Best For** | Local deployment, cost-sensitive reasoning, edge inference |
| **Special Capabilities** | Chain-of-thought reasoning, structured outputs |
| **Recommendation Score** | 8.5/10 |

**Pricing**: Free (Apache 2.0 via Qwen license) - API ~$0.27/1M tokens

**Benchmarks**:
- AIME 2024: 72.6%
- MATH-500: 94.3%
- Codeforces: 1691 ELO

**Notes**: Released Jan 2025. Distilled from DeepSeek R1 using 800K curated samples. SOTA for dense models at release. Can run on single high-end consumer GPU (2x RTX 4090 or similar).

---

## R1 Distill Llama 70B

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Distilled-Reasoning, Dense, Llama-Compatible |
| **Total Parameters** | 70B (Dense) |
| **Creative Score** | 5.5/10 |
| **Logical Score** | 8.5/10 |
| **Efficiency Score** | 7.5/10 |
| **Short Description** | Distilled R1 reasoning into Llama 3.3 70B |
| **Special Properties** | 131K context; distilled from R1; based on Llama 3.3-70B-Instruct; tool use support; dense architecture |
| **Best For** | Llama ecosystem compatibility, enterprise deployment, reasoning tasks |
| **Special Capabilities** | Chain-of-thought reasoning, tool calling, structured outputs |
| **Recommendation Score** | 8.0/10 |

**Pricing**: Free (Llama 3.3 license) - API ~$0.03/$0.13 per 1M tokens

**Benchmarks**:
- Strong performance on AIME, MATH-500, LiveCodeBench
- Comparable to Qwen 32B distill but with Llama ecosystem benefits

**Notes**: Released Jan 2025. Based on Llama 3.3-70B-Instruct with R1 distillation. Llama license (not Apache 2.0). Best choice if already in Llama ecosystem.

---

## R1 Distill Qwen 14B

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Compact-Reasoning, Edge-Ready, Cost-Saver |
| **Total Parameters** | 14B (Dense) |
| **Creative Score** | 4.5/10 |
| **Logical Score** | 7.0/10 |
| **Efficiency Score** | 9.5/10 |
| **Short Description** | Lightweight distilled reasoning for edge deployment |
| **Special Properties** | 32K context; distilled from R1; based on Qwen 2.5 14B; runs on single consumer GPU |
| **Best For** | Edge deployment, mobile, resource-constrained environments |
| **Special Capabilities** | Chain-of-thought reasoning, structured outputs |
| **Recommendation Score** | 7.5/10 |

**Pricing**: Free (Apache 2.0) - API minimal cost

**Notes**: Released Jan 2025. Good balance of reasoning capability and resource requirements. Can run on RTX 3090/4080 or M1/M2 Macs with sufficient RAM.

---

## Summary Comparison Table

| Model | Type | Creative | Logic | Efficiency | Context | Structured | Rec |
|-------|------|----------|-------|------------|---------|------------|-----|
| **V3.2** | Flagship | 6.5 | 9.0 | **9.5** | 128K | ✅ | **9.5** |
| **V3.2-Speciale** | Competition | 5.0 | **10** | 5.0 | 128K | ❌ | 8.0 |
| **V3.1 Terminus** | Production | 6.5 | 8.5 | 8.5 | 128K | ✅ | 8.5 |
| **R1 0528** | Reasoning | 5.5 | 9.0 | 7.5 | 128K | ✅ | 9.0 |
| **R1 Distill Qwen 32B** | Local Reasoning | 5.0 | 8.0 | **9.0** | 32K | ✅ | 8.5 |
| **R1 Distill Llama 70B** | Llama Reasoning | 5.5 | 8.5 | 7.5 | 131K | ✅ | 8.0 |
| **R1 Distill Qwen 14B** | Edge Reasoning | 4.5 | 7.0 | **9.5** | 32K | ✅ | 7.5 |

---

## Pricing Overview

| Model | Input ($/1M) | Output ($/1M) | Notes |
|-------|--------------|---------------|-------|
| **V3.2** | $0.028 (hit) / $0.28 (miss) | $0.42 | ~95% cheaper than GPT-5 |
| **V3.2-Speciale** | $0.028 / $0.28 | $0.42 | Same as V3.2 |
| **V3.1 Terminus** | $0.21 | $0.79 | Stable production |
| **R1 0528** | $0.14 (hit) / $0.55 (miss) | $2.19 | 20-50x cheaper than o1 |
| **R1 Distill Qwen 32B** | ~$0.27 | ~$0.27 | Or free self-hosted |
| **R1 Distill Llama 70B** | ~$0.03 | ~$0.13 | Or free self-hosted |
| **R1 Distill Qwen 14B** | Minimal | Minimal | Primarily self-hosted |

**DeepSeek's cache-hit pricing is exceptional** - 90% savings on repeated content.

---

## Key Architectural Innovations

### DeepSeek Sparse Attention (DSA)
- Reduces attention complexity from O(L²) to O(Lk)
- Enables efficient long-context processing
- Introduced in V3.2-Exp, production in V3.2
- Up to 50% cost reduction for long contexts

### Mixture-of-Experts (MoE)
- 685B total parameters, ~37B active per inference
- Dramatic efficiency gains over dense models
- FP8 microscaling for memory efficiency
- Same architecture across V3.x and R1 series

### Self-Verification (V3.2)
- Proof verifier LLM scores reasoning outputs
- Enables better mathematical proofs
- Used in DeepSeekMath V2 development

### GRPO Improvements
- Modified from original R1 paper
- Zero gradient signal filtering
- Asymmetric clipping (from DAPO)
- Better stability in RL training

---

## CABAL Recommendations by Use Case

| Use Case | Recommended Model | Rationale |
|----------|-------------------|-----------|
| **Enterprise Agentic** | V3.2 | Best tool-use, 95% cost savings |
| **Competition Math** | V3.2-Speciale | Gold medal performance, beats GPT-5 |
| **Production Stable** | V3.1 Terminus | Tested, stable, no experimental features |
| **Complex Reasoning** | R1 0528 | Visible CoT, approaches o3 |
| **Local/Self-Hosted** | R1 Distill Qwen 32B | Best local reasoning, beats o1-mini |
| **Llama Ecosystem** | R1 Distill Llama 70B | Llama compatibility, good reasoning |
| **Edge/Mobile** | R1 Distill Qwen 14B | Smallest with real reasoning |
| **Cost-Optimized** | V3.2 with caching | $0.028/1M cached input |

---

## DeepSeek Unique Strengths

1. **Extreme Cost Efficiency**: 20-50x cheaper than OpenAI, 95% cheaper than GPT-5
2. **Open Source**: MIT License on most models, full weights on HuggingFace
3. **Open Reasoning**: Full chain-of-thought visible (unlike o1/o3)
4. **Competition Performance**: Gold medals in IMO, IOI, ICPC 2025
5. **MoE Architecture**: 685B total, only 37B active - efficiency breakthrough
6. **Cache-Hit Pricing**: 90% discount on repeated content
7. **Sparse Attention**: DSA reduces long-context costs by 50%+
8. **Distilled Models**: Bring frontier reasoning to consumer hardware
9. **Integrated Thinking**: V3.2 combines reasoning with tool-use
10. **Self-Hostable**: Run locally with full control

---

## Comparison to Competitors

**vs OpenAI GPT-5/o3:**
- 95% cheaper for similar performance
- Open weights vs closed
- Visible reasoning vs hidden CoT
- V3.2-Speciale beats GPT-5 on AIME

**vs Anthropic Claude:**
- 10-30x cheaper
- Open source vs proprietary
- Better math benchmarks
- Less polished conversational style

**vs Qwen:**
- Similar MoE approach
- Better reasoning benchmarks
- More aggressive pricing
- R1 distills into Qwen models

---

## Model Evolution Timeline

```
Dec 2024: DeepSeek V3 (original)
Jan 2025: DeepSeek R1 (reasoning breakthrough)
Jan 2025: R1 Distill series (democratized reasoning)
Mar 2025: DeepSeek V3 0324 (update)
May 2025: R1 0528 (major reasoning upgrade)
Aug 2025: DeepSeek V3.1 (hybrid modes)
Sep 2025: V3.1 Terminus (stability)
Sep 2025: V3.2-Exp (sparse attention)
Nov 2025: DeepSeekMath V2 (proof verification)
Dec 2025: V3.2 + V3.2-Speciale (flagship)
```

---

## Deployment Notes

**Self-Hosting Requirements:**
- **V3.2 / V3.1 / R1**: 8x H100 80GB (or 8x A100 80GB)
- **R1 Distill Llama 70B**: 2x A100 or 4x RTX 4090
- **R1 Distill Qwen 32B**: 2x RTX 4090 or 1x A100
- **R1 Distill Qwen 14B**: 1x RTX 4090 or RTX 3090

**Supported Frameworks:**
- vLLM (recommended)
- SGLang (DeepSeek optimized)
- TensorRT-LLM
- Transformers (reference only)

**Quantization:**
- FP8 (production quality)
- INT8 (near-perfect accuracy)
- INT4 (>97% accuracy recovery)