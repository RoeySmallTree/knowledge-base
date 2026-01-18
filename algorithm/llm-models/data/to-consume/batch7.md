# NousResearch and Sao10K AI Models Analysis

## Executive Summary

This document provides comprehensive analysis of AI models from two leading open-source AI research organizations: NousResearch (steerable, user-aligned reasoning models) and Sao10K (creative roleplay and storytelling specialists).

---

## NOUSRESEARCH

NousResearch is an AI research lab focused on creating neutrally-aligned, steerable language models that prioritize user needs over corporate ethics codes.

---

### Nous Hermes 4 70B

#### Quick Reference Card

| Field | Value |
|-------|-------|
| **Short Description** | Frontier hybrid-reasoning model with user alignment |
| **Active Parameters** | 70B |
| **Creative Score** | 7.5/10 |
| **Logical Score** | 7.5/10 |
| **Efficiency Score** | 8.5/10 |
| **Recommendation** | 8/10 |

#### Characteristics & Personality
`User-Aligned, Hybrid-Reasoner, Non-Sycophantic, Steerable, Creative, Uncensored, Neutral, Anti-Lecture, Humanistic, Transparent-Thinker`

#### Best For
Complex reasoning with transparent thought processes, math/code/STEM problems, creative writing and roleplay, agentic applications with function calling, tasks requiring schema-adherent outputs, users who want models that follow their instructions without moralizing

#### Special Capabilities
`Hybrid Reasoning Mode, Think Tags, Function Calling, JSON Mode, Schema Adherence, Tool Use, Structured Outputs, RefusalBench SOTA, Reasoning Toggle`

#### Special Properties & Notes
- SOTA on RefusalBench (57.1%) - beats GPT-4o and Claude Sonnet 4
- 50x more training data than Hermes 3 (1.2B → 60B tokens)
- Trained on 192 NVIDIA B200 GPUs
- Toggle reasoning on/off via boolean parameter
- FP8 quantized version available for efficiency

#### Technical Specifications

| Attribute | Value |
|-----------|-------|
| Base Model | Meta Llama-3.1-70B |
| Parameters | 70B |
| Context Window | 131,072 tokens |
| Training Data | ~5M samples / ~60B tokens |
| Release Date | August 26, 2025 |
| License | Llama 3.1 Community |

#### Pricing

| Provider | Input (per 1M) | Output (per 1M) |
|----------|----------------|-----------------|
| OpenRouter | $0.11 | $0.38 |

#### Benchmark Performance

| Benchmark | Score |
|-----------|-------|
| Ethics | 99.0% |
| Hallucination Prevention | 98.0% |
| General Knowledge | 96.5% |
| RefusalBench | 57.1% (SOTA) |
| Reliability | 95% |

**API Model String**: `nousresearch/hermes-4-70b`

---

### Nous DeepHermes 3 Mistral 24B Preview

#### Quick Reference Card

| Field | Value |
|-------|-------|
| **Short Description** | Deep-thinking reasoning model with dual-mode operation |
| **Active Parameters** | 24B |
| **Creative Score** | 6/10 |
| **Logical Score** | 8/10 |
| **Efficiency Score** | 7.5/10 |
| **Recommendation** | 7/10 |

#### Characteristics & Personality
`Deep-Thinker, Dual-Mode, Analytical, Function-Caller, Schema-Adherent, Methodical, Deliberate, R1-Distilled, Systematic, Problem-Solver`

#### Best For
Complex mathematical problem-solving, multi-step reasoning tasks, agent-based applications requiring function calls, structured data extraction, tutoring scenarios with visible reasoning chains, analytical tasks requiring extended deliberation

#### Special Capabilities
`Deep Thinking Mode, Think Tags (up to 13K tokens), Function Calling, JSON Mode, Schema Adherence, Multi-Turn Reasoning, R1 Distillation, Tool Use, Dual-Mode Toggle`

