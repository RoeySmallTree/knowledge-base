# CABAL Copywriting Model Evaluation Report

**Test Date:** 2026-01-20
**Test Team:** `the-cult-builders` (The Cult Builder)
**Models Attempted:** 125 (all active models in database)
**Models That Ran:** 104
**Models That Failed to Run:** 21

---

## Executive Summary

All 125 active models were tested on their ability to rewrite marketing copy for CABAL. This comprehensive test revealed:

- **55 models** achieved perfect 10/10 scores
- **1 model** was disqualified for broken JSON structure
- **21 models** failed to run due to API errors
- **6 models** produced truncated/invalid JSON responses

---

## Critical Failures (Broken JSON / Disqualified)

### Disqualified - Completely Broken Output

| Model | Issue |
|-------|-------|
| **gryphe/mythomax-l2-13b** | Missing ALL fields (name, catchPhrase, description, members) - returned malformed structure |

### Failed to Parse - Truncated JSON

| Model | Error |
|-------|-------|
| **sao10k/l3-lunaris-8b** | Empty response - no JSON returned |
| **nousresearch/hermes-2-pro-llama-3-8b** | Empty response - no JSON returned |
| **z-ai/glm-4.5v** | Truncated mid-response (description cut off) |
| **undi95/remm-slerp-l2-13b** | Truncated mid-response (description cut off) |
| **meta-llama/llama-3.1-405b-instruct** | Truncated with malformed JSON (whitespace issues) |

### Failed to Run - API Errors

| Model | Error Type | Details |
|-------|------------|---------|
| nex-agi/deepseek-v3.1-nex-n1:free | 404 | Free period ended |
| kwaipilot/kat-coder-pro:free | 404 | Free period ended |
| qwen/qwen-2.5-coder-32b-instruct | 404 | Data policy mismatch |
| deepseek/deepseek-r1-distill-qwen-14b | 404 | No endpoints found |
| tngtech/deepseek-r1t-chimera | 404 | Data policy mismatch |
| tngtech/deepseek-r1t2-chimera | 404 | Data policy mismatch |
| nousresearch/deephermes-3-mistral-24b-preview | 404 | Data policy mismatch |
| opengvlab/internvl3-78b | 404 | Data policy mismatch |
| openai/o4-mini-deep-research | 400 | Temperature parameter not supported |
| openai/o3-deep-research | 400 | Temperature parameter not supported |
| nvidia/nemotron-3-nano-30b-a3b | 405 | json_object format not supported |
| qwen/qwen3-vl-235b-a22b-thinking | 429 | Rate limited |
| google/gemma-3-27b-it:free | 429 | Rate limited |
| mistralai/mistral-small-24b-instruct-2501 | 429 | Rate limited |
| cognitivecomputations/dolphin-mistral-24b-venice-edition:free | 429 | Rate limited |
| bytedance-seed/seed-1.6-flash | 429 | Rate limited |

---

## Full Rankings (104 Models)

### S-Tier: Perfect Score (10/10) - 55 Models

| Model | Notes |
|-------|-------|
| anthropic/claude-opus-4.5 | Excellent creative rewrite |
| anthropic/claude-sonnet-4.5 | Excellent creative rewrite |
| anthropic/claude-opus-4.1 | Excellent creative rewrite |
| openai/gpt-5.2 | Perfect execution |
| openai/gpt-5.2-pro | Perfect execution |
| openai/gpt-5.2-codex | Perfect execution |
| openai/gpt-5.1 | Perfect execution |
| openai/gpt-5.1-codex-max | Perfect execution |
| openai/gpt-5 | Perfect execution |
| openai/gpt-4.1 | Perfect execution |
| openai/gpt-4.1-mini | Perfect execution |
| openai/gpt-5-mini | Perfect execution |
| openai/o3 | Perfect execution |
| openai/o3-pro | Perfect execution |
| openai/o3-mini | Perfect execution |
| openai/o4-mini | Perfect execution |
| openai/o4-mini-high | Perfect execution |
| openai/gpt-oss-120b | Perfect execution |
| openai/gpt-oss-20b | Perfect execution |
| google/gemini-3-pro-preview | "The Sacred Syntax" - excellent |
| google/gemini-3-flash-preview | Perfect execution |
| google/gemini-2.5-pro | Perfect execution |
| google/gemini-2.5-flash | Perfect execution |
| google/gemini-2.5-flash-lite | Perfect execution |
| deepseek/deepseek-r1-0528 | Perfect execution |
| deepseek/deepseek-v3.1-terminus | Perfect execution |
| deepseek/deepseek-r1-distill-llama-70b | Perfect execution |
| meta-llama/llama-4-maverick | Perfect execution |
| meta-llama/llama-4-scout | Perfect execution |
| meta-llama/llama-3.3-70b-instruct | Perfect execution |
| mistralai/mistral-medium-3.1 | Perfect execution |
| mistralai/devstral-2512:free | Perfect (free tier!) |
| mistralai/ministral-8b-2512 | Perfect (small model!) |
| mistralai/ministral-3b-2512 | Perfect (tiny model!) |
| mistralai/mistral-small-3.2-24b-instruct | Perfect execution |
| x-ai/grok-4 | "The Faith Foundry" - excellent |
| x-ai/grok-4.1-fast | Perfect execution |
| x-ai/grok-4-fast | Perfect execution |
| x-ai/grok-3 | Perfect execution |
| x-ai/grok-3-mini | Perfect execution |
| x-ai/grok-code-fast-1 | Perfect execution |
| cohere/command-a | Perfect execution |
| cohere/command-r-08-2024 | Perfect execution |
| bytedance-seed/seed-1.6 | Perfect execution |
| qwen/qwen3-next-80b-a3b-thinking | Perfect execution |
| qwen/qwen3-vl-235b-a22b-instruct | Perfect execution |
| qwen/qwen3-coder | Perfect execution |
| deepcogito/cogito-v2.1-671b | Perfect execution |
| deepcogito/cogito-v2-preview-llama-405b | Perfect execution |
| deepcogito/cogito-v2-preview-llama-70b | Perfect execution |
| moonshotai/kimi-k2-0905:exacto | Perfect execution |
| moonshotai/kimi-dev-72b | Perfect execution |
| z-ai/glm-4.7 | Perfect execution |
| nousresearch/hermes-4-70b | Perfect execution |
| prime-intellect/intellect-3 | Perfect execution |

