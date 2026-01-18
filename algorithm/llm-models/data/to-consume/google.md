# Google Gemini/Gemma Models Analysis

---

## Models Removed & Reasons

From your 13 models, I've curated to **6 distinct models**:

| Model Removed | Reason |
|---------------|--------|
| **Gemini 2.5 Flash Preview 09-2025** | Superseded by stable Gemini 2.5 Flash |
| **Gemini 2.5 Flash Lite Preview 09-2025** | Superseded by stable 2.5 Flash Lite |
| **Gemini 2.5 Pro Preview 06-05** | Superseded by stable Gemini 2.5 Pro |
| **Gemini 2.5 Pro Preview 05-06** | Deprecated June 19, 2025 |
| **Gemma 3 27B (free)** | Same model as paid - consolidate to one entry |
| **Gemini 2.0 Flash Lite** | Superseded by Gemini 2.5 Flash Lite |
| **Gemini 2.0 Flash** | Superseded by Gemini 2.5 Flash & 3 Flash |

**All 6 kept models support structured output (JSON schema, function calling).**

---

## Gemini 3 Pro Preview

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Most-Intelligent, Deep-Thinker, Multimodal-Master, Research-Grade |
| **Parameters** | Undisclosed |
| **Creative Score** | 8.5/10 |
| **Logical Score** | **10/10** |
| **Efficiency Score** | 7.0/10 |
| **Short Description** | Google's most intelligent model - #1 globally on reasoning benchmarks |
| **Special Properties** | 1M context; 64K output; Deep Think mode; knowledge cutoff Jan 2025; PhD-level reasoning; LMArena #1 (1501 Elo); tool use; search grounding; code execution |
| **Best For** | Research, complex reasoning, PhD-level problems, multimodal analysis, long documents |
| **Special Capabilities** | Function calling, structured output, search grounding, code execution, Deep Think mode, image/video/audio/PDF input |
| **Recommendation Score** | **9.5/10** |

**Pricing** (per 1M tokens):
- Input: $2.00
- Output: $12.00
- Audio Input: $1.00
- Context Caching: 90% savings
- Batch API: 50% savings