#### Special Properties & Notes
- Fine-tuned via distillation from R1
- Can think using up to 13,000 tokens for difficult problems
- Toggle between intuitive and deep reasoning via system prompt
- Preview model (may have updates coming)
- Free tier available on OpenRouter

#### Technical Specifications

| Attribute | Value |
|-----------|-------|
| Base Model | Mistral-Small-24B-Base-2501 |
| Parameters | 24B |
| Context Window | 32K tokens |
| VRAM Required | ~47.3GB (BF16) |
| License | Apache 2.0 |

#### Pricing

| Provider | Input (per 1M) | Output (per 1M) |
|----------|----------------|-----------------|
| OpenRouter | ~$0.18 | ~$0.40 |
| OpenRouter (Free) | $0.00 | $0.00 |

**API Model String**: `nousresearch/deephermes-3-mistral-24b-preview`, `nousresearch/deephermes-3-mistral-24b-preview:free`

---

### Nous Hermes 3 70B Instruct

#### Quick Reference Card

| Field | Value |
|-------|-------|
| **Short Description** | Flagship generalist with advanced agentic capabilities |
| **Active Parameters** | 70B |
| **Creative Score** | 8/10 |
| **Logical Score** | 7/10 |
| **Efficiency Score** | 7/10 |
| **Recommendation** | 7.5/10 |

#### Characteristics & Personality
`Steerable, Agentic, Creative, Coherent, User-Aligned, Roleplayer, Long-Context, Multi-Turn, Tool-User, Persona-Maintainer`

#### Best For
Sophisticated AI assistants, interactive storytelling and roleplay, agentic workflows with tool use, extended multi-turn conversations, RAG applications, character-based interactions requiring consistency

#### Special Capabilities
`Function Calling, Tool Use, ChatML Format, RAG Document Extraction, Structured JSON, Internal Monologue, Long-Context Coherence, Multi-Turn Memory, System Prompt Adherence`

#### Special Properties & Notes
- Competitive or superior to Llama 3.1 Instruct
- 405B version available (SOTA among open-weight)
- Trained with SFT + DPO phases
- ChatML prompt format for OpenAI compatibility
- Technical report available (arXiv:2408.11857)

#### Technical Specifications

| Attribute | Value |
|-----------|-------|
| Base Model | Meta Llama-3.1-70B |
| Parameters | 70B |
| Context Window | 65.5K-131K tokens |
| Training Data | 270M response + 120M instruction tokens |
| Release Date | August 18, 2024 |
| License | Llama 3.1 Community |

#### Pricing

| Provider | Input (per 1M) | Output (per 1M) |
|----------|----------------|-----------------|
| OpenRouter | $0.30 | $0.30 |

**API Model String**: `nousresearch/hermes-3-llama-3.1-70b`

---

### NousResearch Hermes 2 Pro - Llama-3 8B

#### Quick Reference Card

| Field | Value |
|-------|-------|
| **Short Description** | Efficient agentic model optimized for function calling |
| **Active Parameters** | 8B |
| **Creative Score** | 6/10 |
| **Logical Score** | 7/10 |
| **Efficiency Score** | 9/10 |
| **Recommendation** | 7.5/10 |

#### Characteristics & Personality
`Agentic, Structured, Efficient, Versatile, Tool-Focused, Lightweight, Edge-Ready, Function-Caller, Schema-Compliant, Fast`

#### Best For
AI assistants requiring function calling, structured data extraction, API integration applications, edge deployment on consumer hardware, rapid prototyping with agentic features, budget-conscious agentic workflows

#### Special Capabilities
`Function Calling (90% accuracy), JSON Mode (84% accuracy), Agentic Tokens (<tools>/<tool_call>/<tool_response>), Streaming Tool Calls, ChatML Format, Multi-Turn Function Calling, Schema Adherence`

#### Special Properties & Notes
- 90% accuracy on function calling benchmarks
- 84% accuracy on structured JSON output
- Dedicated single tokens for tool parsing (streaming compatible)
- Collaboration with Fireworks.AI
- Runs on ~5GB VRAM (4-bit quantized)
- Exceeds Llama-3 8B Instruct on AGIEval, GPT4All, TruthfulQA, BigBench

