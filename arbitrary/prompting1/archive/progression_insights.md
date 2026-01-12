# Progression Insights: Write Step Prompt Development

This document captures the knowledge acquired and methodologies used during the V3 → V4.7 prompt evolution.

---

## 1. Version History

| Version | Focus | Key Changes |
|---------|-------|-------------|
| V1 | Initial design | Combined system/user prompt, hardcoded example (MenuMaster), basic output schema |
| V2 | Structured prompts | Added persona injection, Chair Directive pattern, self_assessment in output, explicit DoD checklist |
| V3 | Split files | Separated system/user prompts, added Source Variables tables, Filled Examples |
| V4 | Rich context | Added product history narrative, team context, objective emphasis |
| V4.1 | Semantic history | Collabs between versions, version authors, reflection notes, selection status |
| V4.2 | Separation fix | Moved instructions to system prompt, researched best practices |
| V4.3 | Section markers | `[IDENTITY]`, `[MISSION]`, `[PRODUCT]` delimiters |
| V4.4 | Identity placement | Moved identity/persona to system prompt (system can have dynamic data) |
| V4.5 | Consistency | Fixed headers, validated against V3 for omissions |
| V4.6 | Complete | Closed all gaps: Aim High, Meet Success Metrics, Structure by Product Type |
| V4.7 | Production-ready | Embedded legacy best practices: formatting examples, common mistakes, ID warnings |

---

## 1.1 Pre-V3 Evolution Details

### V1 (Initial)
- Single file per step
- Hardcoded "MenuMaster" example baked into prompt
- System prompt: basic identity + 3 instructions
- User prompt: static assignment block
- Output: simple `{ products: [{ id, content, version_notes }] }`
- **Problem:** Not template-based, can't inject real session data

### V2 (Structured)
- Added `# Your Identity` with persona injection
- Added `# Session Context` with Mission Charter and Objectives
- Added `## Chair Directive` with CORE OBJECTIVE, DOD, WHY IT MATTERS pattern
- Added `self_assessment` with DoD checklist in output
- Added quality standards section
- **Problem:** Still combined system/user, still has hardcoded example

---

## 2. Key Insights

### 2.1 System vs User Prompt Separation

**Research Finding:** System prompts can have dynamic data too—they're not limited to static text.

**Rule Derived:**
| Content Type | Belongs In |
|--------------|------------|
| WHO you are (identity, persona) | System |
| HOW to behave (rules, instructions) | System |
| WHAT to do (task data, products) | User |

**Before (V4.3):**
```
[IDENTITY]
Name: Alex
Persona: You are the architect...
```

**After (V4.4):**
```
// System prompt:
You are **Alex** (alpha), the **tech-lead** on this team.
You are the architect of MenuMaster's...
```

---

### 2.2 No Instructions in User Prompt

**Problem:** User prompt had "### Instructions" section repeating what system prompt already said.

**Insight:** If the system prompt says "Fulfill the DoD" and "Address Feedback", having "Requirements: 1. Satisfy DoD, 2. Address feedback" in user prompt is redundant.

**Rule:** User prompt = pure data. Zero behavioral guidance.

---

### 2.3 Section Markers for Parsing

**Evolution:**
```
V4:    **You:** Alex — tech-lead
       **Persona:** You are...

V4.3:  [IDENTITY]
       Name: Alex
       Role: tech-lead

V4.4:  (Moved to system prompt entirely)
```

**Insight:** Section markers like `[MISSION]`, `[OBJECTIVES]`, `[PRODUCT]` help LLMs parse long user prompts without adding instructional overhead.

---

### 2.4 Rich Product History Narrative

**Problem:** V3 showed only "prior version" and "feedback". No evolution story.

**Solution (V4.1):** Show the FULL product journey:
```
V1 by You
Directive: Create blueprint.

Before V2:
> Watchdog: "No rate limiting." (8)
> Jordan: "Add bulk import." (5)

V2 by You
Directive: Address security.
Change: Added rate limiting.
✅ Selected
```

**Why it matters:** LLM understands WHY feedback exists and HOW decisions were made.

---

### 2.5 Principle-Driven Validation

**Method:** Score prompt against every principle in `V1_principles_list.md`.

**Categories scored:**
1. Governance (7 principles)
2. Roles & Personas (4 principles)
3. Artifacts & Structure (2 principles)
4. Process (3 principles)
5. Quality & Metrics (2 principles)
6. Prompting (5 principles)

**Scoring:** 🟢 Addressed | 🟡 Partial | 🔴 Missing | ⚪ N/A

**Result:** V3 scored 12/23 → V4.6 scored 23/23.

---

### 2.6 Gaps Identified Through Scoring

| Principle | Gap in V3 | Fix in V4.x |
|-----------|-----------|-------------|
| 1.2 Breakdown | No structure guidance | "Structure Your Output" section |
| 1.6 Ownership | Weak accountability | "Own Your Domain" section |
| 2.4 Collab Tone | No tone guidance | "Tone: Natural Slack message" |
| 14.1 Context-driven | No trace-back rule | "Trace Everything" section |
| 14.2 Ambitious | No aim-high | "Aim High" section (V4.6) |
| 1.4 Metrics | No HOW | "Meet Success Metrics" (V4.6) |
| 3.1-3.6 Product types | No per-type guidance | "Structure by Product Type" (V4.6) |

---

### 2.7 Never Edit Old Versions

**Rule:** Create new version file, never modify existing.

**Why:**
1. Auditability — can trace evolution
2. Rollback — can compare any two versions
3. Learning — scorecard diffs show progress

---

### 2.8 Filled Examples Are Essential