**Benchmarks**:
- LMArena: **1501 Elo** (#1)
- GPQA Diamond: **91.9%**
- Humanity's Last Exam: **37.5%** (41.0% with Deep Think)
- MathArena Apex: **23.4%** (SOTA)
- MMMU-Pro: **81.0%**
- Video-MMMU: **87.6%**
- SimpleQA Verified: **72.1%**
- SWE-bench Verified: 76.2%
- ARC-AGI-2: 31.1% (45.1% with Deep Think)
- BigLaw Bench: 87.9%
- Intelligence Index: **73** (#1 globally)

**Notes**: Released Nov 18, 2025. Google's most capable model. Deep Think mode further enhances reasoning. #1 on Intelligence Index, ahead of Claude Opus 4.5 (70) and GPT-5.1 (70). Processing over 1T tokens/day on API. Best for tasks requiring maximum intelligence.

---

## Gemini 3 Flash Preview

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Speed-King, Value-Leader, Pro-Grade-Reasoning, Agentic |
| **Parameters** | Undisclosed |
| **Creative Score** | 7.5/10 |
| **Logical Score** | 9.0/10 |
| **Efficiency Score** | **10/10** |
| **Short Description** | Frontier intelligence at Flash speed - beats 2.5 Pro on 18/20 benchmarks |
| **Special Properties** | 1M context; 64K output; 3x faster than 2.5 Pro; Pro-grade reasoning at Flash cost; thinking level parameter; visual code execution for zoom/count/edit |
| **Best For** | Production workloads, high-volume tasks, agentic workflows, real-time apps |
| **Special Capabilities** | Function calling, structured output, search grounding, code execution, thinking budget control |
| **Recommendation Score** | **9.5/10** |

**Pricing** (per 1M tokens):
- Input: $0.50
- Output: $3.00
- Audio Input: $1.00
- Context Caching: 90% savings
- Batch API: 50% savings

**Benchmarks**:
- SWE-bench Verified: **78%** (beats Gemini 3 Pro!)
- GPQA Diamond: **90.4%**
- Humanity's Last Exam: 33.7%
- MMMU-Pro: **81.2%** (SOTA)
- BigLaw Bench: 7% improvement over predecessor
- Intelligence Index: **71** (13 point jump from 2.5 Flash)
- AA-Omniscience: **#1** (highest knowledge accuracy)

**Notes**: Released Dec 17, 2025. Default model in Gemini app and AI Mode in Search. Surpasses 2.5 Pro while being 3x faster at 1/4 the cost. Uses 30% fewer tokens on average. Best price-performance ratio in frontier AI. Only 2-point drop from Pro on Intelligence Index.

---

## Gemini 2.5 Pro

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Previous-Flagship, Stable, Long-Context, Coding-Strong |
| **Parameters** | Undisclosed |
| **Creative Score** | 7.5/10 |
| **Logical Score** | 8.5/10 |
| **Efficiency Score** | 7.5/10 |
| **Short Description** | Stable previous-gen flagship - strong for coding and agents |
| **Special Properties** | 1M context; thinking capabilities; hybrid reasoning; knowledge cutoff Jan 2025; stable GA release |
| **Best For** | Production workloads requiring stability, coding, agentic tasks |
| **Special Capabilities** | Function calling, structured output, search grounding, code execution, thinking mode |
| **Recommendation Score** | 8.0/10 |

**Pricing** (per 1M tokens):
- Input: ~$2.50
- Output: ~$10.00

**Benchmarks**:
- Strong across reasoning, coding, multimodal
- Superseded by Gemini 3 series on most benchmarks

**Notes**: Released stable June 2025. Still excellent for production but superseded by 3 series. Consider migrating to Gemini 3 Flash for better performance at lower cost.

---

## Gemini 2.5 Flash

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Balanced, Thinking-Enabled, Value-Tier |
| **Parameters** | Undisclosed |
| **Creative Score** | 7.0/10 |
| **Logical Score** | 8.0/10 |
| **Efficiency Score** | 9.0/10 |
| **Short Description** | First Flash model with thinking - great balance of price/performance |
| **Special Properties** | 1M context; thinking budget control; hybrid reasoning; stable GA |
| **Best For** | Cost-conscious production, balanced workloads, thinking-enabled tasks |
| **Special Capabilities** | Function calling, structured output, search grounding, code execution, thinking mode |
| **Recommendation Score** | 7.5/10 |

**Pricing** (per 1M tokens):
- Input: $0.30
- Output: $2.50

**Notes**: Released May 2025. First Flash with thinking capabilities. Superseded by Gemini 3 Flash which is faster and smarter at similar price. Consider upgrading.

---

## Gemini 2.5 Flash Lite

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Budget-King, High-Throughput, Low-Latency |
| **Parameters** | Undisclosed |
| **Creative Score** | 6.0/10 |
| **Logical Score** | 7.0/10 |
| **Efficiency Score** | **10/10** |
| **Short Description** | Lowest cost 2.5 model - optimized for high throughput |
| **Special Properties** | 1M context; thinking off by default; lowest latency in 2.5 family; best cost-efficiency |
| **Best For** | Classification, summarization at scale, high-volume simple tasks |
| **Special Capabilities** | Function calling, structured output, search grounding, code execution, optional thinking |
| **Recommendation Score** | 8.0/10 |

**Pricing** (per 1M tokens):
- Input: **$0.10**
- Output: **$0.40**

**Notes**: Released stable July 2025. Thinking off by default for speed. Best for high-throughput, low-complexity tasks. Exceptional value for bulk processing.

---

## Gemma 3 27B

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Open-Source, Multimodal, Local-Friendly, Vision-Enabled |
| **Total Parameters** | 27B (Dense) |
| **Creative Score** | 6.5/10 |
| **Logical Score** | 7.5/10 |
| **Efficiency Score** | 9.0/10 |
| **Short Description** | Best open-source multimodal model from Google |
| **Special Properties** | 128K context; SigLIP vision encoder; 14T training tokens; 140+ languages; runs on consumer GPUs |
| **Best For** | Self-hosting, local deployment, privacy-sensitive applications, edge |
| **Special Capabilities** | Text + image input, structured output, vision understanding |
| **Recommendation Score** | 8.5/10 |

**Pricing**:
- API: ~$0.04/$0.15 per 1M tokens
- Self-hosted: Free (Apache 2.0 license)

**Benchmarks**:
- LMSYS Arena: 1338 Elo (top 10 open models)
- MMLU-Pro: 67.5%
- MATH: 89.0%
- LiveCodeBench: 29.7%

**Notes**: Released Mar 12, 2025. Open weights under permissive license. Competes with models 10x its size. Runs on single RTX 4090 with quantization. SigLIP vision encoder for image understanding.

---

## Summary Comparison Table

| Model | Creative | Logic | Efficiency | Context | Price (In/Out) | Rec |
|-------|----------|-------|------------|---------|----------------|-----|
| **Gemini 3 Pro** | 8.5 | **10** | 7.0 | 1M | $2/$12 | **9.5** |
| **Gemini 3 Flash** | 7.5 | 9.0 | **10** | 1M | $0.50/$3 | **9.5** |
| **Gemini 2.5 Pro** | 7.5 | 8.5 | 7.5 | 1M | $2.50/$10 | 8.0 |
| **Gemini 2.5 Flash** | 7.0 | 8.0 | 9.0 | 1M | $0.30/$2.50 | 7.5 |
| **Gemini 2.5 Flash Lite** | 6.0 | 7.0 | **10** | 1M | **$0.10/$0.40** | 8.0 |
| **Gemma 3 27B** | 6.5 | 7.5 | 9.0 | 128K | $0.04/$0.15 | 8.5 |

---

## Pricing Overview

| Model | Input ($/1M) | Output ($/1M) | Notes |
|-------|--------------|---------------|-------|
| **Gemini 3 Pro** | $2.00 | $12.00 | Best intelligence |
| **Gemini 3 Flash** | $0.50 | $3.00 | Best value frontier |
| **Gemini 2.5 Pro** | ~$2.50 | ~$10.00 | Previous flagship |
| **Gemini 2.5 Flash** | $0.30 | $2.50 | Balanced |
| **Gemini 2.5 Flash Lite** | **$0.10** | **$0.40** | Cheapest 2.5 |
| **Gemma 3 27B** | $0.04 | $0.15 | Or free self-hosted |

**Cost Optimization:**
- Context Caching: 90% savings on repeated content
- Batch API: 50% savings for async processing
- Free tier available in Google AI Studio (limited)

---

## Key Architectural Features

### Deep Think Mode (3 Pro)
- Enhanced reasoning for complex problems
- 41.0% on Humanity's Last Exam (vs 37.5% standard)
- 45.1% on ARC-AGI-2 (vs 31.1% standard)
- Optional - increases latency and cost

### Thinking Budget Control
- All 2.5+ models support thinking
- API parameter to control reasoning depth
- Flash Lite has thinking off by default
- Thinking level: minimal/low/medium/high

### Multimodal Inputs
- Text, Image, Video, Audio, PDF
- 1M token context (except Gemma: 128K)
- Visual code execution in 3 Flash (zoom/count/edit)

### Tool Use
- Function calling
- Search grounding (Google Search integration)
- Code execution
- URL context
- Structured outputs (JSON schema)

---

## CABAL Recommendations by Use Case

| Use Case | Recommended Model | Rationale |
|----------|-------------------|-----------|
| **Maximum Intelligence** | Gemini 3 Pro | #1 globally, Deep Think mode |
| **Production Workloads** | Gemini 3 Flash | Pro-grade at 1/4 cost, 3x faster |
| **High-Volume Tasks** | Gemini 2.5 Flash Lite | $0.10/$0.40, highest throughput |
| **Agentic Coding** | Gemini 3 Flash | 78% SWE-bench, beats 3 Pro |
| **Self-Hosting** | Gemma 3 27B | Open weights, runs locally |
| **Long Documents** | Gemini 3 Pro/Flash | 1M context, best comprehension |
| **Budget Classification** | Gemini 2.5 Flash Lite | Lowest cost with quality |

---

## Google Unique Strengths

1. **Context Length Leadership**: 1M tokens across all Gemini models
2. **Reasoning Dominance**: #1 on Intelligence Index (73 for 3 Pro)
3. **Multimodal Excellence**: Best video/image understanding
4. **Speed + Intelligence**: 3 Flash proves you don't have to choose
5. **Deep Think Mode**: Optional enhanced reasoning
6. **Search Grounding**: Native Google Search integration
7. **Price-Performance**: 3 Flash beats 2.5 Pro at 1/4 cost
8. **Open Source Option**: Gemma 3 27B competes with 10x larger models
9. **Thinking Control**: Fine-grained reasoning budget
10. **Ecosystem Integration**: Native to Google Cloud, Android, Chrome

---

## Comparison to Competitors

**vs OpenAI GPT-5.x:**
- Gemini 3 Pro leads on Intelligence Index (73 vs 70)
- Better multimodal understanding
- Larger context (1M vs 256K-400K)
- Comparable pricing

**vs Anthropic Claude:**
- Better pure reasoning (GPQA, HLE)
- Larger context window
- Claude leads on coding (SWE-bench)
- Claude has lower hallucination rates

**vs DeepSeek:**
- Much more expensive
- Better multimodal
- Closed source vs MIT license
- Better tool integration

---

## Model Evolution Timeline

```
Dec 2024: Gemini 2.0 Flash Experimental
Jan 2025: Gemini 2.0 Flash GA
Feb 2025: Gemini 2.0 Pro, Flash Thinking
Mar 2025: Gemini 2.5 Pro Experimental, Gemma 3 27B
May 2025: Gemini 2.5 Flash GA
Jun 2025: Gemini 2.5 Pro GA, Flash Lite Preview
Jul 2025: Gemini 2.5 Flash Lite GA
Nov 2025: Gemini 3 Pro Preview, Deep Think
Dec 2025: Gemini 3 Flash Preview
```

---

## Migration Guidance

**From 2.5 Pro → 3 Flash:**
- Better performance at lower cost
- Update model string
- Same API format

**From 2.5 Flash → 3 Flash:**
- Significant intelligence upgrade
- 67% price increase but worth it
- 3x faster

**From 2.0 → 2.5/3:**
- Strongly recommended
- 2.0 series deprecated
- Better across all metrics

**API Model Strings:**
- Gemini 3 Pro: `gemini-3-pro-preview`
- Gemini 3 Flash: `gemini-3-flash-preview`
- Gemini 2.5 Pro: `gemini-2.5-pro`
- Gemini 2.5 Flash: `gemini-2.5-flash`
- Gemini 2.5 Flash Lite: `gemini-2.5-flash-lite`
- Gemma 3 27B: `gemma-3-27b-it`

---

## Deployment Notes

**Gemma 3 27B Self-Hosting:**
- Single GPU: RTX 4090 (24GB) with INT4 quantization
- Recommended: 2x RTX 4090 or 1x A100 for full precision
- Supports: vLLM, TensorRT-LLM, Transformers
- License: Apache 2.0 (commercial use allowed)

**Gemini API Access:**
- Google AI Studio (free tier available)
- Vertex AI (enterprise)
- Gemini API direct
- Android Studio, Gemini CLI, Antigravity