#### Technical Specifications

| Attribute | Value |
|-----------|-------|
| Base Model | Meta Llama-3-8B |
| Parameters | 8B |
| Context Window | 8,192 tokens |
| VRAM Required | ~5GB (4-bit), ~16GB (full) |
| Release Date | May 2024 |
| License | Llama 3 Community |

#### Pricing

| Provider | Input (per 1M) | Output (per 1M) |
|----------|----------------|-----------------|
| OpenRouter | ~$0.05 | ~$0.10 |

#### Benchmark Performance

| Benchmark | Score |
|-----------|-------|
| Function Calling | 90% |
| JSON Structured Output | 84% |
| Email Classification | 95.0% |
| Ethics | 98.0% |
| Speed Percentile | 91st |
| Price Percentile | 96th |
| Reliability Percentile | 97th |

**API Model String**: `nousresearch/hermes-2-pro-llama-3-8b`

---

## SAO10K

Sao10K is a prolific model creator specializing in creative roleplay, storytelling, and narrative AI. Known for the Euryale, Stheno, and Lunaris series.

---

### Sao10K Llama 3.3 Euryale 70B (v2.3)

#### Quick Reference Card

| Field | Value |
|-------|-------|
| **Short Description** | Premier creative roleplay model with exceptional spatial awareness |
| **Active Parameters** | 70B |
| **Creative Score** | 9/10 |
| **Logical Score** | 6/10 |
| **Efficiency Score** | 7/10 |
| **Recommendation** | 8.5/10 |

#### Characteristics & Personality
`Creative, Spatial-Aware, Character-Consistent, Non-Restrictive, Immersive, Narrative-Driven, Prompt-Adherent, Uncensored, Storyteller, World-Builder`

#### Best For
Immersive storytelling, character-driven roleplay, interactive fiction, creative writing assistance, text-based adventure games, extended narrative sessions, world-building, character embodiment

#### Special Capabilities
`131K Context Window, 16K Output Tokens, Spatial Awareness, Prompt Adherence, Character Consistency, Non-Restrictive Content, Extended Narrative Coherence, Environment Tracking, Direct Training (not LoRA extracted)`

#### Special Properties & Notes
- Direct successor to v2.2, built on Llama 3.3 (not 3.1)
- NOT trained using LoRA extraction (full fine-tune)
- Trained with Liger optimization plugins
- Strong prompt adherence while remaining non-restrictive
- Community favorite for creative RP
- Recommended settings: temp 1.1, min_p 0.1

#### Technical Specifications

| Attribute | Value |
|-----------|-------|
| Base Model | Meta Llama-3.3-70B-Instruct |
| Parameters | 70B |
| Context Window | 131,072 tokens |
| Output Limit | 16,384 tokens |
| Training Method | Full fine-tune (LoRA r=128) |
| Release Date | December 18, 2024 |
| License | CC-BY-NC-4.0 |

#### Pricing

| Provider | Input (per 1M) | Output (per 1M) |
|----------|----------------|-----------------|
| OpenRouter | $0.65 | $0.75 |

**API Model String**: `sao10k/l3.3-euryale-70b`

---

### Sao10K Llama 3.1 Euryale 70B v2.2

#### Quick Reference Card

| Field | Value |
|-------|-------|
| **Short Description** | Refined creative roleplay model with Claude-enhanced datasets |
| **Active Parameters** | 70B |
| **Creative Score** | 8.5/10 |
| **Logical Score** | 5.5/10 |
| **Efficiency Score** | 6.5/10 |
| **Recommendation** | 7/10 |

#### Characteristics & Personality
`Spatial-Aware, Multi-Turn, Creative, Balanced, Adherent, Narrative-Focused, Character-Driven, Claude-Enhanced, Refined, Coherent`

#### Best For
Extended roleplay scenarios, creative storytelling, character-based interactions, narrative content generation, multi-turn creative sessions, users who prefer 32K context over 131K

