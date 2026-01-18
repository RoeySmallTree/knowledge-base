# xAI Grok Models Analysis

---

## Grok 4.1 Fast

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Tool-Seeker, Fast-Twitch, Analyst, Long-Horizon, Context-Heavy, Assertive, Extrovert |
| **Active Parameters** | ~100-200B (estimated, undisclosed MoE) |
| **Creative Score** | 7.0/10 |
| **Logical Score** | 8.5/10 |
| **Efficiency Score** | 9.5/10 |
| **Short Description** | Best-in-class agentic tool-calling model with 2M context and real-time search |
| **Special Properties** | 2M token context window; Agent Tools API (web search, X search, code execution, document retrieval, MCP); ~50% fewer hallucinations than Grok 4 Fast; long-horizon RL training for multi-turn stability; reasoning/non-reasoning modes; native X platform integration |
| **Best For** | Enterprise agents, customer support automation, agentic search, real-time information retrieval, complex multi-step workflows, finance applications |
| **Special Capabilities** | Tool calling, web search, X search, code execution, document retrieval, MCP integration, multimodal (images), real-time data access |
| **Recommendation Score** | 9.0/10 |

**Notes**: Released Dec 2025. #1 on LMArena Search Arena. Trained via long-horizon RL in simulated enterprise environments. Free via OpenRouter (limited time). Pricing: ~$0.20/1M input, $0.50/1M output (estimated). This is the go-to model for production agentic systems.

---

## Grok 4 Fast

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Tool-Seeker, Fast-Twitch, Analyst, Cost-Saver, Assertive |
| **Active Parameters** | ~100-200B (estimated, undisclosed MoE) |
| **Creative Score** | 5.5/10 |
| **Logical Score** | 8.0/10 |
| **Efficiency Score** | 9.5/10 |
| **Short Description** | Frontier intelligence at 25-98x lower cost than competitors |
| **Special Properties** | 2M token context window; unified reasoning/non-reasoning architecture; 40% fewer thinking tokens than Grok 4; ~98% lower cost for equivalent benchmark performance; web & X search integration |
| **Best For** | Cost-sensitive production deployments, agentic search, real-time information tasks, document reasoning, enterprise applications on a budget |
| **Special Capabilities** | Tool calling, web search, X search, unified reasoning modes, massive context handling |
| **Recommendation Score** | 8.5/10 |

**Notes**: Released Sept 2025. Achieves Gemini 2.5 Pro-level intelligence at ~25x cheaper. Pricing: $0.20/1M input, $0.50/1M output (<128K); doubles for >128K context. LMArena rank #8 overall. Best cost-to-intelligence ratio in its class. Superseded by Grok 4.1 Fast for tool-calling tasks.

---

## Grok Code Fast 1

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Fast-Twitch, Stepwise, Tool-Seeker, Exploit-Focused |
| **Active Parameters** | ~314B total MoE (estimated active ~30-50B) |
| **Creative Score** | 4.0/10 |
| **Logical Score** | 7.5/10 |
| **Efficiency Score** | 9.0/10 |
| **Short Description** | Purpose-built speedster for agentic coding workflows |
| **Special Properties** | 256K context window; ~92-205 tokens/sec throughput; built from scratch for coding (not distilled); visible reasoning traces; optimized for tool commands (grep, terminal, file editing); >90% cache hit rates; TypeScript, Python, Java, Rust, C++, Go proficiency |
| **Best For** | IDE integrations (Cursor, Copilot, Cline, Roo Code), rapid code iteration, bug fixes, codebase Q&A, zero-to-one projects, developer-in-the-loop workflows |
| **Special Capabilities** | Fast inference, code generation, debugging, reasoning traces, tool calling, file editing commands |
| **Recommendation Score** | 7.5/10 |

**Notes**: Released Aug 2025. 70.8% SWE-Bench Verified. Fastest coding model available (~100-200 tok/s). Pricing: $0.20/1M input, $1.50/1M output, $0.02/1M cached. Designed for speed over maximum accuracy. Known weakness: struggles with niche frameworks (e.g., Tailwind CSS v3). Best for rapid iteration, not one-shot complex tasks.

---

## Grok 4

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Deep-Thinker, Analyst, Visionary, Assertive, Tool-Seeker, Long-Horizon |
| **Active Parameters** | Unknown (frontier-scale, 100x compute vs Grok 2) |
| **Creative Score** | 6.5/10 |
| **Logical Score** | 9.5/10 |
| **Efficiency Score** | 4.0/10 |
| **Short Description** | xAI's flagship "smartest AI in the world" reasoning model |
| **Special Properties** | 256K context; 100x training compute vs Grok 2; 10x RL compute vs Grok 3; PhD-level across all disciplines; 88% GPQA Diamond (SOTA); 50% Humanity's Last Exam (first to hit this); tool usage built into training; multi-agent "Heavy" variant available |
| **Best For** | Complex research, heavy reasoning tasks, scientific analysis, PhD-level problem solving, business simulation, long-horizon planning |
| **Special Capabilities** | Advanced reasoning, tool calling, multimodal input, parallel tool execution, real-time search, multi-agent coordination (Heavy variant) |
| **Recommendation Score** | 7.5/10 |

**Notes**: Released July 2025. Premium pricing: $3/1M input, $15/1M output (doubles after 128K). SuperGrok Heavy subscription: $300/month. Slower than Fast variants (~13th percentile speed). Best for maximum accuracy tasks where cost isn't primary concern. Rate limiting can be frustrating for heavy use.

---

