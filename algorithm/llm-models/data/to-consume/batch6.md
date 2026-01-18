# StepFun, TheDrummer, and TNG Tech AI Models Analysis

## Executive Summary

This document provides comprehensive analysis of AI models from three distinct providers: StepFun (multimodal reasoning), TheDrummer (creative writing specialists), and TNG Tech (DeepSeek merge experts). These models represent different niches in the AI ecosystem—from cost-effective multimodal intelligence to specialized creative writing and innovative model merging techniques.

---

## STEPFUN AI

### StepFun Step3

**Overview**
Step3 is StepFun's flagship multimodal reasoning model, representing a breakthrough in cost-effective inference through hardware-aware architecture design. Released in July 2025, it achieves state-of-the-art open-source performance while maintaining exceptional efficiency.

**Technical Specifications**

| Attribute | Value |
|-----------|-------|
| Architecture | Mixture-of-Experts (MoE) |
| Total Parameters | 321B |
| Active Parameters | 38B (~12% activation rate) |
| Context Window | 64K-66K tokens |
| Vision Encoder | 5B parameters |
| Pretraining Data | 20T text tokens + 4T image-text tokens |
| Languages | 10+ languages |
| Release Date | July 2025 |
| License | Apache 2.0 |

**Key Architectural Innovations**

1. **Multi-Matrix Factorization Attention (MFA)**
   - Novel attention mechanism reducing KV cache size and computation
   - Maintains high attention expressiveness
   - Enables deployment on both high-end and low-end accelerators

2. **Attention-FFN Disaggregation (AFD)**
   - Distributed inference system decoupling attention and FFN layers
   - Multi-level pipeline parallel scheduling
   - StepMesh communication library for low-latency GPU Direct RDMA

3. **Vision Processing**
   - Two-layer 2D convolution downsampling
   - Reduces visual tokens to 1/16 of original
   - Two-stage training: encoder perception → frozen encoder with LLM optimization

**Benchmark Performance**

| Benchmark | Score | Notes |
|-----------|-------|-------|
| MMMU | 74.2% | Highest among open-source VLMs, surpasses Gemini 2.5 Flash (73.2%) |
| Hallusion Bench | 64.2% | Outperforms Claude Opus 4 (59.9%), o3 (60.1%) |
| AIME 2025 | 82.9% | Strong mathematical reasoning |
| GPQA-Diamond | 73.0% | Graduate-level reasoning |
| LiveCodeBench | 67.1% | Code generation capability |
| MathVision | Industry-leading | Among open-source models |
| General Knowledge | 100% | Perfect accuracy (Benchable.ai) |
| Coding | 94.9% | 93rd percentile |
| Reasoning | 93.5% | 83rd percentile |
| Reliability | 99% | Success rate |

**Throughput Performance**
- 4039 tokens/GPU/s on Hopper GPUs (50ms SLA decoding)
- 1.74× faster than DeepSeek V3 (2324 tokens/GPU/s)
- Deployable on 8×48GB GPUs

**Pricing**

| Provider | Input (per 1M tokens) | Output (per 1M tokens) | Context |
|----------|----------------------|------------------------|---------|
| OpenRouter | $0.57 | $1.42 | 65K |
| SiliconFlow | $0.57 | $1.42 | 64K |
| Native API | Similar | Similar | 64K |

**Personality Traits**
- **Multimodal-Reasoner**: Strong vision-language integration
- **Cost-Optimizer**: Designed for minimal decoding costs
- **Precise**: High accuracy across benchmarks
- **Efficient**: 12% activation rate with full performance
- **Multilingual**: 10+ language support

**Best Use Cases**
- Complex multimodal reasoning tasks
- Cross-domain knowledge understanding
- Mathematical analysis with visual information
- Enterprise deployment requiring cost efficiency
- Real-world visual analysis applications

**Deployment Options**
- HuggingFace: stepfun-ai/step3
- GitHub: github.com/stepfun-ai/Step3
- ModelScope: Available
- Inference Engines: vLLM, SGLang (recommended)
- API: platform.stepfun.com (OpenAI/Anthropic-compatible)

**API Model String**: `stepfun-ai/step3`

---

## THEDRUMMER (BEAVERAI)

TheDrummer is a prolific model creator specializing in creative writing, roleplay, and storytelling models. All models are fine-tuned for expressive prose, uncensored content, and engaging narratives.

### TheDrummer Cydonia 24B V4.1

**Overview**
Cydonia 24B V4.1 is the flagship creative writing model from TheDrummer, built on Mistral Small 3.2 24B. It represents the culmination of the Cydonia series, offering exceptional creative writing without the typical "Mistral tuneisms."

