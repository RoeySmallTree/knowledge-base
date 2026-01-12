# LLM Models Report

> Generated: 2026-01-05
> Total Models: 351
> ✅ With Structured Outputs: 219
> 🚫 Without Structured Outputs: 132

## Legend

| Symbol | Meaning |
|--------|---------|
| ✅ | Supports structured outputs |
| 🚫 | No structured outputs |
| 🌐 | Web search |
| 🔨 | Tool calling |
| ⚙️ | Tool choice |
| 🧠 | Reasoning/thinking |

## Table of Contents

- [✅ Structured Output Compatible](#-structured-output-compatible) (219 models)
- [🚫 Disabled Vendors (No Structured Outputs)](#-disabled-vendors-no-structured-outputs) (132 models)
- [Summary Statistics](#summary-statistics)
- [All Supported Parameters](#all-supported-parameters)

---

# ✅ Structured Output Compatible

*219 models that support `structured_outputs` + `response_format`*

**Vendors:** [alibaba](#alibaba) (1) · [allenai](#allenai) (4) · [anthropic](#anthropic) (3) · [arcee-ai](#arcee-ai) (2) · [baidu](#baidu) (1) · [bytedance-seed](#bytedance-seed) (2) · [cohere](#cohere) (4) · [deepcogito](#deepcogito) (3) · [deepseek](#deepseek) (12) · [essentialai](#essentialai) (1) · [google](#google) (19) · [gryphe](#gryphe) (1) · [inception](#inception) (2) · [kwaipilot](#kwaipilot) (2) · [meta-llama](#meta-llama) (6) · [microsoft](#microsoft) (1) · [minimax](#minimax) (2) · [mistralai](#mistralai) (27) · [moonshotai](#moonshotai) (5) · [neversleep](#neversleep) (2) · [nex-agi](#nex-agi) (1) · [nousresearch](#nousresearch) (4) · [nvidia](#nvidia) (3) · [openai](#openai) (53) · [opengvlab](#opengvlab) (1) · [prime-intellect](#prime-intellect) (1) · [qwen](#qwen) (31) · [sao10k](#sao10k) (3) · [stepfun-ai](#stepfun-ai) (1) · [tencent](#tencent) (1) · [thedrummer](#thedrummer) (3) · [tngtech](#tngtech) (2) · [undi95](#undi95) (1) · [venice](#venice) (1) · [x-ai](#x-ai) (6) · [z-ai](#z-ai) (7)

---

## alibaba

> Chinese tech giant offering Tongyi/Qwen models with strong multilingual and agentic capabilities.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Excellent Chinese language support | Limited Western availability |
| Competitive pricing | Potential data residency concerns |
| Strong reasoning models |  |

*1 model with structured outputs*

### ✅ Tongyi DeepResearch 30B A3B

> Tongyi DeepResearch is an agentic large language model developed by Tongyi Lab, with 30 billion total parameters activating only 3 billion per token. It's optimized for long-horizon, deep information-seeking tasks and delivers state-of-the-art performance on benchmarks like Humanity's Last Exam, BrowserComp, BrowserComp-ZH, WebWalkerQA, GAIA, xbench-DeepSearch, and FRAMES. This makes it superior for complex agentic search, reasoning, and multi-step problem-solving compared to prior models.

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 128K tokens |
| **ID** | `alibaba/tongyi-deepresearch-30b-a3b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.09
- Completion: $0.40

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

---

## allenai

> AI2's open research lab creating fully open-source Olmo models under Apache 2.0.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Fully open-source with weights/code | Smaller community than commercial models |
| Strong reasoning variants | Less polished for production |
| Academic transparency |  |

*4 models with structured outputs*

### ✅ AllenAI: Olmo 3.1 32B Think (free)

> Olmo 3.1 32B Think is a large-scale, 32-billion-parameter model designed for deep reasoning, complex multi-step logic, and advanced instruction following. Building on the Olmo 3 series, version 3.1 delivers refined reasoning behavior and stronger performance across demanding evaluations and nuanced conversational tasks. Developed by Ai2 under the Apache 2.0 license, Olmo 3.1 32B Think continues the Olmo initiative’s commitment to openness, providing full transparency across model weights, code, and training methodology.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 64K tokens |
| **ID** | `allenai/olmo-3.1-32b-think:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🧱 Structured Outputs · 🧠 Reasoning

### ✅ AllenAI: Olmo 3 32B Think (free)

> Olmo 3 32B Think is a large-scale, 32-billion-parameter model purpose-built for deep reasoning, complex logic chains and advanced instruction-following scenarios. Its capacity enables strong performance on demanding evaluation tasks and highly nuanced conversational reasoning. Developed by Ai2 under the Apache 2.0 license, Olmo 3 32B Think embodies the Olmo initiative’s commitment to openness, offering full transparency across weights, code and training methodology.

| Property | Value |
|----------|-------|
| **Created** | 11/2025 |
| **Context** | 64K tokens |
| **ID** | `allenai/olmo-3-32b-think:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🧱 Structured Outputs · 🧠 Reasoning

### ✅ AllenAI: Olmo 3 7B Instruct

> Olmo 3 7B Instruct is a supervised instruction-fine-tuned variant of the Olmo 3 7B base model, optimized for instruction-following, question-answering, and natural conversational dialogue. By leveraging high-quality instruction data and an open training pipeline, it delivers strong performance across everyday NLP tasks while remaining accessible and easy to integrate. Developed by Ai2 under the Apache 2.0 license, the model offers a transparent, community-friendly option for instruction-driven applications.

| Property | Value |
|----------|-------|
| **Created** | 11/2025 |
| **Context** | 64K tokens |
| **ID** | `allenai/olmo-3-7b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.10
- Completion: $0.20

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ AllenAI: Olmo 3 7B Think

> Olmo 3 7B Think is a research-oriented language model in the Olmo family designed for advanced reasoning and instruction-driven tasks. It excels at multi-step problem solving, logical inference, and maintaining coherent conversational context. Developed by Ai2 under the Apache 2.0 license, Olmo 3 7B Think supports transparent, fully open experimentation and provides a lightweight yet capable foundation for academic research and practical NLP workflows.

| Property | Value |
|----------|-------|
| **Created** | 11/2025 |
| **Context** | 64K tokens |
| **ID** | `allenai/olmo-3-7b-think` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.12
- Completion: $0.20

**Capabilities:** 🧱 Structured Outputs · 🧠 Reasoning

---

## anthropic

> Safety-focused AI lab behind the Claude family, known for reliability and long context.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Excellent instruction following | Higher pricing tier |
| Strong coding & reasoning | More conservative outputs |
| 200K+ context windows | Rate limits on heavy use |

*3 models with structured outputs*

### ✅ Anthropic: Claude Opus 4.5

> Claude Opus 4.5 is Anthropic’s frontier reasoning model optimized for complex software engineering, agentic workflows, and long-horizon computer use. It offers strong multimodal capabilities, competitive performance across real-world coding and reasoning benchmarks, and improved robustness to prompt injection. The model is designed to operate efficiently across varied effort levels, enabling developers to trade off speed, depth, and token usage depending on task requirements. It comes with a new parameter to control token efficiency, which can be accessed using the OpenRouter Verbosity parameter with low, medium, or high.

| Property | Value |
|----------|-------|
| **Created** | 11/2025 |
| **Context** | 195K tokens |
| **ID** | `anthropic/claude-opus-4.5` |

**💸 Pricing** (per 1M tokens)

- Prompt: $5.00
- Completion: $25.00
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Anthropic: Claude Sonnet 4.5

> Claude Sonnet 4.5 is Anthropic’s most advanced Sonnet model to date, optimized for real-world agents and coding workflows. It delivers state-of-the-art performance on coding benchmarks such as SWE-bench Verified, with improvements across system design, code security, and specification adherence. The model is designed for extended autonomous operation, maintaining task continuity across sessions and providing fact-based progress tracking.

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 977K tokens |
| **ID** | `anthropic/claude-sonnet-4.5` |

**💸 Pricing** (per 1M tokens)

- Prompt: $3.00
- Completion: $15.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Anthropic: Claude Opus 4.1

> Claude Opus 4.1 is an updated version of Anthropic’s flagship model, offering improved performance in coding, reasoning, and agentic tasks. It achieves 74.5% on SWE-bench Verified and shows notable gains in multi-file code refactoring, debugging precision, and detail-oriented reasoning. The model supports extended thinking up to 64K tokens and is optimized for tasks involving research, data analysis, and tool-assisted reasoning.

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 195K tokens |
| **ID** | `anthropic/claude-opus-4.1` |

**💸 Pricing** (per 1M tokens)

- Prompt: $15.00
- Completion: $75.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

---

## arcee-ai

> Enterprise-focused company specializing in efficient MoE models and domain adaptation.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Efficient sparse MoE architecture | Newer provider |
| Good tool calling | Smaller model ecosystem |
| Cost-effective |  |

*2 models with structured outputs*

### ✅ Arcee AI: Trinity Mini (free)

> Trinity Mini is a 26B-parameter (3B active) sparse mixture-of-experts language model featuring 128 experts with 8 active per token. Engineered for efficient reasoning over long contexts (131k) with robust function calling and multi-step agent workflows.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 128K tokens |
| **ID** | `arcee-ai/trinity-mini:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Arcee AI: Trinity Mini

> Trinity Mini is a 26B-parameter (3B active) sparse mixture-of-experts language model featuring 128 experts with 8 active per token. Engineered for efficient reasoning over long contexts (131k) with robust function calling and multi-step agent workflows.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 128K tokens |
| **ID** | `arcee-ai/trinity-mini` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.04
- Completion: $0.15

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

---

## baidu

> Chinese search giant with ERNIE series, strong in multimodal and Chinese NLP.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Strong Chinese language models | Regional availability limits |
| Multimodal capabilities | Documentation mainly in Chinese |
| Competitive MoE models |  |

*1 model with structured outputs*

### ✅ Baidu: ERNIE 4.5 300B A47B 

> ERNIE-4.5-300B-A47B is a 300B parameter Mixture-of-Experts (MoE) language model developed by Baidu as part of the ERNIE 4.5 series. It activates 47B parameters per token and supports text generation in both English and Chinese. Optimized for high-throughput inference and efficient scaling, it uses a heterogeneous MoE structure with advanced routing and quantization strategies, including FP8 and 2-bit formats. This version is fine-tuned for language-only tasks and supports reasoning, tool parameters, and extended context lengths up to 131k tokens. Suitable for general-purpose LLM applications with high reasoning and throughput demands.

| Property | Value |
|----------|-------|
| **Created** | 6/2025 |
| **Context** | 120K tokens |
| **ID** | `baidu/ernie-4.5-300b-a47b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.28
- Completion: $1.10

**Capabilities:** 🧱 Structured Outputs

---

## bytedance-seed

> TikTok parent company's AI research division with Seed multimodal models.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Fast inference speeds | Newer to LLM space |
| Multimodal support | Limited track record |
| Large context windows |  |

*2 models with structured outputs*

### ✅ ByteDance Seed: Seed 1.6 Flash

> Seed 1.6 Flash is an ultra-fast multimodal deep thinking model by ByteDance Seed, supporting both text and visual understanding. It features a 256k context window and can generate outputs of up to 16k tokens.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 256K tokens |
| **ID** | `bytedance-seed/seed-1.6-flash` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.07
- Completion: $0.30

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ ByteDance Seed: Seed 1.6

> Seed 1.6 is a general-purpose model released by the ByteDance Seed team. It incorporates multimodal capabilities and adaptive deep thinking with a 256K context window.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 256K tokens |
| **ID** | `bytedance-seed/seed-1.6` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.25
- Completion: $2.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

---

## cohere

> Enterprise NLP company known for Command models and excellent embeddings.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Strong RAG/retrieval integration | Smaller model selection |
| Enterprise-ready | Less consumer-focused |
| Good multilingual support |  |

*4 models with structured outputs*

### ✅ Cohere: Command A

> Command A is an open-weights 111B parameter model with a 256k context window focused on delivering great performance across agentic, multilingual, and coding use cases.

| Property | Value |
|----------|-------|
| **Created** | 3/2025 |
| **Context** | 250K tokens |
| **ID** | `cohere/command-a` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.50
- Completion: $10.00

**Capabilities:** 🧱 Structured Outputs

### ✅ Cohere: Command R7B (12-2024)

> Command R7B (12-2024) is a small, fast update of the Command R+ model, delivered in December 2024. It excels at RAG, tool use, agents, and similar tasks requiring complex reasoning and multiple steps.

| Property | Value |
|----------|-------|
| **Created** | 12/2024 |
| **Context** | 125K tokens |
| **ID** | `cohere/command-r7b-12-2024` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.04
- Completion: $0.15

**Capabilities:** 🧱 Structured Outputs

### ✅ Cohere: Command R (08-2024)

> command-r-08-2024 is an update of the [Command R](/models/cohere/command-r) with improved performance for multilingual retrieval-augmented generation (RAG) and tool use. More broadly, it is better at math, code and reasoning and is competitive with the previous version of the larger Command R+ model.

| Property | Value |
|----------|-------|
| **Created** | 8/2024 |
| **Context** | 125K tokens |
| **ID** | `cohere/command-r-08-2024` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.15
- Completion: $0.60

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Cohere: Command R+ (08-2024)

> command-r-plus-08-2024 is an update of the [Command R+](/models/cohere/command-r-plus) with roughly 50% higher throughput and 25% lower latencies as compared to the previous Command R+ version, while keeping the hardware footprint the same.

| Property | Value |
|----------|-------|
| **Created** | 8/2024 |
| **Context** | 125K tokens |
| **ID** | `cohere/command-r-plus-08-2024` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.50
- Completion: $10.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

---

## deepcogito

> Research lab offering Cogito reasoning models with chain-of-thought capabilities.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Deep reasoning focus | Smaller scale |
| Transparent thinking process | Limited model variety |
| Research-driven |  |

*3 models with structured outputs*

### ✅ Deep Cogito: Cogito v2.1 671B

> Cogito v2.1 671B MoE represents one of the strongest open models globally, matching performance of frontier closed and open models. This model is trained using self play with reinforcement learning to reach state-of-the-art performance on multiple categories (instruction following, coding, longer queries and creative writing). This advanced system demonstrates significant progress toward scalable superintelligence through policy improvement.

| Property | Value |
|----------|-------|
| **Created** | 11/2025 |
| **Context** | 125K tokens |
| **ID** | `deepcogito/cogito-v2.1-671b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.25
- Completion: $1.25

**Capabilities:** 🧱 Structured Outputs · 🧠 Reasoning

### ✅ Deep Cogito: Cogito V2 Preview Llama 405B

> Cogito v2 405B is a dense hybrid reasoning model that combines direct answering capabilities with advanced self-reflection. It represents a significant step toward frontier intelligence with dense architecture delivering performance competitive with leading closed models. This advanced reasoning system combines policy improvement with massive scale for exceptional capabilities.

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 32K tokens |
| **ID** | `deepcogito/cogito-v2-preview-llama-405b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $3.50
- Completion: $3.50

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Deep Cogito: Cogito V2 Preview Llama 70B

> Cogito v2 70B is a dense hybrid reasoning model that combines direct answering capabilities with advanced self-reflection. Built with iterative policy improvement, it delivers strong performance across reasoning tasks while maintaining efficiency through shorter reasoning chains and improved intuition.

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 32K tokens |
| **ID** | `deepcogito/cogito-v2-preview-llama-70b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.88
- Completion: $0.88

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

---

## deepseek

> Chinese AI lab famous for DeepSeek-R1 reasoning models and cost-efficient inference.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Exceptional value for money | Variable availability |
| Strong coding abilities | Some models very slow (reasoning) |
| Open-weight options |  |

*12 models with structured outputs*

### ✅ DeepSeek: DeepSeek V3.2 Speciale

> DeepSeek-V3.2-Speciale is a high-compute variant of DeepSeek-V3.2 optimized for maximum reasoning and agentic performance. It builds on DeepSeek Sparse Attention (DSA) for efficient long-context processing, then scales post-training reinforcement learning to push capability beyond the base model. Reported evaluations place Speciale ahead of GPT-5 on difficult reasoning workloads, with proficiency comparable to Gemini-3.0-Pro, while retaining strong coding and tool-use reliability. Like V3.2, it benefits from a large-scale agentic task synthesis pipeline that improves compliance and generalization in interactive environments.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 160K tokens |
| **ID** | `deepseek/deepseek-v3.2-speciale` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.27
- Completion: $0.41

**Capabilities:** 🧱 Structured Outputs · 🧠 Reasoning

### ✅ DeepSeek: DeepSeek V3.2

> DeepSeek-V3.2 is a large language model designed to harmonize high computational efficiency with strong reasoning and agentic tool-use performance. It introduces DeepSeek Sparse Attention (DSA), a fine-grained sparse attention mechanism that reduces training and inference cost while preserving quality in long-context scenarios. A scalable reinforcement learning post-training framework further improves reasoning, with reported performance in the GPT-5 class, and the model has demonstrated gold-medal results on the 2025 IMO and IOI. V3.2 also uses a large-scale agentic task synthesis pipeline to better integrate reasoning into tool-use settings, boosting compliance and generalization in interactive environments.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 160K tokens |
| **ID** | `deepseek/deepseek-v3.2` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.25
- Completion: $0.38

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ DeepSeek: DeepSeek V3.2 Exp

> DeepSeek-V3.2-Exp is an experimental large language model released by DeepSeek as an intermediate step between V3.1 and future architectures. It introduces DeepSeek Sparse Attention (DSA), a fine-grained sparse attention mechanism designed to improve training and inference efficiency in long-context scenarios while maintaining output quality. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://openrouter.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config)

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 160K tokens |
| **ID** | `deepseek/deepseek-v3.2-exp` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.21
- Completion: $0.32

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ DeepSeek: DeepSeek V3.1 Terminus (exacto)

> DeepSeek-V3.1 Terminus is an update to [DeepSeek V3.1](/deepseek/deepseek-chat-v3.1) that maintains the model's original capabilities while addressing issues reported by users, including language consistency and agent capabilities, further optimizing the model's performance in coding and search agents. It is a large hybrid reasoning model (671B parameters, 37B active) that supports both thinking and non-thinking modes. It extends the DeepSeek-V3 base with a two-phase long-context training process, reaching up to 128K tokens, and uses FP8 microscaling for efficient inference. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://openrouter.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config)

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 160K tokens |
| **ID** | `deepseek/deepseek-v3.1-terminus:exacto` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.21
- Completion: $0.79

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ DeepSeek: DeepSeek V3.1 Terminus

> DeepSeek-V3.1 Terminus is an update to [DeepSeek V3.1](/deepseek/deepseek-chat-v3.1) that maintains the model's original capabilities while addressing issues reported by users, including language consistency and agent capabilities, further optimizing the model's performance in coding and search agents. It is a large hybrid reasoning model (671B parameters, 37B active) that supports both thinking and non-thinking modes. It extends the DeepSeek-V3 base with a two-phase long-context training process, reaching up to 128K tokens, and uses FP8 microscaling for efficient inference. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://openrouter.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config)

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 160K tokens |
| **ID** | `deepseek/deepseek-v3.1-terminus` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.21
- Completion: $0.79

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ DeepSeek: DeepSeek V3.1

> DeepSeek-V3.1 is a large hybrid reasoning model (671B parameters, 37B active) that supports both thinking and non-thinking modes via prompt templates. It extends the DeepSeek-V3 base with a two-phase long-context training process, reaching up to 128K tokens, and uses FP8 microscaling for efficient inference. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://openrouter.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config)

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 32K tokens |
| **ID** | `deepseek/deepseek-chat-v3.1` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.15
- Completion: $0.75

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ DeepSeek: R1 0528

> May 28th update to the [original DeepSeek R1](/deepseek/deepseek-r1) Performance on par with [OpenAI o1](/openai/o1), but open-sourced and with fully open reasoning tokens. It's 671B parameters in size, with 37B active in an inference pass.

| Property | Value |
|----------|-------|
| **Created** | 5/2025 |
| **Context** | 160K tokens |
| **ID** | `deepseek/deepseek-r1-0528` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.40
- Completion: $1.75

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ DeepSeek: DeepSeek V3 0324

> DeepSeek V3, a 685B-parameter, mixture-of-experts model, is the latest iteration of the flagship chat model family from the DeepSeek team.

| Property | Value |
|----------|-------|
| **Created** | 3/2025 |
| **Context** | 160K tokens |
| **ID** | `deepseek/deepseek-chat-v3-0324` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.19
- Completion: $0.87

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ DeepSeek: R1 Distill Qwen 32B

> DeepSeek R1 Distill Qwen 32B is a distilled large language model based on [Qwen 2.5 32B](https://huggingface.co/Qwen/Qwen2.5-32B), using outputs from [DeepSeek R1](/deepseek/deepseek-r1). It outperforms OpenAI's o1-mini across various benchmarks, achieving new state-of-the-art results for dense models.\n\nOther benchmark results include:\n\n- AIME 2024 pass@1: 72.6\n- MATH-500 pass@1: 94.3\n- CodeForces Rating: 1691\n\nThe model leverages fine-tuning from DeepSeek R1's outputs, enabling competitive performance comparable to larger frontier models.

| Property | Value |
|----------|-------|
| **Created** | 1/2025 |
| **Context** | 128K tokens |
| **ID** | `deepseek/deepseek-r1-distill-qwen-32b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.27
- Completion: $0.27

**Capabilities:** 🧱 Structured Outputs · 🧠 Reasoning

### ✅ DeepSeek: R1 Distill Qwen 14B

> DeepSeek R1 Distill Qwen 14B is a distilled large language model based on [Qwen 2.5 14B](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B), using outputs from [DeepSeek R1](/deepseek/deepseek-r1). It outperforms OpenAI's o1-mini across various benchmarks, achieving new state-of-the-art results for dense models.

| Property | Value |
|----------|-------|
| **Created** | 1/2025 |
| **Context** | 32K tokens |
| **ID** | `deepseek/deepseek-r1-distill-qwen-14b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.15
- Completion: $0.15

**Capabilities:** 🧱 Structured Outputs · 🧠 Reasoning

### ✅ DeepSeek: R1 Distill Llama 70B

> DeepSeek R1 Distill Llama 70B is a distilled large language model based on [Llama-3.3-70B-Instruct](/meta-llama/llama-3.3-70b-instruct), using outputs from [DeepSeek R1](/deepseek/deepseek-r1). The model combines advanced distillation techniques to achieve high performance across multiple benchmarks, including:

| Property | Value |
|----------|-------|
| **Created** | 1/2025 |
| **Context** | 128K tokens |
| **ID** | `deepseek/deepseek-r1-distill-llama-70b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.03
- Completion: $0.11

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ DeepSeek: DeepSeek V3

> DeepSeek-V3 is the latest model from the DeepSeek team, building upon the instruction following and coding abilities of the previous versions. Pre-trained on nearly 15 trillion tokens, the reported evaluations reveal that the model outperforms other open-source models and rivals leading closed-source models.

| Property | Value |
|----------|-------|
| **Created** | 12/2024 |
| **Context** | 160K tokens |
| **ID** | `deepseek/deepseek-chat` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.30
- Completion: $1.20

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

---

## essentialai

> AI startup focused on essential, reliable language models for production use.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Focused on reliability | Small model selection |
| Structured output support | Limited community |

*1 model with structured outputs*

### ✅ EssentialAI: Rnj 1 Instruct

> Rnj-1 is an 8B-parameter, dense, open-weight model family developed by Essential AI and trained from scratch with a focus on programming, math, and scientific reasoning. The model demonstrates strong performance across multiple programming languages, tool-use workflows, and agentic execution environments (e.g., mini-SWE-agent). 

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 32K tokens |
| **ID** | `essentialai/rnj-1-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.15
- Completion: $0.15

**Capabilities:** 🧱 Structured Outputs

---

## google

> Tech giant offering Gemini series with massive context windows and multimodal capabilities.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| 1M+ token context | Output quality varies |
| Strong multimodal | Less consistent than Claude/GPT for some tasks |
| Fast inference |  |
| Competitive pricing |  |

*19 models with structured outputs*

### ✅ Google: Gemini 3 Flash Preview

> Gemini 3 Flash Preview is a high speed, high value thinking model designed for agentic workflows, multi turn chat, and coding assistance. It delivers near Pro level reasoning and tool use performance with substantially lower latency than larger Gemini variants, making it well suited for interactive development, long running agent loops, and collaborative coding tasks. Compared to Gemini 2.5 Flash, it provides broad quality improvements across reasoning, multimodal understanding, and reliability.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 1.0M tokens |
| **ID** | `google/gemini-3-flash-preview` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.50
- Completion: $3.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Google: Nano Banana Pro (Gemini 3 Pro Image Preview)

> Nano Banana Pro is Google’s most advanced image-generation and editing model, built on Gemini 3 Pro. It extends the original Nano Banana with significantly improved multimodal reasoning, real-world grounding, and high-fidelity visual synthesis. The model generates context-rich graphics, from infographics and diagrams to cinematic composites, and can incorporate real-time information via Search grounding.

| Property | Value |
|----------|-------|
| **Created** | 11/2025 |
| **Context** | 64K tokens |
| **ID** | `google/gemini-3-pro-image-preview` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.00
- Completion: $12.00

**Capabilities:** 🧱 Structured Outputs · 🧠 Reasoning

### ✅ Google: Gemini 3 Pro Preview

> Gemini 3 Pro is Google’s flagship frontier model for high-precision multimodal reasoning, combining strong performance across text, image, video, audio, and code with a 1M-token context window. Reasoning Details must be preserved when using multi-turn tool calling, see our docs here: https://openrouter.ai/docs/use-cases/reasoning-tokens#preserving-reasoning-blocks. It delivers state-of-the-art benchmark results in general reasoning, STEM problem solving, factual QA, and multimodal understanding, including leading scores on LMArena, GPQA Diamond, MathArena Apex, MMMU-Pro, and Video-MMMU. Interactions emphasize depth and interpretability: the model is designed to infer intent with minimal prompting and produce direct, insight-focused responses.

| Property | Value |
|----------|-------|
| **Created** | 11/2025 |
| **Context** | 1.0M tokens |
| **ID** | `google/gemini-3-pro-preview` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.00
- Completion: $12.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Google: Gemini 2.5 Flash Image (Nano Banana)

> Gemini 2.5 Flash Image, a.k.a. "Nano Banana," is now generally available. It is a state of the art image generation model with contextual understanding. It is capable of image generation, edits, and multi-turn conversations. Aspect ratios can be controlled with the [image_config API Parameter](https://openrouter.ai/docs/features/multimodal/image-generation#image-aspect-ratio-configuration)

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 32K tokens |
| **ID** | `google/gemini-2.5-flash-image` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.30
- Completion: $2.50

**Capabilities:** 🧱 Structured Outputs

### ✅ Google: Gemini 2.5 Flash Preview 09-2025

> Gemini 2.5 Flash Preview September 2025 Checkpoint is Google's state-of-the-art workhorse model, specifically designed for advanced reasoning, coding, mathematics, and scientific tasks. It includes built-in "thinking" capabilities, enabling it to provide responses with greater accuracy and nuanced context handling. 

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 1.0M tokens |
| **ID** | `google/gemini-2.5-flash-preview-09-2025` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.30
- Completion: $2.50

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Google: Gemini 2.5 Flash Lite Preview 09-2025

> Gemini 2.5 Flash-Lite is a lightweight reasoning model in the Gemini 2.5 family, optimized for ultra-low latency and cost efficiency. It offers improved throughput, faster token generation, and better performance across common benchmarks compared to earlier Flash models. By default, "thinking" (i.e. multi-pass reasoning) is disabled to prioritize speed, but developers can enable it via the [Reasoning API parameter](https://openrouter.ai/docs/use-cases/reasoning-tokens) to selectively trade off cost for intelligence. 

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 1.0M tokens |
| **ID** | `google/gemini-2.5-flash-lite-preview-09-2025` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.10
- Completion: $0.40

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Google: Gemini 2.5 Flash Image Preview (Nano Banana)

> Gemini 2.5 Flash Image Preview, a.k.a. "Nano Banana," is a state of the art image generation model with contextual understanding. It is capable of image generation, edits, and multi-turn conversations.

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 32K tokens |
| **ID** | `google/gemini-2.5-flash-image-preview` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.30
- Completion: $2.50

**Capabilities:** 🧱 Structured Outputs

### ✅ Google: Gemini 2.5 Flash Lite

> Gemini 2.5 Flash-Lite is a lightweight reasoning model in the Gemini 2.5 family, optimized for ultra-low latency and cost efficiency. It offers improved throughput, faster token generation, and better performance across common benchmarks compared to earlier Flash models. By default, "thinking" (i.e. multi-pass reasoning) is disabled to prioritize speed, but developers can enable it via the [Reasoning API parameter](https://openrouter.ai/docs/use-cases/reasoning-tokens) to selectively trade off cost for intelligence. 

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 1.0M tokens |
| **ID** | `google/gemini-2.5-flash-lite` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.10
- Completion: $0.40

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Google: Gemini 2.5 Flash

> Gemini 2.5 Flash is Google's state-of-the-art workhorse model, specifically designed for advanced reasoning, coding, mathematics, and scientific tasks. It includes built-in "thinking" capabilities, enabling it to provide responses with greater accuracy and nuanced context handling. 

| Property | Value |
|----------|-------|
| **Created** | 6/2025 |
| **Context** | 1.0M tokens |
| **ID** | `google/gemini-2.5-flash` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.30
- Completion: $2.50

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Google: Gemini 2.5 Pro

> Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy and nuanced context handling. Gemini 2.5 Pro achieves top-tier performance on multiple benchmarks, including first-place positioning on the LMArena leaderboard, reflecting superior human-preference alignment and complex problem-solving abilities.

| Property | Value |
|----------|-------|
| **Created** | 6/2025 |
| **Context** | 1.0M tokens |
| **ID** | `google/gemini-2.5-pro` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.25
- Completion: $10.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Google: Gemini 2.5 Pro Preview 06-05

> Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy and nuanced context handling. Gemini 2.5 Pro achieves top-tier performance on multiple benchmarks, including first-place positioning on the LMArena leaderboard, reflecting superior human-preference alignment and complex problem-solving abilities.

| Property | Value |
|----------|-------|
| **Created** | 6/2025 |
| **Context** | 1.0M tokens |
| **ID** | `google/gemini-2.5-pro-preview` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.25
- Completion: $10.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Google: Gemini 2.5 Pro Preview 05-06

> Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy and nuanced context handling. Gemini 2.5 Pro achieves top-tier performance on multiple benchmarks, including first-place positioning on the LMArena leaderboard, reflecting superior human-preference alignment and complex problem-solving abilities.

| Property | Value |
|----------|-------|
| **Created** | 5/2025 |
| **Context** | 1.0M tokens |
| **ID** | `google/gemini-2.5-pro-preview-05-06` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.25
- Completion: $10.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Google: Gemma 3 4B (free)

> Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling.

| Property | Value |
|----------|-------|
| **Created** | 3/2025 |
| **Context** | 32K tokens |
| **ID** | `google/gemma-3-4b-it:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🧱 Structured Outputs

### ✅ Google: Gemma 3 12B

> Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling. Gemma 3 12B is the second largest in the family of Gemma 3 models after [Gemma 3 27B](google/gemma-3-27b-it)

| Property | Value |
|----------|-------|
| **Created** | 3/2025 |
| **Context** | 128K tokens |
| **ID** | `google/gemma-3-12b-it` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.03
- Completion: $0.10

**Capabilities:** 🧱 Structured Outputs

### ✅ Google: Gemma 3 27B (free)

> Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling. Gemma 3 27B is Google's latest open source model, successor to [Gemma 2](google/gemma-2-27b-it)

| Property | Value |
|----------|-------|
| **Created** | 3/2025 |
| **Context** | 128K tokens |
| **ID** | `google/gemma-3-27b-it:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Google: Gemma 3 27B

> Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling. Gemma 3 27B is Google's latest open source model, successor to [Gemma 2](google/gemma-2-27b-it)

| Property | Value |
|----------|-------|
| **Created** | 3/2025 |
| **Context** | 128K tokens |
| **ID** | `google/gemma-3-27b-it` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.04
- Completion: $0.06

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Google: Gemini 2.0 Flash Lite

> Gemini 2.0 Flash Lite offers a significantly faster time to first token (TTFT) compared to [Gemini Flash 1.5](/google/gemini-flash-1.5), while maintaining quality on par with larger models like [Gemini Pro 1.5](/google/gemini-pro-1.5), all at extremely economical token prices.

| Property | Value |
|----------|-------|
| **Created** | 2/2025 |
| **Context** | 1.0M tokens |
| **ID** | `google/gemini-2.0-flash-lite-001` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.07
- Completion: $0.30

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Google: Gemini 2.0 Flash

> Gemini Flash 2.0 offers a significantly faster time to first token (TTFT) compared to [Gemini Flash 1.5](/google/gemini-flash-1.5), while maintaining quality on par with larger models like [Gemini Pro 1.5](/google/gemini-pro-1.5). It introduces notable enhancements in multimodal understanding, coding capabilities, complex instruction following, and function calling. These advancements come together to deliver more seamless and robust agentic experiences.

| Property | Value |
|----------|-------|
| **Created** | 2/2025 |
| **Context** | 1.0M tokens |
| **ID** | `google/gemini-2.0-flash-001` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.10
- Completion: $0.40

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Google: Gemma 2 27B

> Gemma 2 27B by Google is an open model built from the same research and technology used to create the [Gemini models](/models?q=gemini).

| Property | Value |
|----------|-------|
| **Created** | 7/2024 |
| **Context** | 8K tokens |
| **ID** | `google/gemma-2-27b-it` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.65
- Completion: $0.65

**Capabilities:** 🧱 Structured Outputs

---

## gryphe

> Independent creator of MythoMax and fantasy/RP-focused models.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Creative writing focus | Niche use case |
| Community-driven development | Smaller scale |

*1 model with structured outputs*

### ✅ MythoMax 13B

> One of the highest performing and most popular fine-tunes of Llama 2 13B, with rich descriptions and roleplay. #merge

| Property | Value |
|----------|-------|
| **Created** | 7/2023 |
| **Context** | 4K tokens |
| **ID** | `gryphe/mythomax-l2-13b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.06
- Completion: $0.06

**Capabilities:** 🧱 Structured Outputs

---

## inception

> AI startup offering Mercury models optimized for speed and efficiency.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Fast inference | Limited model range |
| Good structured outputs | Newer provider |

*2 models with structured outputs*

### ✅ Inception: Mercury

> Mercury is the first diffusion large language model (dLLM). Applying a breakthrough discrete diffusion approach, the model runs 5-10x faster than even speed optimized models like GPT-4.1 Nano and Claude 3.5 Haiku while matching their performance. Mercury's speed enables developers to provide responsive user experiences, including with voice agents, search interfaces, and chatbots. Read more in the [blog post]

| Property | Value |
|----------|-------|
| **Created** | 6/2025 |
| **Context** | 125K tokens |
| **ID** | `inception/mercury` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.25
- Completion: $1.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Inception: Mercury Coder

> Mercury Coder is the first diffusion large language model (dLLM). Applying a breakthrough discrete diffusion approach, the model runs 5-10x faster than even speed optimized models like Claude 3.5 Haiku and GPT-4o Mini while matching their performance. Mercury Coder's speed means that developers can stay in the flow while coding, enjoying rapid chat-based iteration and responsive code completion suggestions. On Copilot Arena, Mercury Coder ranks 1st in speed and ties for 2nd in quality. Read more in the [blog post here](https://www.inceptionlabs.ai/blog/introducing-mercury).

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 125K tokens |
| **ID** | `inception/mercury-coder` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.25
- Completion: $1.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

---

## kwaipilot

> Kuaishou's AI division with specialized coding and assistant models.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Coding optimization | Limited availability |
| Competitive pricing | Smaller ecosystem |

*2 models with structured outputs*

### ✅ Kwaipilot: KAT-Coder-Pro V1 (free)

> KAT-Coder-Pro V1 is KwaiKAT's most advanced agentic coding model in the KAT-Coder series. Designed specifically for agentic coding tasks, it excels in real-world software engineering scenarios, achieving 73.4% solve rate on the SWE-Bench Verified benchmark. 

| Property | Value |
|----------|-------|
| **Created** | 11/2025 |
| **Context** | 250K tokens |
| **ID** | `kwaipilot/kat-coder-pro:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Kwaipilot: KAT-Coder-Pro V1

> KAT-Coder-Pro V1 is KwaiKAT's most advanced agentic coding model in the KAT-Coder series. Designed specifically for agentic coding tasks, it excels in real-world software engineering scenarios, achieving 73.4% solve rate on the SWE-Bench Verified benchmark. 

| Property | Value |
|----------|-------|
| **Created** | 11/2025 |
| **Context** | 250K tokens |
| **ID** | `kwaipilot/kat-coder-pro` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.21
- Completion: $0.83

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

---

## meta-llama

> Meta's open-weight Llama series, the most popular open foundation models.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Fully open weights | Base models need fine-tuning |
| Massive ecosystem | No official API |
| Strong community support |  |
| Free to use |  |

*6 models with structured outputs*

### ✅ Meta: Llama 4 Maverick

> Llama 4 Maverick 17B Instruct (128E) is a high-capacity multimodal language model from Meta, built on a mixture-of-experts (MoE) architecture with 128 experts and 17 billion active parameters per forward pass (400B total). It supports multilingual text and image input, and produces multilingual text and code output across 12 supported languages. Optimized for vision-language tasks, Maverick is instruction-tuned for assistant-like behavior, image reasoning, and general-purpose multimodal interaction.

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 1.0M tokens |
| **ID** | `meta-llama/llama-4-maverick` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.15
- Completion: $0.60

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Meta: Llama 4 Scout

> Llama 4 Scout 17B Instruct (16E) is a mixture-of-experts (MoE) language model developed by Meta, activating 17 billion parameters out of a total of 109B. It supports native multimodal input (text and image) and multilingual output (text and code) across 12 supported languages. Designed for assistant-style interaction and visual reasoning, Scout uses 16 experts per forward pass and features a context length of 10 million tokens, with a training corpus of ~40 trillion tokens.

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 320K tokens |
| **ID** | `meta-llama/llama-4-scout` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.08
- Completion: $0.30

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Meta: Llama 3.3 70B Instruct

> The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out). The Llama 3.3 instruction tuned text only model is optimized for multilingual dialogue use cases and outperforms many of the available open source and closed chat models on common industry benchmarks.

| Property | Value |
|----------|-------|
| **Created** | 12/2024 |
| **Context** | 128K tokens |
| **ID** | `meta-llama/llama-3.3-70b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.10
- Completion: $0.32

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Meta: Llama 3.1 8B Instruct

> Meta's latest class of model (Llama 3.1) launched with a variety of sizes & flavors. This 8B instruct-tuned version is fast and efficient.

| Property | Value |
|----------|-------|
| **Created** | 7/2024 |
| **Context** | 128K tokens |
| **ID** | `meta-llama/llama-3.1-8b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.02
- Completion: $0.03

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Meta: Llama 3.1 405B Instruct

> The highly anticipated 400B class of Llama3 is here! Clocking in at 128k context with impressive eval scores, the Meta AI team continues to push the frontier of open-source LLMs.

| Property | Value |
|----------|-------|
| **Created** | 7/2024 |
| **Context** | 10K tokens |
| **ID** | `meta-llama/llama-3.1-405b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $3.50
- Completion: $3.50

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Meta: Llama 3 70B Instruct

> Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors. This 70B instruct-tuned version was optimized for high quality dialogue usecases.

| Property | Value |
|----------|-------|
| **Created** | 4/2024 |
| **Context** | 8K tokens |
| **ID** | `meta-llama/llama-3-70b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.30
- Completion: $0.40

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

---

## microsoft

> Tech giant offering Phi and MAI series, known for efficient small models.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Excellent small models | Limited large model options |
| Good efficiency | Some models very specialized |
| Azure integration |  |

*1 model with structured outputs*

### ✅ Microsoft: Phi 4

> [Microsoft Research](/microsoft) Phi-4 is designed to perform well in complex reasoning tasks and can operate efficiently in situations with limited memory or where quick responses are needed. 

| Property | Value |
|----------|-------|
| **Created** | 1/2025 |
| **Context** | 16K tokens |
| **ID** | `microsoft/phi-4` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.06
- Completion: $0.14

**Capabilities:** 🧱 Structured Outputs

---

## minimax

> Chinese AI company known for MiniMax models optimized for coding and agents.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Strong coding performance | Regional focus |
| Efficient MoE | Less mainstream adoption |
| Good for agents |  |

*2 models with structured outputs*

### ✅ MiniMax: MiniMax M2.1

> MiniMax-M2.1 is a lightweight, state-of-the-art large language model optimized for coding, agentic workflows, and modern application development. With only 10 billion activated parameters, it delivers a major jump in real-world capability while maintaining exceptional latency, scalability, and cost efficiency.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 192K tokens |
| **ID** | `minimax/minimax-m2.1` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.12
- Completion: $0.48

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ MiniMax: MiniMax M2

> MiniMax-M2 is a compact, high-efficiency large language model optimized for end-to-end coding and agentic workflows. With 10 billion activated parameters (230 billion total), it delivers near-frontier intelligence across general reasoning, tool use, and multi-step task execution while maintaining low latency and deployment efficiency.

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 192K tokens |
| **ID** | `minimax/minimax-m2` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.20
- Completion: $1.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

---

## mistralai

> French AI lab offering efficient European-made models with strong coding abilities.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Excellent coding models | Smaller than US competitors |
| Open-weight options | Some models lag in reasoning |
| EU data sovereignty |  |
| Fast inference |  |

*27 models with structured outputs*

### ✅ Mistral: Devstral 2 2512 (free)

> Devstral 2 is a state-of-the-art open-source model by Mistral AI specializing in agentic coding. It is a 123B-parameter dense transformer model supporting a 256K context window.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 256K tokens |
| **ID** | `mistralai/devstral-2512:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Devstral 2 2512

> Devstral 2 is a state-of-the-art open-source model by Mistral AI specializing in agentic coding. It is a 123B-parameter dense transformer model supporting a 256K context window.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 256K tokens |
| **ID** | `mistralai/devstral-2512` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.05
- Completion: $0.22

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Ministral 3 14B 2512

> The largest model in the Ministral 3 family, Ministral 3 14B offers frontier capabilities and performance comparable to its larger Mistral Small 3.2 24B counterpart. A powerful and efficient language model with vision capabilities.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 256K tokens |
| **ID** | `mistralai/ministral-14b-2512` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.20
- Completion: $0.20

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Ministral 3 8B 2512

> A balanced model in the Ministral 3 family, Ministral 3 8B is a powerful, efficient tiny language model with vision capabilities.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 256K tokens |
| **ID** | `mistralai/ministral-8b-2512` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.15
- Completion: $0.15

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Ministral 3 3B 2512

> The smallest model in the Ministral 3 family, Ministral 3 3B is a powerful, efficient tiny language model with vision capabilities.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 128K tokens |
| **ID** | `mistralai/ministral-3b-2512` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.10
- Completion: $0.10

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Mistral Large 3 2512

> Mistral Large 3 2512 is Mistral’s most capable model to date, featuring a sparse mixture-of-experts architecture with 41B active parameters (675B total), and released under the Apache 2.0 license.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 256K tokens |
| **ID** | `mistralai/mistral-large-2512` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.50
- Completion: $1.50

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Voxtral Small 24B 2507

> Voxtral Small is an enhancement of Mistral Small 3, incorporating state-of-the-art audio input capabilities while retaining best-in-class text performance. It excels at speech transcription, translation and audio understanding. Input audio is priced at $100 per million seconds.

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 31K tokens |
| **ID** | `mistralai/voxtral-small-24b-2507` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.10
- Completion: $0.30

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Mistral Medium 3.1

> Mistral Medium 3.1 is an updated version of Mistral Medium 3, which is a high-performance enterprise-grade language model designed to deliver frontier-level capabilities at significantly reduced operational cost. It balances state-of-the-art reasoning and multimodal performance with 8× lower cost compared to traditional large models, making it suitable for scalable deployments across professional and industrial use cases.

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 128K tokens |
| **ID** | `mistralai/mistral-medium-3.1` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.40
- Completion: $2.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Codestral 2508

> Mistral's cutting-edge language model for coding released end of July 2025. Codestral specializes in low-latency, high-frequency tasks such as fill-in-the-middle (FIM), code correction and test generation.

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 250K tokens |
| **ID** | `mistralai/codestral-2508` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.30
- Completion: $0.90

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Devstral Medium

> Devstral Medium is a high-performance code generation and agentic reasoning model developed jointly by Mistral AI and All Hands AI. Positioned as a step up from Devstral Small, it achieves 61.6% on SWE-Bench Verified, placing it ahead of Gemini 2.5 Pro and GPT-4.1 in code-related tasks, at a fraction of the cost. It is designed for generalization across prompt styles and tool use in code agents and frameworks.

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 128K tokens |
| **ID** | `mistralai/devstral-medium` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.40
- Completion: $2.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Devstral Small 1.1

> Devstral Small 1.1 is a 24B parameter open-weight language model for software engineering agents, developed by Mistral AI in collaboration with All Hands AI. Finetuned from Mistral Small 3.1 and released under the Apache 2.0 license, it features a 128k token context window and supports both Mistral-style function calling and XML output formats.

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 125K tokens |
| **ID** | `mistralai/devstral-small` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.07
- Completion: $0.28

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Mistral Small 3.2 24B

> Mistral-Small-3.2-24B-Instruct-2506 is an updated 24B parameter model from Mistral optimized for instruction following, repetition reduction, and improved function calling. Compared to the 3.1 release, version 3.2 significantly improves accuracy on WildBench and Arena Hard, reduces infinite generations, and delivers gains in tool use and structured output tasks.

| Property | Value |
|----------|-------|
| **Created** | 6/2025 |
| **Context** | 128K tokens |
| **ID** | `mistralai/mistral-small-3.2-24b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.06
- Completion: $0.18

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Mistral Medium 3

> Mistral Medium 3 is a high-performance enterprise-grade language model designed to deliver frontier-level capabilities at significantly reduced operational cost. It balances state-of-the-art reasoning and multimodal performance with 8× lower cost compared to traditional large models, making it suitable for scalable deployments across professional and industrial use cases.

| Property | Value |
|----------|-------|
| **Created** | 5/2025 |
| **Context** | 128K tokens |
| **ID** | `mistralai/mistral-medium-3` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.40
- Completion: $2.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Mistral Small 3.1 24B (free)

> Mistral Small 3.1 24B Instruct is an upgraded variant of Mistral Small 3 (2501), featuring 24 billion parameters with advanced multimodal capabilities. It provides state-of-the-art performance in text-based reasoning and vision tasks, including image analysis, programming, mathematical reasoning, and multilingual support across dozens of languages. Equipped with an extensive 128k token context window and optimized for efficient local inference, it supports use cases such as conversational agents, function calling, long-document comprehension, and privacy-sensitive deployments. The updated version is [Mistral Small 3.2](mistralai/mistral-small-3.2-24b-instruct)

| Property | Value |
|----------|-------|
| **Created** | 3/2025 |
| **Context** | 125K tokens |
| **ID** | `mistralai/mistral-small-3.1-24b-instruct:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Mistral Small 3.1 24B

> Mistral Small 3.1 24B Instruct is an upgraded variant of Mistral Small 3 (2501), featuring 24 billion parameters with advanced multimodal capabilities. It provides state-of-the-art performance in text-based reasoning and vision tasks, including image analysis, programming, mathematical reasoning, and multilingual support across dozens of languages. Equipped with an extensive 128k token context window and optimized for efficient local inference, it supports use cases such as conversational agents, function calling, long-document comprehension, and privacy-sensitive deployments. The updated version is [Mistral Small 3.2](mistralai/mistral-small-3.2-24b-instruct)

| Property | Value |
|----------|-------|
| **Created** | 3/2025 |
| **Context** | 128K tokens |
| **ID** | `mistralai/mistral-small-3.1-24b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.03
- Completion: $0.11

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Saba

> Mistral Saba is a 24B-parameter language model specifically designed for the Middle East and South Asia, delivering accurate and contextually relevant responses while maintaining efficient performance. Trained on curated regional datasets, it supports multiple Indian-origin languages—including Tamil and Malayalam—alongside Arabic. This makes it a versatile option for a range of regional and multilingual applications. Read more at the blog post [here](https://mistral.ai/en/news/mistral-saba)

| Property | Value |
|----------|-------|
| **Created** | 2/2025 |
| **Context** | 32K tokens |
| **ID** | `mistralai/mistral-saba` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.20
- Completion: $0.60

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Mistral Small 3

> Mistral Small 3 is a 24B-parameter language model optimized for low-latency performance across common AI tasks. Released under the Apache 2.0 license, it features both pre-trained and instruction-tuned versions designed for efficient local deployment.

| Property | Value |
|----------|-------|
| **Created** | 1/2025 |
| **Context** | 32K tokens |
| **ID** | `mistralai/mistral-small-24b-instruct-2501` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.03
- Completion: $0.11

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral Large 2411

> Mistral Large 2 2411 is an update of [Mistral Large 2](/mistralai/mistral-large) released together with [Pixtral Large 2411](/mistralai/pixtral-large-2411)

| Property | Value |
|----------|-------|
| **Created** | 11/2024 |
| **Context** | 128K tokens |
| **ID** | `mistralai/mistral-large-2411` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.00
- Completion: $6.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral Large 2407

> This is Mistral AI's flagship model, Mistral Large 2 (version mistral-large-2407). It's a proprietary weights-available model and excels at reasoning, code, JSON, chat, and more. Read the launch announcement [here](https://mistral.ai/news/mistral-large-2407/).

| Property | Value |
|----------|-------|
| **Created** | 11/2024 |
| **Context** | 128K tokens |
| **ID** | `mistralai/mistral-large-2407` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.00
- Completion: $6.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Pixtral Large 2411

> Pixtral Large is a 124B parameter, open-weight, multimodal model built on top of [Mistral Large 2](/mistralai/mistral-large-2411). The model is able to understand documents, charts and natural images.

| Property | Value |
|----------|-------|
| **Created** | 11/2024 |
| **Context** | 128K tokens |
| **ID** | `mistralai/pixtral-large-2411` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.00
- Completion: $6.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Ministral 8B

> Ministral 8B is an 8B parameter model featuring a unique interleaved sliding-window attention pattern for faster, memory-efficient inference. Designed for edge use cases, it supports up to 128k context length and excels in knowledge and reasoning tasks. It outperforms peers in the sub-10B category, making it perfect for low-latency, privacy-first applications.

| Property | Value |
|----------|-------|
| **Created** | 10/2024 |
| **Context** | 128K tokens |
| **ID** | `mistralai/ministral-8b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.10
- Completion: $0.10

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Ministral 3B

> Ministral 3B is a 3B parameter model optimized for on-device and edge computing. It excels in knowledge, commonsense reasoning, and function-calling, outperforming larger models like Mistral 7B on most benchmarks. Supporting up to 128k context length, it’s ideal for orchestrating agentic workflows and specialist tasks with efficient inference.

| Property | Value |
|----------|-------|
| **Created** | 10/2024 |
| **Context** | 128K tokens |
| **ID** | `mistralai/ministral-3b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.04
- Completion: $0.04

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Pixtral 12B

> The first multi-modal, text+image-to-text model from Mistral AI. Its weights were launched via torrent: https://x.com/mistralai/status/1833758285167722836.

| Property | Value |
|----------|-------|
| **Created** | 9/2024 |
| **Context** | 32K tokens |
| **ID** | `mistralai/pixtral-12b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.10
- Completion: $0.10

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Mistral Nemo

> A 12B parameter model with a 128k token context length built by Mistral in collaboration with NVIDIA.

| Property | Value |
|----------|-------|
| **Created** | 7/2024 |
| **Context** | 128K tokens |
| **ID** | `mistralai/mistral-nemo` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.02
- Completion: $0.04

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral: Mixtral 8x22B Instruct

> Mistral's official instruct fine-tuned version of [Mixtral 8x22B](/models/mistralai/mixtral-8x22b). It uses 39B active parameters out of 141B, offering unparalleled cost efficiency for its size. Its strengths include:

| Property | Value |
|----------|-------|
| **Created** | 4/2024 |
| **Context** | 64K tokens |
| **ID** | `mistralai/mixtral-8x22b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.00
- Completion: $6.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral Large

> This is Mistral AI's flagship model, Mistral Large 2 (version `mistral-large-2407`). It's a proprietary weights-available model and excels at reasoning, code, JSON, chat, and more. Read the launch announcement [here](https://mistral.ai/news/mistral-large-2407/).

| Property | Value |
|----------|-------|
| **Created** | 2/2024 |
| **Context** | 125K tokens |
| **ID** | `mistralai/mistral-large` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.00
- Completion: $6.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Mistral Tiny

> Note: This model is being deprecated. Recommended replacement is the newer [Ministral 8B](/mistral/ministral-8b)

| Property | Value |
|----------|-------|
| **Created** | 1/2024 |
| **Context** | 32K tokens |
| **ID** | `mistralai/mistral-tiny` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.25
- Completion: $0.25

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

---

## moonshotai

> Chinese AI startup with Kimi models featuring massive context and moonshot thinking.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Very large context windows | Regional availability |
| Strong long-form reasoning | Newer provider |

*5 models with structured outputs*

### ✅ MoonshotAI: Kimi K2 Thinking

> Kimi K2 Thinking is Moonshot AI’s most advanced open reasoning model to date, extending the K2 series into agentic, long-horizon reasoning. Built on the trillion-parameter Mixture-of-Experts (MoE) architecture introduced in Kimi K2, it activates 32 billion parameters per forward pass and supports 256 k-token context windows. The model is optimized for persistent step-by-step thought, dynamic tool invocation, and complex reasoning workflows that span hundreds of turns. It interleaves step-by-step reasoning with tool use, enabling autonomous research, coding, and writing that can persist for hundreds of sequential actions without drift.

| Property | Value |
|----------|-------|
| **Created** | 11/2025 |
| **Context** | 256K tokens |
| **ID** | `moonshotai/kimi-k2-thinking` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.32
- Completion: $0.48

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ MoonshotAI: Kimi K2 0905

> Kimi K2 0905 is the September update of [Kimi K2 0711](moonshotai/kimi-k2). It is a large-scale Mixture-of-Experts (MoE) language model developed by Moonshot AI, featuring 1 trillion total parameters with 32 billion active per forward pass. It supports long-context inference up to 256k tokens, extended from the previous 128k.

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 256K tokens |
| **ID** | `moonshotai/kimi-k2-0905` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.39
- Completion: $1.90

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ MoonshotAI: Kimi K2 0905 (exacto)

> Kimi K2 0905 is the September update of [Kimi K2 0711](moonshotai/kimi-k2). It is a large-scale Mixture-of-Experts (MoE) language model developed by Moonshot AI, featuring 1 trillion total parameters with 32 billion active per forward pass. It supports long-context inference up to 256k tokens, extended from the previous 128k.

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 256K tokens |
| **ID** | `moonshotai/kimi-k2-0905:exacto` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.60
- Completion: $2.50

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ MoonshotAI: Kimi K2 0711

> Kimi K2 Instruct is a large-scale Mixture-of-Experts (MoE) language model developed by Moonshot AI, featuring 1 trillion total parameters with 32 billion active per forward pass. It is optimized for agentic capabilities, including advanced tool use, reasoning, and code synthesis. Kimi K2 excels across a broad range of benchmarks, particularly in coding (LiveCodeBench, SWE-bench), reasoning (ZebraLogic, GPQA), and tool-use (Tau2, AceBench) tasks. It supports long-context inference up to 128K tokens and is designed with a novel training stack that includes the MuonClip optimizer for stable large-scale MoE training.

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 128K tokens |
| **ID** | `moonshotai/kimi-k2` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.50
- Completion: $2.40

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ MoonshotAI: Kimi Dev 72B

> Kimi-Dev-72B is an open-source large language model fine-tuned for software engineering and issue resolution tasks. Based on Qwen2.5-72B, it is optimized using large-scale reinforcement learning that applies code patches in real repositories and validates them via full test suite execution—rewarding only correct, robust completions. The model achieves 60.4% on SWE-bench Verified, setting a new benchmark among open-source models for software bug fixing and code reasoning.

| Property | Value |
|----------|-------|
| **Created** | 6/2025 |
| **Context** | 128K tokens |
| **ID** | `moonshotai/kimi-dev-72b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.29
- Completion: $1.15

**Capabilities:** 🧱 Structured Outputs · 🧠 Reasoning

---

## neversleep

> Independent AI lab creating Llama-based fine-tunes for creative and RP use cases.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Creative writing specialization | Niche focus |
| Community-driven | Limited enterprise features |

*2 models with structured outputs*

### ✅ NeverSleep: Lumimaid v0.2 8B

> Lumimaid v0.2 8B is a finetune of [Llama 3.1 8B](/models/meta-llama/llama-3.1-8b-instruct) with a "HUGE step up dataset wise" compared to Lumimaid v0.1. Sloppy chats output were purged.

| Property | Value |
|----------|-------|
| **Created** | 9/2024 |
| **Context** | 32K tokens |
| **ID** | `neversleep/llama-3.1-lumimaid-8b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.09
- Completion: $0.60

**Capabilities:** 🧱 Structured Outputs

### ✅ Noromaid 20B

> A collab between IkariDev and Undi. This merge is suitable for RP, ERP, and general knowledge.

| Property | Value |
|----------|-------|
| **Created** | 11/2023 |
| **Context** | 4K tokens |
| **ID** | `neversleep/noromaid-20b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.00
- Completion: $1.75

**Capabilities:** 🧱 Structured Outputs

---

## nex-agi

> Startup focused on AGI-aligned models with enhanced reasoning.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Reasoning focus | Very new |
| Structured output support | Limited model options |

*1 model with structured outputs*

### ✅ Nex AGI: DeepSeek V3.1 Nex N1 (free)

> DeepSeek V3.1 Nex-N1 is the flagship release of the Nex-N1 series — a post-trained model designed to highlight agent autonomy, tool use, and real-world productivity. 

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 128K tokens |
| **ID** | `nex-agi/deepseek-v3.1-nex-n1:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

---

## nousresearch

> Community research group creating popular Hermes fine-tunes and instruction models.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Strong instruction following | Based on other models |
| Community-driven | Variable quality |
| Open development |  |

*4 models with structured outputs*

### ✅ Nous: Hermes 4 70B

> Hermes 4 70B is a hybrid reasoning model from Nous Research, built on Meta-Llama-3.1-70B. It introduces the same hybrid mode as the larger 405B release, allowing the model to either respond directly or generate explicit <think>...</think> reasoning traces before answering. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://openrouter.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config)

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 128K tokens |
| **ID** | `nousresearch/hermes-4-70b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.11
- Completion: $0.38

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Nous: DeepHermes 3 Mistral 24B Preview

> DeepHermes 3 (Mistral 24B Preview) is an instruction-tuned language model by Nous Research based on Mistral-Small-24B, designed for chat, function calling, and advanced multi-turn reasoning. It introduces a dual-mode system that toggles between intuitive chat responses and structured “deep reasoning” mode using special system prompts. Fine-tuned via distillation from R1, it supports structured output (JSON mode) and function call syntax for agent-based applications.

| Property | Value |
|----------|-------|
| **Created** | 5/2025 |
| **Context** | 32K tokens |
| **ID** | `nousresearch/deephermes-3-mistral-24b-preview` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.02
- Completion: $0.10

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Nous: Hermes 3 70B Instruct

> Hermes 3 is a generalist language model with many improvements over [Hermes 2](/models/nousresearch/nous-hermes-2-mistral-7b-dpo), including advanced agentic capabilities, much better roleplaying, reasoning, multi-turn conversation, long context coherence, and improvements across the board.

| Property | Value |
|----------|-------|
| **Created** | 8/2024 |
| **Context** | 64K tokens |
| **ID** | `nousresearch/hermes-3-llama-3.1-70b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.30
- Completion: $0.30

**Capabilities:** 🧱 Structured Outputs

### ✅ NousResearch: Hermes 2 Pro - Llama-3 8B

> Hermes 2 Pro is an upgraded, retrained version of Nous Hermes 2, consisting of an updated and cleaned version of the OpenHermes 2.5 Dataset, as well as a newly introduced Function Calling and JSON Mode dataset developed in-house.

| Property | Value |
|----------|-------|
| **Created** | 5/2024 |
| **Context** | 8K tokens |
| **ID** | `nousresearch/hermes-2-pro-llama-3-8b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.02
- Completion: $0.08

**Capabilities:** 🧱 Structured Outputs

---

## nvidia

> GPU giant offering Nemotron models optimized for their hardware stack.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Hardware-optimized | Smaller model selection |
| Strong enterprise support | NVIDIA ecosystem lock-in |
| Efficient inference |  |

*3 models with structured outputs*

### ✅ NVIDIA: Nemotron 3 Nano 30B A3B

> NVIDIA Nemotron 3 Nano 30B A3B is a small language MoE model with highest compute efficiency and accuracy for developers to build specialized agentic AI systems.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 256K tokens |
| **ID** | `nvidia/nemotron-3-nano-30b-a3b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.06
- Completion: $0.24

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ NVIDIA: Nemotron Nano 9B V2 (free)

> NVIDIA-Nemotron-Nano-9B-v2 is a large language model (LLM) trained from scratch by NVIDIA, and designed as a unified model for both reasoning and non-reasoning tasks. It responds to user queries and tasks by first generating a reasoning trace and then concluding with a final response. 

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 125K tokens |
| **ID** | `nvidia/nemotron-nano-9b-v2:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ NVIDIA: Llama 3.1 Nemotron Ultra 253B v1

> Llama-3.1-Nemotron-Ultra-253B-v1 is a large language model (LLM) optimized for advanced reasoning, human-interactive chat, retrieval-augmented generation (RAG), and tool-calling tasks. Derived from Meta’s Llama-3.1-405B-Instruct, it has been significantly customized using Neural Architecture Search (NAS), resulting in enhanced efficiency, reduced memory usage, and improved inference latency. The model supports a context length of up to 128K tokens and can operate efficiently on an 8x NVIDIA H100 node.

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 128K tokens |
| **ID** | `nvidia/llama-3.1-nemotron-ultra-253b-v1` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.60
- Completion: $1.80

**Capabilities:** 🧱 Structured Outputs · 🧠 Reasoning

---

## openai

> Leading AI lab behind GPT series, setting industry standards for capabilities.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Best-in-class reasoning | Premium pricing |
| Excellent tool use | Closed weights |
| Widest adoption | API rate limits |
| Great documentation |  |

*53 models with structured outputs*

### ✅ OpenAI: GPT-5.2 Chat

> GPT-5.2 Chat (AKA Instant) is the fast, lightweight member of the 5.2 family, optimized for low-latency chat while retaining strong general intelligence. It uses adaptive reasoning to selectively “think” on harder queries, improving accuracy on math, coding, and multi-step tasks without slowing down typical conversations. The model is warmer and more conversational by default, with better instruction following and more stable short-form reasoning. GPT-5.2 Chat is designed for high-throughput, interactive workloads where responsiveness and consistency matter more than deep deliberation.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 125K tokens |
| **ID** | `openai/gpt-5.2-chat` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.75
- Completion: $14.00
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: GPT-5.2 Pro

> GPT-5.2 Pro is OpenAI’s most advanced model, offering major improvements in agentic coding and long context performance over GPT-5 Pro. It is optimized for complex tasks that require step-by-step reasoning, instruction following, and accuracy in high-stakes use cases. It supports test-time routing features and advanced prompt understanding, including user-specified intent like "think hard about this." Improvements include reductions in hallucination, sycophancy, and better performance in coding, writing, and health-related tasks.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 391K tokens |
| **ID** | `openai/gpt-5.2-pro` |

**💸 Pricing** (per 1M tokens)

- Prompt: $21.00
- Completion: $168.00
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: GPT-5.2

> GPT-5.2 is the latest frontier-grade model in the GPT-5 series, offering stronger agentic and long context perfomance compared to GPT-5.1. It uses adaptive reasoning to allocate computation dynamically, responding quickly to simple queries while spending more depth on complex tasks.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 391K tokens |
| **ID** | `openai/gpt-5.2` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.75
- Completion: $14.00
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: GPT-5.1-Codex-Max

> GPT-5.1-Codex-Max is OpenAI’s latest agentic coding model, designed for long-running, high-context software development tasks. It is based on an updated version of the 5.1 reasoning stack and trained on agentic workflows spanning software engineering, mathematics, and research. 

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 391K tokens |
| **ID** | `openai/gpt-5.1-codex-max` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.25
- Completion: $10.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: GPT-5.1

> GPT-5.1 is the latest frontier-grade model in the GPT-5 series, offering stronger general-purpose reasoning, improved instruction adherence, and a more natural conversational style compared to GPT-5. It uses adaptive reasoning to allocate computation dynamically, responding quickly to simple queries while spending more depth on complex tasks. The model produces clearer, more grounded explanations with reduced jargon, making it easier to follow even on technical or multi-step problems.

| Property | Value |
|----------|-------|
| **Created** | 11/2025 |
| **Context** | 391K tokens |
| **ID** | `openai/gpt-5.1` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.25
- Completion: $10.00
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: GPT-5.1 Chat

> GPT-5.1 Chat (AKA Instant is the fast, lightweight member of the 5.1 family, optimized for low-latency chat while retaining strong general intelligence. It uses adaptive reasoning to selectively “think” on harder queries, improving accuracy on math, coding, and multi-step tasks without slowing down typical conversations. The model is warmer and more conversational by default, with better instruction following and more stable short-form reasoning. GPT-5.1 Chat is designed for high-throughput, interactive workloads where responsiveness and consistency matter more than deep deliberation.

| Property | Value |
|----------|-------|
| **Created** | 11/2025 |
| **Context** | 125K tokens |
| **ID** | `openai/gpt-5.1-chat` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.25
- Completion: $10.00
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: GPT-5.1-Codex

> GPT-5.1-Codex is a specialized version of GPT-5.1 optimized for software engineering and coding workflows. It is designed for both interactive development sessions and long, independent execution of complex engineering tasks. The model supports building projects from scratch, feature development, debugging, large-scale refactoring, and code review. Compared to GPT-5.1, Codex is more steerable, adheres closely to developer instructions, and produces cleaner, higher-quality code outputs. Reasoning effort can be adjusted with the `reasoning.effort` parameter. Read the [docs here](https://openrouter.ai/docs/use-cases/reasoning-tokens#reasoning-effort-level)

| Property | Value |
|----------|-------|
| **Created** | 11/2025 |
| **Context** | 391K tokens |
| **ID** | `openai/gpt-5.1-codex` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.25
- Completion: $10.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: GPT-5.1-Codex-Mini

> GPT-5.1-Codex-Mini is a smaller and faster version of GPT-5.1-Codex

| Property | Value |
|----------|-------|
| **Created** | 11/2025 |
| **Context** | 391K tokens |
| **ID** | `openai/gpt-5.1-codex-mini` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.25
- Completion: $2.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: GPT-5 Image Mini

> GPT-5 Image Mini combines OpenAI's advanced language capabilities, powered by [GPT-5 Mini](https://openrouter.ai/openai/gpt-5-mini), with GPT Image 1 Mini for efficient image generation. This natively multimodal model features superior instruction following, text rendering, and detailed image editing with reduced latency and cost. It excels at high-quality visual creation while maintaining strong text understanding, making it ideal for applications that require both efficient image generation and text processing at scale.

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 391K tokens |
| **ID** | `openai/gpt-5-image-mini` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.50
- Completion: $2.00
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: GPT-5 Image

> [GPT-5](https://openrouter.ai/openai/gpt-5) Image combines OpenAI's GPT-5 model with state-of-the-art image generation capabilities. It offers major improvements in reasoning, code quality, and user experience while incorporating GPT Image 1's superior instruction following, text rendering, and detailed image editing.

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 391K tokens |
| **ID** | `openai/gpt-5-image` |

**💸 Pricing** (per 1M tokens)

- Prompt: $10.00
- Completion: $10.00
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: o3 Deep Research

> o3-deep-research is OpenAI's advanced model for deep research, designed to tackle complex, multi-step research tasks.

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 195K tokens |
| **ID** | `openai/o3-deep-research` |

**💸 Pricing** (per 1M tokens)

- Prompt: $10.00
- Completion: $40.00
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: o4 Mini Deep Research

> o4-mini-deep-research is OpenAI's faster, more affordable deep research model—ideal for tackling complex, multi-step research tasks.

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 195K tokens |
| **ID** | `openai/o4-mini-deep-research` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.00
- Completion: $8.00
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: GPT-5 Pro

> GPT-5 Pro is OpenAI’s most advanced model, offering major improvements in reasoning, code quality, and user experience. It is optimized for complex tasks that require step-by-step reasoning, instruction following, and accuracy in high-stakes use cases. It supports test-time routing features and advanced prompt understanding, including user-specified intent like "think hard about this." Improvements include reductions in hallucination, sycophancy, and better performance in coding, writing, and health-related tasks.

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 391K tokens |
| **ID** | `openai/gpt-5-pro` |

**💸 Pricing** (per 1M tokens)

- Prompt: $15.00
- Completion: $120.00
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: GPT-5 Codex

> GPT-5-Codex is a specialized version of GPT-5 optimized for software engineering and coding workflows. It is designed for both interactive development sessions and long, independent execution of complex engineering tasks. The model supports building projects from scratch, feature development, debugging, large-scale refactoring, and code review. Compared to GPT-5, Codex is more steerable, adheres closely to developer instructions, and produces cleaner, higher-quality code outputs. Reasoning effort can be adjusted with the `reasoning.effort` parameter. Read the [docs here](https://openrouter.ai/docs/use-cases/reasoning-tokens#reasoning-effort-level)

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 391K tokens |
| **ID** | `openai/gpt-5-codex` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.25
- Completion: $10.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: GPT-4o Audio

> The gpt-4o-audio-preview model adds support for audio inputs as prompts. This enhancement allows the model to detect nuances within audio recordings and add depth to generated user experiences. Audio outputs are currently not supported. Audio tokens are priced at $40 per million input audio tokens.

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 125K tokens |
| **ID** | `openai/gpt-4o-audio-preview` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.50
- Completion: $10.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: GPT-5 Chat

> GPT-5 Chat is designed for advanced, natural, multimodal, and context-aware conversations for enterprise applications.

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 125K tokens |
| **ID** | `openai/gpt-5-chat` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.25
- Completion: $10.00
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs

### ✅ OpenAI: GPT-5

> GPT-5 is OpenAI’s most advanced model, offering major improvements in reasoning, code quality, and user experience. It is optimized for complex tasks that require step-by-step reasoning, instruction following, and accuracy in high-stakes use cases. It supports test-time routing features and advanced prompt understanding, including user-specified intent like "think hard about this." Improvements include reductions in hallucination, sycophancy, and better performance in coding, writing, and health-related tasks.

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 391K tokens |
| **ID** | `openai/gpt-5` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.25
- Completion: $10.00
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: GPT-5 Mini

> GPT-5 Mini is a compact version of GPT-5, designed to handle lighter-weight reasoning tasks. It provides the same instruction-following and safety-tuning benefits as GPT-5, but with reduced latency and cost. GPT-5 Mini is the successor to OpenAI's o4-mini model.

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 391K tokens |
| **ID** | `openai/gpt-5-mini` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.25
- Completion: $2.00
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: GPT-5 Nano

> GPT-5-Nano is the smallest and fastest variant in the GPT-5 system, optimized for developer tools, rapid interactions, and ultra-low latency environments. While limited in reasoning depth compared to its larger counterparts, it retains key instruction-following and safety features. It is the successor to GPT-4.1-nano and offers a lightweight option for cost-sensitive or real-time applications.

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 391K tokens |
| **ID** | `openai/gpt-5-nano` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.05
- Completion: $0.40
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: gpt-oss-120b

> gpt-oss-120b is an open-weight, 117B-parameter Mixture-of-Experts (MoE) language model from OpenAI designed for high-reasoning, agentic, and general-purpose production use cases. It activates 5.1B parameters per forward pass and is optimized to run on a single H100 GPU with native MXFP4 quantization. The model supports configurable reasoning depth, full chain-of-thought access, and native tool use, including function calling, browsing, and structured output generation.

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 128K tokens |
| **ID** | `openai/gpt-oss-120b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.02
- Completion: $0.10

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: gpt-oss-120b (exacto)

> gpt-oss-120b is an open-weight, 117B-parameter Mixture-of-Experts (MoE) language model from OpenAI designed for high-reasoning, agentic, and general-purpose production use cases. It activates 5.1B parameters per forward pass and is optimized to run on a single H100 GPU with native MXFP4 quantization. The model supports configurable reasoning depth, full chain-of-thought access, and native tool use, including function calling, browsing, and structured output generation.

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 128K tokens |
| **ID** | `openai/gpt-oss-120b:exacto` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.04
- Completion: $0.19

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: gpt-oss-20b

> gpt-oss-20b is an open-weight 21B parameter model released by OpenAI under the Apache 2.0 license. It uses a Mixture-of-Experts (MoE) architecture with 3.6B active parameters per forward pass, optimized for lower-latency inference and deployability on consumer or single-GPU hardware. The model is trained in OpenAI’s Harmony response format and supports reasoning level configuration, fine-tuning, and agentic capabilities including function calling, tool use, and structured outputs.

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 128K tokens |
| **ID** | `openai/gpt-oss-20b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.02
- Completion: $0.06

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: o3 Pro

> The o-series of models are trained with reinforcement learning to think before they answer and perform complex reasoning. The o3-pro model uses more compute to think harder and provide consistently better answers.

| Property | Value |
|----------|-------|
| **Created** | 6/2025 |
| **Context** | 195K tokens |
| **ID** | `openai/o3-pro` |

**💸 Pricing** (per 1M tokens)

- Prompt: $20.00
- Completion: $80.00
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: Codex Mini

> codex-mini-latest is a fine-tuned version of o4-mini specifically for use in Codex CLI. For direct use in the API, we recommend starting with gpt-4.1.

| Property | Value |
|----------|-------|
| **Created** | 5/2025 |
| **Context** | 195K tokens |
| **ID** | `openai/codex-mini` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.50
- Completion: $6.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: o4 Mini High

> OpenAI o4-mini-high is the same model as [o4-mini](/openai/o4-mini) with reasoning_effort set to high. 

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 195K tokens |
| **ID** | `openai/o4-mini-high` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.10
- Completion: $4.40
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: o3

> o3 is a well-rounded and powerful model across domains. It sets a new standard for math, science, coding, and visual reasoning tasks. It also excels at technical writing and instruction-following. Use it to think through multi-step problems that involve analysis across text, code, and images. 

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 195K tokens |
| **ID** | `openai/o3` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.00
- Completion: $8.00
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: o4 Mini

> OpenAI o4-mini is a compact reasoning model in the o-series, optimized for fast, cost-efficient performance while retaining strong multimodal and agentic capabilities. It supports tool use and demonstrates competitive reasoning and coding performance across benchmarks like AIME (99.5% with Python) and SWE-bench, outperforming its predecessor o3-mini and even approaching o3 in some domains.

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 195K tokens |
| **ID** | `openai/o4-mini` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.10
- Completion: $4.40
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ OpenAI: GPT-4.1

> GPT-4.1 is a flagship large language model optimized for advanced instruction following, real-world software engineering, and long-context reasoning. It supports a 1 million token context window and outperforms GPT-4o and GPT-4.5 across coding (54.6% SWE-bench Verified), instruction compliance (87.4% IFEval), and multimodal understanding benchmarks. It is tuned for precise code diffs, agent reliability, and high recall in large document contexts, making it ideal for agents, IDE tooling, and enterprise knowledge retrieval.

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 1023K tokens |
| **ID** | `openai/gpt-4.1` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.00
- Completion: $8.00
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: GPT-4.1 Mini

> GPT-4.1 Mini is a mid-sized model delivering performance competitive with GPT-4o at substantially lower latency and cost. It retains a 1 million token context window and scores 45.1% on hard instruction evals, 35.8% on MultiChallenge, and 84.1% on IFEval. Mini also shows strong coding ability (e.g., 31.6% on Aider’s polyglot diff benchmark) and vision understanding, making it suitable for interactive applications with tight performance constraints.

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 1023K tokens |
| **ID** | `openai/gpt-4.1-mini` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.40
- Completion: $1.60
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: GPT-4.1 Nano

> For tasks that demand low latency, GPT‑4.1 nano is the fastest and cheapest model in the GPT-4.1 series. It delivers exceptional performance at a small size with its 1 million token context window, and scores 80.1% on MMLU, 50.3% on GPQA, and 9.8% on Aider polyglot coding – even higher than GPT‑4o mini. It’s ideal for tasks like classification or autocompletion.

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 1023K tokens |
| **ID** | `openai/gpt-4.1-nano` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.10
- Completion: $0.40
- Web Search: 0.01

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: o1-pro

> The o1 series of models are trained with reinforcement learning to think before they answer and perform complex reasoning. The o1-pro model uses more compute to think harder and provide consistently better answers.

| Property | Value |
|----------|-------|
| **Created** | 3/2025 |
| **Context** | 195K tokens |
| **ID** | `openai/o1-pro` |

**💸 Pricing** (per 1M tokens)

- Prompt: $150.00
- Completion: $600.00

**Capabilities:** 🧱 Structured Outputs · 🧠 Reasoning

### ✅ OpenAI: GPT-4o-mini Search Preview

> GPT-4o mini Search Preview is a specialized model for web search in Chat Completions. It is trained to understand and execute web search queries.

| Property | Value |
|----------|-------|
| **Created** | 3/2025 |
| **Context** | 125K tokens |
| **ID** | `openai/gpt-4o-mini-search-preview` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.15
- Completion: $0.60

**Capabilities:** 🧱 Structured Outputs · 🌐 Web Search

### ✅ OpenAI: GPT-4o Search Preview

> GPT-4o Search Previewis a specialized model for web search in Chat Completions. It is trained to understand and execute web search queries.

| Property | Value |
|----------|-------|
| **Created** | 3/2025 |
| **Context** | 125K tokens |
| **ID** | `openai/gpt-4o-search-preview` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.50
- Completion: $10.00

**Capabilities:** 🧱 Structured Outputs · 🌐 Web Search

### ✅ OpenAI: o3 Mini High

> OpenAI o3-mini-high is the same model as [o3-mini](/openai/o3-mini) with reasoning_effort set to high. 

| Property | Value |
|----------|-------|
| **Created** | 2/2025 |
| **Context** | 195K tokens |
| **ID** | `openai/o3-mini-high` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.10
- Completion: $4.40

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: o3 Mini

> OpenAI o3-mini is a cost-efficient language model optimized for STEM reasoning tasks, particularly excelling in science, mathematics, and coding.

| Property | Value |
|----------|-------|
| **Created** | 1/2025 |
| **Context** | 195K tokens |
| **ID** | `openai/o3-mini` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.10
- Completion: $4.40

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: o1

> The latest and strongest model family from OpenAI, o1 is designed to spend more time thinking before responding. The o1 model series is trained with large-scale reinforcement learning to reason using chain of thought. 

| Property | Value |
|----------|-------|
| **Created** | 12/2024 |
| **Context** | 195K tokens |
| **ID** | `openai/o1` |

**💸 Pricing** (per 1M tokens)

- Prompt: $15.00
- Completion: $60.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: GPT-4o (2024-11-20)

> The 2024-11-20 version of GPT-4o offers a leveled-up creative writing ability with more natural, engaging, and tailored writing to improve relevance & readability. It’s also better at working with uploaded files, providing deeper insights & more thorough responses.

| Property | Value |
|----------|-------|
| **Created** | 11/2024 |
| **Context** | 125K tokens |
| **ID** | `openai/gpt-4o-2024-11-20` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.50
- Completion: $10.00

**Capabilities:** 🧱 Structured Outputs · 🌐 Web Search · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: ChatGPT-4o

> OpenAI ChatGPT 4o is continually updated by OpenAI to point to the current version of GPT-4o used by ChatGPT. It therefore differs slightly from the API version of [GPT-4o](/models/openai/gpt-4o) in that it has additional RLHF. It is intended for research and evaluation.

| Property | Value |
|----------|-------|
| **Created** | 8/2024 |
| **Context** | 125K tokens |
| **ID** | `openai/chatgpt-4o-latest` |

**💸 Pricing** (per 1M tokens)

- Prompt: $5.00
- Completion: $15.00

**Capabilities:** 🧱 Structured Outputs

### ✅ OpenAI: GPT-4o (2024-08-06)

> The 2024-08-06 version of GPT-4o offers improved performance in structured outputs, with the ability to supply a JSON schema in the respone_format. Read more [here](https://openai.com/index/introducing-structured-outputs-in-the-api/).

| Property | Value |
|----------|-------|
| **Created** | 8/2024 |
| **Context** | 125K tokens |
| **ID** | `openai/gpt-4o-2024-08-06` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.50
- Completion: $10.00

**Capabilities:** 🧱 Structured Outputs · 🌐 Web Search · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: GPT-4o-mini (2024-07-18)

> GPT-4o mini is OpenAI's newest model after [GPT-4 Omni](/models/openai/gpt-4o), supporting both text and image inputs with text outputs.

| Property | Value |
|----------|-------|
| **Created** | 7/2024 |
| **Context** | 125K tokens |
| **ID** | `openai/gpt-4o-mini-2024-07-18` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.15
- Completion: $0.60

**Capabilities:** 🧱 Structured Outputs · 🌐 Web Search · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: GPT-4o-mini

> GPT-4o mini is OpenAI's newest model after [GPT-4 Omni](/models/openai/gpt-4o), supporting both text and image inputs with text outputs.

| Property | Value |
|----------|-------|
| **Created** | 7/2024 |
| **Context** | 125K tokens |
| **ID** | `openai/gpt-4o-mini` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.15
- Completion: $0.60

**Capabilities:** 🧱 Structured Outputs · 🌐 Web Search · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: GPT-4o (2024-05-13)

> GPT-4o ("o" for "omni") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as fast and 50% more cost-effective. GPT-4o also offers improved performance in processing non-English languages and enhanced visual capabilities.

| Property | Value |
|----------|-------|
| **Created** | 5/2024 |
| **Context** | 125K tokens |
| **ID** | `openai/gpt-4o-2024-05-13` |

**💸 Pricing** (per 1M tokens)

- Prompt: $5.00
- Completion: $15.00

**Capabilities:** 🧱 Structured Outputs · 🌐 Web Search · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: GPT-4o

> GPT-4o ("o" for "omni") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as fast and 50% more cost-effective. GPT-4o also offers improved performance in processing non-English languages and enhanced visual capabilities.

| Property | Value |
|----------|-------|
| **Created** | 5/2024 |
| **Context** | 125K tokens |
| **ID** | `openai/gpt-4o` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.50
- Completion: $10.00

**Capabilities:** 🧱 Structured Outputs · 🌐 Web Search · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: GPT-4o (extended)

> GPT-4o ("o" for "omni") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as fast and 50% more cost-effective. GPT-4o also offers improved performance in processing non-English languages and enhanced visual capabilities.

| Property | Value |
|----------|-------|
| **Created** | 5/2024 |
| **Context** | 125K tokens |
| **ID** | `openai/gpt-4o:extended` |

**💸 Pricing** (per 1M tokens)

- Prompt: $6.00
- Completion: $18.00

**Capabilities:** 🧱 Structured Outputs · 🌐 Web Search · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: GPT-4 Turbo

> The latest GPT-4 Turbo model with vision capabilities. Vision requests can now use JSON mode and function calling.

| Property | Value |
|----------|-------|
| **Created** | 4/2024 |
| **Context** | 125K tokens |
| **ID** | `openai/gpt-4-turbo` |

**💸 Pricing** (per 1M tokens)

- Prompt: $10.00
- Completion: $30.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: GPT-3.5 Turbo (older v0613)

> GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks.

| Property | Value |
|----------|-------|
| **Created** | 1/2024 |
| **Context** | 4K tokens |
| **ID** | `openai/gpt-3.5-turbo-0613` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.00
- Completion: $2.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: GPT-4 Turbo Preview

> The preview GPT-4 model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more. Training data: up to Dec 2023.

| Property | Value |
|----------|-------|
| **Created** | 1/2024 |
| **Context** | 125K tokens |
| **ID** | `openai/gpt-4-turbo-preview` |

**💸 Pricing** (per 1M tokens)

- Prompt: $10.00
- Completion: $30.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: GPT-4 Turbo (older v1106)

> The latest GPT-4 Turbo model with vision capabilities. Vision requests can now use JSON mode and function calling.

| Property | Value |
|----------|-------|
| **Created** | 11/2023 |
| **Context** | 125K tokens |
| **ID** | `openai/gpt-4-1106-preview` |

**💸 Pricing** (per 1M tokens)

- Prompt: $10.00
- Completion: $30.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: GPT-3.5 Turbo Instruct

> This model is a variant of GPT-3.5 Turbo tuned for instructional prompts and omitting chat-related optimizations. Training data: up to Sep 2021.

| Property | Value |
|----------|-------|
| **Created** | 9/2023 |
| **Context** | 4K tokens |
| **ID** | `openai/gpt-3.5-turbo-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.50
- Completion: $2.00

**Capabilities:** 🧱 Structured Outputs

### ✅ OpenAI: GPT-3.5 Turbo 16k

> This model offers four times the context length of gpt-3.5-turbo, allowing it to support approximately 20 pages of text in a single request at a higher cost. Training data: up to Sep 2021.

| Property | Value |
|----------|-------|
| **Created** | 8/2023 |
| **Context** | 16K tokens |
| **ID** | `openai/gpt-3.5-turbo-16k` |

**💸 Pricing** (per 1M tokens)

- Prompt: $3.00
- Completion: $4.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: GPT-4 (older v0314)

> GPT-4-0314 is the first version of GPT-4 released, with a context length of 8,192 tokens, and was supported until June 14. Training data: up to Sep 2021.

| Property | Value |
|----------|-------|
| **Created** | 5/2023 |
| **Context** | 8K tokens |
| **ID** | `openai/gpt-4-0314` |

**💸 Pricing** (per 1M tokens)

- Prompt: $30.00
- Completion: $60.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: GPT-4

> OpenAI's flagship model, GPT-4 is a large-scale multimodal language model capable of solving difficult problems with greater accuracy than previous models due to its broader general knowledge and advanced reasoning capabilities. Training data: up to Sep 2021.

| Property | Value |
|----------|-------|
| **Created** | 5/2023 |
| **Context** | 8K tokens |
| **ID** | `openai/gpt-4` |

**💸 Pricing** (per 1M tokens)

- Prompt: $30.00
- Completion: $60.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ OpenAI: GPT-3.5 Turbo

> GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks.

| Property | Value |
|----------|-------|
| **Created** | 5/2023 |
| **Context** | 16K tokens |
| **ID** | `openai/gpt-3.5-turbo` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.50
- Completion: $1.50

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

---

## opengvlab

> Open research lab focused on vision-language models and multimodal AI.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Strong vision capabilities | Specialized focus |
| Open research | Limited general use |

*1 model with structured outputs*

### ✅ OpenGVLab: InternVL3 78B

> The InternVL3 series is an advanced multimodal large language model (MLLM). Compared to InternVL 2.5, InternVL3 demonstrates stronger multimodal perception and reasoning capabilities. 

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 32K tokens |
| **ID** | `opengvlab/internvl3-78b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.10
- Completion: $0.39

**Capabilities:** 🧱 Structured Outputs

---

## prime-intellect

> Decentralized AI collective training models with distributed compute.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Decentralized training | Newer approach |
| Open development | Limited model selection |

*1 model with structured outputs*

### ✅ Prime Intellect: INTELLECT-3

> INTELLECT-3 is a 106B-parameter Mixture-of-Experts model (12B active) post-trained from GLM-4.5-Air-Base using supervised fine-tuning (SFT) followed by large-scale reinforcement learning (RL). It offers state-of-the-art performance for its size across math, code, science, and general reasoning, consistently outperforming many larger frontier models. Designed for strong multi-step problem solving, it maintains high accuracy on structured tasks while remaining efficient at inference thanks to its MoE architecture.

| Property | Value |
|----------|-------|
| **Created** | 11/2025 |
| **Context** | 128K tokens |
| **ID** | `prime-intellect/intellect-3` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.20
- Completion: $1.10

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

---

## qwen

> Alibaba's flagship model series with excellent coding and multilingual performance.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Excellent coding | Chinese company concerns for some |
| Strong multilingual | Variable quality across sizes |
| Many size options |  |
| Open weights |  |

*31 models with structured outputs*

### ✅ Qwen: Qwen3 VL 32B Instruct

> Qwen3-VL-32B-Instruct is a large-scale multimodal vision-language model designed for high-precision understanding and reasoning across text, images, and video. With 32 billion parameters, it combines deep visual perception with advanced text comprehension, enabling fine-grained spatial reasoning, document and scene analysis, and long-horizon video understanding.Robust OCR in 32 languages, and enhanced multimodal fusion through Interleaved-MRoPE and DeepStack architectures. Optimized for agentic interaction and visual tool use, Qwen3-VL-32B delivers state-of-the-art performance for complex real-world multimodal tasks.

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 256K tokens |
| **ID** | `qwen/qwen3-vl-32b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.50
- Completion: $1.50

**Capabilities:** 🧱 Structured Outputs

### ✅ Qwen: Qwen3 VL 8B Thinking

> Qwen3-VL-8B-Thinking is the reasoning-optimized variant of the Qwen3-VL-8B multimodal model, designed for advanced visual and textual reasoning across complex scenes, documents, and temporal sequences. It integrates enhanced multimodal alignment and long-context processing (native 256K, expandable to 1M tokens) for tasks such as scientific visual analysis, causal inference, and mathematical reasoning over image or video inputs.

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 250K tokens |
| **ID** | `qwen/qwen3-vl-8b-thinking` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.18
- Completion: $2.10

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Qwen: Qwen3 VL 8B Instruct

> Qwen3-VL-8B-Instruct is a multimodal vision-language model from the Qwen3-VL series, built for high-fidelity understanding and reasoning across text, images, and video. It features improved multimodal fusion with Interleaved-MRoPE for long-horizon temporal reasoning, DeepStack for fine-grained visual-text alignment, and text-timestamp alignment for precise event localization.

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 128K tokens |
| **ID** | `qwen/qwen3-vl-8b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.08
- Completion: $0.50

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Qwen: Qwen3 VL 30B A3B Thinking

> Qwen3-VL-30B-A3B-Thinking is a multimodal model that unifies strong text generation with visual understanding for images and videos. Its Thinking variant enhances reasoning in STEM, math, and complex tasks. It excels in perception of real-world/synthetic categories, 2D/3D spatial grounding, and long-form visual comprehension, achieving competitive multimodal benchmark results. For agentic use, it handles multi-image multi-turn instructions, video timeline alignments, GUI automation, and visual coding from sketches to debugged UI. Text performance matches flagship Qwen3 models, suiting document AI, OCR, UI assistance, spatial tasks, and agent research.

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 128K tokens |
| **ID** | `qwen/qwen3-vl-30b-a3b-thinking` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.20
- Completion: $1.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Qwen: Qwen3 VL 30B A3B Instruct

> Qwen3-VL-30B-A3B-Instruct is a multimodal model that unifies strong text generation with visual understanding for images and videos. Its Instruct variant optimizes instruction-following for general multimodal tasks. It excels in perception of real-world/synthetic categories, 2D/3D spatial grounding, and long-form visual comprehension, achieving competitive multimodal benchmark results. For agentic use, it handles multi-image multi-turn instructions, video timeline alignments, GUI automation, and visual coding from sketches to debugged UI. Text performance matches flagship Qwen3 models, suiting document AI, OCR, UI assistance, spatial tasks, and agent research.

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 256K tokens |
| **ID** | `qwen/qwen3-vl-30b-a3b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.15
- Completion: $0.60

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Qwen: Qwen3 VL 235B A22B Thinking

> Qwen3-VL-235B-A22B Thinking is a multimodal model that unifies strong text generation with visual understanding across images and video. The Thinking model is optimized for multimodal reasoning in STEM and math. The series emphasizes robust perception (recognition of diverse real-world and synthetic categories), spatial understanding (2D/3D grounding), and long-form visual comprehension, with competitive results on public multimodal benchmarks for both perception and reasoning.

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 256K tokens |
| **ID** | `qwen/qwen3-vl-235b-a22b-thinking` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.45
- Completion: $3.50

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Qwen: Qwen3 VL 235B A22B Instruct

> Qwen3-VL-235B-A22B Instruct is an open-weight multimodal model that unifies strong text generation with visual understanding across images and video. The Instruct model targets general vision-language use (VQA, document parsing, chart/table extraction, multilingual OCR). The series emphasizes robust perception (recognition of diverse real-world and synthetic categories), spatial understanding (2D/3D grounding), and long-form visual comprehension, with competitive results on public multimodal benchmarks for both perception and reasoning.

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 256K tokens |
| **ID** | `qwen/qwen3-vl-235b-a22b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.12
- Completion: $0.56

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Qwen: Qwen3 Coder Plus

> Qwen3 Coder Plus is Alibaba's proprietary version of the Open Source Qwen3 Coder 480B A35B. It is a powerful coding agent model specializing in autonomous programming via tool calling and environment interaction, combining coding proficiency with versatile general-purpose abilities.

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 125K tokens |
| **ID** | `qwen/qwen3-coder-plus` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.00
- Completion: $5.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Qwen: Qwen3 Next 80B A3B Thinking

> Qwen3-Next-80B-A3B-Thinking is a reasoning-first chat model in the Qwen3-Next line that outputs structured “thinking” traces by default. It’s designed for hard multi-step problems; math proofs, code synthesis/debugging, logic, and agentic planning, and reports strong results across knowledge, reasoning, coding, alignment, and multilingual evaluations. Compared with prior Qwen3 variants, it emphasizes stability under long chains of thought and efficient scaling during inference, and it is tuned to follow complex instructions while reducing repetitive or off-task behavior.

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 256K tokens |
| **ID** | `qwen/qwen3-next-80b-a3b-thinking` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.15
- Completion: $1.20

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Qwen: Qwen3 Next 80B A3B Instruct

> Qwen3-Next-80B-A3B-Instruct is an instruction-tuned chat model in the Qwen3-Next series optimized for fast, stable responses without “thinking” traces. It targets complex tasks across reasoning, code generation, knowledge QA, and multilingual use, while remaining robust on alignment and formatting. Compared with prior Qwen3 instruct variants, it focuses on higher throughput and stability on ultra-long inputs and multi-turn dialogues, making it well-suited for RAG, tool use, and agentic workflows that require consistent final answers rather than visible chain-of-thought.

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 256K tokens |
| **ID** | `qwen/qwen3-next-80b-a3b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.06
- Completion: $0.60

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Qwen: Qwen Plus 0728

> Qwen Plus 0728, based on the Qwen3 foundation model, is a 1 million context hybrid reasoning model with a balanced performance, speed, and cost combination.

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 977K tokens |
| **ID** | `qwen/qwen-plus-2025-07-28` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.40
- Completion: $1.20

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Qwen: Qwen Plus 0728 (thinking)

> Qwen Plus 0728, based on the Qwen3 foundation model, is a 1 million context hybrid reasoning model with a balanced performance, speed, and cost combination.

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 977K tokens |
| **ID** | `qwen/qwen-plus-2025-07-28:thinking` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.40
- Completion: $4.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Qwen: Qwen3 30B A3B Thinking 2507

> Qwen3-30B-A3B-Thinking-2507 is a 30B parameter Mixture-of-Experts reasoning model optimized for complex tasks requiring extended multi-step thinking. The model is designed specifically for “thinking mode,” where internal reasoning traces are separated from final answers.

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 32K tokens |
| **ID** | `qwen/qwen3-30b-a3b-thinking-2507` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.05
- Completion: $0.34

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Qwen: Qwen3 Coder 30B A3B Instruct

> Qwen3-Coder-30B-A3B-Instruct is a 30.5B parameter Mixture-of-Experts (MoE) model with 128 experts (8 active per forward pass), designed for advanced code generation, repository-scale understanding, and agentic tool use. Built on the Qwen3 architecture, it supports a native context length of 256K tokens (extendable to 1M with Yarn) and performs strongly in tasks involving function calls, browser use, and structured code completion.

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 156K tokens |
| **ID** | `qwen/qwen3-coder-30b-a3b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.07
- Completion: $0.27

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Qwen: Qwen3 30B A3B Instruct 2507

> Qwen3-30B-A3B-Instruct-2507 is a 30.5B-parameter mixture-of-experts language model from Qwen, with 3.3B active parameters per inference. It operates in non-thinking mode and is designed for high-quality instruction following, multilingual understanding, and agentic tool use. Post-trained on instruction data, it demonstrates competitive performance across reasoning (AIME, ZebraLogic), coding (MultiPL-E, LiveCodeBench), and alignment (IFEval, WritingBench) benchmarks. It outperforms its non-instruct variant on subjective and open-ended tasks while retaining strong factual and coding performance.

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 256K tokens |
| **ID** | `qwen/qwen3-30b-a3b-instruct-2507` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.08
- Completion: $0.33

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Qwen: Qwen3 235B A22B Thinking 2507

> Qwen3-235B-A22B-Thinking-2507 is a high-performance, open-weight Mixture-of-Experts (MoE) language model optimized for complex reasoning tasks. It activates 22B of its 235B parameters per forward pass and natively supports up to 262,144 tokens of context. This "thinking-only" variant enhances structured logical reasoning, mathematics, science, and long-form generation, showing strong benchmark performance across AIME, SuperGPQA, LiveCodeBench, and MMLU-Redux. It enforces a special reasoning mode (</think>) and is designed for high-token outputs (up to 81,920 tokens) in challenging domains.

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 256K tokens |
| **ID** | `qwen/qwen3-235b-a22b-thinking-2507` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.11
- Completion: $0.60

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Qwen: Qwen3 Coder 480B A35B

> Qwen3-Coder-480B-A35B-Instruct is a Mixture-of-Experts (MoE) code generation model developed by the Qwen team. It is optimized for agentic coding tasks such as function calling, tool use, and long-context reasoning over repositories. The model features 480 billion total parameters, with 35 billion active per forward pass (8 out of 160 experts).

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 256K tokens |
| **ID** | `qwen/qwen3-coder` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.22
- Completion: $0.95

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Qwen: Qwen3 Coder 480B A35B (exacto)

> Qwen3-Coder-480B-A35B-Instruct is a Mixture-of-Experts (MoE) code generation model developed by the Qwen team. It is optimized for agentic coding tasks such as function calling, tool use, and long-context reasoning over repositories. The model features 480 billion total parameters, with 35 billion active per forward pass (8 out of 160 experts).

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 256K tokens |
| **ID** | `qwen/qwen3-coder:exacto` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.22
- Completion: $1.80

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Qwen: Qwen3 235B A22B Instruct 2507

> Qwen3-235B-A22B-Instruct-2507 is a multilingual, instruction-tuned mixture-of-experts language model based on the Qwen3-235B architecture, with 22B active parameters per forward pass. It is optimized for general-purpose text generation, including instruction following, logical reasoning, math, code, and tool usage. The model supports a native 262K context length and does not implement "thinking mode" (<think> blocks).

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 256K tokens |
| **ID** | `qwen/qwen3-235b-a22b-2507` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.07
- Completion: $0.46

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Qwen: Qwen3 4B (free)

> Qwen3-4B is a 4 billion parameter dense language model from the Qwen3 series, designed to support both general-purpose and reasoning-intensive tasks. It introduces a dual-mode architecture—thinking and non-thinking—allowing dynamic switching between high-precision logical reasoning and efficient dialogue generation. This makes it well-suited for multi-turn chat, instruction following, and complex agent workflows.

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 40K tokens |
| **ID** | `qwen/qwen3-4b:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Qwen: Qwen3 30B A3B

> Qwen3, the latest generation in the Qwen large language model series, features both dense and mixture-of-experts (MoE) architectures to excel in reasoning, multilingual support, and advanced agent tasks. Its unique ability to switch seamlessly between a thinking mode for complex reasoning and a non-thinking mode for efficient dialogue ensures versatile, high-quality performance.

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 40K tokens |
| **ID** | `qwen/qwen3-30b-a3b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.06
- Completion: $0.22

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Qwen: Qwen3 8B

> Qwen3-8B is a dense 8.2B parameter causal language model from the Qwen3 series, designed for both reasoning-heavy tasks and efficient dialogue. It supports seamless switching between "thinking" mode for math, coding, and logical inference, and "non-thinking" mode for general conversation. The model is fine-tuned for instruction-following, agent integration, creative writing, and multilingual use across 100+ languages and dialects. It natively supports a 32K token context window and can extend to 131K tokens with YaRN scaling.

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 125K tokens |
| **ID** | `qwen/qwen3-8b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.04
- Completion: $0.14

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Qwen: Qwen3 14B

> Qwen3-14B is a dense 14.8B parameter causal language model from the Qwen3 series, designed for both complex reasoning and efficient dialogue. It supports seamless switching between a "thinking" mode for tasks like math, programming, and logical inference, and a "non-thinking" mode for general-purpose conversation. The model is fine-tuned for instruction-following, agent tool use, creative writing, and multilingual tasks across 100+ languages and dialects. It natively handles 32K token contexts and can extend to 131K tokens using YaRN-based scaling.

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 40K tokens |
| **ID** | `qwen/qwen3-14b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.05
- Completion: $0.22

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Qwen: Qwen3 32B

> Qwen3-32B is a dense 32.8B parameter causal language model from the Qwen3 series, optimized for both complex reasoning and efficient dialogue. It supports seamless switching between a "thinking" mode for tasks like math, coding, and logical inference, and a "non-thinking" mode for faster, general-purpose conversation. The model demonstrates strong performance in instruction-following, agent tool use, creative writing, and multilingual tasks across 100+ languages and dialects. It natively handles 32K token contexts and can extend to 131K tokens using YaRN-based scaling. 

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 40K tokens |
| **ID** | `qwen/qwen3-32b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.08
- Completion: $0.24

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Qwen: Qwen3 235B A22B

> Qwen3-235B-A22B is a 235B parameter mixture-of-experts (MoE) model developed by Qwen, activating 22B parameters per forward pass. It supports seamless switching between a "thinking" mode for complex reasoning, math, and code tasks, and a "non-thinking" mode for general conversational efficiency. The model demonstrates strong reasoning ability, multilingual support (100+ languages and dialects), advanced instruction-following, and agent tool-calling capabilities. It natively handles a 32K token context window and extends up to 131K tokens using YaRN-based scaling.

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 40K tokens |
| **ID** | `qwen/qwen3-235b-a22b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.18
- Completion: $0.54

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Qwen: Qwen2.5 Coder 7B Instruct

> Qwen2.5-Coder-7B-Instruct is a 7B parameter instruction-tuned language model optimized for code-related tasks such as code generation, reasoning, and bug fixing. Based on the Qwen2.5 architecture, it incorporates enhancements like RoPE, SwiGLU, RMSNorm, and GQA attention with support for up to 128K tokens using YaRN-based extrapolation. It is trained on a large corpus of source code, synthetic data, and text-code grounding, providing robust performance across programming languages and agentic coding workflows.

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 32K tokens |
| **ID** | `qwen/qwen2.5-coder-7b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.03
- Completion: $0.09

**Capabilities:** 🧱 Structured Outputs

### ✅ Qwen: Qwen2.5 VL 32B Instruct

> Qwen2.5-VL-32B is a multimodal vision-language model fine-tuned through reinforcement learning for enhanced mathematical reasoning, structured outputs, and visual problem-solving capabilities. It excels at visual analysis tasks, including object recognition, textual interpretation within images, and precise event localization in extended videos. Qwen2.5-VL-32B demonstrates state-of-the-art performance across multimodal benchmarks such as MMMU, MathVista, and VideoMME, while maintaining strong reasoning and clarity in text-based tasks like MMLU, mathematical problem-solving, and code generation.

| Property | Value |
|----------|-------|
| **Created** | 3/2025 |
| **Context** | 16K tokens |
| **ID** | `qwen/qwen2.5-vl-32b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.05
- Completion: $0.22

**Capabilities:** 🧱 Structured Outputs

### ✅ Qwen: QwQ 32B

> QwQ is the reasoning model of the Qwen series. Compared with conventional instruction-tuned models, QwQ, which is capable of thinking and reasoning, can achieve significantly enhanced performance in downstream tasks, especially hard problems. QwQ-32B is the medium-sized reasoning model, which is capable of achieving competitive performance against state-of-the-art reasoning models, e.g., DeepSeek-R1, o1-mini.

| Property | Value |
|----------|-------|
| **Created** | 3/2025 |
| **Context** | 32K tokens |
| **ID** | `qwen/qwq-32b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.15
- Completion: $0.40

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Qwen: Qwen2.5 VL 72B Instruct

> Qwen2.5-VL is proficient in recognizing common objects such as flowers, birds, fish, and insects. It is also highly capable of analyzing texts, charts, icons, graphics, and layouts within images.

| Property | Value |
|----------|-------|
| **Created** | 2/2025 |
| **Context** | 32K tokens |
| **ID** | `qwen/qwen2.5-vl-72b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.15
- Completion: $0.60

**Capabilities:** 🧱 Structured Outputs

### ✅ Qwen2.5 Coder 32B Instruct

> Qwen2.5-Coder is the latest series of Code-Specific Qwen large language models (formerly known as CodeQwen). Qwen2.5-Coder brings the following improvements upon CodeQwen1.5:

| Property | Value |
|----------|-------|
| **Created** | 11/2024 |
| **Context** | 32K tokens |
| **ID** | `qwen/qwen-2.5-coder-32b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.03
- Completion: $0.11

**Capabilities:** 🧱 Structured Outputs

### ✅ Qwen2.5 72B Instruct

> Qwen2.5 72B is the latest series of Qwen large language models. Qwen2.5 brings the following improvements upon Qwen2:

| Property | Value |
|----------|-------|
| **Created** | 9/2024 |
| **Context** | 32K tokens |
| **ID** | `qwen/qwen-2.5-72b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.12
- Completion: $0.39

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

---

## sao10k

> Independent creator of Llama fine-tunes focused on creative and roleplay use.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Creative writing focus | Niche use case |
| Community favorite for RP | Based on other models |

*3 models with structured outputs*

### ✅ Sao10K: Llama 3.3 Euryale 70B

> Euryale L3.3 70B is a model focused on creative roleplay from [Sao10k](https://ko-fi.com/sao10k). It is the successor of [Euryale L3 70B v2.2](/models/sao10k/l3-euryale-70b).

| Property | Value |
|----------|-------|
| **Created** | 12/2024 |
| **Context** | 128K tokens |
| **ID** | `sao10k/l3.3-euryale-70b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.65
- Completion: $0.75

**Capabilities:** 🧱 Structured Outputs

### ✅ Sao10K: Llama 3.1 Euryale 70B v2.2

> Euryale L3.1 70B v2.2 is a model focused on creative roleplay from [Sao10k](https://ko-fi.com/sao10k). It is the successor of [Euryale L3 70B v2.1](/models/sao10k/l3-euryale-70b).

| Property | Value |
|----------|-------|
| **Created** | 8/2024 |
| **Context** | 32K tokens |
| **ID** | `sao10k/l3.1-euryale-70b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.65
- Completion: $0.75

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ Sao10K: Llama 3 8B Lunaris

> Lunaris 8B is a versatile generalist and roleplaying model based on Llama 3. It's a strategic merge of multiple models, designed to balance creativity with improved logic and general knowledge.

| Property | Value |
|----------|-------|
| **Created** | 8/2024 |
| **Context** | 8K tokens |
| **ID** | `sao10k/l3-lunaris-8b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.04
- Completion: $0.05

**Capabilities:** 🧱 Structured Outputs

---

## stepfun-ai

> Chinese AI startup with Step series models for general and coding tasks.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Competitive performance | Limited availability |
| Good pricing | Newer provider |

*1 model with structured outputs*

### ✅ StepFun: Step3

> Step3 is a cutting-edge multimodal reasoning model—built on a Mixture-of-Experts architecture with 321B total parameters and 38B active. It is designed end-to-end to minimize decoding costs while delivering top-tier performance in vision–language reasoning. Through the co-design of Multi-Matrix Factorization Attention (MFA) and Attention-FFN Disaggregation (AFD), Step3 maintains exceptional efficiency across both flagship and low-end accelerators.

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 64K tokens |
| **ID** | `stepfun-ai/step3` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.57
- Completion: $1.42

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

---

## tencent

> Chinese tech giant offering Hunyuan models with enterprise focus.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Enterprise integration | Regional focus |
| Strong Chinese support | Limited global availability |

*1 model with structured outputs*

### ✅ Tencent: Hunyuan A13B Instruct

> Hunyuan-A13B is a 13B active parameter Mixture-of-Experts (MoE) language model developed by Tencent, with a total parameter count of 80B and support for reasoning via Chain-of-Thought. It offers competitive benchmark performance across mathematics, science, coding, and multi-turn reasoning tasks, while maintaining high inference efficiency via Grouped Query Attention (GQA) and quantization support (FP8, GPTQ, etc.).

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 128K tokens |
| **ID** | `tencent/hunyuan-a13b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.14
- Completion: $0.57

**Capabilities:** 🧱 Structured Outputs · 🧠 Reasoning

---

## thedrummer

> Independent creator of Llama fine-tunes for creative and uncensored use cases.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Less filtered outputs | Niche use case |
| Creative focus | Quality varies |

*3 models with structured outputs*

### ✅ TheDrummer: Cydonia 24B V4.1

> Uncensored and creative writing model based on Mistral Small 3.2 24B with good recall, prompt adherence, and intelligence.

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 128K tokens |
| **ID** | `thedrummer/cydonia-24b-v4.1` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.30
- Completion: $0.50

**Capabilities:** 🧱 Structured Outputs

### ✅ TheDrummer: UnslopNemo 12B

> UnslopNemo v4.1 is the latest addition from the creator of Rocinante, designed for adventure writing and role-play scenarios.

| Property | Value |
|----------|-------|
| **Created** | 11/2024 |
| **Context** | 32K tokens |
| **ID** | `thedrummer/unslopnemo-12b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.40
- Completion: $0.40

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

### ✅ TheDrummer: Rocinante 12B

> Rocinante 12B is designed for engaging storytelling and rich prose.

| Property | Value |
|----------|-------|
| **Created** | 9/2024 |
| **Context** | 32K tokens |
| **ID** | `thedrummer/rocinante-12b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.17
- Completion: $0.43

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

---

## tngtech

> German consulting company offering DeepSeek-based fine-tunes.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| EU-based | Small selection |
| DeepSeek foundation | Based on other models |

*2 models with structured outputs*

### ✅ TNG: DeepSeek R1T2 Chimera

> DeepSeek-TNG-R1T2-Chimera is the second-generation Chimera model from TNG Tech. It is a 671 B-parameter mixture-of-experts text-generation model assembled from DeepSeek-AI’s R1-0528, R1, and V3-0324 checkpoints with an Assembly-of-Experts merge. The tri-parent design yields strong reasoning performance while running roughly 20 % faster than the original R1 and more than 2× faster than R1-0528 under vLLM, giving a favorable cost-to-intelligence trade-off. The checkpoint supports contexts up to 60 k tokens in standard use (tested to ~130 k) and maintains consistent <think> token behaviour, making it suitable for long-context analysis, dialogue and other open-ended generation tasks.

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 160K tokens |
| **ID** | `tngtech/deepseek-r1t2-chimera` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.25
- Completion: $0.85

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ TNG: DeepSeek R1T Chimera

> DeepSeek-R1T-Chimera is created by merging DeepSeek-R1 and DeepSeek-V3 (0324), combining the reasoning capabilities of R1 with the token efficiency improvements of V3. It is based on a DeepSeek-MoE Transformer architecture and is optimized for general text generation tasks.

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 160K tokens |
| **ID** | `tngtech/deepseek-r1t-chimera` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.30
- Completion: $1.20

**Capabilities:** 🧱 Structured Outputs · 🧠 Reasoning

---

## undi95

> Independent creator of Llama fine-tunes for roleplay and creative writing.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| RP specialization | Very niche |
| Community-driven | Limited support |

*1 model with structured outputs*

### ✅ ReMM SLERP 13B

> A recreation trial of the original MythoMax-L2-B13 but with updated models. #merge

| Property | Value |
|----------|-------|
| **Created** | 7/2023 |
| **Context** | 6K tokens |
| **ID** | `undi95/remm-slerp-l2-13b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.45
- Completion: $0.65

**Capabilities:** 🧱 Structured Outputs

---

## venice

> Privacy-focused AI service running models with no logging guarantees.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Privacy focus | Limited model selection |
| No logging claims | Newer service |

*1 model with structured outputs*

### ✅ Venice: Uncensored (free)

> Venice Uncensored Dolphin Mistral 24B Venice Edition is a fine-tuned variant of Mistral-Small-24B-Instruct-2501, developed by dphn.ai in collaboration with Venice.ai. This model is designed as an “uncensored” instruct-tuned LLM, preserving user control over alignment, system prompts, and behavior. Intended for advanced and unrestricted use cases, Venice Uncensored emphasizes steerability and transparent behavior, removing default safety and alignment layers typically found in mainstream assistant models.

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 32K tokens |
| **ID** | `cognitivecomputations/dolphin-mistral-24b-venice-edition:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🧱 Structured Outputs

---

## x-ai

> Elon Musk's AI company offering Grok models with real-time information access.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Real-time knowledge | Limited availability |
| Strong reasoning | Platform-tied features |
| Integrated with X/Twitter |  |

*6 models with structured outputs*

### ✅ xAI: Grok 4.1 Fast

> Grok 4.1 Fast is xAI's best agentic tool calling model that shines in real-world use cases like customer support and deep research. 2M context window.

| Property | Value |
|----------|-------|
| **Created** | 11/2025 |
| **Context** | 1.9M tokens |
| **ID** | `x-ai/grok-4.1-fast` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.20
- Completion: $0.50

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ xAI: Grok 4 Fast

> Grok 4 Fast is xAI's latest multimodal model with SOTA cost-efficiency and a 2M token context window. It comes in two flavors: non-reasoning and reasoning. Read more about the model on xAI's [news post](http://x.ai/news/grok-4-fast).

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 1.9M tokens |
| **ID** | `x-ai/grok-4-fast` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.20
- Completion: $0.50

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ xAI: Grok Code Fast 1

> Grok Code Fast 1 is a speedy and economical reasoning model that excels at agentic coding. With reasoning traces visible in the response, developers can steer Grok Code for high-quality work flows.

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 250K tokens |
| **ID** | `x-ai/grok-code-fast-1` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.20
- Completion: $1.50

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ xAI: Grok 4

> Grok 4 is xAI's latest reasoning model with a 256k context window. It supports parallel tool calling, structured outputs, and both image and text inputs. Note that reasoning is not exposed, reasoning cannot be disabled, and the reasoning effort cannot be specified. Pricing increases once the total tokens in a given request is greater than 128k tokens. See more details on the [xAI docs](https://docs.x.ai/docs/models/grok-4-0709)

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 250K tokens |
| **ID** | `x-ai/grok-4` |

**💸 Pricing** (per 1M tokens)

- Prompt: $3.00
- Completion: $15.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ xAI: Grok 3 Mini

> A lightweight model that thinks before responding. Fast, smart, and great for logic-based tasks that do not require deep domain knowledge. The raw thinking traces are accessible.

| Property | Value |
|----------|-------|
| **Created** | 6/2025 |
| **Context** | 128K tokens |
| **ID** | `x-ai/grok-3-mini` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.30
- Completion: $0.50

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ xAI: Grok 3

> Grok 3 is the latest model from xAI. It's their flagship model that excels at enterprise use cases like data extraction, coding, and text summarization. Possesses deep domain knowledge in finance, healthcare, law, and science.

| Property | Value |
|----------|-------|
| **Created** | 6/2025 |
| **Context** | 128K tokens |
| **ID** | `x-ai/grok-3` |

**💸 Pricing** (per 1M tokens)

- Prompt: $3.00
- Completion: $15.00

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice

---

## z-ai

> Chinese AI lab behind GLM (General Language Model) series with hybrid architectures.

| ✅ Pros | ⚠️ Cons |
|---------|---------|
| Strong coding focus | Regional availability |
| Good agent performance | Less mainstream |
| Large context |  |

*7 models with structured outputs*

### ✅ Z.AI: GLM 4.7

> GLM-4.7 is Z.AI’s latest flagship model, featuring upgrades in two key areas: enhanced programming capabilities and more stable multi-step reasoning/execution. It demonstrates significant improvements in executing complex agent tasks while delivering more natural conversational experiences and superior front-end aesthetics.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 198K tokens |
| **ID** | `z-ai/glm-4.7` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.16
- Completion: $0.80

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Z.AI: GLM 4.6V

> GLM-4.6V is a large multimodal model designed for high-fidelity visual understanding and long-context reasoning across images, documents, and mixed media. It supports up to 128K tokens, processes complex page layouts and charts directly as visual inputs, and integrates native multimodal function calling to connect perception with downstream tool execution. The model also enables interleaved image-text generation and UI reconstruction workflows, including screenshot-to-HTML synthesis and iterative visual editing.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 128K tokens |
| **ID** | `z-ai/glm-4.6v` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.30
- Completion: $0.90

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Z.AI: GLM 4.6

> Compared with GLM-4.5, this generation brings several key improvements:

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 198K tokens |
| **ID** | `z-ai/glm-4.6` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.35
- Completion: $1.50

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Z.AI: GLM 4.6 (exacto)

> Compared with GLM-4.5, this generation brings several key improvements:

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 200K tokens |
| **ID** | `z-ai/glm-4.6:exacto` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.44
- Completion: $1.76

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Z.AI: GLM 4.5V

> GLM-4.5V is a vision-language foundation model for multimodal agent applications. Built on a Mixture-of-Experts (MoE) architecture with 106B parameters and 12B activated parameters, it achieves state-of-the-art results in video understanding, image Q&A, OCR, and document parsing, with strong gains in front-end web coding, grounding, and spatial reasoning. It offers a hybrid inference mode: a "thinking mode" for deep reasoning and a "non-thinking mode" for fast responses. Reasoning behavior can be toggled via the `reasoning` `enabled` boolean. [Learn more in our docs](https://openrouter.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config)

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 64K tokens |
| **ID** | `z-ai/glm-4.5v` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.60
- Completion: $1.80

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Z.AI: GLM 4.5

> GLM-4.5 is our latest flagship foundation model, purpose-built for agent-based applications. It leverages a Mixture-of-Experts (MoE) architecture and supports a context length of up to 128k tokens. GLM-4.5 delivers significantly enhanced capabilities in reasoning, code generation, and agent alignment. It supports a hybrid inference mode with two options, a "thinking mode" designed for complex reasoning and tool use, and a "non-thinking mode" optimized for instant responses. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://openrouter.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config)

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 128K tokens |
| **ID** | `z-ai/glm-4.5` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.35
- Completion: $1.55

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### ✅ Z.AI: GLM 4.5 Air

> GLM-4.5-Air is the lightweight variant of our latest flagship model family, also purpose-built for agent-centric applications. Like GLM-4.5, it adopts the Mixture-of-Experts (MoE) architecture but with a more compact parameter size. GLM-4.5-Air also supports hybrid inference modes, offering a "thinking mode" for advanced reasoning and tool use, and a "non-thinking mode" for real-time interaction. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://openrouter.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config)

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 128K tokens |
| **ID** | `z-ai/glm-4.5-air` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.05
- Completion: $0.22

**Capabilities:** 🧱 Structured Outputs · 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

---

# 🚫 Disabled Vendors (No Structured Outputs)

> [!WARNING]
> The following models do NOT support structured outputs and are considered **disabled** for use cases requiring reliable JSON schema compliance.

*132 models that do NOT support structured outputs*

**Disabled Vendors:** [~~ai21~~](#ai21-disabled) (2) · [~~aion-labs~~](#aion-labs-disabled) (3) · [~~alfredpros~~](#alfredpros-disabled) (1) · [~~allenai~~](#allenai-disabled) (1) · [~~alpindale~~](#alpindale-disabled) (1) · [~~amazon~~](#amazon-disabled) (5) · [~~anthracite-org~~](#anthracite-org-disabled) (1) · [~~anthropic~~](#anthropic-disabled) (10) · [~~arcee-ai~~](#arcee-ai-disabled) (4) · [~~baidu~~](#baidu-disabled) (4) · [~~bytedance~~](#bytedance-disabled) (1) · [~~deepcogito~~](#deepcogito-disabled) (1) · [~~deepseek~~](#deepseek-disabled) (4) · [~~eleutherai~~](#eleutherai-disabled) (1) · [~~google~~](#google-disabled) (7) · [~~ibm-granite~~](#ibm-granite-disabled) (1) · [~~inflection~~](#inflection-disabled) (2) · [~~liquid~~](#liquid-disabled) (2) · [~~mancer~~](#mancer-disabled) (1) · [~~meituan~~](#meituan-disabled) (1) · [~~meta-llama~~](#meta-llama-disabled) (13) · [~~microsoft~~](#microsoft-disabled) (6) · [~~minimax~~](#minimax-disabled) (2) · [~~mistralai~~](#mistralai-disabled) (8) · [~~moonshotai~~](#moonshotai-disabled) (1) · [~~morph~~](#morph-disabled) (2) · [~~nousresearch~~](#nousresearch-disabled) (3) · [~~nvidia~~](#nvidia-disabled) (6) · [~~openai~~](#openai-disabled) (3) · [~~openrouter~~](#openrouter-disabled) (2) · [~~perplexity~~](#perplexity-disabled) (6) · [~~qwen~~](#qwen-disabled) (11) · [~~raifle~~](#raifle-disabled) (1) · [~~relace~~](#relace-disabled) (2) · [~~sao10k~~](#sao10k-disabled) (2) · [~~switchpoint~~](#switchpoint-disabled) (1) · [~~thedrummer~~](#thedrummer-disabled) (1) · [~~thudm~~](#thudm-disabled) (1) · [~~tngtech~~](#tngtech-disabled) (3) · [~~x-ai~~](#x-ai-disabled) (2) · [~~xiaomi~~](#xiaomi-disabled) (1) · [~~z-ai~~](#z-ai-disabled) (2)

---

## ~~ai21~~ [DISABLED]

*2 models — no structured outputs*

### 🚫 AI21: Jamba Mini 1.7

> Jamba Mini 1.7 is a compact and efficient member of the Jamba open model family, incorporating key improvements in grounding and instruction-following while maintaining the benefits of the SSM-Transformer hybrid architecture and 256K context window. Despite its compact size, it delivers accurate, contextually grounded responses and improved steerability.

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 250K tokens |
| **ID** | `ai21/jamba-mini-1.7` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.20
- Completion: $0.40

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 AI21: Jamba Large 1.7

> Jamba Large 1.7 is the latest model in the Jamba open family, offering improvements in grounding, instruction-following, and overall efficiency. Built on a hybrid SSM-Transformer architecture with a 256K context window, it delivers more accurate, contextually grounded responses and better steerability than previous versions.

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 250K tokens |
| **ID** | `ai21/jamba-large-1.7` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.00
- Completion: $8.00

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

---

## ~~aion-labs~~ [DISABLED]

*3 models — no structured outputs*

### 🚫 AionLabs: Aion-1.0

> Aion-1.0 is a multi-model system designed for high performance across various tasks, including reasoning and coding. It is built on DeepSeek-R1, augmented with additional models and techniques such as Tree of Thoughts (ToT) and Mixture of Experts (MoE). It is Aion Lab's most powerful reasoning model.

| Property | Value |
|----------|-------|
| **Created** | 2/2025 |
| **Context** | 128K tokens |
| **ID** | `aion-labs/aion-1.0` |

**💸 Pricing** (per 1M tokens)

- Prompt: $4.00
- Completion: $8.00

**Capabilities:** 🧠 Reasoning

### 🚫 AionLabs: Aion-1.0-Mini

> Aion-1.0-Mini 32B parameter model is a distilled version of the DeepSeek-R1 model, designed for strong performance in reasoning domains such as mathematics, coding, and logic. It is a modified variant of a FuseAI model that outperforms R1-Distill-Qwen-32B and R1-Distill-Llama-70B, with benchmark results available on its [Hugging Face page](https://huggingface.co/FuseAI/FuseO1-DeepSeekR1-QwQ-SkyT1-32B-Preview), independently replicated for verification.

| Property | Value |
|----------|-------|
| **Created** | 2/2025 |
| **Context** | 128K tokens |
| **ID** | `aion-labs/aion-1.0-mini` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.70
- Completion: $1.40

**Capabilities:** 🧠 Reasoning

### 🚫 AionLabs: Aion-RP 1.0 (8B)

> Aion-RP-Llama-3.1-8B ranks the highest in the character evaluation portion of the RPBench-Auto benchmark, a roleplaying-specific variant of Arena-Hard-Auto, where LLMs evaluate each other’s responses. It is a fine-tuned base model rather than an instruct model, designed to produce more natural and varied writing.

| Property | Value |
|----------|-------|
| **Created** | 2/2025 |
| **Context** | 32K tokens |
| **ID** | `aion-labs/aion-rp-llama-3.1-8b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.80
- Completion: $1.60

---

## ~~alfredpros~~ [DISABLED]

*1 model — no structured outputs*

### 🚫 AlfredPros: CodeLLaMa 7B Instruct Solidity

> A finetuned 7 billion parameters Code LLaMA - Instruct model to generate Solidity smart contract using 4-bit QLoRA finetuning provided by PEFT library.

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 4K tokens |
| **ID** | `alfredpros/codellama-7b-instruct-solidity` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.80
- Completion: $1.20

---

## ~~allenai~~ [DISABLED]

*1 model — no structured outputs*

### 🚫 AllenAI: Olmo 2 32B Instruct

> OLMo-2 32B Instruct is a supervised instruction-finetuned variant of the OLMo-2 32B March 2025 base model. It excels in complex reasoning and instruction-following tasks across diverse benchmarks such as GSM8K, MATH, IFEval, and general NLP evaluation. Developed by AI2, OLMo-2 32B is part of an open, research-oriented initiative, trained primarily on English-language datasets to advance the understanding and development of open-source language models.

| Property | Value |
|----------|-------|
| **Created** | 3/2025 |
| **Context** | 125K tokens |
| **ID** | `allenai/olmo-2-0325-32b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.05
- Completion: $0.20

---

## ~~alpindale~~ [DISABLED]

*1 model — no structured outputs*

### 🚫 Goliath 120B

> A large LLM created by combining two fine-tuned Llama 70B models into one 120B model. Combines Xwin and Euryale.

| Property | Value |
|----------|-------|
| **Created** | 11/2023 |
| **Context** | 6K tokens |
| **ID** | `alpindale/goliath-120b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $6.00
- Completion: $8.00

---

## ~~amazon~~ [DISABLED]

*5 models — no structured outputs*

### 🚫 Amazon: Nova 2 Lite

> Nova 2 Lite is a fast, cost-effective reasoning model for everyday workloads that can process text, images, and videos to generate text. 

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 977K tokens |
| **ID** | `amazon/nova-2-lite-v1` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.30
- Completion: $2.50

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### 🚫 Amazon: Nova Premier 1.0

> Amazon Nova Premier is the most capable of Amazon’s multimodal models for complex reasoning tasks and for use as the best teacher for distilling custom models.

| Property | Value |
|----------|-------|
| **Created** | 11/2025 |
| **Context** | 977K tokens |
| **ID** | `amazon/nova-premier-v1` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.50
- Completion: $12.50

**Capabilities:** 🔨 Tools

### 🚫 Amazon: Nova Lite 1.0

> Amazon Nova Lite 1.0 is a very low-cost multimodal model from Amazon that focused on fast processing of image, video, and text inputs to generate text output. Amazon Nova Lite can handle real-time customer interactions, document analysis, and visual question-answering tasks with high accuracy.

| Property | Value |
|----------|-------|
| **Created** | 12/2024 |
| **Context** | 293K tokens |
| **ID** | `amazon/nova-lite-v1` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.06
- Completion: $0.24

**Capabilities:** 🔨 Tools

### 🚫 Amazon: Nova Micro 1.0

> Amazon Nova Micro 1.0 is a text-only model that delivers the lowest latency responses in the Amazon Nova family of models at a very low cost. With a context length of 128K tokens and optimized for speed and cost, Amazon Nova Micro excels at tasks such as text summarization, translation, content classification, interactive chat, and brainstorming. It has  simple mathematical reasoning and coding abilities.

| Property | Value |
|----------|-------|
| **Created** | 12/2024 |
| **Context** | 125K tokens |
| **ID** | `amazon/nova-micro-v1` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.04
- Completion: $0.14

**Capabilities:** 🔨 Tools

### 🚫 Amazon: Nova Pro 1.0

> Amazon Nova Pro 1.0 is a capable multimodal model from Amazon focused on providing a combination of accuracy, speed, and cost for a wide range of tasks. As of December 2024, it achieves state-of-the-art performance on key benchmarks including visual question answering (TextVQA) and video understanding (VATEX).

| Property | Value |
|----------|-------|
| **Created** | 12/2024 |
| **Context** | 293K tokens |
| **ID** | `amazon/nova-pro-v1` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.80
- Completion: $3.20

**Capabilities:** 🔨 Tools

---

## ~~anthracite-org~~ [DISABLED]

*1 model — no structured outputs*

### 🚫 Magnum v4 72B

> This is a series of models designed to replicate the prose quality of the Claude 3 models, specifically Sonnet(https://openrouter.ai/anthropic/claude-3.5-sonnet) and Opus(https://openrouter.ai/anthropic/claude-3-opus).

| Property | Value |
|----------|-------|
| **Created** | 10/2024 |
| **Context** | 16K tokens |
| **ID** | `anthracite-org/magnum-v4-72b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $3.00
- Completion: $5.00

---

## ~~anthropic~~ [DISABLED]

*10 models — no structured outputs*

### 🚫 Anthropic: Claude Haiku 4.5

> Claude Haiku 4.5 is Anthropic’s fastest and most efficient model, delivering near-frontier intelligence at a fraction of the cost and latency of larger Claude models. Matching Claude Sonnet 4’s performance across reasoning, coding, and computer-use tasks, Haiku 4.5 brings frontier-level capability to real-time and high-volume applications.

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 195K tokens |
| **ID** | `anthropic/claude-haiku-4.5` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.00
- Completion: $5.00

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### 🚫 Anthropic: Claude Opus 4

> Claude Opus 4 is benchmarked as the world’s best coding model, at time of release, bringing sustained performance on complex, long-running tasks and agent workflows. It sets new benchmarks in software engineering, achieving leading results on SWE-bench (72.5%) and Terminal-bench (43.2%). Opus 4 supports extended, agentic workflows, handling thousands of task steps continuously for hours without degradation. 

| Property | Value |
|----------|-------|
| **Created** | 5/2025 |
| **Context** | 195K tokens |
| **ID** | `anthropic/claude-opus-4` |

**💸 Pricing** (per 1M tokens)

- Prompt: $15.00
- Completion: $75.00

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### 🚫 Anthropic: Claude Sonnet 4

> Claude Sonnet 4 significantly enhances the capabilities of its predecessor, Sonnet 3.7, excelling in both coding and reasoning tasks with improved precision and controllability. Achieving state-of-the-art performance on SWE-bench (72.7%), Sonnet 4 balances capability and computational efficiency, making it suitable for a broad range of applications from routine coding tasks to complex software development projects. Key enhancements include improved autonomous codebase navigation, reduced error rates in agent-driven workflows, and increased reliability in following intricate instructions. Sonnet 4 is optimized for practical everyday use, providing advanced reasoning capabilities while maintaining efficiency and responsiveness in diverse internal and external scenarios.

| Property | Value |
|----------|-------|
| **Created** | 5/2025 |
| **Context** | 977K tokens |
| **ID** | `anthropic/claude-sonnet-4` |

**💸 Pricing** (per 1M tokens)

- Prompt: $3.00
- Completion: $15.00

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### 🚫 Anthropic: Claude 3.7 Sonnet (thinking)

> Claude 3.7 Sonnet is an advanced large language model with improved reasoning, coding, and problem-solving capabilities. It introduces a hybrid reasoning approach, allowing users to choose between rapid responses and extended, step-by-step processing for complex tasks. The model demonstrates notable improvements in coding, particularly in front-end development and full-stack updates, and excels in agentic workflows, where it can autonomously navigate multi-step processes. 

| Property | Value |
|----------|-------|
| **Created** | 2/2025 |
| **Context** | 195K tokens |
| **ID** | `anthropic/claude-3.7-sonnet:thinking` |

**💸 Pricing** (per 1M tokens)

- Prompt: $3.00
- Completion: $15.00

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### 🚫 Anthropic: Claude 3.7 Sonnet

> Claude 3.7 Sonnet is an advanced large language model with improved reasoning, coding, and problem-solving capabilities. It introduces a hybrid reasoning approach, allowing users to choose between rapid responses and extended, step-by-step processing for complex tasks. The model demonstrates notable improvements in coding, particularly in front-end development and full-stack updates, and excels in agentic workflows, where it can autonomously navigate multi-step processes. 

| Property | Value |
|----------|-------|
| **Created** | 2/2025 |
| **Context** | 195K tokens |
| **ID** | `anthropic/claude-3.7-sonnet` |

**💸 Pricing** (per 1M tokens)

- Prompt: $3.00
- Completion: $15.00

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### 🚫 Anthropic: Claude 3.5 Haiku (2024-10-22)

> Claude 3.5 Haiku features enhancements across all skill sets including coding, tool use, and reasoning. As the fastest model in the Anthropic lineup, it offers rapid response times suitable for applications that require high interactivity and low latency, such as user-facing chatbots and on-the-fly code completions. It also excels in specialized tasks like data extraction and real-time content moderation, making it a versatile tool for a broad range of industries.

| Property | Value |
|----------|-------|
| **Created** | 11/2024 |
| **Context** | 195K tokens |
| **ID** | `anthropic/claude-3.5-haiku-20241022` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.80
- Completion: $4.00

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Anthropic: Claude 3.5 Haiku

> Claude 3.5 Haiku features offers enhanced capabilities in speed, coding accuracy, and tool use. Engineered to excel in real-time applications, it delivers quick response times that are essential for dynamic tasks such as chat interactions and immediate coding suggestions.

| Property | Value |
|----------|-------|
| **Created** | 11/2024 |
| **Context** | 195K tokens |
| **ID** | `anthropic/claude-3.5-haiku` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.80
- Completion: $4.00

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Anthropic: Claude 3.5 Sonnet

> New Claude 3.5 Sonnet delivers better-than-Opus capabilities, faster-than-Sonnet speeds, at the same Sonnet prices. Sonnet is particularly good at:

| Property | Value |
|----------|-------|
| **Created** | 10/2024 |
| **Context** | 195K tokens |
| **ID** | `anthropic/claude-3.5-sonnet` |

**💸 Pricing** (per 1M tokens)

- Prompt: $6.00
- Completion: $30.00

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Anthropic: Claude 3 Haiku

> Claude 3 Haiku is Anthropic's fastest and most compact model for

| Property | Value |
|----------|-------|
| **Created** | 3/2024 |
| **Context** | 195K tokens |
| **ID** | `anthropic/claude-3-haiku` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.25
- Completion: $1.25

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Anthropic: Claude 3 Opus

> Claude 3 Opus is Anthropic's most powerful model for highly complex tasks. It boasts top-level performance, intelligence, fluency, and understanding.

| Property | Value |
|----------|-------|
| **Created** | 3/2024 |
| **Context** | 195K tokens |
| **ID** | `anthropic/claude-3-opus` |

**💸 Pricing** (per 1M tokens)

- Prompt: $15.00
- Completion: $75.00

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

---

## ~~arcee-ai~~ [DISABLED]

*4 models — no structured outputs*

### 🚫 Arcee AI: Spotlight

> Spotlight is a 7‑billion‑parameter vision‑language model derived from Qwen 2.5‑VL and fine‑tuned by Arcee AI for tight image‑text grounding tasks. It offers a 32 k‑token context window, enabling rich multimodal conversations that combine lengthy documents with one or more images. Training emphasized fast inference on consumer GPUs while retaining strong captioning, visual‐question‑answering, and diagram‑analysis accuracy. As a result, Spotlight slots neatly into agent workflows where screenshots, charts or UI mock‑ups need to be interpreted on the fly. Early benchmarks show it matching or out‑scoring larger VLMs such as LLaVA‑1.6 13 B on popular VQA and POPE alignment tests. 

| Property | Value |
|----------|-------|
| **Created** | 5/2025 |
| **Context** | 128K tokens |
| **ID** | `arcee-ai/spotlight` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.18
- Completion: $0.18

### 🚫 Arcee AI: Maestro Reasoning

> Maestro Reasoning is Arcee's flagship analysis model: a 32 B‑parameter derivative of Qwen 2.5‑32 B tuned with DPO and chain‑of‑thought RL for step‑by‑step logic. Compared to the earlier 7 B preview, the production 32 B release widens the context window to 128 k tokens and doubles pass‑rate on MATH and GSM‑8K, while also lifting code completion accuracy. Its instruction style encourages structured "thought → answer" traces that can be parsed or hidden according to user preference. That transparency pairs well with audit‑focused industries like finance or healthcare where seeing the reasoning path matters. In Arcee Conductor, Maestro is automatically selected for complex, multi‑constraint queries that smaller SLMs bounce. 

| Property | Value |
|----------|-------|
| **Created** | 5/2025 |
| **Context** | 128K tokens |
| **ID** | `arcee-ai/maestro-reasoning` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.90
- Completion: $3.30

### 🚫 Arcee AI: Virtuoso Large

> Virtuoso‑Large is Arcee's top‑tier general‑purpose LLM at 72 B parameters, tuned to tackle cross‑domain reasoning, creative writing and enterprise QA. Unlike many 70 B peers, it retains the 128 k context inherited from Qwen 2.5, letting it ingest books, codebases or financial filings wholesale. Training blended DeepSeek R1 distillation, multi‑epoch supervised fine‑tuning and a final DPO/RLHF alignment stage, yielding strong performance on BIG‑Bench‑Hard, GSM‑8K and long‑context Needle‑In‑Haystack tests. Enterprises use Virtuoso‑Large as the "fallback" brain in Conductor pipelines when other SLMs flag low confidence. Despite its size, aggressive KV‑cache optimizations keep first‑token latency in the low‑second range on 8× H100 nodes, making it a practical production‑grade powerhouse.

| Property | Value |
|----------|-------|
| **Created** | 5/2025 |
| **Context** | 128K tokens |
| **ID** | `arcee-ai/virtuoso-large` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.75
- Completion: $1.20

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Arcee AI: Coder Large

> Coder‑Large is a 32 B‑parameter offspring of Qwen 2.5‑Instruct that has been further trained on permissively‑licensed GitHub, CodeSearchNet and synthetic bug‑fix corpora. It supports a 32k context window, enabling multi‑file refactoring or long diff review in a single call, and understands 30‑plus programming languages with special attention to TypeScript, Go and Terraform. Internal benchmarks show 5–8 pt gains over CodeLlama‑34 B‑Python on HumanEval and competitive BugFix scores thanks to a reinforcement pass that rewards compilable output. The model emits structured explanations alongside code blocks by default, making it suitable for educational tooling as well as production copilot scenarios. Cost‑wise, Together AI prices it well below proprietary incumbents, so teams can scale interactive coding without runaway spend. 

| Property | Value |
|----------|-------|
| **Created** | 5/2025 |
| **Context** | 32K tokens |
| **ID** | `arcee-ai/coder-large` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.50
- Completion: $0.80

---

## ~~baidu~~ [DISABLED]

*4 models — no structured outputs*

### 🚫 Baidu: ERNIE 4.5 21B A3B Thinking

> ERNIE-4.5-21B-A3B-Thinking is Baidu's upgraded lightweight MoE model, refined to boost reasoning depth and quality for top-tier performance in logical puzzles, math, science, coding, text generation, and expert-level academic benchmarks.

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 128K tokens |
| **ID** | `baidu/ernie-4.5-21b-a3b-thinking` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.07
- Completion: $0.28

**Capabilities:** 🧠 Reasoning

### 🚫 Baidu: ERNIE 4.5 21B A3B

> A sophisticated text-based Mixture-of-Experts (MoE) model featuring 21B total parameters with 3B activated per token, delivering exceptional multimodal understanding and generation through heterogeneous MoE structures and modality-isolated routing. Supporting an extensive 131K token context length, the model achieves efficient inference via multi-expert parallel collaboration and quantization, while advanced post-training techniques including SFT, DPO, and UPO ensure optimized performance across diverse applications with specialized routing and balancing losses for superior task handling.

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 117K tokens |
| **ID** | `baidu/ernie-4.5-21b-a3b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.07
- Completion: $0.28

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Baidu: ERNIE 4.5 VL 28B A3B

> A powerful multimodal Mixture-of-Experts chat model featuring 28B total parameters with 3B activated per token, delivering exceptional text and vision understanding through its innovative heterogeneous MoE structure with modality-isolated routing. Built with scaling-efficient infrastructure for high-throughput training and inference, the model leverages advanced post-training techniques including SFT, DPO, and UPO for optimized performance, while supporting an impressive 131K context length and RLVR alignment for superior cross-modal reasoning and generation capabilities.

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 29K tokens |
| **ID** | `baidu/ernie-4.5-vl-28b-a3b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.14
- Completion: $0.56

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### 🚫 Baidu: ERNIE 4.5 VL 424B A47B 

> ERNIE-4.5-VL-424B-A47B is a multimodal Mixture-of-Experts (MoE) model from Baidu’s ERNIE 4.5 series, featuring 424B total parameters with 47B active per token. It is trained jointly on text and image data using a heterogeneous MoE architecture and modality-isolated routing to enable high-fidelity cross-modal reasoning, image understanding, and long-context generation (up to 131k tokens). Fine-tuned with techniques like SFT, DPO, UPO, and RLVR, this model supports both “thinking” and non-thinking inference modes. Designed for vision-language tasks in English and Chinese, it is optimized for efficient scaling and can operate under 4-bit/8-bit quantization.

| Property | Value |
|----------|-------|
| **Created** | 6/2025 |
| **Context** | 120K tokens |
| **ID** | `baidu/ernie-4.5-vl-424b-a47b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.42
- Completion: $1.25

**Capabilities:** 🧠 Reasoning

---

## ~~bytedance~~ [DISABLED]

*1 model — no structured outputs*

### 🚫 ByteDance: UI-TARS 7B 

> UI-TARS-1.5 is a multimodal vision-language agent optimized for GUI-based environments, including desktop interfaces, web browsers, mobile systems, and games. Built by ByteDance, it builds upon the UI-TARS framework with reinforcement learning-based reasoning, enabling robust action planning and execution across virtual interfaces.

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 125K tokens |
| **ID** | `bytedance/ui-tars-1.5-7b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.10
- Completion: $0.20

---

## ~~deepcogito~~ [DISABLED]

*1 model — no structured outputs*

### 🚫 Cogito V2 Preview Llama 109B

> An instruction-tuned, hybrid-reasoning Mixture-of-Experts model built on Llama-4-Scout-17B-16E. Cogito v2 can answer directly or engage an extended “thinking” phase, with alignment guided by Iterated Distillation & Amplification (IDA). It targets coding, STEM, instruction following, and general helpfulness, with stronger multilingual, tool-calling, and reasoning performance than size-equivalent baselines. The model supports long-context use (up to 10M tokens) and standard Transformers workflows. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://openrouter.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config)

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 32K tokens |
| **ID** | `deepcogito/cogito-v2-preview-llama-109b-moe` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.18
- Completion: $0.59

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

---

## ~~deepseek~~ [DISABLED]

*4 models — no structured outputs*

### 🚫 DeepSeek: DeepSeek R1 0528 Qwen3 8B

> DeepSeek-R1-0528 is a lightly upgraded release of DeepSeek R1 that taps more compute and smarter post-training tricks, pushing its reasoning and inference to the brink of flagship models like O3 and Gemini 2.5 Pro.

| Property | Value |
|----------|-------|
| **Created** | 5/2025 |
| **Context** | 125K tokens |
| **ID** | `deepseek/deepseek-r1-0528-qwen3-8b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.06
- Completion: $0.09

**Capabilities:** 🧠 Reasoning

### 🚫 DeepSeek: R1 0528 (free)

> May 28th update to the [original DeepSeek R1](/deepseek/deepseek-r1) Performance on par with [OpenAI o1](/openai/o1), but open-sourced and with fully open reasoning tokens. It's 671B parameters in size, with 37B active in an inference pass.

| Property | Value |
|----------|-------|
| **Created** | 5/2025 |
| **Context** | 160K tokens |
| **ID** | `deepseek/deepseek-r1-0528:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🧠 Reasoning

### 🚫 DeepSeek: DeepSeek Prover V2

> DeepSeek Prover V2 is a 671B parameter model, speculated to be geared towards logic and mathematics. Likely an upgrade from [DeepSeek-Prover-V1.5](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V1.5-RL) Not much is known about the model yet, as DeepSeek released it on Hugging Face without an announcement or description.

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 160K tokens |
| **ID** | `deepseek/deepseek-prover-v2` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.50
- Completion: $2.18

### 🚫 DeepSeek: R1

> DeepSeek R1 is here: Performance on par with [OpenAI o1](/openai/o1), but open-sourced and with fully open reasoning tokens. It's 671B parameters in size, with 37B active in an inference pass.

| Property | Value |
|----------|-------|
| **Created** | 1/2025 |
| **Context** | 160K tokens |
| **ID** | `deepseek/deepseek-r1` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.70
- Completion: $2.40

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

---

## ~~eleutherai~~ [DISABLED]

*1 model — no structured outputs*

### 🚫 EleutherAI: Llemma 7b

> Llemma 7B is a language model for mathematics. It was initialized with Code Llama 7B weights, and trained on the Proof-Pile-2 for 200B tokens. Llemma models are particularly strong at chain-of-thought mathematical reasoning and using computational tools for mathematics, such as Python and formal theorem provers.

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 4K tokens |
| **ID** | `eleutherai/llemma_7b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.80
- Completion: $1.20

---

## ~~google~~ [DISABLED]

*7 models — no structured outputs*

### 🚫 Google: Gemma 3n 2B (free)

> Gemma 3n E2B IT is a multimodal, instruction-tuned model developed by Google DeepMind, designed to operate efficiently at an effective parameter size of 2B while leveraging a 6B architecture. Based on the MatFormer architecture, it supports nested submodels and modular composition via the Mix-and-Match framework. Gemma 3n models are optimized for low-resource deployment, offering 32K context length and strong multilingual and reasoning performance across common benchmarks. This variant is trained on a diverse corpus including code, math, web, and multimodal data.

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 8K tokens |
| **ID** | `google/gemma-3n-e2b-it:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

### 🚫 Google: Gemma 3n 4B (free)

> Gemma 3n E4B-it is optimized for efficient execution on mobile and low-resource devices, such as phones, laptops, and tablets. It supports multimodal inputs—including text, visual data, and audio—enabling diverse tasks such as text generation, speech recognition, translation, and image analysis. Leveraging innovations like Per-Layer Embedding (PLE) caching and the MatFormer architecture, Gemma 3n dynamically manages memory usage and computational load by selectively activating model parameters, significantly reducing runtime resource requirements.

| Property | Value |
|----------|-------|
| **Created** | 5/2025 |
| **Context** | 8K tokens |
| **ID** | `google/gemma-3n-e4b-it:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

### 🚫 Google: Gemma 3n 4B

> Gemma 3n E4B-it is optimized for efficient execution on mobile and low-resource devices, such as phones, laptops, and tablets. It supports multimodal inputs—including text, visual data, and audio—enabling diverse tasks such as text generation, speech recognition, translation, and image analysis. Leveraging innovations like Per-Layer Embedding (PLE) caching and the MatFormer architecture, Gemma 3n dynamically manages memory usage and computational load by selectively activating model parameters, significantly reducing runtime resource requirements.

| Property | Value |
|----------|-------|
| **Created** | 5/2025 |
| **Context** | 32K tokens |
| **ID** | `google/gemma-3n-e4b-it` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.02
- Completion: $0.04

### 🚫 Google: Gemma 3 4B

> Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling.

| Property | Value |
|----------|-------|
| **Created** | 3/2025 |
| **Context** | 94K tokens |
| **ID** | `google/gemma-3-4b-it` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.02
- Completion: $0.07

### 🚫 Google: Gemma 3 12B (free)

> Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling. Gemma 3 12B is the second largest in the family of Gemma 3 models after [Gemma 3 27B](google/gemma-3-27b-it)

| Property | Value |
|----------|-------|
| **Created** | 3/2025 |
| **Context** | 32K tokens |
| **ID** | `google/gemma-3-12b-it:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

### 🚫 Google: Gemini 2.0 Flash Experimental (free)

> Gemini Flash 2.0 offers a significantly faster time to first token (TTFT) compared to [Gemini Flash 1.5](/google/gemini-flash-1.5), while maintaining quality on par with larger models like [Gemini Pro 1.5](/google/gemini-pro-1.5). It introduces notable enhancements in multimodal understanding, coding capabilities, complex instruction following, and function calling. These advancements come together to deliver more seamless and robust agentic experiences.

| Property | Value |
|----------|-------|
| **Created** | 12/2024 |
| **Context** | 1.0M tokens |
| **ID** | `google/gemini-2.0-flash-exp:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Google: Gemma 2 9B

> Gemma 2 9B by Google is an advanced, open-source language model that sets a new standard for efficiency and performance in its size class.

| Property | Value |
|----------|-------|
| **Created** | 6/2024 |
| **Context** | 8K tokens |
| **ID** | `google/gemma-2-9b-it` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.03
- Completion: $0.09

---

## ~~ibm-granite~~ [DISABLED]

*1 model — no structured outputs*

### 🚫 IBM: Granite 4.0 Micro

> Granite-4.0-H-Micro is a 3B parameter from the Granite 4 family of models. These models are the latest in a series of models released by IBM. They are fine-tuned for long context tool calling. 

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 128K tokens |
| **ID** | `ibm-granite/granite-4.0-h-micro` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.02
- Completion: $0.11

---

## ~~inflection~~ [DISABLED]

*2 models — no structured outputs*

### 🚫 Inflection: Inflection 3 Pi

> Inflection 3 Pi powers Inflection's [Pi](https://pi.ai) chatbot, including backstory, emotional intelligence, productivity, and safety. It has access to recent news, and excels in scenarios like customer support and roleplay.

| Property | Value |
|----------|-------|
| **Created** | 10/2024 |
| **Context** | 8K tokens |
| **ID** | `inflection/inflection-3-pi` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.50
- Completion: $10.00

### 🚫 Inflection: Inflection 3 Productivity

> Inflection 3 Productivity is optimized for following instructions. It is better for tasks requiring JSON output or precise adherence to provided guidelines. It has access to recent news.

| Property | Value |
|----------|-------|
| **Created** | 10/2024 |
| **Context** | 8K tokens |
| **ID** | `inflection/inflection-3-productivity` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.50
- Completion: $10.00

---

## ~~liquid~~ [DISABLED]

*2 models — no structured outputs*

### 🚫 LiquidAI/LFM2-8B-A1B

> Model created via inbox interface

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 32K tokens |
| **ID** | `liquid/lfm2-8b-a1b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.05
- Completion: $0.10

### 🚫 LiquidAI/LFM2-2.6B

> LFM2 is a new generation of hybrid models developed by Liquid AI, specifically designed for edge AI and on-device deployment. It sets a new standard in terms of quality, speed, and memory efficiency.

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 32K tokens |
| **ID** | `liquid/lfm-2.2-6b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.05
- Completion: $0.10

---

## ~~mancer~~ [DISABLED]

*1 model — no structured outputs*

### 🚫 Mancer: Weaver (alpha)

> An attempt to recreate Claude-style verbosity, but don't expect the same level of coherence or memory. Meant for use in roleplay/narrative situations.

| Property | Value |
|----------|-------|
| **Created** | 8/2023 |
| **Context** | 8K tokens |
| **ID** | `mancer/weaver` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.75
- Completion: $1.00

---

## ~~meituan~~ [DISABLED]

*1 model — no structured outputs*

### 🚫 Meituan: LongCat Flash Chat

> LongCat-Flash-Chat is a large-scale Mixture-of-Experts (MoE) model with 560B total parameters, of which 18.6B–31.3B (≈27B on average) are dynamically activated per input. It introduces a shortcut-connected MoE design to reduce communication overhead and achieve high throughput while maintaining training stability through advanced scaling strategies such as hyperparameter transfer, deterministic computation, and multi-stage optimization.

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 128K tokens |
| **ID** | `meituan/longcat-flash-chat` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.20
- Completion: $0.80

---

## ~~meta-llama~~ [DISABLED]

*13 models — no structured outputs*

### 🚫 Meta: Llama Guard 4 12B

> Llama Guard 4 is a Llama 4 Scout-derived multimodal pretrained model, fine-tuned for content safety classification. Similar to previous versions, it can be used to classify content in both LLM inputs (prompt classification) and in LLM responses (response classification). It acts as an LLM—generating text in its output that indicates whether a given prompt or response is safe or unsafe, and if unsafe, it also lists the content categories violated.

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 160K tokens |
| **ID** | `meta-llama/llama-guard-4-12b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.18
- Completion: $0.18

### 🚫 Llama Guard 3 8B

> Llama Guard 3 is a Llama-3.1-8B pretrained model, fine-tuned for content safety classification. Similar to previous versions, it can be used to classify content in both LLM inputs (prompt classification) and in LLM responses (response classification). It acts as an LLM – it generates text in its output that indicates whether a given prompt or response is safe or unsafe, and if unsafe, it also lists the content categories violated.

| Property | Value |
|----------|-------|
| **Created** | 2/2025 |
| **Context** | 128K tokens |
| **ID** | `meta-llama/llama-guard-3-8b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.02
- Completion: $0.06

### 🚫 Meta: Llama 3.3 70B Instruct (free)

> The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out). The Llama 3.3 instruction tuned text only model is optimized for multilingual dialogue use cases and outperforms many of the available open source and closed chat models on common industry benchmarks.

| Property | Value |
|----------|-------|
| **Created** | 12/2024 |
| **Context** | 128K tokens |
| **ID** | `meta-llama/llama-3.3-70b-instruct:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Meta: Llama 3.2 3B Instruct (free)

> Llama 3.2 3B is a 3-billion-parameter multilingual large language model, optimized for advanced natural language processing tasks like dialogue generation, reasoning, and summarization. Designed with the latest transformer architecture, it supports eight languages, including English, Spanish, and Hindi, and is adaptable for additional languages.

| Property | Value |
|----------|-------|
| **Created** | 9/2024 |
| **Context** | 128K tokens |
| **ID** | `meta-llama/llama-3.2-3b-instruct:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

### 🚫 Meta: Llama 3.2 3B Instruct

> Llama 3.2 3B is a 3-billion-parameter multilingual large language model, optimized for advanced natural language processing tasks like dialogue generation, reasoning, and summarization. Designed with the latest transformer architecture, it supports eight languages, including English, Spanish, and Hindi, and is adaptable for additional languages.

| Property | Value |
|----------|-------|
| **Created** | 9/2024 |
| **Context** | 128K tokens |
| **ID** | `meta-llama/llama-3.2-3b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.02
- Completion: $0.02

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Meta: Llama 3.2 1B Instruct

> Llama 3.2 1B is a 1-billion-parameter language model focused on efficiently performing natural language tasks, such as summarization, dialogue, and multilingual text analysis. Its smaller size allows it to operate efficiently in low-resource environments while maintaining strong task performance.

| Property | Value |
|----------|-------|
| **Created** | 9/2024 |
| **Context** | 59K tokens |
| **ID** | `meta-llama/llama-3.2-1b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.03
- Completion: $0.20

### 🚫 Meta: Llama 3.2 90B Vision Instruct

> The Llama 90B Vision model is a top-tier, 90-billion-parameter multimodal model designed for the most challenging visual reasoning and language tasks. It offers unparalleled accuracy in image captioning, visual question answering, and advanced image-text comprehension. Pre-trained on vast multimodal datasets and fine-tuned with human feedback, the Llama 90B Vision is engineered to handle the most demanding image-based AI tasks.

| Property | Value |
|----------|-------|
| **Created** | 9/2024 |
| **Context** | 32K tokens |
| **ID** | `meta-llama/llama-3.2-90b-vision-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.35
- Completion: $0.40

### 🚫 Meta: Llama 3.2 11B Vision Instruct

> Llama 3.2 11B Vision is a multimodal model with 11 billion parameters, designed to handle tasks combining visual and textual data. It excels in tasks such as image captioning and visual question answering, bridging the gap between language generation and visual reasoning. Pre-trained on a massive dataset of image-text pairs, it performs well in complex, high-accuracy image analysis.

| Property | Value |
|----------|-------|
| **Created** | 9/2024 |
| **Context** | 128K tokens |
| **ID** | `meta-llama/llama-3.2-11b-vision-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.05
- Completion: $0.05

### 🚫 Meta: Llama 3.1 405B (base)

> Meta's latest class of model (Llama 3.1) launched with a variety of sizes & flavors. This is the base 405B pre-trained version.

| Property | Value |
|----------|-------|
| **Created** | 8/2024 |
| **Context** | 32K tokens |
| **ID** | `meta-llama/llama-3.1-405b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $4.00
- Completion: $4.00

### 🚫 Meta: Llama 3.1 405B Instruct (free)

> The highly anticipated 400B class of Llama3 is here! Clocking in at 128k context with impressive eval scores, the Meta AI team continues to push the frontier of open-source LLMs.

| Property | Value |
|----------|-------|
| **Created** | 7/2024 |
| **Context** | 128K tokens |
| **ID** | `meta-llama/llama-3.1-405b-instruct:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

### 🚫 Meta: Llama 3.1 70B Instruct

> Meta's latest class of model (Llama 3.1) launched with a variety of sizes & flavors. This 70B instruct-tuned version is optimized for high quality dialogue usecases.

| Property | Value |
|----------|-------|
| **Created** | 7/2024 |
| **Context** | 128K tokens |
| **ID** | `meta-llama/llama-3.1-70b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.40
- Completion: $0.40

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Meta: LlamaGuard 2 8B

> This safeguard model has 8B parameters and is based on the Llama 3 family. Just like is predecessor, [LlamaGuard 1](https://huggingface.co/meta-llama/LlamaGuard-7b), it can do both prompt and response classification.

| Property | Value |
|----------|-------|
| **Created** | 5/2024 |
| **Context** | 8K tokens |
| **ID** | `meta-llama/llama-guard-2-8b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.20
- Completion: $0.20

### 🚫 Meta: Llama 3 8B Instruct

> Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors. This 8B instruct-tuned version was optimized for high quality dialogue usecases.

| Property | Value |
|----------|-------|
| **Created** | 4/2024 |
| **Context** | 8K tokens |
| **ID** | `meta-llama/llama-3-8b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.03
- Completion: $0.06

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

---

## ~~microsoft~~ [DISABLED]

*6 models — no structured outputs*

### 🚫 Microsoft: Phi 4 Reasoning Plus

> Phi-4-reasoning-plus is an enhanced 14B parameter model from Microsoft, fine-tuned from Phi-4 with additional reinforcement learning to boost accuracy on math, science, and code reasoning tasks. It uses the same dense decoder-only transformer architecture as Phi-4, but generates longer, more comprehensive outputs structured into a step-by-step reasoning trace and final answer.

| Property | Value |
|----------|-------|
| **Created** | 5/2025 |
| **Context** | 32K tokens |
| **ID** | `microsoft/phi-4-reasoning-plus` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.07
- Completion: $0.35

**Capabilities:** 🧠 Reasoning

### 🚫 Microsoft: Phi 4 Multimodal Instruct

> Phi-4 Multimodal Instruct is a versatile 5.6B parameter foundation model that combines advanced reasoning and instruction-following capabilities across both text and visual inputs, providing accurate text outputs. The unified architecture enables efficient, low-latency inference, suitable for edge and mobile deployments. Phi-4 Multimodal Instruct supports text inputs in multiple languages including Arabic, Chinese, English, French, German, Japanese, Spanish, and more, with visual input optimized primarily for English. It delivers impressive performance on multimodal tasks involving mathematical, scientific, and document reasoning, providing developers and enterprises a powerful yet compact model for sophisticated interactive applications. For more information, see the [Phi-4 Multimodal blog post](https://azure.microsoft.com/en-us/blog/empowering-innovation-the-next-generation-of-the-phi-family/).

| Property | Value |
|----------|-------|
| **Created** | 3/2025 |
| **Context** | 128K tokens |
| **ID** | `microsoft/phi-4-multimodal-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.05
- Completion: $0.10

### 🚫 Microsoft: Phi-3.5 Mini 128K Instruct

> Phi-3.5 models are lightweight, state-of-the-art open models. These models were trained with Phi-3 datasets that include both synthetic data and the filtered, publicly available websites data, with a focus on high quality and reasoning-dense properties. Phi-3.5 Mini uses 3.8B parameters, and is a dense decoder-only transformer model using the same tokenizer as [Phi-3 Mini](/models/microsoft/phi-3-mini-128k-instruct).

| Property | Value |
|----------|-------|
| **Created** | 8/2024 |
| **Context** | 125K tokens |
| **ID** | `microsoft/phi-3.5-mini-128k-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.10
- Completion: $0.10

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Microsoft: Phi-3 Mini 128K Instruct

> Phi-3 Mini is a powerful 3.8B parameter model designed for advanced language understanding, reasoning, and instruction following. Optimized through supervised fine-tuning and preference adjustments, it excels in tasks involving common sense, mathematics, logical reasoning, and code processing.

| Property | Value |
|----------|-------|
| **Created** | 5/2024 |
| **Context** | 125K tokens |
| **ID** | `microsoft/phi-3-mini-128k-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.10
- Completion: $0.10

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Microsoft: Phi-3 Medium 128K Instruct

> Phi-3 128K Medium is a powerful 14-billion parameter model designed for advanced language understanding, reasoning, and instruction following. Optimized through supervised fine-tuning and preference adjustments, it excels in tasks involving common sense, mathematics, logical reasoning, and code processing.

| Property | Value |
|----------|-------|
| **Created** | 5/2024 |
| **Context** | 125K tokens |
| **ID** | `microsoft/phi-3-medium-128k-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.00
- Completion: $1.00

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 WizardLM-2 8x22B

> WizardLM-2 8x22B is Microsoft AI's most advanced Wizard model. It demonstrates highly competitive performance compared to leading proprietary models, and it consistently outperforms all existing state-of-the-art opensource models.

| Property | Value |
|----------|-------|
| **Created** | 4/2024 |
| **Context** | 64K tokens |
| **ID** | `microsoft/wizardlm-2-8x22b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.48
- Completion: $0.48

---

## ~~minimax~~ [DISABLED]

*2 models — no structured outputs*

### 🚫 MiniMax: MiniMax M1

> MiniMax-M1 is a large-scale, open-weight reasoning model designed for extended context and high-efficiency inference. It leverages a hybrid Mixture-of-Experts (MoE) architecture paired with a custom "lightning attention" mechanism, allowing it to process long sequences—up to 1 million tokens—while maintaining competitive FLOP efficiency. With 456 billion total parameters and 45.9B active per token, this variant is optimized for complex, multi-step reasoning tasks.

| Property | Value |
|----------|-------|
| **Created** | 6/2025 |
| **Context** | 977K tokens |
| **ID** | `minimax/minimax-m1` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.40
- Completion: $2.20

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### 🚫 MiniMax: MiniMax-01

> MiniMax-01 is a combines MiniMax-Text-01 for text generation and MiniMax-VL-01 for image understanding. It has 456 billion parameters, with 45.9 billion parameters activated per inference, and can handle a context of up to 4 million tokens.

| Property | Value |
|----------|-------|
| **Created** | 1/2025 |
| **Context** | 977K tokens |
| **ID** | `minimax/minimax-01` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.20
- Completion: $1.10

---

## ~~mistralai~~ [DISABLED]

*8 models — no structured outputs*

### 🚫 Mistral: Mistral Small Creative

> Mistral Small Creative is an experimental small model designed for creative writing, narrative generation, roleplay and character-driven dialogue, general-purpose instruction following, and conversational agents.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 32K tokens |
| **ID** | `mistralai/mistral-small-creative` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.10
- Completion: $0.30

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Mistral: Devstral Small 2505

> Devstral-Small-2505 is a 24B parameter agentic LLM fine-tuned from Mistral-Small-3.1, jointly developed by Mistral AI and All Hands AI for advanced software engineering tasks. It is optimized for codebase exploration, multi-file editing, and integration into coding agents, achieving state-of-the-art results on SWE-Bench Verified (46.8%).

| Property | Value |
|----------|-------|
| **Created** | 5/2025 |
| **Context** | 125K tokens |
| **ID** | `mistralai/devstral-small-2505` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.06
- Completion: $0.12

### 🚫 Mistral: Mistral 7B Instruct (free)

> A high-performing, industry-standard 7.3B parameter model, with optimizations for speed and context length.

| Property | Value |
|----------|-------|
| **Created** | 5/2024 |
| **Context** | 32K tokens |
| **ID** | `mistralai/mistral-7b-instruct:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Mistral: Mistral 7B Instruct

> A high-performing, industry-standard 7.3B parameter model, with optimizations for speed and context length.

| Property | Value |
|----------|-------|
| **Created** | 5/2024 |
| **Context** | 32K tokens |
| **ID** | `mistralai/mistral-7b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.03
- Completion: $0.05

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Mistral: Mistral 7B Instruct v0.3

> A high-performing, industry-standard 7.3B parameter model, with optimizations for speed and context length.

| Property | Value |
|----------|-------|
| **Created** | 5/2024 |
| **Context** | 32K tokens |
| **ID** | `mistralai/mistral-7b-instruct-v0.3` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.20
- Completion: $0.20

### 🚫 Mistral: Mistral 7B Instruct v0.2

> A high-performing, industry-standard 7.3B parameter model, with optimizations for speed and context length.

| Property | Value |
|----------|-------|
| **Created** | 12/2023 |
| **Context** | 32K tokens |
| **ID** | `mistralai/mistral-7b-instruct-v0.2` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.20
- Completion: $0.20

### 🚫 Mistral: Mixtral 8x7B Instruct

> Mixtral 8x7B Instruct is a pretrained generative Sparse Mixture of Experts, by Mistral AI, for chat and instruction use. Incorporates 8 experts (feed-forward networks) for a total of 47 billion parameters.

| Property | Value |
|----------|-------|
| **Created** | 12/2023 |
| **Context** | 32K tokens |
| **ID** | `mistralai/mixtral-8x7b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.54
- Completion: $0.54

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Mistral: Mistral 7B Instruct v0.1

> A 7.3B parameter model that outperforms Llama 2 13B on all benchmarks, with optimizations for speed and context length.

| Property | Value |
|----------|-------|
| **Created** | 9/2023 |
| **Context** | 3K tokens |
| **ID** | `mistralai/mistral-7b-instruct-v0.1` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.11
- Completion: $0.19

---

## ~~moonshotai~~ [DISABLED]

*1 model — no structured outputs*

### 🚫 MoonshotAI: Kimi K2 0711 (free)

> Kimi K2 Instruct is a large-scale Mixture-of-Experts (MoE) language model developed by Moonshot AI, featuring 1 trillion total parameters with 32 billion active per forward pass. It is optimized for agentic capabilities, including advanced tool use, reasoning, and code synthesis. Kimi K2 excels across a broad range of benchmarks, particularly in coding (LiveCodeBench, SWE-bench), reasoning (ZebraLogic, GPQA), and tool-use (Tau2, AceBench) tasks. It supports long-context inference up to 128K tokens and is designed with a novel training stack that includes the MuonClip optimizer for stable large-scale MoE training.

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 32K tokens |
| **ID** | `moonshotai/kimi-k2:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

---

## ~~morph~~ [DISABLED]

*2 models — no structured outputs*

### 🚫 Morph: Morph V3 Large

> Morph's high-accuracy apply model for complex code edits. ~4,500 tokens/sec with 98% accuracy for precise code transformations.

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 256K tokens |
| **ID** | `morph/morph-v3-large` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.90
- Completion: $1.90

### 🚫 Morph: Morph V3 Fast

> Morph's fastest apply model for code edits. ~10,500 tokens/sec with 96% accuracy for rapid code transformations.

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 80K tokens |
| **ID** | `morph/morph-v3-fast` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.80
- Completion: $1.20

---

## ~~nousresearch~~ [DISABLED]

*3 models — no structured outputs*

### 🚫 Nous: Hermes 4 405B

> Hermes 4 is a large-scale reasoning model built on Meta-Llama-3.1-405B and released by Nous Research. It introduces a hybrid reasoning mode, where the model can choose to deliberate internally with <think>...</think> traces or respond directly, offering flexibility between speed and depth. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://openrouter.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config)

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 128K tokens |
| **ID** | `nousresearch/hermes-4-405b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.00
- Completion: $3.00

**Capabilities:** 🧠 Reasoning

### 🚫 Nous: Hermes 3 405B Instruct (free)

> Hermes 3 is a generalist language model with many improvements over Hermes 2, including advanced agentic capabilities, much better roleplaying, reasoning, multi-turn conversation, long context coherence, and improvements across the board.

| Property | Value |
|----------|-------|
| **Created** | 8/2024 |
| **Context** | 128K tokens |
| **ID** | `nousresearch/hermes-3-llama-3.1-405b:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

### 🚫 Nous: Hermes 3 405B Instruct

> Hermes 3 is a generalist language model with many improvements over Hermes 2, including advanced agentic capabilities, much better roleplaying, reasoning, multi-turn conversation, long context coherence, and improvements across the board.

| Property | Value |
|----------|-------|
| **Created** | 8/2024 |
| **Context** | 128K tokens |
| **ID** | `nousresearch/hermes-3-llama-3.1-405b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.00
- Completion: $1.00

---

## ~~nvidia~~ [DISABLED]

*6 models — no structured outputs*

### 🚫 NVIDIA: Nemotron 3 Nano 30B A3B (free)

> NVIDIA Nemotron 3 Nano 30B A3B is a small language MoE model with highest compute efficiency and accuracy for developers to build specialized agentic AI systems.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 250K tokens |
| **ID** | `nvidia/nemotron-3-nano-30b-a3b:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### 🚫 NVIDIA: Nemotron Nano 12B 2 VL (free)

> NVIDIA Nemotron Nano 2 VL is a 12-billion-parameter open multimodal reasoning model designed for video understanding and document intelligence. It introduces a hybrid Transformer-Mamba architecture, combining transformer-level accuracy with Mamba’s memory-efficient sequence modeling for significantly higher throughput and lower latency.

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 125K tokens |
| **ID** | `nvidia/nemotron-nano-12b-v2-vl:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### 🚫 NVIDIA: Nemotron Nano 12B 2 VL

> NVIDIA Nemotron Nano 2 VL is a 12-billion-parameter open multimodal reasoning model designed for video understanding and document intelligence. It introduces a hybrid Transformer-Mamba architecture, combining transformer-level accuracy with Mamba’s memory-efficient sequence modeling for significantly higher throughput and lower latency.

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 128K tokens |
| **ID** | `nvidia/nemotron-nano-12b-v2-vl` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.20
- Completion: $0.60

**Capabilities:** 🧠 Reasoning

### 🚫 NVIDIA: Llama 3.3 Nemotron Super 49B V1.5

> Llama-3.3-Nemotron-Super-49B-v1.5 is a 49B-parameter, English-centric reasoning/chat model derived from Meta’s Llama-3.3-70B-Instruct with a 128K context. It’s post-trained for agentic workflows (RAG, tool calling) via SFT across math, code, science, and multi-turn chat, followed by multiple RL stages; Reward-aware Preference Optimization (RPO) for alignment, RL with Verifiable Rewards (RLVR) for step-wise reasoning, and iterative DPO to refine tool-use behavior. A distillation-driven Neural Architecture Search (“Puzzle”) replaces some attention blocks and varies FFN widths to shrink memory footprint and improve throughput, enabling single-GPU (H100/H200) deployment while preserving instruction following and CoT quality.

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 128K tokens |
| **ID** | `nvidia/llama-3.3-nemotron-super-49b-v1.5` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.10
- Completion: $0.40

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### 🚫 NVIDIA: Nemotron Nano 9B V2

> NVIDIA-Nemotron-Nano-9B-v2 is a large language model (LLM) trained from scratch by NVIDIA, and designed as a unified model for both reasoning and non-reasoning tasks. It responds to user queries and tasks by first generating a reasoning trace and then concluding with a final response. 

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 128K tokens |
| **ID** | `nvidia/nemotron-nano-9b-v2` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.04
- Completion: $0.16

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### 🚫 NVIDIA: Llama 3.1 Nemotron 70B Instruct

> NVIDIA's Llama 3.1 Nemotron 70B is a language model designed for generating precise and useful responses. Leveraging [Llama 3.1 70B](/models/meta-llama/llama-3.1-70b-instruct) architecture and Reinforcement Learning from Human Feedback (RLHF), it excels in automatic alignment benchmarks. This model is tailored for applications requiring high accuracy in helpfulness and response generation, suitable for diverse user queries across multiple domains.

| Property | Value |
|----------|-------|
| **Created** | 10/2024 |
| **Context** | 128K tokens |
| **ID** | `nvidia/llama-3.1-nemotron-70b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.20
- Completion: $1.20

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

---

## ~~openai~~ [DISABLED]

*3 models — no structured outputs*

### 🚫 OpenAI: gpt-oss-safeguard-20b

> gpt-oss-safeguard-20b is a safety reasoning model from OpenAI built upon gpt-oss-20b. This open-weight, 21B-parameter Mixture-of-Experts (MoE) model offers lower latency for safety tasks like content classification, LLM filtering, and trust & safety labeling.

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 128K tokens |
| **ID** | `openai/gpt-oss-safeguard-20b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.07
- Completion: $0.30

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### 🚫 OpenAI: gpt-oss-120b (free)

> gpt-oss-120b is an open-weight, 117B-parameter Mixture-of-Experts (MoE) language model from OpenAI designed for high-reasoning, agentic, and general-purpose production use cases. It activates 5.1B parameters per forward pass and is optimized to run on a single H100 GPU with native MXFP4 quantization. The model supports configurable reasoning depth, full chain-of-thought access, and native tool use, including function calling, browsing, and structured output generation.

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 128K tokens |
| **ID** | `openai/gpt-oss-120b:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### 🚫 OpenAI: gpt-oss-20b (free)

> gpt-oss-20b is an open-weight 21B parameter model released by OpenAI under the Apache 2.0 license. It uses a Mixture-of-Experts (MoE) architecture with 3.6B active parameters per forward pass, optimized for lower-latency inference and deployability on consumer or single-GPU hardware. The model is trained in OpenAI’s Harmony response format and supports reasoning level configuration, fine-tuning, and agentic capabilities including function calling, tool use, and structured outputs.

| Property | Value |
|----------|-------|
| **Created** | 8/2025 |
| **Context** | 128K tokens |
| **ID** | `openai/gpt-oss-20b:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

---

## ~~openrouter~~ [DISABLED]

*2 models — no structured outputs*

### 🚫 Body Builder (beta)

> Transform your natural language requests into structured OpenRouter API request objects. Describe what you want to accomplish with AI models, and Body Builder will construct the appropriate API calls. Example: "count to 10 using gemini and opus."

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 125K tokens |
| **ID** | `openrouter/bodybuilder` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

### 🚫 Auto Router

> Your prompt will be processed by a meta-model and routed to one of dozens of models (see below), optimizing for the best possible output.

| Property | Value |
|----------|-------|
| **Created** | 11/2023 |
| **Context** | 1.9M tokens |
| **ID** | `openrouter/auto` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

---

## ~~perplexity~~ [DISABLED]

*6 models — no structured outputs*

### 🚫 Perplexity: Sonar Pro Search

> Exclusively available on the OpenRouter API, Sonar Pro's new Pro Search mode is Perplexity's most advanced agentic search system. It is designed for deeper reasoning and analysis. Pricing is based on tokens plus $18 per thousand requests. This model powers the Pro Search mode on the Perplexity platform.

| Property | Value |
|----------|-------|
| **Created** | 10/2025 |
| **Context** | 195K tokens |
| **ID** | `perplexity/sonar-pro-search` |

**💸 Pricing** (per 1M tokens)

- Prompt: $3.00
- Completion: $15.00

**Capabilities:** 🌐 Web Search · 🧠 Reasoning

### 🚫 Perplexity: Sonar Reasoning Pro

> Note: Sonar Pro pricing includes Perplexity search pricing. See [details here](https://docs.perplexity.ai/guides/pricing#detailed-pricing-breakdown-for-sonar-reasoning-pro-and-sonar-pro)

| Property | Value |
|----------|-------|
| **Created** | 3/2025 |
| **Context** | 125K tokens |
| **ID** | `perplexity/sonar-reasoning-pro` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.00
- Completion: $8.00
- Web Search: 0.005

**Capabilities:** 🌐 Web Search · 🧠 Reasoning

### 🚫 Perplexity: Sonar Pro

> Note: Sonar Pro pricing includes Perplexity search pricing. See [details here](https://docs.perplexity.ai/guides/pricing#detailed-pricing-breakdown-for-sonar-reasoning-pro-and-sonar-pro)

| Property | Value |
|----------|-------|
| **Created** | 3/2025 |
| **Context** | 195K tokens |
| **ID** | `perplexity/sonar-pro` |

**💸 Pricing** (per 1M tokens)

- Prompt: $3.00
- Completion: $15.00
- Web Search: 0.005

**Capabilities:** 🌐 Web Search

### 🚫 Perplexity: Sonar Deep Research

> Sonar Deep Research is a research-focused model designed for multi-step retrieval, synthesis, and reasoning across complex topics. It autonomously searches, reads, and evaluates sources, refining its approach as it gathers information. This enables comprehensive report generation across domains like finance, technology, health, and current events.

| Property | Value |
|----------|-------|
| **Created** | 3/2025 |
| **Context** | 125K tokens |
| **ID** | `perplexity/sonar-deep-research` |

**💸 Pricing** (per 1M tokens)

- Prompt: $2.00
- Completion: $8.00
- Web Search: 0.005
- Reasoning: $3.00

**Capabilities:** 🌐 Web Search · 🧠 Reasoning

### 🚫 Perplexity: Sonar Reasoning

> Sonar Reasoning is a reasoning model provided by Perplexity based on [DeepSeek R1](/deepseek/deepseek-r1).

| Property | Value |
|----------|-------|
| **Created** | 1/2025 |
| **Context** | 124K tokens |
| **ID** | `perplexity/sonar-reasoning` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.00
- Completion: $5.00

**Capabilities:** 🌐 Web Search · 🧠 Reasoning

### 🚫 Perplexity: Sonar

> Sonar is lightweight, affordable, fast, and simple to use — now featuring citations and the ability to customize sources. It is designed for companies seeking to integrate lightweight question-and-answer features optimized for speed.

| Property | Value |
|----------|-------|
| **Created** | 1/2025 |
| **Context** | 124K tokens |
| **ID** | `perplexity/sonar` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.00
- Completion: $1.00

**Capabilities:** 🌐 Web Search

---

## ~~qwen~~ [DISABLED]

*11 models — no structured outputs*

### 🚫 Qwen: Qwen3 Max

> Qwen3-Max is an updated release built on the Qwen3 series, offering major improvements in reasoning, instruction following, multilingual support, and long-tail knowledge coverage compared to the January 2025 version. It delivers higher accuracy in math, coding, logic, and science tasks, follows complex instructions in Chinese and English more reliably, reduces hallucinations, and produces higher-quality responses for open-ended Q&A, writing, and conversation. The model supports over 100 languages with stronger translation and commonsense reasoning, and is optimized for retrieval-augmented generation (RAG) and tool calling, though it does not include a dedicated “thinking” mode.

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 250K tokens |
| **ID** | `qwen/qwen3-max` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.20
- Completion: $6.00

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Qwen: Qwen3 Coder Flash

> Qwen3 Coder Flash is Alibaba's fast and cost efficient version of their proprietary Qwen3 Coder Plus. It is a powerful coding agent model specializing in autonomous programming via tool calling and environment interaction, combining coding proficiency with versatile general-purpose abilities.

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 125K tokens |
| **ID** | `qwen/qwen3-coder-flash` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.30
- Completion: $1.50

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Qwen: Qwen3 Coder 480B A35B (free)

> Qwen3-Coder-480B-A35B-Instruct is a Mixture-of-Experts (MoE) code generation model developed by the Qwen team. It is optimized for agentic coding tasks such as function calling, tool use, and long-context reasoning over repositories. The model features 480 billion total parameters, with 35 billion active per forward pass (8 out of 160 experts).

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 256K tokens |
| **ID** | `qwen/qwen3-coder:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Qwen: Qwen VL Plus

> Qwen's Enhanced Large Visual Language Model. Significantly upgraded for detailed recognition capabilities and text recognition abilities, supporting ultra-high pixel resolutions up to millions of pixels and extreme aspect ratios for image input. It delivers significant performance across a broad range of visual tasks.

| Property | Value |
|----------|-------|
| **Created** | 2/2025 |
| **Context** | 7K tokens |
| **ID** | `qwen/qwen-vl-plus` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.21
- Completion: $0.63

### 🚫 Qwen: Qwen VL Max

> Qwen VL Max is a visual understanding model with 7500 tokens context length. It excels in delivering optimal performance for a broader spectrum of complex tasks.

| Property | Value |
|----------|-------|
| **Created** | 2/2025 |
| **Context** | 128K tokens |
| **ID** | `qwen/qwen-vl-max` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.80
- Completion: $3.20

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Qwen: Qwen-Turbo

> Qwen-Turbo, based on Qwen2.5, is a 1M context model that provides fast speed and low cost, suitable for simple tasks.

| Property | Value |
|----------|-------|
| **Created** | 2/2025 |
| **Context** | 977K tokens |
| **ID** | `qwen/qwen-turbo` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.05
- Completion: $0.20

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Qwen: Qwen-Plus

> Qwen-Plus, based on the Qwen2.5 foundation model, is a 131K context model with a balanced performance, speed, and cost combination.

| Property | Value |
|----------|-------|
| **Created** | 2/2025 |
| **Context** | 128K tokens |
| **ID** | `qwen/qwen-plus` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.40
- Completion: $1.20

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Qwen: Qwen-Max 

> Qwen-Max, based on Qwen2.5, provides the best inference performance among [Qwen models](/qwen), especially for complex multi-step tasks. It's a large-scale MoE model that has been pretrained on over 20 trillion tokens and further post-trained with curated Supervised Fine-Tuning (SFT) and Reinforcement Learning from Human Feedback (RLHF) methodologies. The parameter count is unknown.

| Property | Value |
|----------|-------|
| **Created** | 2/2025 |
| **Context** | 32K tokens |
| **ID** | `qwen/qwen-max` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.60
- Completion: $6.40

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Qwen: Qwen2.5 7B Instruct

> Qwen2.5 7B is the latest series of Qwen large language models. Qwen2.5 brings the following improvements upon Qwen2:

| Property | Value |
|----------|-------|
| **Created** | 10/2024 |
| **Context** | 32K tokens |
| **ID** | `qwen/qwen-2.5-7b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.04
- Completion: $0.10

### 🚫 Qwen: Qwen2.5-VL 7B Instruct (free)

> Qwen2.5 VL 7B is a multimodal LLM from the Qwen Team with the following key enhancements:

| Property | Value |
|----------|-------|
| **Created** | 8/2024 |
| **Context** | 32K tokens |
| **ID** | `qwen/qwen-2.5-vl-7b-instruct:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

### 🚫 Qwen: Qwen2.5-VL 7B Instruct

> Qwen2.5 VL 7B is a multimodal LLM from the Qwen Team with the following key enhancements:

| Property | Value |
|----------|-------|
| **Created** | 8/2024 |
| **Context** | 32K tokens |
| **ID** | `qwen/qwen-2.5-vl-7b-instruct` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.20
- Completion: $0.20

---

## ~~raifle~~ [DISABLED]

*1 model — no structured outputs*

### 🚫 SorcererLM 8x22B

> SorcererLM is an advanced RP and storytelling model, built as a Low-rank 16-bit LoRA fine-tuned on [WizardLM-2 8x22B](/microsoft/wizardlm-2-8x22b).

| Property | Value |
|----------|-------|
| **Created** | 11/2024 |
| **Context** | 16K tokens |
| **ID** | `raifle/sorcererlm-8x22b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $4.50
- Completion: $4.50

---

## ~~relace~~ [DISABLED]

*2 models — no structured outputs*

### 🚫 Relace: Relace Search

> The relace-search model uses 4-12 `view_file` and `grep` tools in parallel to explore a codebase and return relevant files to the user request. 

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 250K tokens |
| **ID** | `relace/relace-search` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.00
- Completion: $3.00

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

### 🚫 Relace: Relace Apply 3

> Relace Apply 3 is a specialized code-patching LLM that merges AI-suggested edits straight into your source files. It can apply updates from GPT-4o, Claude, and others into your files at 10,000 tokens/sec on average.

| Property | Value |
|----------|-------|
| **Created** | 9/2025 |
| **Context** | 250K tokens |
| **ID** | `relace/relace-apply-3` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.85
- Completion: $1.25

---

## ~~sao10k~~ [DISABLED]

*2 models — no structured outputs*

### 🚫 Sao10K: Llama 3.1 70B Hanami x1

> This is [Sao10K](/sao10k)'s experiment over [Euryale v2.2](/sao10k/l3.1-euryale-70b).

| Property | Value |
|----------|-------|
| **Created** | 1/2025 |
| **Context** | 16K tokens |
| **ID** | `sao10k/l3.1-70b-hanami-x1` |

**💸 Pricing** (per 1M tokens)

- Prompt: $3.00
- Completion: $3.00

### 🚫 Sao10k: Llama 3 Euryale 70B v2.1

> Euryale 70B v2.1 is a model focused on creative roleplay from [Sao10k](https://ko-fi.com/sao10k).

| Property | Value |
|----------|-------|
| **Created** | 6/2024 |
| **Context** | 8K tokens |
| **ID** | `sao10k/l3-euryale-70b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $1.48
- Completion: $1.48

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

---

## ~~switchpoint~~ [DISABLED]

*1 model — no structured outputs*

### 🚫 Switchpoint Router

> Switchpoint AI's router instantly analyzes your request and directs it to the optimal AI from an ever-evolving library. 

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 128K tokens |
| **ID** | `switchpoint/router` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.85
- Completion: $3.40

**Capabilities:** 🧠 Reasoning

---

## ~~thedrummer~~ [DISABLED]

*1 model — no structured outputs*

### 🚫 TheDrummer: Skyfall 36B V2

> Skyfall 36B v2 is an enhanced iteration of Mistral Small 2501, specifically fine-tuned for improved creativity, nuanced writing, role-playing, and coherent storytelling.

| Property | Value |
|----------|-------|
| **Created** | 3/2025 |
| **Context** | 32K tokens |
| **ID** | `thedrummer/skyfall-36b-v2` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.55
- Completion: $0.80

---

## ~~thudm~~ [DISABLED]

*1 model — no structured outputs*

### 🚫 THUDM: GLM 4.1V 9B Thinking

> GLM-4.1V-9B-Thinking is a 9B parameter vision-language model developed by THUDM, based on the GLM-4-9B foundation. It introduces a reasoning-centric "thinking paradigm" enhanced with reinforcement learning to improve multimodal reasoning, long-context understanding (up to 64K tokens), and complex problem solving. It achieves state-of-the-art performance among models in its class, outperforming even larger models like Qwen-2.5-VL-72B on a majority of benchmark tasks. 

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 64K tokens |
| **ID** | `thudm/glm-4.1v-9b-thinking` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.04
- Completion: $0.14

**Capabilities:** 🧠 Reasoning

---

## ~~tngtech~~ [DISABLED]

*3 models — no structured outputs*

### 🚫 TNG: R1T Chimera

> TNG-R1T-Chimera is an experimental LLM with a faible for creative storytelling and character interaction. It is a derivate of the original TNG/DeepSeek-R1T-Chimera released in April 2025 and is available exclusively via Chutes and OpenRouter.

| Property | Value |
|----------|-------|
| **Created** | 11/2025 |
| **Context** | 160K tokens |
| **ID** | `tngtech/tng-r1t-chimera` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.25
- Completion: $0.85

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### 🚫 TNG: DeepSeek R1T2 Chimera (free)

> DeepSeek-TNG-R1T2-Chimera is the second-generation Chimera model from TNG Tech. It is a 671 B-parameter mixture-of-experts text-generation model assembled from DeepSeek-AI’s R1-0528, R1, and V3-0324 checkpoints with an Assembly-of-Experts merge. The tri-parent design yields strong reasoning performance while running roughly 20 % faster than the original R1 and more than 2× faster than R1-0528 under vLLM, giving a favorable cost-to-intelligence trade-off. The checkpoint supports contexts up to 60 k tokens in standard use (tested to ~130 k) and maintains consistent <think> token behaviour, making it suitable for long-context analysis, dialogue and other open-ended generation tasks.

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 160K tokens |
| **ID** | `tngtech/deepseek-r1t2-chimera:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🧠 Reasoning

### 🚫 TNG: DeepSeek R1T Chimera (free)

> DeepSeek-R1T-Chimera is created by merging DeepSeek-R1 and DeepSeek-V3 (0324), combining the reasoning capabilities of R1 with the token efficiency improvements of V3. It is based on a DeepSeek-MoE Transformer architecture and is optimized for general text generation tasks.

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 160K tokens |
| **ID** | `tngtech/deepseek-r1t-chimera:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🧠 Reasoning

---

## ~~x-ai~~ [DISABLED]

*2 models — no structured outputs*

### 🚫 xAI: Grok 3 Mini Beta

> Grok 3 Mini is a lightweight, smaller thinking model. Unlike traditional models that generate answers immediately, Grok 3 Mini thinks before responding. It’s ideal for reasoning-heavy tasks that don’t demand extensive domain knowledge, and shines in math-specific and quantitative use cases, such as solving challenging puzzles or math problems.

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 128K tokens |
| **ID** | `x-ai/grok-3-mini-beta` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.30
- Completion: $0.50

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### 🚫 xAI: Grok 3 Beta

> Grok 3 is the latest model from xAI. It's their flagship model that excels at enterprise use cases like data extraction, coding, and text summarization. Possesses deep domain knowledge in finance, healthcare, law, and science.

| Property | Value |
|----------|-------|
| **Created** | 4/2025 |
| **Context** | 128K tokens |
| **ID** | `x-ai/grok-3-beta` |

**💸 Pricing** (per 1M tokens)

- Prompt: $3.00
- Completion: $15.00

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

---

## ~~xiaomi~~ [DISABLED]

*1 model — no structured outputs*

### 🚫 Xiaomi: MiMo-V2-Flash (free)

> MiMo-V2-Flash is an open-source foundation language model developed by Xiaomi. It is a Mixture-of-Experts model with 309B total parameters and 15B active parameters, adopting hybrid attention architecture. MiMo-V2-Flash supports a hybrid-thinking toggle and a 256K context window, and excels at reasoning, coding, and agent scenarios. On SWE-bench Verified and SWE-bench Multilingual, MiMo-V2-Flash ranks as the top #1 open-source model globally, delivering performance comparable to Claude Sonnet 4.5 while costing only about 3.5% as much.

| Property | Value |
|----------|-------|
| **Created** | 12/2025 |
| **Context** | 256K tokens |
| **ID** | `xiaomi/mimo-v2-flash:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

---

## ~~z-ai~~ [DISABLED]

*2 models — no structured outputs*

### 🚫 Z.AI: GLM 4.5 Air (free)

> GLM-4.5-Air is the lightweight variant of our latest flagship model family, also purpose-built for agent-centric applications. Like GLM-4.5, it adopts the Mixture-of-Experts (MoE) architecture but with a more compact parameter size. GLM-4.5-Air also supports hybrid inference modes, offering a "thinking mode" for advanced reasoning and tool use, and a "non-thinking mode" for real-time interaction. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://openrouter.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config)

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 128K tokens |
| **ID** | `z-ai/glm-4.5-air:free` |

**💸 Pricing** (per 1M tokens)

- Prompt: Free
- Completion: Free

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice · 🧠 Reasoning

### 🚫 Z.AI: GLM 4 32B 

> GLM 4 32B is a cost-effective foundation language model.

| Property | Value |
|----------|-------|
| **Created** | 7/2025 |
| **Context** | 125K tokens |
| **ID** | `z-ai/glm-4-32b` |

**💸 Pricing** (per 1M tokens)

- Prompt: $0.10
- Completion: $0.10

**Capabilities:** 🔨 Tools · ⚙️ Tool Choice

---

## Summary Statistics

| Metric | Count | Percentage |
|--------|-------|------------|
| Total Models | 351 | 100% |
| ✅ With Structured Outputs | 219 | 62.4% |
| 🚫 Without Structured Outputs | 132 | 37.6% |
| With Tool Calling | 233 | 66.4% |
| With Reasoning | 140 | 39.9% |
| Free Models | 35 | 10.0% |

## All Supported Parameters

`frequency_penalty`, `include_reasoning`, `logit_bias`, `logprobs`, `max_tokens`, `min_p`, `presence_penalty`, `reasoning`, `reasoning_effort`, `repetition_penalty`, `response_format`, `seed`, `stop`, `structured_outputs`, `temperature`, `tool_choice`, `tools`, `top_a`, `top_k`, `top_logprobs`, `top_p`, `verbosity`, `web_search_options`
