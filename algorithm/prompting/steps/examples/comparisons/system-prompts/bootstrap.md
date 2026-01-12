# Bootstrap System Prompt Comparison

Comparing **bootstrap/system-prompt.md** (simplified) vs **examples/system-prompts.md** (comprehensive).

---

## Summary

| Aspect | Simplified | Comprehensive |
|--------|------------|---------------|
| **Lines** | ~110 | ~250 |
| **Kernel** | 6 absolute rules inline | Uses `{{kernel}}` template |
| **Identity** | Role statement only | `{{identity}}`, `{{CABAL_IDENTITY}}` |
| **Empowerment** | None | `{{AGENT_EMPOWERMENT}}`, `{{TONE_ETHOS}}` |
| **Valid IDs** | None | Not needed (Bootstrap creates) |
| **Framework** | None | 5-Point Bootstrap Framework |
| **Mistakes** | None | ⚠️ Common Mistakes section |
| **Response Type** | None | `{{renderResponseTypeInstructions}}` |

---

## Role Definition

### Simplified
```markdown
**Your Role:** You are the **Chair**, the session coordinator.
**Task:** Transform the user's request into a structured mission with a tailored team.
```

### Comprehensive
```markdown
You are the **Chair** performing a **Bootstrap** action in the CABAL system.
You are in the **Bootstrap** phase — the GENESIS of a new mission.
You are the MISSION ARCHITECT.
```

---

## Responsibilities

### Simplified (5 items)
1. Interpret user's request
2. Define mission, objectives, constraints
3. Design team personas
4. Create initial meta-products
5. Identify missing information

### Comprehensive (5-Point Framework)
1. **Interpret the Mission** — What user REALLY wants, ambitious outcome
2. **Write Mission Charter** — 200-400 words with THE MISSION, CORE OBJECTIVE, DOD, CONSTRAINTS, WHY IT MATTERS
3. **Define Underlying Objectives** — 3-5 concrete success criteria
4. **Customize Personas** — 2-4 sentences per member with intensity
5. **Define Operative Domains** — Clear scope and area

**+ Comprehensive adds:**
- Character counts (200-400 words, 100-200 words)
- Intensity markers for personas
- Mission connection requirements

---

## What NOT to Create

### Simplified
_(Not included)_

### Comprehensive
- ❌ Create products — That's Plan & Assign
- ❌ Assign tasks — That's Plan & Assign
- ❌ Write content — That's Write step
- ❌ Be vague
- ❌ Invent brand names

---

## What to Flag as Missing

### Simplified
_(Not mentioned)_

### Comprehensive
Explicit list for `missing_details`:
- Product/brand name
- Timeline and milestones
- Budget
- Customer/revenue targets
- Technical SLAs

---

## Output Schema Differences

| Field | Simplified | Comprehensive | Issue |
|-------|------------|---------------|-------|
| `responseType` | ❌ Missing | ✅ Required | ⚠️ MISSING |
| `thinking.scopeDecisions` | ❌ Missing | ✅ | ⚠️ MISSING |
| `thinking.objectives_rationale` | ✅ | ❌ Not in official | ➕ ADDED |
| `thinking.team_design_rationale` | ✅ | ❌ Not in official | ➕ ADDED |
| `constraints` | Optional | Required | ⚠️ DIFFERENT |
| `operativeDomains` | `operative_domains` | camelCase | ⚠️ NAMING |
| `initialProducts` | `initial_products` | camelCase | ⚠️ NAMING |
| `initial_products[].new_id` | ✅ | ❌ Not in official | ➕ ADDED |
| `initial_products[].parent_id` | ✅ | ❌ Not in official | ➕ ADDED |
| `missingDetails` | ❌ Missing | ✅ | ⚠️ MISSING |

---

## Halt Schema Differences

| Field | Simplified | Comprehensive | Issue |
|-------|------------|---------------|-------|
| `responseType` | ❌ Missing | ✅ Required | ⚠️ MISSING |
| `halt.type` | ❌ Missing | `'question' \| 'done'` | ⚠️ MISSING |
| `halt.question` | ✅ | Uses `message` | ⚠️ DIFFERENT |
| `halt.reason` | ✅ | ❌ Not in official | ➕ ADDED |
| `halt.message` | ❌ Missing | ✅ | ⚠️ MISSING |
| `halt.options` | ❌ Missing | ✅ | ⚠️ MISSING |

---

## Missing in Simplified

1. **5-Point Bootstrap Framework** with detailed guidance
2. **Mission Charter format** (THE MISSION, CORE OBJECTIVE, etc.)
3. **Character count guidelines**
4. **Persona writing tips** (intensity markers)
5. **What NOT to do** section
6. **What to flag** section
7. **Common Mistakes** section
8. **Aim High** encouragement

---

## Added in Simplified

1. Pre-submit **Checklist** with verification items
2. Extra thinking fields (`objectives_rationale`, `team_design_rationale`)
3. `new_id` and `parent_id` for initial products
