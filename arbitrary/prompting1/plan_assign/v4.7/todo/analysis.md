# V4.7 Plan & Assign Analysis - TODO/MenuMaster Test

**Date:** 2025-12-11  
**Prompt Version:** V4.7  
**Model:** anthropic/claude-sonnet-4 (via OpenRouter)  
**Use Case:** MenuMaster MVP (Round 2)

---

## Executive Summary

**CRITICAL ISSUES CONFIRMED:**
;
| Issue | Severity | Status |
|-------|----------|--------|
| Schema Deviation (text preamble) | **CRITICAL** | ❌ CONFIRMED - System will crash |
| Missing `reasoning` field | **CRITICAL** | ❌ CONFIRMED - LLM puts reasoning outside JSON |
| structureDelta format mismatch | Medium | ❌ CONFIRMED - Wrong format used |
| Collection vs Orchestration | Medium | ⚠️ Partial - Some confusion evident |

---

## Issue 1: Schema Deviation (CRITICAL)

### Evidence

The LLM output contains **text preamble before JSON**:

```
Looking at this round, I need to address the security vulnerabilities in our 
Technical Architecture Spec and structure the work properly for a MenuMaster MVP, 
not a "TODO List MVP" which appears to be a template artifact.

Let me work through the 6-point framework:

## 1. Mission Alignment Check
The current product tree is misaligned - we have a "TODO List MVP" when we're 
building MenuMaster. We need to restructure around restaurant menu management...

## 2. Iteration vs Creation  
...

## 6. Questions for User
None - the mission and objectives are clear.

```json
{
  "structureDelta": "...",
  ...
}
```
```

### Impact