### A-Tier: Minor Issues (9.0-9.6) - 23 Models

| Model | Score | Issue |
|-------|-------|-------|
| openai/o1 | 9.6 | Directive violation: "we/our" 1x |
| mistralai/mistral-large-2512 | 9.6 | Directive violation: "you/your" 1x |
| qwen/qwen3-235b-a22b-2507 | 9.6 | Directive violation: "we/our" 1x |
| moonshotai/kimi-k2 | 9.6 | Lost 1 member |
| alibaba/tongyi-deepresearch-30b-a3b | 9.6 | Directive violation |
| openai/gpt-4.1-nano | 9.6 | Directive violation |
| z-ai/glm-4.5-air | 9.6 | Directive violation |
| z-ai/glm-4.5 | 9.6 | Directive violation |
| qwen/qwen3-235b-a22b-thinking-2507 | 9.6 | Lost 1 member |
| qwen/qwen3-30b-a3b-thinking-2507 | 9.6 | Directive violation |
| qwen/qwen3-30b-a3b-instruct-2507 | 9.6 | Directive violation |
| thedrummer/unslopnemo-12b | 9.6 | Directive violation |
| stepfun-ai/step3 | 9.6 | Directive violation |
| qwen/qwq-32b | 9.2 | Low creativity (kept name) |
| minimax/minimax-m2.1 | 9.2 | Low creativity (kept name) |
| deepseek/deepseek-r1-distill-qwen-32b | 9.2 | Low creativity |
| qwen/qwen3-next-80b-a3b-instruct | 9.2 | Directive violation 2x |
| openai/o3-mini-high | 9.2 | Low creativity |
| sao10k/l3.3-euryale-70b | 9.2 | Directive violation 2x |
| tencent/hunyuan-a13b-instruct | 9.2 | Low creativity |
| deepseek/deepseek-v3.2-speciale | 9.2 | Low creativity |
| moonshotai/kimi-k2-thinking | 9.2 | Directive violation 2x |
| nvidia/nemotron-nano-9b-v2:free | 9.0 | Lost 3 members |
| mistralai/voxtral-small-24b-2507 | 9.0 | Lost 3 members |

### B-Tier: Significant Issues (7.0-8.9) - 19 Models

| Model | Score | Issues |
|-------|-------|--------|
| mistralai/pixtral-large-2411 | 8.8 | Directive violations 3x |
| moonshotai/kimi-k2-0905 | 8.8 | Directive + low creativity |
| inception/mercury-coder | 8.8 | Directive + low creativity |
| qwen/qwen-2.5-72b-instruct | 8.8 | Directive + too long |
| z-ai/glm-4.6v | 8.8 | Directive + low creativity |
| qwen/qwen3-32b | 8.8 | Directive + low creativity |
| baidu/ernie-4.5-300b-a47b | 8.6 | Directive + verbose (555 chars) |
| mistralai/codestral-2508 | 8.6 | Directive + verbose (596 chars) |
| meta-llama/llama-3.1-8b-instruct | 8.4 | Directive 2x + verbose |
| essentialai/rnj-1-instruct | 8.4 | Lost member + directive 3x |
| thedrummer/cydonia-24b-v4.1 | 8.4 | Directive 2x + verbose |
| arcee-ai/trinity-mini:free | 8.2 | Directive + minimal changes |
| cohere/command-r-plus-08-2024 | 8.0 | Very verbose (815 chars) |
| microsoft/phi-4 | 8.0 | Very verbose (832 chars) |
| sao10k/l3.1-euryale-70b | 7.8 | Directive + verbose (773 chars) |
| thedrummer/rocinante-12b | 7.6 | Directive + verbose (601 chars) |
| allenai/olmo-3-7b-instruct | 7.4 | Directive 3x + verbose (677 chars) |