**Technical Specifications**

| Attribute | Value |
|-----------|-------|
| Base Model | Mistral Small 3.2 24B (Text-Only) |
| Parameters | 24B |
| Context Window | 128K tokens |
| VRAM Required | ~47.3GB (BF16) |
| Precision | BF16 |
| Release | August 2025 |
| License | Community model |

**Benchmark Performance**

| Benchmark | Score | Percentile |
|-----------|-------|------------|
| Coding | 100% | #1 (at price point) |
| Instruction Following | 80.4% | 93rd percentile |
| General Knowledge | 95.7% | Strong |
| Ethics | 98.0% | Strong |
| IFEval (inst_level_loose) | 70.98% | - |
| IFEval (prompt_level_strict) | 56.38% | - |
| HellaSwag (acc_norm) | 84.49% | Improved over base |
| Reliability | 100% | Perfect success rate |
| Speed | 64th percentile | Top tier |
| Price | 81st percentile | Competitive |

**Key Features**
- Uncensored creative writing
- Excellent recall and prompt adherence
- No recycled content across swipes
- Balanced creativity (not overboard like Gemma)
- Non-purple prose
- Strong character card interpretation
- Doesn't feel like typical Mistral tunes

**Chat Templates Supported**
- Mistral v7 Tekken (recommended)
- ChatML for roleplay
- Alpaca for story/instruct

**Personality Traits**
- **Creative**: Rich, engaging prose
- **Precise**: Strong prompt adherence
- **Balanced**: Creativity without excess
- **Uncensored**: No content restrictions
- **Character-Aware**: Accurate card interpretation

**Best Use Cases**
- Long-form creative writing
- Roleplay scenarios
- Character-driven narratives
- Storytelling with weighty prose
- Dungeon Master / Narrator roles
- Coding assistance

**Available Formats**
- Original: TheDrummer/Cydonia-24B-v4.1
- GGUF: TheDrummer/Cydonia-24B-v4.1-GGUF
- iMatrix: bartowski/TheDrummer_Cydonia-24B-v4.1-GGUF
- EXL3: ArtusDev/TheDrummer_Cydonia-24B-v4.1-EXL3

**API Model String**: `thedrummer/cydonia-24b-v4.1`

---

### TheDrummer UnslopNemo 12B

**Overview**
UnslopNemo 12B is a specialized creative writing model focused on eliminating "slop"—the generic, repetitive outputs that plague many AI models. Built on Mistral NeMo 12B, it features a unique "unslopping" process that replaces repetitive words with varied synonyms.

**Technical Specifications**

| Attribute | Value |
|-----------|-------|
| Base Model | Mistral NeMo 12B |
| Parameters | 12B |
| Context Window | 32K-33K tokens (~24,000 words) |
| VRAM Required | ~24.5GB |
| Current Version | v4.1 |
| License | Community model |

**Training Innovation**
- ~90% of RP dataset "unslopped"
- Repetitive words replaced with varied synonyms
- Vocabulary expansion without coherence loss
- LoRA fine-tuning via Unsloth
- Focused on RP and storytelling data

**Key Features**
- Lively writing style
- More immersive narratives
- Expanded vocabulary
- Minimum "GPTisms"
- Pleasant literary language
- Appropriate narrative length
- Character voice consistency
- Strong adventure/RP optimization

**User-Reported Qualities**
- "Much more lively writing style than any other 12B tune"
- Good plot consistency
- Enhanced character voice differentiation
- Suitable for SillyTavern AI integration
- Effective for autocomplete prose writing

**Known Limitations**
- Sometimes describes user actions (takes user role)
- High positivity toward user
- Occasional setting/action confusion
- Some action repetition when uncertain of direction

**Personality Traits**
- **Creative**: Varied, expressive vocabulary
- **Adventure-Focused**: Designed for RP/storytelling
- **Anti-Slop**: Eliminates generic outputs
- **Immersive**: Rich narrative generation
- **Character-Consistent**: Maintains distinct voices

**Pricing**

| Provider | Input (per 1M tokens) | Output (per 1M tokens) |
|----------|----------------------|------------------------|
| OpenRouter | $0.40 | $0.40 |

**Best Use Cases**
- Adventure writing
- Interactive fiction
- Tabletop RPG support
- Creative writing assistance
- Novel chapter generation
- Extended game sessions

**Available Formats**
- Original: TheDrummer/UnslopNemo-12B-v4.1
- GGUF: TheDrummer/UnslopNemo-12B-v4.1-GGUF

**API Model String**: `thedrummer/unslopnemo-12b`

---

### TheDrummer Rocinante 12B

