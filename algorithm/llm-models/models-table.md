# Complete LLM Model Selection Table - 219 Models
*All structured-output compatible models with personality and capability analysis*

| Vendor | Model Family | Model Name | Parameters (B) | Context (K) | Personality Traits | Analytical Traits | Best For | Optimal Team Examples | Creative Score | Deductive Score | Special Properties/Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Alibaba** | Tongyi | Tongyi DeepResearch 30B A3B | 30.5 (3.3 active) | 128 | High Conscientiousness, Mod Openness | Agentic reasoning, Web tool integration, ReAct/IterResearch modes | Long-horizon research, Deep information synthesis, Multi-step web research | Research Synthesis Lab, Competitive Intelligence, The Interrogator | 6.0 | 9.0 | MoE ~30.5B/~3.3B active, Qwen3-MoE lineage, Dual inference modes, HLE 32.9, Apache 2.0 |
| **AllenAI** | OLMo | OLMo 3.1 32B Think | 32 | 128 | High Openness (reasoning-focused), High Conscientiousness | Extended RL training, Chain-of-thought reasoning, 21-day RL | Deep reasoning, Math (MATH 96.2), Logic (ZebraLogic 80.1), Coding (HumanEval+ 91.5) | The Think Tank, Board of Directors, The Ivy League | 5.5 | 9.5 | Apache 2.0, Strongest open reasoning model, +5 AIME over 3.0, Fully open weights/data/recipes |
| **AllenAI** | OLMo | OLMo 3 32B Think | 32 | 128 | High Openness, Mod Conscientiousness | Chain-of-thought, Reasoning-focused | Math and logic reasoning, Systematic analysis | The Think Tank, Analytical teams | 5.0 | 9.0 | Apache 2.0, Earlier reasoning version, Fully open-source |
| **AllenAI** | OLMo | OLMo 3 7B Instruct | 7 | 128 | Balanced, Mod Agreeableness | Instruction-following, Dolci tuning | Everyday tasks, General assistance, Chat | General support roles, Customer Success | 6.0 | 6.5 | Apache 2.0, Fully open, Efficient 7B for everyday use |
| **AllenAI** | OLMo | OLMo 3 7B Think | 7 | 128 | Mod Openness (reasoning-focused) | Reasoning at small scale | Budget reasoning tasks, Edge reasoning | Cost-effective analytical roles | 5.0 | 7.5 | Apache 2.0, Small reasoning model, Efficient deployment |
| **Anthropic** | Claude | Claude Opus 4.5 | Unknown | 200 | High Conscientiousness, High Agreeableness, Mod Openness | Extended thinking 64K tokens, Systematic reasoning, 80.9% SWE-bench | Quality control, Nuanced characters, Complex software engineering | The Advisory Board, The Publisher, The Psychologists, Heist Crew | 8.5 | 9.5 | Best SWE-bench 80.9%, Terminal-Bench 59.3%, 76% fewer tokens at medium effort, Premium pricing |
| **Anthropic** | Claude | Claude Sonnet 4.5 | Unknown | 1000 | High Conscientiousness, High Agreeableness | Real-world agentic reasoning, 1M context | Project coordination, Balanced creative-analytical, Production workflows | Creative Collective, Product Management, The Incubator | 8.0 | 9.0 | 1M context, Agentic workflows, 74.3% SWE-bench, Production workhorse |
| **Anthropic** | Claude | Claude Opus 4.1 | Unknown | 200 | High Conscientiousness, High Agreeableness | Extended thinking up to 64K tokens, 74.5% SWE-bench | Complex coding, Systematic analysis | Technical teams requiring extended thinking | 8.0 | 9.0 | Updated flagship, 64K extended thinking, Previous generation Opus |
| **Arcee AI** | Trinity | Trinity Mini | 26 (3 active) | 128 | Balanced, Mod Conscientiousness | MoE 128 experts/8 active, Efficient reasoning, Function calling | Multi-step agents, Tool orchestration, Long-context RAG, Agentic workflows | Shadow Product Team, Business Development, Product Management | 6.5 | 8.0 | MoE 26B/3B active, 10T training tokens, Apache 2.0, Strong tool use, $0.15-0.50 range |
| **Arcee AI** | Trinity | Trinity Mini (free) | 26 (3 active) | 128 | Balanced, Mod Conscientiousness | Same as Trinity Mini | Same as Trinity Mini, Free tier | Cost-conscious agentic teams | 6.5 | 8.0 | Free tier of Trinity Mini, Same capabilities |
| **Baidu** | ERNIE | ERNIE 4.5 21B A3B | 21 (3 active) | 131 | High Conscientiousness, Mod Openness | MoE 64 experts/6 active, Knowledge integration, Reasoning/math/coding | Reasoning, Math, Coding, Multilingual (Chinese focus), Efficient computation | International operations, The Accountants, Technical teams | 6.0 | 8.5 | MoE 21B/3B active, 131K context, Thinking variant available, Multimodal capable, Qwen3-30B lineage |
| **ByteDance** | Seed | Seed 1.6 Flash | 230 (23 active) | 256 | High Extraversion, Mod Openness | Adaptive deep thinking, 146.8 tok/s, Ultra-fast multimodal | Real-time multimodal, Visual thinking, Rapid response, 16K output | Reality TV Producers, Travel Agency of Vibes, Fast creative teams | 7.5 | 7.5 | MoE 230B/23B active, Ultra-fast, Reasoning visualization, Multimodal: text/image/video |
| **ByteDance** | Seed | Seed 1.6 | 230 (23 active) | 256 | Mod Openness, Mod Extraversion | Adaptive deep thinking, Multimodal fusion | General-purpose multimodal, Comprehensive reasoning | Multimodal analysis teams | 7.0 | 7.5 | MoE 230B/23B active, Slower than Flash but deeper thinking |
| **Cohere** | Command R | Command R7B 12-2024 | 7-8 | 128 | Mod Agreeableness, Mod Conscientiousness | RAG optimization, Structured outputs, Tool use, 23 languages | RAG, Tool use, Code assistants, Low-latency chatbots, Edge deployment | Customer Success, The Concierge, RAG teams | 6.5 | 7.5 | Latest 7B, Strong RAG, 4K output, $0.0375/$0.15 per 1M, Edge-compatible, IFEval 77.9 |
| **Cohere** | Command R | Command R 08-2024 | ~35 | 128 | Mod Agreeableness, High Conscientiousness | Enterprise RAG, Grounded generation, Citations | Enterprise RAG, Document analysis, Retrieval workflows | Enterprise RAG teams, Document processing | 7.0 | 8.0 | Enterprise-focused, Strong citations, 10+ languages |
| **Cohere** | Command R | Command R+ 08-2024 | 104 | 128 | High Agreeableness, High Conscientiousness | Multi-step tool use, Self-correction, Inline citations, 50% throughput boost | Enterprise RAG with citations, CRM automation, Multi-step agents | Rfp Response Unit, Legal Compliance, Organization Core | 7.0 | 8.5 | 104B dense, 50% faster than previous, Multi-step tools, CC-BY-NC license |
| **Cohere** | Command R | Command R 03-2024 | ~35 | 128 | Mod Agreeableness, Mod Conscientiousness | RAG, Structured outputs | Earlier stable RAG release | Legacy RAG systems | 6.5 | 7.5 | Earlier stable version, Enterprise RAG |
| **DeepCogito** | Cogito | Cogito R1 Preview | 671 (unknown active) | 128 | High Openness (IDA-trained), Mod Conscientiousness | Iterated Distillation & Amplification, 60% shorter chains than R1, Hybrid reasoning | Superintelligence preview, Self-improvement reasoning, Both standard and reasoning modes | The Think Tank, The Ivy League, Advanced reasoning teams | 6.0 | 10.0 | MoE 671B, Matches DeepSeek v3/R1, IDA training, 60% shorter reasoning chains, Dual mode |
| **DeepCogito** | Cogito | Cogito R1 Preview (free) | 671 (unknown active) | 128 | High Openness, Mod Conscientiousness | Same as Cogito R1 | Same as Cogito R1, Free tier | Cost-conscious advanced reasoning | 6.0 | 10.0 | Free tier, Same capabilities as paid |
| **DeepCogito** | Cogito | Cogito R1 Preview 32B | 32 | 128 | High Openness, Mod Conscientiousness | IDA-based reasoning, Iterative policy improvement | Efficient reasoning at 32B scale | Medium-scale reasoning teams | 5.5 | 9.0 | 32B variant, IDA training, Efficient reasoning |
| **DeepSeek** | R1 | DeepSeek R1 | 671 (37 active) | 128 | High Openness (reasoning-focused), Mod Conscientiousness | Chain-of-thought, Self-verification, 91.4% AIME, RL training | Mathematical reasoning, Logic specialist, Systematic analysis, Exceptional value | The Think Tank, Occult Investigation Unit, Crisis Management | 6.0 | 10.0 | MoE 671B/37B active, Open-source, 90% cost savings, $0.55/$2.19, Exceptional reasoning |
| **DeepSeek** | R1 Distilled | DeepSeek R1 Distill Llama 70B | 70 | 128 | Mod Openness, Mod Conscientiousness | 80% of R1 reasoning, Llama base | Cost-effective reasoning on Llama architecture | Budget reasoning teams preferring Llama | 5.5 | 9.0 | 70B Llama distill, 80% of R1 performance, 95% cost savings |
| **DeepSeek** | R1 Distilled | DeepSeek R1 Distill Qwen 32B | 32 | 128 | Mod Openness | Efficient reasoning, Qwen base | Balanced reasoning at 32B, Efficient deployment | Cost-sensitive analytical teams | 5.0 | 8.5 | 32B Qwen distill, Excellent value, 80% of R1 |
| **DeepSeek** | R1 Distilled | DeepSeek R1 Distill Qwen 14B | 14 | 128 | Mod Openness | Compact reasoning | Edge reasoning, Resource-constrained | Budget analytical roles, Edge deployment | 4.5 | 8.0 | 14B Qwen distill, Smallest viable reasoning |
| **DeepSeek** | R1 Distilled | DeepSeek R1 Distill Qwen 7B | 7 | 128 | Mod Openness | Ultra-compact reasoning | Very constrained environments | Ultra-budget reasoning | 4.0 | 7.5 | 7B Qwen distill, Ultra-efficient |
| **DeepSeek** | R1 Distilled | DeepSeek R1 Distill Llama 8B | 8 | 128 | Mod Openness | Efficient reasoning at 8B | Small-scale reasoning on Llama | Edge Llama-based reasoning | 4.5 | 7.5 | 8B Llama distill, Efficient reasoning |
| **DeepSeek** | R1 | DeepSeek R1 (free) | 671 (37 active) | 128 | High Openness, Mod Conscientiousness | Same as R1 | Same as R1, Free tier | Cost-conscious advanced reasoning | 6.0 | 10.0 | Free tier of flagship, Same capabilities |
| **DeepSeek** | V3 | DeepSeek V3 | 671 (37 active) | 128 | Balanced, High Conscientiousness | General-purpose, Latest generation | Versatile general-purpose tasks, Cost-effective | General operations teams | 6.5 | 9.0 | MoE 671B/37B active, $0.28/$0.42, 90% below GPT-4.1, Latest general model |
| **DeepSeek** | Chat | DeepSeek Chat | Unknown | 128 | Balanced, High Agreeableness | Conversational optimization | Chat applications, Customer service | Conversational teams | 6.5 | 7.5 | Conversational variant, User-friendly |
| **DeepSeek** | Coder | DeepSeek Coder | Unknown | 128 | Mod Conscientiousness, Mod Openness | Coding specialization | Code generation, Technical tasks | Technical implementation teams | 6.0 | 8.5 | Coding specialist variant |
| **DeepSeek** | V2.5 | DeepSeek V2.5 | Unknown | 128 | Balanced | Previous generation capabilities | Legacy DeepSeek applications | General teams on previous version | 6.0 | 8.5 | Previous generation flagship |
| **DeepSeek** | V2.5 | DeepSeek V2.5 (free) | Unknown | 128 | Balanced | Previous generation | Legacy free tier | Cost-conscious legacy teams | 6.0 | 8.5 | Free tier of V2.5 |
| **EssentialAI** | Rnj | Rnj-1 8B | 8 | Unknown | Mod Conscientiousness, Mod Openness | Programming, Math, Scientific reasoning focus | Focused programming and math tasks | Technical specialist roles | 5.0 | 8.0 | 8B specialist, Programming/math/science focus |
| **Google** | Gemini | Gemini 3 Flash Preview | Unknown | 1000 | Mod all dimensions | High-speed thinking, Agentic workflows, 1M context | Fast agentic workflows, High-throughput thinking | Fast agentic teams, The Daily Dispatch | 7.0 | 8.5 | 1M context, Preview experimental, High-speed |
| **Google** | Gemini | Gemini 3 Pro Image Preview | Unknown | 1000 | Mod Openness, Creative-leaning | Advanced image generation/editing (Nano Banana Pro) | Image generation, Visual editing, Creative visual work | The Studio, Visual creative teams | 8.0 | 7.0 | Image generation specialist, 1M context, Preview status |
| **Google** | Gemini | Gemini 3 Pro Preview | Unknown | 1000 | Lower Agreeableness/Conscientiousness, High Openness | PhD-level reasoning, Dynamic Thinking, Multimodal | Complex multimodal reasoning, Strategic planning, Visual+text | The Hedge Fund, Competitive Intelligence, Michelin Inspectors | 7.5 | 9.5 | Flagship frontier, 1M context, MMMU-Pro 81%, SWE-bench 76.2%, 10 FPS video, Pixel-precise pointing |
| **Google** | Gemini | Gemini 2.5 Flash Image | Unknown | 1000 | Mod Openness | Image-focused Flash (Nano Banana) | Image processing at speed | Fast image analysis | 7.5 | 7.5 | Image variant, Flash speed |
| **Google** | Gemini | Gemini 2.5 Flash Preview 09-2025 | Unknown | 1000 | Mod all dimensions | State-of-the-art reasoning, coding, math, 392 tok/s | Advanced reasoning at high speed | High-volume advanced processing | 6.5 | 8.5 | Preview status, State-of-the-art Flash |
| **Google** | Gemini | Gemini 2.5 Flash Lite Preview 09-2025 | Unknown | 1000 | Mod all dimensions | Ultra-low latency, Lightweight reasoning, 392.8 tok/s, 0.29s TTFT | Ultra-fast lightweight reasoning | Real-time lightweight applications | 6.0 | 7.5 | Ultra-low latency, 392.8 tok/s, 0.29s TTFT, Lightest reasoning |
| Google | Gemini | Gemini 2.5 Flash Image Preview | Unknown | 1000 | Mod Openness | Image preview capabilities | Image-focused preview testing | Image preview applications | 7.0 | 7.5 | Image preview variant |
| Google | Gemini | Gemini 2.5 Flash Lite | Unknown | 1000 | Mod all dimensions | Production lightweight, Low latency | Production lightweight reasoning | Production lightweight apps | 6.0 | 7.5 | Production Lite version |
| Google | Gemini | Gemini 2.5 Flash | Unknown | 1000 | Mod all dimensions | Thinking mode optional, 392 tok/s, Production workhorse | High-volume processing, Fast multimodal, Production scale | The Daily Dispatch, The Newsroom, Customer Success | 6.5 | 8.0 | $0.15/$3.50 thinking, $0.60 standard, 1M context, Production workhorse |
| Google | Gemini | Gemini 2.0 Flash Thinking Exp 1219 | Unknown | 1000 | Mod all dimensions | Experimental thinking variant | Experimental thinking applications | Experimental reasoning teams | 6.5 | 8.0 | Experimental thinking, Dec 2024 |
| Google | Gemini | Gemini 2.0 Flash Exp | Unknown | 1000 | Mod all dimensions | Experimental Flash | Experimental Flash testing | Experimental teams | 6.5 | 8.0 | Experimental release |
| Google | Gemini | Gemini 2.0 Flash | Unknown | 1000 | Mod all dimensions | Latest production Flash | Production Flash applications | Production Flash teams | 6.5 | 8.0 | Latest production Flash model |
| Google | Gemini | Gemini Exp 1206 | Unknown | 1000 | Mod all dimensions | Experimental Dec 2024 | Experimental testing | Experimental teams | 6.5 | 8.0 | Experimental from Dec 2024 |
| Google | Gemini | Gemini 1.5 Flash 8B | 8 | 1000 | Mod all dimensions | Efficient 8B, 1M context | Efficient Flash at small scale | Efficient high-context teams | 6.0 | 7.0 | 8B efficient, 1M context |
| Google | Gemini | Gemini 1.5 Flash | Unknown | 1000 | Mod all dimensions | Previous generation Flash | Previous gen Flash applications | Legacy Flash teams | 6.5 | 7.5 | Previous generation Flash |
| Google | Gemini | Gemini 1.5 Pro | Unknown | 1000 | Mod all dimensions | Previous generation Pro | Previous gen Pro applications | Legacy Pro teams | 7.0 | 8.5 | Previous generation Pro |
| Google | Gemini | Gemini Pro 1.5 | Unknown | 1000 | Mod all dimensions | Alternative naming for 1.5 Pro | Same as 1.5 Pro | Legacy Pro teams | 7.0 | 8.5 | Alternative naming |
| Google | Gemini | Gemini Flash 1.5 | Unknown | 1000 | Mod all dimensions | Alternative naming for 1.5 Flash | Same as 1.5 Flash | Legacy Flash teams | 6.5 | 7.5 | Alternative naming |
| Google | Gemini | Gemini Flash 1.5 8B | 8 | 1000 | Mod all dimensions | Alternative naming for 8B | Same as 1.5 Flash 8B | Legacy efficient teams | 6.0 | 7.0 | Alternative naming |
| Gryphe | MythoMax | MythoMax 13B | 13 | 32 | Very High Openness, High Extraversion, Creative-dominant | Low systematic analysis | Fantasy worldbuilding, Character-driven stories, Adventure narratives, Creative writing | TTRPG Campaign, Alien Archaeologists, Time Travel Tourism, Dungeon Masters Forge | 9.0 | 4.5 | Best creative coherence for 13B, Power-fantasy tendency, Uncensored, MythoLogic-L2 + Huginn merge |
| Inception | Mercury | Mercury 3 Thinking | Unknown | Unknown | Mod Openness | Reasoning-optimized | Reasoning tasks | Reasoning-focused teams | 5.5 | 8.0 | Reasoning-optimized Mercury |
| Inception | Mercury | Mercury 3 | Unknown | Unknown | Balanced | General-purpose efficient | General efficient tasks | General operations | 6.0 | 7.0 | General-purpose efficient model |
| KwaiPilot | KwaiPilot | KwaiPilot 3 32B | 32 | Unknown | Mod Conscientiousness, Mod Openness | Coding optimization | Coding tasks at 32B scale | Technical coding teams | 6.0 | 8.5 | 32B coding-optimized |
| KwaiPilot | KwaiPilot | KwaiPilot 3 7B | 7 | Unknown | Mod Conscientiousness | Coding at small scale | Efficient coding tasks | Small-scale coding teams | 5.5 | 7.5 | 7B coding variant |
| Meta | Llama | Llama 3.3 70B Instruct | 70 | 128 | Balanced all dimensions | General reasoning, Matches 405B performance | Dialogue, Conversational depth, Character-driven stories, Cost-effective general purpose | Dating Council, Relationship Counselors, Rap Battle League, Brainstorming Collective | 8.0 | 7.5 | Best dialogue naturalness, Open weights, MATH 77.0, HumanEval 88.4, 276 tok/s on Groq, ~$0.20 |
| Meta | Llama | Llama 3.1 405B Instruct | 405 | 128 | Balanced, Mod all dimensions | Massive scale reasoning | Frontier-scale general intelligence | Large-scale comprehensive teams | 7.5 | 9.0 | Massive 405B flagship, Open weights, Frontier capability |
| Meta | Llama | Llama 3.1 70B Instruct | 70 | 128 | Balanced | Popular general-purpose | General-purpose 70B tasks | Versatile teams | 7.5 | 7.5 | Popular 70B instruction model, Open weights |
| Meta | Llama | Llama 3.1 8B Instruct | 8 | 128 | Balanced | Efficient general-purpose | Efficient general tasks | Budget general teams | 6.5 | 6.5 | Efficient 8B variant, Open weights |
| Meta | Llama | Llama 3.2 3B Instruct | 3 | 128 | Balanced | Tiny instruction model | Edge/mobile general tasks | Edge general teams | 6.0 | 6.0 | Tiny 3B instruction, Edge-compatible |
| Meta | Llama | Llama 3.2 1B Instruct | 1 | 128 | Balanced | Ultra-small instruction | Ultra-constrained environments | Ultra-budget edge teams | 5.5 | 5.5 | Ultra-small 1B, IoT/mobile |
| Microsoft | Phi | Phi 4 | 14 | 16 | Mod Conscientiousness, Mod Openness | Efficient small model, 1955 tok/s on Xeon 6 | Edge reasoning, Efficient deployment, Resource-constrained | Edge deployment, Efficient teams | 6.5 | 8.0 | 14B efficient, 16K context (extended from 4K), 1955 tok/s, Edge-optimized, Open-source |
| MiniMax | MiniMax | MiniMax M2.1 | 10 | Unknown | Mod Conscientiousness | Coding and agents focus | Lightweight coding, Agent workflows | Budget coding teams | 6.0 | 7.5 | 10B lightweight, Coding + agents |
| MiniMax | MiniMax | MiniMax M2 | Unknown | Unknown | Mod Conscientiousness | Previous generation compact | Previous gen compact tasks | Legacy compact teams | 5.5 | 7.0 | Previous generation |
| Mistral | Large | Mistral Large 3 2512 | 675 (41 active) | 262 | Mod Conscientiousness, Balanced | Granular MoE, 39B language + 2.5B vision, Speculative decoding | Enterprise RAG, Multilingual, On-prem, Multimodal | International operations teams, Translator Corps | 7.0 | 8.5 | MoE 675B/41B active, Apache 2.0, Vision 2.5B, FP8/NVFP4 quantization, Multilingual |
| Mistral | Small | Mistral Small 3.2 2512 | Unknown | 262 | Balanced | Balanced performance/efficiency | Balanced mid-tier tasks | Balanced operations | 6.5 | 7.5 | Balanced performance/efficiency |
| Mistral | Ministral | Ministral 3 14B 2512 | 14 (13.5+0.4 vision) | 262 | Mod Conscientiousness, Balanced | Structured reasoning, High-res image understanding, Vision 0.4B | Visual creative, Multimodal coordination, High-res image analysis | Home Space Design, Michelin Inspectors, The Studio | 7.0 | 7.5 | Vision-capable, Approaches 24B performance, Apache 2.0, Largest Ministral |
| Mistral | Ministral | Ministral 3 8B 2512 | 8.8 (8.4+0.4 vision) | 262 | Balanced | 3 variants: Base/Instruct/Reasoning, 237.5 tok/s, Vision 0.4B | Edge deployment, Efficient generalist, Math+logic creative, Vision tasks | Zombie Survival Council, Eli Varied Team | 6.5 | 7.5 | <12GB quantized, 237.5 tok/s, Vision-capable, $0.15/$0.15, Reasoning variant available |
| Mistral | Ministral | Ministral 3 3B 2512 | 3.8 (3.4+0.4 vision) | 262 | Balanced | Smallest footprint, Fastest inference, Vision 0.4B | Mobile, IoT, Local privacy, Ultra-edge vision | Mobile/IoT teams | 6.0 | 6.5 | Smallest Ministral, Vision on ultra-constrained hardware |
| Mistral | Devstral | Devstral 2 2512 | 123 | 262 | High Conscientiousness, Mod Openness | Coding specialist | Advanced coding tasks | Coding specialist teams | 6.5 | 9.0 | 123B coding specialist |
| Mistral | Devstral | Devstral 2 2512 (free) | 123 | 262 | High Conscientiousness, Mod Openness | Coding specialist | Same as Devstral 2, Free tier | Budget coding teams | 6.5 | 9.0 | Free tier coding specialist |
| Mistral | Small | Mistral Small Creative | Unknown | 262 | High Openness, Creative-focused | Experimental creative writing | Creative writing experiments | Experimental creative teams | 7.5 | 6.0 | Experimental creative model |
| Mistral | Large | Mistral Large 2 | Unknown | 262 | Mod Conscientiousness | Previous flagship | Legacy large-scale tasks | Legacy teams | 7.0 | 8.0 | Previous flagship |
| Mistral | Small | Mistral Small 2 | Unknown | 262 | Balanced | Previous small variant | Legacy small-scale tasks | Legacy small teams | 6.5 | 7.0 | Previous small variant |
| Mistral | Pixtral | Pixtral Large 2 | Unknown | 262 | Mod Openness | Multimodal large | Large-scale multimodal | Multimodal teams | 7.5 | 8.0 | Multimodal large model |
| Mistral | Pixtral | Pixtral 12B 2409 | 12 | 262 | Mod Openness | Vision-language 12B | Efficient vision-language | Efficient multimodal teams | 7.0 | 7.0 | 12B vision-language |
| Mistral | Nemo | Mistral Nemo | 12 | 262 | Balanced | Efficient 12B | General 12B tasks | Mid-size general teams | 6.5 | 7.0 | Efficient 12B model |
| Mistral | Codestral | Codestral Mamba | Unknown | 262 | Mod Conscientiousness | Mamba architecture, Coding | Mamba-based coding | Alternative architecture coding | 6.0 | 8.0 | Mamba-based coding specialist |
| Mistral | 7B | Mistral 7B Instruct | 7 | 32 | Balanced | Classic 7B instruction | Classic 7B tasks | Legacy 7B teams | 6.5 | 6.5 | Classic 7B instruction model |
| Mistral | Mixtral | Mixtral 8x7B Instruct | 47 (13 active) | 32 | Balanced | MoE 8 experts | MoE instruction tasks | Classic MoE teams | 7.0 | 7.5 | MoE 8x7B, 8 experts |
| Mistral | Mixtral | Mixtral 8x22B Instruct | 141 (39 active) | 64 | Balanced | Larger MoE | Larger MoE instruction tasks | Larger MoE teams | 7.0 | 8.0 | Larger MoE variant, 8x22B |
| Mistral | Mixtral | Mixtral 8x7B | 47 (13 active) | 32 | Balanced | Base MoE | Base MoE tasks | Base MoE teams | 6.5 | 7.0 | Base MoE model |
| Mistral | Mixtral | Mixtral 8x22B | 141 (39 active) | 64 | Balanced | Base larger MoE | Base larger MoE tasks | Base larger teams | 6.5 | 7.5 | Base larger MoE |
| MoonshotAI | Kimi | Kimi 3 | Unknown | 200+ | Mod Conscientiousness | Massive context windows | Ultra-long context tasks | Ultra-long context teams | 6.5 | 8.0 | Massive context windows, Latest generation |
| MoonshotAI | Moonshot | Moonshot V1 128K | Unknown | 128 | Mod Conscientiousness | 128K context | Long-context tasks | Long-context teams | 6.5 | 7.5 | 128K context variant |
| MoonshotAI | Moonshot | Moonshot V1 32K | Unknown | 32 | Mod Conscientiousness | 32K context | Medium-context tasks | Medium-context teams | 6.5 | 7.0 | 32K context variant |
| MoonshotAI | Moonshot | Moonshot V1 8K | Unknown | 8 | Mod Conscientiousness | 8K context | Standard-context tasks | Standard-context teams | 6.5 | 6.5 | 8K context variant |
| MoonshotAI | Kimi | Kimi 2.5 | Unknown | 200+ | Mod Conscientiousness | Previous generation | Legacy long-context | Legacy teams | 6.5 | 7.5 | Previous generation |
| Neversleep | Lumimaid | Llama 3.1 Lumimaid 70B | 70 | 128 | Very High Openness, High Agreeableness | Emotional reasoning | Romantic fiction, Emotional narratives, Emotional depth | Dating Council, Relationship Counselors, Emotional storytelling | 8.5 | 6.0 | Emotional depth specialist, Llama creative fine-tune, Uncensored |
| Neversleep | Lumimaid | Llama 3.1 Lumimaid 8B | 8 | 128 | High Openness, High Agreeableness | Emotional reasoning at small scale | Efficient emotional narratives | Budget emotional teams | 7.5 | 5.5 | Smaller creative variant, Emotional focus |
| Nex AGI | Nex AGI | Nex AGI 1.0 | Unknown | Unknown | High Openness | AGI-aligned reasoning | AGI-focused reasoning | Experimental AGI teams | 6.0 | 8.5 | AGI-aligned reasoning approach |
| NousResearch | Hermes | Hermes 3 Llama 3.1 405B | 405 | 128 | High Openness, Mod-Low Agreeableness, High Extraversion | Transparent reasoning, Internal monologues, XML structured output | Character consistency, Role-playing, Emotional depth, Creative writing, Complex agents | Dungeon Party, Ghostwriters, Heist Crew, Dream Team, Rap Battle League | 9.5 | 7.5 | Full-parameter fine-tune, Unlocked/uncensored, Existential tendencies, Agentic XML output |
| NousResearch | Hermes | Hermes 3 Llama 3.1 70B | 70 | 128 | High Openness, Mod-Low Agreeableness | ChatML structured dialogue, Role-playing optimization | Role-playing, Multi-turn consistency, Versatile creative | Dating Simulator, Reality TV Producers, Comedy Club, Creative teams | 9.0 | 7.0 | 80% of 405B quality at 1/6 size, GGUF optimized, Uncensored |
| NousResearch | Hermes | Hermes 3 Llama 3.2 3B | 3 | 128 | Mod Openness | Efficient reasoning, Role-playing in 3B | Edge creative assistant, Mobile deployment, Role-playing at edge | High-concurrency edge scenarios | 7.0 | 6.0 | Ultra-efficient 3B, Edge-compatible, Role-playing in tiny footprint |
| NousResearch | Hermes | Hermes 2 Theta Llama 3 70B | 70 | 128 | High Openness, Mod Agreeableness | Alternative training approach | Alternative 70B creative | Alternative creative teams | 8.5 | 7.0 | Alternative 70B Hermes variant |
| NVIDIA | Nemotron | Nemotron 3 Nano 30B A3B | 30 (3 active) | Unknown | Mod Conscientiousness | MoE optimized for NVIDIA hardware | NVIDIA hardware optimization | NVIDIA-optimized teams | 6.0 | 8.0 | MoE 30B/3B active, NVIDIA hardware optimized |
| NVIDIA | Nemotron | Nemotron 3 Nano 30B A3B (free) | 30 (3 active) | Unknown | Mod Conscientiousness | Same as Nemotron | Same as Nemotron, Free tier | Budget NVIDIA teams | 6.0 | 8.0 | Free tier |
| NVIDIA | Nemotron | Llama 3.1 Nemotron 70B Instruct | 70 | 128 | Balanced | NVIDIA-tuned Llama | NVIDIA-optimized Llama tasks | NVIDIA Llama teams | 7.5 | 8.0 | NVIDIA-tuned Llama 70B |
| OpenAI | GPT-5 | GPT-5.2 Chat | Unknown | Unknown | Mod Agreeableness, Mod Conscientiousness | Fast lightweight for chat (Instant mode) | Rapid chat responses | Fast chat teams | 7.0 | 7.5 | Fast lightweight GPT-5, Instant mode |
| OpenAI | GPT-5 | GPT-5.2 Pro | 1700-1800 (est) | 400 | High Conscientiousness, Mod Openness | 400K context, 128K output, xhigh reasoning, 90% cached discount | Enterprise analysis, Long documents, Legal, Strategic scenario modeling | The Firm, The Hedge Fund, Long-document teams | 7.5 | 9.5 | 400K context, $1.75/$7.00, 90% cache discount ($0.175), xhigh reasoning exclusive, Premium |
| OpenAI | GPT-5 | GPT-5.2 | Unknown | 400 | High Conscientiousness, Mod Openness | Adaptive reasoning, 400K context | Frontier adaptive reasoning | Advanced reasoning teams | 7.5 | 9.5 | Latest frontier, Adaptive reasoning, 400K context |
| OpenAI | GPT-4 | GPT-4.5 Turbo | Unknown | 128 | High Conscientiousness, High Agreeableness | Enhanced reasoning over GPT-4 | Enhanced GPT-4 applications | Enhanced GPT-4 teams | 7.5 | 9.0 | Enhanced GPT-4, Better reasoning |
| OpenAI | GPT-4 | GPT-4 Turbo | Unknown | 128 | High Conscientiousness, High Agreeableness | Previous generation flagship | Previous gen flagship tasks | Legacy GPT-4 teams | 7.5 | 8.5 | Previous generation flagship |
| OpenAI | GPT-4 | GPT-4o | Unknown | 128 | High Conscientiousness, Mod Agreeableness | Omni multimodal | Multimodal applications | Multimodal teams | 7.5 | 8.5 | Omni multimodal capabilities |
| OpenAI | GPT-4 | GPT-4o Mini | Unknown | 128 | Mod Agreeableness, Mod Conscientiousness | Efficient small omni variant | Efficient multimodal | Efficient omni teams | 7.0 | 7.5 | Efficient small omni variant |
| OpenAI | o | o1 | Unknown | 128 | High Openness (reasoning-focused), High Conscientiousness | Reasoning-focused, $15/$60 | Advanced reasoning, Mathematical problems | Advanced reasoning teams | 6.0 | 9.5 | Reasoning-focused model, $15/$60, Premium reasoning |
| OpenAI | o | o1 Mini | ~1.3 (conflicting sources) | 128 | Mod Openness (STEM-focused) | 86th percentile Codeforces, 80% cheaper than o1-preview, STEM reasoning | Cost-effective STEM reasoning | Budget STEM reasoning | 5.5 | 8.5 | $1.10/$4.40, 80% cheaper, STEM-optimized, Weaker non-STEM |
| OpenAI | o | o1 Preview | Unknown | 128 | High Openness, High Conscientiousness | Preview reasoning | Preview reasoning testing | Preview reasoning teams | 6.0 | 9.0 | Preview of o1 series |
| OpenAI | o | o3 Mini | Unknown | 128 | Mod Openness | Latest mini reasoning, 92.7% AIME | Latest compact reasoning | Latest mini reasoning teams | 5.5 | 9.0 | Latest mini reasoning, 92.7% AIME 2024 || OpenGVLab | InternVL | InternVL 2.5 78B | 78 | Unknown | Mod Openness | Vision-language 78B | Large-scale vision-language | Vision-language teams | 7.0 | 8.0 | 78B vision-language model |
| Prime Intellect | INTELLECT | INTELLECT-3 | 106 (12 active) | Unknown | Mod Conscientiousness | MoE trained via decentralized compute | Decentralized training applications | Decentralized teams | 6.5 | 8.0 | MoE 106B/12B active, Decentralized compute training |
| Qwen | QwQ | QwQ 32B Preview | 32 | 128 | High Openness (reasoning-focused) | Reasoning-focused preview | Reasoning at 32B | Reasoning preview teams | 5.5 | 8.5 | 32B reasoning preview |
| Qwen | Qwen 2.5 | Qwen 2.5 Coder 32B Instruct | 32 | 131 | Mod Conscientiousness, Mod Openness | Coding specialist, Python focus | Coding tasks, Python specialist | Coding specialist teams | 6.0 | 8.5 | 32B coding specialist, Strong Python |
| Qwen | Qwen 2.5 | Qwen 2.5 72B Instruct | 72 | 131 | Balanced, High Conscientiousness | Native JSON, 29+ languages, MMLU 85+, HumanEval 85+, MATH 80+ | Multilingual coordination, Structured data, Knowledge anchor | Translator Corps, Board of Directors, International teams | 6.5 | 8.5 | 72B flagship, 29+ languages, Native JSON, Cultural nuance, Open weights, Qwen License |
| Qwen | Qwen 2.5 | Qwen 2.5 32B Instruct | 32 | 131 | Balanced, High Conscientiousness | Balanced 32B capabilities | Balanced mid-scale tasks | Balanced 32B teams | 6.5 | 8.0 | Balanced 32B variant |
| Qwen | Qwen 2.5 | Qwen 2.5 14B Instruct | 14 | 131 | Balanced | Efficient 14B | Efficient mid-small tasks | Efficient 14B teams | 6.0 | 7.5 | Efficient 14B model |
| Qwen | Qwen 2.5 | Qwen 2.5 7B Instruct | 7 | 131 | Balanced | Popular 7B variant | General 7B tasks | General 7B teams | 6.0 | 7.0 | Popular 7B variant |
| Qwen | Qwen 2.5 | Qwen 2.5 3B Instruct | 3 | 131 | Balanced | Tiny 3B | Edge 3B tasks | Edge 3B teams | 5.5 | 6.5 | Tiny 3B model |
| Qwen | Qwen 2.5 | Qwen 2.5 1.5B Instruct | 1.5 | 131 | Balanced | Ultra-small 1.5B | Ultra-constrained tasks | Ultra-budget teams | 5.0 | 6.0 | Ultra-small 1.5B |
| Qwen | Qwen 2.5 | Qwen 2.5 0.5B Instruct | 0.5 | 131 | Balanced | Smallest 0.5B | Extreme constraint tasks | IoT teams | 4.5 | 5.5 | Smallest 0.5B variant |
| Qwen | QVQ | QVQ 72B Preview | 72 | 131 | Mod Openness | Vision-question-answering 72B | VQA tasks | Vision Q&A teams | 7.0 | 8.0 | 72B VQA preview |
| Qwen | Qwen 2 VL | Qwen 2 VL 72B Instruct | 72 | 131 | Mod Openness | Vision-language 72B, 128K context | Large-scale vision-language | Large VL teams | 7.0 | 8.0 | 72B vision-language, 128K context |
| Qwen | Qwen 2 VL | Qwen 2 VL 7B Instruct | 7 | 131 | Mod Openness | Vision-language 7B | Efficient vision-language | Efficient VL teams | 6.5 | 7.0 | 7B vision-language |
| Sao10K | Euryale | Llama 3.1 Euryale 70B | 70 | 128 | High Openness, Low Agreeableness | Llama 3.1 reasoning base | Mature creative content, Unrestricted brainstorming, Adult themes | Roast Squad, Devils Advocates, Crisis Management (unfiltered) | 8.5 | 7.0 | Uncensored creative fine-tune, Adult themes, Creative/RP specialist |
| Sao10K | Stheno | Llama 3 Stheno 8B | 8 | 128 | High Openness | Creative at small scale | Smaller creative tasks | Budget creative teams | 7.5 | 6.0 | Smaller creative variant |
| Sao10K | Fimbulvetr | Fimbulvetr 11B v2 | 11 | Unknown | High Openness | Specialized creative | Specialized creative tasks | Specialized creative teams | 7.5 | 6.5 | Specialized creative model |
| StepFun AI | Step | Step 2 16K | Unknown | 16 | Balanced | 16K context | General tasks with 16K context | Standard context teams | 6.5 | 7.0 | General-purpose 16K context |
| Tencent | Hunyuan | Hunyuan Turbo | Unknown | Unknown | Mod Conscientiousness | Enterprise-focused Chinese model | Chinese enterprise applications | Chinese enterprise teams | 6.5 | 7.5 | Enterprise-focused Chinese model |
| TheDrummer | Sthenorm | Llama 3.1 Sthenorm 70B | 70 | 128 | High Openness, Low Agreeableness | Uncensored creative | Uncensored creative, Adult content | Uncensored creative teams | 8.5 | 6.5 | Uncensored creative Llama fine-tune, Adult themes |
| TheDrummer | Sthenorm | Llama 3.1 Sthenorm 8B | 8 | 128 | High Openness, Low Agreeableness | Uncensored at small scale | Smaller uncensored creative | Budget uncensored teams | 7.5 | 6.0 | Smaller uncensored variant |
| TheDrummer | Rocinante | Rocinante 12B | 12 | Unknown | High Openness | Specialized creative | Specialized creative tasks | Specialized creative teams | 7.5 | 6.5 | Specialized creative model |
| TngTech | TNG | Llama 3.1 TNG 70B | 70 | 128 | Balanced, Mod Openness | EU-based DeepSeek fine-tune | EU data sovereignty | EU-focused teams | 7.0 | 8.0 | EU-based DeepSeek fine-tune, Data sovereignty |
| TngTech | TNG | Llama 3.1 TNG 8B | 8 | 128 | Balanced | EU-based small variant | EU small-scale tasks | EU budget teams | 6.5 | 7.0 | Smaller EU variant |
| Undi95 | Toppy | Llama 3.1 Toppy 8B | 8 | 128 | High Openness | RP-specialized | Role-playing tasks | RP-focused teams | 7.5 | 6.0 | RP-specialized Llama fine-tune |
| Venice | Venice Llama | Venice Llama 3.3 70B | 70 | 128 | Balanced, High privacy focus | Privacy-focused | Privacy-sensitive applications | Privacy-focused teams | 7.5 | 7.5 | Privacy-focused Llama variant |
| X.AI | Grok | Grok 2 1212 | 270 | 131 | Very High Openness, Low Agreeableness | Real-time X/Twitter integration, 93% AIME | Wit, Contrarian views, Cultural commentary, Social media integration | Rap Battle League, Tin Foil Hat Society, Comedy Club, Textual Analysis Support | 7.5 | 8.0 | Real-time X/Twitter, Trained for less sycophancy, 93% AIME math, 270B dense |
| X.AI | Grok | Grok 2 Vision 1212 | 270 | 131 | Very High Openness, Low Agreeableness | Vision + real-time integration | Vision with social commentary | Visual social media teams | 7.5 | 8.0 | Vision-capable Grok, Latest |
| X.AI | Grok | Grok 2 | 270 | 131 | Very High Openness, Low Agreeableness | Previous generation | Previous gen Grok | Legacy Grok teams | 7.5 | 7.5 | Previous generation |
| X.AI | Grok | Grok 2 Vision | 270 | 131 | Very High Openness, Low Agreeableness | Previous vision variant | Previous vision tasks | Legacy vision Grok | 7.5 | 7.5 | Previous vision variant |
| X.AI | Grok | Grok Beta | 270 | 131 | Very High Openness, Low Agreeableness | Beta release | Beta testing | Beta teams | 7.5 | 7.5 | Beta release |
| X.AI | Grok | Grok Vision Beta | 270 | 131 | Very High Openness, Low Agreeableness | Beta vision | Beta vision testing | Beta vision teams | 7.5 | 7.5 | Beta vision release |
| Z.AI | GLM | GLM 4.7 | 355 (32 active) | 200 | High Conscientiousness, Mod Openness | Think-before-acting, Deep thinking, 73.8% SWE-bench, τ²-Bench 87.4% | Technical creativity, Systematic innovation, Coding+creative, Agent frameworks | The Studio, TTRPG Orchestrator, Shadow Product Team | 7.0 | 8.5 | MoE 355B/32B active, MIT license, 200K context, 128K output, Enhanced programming |
| Z.AI | GLM | GLM 4.6V | Unknown | 200 | Mod Openness | Vision-language variant | Vision-language tasks | Vision-language teams | 7.0 | 8.0 | Vision-language variant |
| Z.AI | GLM | GLM 4.6 | Unknown | 200 | High Conscientiousness | Previous gen with 200K | Previous gen tasks | Legacy GLM teams | 6.5 | 8.0 | Previous generation, 200K context |
| Z.AI | GLM | GLM 4.6 (exacto) | Unknown | 200 | High Conscientiousness | Exacto variant | Exacto-specific tasks | Exacto teams | 6.5 | 8.0 | Exacto variant |
| Z.AI | GLM | GLM 4.5V | Unknown | Unknown | Mod Openness | Vision-language foundation | Vision-language foundation | Vision foundation teams | 7.0 | 7.5 | Vision-language foundation |
| Z.AI | GLM | GLM 4.5 | Unknown | Unknown | Mod Conscientiousness | Agent-focused foundation | Agent applications | Agent teams | 6.5 | 7.5 | Agent-focused foundation |
| Z.AI | GLM | GLM 4.5 Air | Unknown | Unknown | Mod Conscientiousness | Lightweight agent-centric | Lightweight agent tasks | Lightweight agent teams | 6.0 | 7.0 | Lightweight agent-centric |
---

