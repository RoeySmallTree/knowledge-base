# Anthropic Claude Models Analysis

---

## Models Kept & Reasons

All 3 models are distinct and serve different purposes - **no removals needed**.

| Model | Status | Rationale |
|-------|--------|-----------|
| **Claude Opus 4.5** | ✅ Keep | Flagship - best intelligence, coding, agents |
| **Claude Sonnet 4.5** | ✅ Keep | Best value - Opus-tier coding at Sonnet price |
| **Claude Opus 4.1** | ✅ Keep | Legacy premium - some users have contracts/integrations |

**All 3 models support structured output (JSON schema, function calling, tool use).**

---

## Claude Opus 4.5

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Most-Intelligent, Agentic-Master, Code-King, Safety-Leader, Self-Improving |
| **Parameters** | Undisclosed (estimated ~200B+ based on compute) |
| **Creative Score** | 8.5/10 |
| **Logical Score** | 9.5/10 |
| **Efficiency Score** | 8.0/10 |
| **Short Description** | Anthropic's most intelligent model - #2 globally, best for coding/agents |
| **Special Properties** | 200K context; 64K max output; effort parameter (low/medium/high); extended thinking; hybrid reasoning; Memory Tool; context editing; zoom actions for computer use; self-improving agents (peak in 4 iterations); 50%-time horizon ~4h49m (METR) |
| **Best For** | Enterprise agentic workflows, complex coding, computer use, research, high-stakes tasks |
| **Special Capabilities** | Tool calling, extended thinking, computer use, memory tool, prompt caching (90%), batch processing (50%), self-improving agents |
| **Recommendation Score** | **9.5/10** |

**Pricing** (per 1M tokens):
- Input: $5
- Output: $25
- Prompt Caching: Up to 90% savings
- Batch Processing: 50% savings