**Overview**
Named after Don Quixote's faithful horse, Rocinante 12B is a versatile creative writing model optimized for adventure storytelling and roleplay. It excels at generating rich, distinct prose with enhanced creativity.

**Technical Specifications**

| Attribute | Value |
|-----------|-------|
| Base Model | Mistral NeMo architecture |
| Parameters | 12.2B |
| Context Window | 16K-24K tokens |
| Precision | BF16 |
| Current Version | v1.1 |
| License | Community model |

**Training Data**
- ShareGPT
- WizardLM
- Wizard-Vicuna
- Custom creative writing datasets

**Key Features**
- "Moistier" vocabulary (richer word choices)
- Distinct, non-generic prose
- Cranked up creativity
- Adventure-filled storytelling
- Multiple chat template support
- Novel-style narrative preference

**Chat Templates Supported**
- ChatML (for roleplay)
- Alpaca (for story/instruct adventure)
- Mistral NeMo format

**Recommended Settings**
- Temperature 0.7: Familiar, controlled ride
- Temperature 1.2: "Nitro boost" creativity
- Use DRY sampler for optimal results

**User Feedback**
- "Best model up to 20B I ever tried"
- "Loves storytelling"
- Strong first-person narrative generation
- Prefers writing novels over chatting
- Excellent with minimal instructions
- Maintains engagement over long sessions

**Known Behaviors**
- Stubborn at start (prefers story over instructions)
- Sometimes ends stories with engagement requests
- Tendency toward optimistic/"happily ever after" endings
- Works best with good starting context

**Personality Traits**
- **Creative**: Enhanced vocabulary and expression
- **Adventure-Focused**: Optimized for narrative quests
- **Prose-Rich**: Distinct, engaging writing style
- **Independent**: Prefers autonomous storytelling
- **Optimistic**: Leans toward positive resolutions

**Pricing**

| Provider | Input (per 1M tokens) | Output (per 1M tokens) |
|----------|----------------------|------------------------|
| OpenRouter | $0.19 | $0.45 |
| NeuroRouters/LangDB | Similar | Similar |

**Best Use Cases**
- Creative writing/worldbuilding
- Interactive storytelling
- Roleplay scenarios
- First-person narrative generation
- Adventure game content
- Dungeon Master assistance

**Available Formats**
- Original: TheDrummer/Rocinante-12B-v1.1
- GGUF: TheDrummer/Rocinante-12B-v1.1-GGUF
- EXL2: Statuo's quantizations

**API Model String**: `thedrummer/rocinante-12b`

---

## TNG TECHNOLOGY CONSULTING

TNG Tech is a German technology consulting firm that pioneered the Assembly-of-Experts (AoE) methodology for merging large language models. Their Chimera models combine multiple DeepSeek variants without retraining.

### TNG DeepSeek R1T2 Chimera

**Overview**
R1T2 Chimera is the second-generation Chimera model, a "Tri-Mind" assembly combining three DeepSeek parent models. Released July 2025, it achieves an optimal balance between intelligence and inference cost, fixing the think-token consistency issues of its predecessor.

**Technical Specifications**

| Attribute | Value |
|-----------|-------|
| Architecture | DeepSeek MoE Transformer |
| Total Parameters | 671B |
| Parent Models | R1-0528, R1, V3-0324 |
| Construction Method | Assembly of Experts (AoE) |
| Context Window | 60K standard (tested to 130K) |
| Think Token | Consistent (fixed from R1T) |
| Release Date | July 2, 2025 |
| License | MIT |

**Performance Comparison**

| Metric | R1T2 vs R1 | R1T2 vs R1-0528 |
|--------|------------|-----------------|
| Speed | ~20% faster | >2× faster |
| Intelligence | Significantly higher | Slightly lower |
| Token Efficiency | 40% fewer output tokens | Much more efficient |
| Think Consistency | Consistent | Consistent |

**Benchmark Performance**

| Benchmark | R1T2 | Notes |
|-----------|------|-------|
| GPQA-Diamond | ~90-92% of R1-0528 | Strong graduate-level reasoning |
| AIME-24/25 | High | Mathematical reasoning |
| Aider Polyglot | Strong | Code generation |

**Key Improvements over R1T**
- Fixed <think> token consistency issue
- More refined assembly using fine-granular brain edits
- Tri-parent architecture (vs dual-parent)
- More reserved persona (between R1T and R1-0528)
- Better overall behavior and coherence

**Personality Characteristics**
- More reserved than R1T
- Not as reserved as R1-0528
- "Well-behaved and nice persona to talk to"
- Produces orderly, compact reasoning
- Fewer hallucinations than parent models