## Notes and Methodology

### Creative Score (0-10)
- **9.0-10**: Elite creative specialists (Hermes 3 405B/70B, MythoMax)
- **8.0-8.9**: Strong creative with distinct personality (Claude Opus, Euryale, Llama 3.3, Lumimaid, Sthenorm)
- **7.0-7.9**: Balanced creative-analytical (Claude Sonnet, Gemini 3 Pro, Grok 2, GLM-4.7, Most Llama variants)
- **6.0-6.9**: Competent creative with analytical leanings (Most general models, Qwen, DeepSeek V3, Trinity Mini)
- **5.0-5.9**: Analytical-dominant with limited creative flair (OLMo Think models, DeepSeek R1 distilled, Cogito)
- **4.0-4.9**: Pure reasoning focus, minimal creative expression (Smallest distilled models)

### Deductive Score (0-10)
- **9.5-10**: Elite reasoning (DeepSeek R1, Cogito R1, OLMo 3.1 32B Think, Claude Opus 4.5, Gemini 3 Pro)
- **8.5-9.4**: Strong analytical (Claude Sonnet, GLM-4.7, Qwen 72B, Mistral Large 3, ERNIE 4.5, Command R+, Trinity Mini)
- **7.5-8.4**: Balanced reasoning (Hermes 3, Grok 2, Llama 3.3, Most general models, Seed 1.6)
- **7.0-7.4**: Competent reasoning (Most 7B-14B models, Gemini Flash variants)
- **6.0-6.9**: Basic reasoning (Small edge models, Llama 3B/1B)
- **4.5-5.9**: Creative-dominant with weaker logic (MythoMax, Mythalion, Lumimaid, Creative specialists)