**Benchmarks**:
- SWE-bench Verified: **80.9%** (first to break 80%)
- Terminal-Bench Hard: **44%** (highest of any model)
- OSWorld: **66.3%**
- GPQA Diamond: **87%**
- MMLU: **90.8%**
- MMMU: **80.7%**
- AIME 2025: 37% (lower than competition math specialists)
- HLE (Humanity's Last Exam): 11% improvement over Sonnet 4.5
- LiveCodeBench: 75%
- ARC-AGI 2: **37.6%** (more than doubles competitors)
- Intelligence Index: **70** (#2 globally, ties GPT-5.1 high)

**Notes**: Released Nov 24, 2025. 67% cheaper than Opus 4.1 while being 21% more intelligent. Best model for coding and agents. Scored higher than any human candidate on Anthropic's internal engineering test. Lowest hallucination rate among frontier models (58%). Memory tool enables unlimited context through file-based storage.

---

## Claude Sonnet 4.5

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Code-Master, Workhorse, Value-Leader, Long-Running, Computer-User |
| **Parameters** | Undisclosed |
| **Creative Score** | 7.5/10 |
| **Logical Score** | 8.5/10 |
| **Efficiency Score** | **9.0/10** |
| **Short Description** | Best coding model at mainstream pricing - 30+ hour task endurance |
| **Special Properties** | 200K context (1M option available); 64K max output; extended thinking; hybrid reasoning; 30+ hour task focus; code editing error rate dropped from 9% to 0%; Memory Tool; context editing |
| **Best For** | Production coding, daily AI tasks, cost-conscious enterprise, long-running agents |
| **Special Capabilities** | Tool calling, extended thinking, computer use (Chrome extension), memory tool, prompt caching (90%), batch processing (50%) |
| **Recommendation Score** | **9.0/10** |

**Pricing** (per 1M tokens):
- Input: $3
- Output: $15
- Extended Context (>200K): $6/$22.50
- Prompt Caching: Up to 90% savings
- Batch Processing: 50% savings

**Benchmarks**:
- SWE-bench Verified: **77.2%** (82.0% with parallel compute)
- Terminal-Bench: 50.0%
- OSWorld: **61.4%** (up from 42.2% on Sonnet 4)
- GPQA Diamond: 83.4%
- AIME 2025: **100%** with Python tools (87% without)
- MMMLU: 89.1%
- MMMU: 77.8%
- Tau-bench Retail: 86.2%
- Tau-bench Airline: 70.0%
- Tau-bench Telecom: 98.0%
- Finance Agent: 55.3%
- Intelligence Index: 63 (Thinking mode)

**Notes**: Released Sep 29, 2025. Same price as Sonnet 4 but dramatically better. Can maintain focus for 30+ hours on complex tasks. Code editing benchmark went from 9% error rate to 0%. Claude Agent SDK gives developers same infrastructure Anthropic uses. Memory tool enables unlimited context. Best value in frontier AI.

---

## Claude Opus 4.1

| Field | Value |
|-------|-------|
| **Characteristics & Personality** | Premium-Legacy, Precision-Coder, Detail-Oriented, Research-Strong |
| **Parameters** | Undisclosed |
| **Creative Score** | 8.0/10 |
| **Logical Score** | 8.5/10 |
| **Efficiency Score** | 6.5/10 |
| **Short Description** | Previous flagship - superseded by Opus 4.5 but still capable |
| **Special Properties** | 200K context; 32K max output; extended thinking (up to 64K tokens); hybrid reasoning; strong agentic search; precision in large codebases |
| **Best For** | Legacy integrations, users with existing contracts, specific workflows optimized for 4.1 |
| **Special Capabilities** | Tool calling, extended thinking, precision debugging, agentic search |
| **Recommendation Score** | 7.0/10 (superseded) |

**Pricing** (per 1M tokens):
- Input: $15
- Output: $75

**Benchmarks**:
- SWE-bench Verified: 74.5%
- Terminal-Bench: ~40%
- GPQA Diamond: ~80%
- AIME 2025: ~78% (with extended thinking)
- Intelligence Index: 59 (Thinking mode)

**Notes**: Released Aug 5, 2025. Superseded by Opus 4.5 which is 67% cheaper AND 21% more intelligent. Only recommended for users with existing integrations or contracts. GitHub noted strong multi-file refactoring. Rakuten praised precision in large codebases.

---

## Summary Comparison Table

| Model | Creative | Logic | Efficiency | Context | Price (In/Out) | Rec |
|-------|----------|-------|------------|---------|----------------|-----|
| **Opus 4.5** | 8.5 | **9.5** | 8.0 | 200K | $5/$25 | **9.5** |
| **Sonnet 4.5** | 7.5 | 8.5 | **9.0** | 200K-1M | $3/$15 | **9.0** |
| **Opus 4.1** | 8.0 | 8.5 | 6.5 | 200K | $15/$75 | 7.0 |

---

## Pricing Overview

| Model | Input ($/1M) | Output ($/1M) | vs Opus 4.1 |
|-------|--------------|---------------|-------------|
| **Opus 4.5** | $5 | $25 | **67% cheaper** |
| **Sonnet 4.5** | $3 | $15 | 80% cheaper |
| **Opus 4.1** | $15 | $75 | Baseline |

**Cost Optimization Features:**
- Prompt Caching: Up to 90% savings on repeated content
- Batch Processing: 50% savings for non-time-sensitive tasks
- Extended Context Pricing: 2x input, 1.5x output for >200K tokens

---

## Key Architectural Features

### Hybrid Reasoning
All Claude 4.x models support hybrid reasoning:
- **Instant Mode**: Fast responses without thinking
- **Extended Thinking**: Step-by-step reasoning visible to users
- **Effort Parameter** (Opus 4.5): low/medium/high control over reasoning depth

### Memory Tool (New in 4.5)
- Store and retrieve information outside context window
- Enables effectively unlimited context through file-based storage
- Preserves state across sessions
- Requires beta header: `context-management-2025-06-27`

### Context Editing
- Intelligent context management via automatic tool call clearing
- Reduces token usage in long conversations
- Improves efficiency without losing important context

### Computer Use
- Direct browser interaction (Chrome extension)
- Navigate sites, fill forms, click buttons
- Zoom actions (new in Opus 4.5)
- OSWorld benchmark leader

---

## CABAL Recommendations by Use Case

| Use Case | Recommended Model | Rationale |
|----------|-------------------|-----------|
| **Enterprise Agents** | Opus 4.5 | Best agentic capabilities, self-improving |
| **Daily Coding** | Sonnet 4.5 | Best value, 77%+ SWE-bench |
| **Computer Automation** | Opus 4.5 | 66.3% OSWorld, zoom actions |
| **Long Research Tasks** | Opus 4.5 | 4h49m time horizon, Memory Tool |
| **Cost-Sensitive Production** | Sonnet 4.5 | $3/$15 pricing, 30+ hour focus |
| **Legacy Systems** | Opus 4.1 | Compatibility with existing integrations |
| **High-Stakes Enterprise** | Opus 4.5 | Lowest hallucination rate, best safety |

---

## Anthropic Unique Strengths

1. **Safety Leadership**: Lowest hallucination rates in industry (58% for Opus 4.5)
2. **Coding Excellence**: First to break 80% on SWE-bench Verified
3. **Agentic Focus**: Self-improving agents reach peak in 4 iterations
4. **Long-Task Endurance**: 30+ hours focus (Sonnet), 4h49m time horizon (Opus)
5. **Computer Use Pioneer**: Best-in-class browser automation
6. **Value Pricing**: 67% price cut with Opus 4.5, maintaining Sonnet prices
7. **Prompt Caching**: Industry-leading 90% savings on repeated content
8. **Memory System**: Effectively unlimited context via file storage
9. **Safety Culture**: Constitutional AI, extensive red-teaming
10. **Enterprise Ready**: HIPAA-ready infrastructure, SOC 2 compliant

---

## Comparison to Competitors

**vs OpenAI GPT-5.x:**
- Better coding (80.9% vs 74.5% SWE-bench)
- Better safety/hallucination rates
- More expensive than GPT-5 ($5/$25 vs $1.25/$10)
- Ties on Intelligence Index (70)

**vs Google Gemini 3 Pro:**
- Gemini leads on pure reasoning benchmarks
- Claude leads on coding and agents
- Claude better safety profile
- Gemini has longer context (2M vs 200K-1M)

**vs DeepSeek V3.2:**
- Much more expensive ($5/$25 vs $0.28/$0.42)
- Better coding benchmarks
- Better safety and alignment
- Closed source vs MIT License

---

## Model Evolution Timeline

```
May 2025: Claude Opus 4 (initial release)
Aug 2025: Claude Opus 4.1 (agentic improvements)
Sep 2025: Claude Sonnet 4.5 (coding breakthrough)
Nov 2025: Claude Opus 4.5 (flagship, 67% cheaper)
```

---

## Availability

**Platforms:**
- Claude.ai (web, iOS, Android)
- Claude API (direct)
- Amazon Bedrock
- Google Cloud Vertex AI
- Microsoft Foundry (Opus 4.5)
- Claude Code (CLI)
- VS Code Extension

**Regional Pricing (Bedrock/Vertex):**
- Global Endpoints: Standard pricing
- Regional Endpoints: +10% premium

---

## Migration Guidance

**From Opus 4.1 → Opus 4.5:**
- Strongly recommended for all users
- 67% cost savings, 21% intelligence gain
- Update model string: `claude-opus-4-5-20251101`
- Note: Opus 4.5 uses ~60% more tokens but costs less overall

**From Sonnet 4 → Sonnet 4.5:**
- Same pricing, significant capability upgrade
- Update model string: `claude-sonnet-4-5-20250929`
- Enable extended thinking for complex tasks

**API Strings:**
- Opus 4.5: `claude-opus-4-5-20251101`
- Sonnet 4.5: `claude-sonnet-4-5-20250929`
- Opus 4.1: `claude-opus-4-1-20250805`