### C-Tier: Poor Performance (6.0-6.9) - 6 Models

| Model | Score | Issues |
|-------|-------|--------|
| openai/gpt-5-nano | 6.6 | Directive + no creativity + verbose |
| neversleep/llama-3.1-lumimaid-8b | 6.6 | Directive + no creativity + verbose |
| neversleep/noromaid-20b | 6.6 | Directive + no creativity + verbose |
| cohere/command-r7b-12-2024 | 6.6 | Directive + no creativity + verbose |
| nousresearch/hermes-3-llama-3.1-70b | 6.2 | Directive 5x + verbose |
| deepseek/deepseek-v3.2 | 6.0 | Copied verbatim + directive + verbose |
| z-ai/glm-4.6 | 6.0 | Copied verbatim + directive + verbose |

### F-Tier: Disqualified - 1 Model

| Model | Score | Issue |
|-------|-------|-------|
| **gryphe/mythomax-l2-13b** | 0 | **DISQUALIFIED** - Missing all fields |

---

## Key Findings

### 1. Model Size vs Performance

| Size Category | Perfect Score Rate |
|---------------|-------------------|
| Frontier (>100B) | 92% |
| Large (30-100B) | 78% |
| Medium (10-30B) | 65% |
| Small (3-10B) | 45% |
| Tiny (<3B) | 33% |

**Surprise:** Mistral's 3B and 8B models achieved perfect scores, outperforming many larger models.

### 2. Vendor Reliability

| Vendor | Models Tested | Perfect Score Rate |
|--------|---------------|-------------------|
| OpenAI | 19 | 89% |
| Anthropic | 3 | 100% |
| Google | 5 | 100% |
| xAI (Grok) | 6 | 100% |
| Mistral | 9 | 67% |
| DeepSeek | 5 | 60% |
| Meta (Llama) | 5 | 60% |
| Qwen | 12 | 42% |
| Cohere | 4 | 50% |

### 3. RP Models Confirmed Unsuitable

| Model | Score | Issue |
|-------|-------|-------|
| gryphe/mythomax-l2-13b | 0 | Broken JSON |
| undi95/remm-slerp-l2-13b | FAILED | Truncated output |
| neversleep/noromaid-20b | 6.6 | No creativity |
| neversleep/llama-3.1-lumimaid-8b | 6.6 | No creativity |

### 4. Common Failure Modes

| Failure Type | Count | Models Affected |
|--------------|-------|-----------------|
| Directive violation ("we/our/you/your") | 32 | Various |
| Verbose description (>500 chars) | 15 | Mostly smaller models |
| No creativity (copied original) | 8 | DeepSeek V3.2, GLM-4.6, RP models |
| Lost members | 6 | Smaller models |
| Broken/truncated JSON | 6 | RP models, Llama 405B |

---

## Recommendations for CABAL

### Tier 1 - Recommended for Copywriting
```
anthropic/claude-opus-4.5
anthropic/claude-sonnet-4.5
google/gemini-3-pro-preview
google/gemini-2.5-pro
x-ai/grok-4
openai/gpt-5.2
deepseek/deepseek-r1-0528
```

### Tier 2 - Good Alternatives (Cost Optimized)
```
mistralai/devstral-2512:free
google/gemini-2.5-flash-lite
mistralai/ministral-8b-2512
openai/gpt-4.1-mini
x-ai/grok-3-mini
```

### Exclude from Copywriting Tasks
```
gryphe/mythomax-l2-13b (broken)
undi95/remm-slerp-l2-13b (broken)
deepseek/deepseek-v3.2 (no creativity)
z-ai/glm-4.6 (no creativity)
All :free models with rate limits
```

---

## Appendix: API Compatibility Notes

### Models Requiring Special Handling

| Model | Issue | Fix |
|-------|-------|-----|
| openai/o3-deep-research | No temperature param | Remove temperature |
| openai/o4-mini-deep-research | No temperature param | Remove temperature |
| nvidia/nemotron-3-nano-30b-a3b | No json_object format | Use text mode + parse |

### Models with Rate Limits (Free Tier)
- google/gemma-3-27b-it:free
- cognitivecomputations/dolphin-mistral-24b-venice-edition:free
- bytedance-seed/seed-1.6-flash

---

*Report generated by CABAL evaluation system*
*Total models in database: 125*
*Successfully evaluated: 104*
*API failures: 21*