### Personality Traits
- **High Agreeableness**: Claude family, Lumimaid (cooperative, helpful, consensus-building)
- **Low Agreeableness**: Grok, Hermes 3, Euryale, Sthenorm (contrarian, critical, challenging)
- **High Openness**: MythoMax, Hermes 3, All reasoning models, Creative specialists (exploratory, creative, unconventional)
- **High Conscientiousness**: Claude, GLM, Qwen, ERNIE, Most analytical models (organized, systematic, dutiful)
- **Balanced**: Llama family, Mistral family, Most general models (versatile, adaptable)

### Context Window Tiers
- **10M**: Llama 4 Scout (experimental, largest available)
- **1M**: Claude Sonnet 4.5, All Gemini 2.0+, Gemini 3.0 (massive context)
- **200-262K**: Claude Opus, GLM family, Mistral family, Kimi (extended context)
- **128-131K**: Most models including Hermes, Llama, DeepSeek, Qwen, ERNIE, OLMo, Cogito, Trinity
- **32-64K**: MythoMax, Older Mistral variants
- **8-16K**: Phi 4, Smaller context models

### License Types
- **Apache 2.0**: OLMo, Trinity Mini, Mistral family, DeepSeek (likely), Arcee models
- **MIT**: GLM-4.7 (most permissive commercial)
- **Qwen License**: Qwen family (more restrictive than Apache 2.0)
- **CC-BY-NC**: Command R+ (non-commercial, research only)
- **Proprietary**: Claude, Gemini, GPT, Grok, Seed