**Personality Traits**
- **Deep-Thinker**: Strong reasoning capabilities
- **Efficient**: 40% fewer output tokens
- **Balanced**: Intelligence vs speed sweet spot
- **Consistent**: Reliable think-token behavior
- **Orderly**: Compact, organized reasoning chains

**Pricing**

| Provider | Input (per 1M tokens) | Output (per 1M tokens) | Context |
|----------|----------------------|------------------------|---------|
| OpenRouter | $0.30 | $1.20 | 163.8K |
| OpenRouter (Free) | $0 | $0 | 163.8K |

**Best Use Cases**
- Long-context analysis (tested to 130K)
- Dialogue and open-ended generation
- Code generation and debugging
- Mathematical reasoning
- Drop-in replacement for R1
- Cost-effective alternative to R1-0528

**Technical Notes**
- Supports function calling (requires vLLM/SGLang patches)
- Tool call parser available for vLLM plugin system
- SGLang support requires manual patching until PR merged

**Deployment**
- HuggingFace: tngtech/DeepSeek-TNG-R1T2-Chimera
- OpenRouter: tngtech/deepseek-r1t2-chimera
- Chutes: Available

**API Model Strings**:
- `tngtech/deepseek-r1t2-chimera`
- `tngtech/deepseek-r1t2-chimera:free`

---

### TNG DeepSeek R1T Chimera (Original)

**Overview**
The original R1T Chimera was released April 26, 2025, as the first successful merge of 671B-parameter DeepSeek models. It combines V3-0324's efficiency with R1's reasoning capabilities through the novel Assembly-of-Experts methodology.

**Technical Specifications**

| Attribute | Value |
|-----------|-------|
| Architecture | DeepSeek MoE Transformer |
| Total Parameters | 671B (685B in some sources) |
| Parent Models | V3-0324, R1 |
| Construction Method | Assembly of Experts (AoE) |
| Context Window | 163.8K tokens |
| Release Date | April 27, 2025 |
| License | MIT |

**Construction Method**
- First successful merge at 671B scale
- Child model using V3's shared experts
- Custom merge of R1's routed experts
- No fine-tuning or distillation
- Direct neural network assembly

**Key Performance Characteristics**
- ~R1-level intelligence
- 40% fewer output tokens than R1
- Faster inference than R1
- More compact, orderly reasoning
- Fewer "wandering thoughts" than R1

**Innovation Highlights**
- Challenges conventional LLM training paradigms
- Demonstrates strategic model merging viability
- MoE architecture enables expert-layer combination
- Proves high-performance without costly retraining

**Known Limitation**
- <think> token inconsistency (fixed in R1T2)
- Recommended to upgrade to R1T2 unless specific R1T personality preferred

**Personality Traits**
- **Reasoning-Efficient**: R1 intelligence with fewer tokens
- **Compact**: Orderly thought processes
- **Hybrid**: Best of V3 speed and R1 intelligence
- **Grounded**: Fewer hallucinations
- **Concise**: Focused responses

**Adoption**
- Briefly #2 trending model on OpenRouter
- Over 1 billion tokens processed on OpenRouter
- TNG serverless platform: up to 5 billion tokens/day

**Pricing**

| Provider | Input (per 1M tokens) | Output (per 1M tokens) |
|----------|----------------------|------------------------|
| OpenRouter | $0.30 | $1.20 |
| OpenRouter (Free) | $0 | $0 |

**Best Use Cases**
- RAG applications
- Enterprise knowledge bases
- Customer support systems
- Research synthesis
- Drop-in R1 replacement (when R1T-specific traits preferred)

**Deployment**
- HuggingFace: tngtech/DeepSeek-R1T-Chimera
- OpenRouter: tngtech/deepseek-r1t-chimera
- Hardware: Validated on Nvidia and AMD platforms

**API Model Strings**:
- `tngtech/deepseek-r1t-chimera`
- `tngtech/deepseek-r1t-chimera:free`

---

## Cross-Provider Comparison

### Size and Architecture

| Model | Parameters | Active | Architecture | Context |
|-------|------------|--------|--------------|---------|
| Step3 | 321B | 38B | MoE | 64K |
| Cydonia 24B V4.1 | 24B | 24B | Dense | 128K |
| UnslopNemo 12B | 12B | 12B | Dense | 32K |
| Rocinante 12B | 12.2B | 12.2B | Dense | 24K |
| R1T2 Chimera | 671B | ~37B | MoE | 60K-130K |
| R1T Chimera | 671B | ~37B | MoE | 163.8K |

### Pricing Comparison