**System will crash.** JSON parser cannot parse this output because:
1. Text before `{` is invalid JSON
2. Markdown headers (`##`) in output
3. Code fence (` ```json `) wrapping the JSON

### Root Cause

V4.7 prompt has **NO explicit output format requirement**:
- Shows example JSON but doesn't say "output ONLY JSON"
- LLM naturally explains its reasoning before answering
- No `reasoning` field in schema to capture this

### Fix Required (V4.8)

Add explicit output format section:

```markdown
### Output Format

**Your response must be pure JSON only.**

- Start directly with `{`
- No explanation before or after
- No markdown code fences
```

---

## Issue 2: Missing `reasoning` Field (CRITICAL)

### Evidence

LLM output its reasoning **outside** the JSON:

```
Looking at this round, I need to address the security vulnerabilities...

Let me work through the 6-point framework:

## 1. Mission Alignment Check
The current product tree is misaligned...

## 2. Iteration vs Creation  
The Database Schema is ready for acceptance...
```

### Root Cause

Bootstrap prompt has `reasoning` field:
```json
{
  "reasoning": "string — your thought process...",
  "mission_charter": "...",
  ...
}
```

Plan & Assign does NOT:
```json
{
  "structureDelta": "...",
  "changes": [...],
  ...
}
```

LLM has no place to put its thinking → puts it outside JSON.

### Fix Required (V4.8)

Add `reasoning` field as first field in schema:

```json
{
  "reasoning": "string — your assessment of current state and planning decisions",
  "structureDelta": "...",
  ...
}
```

---

## Issue 3: structureDelta Format Mismatch

### Expected Format (from V4.7 prompt)

```
Add Collection: "Marketing Materials"
  > Content: "Landing Page Copy" [operative-1]
  > Content: "Email Sequences" [operative-2]
```

### Actual Output

```
Remove Orchestration: "TODO List MVP"
Add Orchestration: "MenuMaster MVP" [operative-1]
  > Collection: "Core Platform" [operative-1]
  > Collection: "Restaurant Onboarding" [operative-2]
  > Collection: "Go-to-Market" [operative-3]
  > Decision: "POS Integration Priority" [operative-2]
```

### Analysis

| Aspect | Expected | Actual | Match? |
|--------|----------|--------|--------|
| Action prefix | `Add Collection:` | `Add Orchestration:` | ✅ Close |
| Child prefix | `> Content:` | `> Collection:` | ✅ Match |
| Assignee format | `[operative-1]` | `[operative-1]` | ✅ Match |
| Remove syntax | Not shown | `Remove Orchestration:` | ⚠️ Invented |

### Impact

**Medium.** LLM followed the pattern but:
1. Invented `Remove` action (not shown in example)
2. Backend parser may or may not handle this

### Fix Required (V4.8)

Add multiple examples including Remove:

```markdown
### structureDelta Format

**Adding products:**
```
Add Orchestration: "Module Name"
  > Decision: "Decision Name" [operative-1]
  > Collection: "Collection Name"
    > Content: "Item 1" [operative-2]
```

**Removing products:**
```
Remove: "Product Name" (UUID: abc123)
```
```

---

## Issue 4: Collection vs Orchestration Usage

### Evidence from Output

```
Add Orchestration: "MenuMaster MVP" [operative-1]
  > Collection: "Core Platform" [operative-1]
  > Collection: "Restaurant Onboarding" [operative-2]
  > Collection: "Go-to-Market" [operative-3]
```

### Analysis

| Product | Type Used | Correct? | Why |
|---------|-----------|----------|-----|
| MenuMaster MVP | Orchestration | ✅ | Complex multi-domain work |
| Core Platform | Collection | ⚠️ | Should be Orchestration (has design + code + tests) |
| Restaurant Onboarding | Collection | ⚠️ | Should be Orchestration (flows + docs + training) |
| Go-to-Market | Collection | ⚠️ | Should be Orchestration (strategy + content + metrics) |

### Root Cause

The prompt says:
- **Collection**: "Group of related Content products"
- **Orchestration**: "Complex multi-part work"

But doesn't explain WHEN to choose each.

### Fix Required (V4.8)

Add decision guide:

```markdown
### When to Use Each Type

**Collection** = Same-type atomic items
- Book chapters, API endpoints, test files

**Orchestration** = Multi-domain work
- Full feature (design + code + tests)
- Campaign (budget + copy + channels)

**Rule:** If children span different concerns → Orchestration
```

---

## What Worked Well

### 1. Directive Format ✅

Directives follow the required pattern:

```
**CORE OBJECTIVE:** Fix critical security vulnerabilities and complete missing auth section.

**DEFINITION OF DONE:**
- Rate limiting added to /public/menus/:id endpoint
- Complete authentication/authorization section
- System diagram includes security boundaries
- All Marcus's security concerns addressed

**WHY IT MATTERS:** Security vulnerabilities block production deployment...

**CONTEXT:** Addressing Marcus's open collabs #8 (DDoS vulnerability) and #6...
```

### 2. Collab/Reflection Integration ✅

LLM correctly referenced:
- Marcus's security collabs (#8, #6)
- Jordan's structural request for POS decision
- Alex's reflection on auth section for V2

### 3. Acceptance Decision ✅

Correctly accepted Database Schema:
- Checked: no blocking collabs
- Checked: DoD met
- Used correct product ID

### 4. Valid ID Usage ✅

Used IDs from `[VALID IDS]` section:
- `d5d4ae24-3375-48c0-9b41-a4c90fe10fc9` for Technical Architecture Spec
- `fad8e5da-cc6a-4096-9341-e1917cc29292` for Database Schema

---

## Scoring

| Dimension | Score | Notes |
|-----------|-------|-------|
| Schema compliance | 30% | Text preamble = system crash |
| Directive quality | 95% | Excellent format and context |
| Acceptance logic | 90% | Correct reasoning |
| structureDelta format | 70% | Close but invented syntax |
| Collection/Orchestration | 50% | Confusion on when to use |
| ID handling | 95% | Correct IDs used |

**Overall: 55%** — Good planning logic, but output format will crash system.

---

## V4.8 Implementation Checklist

Based on this analysis, V4.8 must:

- [ ] Add `reasoning` field to schema (first field)
- [ ] Add "Output Format" section requiring pure JSON
- [ ] Add explicit "no preamble, no code fences" instruction
- [ ] Add multiple structureDelta examples (Add, Remove)
- [ ] Add "When to Use Each Type" decision guide
- [ ] Update example output to include `reasoning` field

---

## Raw Output Reference

```json
{
  "structureDelta": "Remove Orchestration: \"TODO List MVP\"\nAdd Orchestration: \"MenuMaster MVP\" [operative-1]\n  > Collection: \"Core Platform\" [operative-1]\n  > Collection: \"Restaurant Onboarding\" [operative-2]\n  > Collection: \"Go-to-Market\" [operative-3]\n  > Decision: \"POS Integration Priority\" [operative-2]",

  "changes": [
    {
      "productId": "ade4951f-24d0-4218-b0fb-98f9fd057268",
      "details": {
        "definition_of_done": "All technical foundation products complete and security-validated"
      }
    },
    {
      "productId": "adc982b9-f52b-431d-bfe8-7cd374e30a29",
      "remove": true
    }
  ],

  "assignments": [
    {
      "productId": "d5d4ae24-3375-48c0-9b41-a4c90fe10fc9",
      "assigneeIds": ["operative-1"],
      "directive": {
        "importance": "9",
        "comment": "**CORE OBJECTIVE:** Fix critical security vulnerabilities..."
      },
      "setRoundFocus": true
    },
    {
      "productId": "temp:1",
      "assigneeIds": ["operative-2"],
      "directive": {
        "importance": "7",
        "comment": "**CORE OBJECTIVE:** Decide which POS systems to prioritize..."
      }
    }
  ],

  "acceptance": [
    {
      "productId": "fad8e5da-cc6a-4096-9341-e1917cc29292",
      "isAccepted": true,
      "selectedVersionId": "fad8e5da-cc6a-4096-9341-e1917cc29292"
    }
  ],

  "questionsForUser": []
}
```

---

*Analysis generated 2025-12-11*