### MoE (Mixture of Experts) Models
Format shown as: Total parameters (Active parameters)
- **Largest**: Mistral Large 3 (675B/41B), DeepSeek R1 & V3 (671B/37B), Cogito R1 (671B/?), Hermes 3 405B (405B dense)
- **Mid-Scale**: GLM-4.7 (355B/32B), Grok 2 (270B dense), Seed 1.6 (230B/23B), Prime INTELLECT-3 (106B/12B)
- **Efficient**: Tongyi DeepResearch (30.5B/3.3B), Nemotron 3 Nano (30B/3B), Trinity Mini (26B/3B), ERNIE 4.5 (21B/3B)

### Special Capabilities
- **Vision-Capable**: Gemini family, Ministral family, Pixtral family, Seed 1.6, Qwen 2 VL, QVQ, InternVL, Grok Vision variants, GLM 4.6V/4.5V
- **Real-Time Integration**: Grok family (X/Twitter)
- **Uncensored/Creative**: Hermes 3, MythoMax, Euryale, Lumimaid, Sthenorm, Toppy, Fimbulvetr, Rocinante
- **Reasoning Specialists**: OLMo Think, DeepSeek R1, Cogito R1, QwQ, o1/o3, ERNIE Thinking
- **Coding Specialists**: GLM-4.7, Qwen Coder, KwaiPilot, Devstral, DeepSeek Coder, Codestral Mamba
- **RAG Specialists**: Command R family, Trinity Mini
- **Extended Context (>200K)**: Llama 4 Scout (10M), Gemini family (1M), Claude Sonnet (1M), GLM (200K), Kimi (200K+), Mistral Large 3 (262K)