#### Special Capabilities
`32K Context Window, Claude-Enhanced Training Data, Spatial Awareness, Reasoning Datasets, System Prompt Adherence, Multi-Turn Coherency, 55% More RP Examples, 40% More Creative Writing`

#### Special Properties & Notes
- Same dataset as Stheno 3.4
- Instruct data replaced with Claude 3.5 Sonnet/Opus answers
- 55% more roleplay examples from Gryphe's Charcard sets
- 40% more creative writing examples
- Developer notes: "Llama 3.1 is meh" - may bug occasionally
- Superseded by v2.3 but still solid choice
- Trained on 8x A100s (~4 days)

#### Technical Specifications

| Attribute | Value |
|-----------|-------|
| Base Model | Meta Llama-3.1-70B-Instruct |
| Parameters | 70B |
| Context Window | 32,768 tokens |
| VRAM Required | ~141.9GB (BF16) |
| Training | 2-epoch fine-tuning |
| Release Date | August 28, 2024 |
| License | CC-BY-NC-4.0 |

#### Pricing

| Provider | Input (per 1M) | Output (per 1M) |
|----------|----------------|-----------------|
| OpenRouter | ~$0.50 | ~$0.60 |

**API Model String**: `sao10k/l3-euryale-70b`

---

### Sao10K Llama 3 8B Lunaris

#### Quick Reference Card

| Field | Value |
|-------|-------|
| **Short Description** | Strategic 5-model merge balancing creativity and logic |
| **Active Parameters** | 8B |
| **Creative Score** | 7.5/10 |
| **Logical Score** | 6/10 |
| **Efficiency Score** | 8.5/10 |
| **Recommendation** | 7/10 |

#### Characteristics & Personality
`Balanced, Character-Focused, Contextual, Versatile, Merged, Creative-Logical, Efficient, Persona-Maintainer, Emotionally-Deep, Generalist`

#### Best For
Interactive roleplay on a budget, character-driven storytelling, creative text generation, conversational AI, consumer hardware deployment, users wanting creative capabilities at 8B scale

#### Special Capabilities
`TIES Merge (5 models), Character Embodiment, Emotional Depth, Contextual Awareness, Balanced Creativity-Logic, Consumer Hardware Compatible, Multiple Quantization Options`

#### Special Properties & Notes
- Strategic merge of 5 models using TIES method:
  - Meta-Llama-3-8B-Instruct (base)
  - L3-8B-sunfall-v0.1 (RP enhancement)
  - Jamet-8B-L3-MK1 (storytelling)
  - badger-iota-llama-3-8b (general knowledge)
  - Stheno-3.2-Beta (creative RP)
- Developer: "Improvement over Stheno v3.2"
- "Merging is black box magic"
- Outperforms many 15B-70B models in specific tasks
- Recommended: temp 1.4, min_p 0.1

#### Technical Specifications

| Attribute | Value |
|-----------|-------|
| Base Architecture | Meta Llama-3-8B |
| Parameters | 8B |
| Context Window | 8K tokens |
| Merge Method | TIES (density-weighted) |
| VRAM Required | ~16.1GB (BF16), 4-10GB (quantized) |
| License | Llama 3 Community |

#### Quantization Options

| Quantization | Size | RAM Needed |
|--------------|------|------------|
| IQ2_XS | 2.96GB | ~4GB |
| Q4_K_M | ~5GB | 4-6GB |
| Q5_K_M | ~6GB | 6-8GB |
| Q8_0 | 7.95GB | 8-10GB |

#### Pricing

| Provider | Input (per 1M) | Output (per 1M) |
|----------|----------------|-----------------|
| OpenRouter | ~$0.05 | ~$0.10 |

**API Model String**: `sao10k/l3-lunaris-8b`

---

## Cross-Provider Comparison

### Complete Model Matrix