| Model | Input $/1M | Output $/1M | Free Tier |
|-------|-----------|-------------|-----------|
| Step3 | $0.57 | $1.42 | No |
| Cydonia 24B V4.1 | ~$0.20 | ~$0.50 | No |
| UnslopNemo 12B | $0.40 | $0.40 | No |
| Rocinante 12B | $0.19 | $0.45 | No |
| R1T2 Chimera | $0.30 | $1.20 | Yes |
| R1T Chimera | $0.30 | $1.20 | Yes |

### Specialization Matrix

| Model | Creative Writing | Reasoning | Coding | Multimodal | Roleplay |
|-------|-----------------|-----------|--------|------------|----------|
| Step3 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| Cydonia 24B V4.1 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ❌ | ⭐⭐⭐⭐⭐ |
| UnslopNemo 12B | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ❌ | ⭐⭐⭐⭐⭐ |
| Rocinante 12B | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ❌ | ⭐⭐⭐⭐⭐ |
| R1T2 Chimera | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ❌ | ⭐⭐⭐ |
| R1T Chimera | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ❌ | ⭐⭐⭐ |

---

## Use Case Recommendations

### For Multimodal Enterprise Applications
**Recommended: Step3**
- Best-in-class open-source VLM performance
- Exceptional cost efficiency
- Strong reasoning with visual understanding
- Deployable on accessible hardware

### For Creative Writing & Roleplay
**Recommended: Cydonia 24B V4.1 (quality) or UnslopNemo 12B (efficiency)**
- Cydonia offers best prose quality at 24B scale
- UnslopNemo eliminates repetitive outputs
- Both excel at character-driven narratives

### For Adventure Storytelling
**Recommended: Rocinante 12B**
- Optimized specifically for adventure narratives
- Strong autonomous storytelling
- Efficient at 12B scale

### For Cost-Effective Reasoning
**Recommended: R1T2 Chimera (Free tier)**
- R1-level intelligence at no cost
- 40% token efficiency
- Excellent for RAG and analysis

### For R1 Drop-in Replacement
**Recommended: R1T2 Chimera**
- 20% faster than R1
- Consistent think-token behavior
- Better persona characteristics

---

## Key Themes by Provider

### StepFun
1. **Hardware-Aware Design**: MFA and AFD co-design for minimal decoding costs
2. **Multimodal Excellence**: SOTA open-source VLM performance
3. **Efficiency Leadership**: 4039 tok/GPU/s vs 2324 for DeepSeek V3
4. **Practical Deployment**: Runs on 8×48GB GPUs

### TheDrummer
1. **Anti-Slop Philosophy**: Eliminating generic AI outputs
2. **Creative Specialization**: All models optimized for storytelling
3. **Uncensored Content**: No artificial restrictions
4. **Community-Driven**: Responsive to user feedback, iterative improvements

### TNG Tech
1. **Assembly-of-Experts Innovation**: First successful 671B merges
2. **No Retraining Required**: Novel construction method
3. **Speed-Intelligence Balance**: Optimal trade-off positioning
4. **Open Science**: MIT license, detailed methodology publication

---

## API Model Strings Summary

| Provider | Model String |
|----------|-------------|
| StepFun | `stepfun-ai/step3` |
| TheDrummer | `thedrummer/cydonia-24b-v4.1` |
| TheDrummer | `thedrummer/unslopnemo-12b` |
| TheDrummer | `thedrummer/rocinante-12b` |
| TNG Tech | `tngtech/deepseek-r1t2-chimera` |
| TNG Tech | `tngtech/deepseek-r1t2-chimera:free` |
| TNG Tech | `tngtech/deepseek-r1t-chimera` |
| TNG Tech | `tngtech/deepseek-r1t-chimera:free` |

---

## Conclusion

These six models represent three distinct approaches to AI development:

**StepFun** demonstrates that frontier multimodal performance can be achieved through careful architectural innovation, particularly in attention mechanisms and inference optimization. Step3 proves that cost-effective deployment doesn't require sacrificing capability.

**TheDrummer** shows the value of specialized fine-tuning for creative applications. The "unslopping" methodology and focus on prose quality creates models that feel distinctly different from general-purpose LLMs—more like creative collaborators than assistants.

**TNG Tech** pioneers a new paradigm in model development through Assembly-of-Experts, proving that strategic combination of existing models can yield results comparable to or exceeding individual parents. The Chimera models demonstrate that innovation in AI isn't limited to training—architecture and combination methods matter equally.

For CABAL integration, these models offer compelling options across different use cases: Step3 for multimodal reasoning workflows, TheDrummer models for creative content generation teams, and TNG Chimeras for cost-effective reasoning tasks with excellent free tier availability.