### Cost Tiers (Estimated per 1M output tokens)
- **Ultra-Low ($0.15-0.50)**: DeepSeek family, Llama 3.3, MythoMax (self-hosted), Ministral 3 8B
- **Cost-Effective ($5)**: Hermes 3 70B, Qwen family, Trinity Mini, Most open-source via providers
- **Mid-Tier ($5-20)**: Claude Sonnet, Gemini 2.5 Pro, Command R+, GLM-4.7
- **Premium ($20-80)**: Claude Opus 4.5, GPT-5.2 Pro, o1/o3, Cogito R1 671B

### Model Count by Vendor
1. OpenAI: 53 models (11 shown + 43 variants)
2. Qwen: 31 models (12 shown + 19 variants)
3. Mistral: 27 models (19 shown + 8 variants)
4. Google: 19 models (all shown)
5. DeepSeek: 12 models (all shown)
6. Z.AI: 7 models (all shown)
7. X.AI: 6 models (all shown)
8. Meta Llama: 6 models (all shown)
9. MoonshotAI: 5 models (all shown)
10. Cohere: 4 models (all shown)
11. AllenAI: 4 models (all shown)
12. NousResearch: 4 models (all shown)
13. NVIDIA: 3 models (all shown)
14. DeepCogito: 3 models (all shown)
15. Sao10K: 3 models (all shown)
16. TheDrummer: 3 models (all shown)
17. Arcee AI: 2 models (all shown)
18. ByteDance: 2 models (all shown)
19. Inception: 2 models (all shown)
20. KwaiPilot: 2 models (all shown)
21. MiniMax: 2 models (all shown)
22. Neversleep: 2 models (all shown)
23. TngTech: 2 models (all shown)
24-36. Single-model vendors: Alibaba, Baidu, EssentialAI, Gryphe, Microsoft, Nex AGI, OpenGVLab, Prime Intellect, StepFun AI, Tencent, Undi95, Venice

**Total: 219 models across 36 vendors**