| Model | Active Params | Creative | Logical | Efficiency | Recommendation |
|-------|---------------|----------|---------|------------|----------------|
| Hermes 4 70B | 70B | 7.5/10 | 7.5/10 | 8.5/10 | 8/10 |
| DeepHermes 3 24B | 24B | 6/10 | 8/10 | 7.5/10 | 7/10 |
| Hermes 3 70B | 70B | 8/10 | 7/10 | 7/10 | 7.5/10 |
| Hermes 2 Pro 8B | 8B | 6/10 | 7/10 | 9/10 | 7.5/10 |
| Euryale 70B v2.3 | 70B | 9/10 | 6/10 | 7/10 | 8.5/10 |
| Euryale 70B v2.2 | 70B | 8.5/10 | 5.5/10 | 6.5/10 | 7/10 |
| Lunaris 8B | 8B | 7.5/10 | 6/10 | 8.5/10 | 7/10 |

### Specialization Matrix

| Model | Reasoning | Creative | Roleplay | Function Calling | Structured Output |
|-------|-----------|----------|----------|------------------|-------------------|
| Hermes 4 70B | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| DeepHermes 3 24B | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Hermes 3 70B | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Hermes 2 Pro 8B | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Euryale 70B v2.3 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ |
| Euryale 70B v2.2 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ |
| Lunaris 8B | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ |

### Pricing Comparison

| Model | Input $/1M | Output $/1M | Context |
|-------|-----------|-------------|---------|
| Hermes 4 70B | $0.11 | $0.38 | 131K |
| DeepHermes 3 24B | ~$0.18 | ~$0.40 | 32K |
| DeepHermes 3 24B (Free) | $0.00 | $0.00 | 32K |
| Hermes 3 70B | $0.30 | $0.30 | 131K |
| Hermes 2 Pro 8B | ~$0.05 | ~$0.10 | 8K |
| Euryale 70B v2.3 | $0.65 | $0.75 | 131K |
| Euryale 70B v2.2 | ~$0.50 | ~$0.60 | 32K |
| Lunaris 8B | ~$0.05 | ~$0.10 | 8K |

---

## Use Case Recommendations

### For Hybrid Reasoning Tasks
**Recommended: Hermes 4 70B (8/10) or DeepHermes 3 24B (7/10)**
- Transparent thought processes with `<think>` tags
- Complex problem-solving with visible reasoning

### For Function Calling / Agentic Applications
**Recommended: Hermes 2 Pro 8B (7.5/10 - efficient) or Hermes 4 70B (8/10 - quality)**
- 90%+ accuracy on function calling
- Dedicated tool use tokens

### For Immersive Storytelling
**Recommended: Euryale 70B v2.3 (8.5/10)**
- 131K context for extended narratives
- Exceptional spatial awareness
- Best creative model in this set

### For Budget Creative Work
**Recommended: Lunaris 8B (7/10)**
- Consumer hardware compatible
- Strong creative merge at 8B scale

---

## API Model Strings Summary

| Provider | Model String |
|----------|-------------|
| NousResearch | `nousresearch/hermes-4-70b` |
| NousResearch | `nousresearch/deephermes-3-mistral-24b-preview` |
| NousResearch | `nousresearch/deephermes-3-mistral-24b-preview:free` |
| NousResearch | `nousresearch/hermes-3-llama-3.1-70b` |
| NousResearch | `nousresearch/hermes-2-pro-llama-3-8b` |
| Sao10K | `sao10k/l3.3-euryale-70b` |
| Sao10K | `sao10k/l3-euryale-70b` |
| Sao10K | `sao10k/l3-lunaris-8b` |

---

## Key Themes by Provider

### NousResearch
- **User Alignment**: Models for user needs, not corporate ethics
- **Hybrid Reasoning**: Toggle between fast and deliberate
- **Reduced Censorship**: SOTA RefusalBench, no lecturing
- **Function Calling**: Industry-leading agentic capabilities

### Sao10K
- **Creative Specialization**: Optimized for roleplay/storytelling
- **Spatial Awareness**: Exceptional environment tracking
- **Iterative Refinement**: v2.1→v2.2→v2.3 evolution
- **Merge Innovation**: Strategic model combination