**Problem:** Templates with `{{placeholders}}` are abstract. LLMs (and humans) struggle to understand intent.

**Solution:** Every prompt includes a `## Filled Example` section showing concrete data.

---

### 2.9 Self-Check Checklists

**V4.5 Self-Check:**
```
- [ ] Clear to newcomer?
- [ ] Actionable?
- [ ] All DoD met?
- [ ] Better than prior?
- [ ] Claims anchored?
```

**V4.6 additions:**
```
- [ ] Metrics addressed?
- [ ] Structure matches product type?
```

**Insight:** Checklists are cognitive scaffolds. They ensure the LLM doesn't skip requirements.

---

### 2.11 Embedding Legacy Best Practices (V4.7)

**Problem:** V4.6 was principle-complete but lacked production-hardening from battle-tested legacy prompts.

**Solution:** Analyzed legacy production logs and identified 4 valuable elements:

| Legacy Element | How Embedded in V4.7 |
|----------------|----------------------|
| **Detailed formatting examples** | Expanded "Structure Your Output" with good/bad markdown example |
| **Common mistakes section** | Added "⚠️ Common Mistakes to Avoid" (JSON, content, ID errors) |
| **ID format warnings** | In Common Mistakes + Self-Check item |
| **Product type rules** | Already present in "Structure by Product Type" |

**Insight:** Principle-driven design ensures completeness; legacy analysis ensures production robustness.

---

### 2.10 Product Type Templates

**Insight:** Different product types need different output structures.

**Content:**
```
# [Title]
## Context
## Content
```

**Decision:**
```
# [Decision Question]
## Options Considered
## Recommendation
## Implications
```

**Collection:**
```
# [Collection Name]
## [Item 1]
## [Item 2]
```

**Orchestration:**
```
# [Orchestration Name]
## Purpose & Scope
## Components
## Dependencies
```

---

## 3. Resolution Patterns

### Pattern A: Redundancy Detection
1. Compare system and user prompts
2. If same instruction in both → remove from user
3. User prompt should have ZERO behavioral text

### Pattern B: Principle Gap Analysis
1. Score current prompt against principles
2. Identify 🔴 Missing and 🟡 Partial
3. Add explicit sections to close gaps
4. Re-score to validate

### Pattern C: Omission Checking
1. Before creating new version, view prior version
2. After creating, run `diff` between versions
3. Verify all content preserved + additions only

### Pattern D: Example Validation
1. Every template section needs a filled example
2. Example must show realistic data
3. Example output should demonstrate proper behavior

### Pattern E: Legacy Analysis
1. Review production logs from legacy system
2. Identify what's working well (error prevention, clarity aids)
3. Embed best practices into new version
4. Preserve defensive measures (ID validation, mistake warnings)

---

## 4. Final Prompt Architecture

```
┌─────────────────────────────────────────┐
│           SYSTEM PROMPT                 │
├─────────────────────────────────────────┤
│ ▸ Identity (name, ID, role)             │
│ ▸ Persona (custom_persona_prompt)       │
│ ▸ Role description (Operative, Write)   │
│ ▸ Own Your Domain (accountability)      │
│ ▸ Responsibilities (4 items)            │
│ ▸ Aim High (ambitious posture)          │
│ ▸ Meet Success Metrics (show HOW)       │
│ ▸ Trace Everything (context anchoring)  │
│ ▸ Structure Your Output (breakdown)     │
│ ▸ Structure by Product Type (templates) │
│ ▸ Self-Contained Output (completeness)  │
│ ▸ Collab & Remark Guidance (when/how)   │
│ ▸ Quality Standards (rating criteria)   │
│ ▸ Self-Check (8-item checklist)         │
│ ▸ Common Mistakes to Avoid (V4.7)       │
│ ▸ Output Schema (JSON)                  │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│            USER PROMPT                  │
├─────────────────────────────────────────┤
│ [MISSION]                               │
│ [OBJECTIVES]                            │
│ [TEAM]                                  │
│ [ROUND]                                 │
│ [PRODUCT: name]                         │
│   ID, Type, DoD                         │
│ [HISTORY]                               │
│   Version evolution with collabs        │
│ [CURRENT CONTENT]                       │
│ [FEEDBACK]                              │
│ [YOUR REFLECTION]                       │
│ [DIRECTIVE]                             │
└─────────────────────────────────────────┘
```

---

## 5. Methodology Summary

1. **Start with principles** — use as validation framework
2. **Score ruthlessly** — 🟢/🟡/🔴 every principle
3. **Separate concerns** — WHO/HOW in system, WHAT in user
4. **Never edit versions** — create new, diff to validate
5. **Demand examples** — abstract templates fail without concrete data
6. **Close all gaps** — iterate until 100% score
7. **Analyze legacy** — extract production-hardening from battle-tested prompts
8. **Document insights** — capture learning for future steps

---

## 6. Applying to Other Steps

This methodology applies to all CABAL steps:

| Step | System Prompt Focus | User Prompt Focus |
|------|---------------------|-------------------|
| Bootstrap | Chair identity, mission interpretation | Raw user prompt, team list |
| Plan & Assign | Chair authority, assignment rules | Products, round deltas |
| Write | Operative identity, DoD fulfillment | Products, feedback, directives |
| Inspect | Watchdog identity, QA criteria | Products to review, content |
| Peer Review | Operative identity, review from perspective | Peer's product, feedback rules |
| Reflect | Operative identity, reflection script | Own products, feedback received |
| Present | Envoy identity, communication rules | Round events, team actions |

Each step should go through V1 → V4.6 evolution with principle scoring.