## Grok 3 Mini

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Stepwise, Fast-Twitch, Cost-Saver, Analyst, Obedient |
| **Active Parameters** | Unknown (smaller MoE, estimated ~20-50B active) |
| **Creative Score** | 4.0/10 |
| **Logical Score** | 7.5/10 |
| **Efficiency Score** | 9.0/10 |
| **Short Description** | Lightweight reasoning model for logic-based tasks without deep domain knowledge |
| **Special Properties** | 131K context window; exposed reasoning tokens (transparent chain-of-thought); adjustable reasoning_effort (low/high); structured outputs support; function calling; extremely steerable |
| **Best For** | Logic-based tasks, STEM problems, math competitions, rapid reasoning, cost-efficient deployments, educational applications |
| **Special Capabilities** | Transparent reasoning, adjustable reasoning effort, structured outputs, function calling |
| **Recommendation Score** | 7.0/10 |

**Notes**: Released Feb 2025. 95.8% AIME 2024, 80.4% LiveCodeBench, 90.7% AIME. Exposed reasoning tokens are unique selling point for debugging/education. "Mini Fast" variant available for latency-sensitive apps at higher cost. Not suitable for tasks requiring deep domain knowledge. Superseded by Grok 4 Fast for most use cases.

---

## Grok 3

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Precise, Deep-Thinker, Analyst, Visionary, Stepwise, Self-Correcting |
| **Active Parameters** | Unknown (trained on Colossus with 200K H100 GPUs) |
| **Creative Score** | 5.5/10 |
| **Logical Score** | 8.5/10 |
| **Efficiency Score** | 5.0/10 |
| **Short Description** | First frontier reasoning model from xAI with "Think" capability |
| **Special Properties** | Variable thinking time (seconds to minutes); self-correcting via backtracking; 93.3% AIME 2025 (cons@64); 84.6% GPQA; 79.4% LiveCodeBench; Chatbot Arena Elo 1402; open reasoning traces |
| **Best For** | Complex reasoning, mathematical problem-solving, code generation, research tasks, problems requiring iterative refinement |
| **Special Capabilities** | Chain-of-thought reasoning, tool calling, multi-step problem solving, self-correction, backtracking |
| **Recommendation Score** | 6.0/10 |

**Notes**: Released Feb 2025. Built on Colossus supercluster. First xAI model with "Think" button for extended reasoning. Knowledge cutoff: Nov 2024. Pricing: $3/1M input, $15/1M output. Largely superseded by Grok 4 and Grok 4 Fast, but still solid for reasoning tasks. X platform integration for real-time data.

---

## Summary Comparison Table

| Model | Creative | Logic | Efficiency | Context | Best Use | Rec Score |
|-------|----------|-------|------------|---------|----------|-----------|
| **Grok 4.1 Fast** | 7.0 | 8.5 | **9.5** | 2M | Agentic, Search, Enterprise | **9.0** |
| **Grok 4 Fast** | 5.5 | 8.0 | **9.5** | 2M | Cost-efficient Intelligence | **8.5** |
| **Grok Code Fast 1** | 4.0 | 7.5 | 9.0 | 256K | IDE Coding, Rapid Iteration | 7.5 |
| **Grok 4** | 6.5 | **9.5** | 4.0 | 256K | Max Reasoning, Research | 7.5 |
| **Grok 3 Mini** | 4.0 | 7.5 | 9.0 | 131K | Logic Tasks, Budget | 7.0 |
| **Grok 3** | 5.5 | 8.5 | 5.0 | 256K | Reasoning (Legacy) | 6.0 |

---

## Pricing Overview

| Model | Input ($/1M) | Output ($/1M) | Notes |
|-------|--------------|---------------|-------|
| **Grok 4.1 Fast** | ~$0.20 | ~$0.50 | + tool call costs |
| **Grok 4 Fast** | $0.20 | $0.50 | Doubles >128K |
| **Grok Code Fast 1** | $0.20 | $1.50 | $0.02 cached |
| **Grok 4** | $3.00 | $15.00 | Doubles >128K |
| **Grok 3 Mini** | ~$0.30 | ~$1.00 | Varies by provider |
| **Grok 3** | $3.00 | $15.00 | Doubles >128K |

---

## Key Takeaways for CABAL Integration

1. **Grok 4.1 Fast** is the crown jewel - best tool-calling model with massive 2M context and real-time X/web search
2. **Grok 4 Fast** offers exceptional value - frontier intelligence at ~25x cheaper than competitors
3. **Grok Code Fast 1** is the speed king for coding - ~200 tok/s makes it ideal for rapid iteration workflows
4. **Grok 4** remains the "smartest" but expensive - reserve for maximum-accuracy research tasks
5. **Unique X Integration** - native access to real-time social media data is xAI's competitive moat
6. All models support **function calling** and **tool use** natively
7. **Agent Tools API** provides code execution, web search, X search, and MCP integration
8. "Fast" models use **unified architecture** for seamless reasoning/non-reasoning switching
9. **Grok 3/3 Mini** are largely superseded but remain solid budget options
10. xAI iterates **rapidly** - expect frequent improvements and new variants

---

## xAI Unique Capabilities

- **Real-time X (Twitter) data access** - no other major LLM has this
- **Agent Tools API** - bundled search, code execution, document retrieval
- **2M token context** - among the largest available
- **Transparent reasoning** - visible chain-of-thought on Mini models
- **MCP integration** - connect to external custom tools
- **SuperGrok Heavy** - multi-agent variant for complex problems ($300/mo)