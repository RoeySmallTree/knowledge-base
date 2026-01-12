# Plan & Assign System Prompt Comparison

Comparing **plan_assign/system-prompt.md** (simplified) vs **examples/system-prompts.md** (comprehensive).

---

## Summary

| Aspect | Simplified | Comprehensive |
|--------|------------|---------------|
| **Lines** | ~180 | ~300 |
| **Kernel** | 6 absolute rules inline | Uses `{{kernel}}` template |
| **Identity** | Role statement only | `{{identity}}`, `{{CABAL_IDENTITY}}` |
| **Empowerment** | None | `{{AGENT_EMPOWERMENT}}`, `{{TONE_ETHOS}}` |
| **Valid IDs** | None | `{{renderValidIds}}` section |
| **Framework** | None | 6-Point Planning Framework |
| **Directive Format** | None | Explicit directive structure |
| **Bootstrap Overrides** | None | Full override guidance |

---

## Role Definition

### Simplified
```markdown
**Your Role:** You are the **Chair**, the session coordinator.
**Task:** Create directives for operatives based on reflections and feedback.
```

### Comprehensive
```markdown
You are the **Chair** performing a **Plan & Assign** action in the CABAL system.
You are in the **Plan & Assign** phase — the strategic hub of each round.
As Chair, you are the MISSION OWNER.
```

---

## Responsibilities

### Simplified (6 items)
1. Synthesize operative reflections
2. Prioritize high-importance feedback
3. Create/modify products via tree_ops
4. Assign operatives with directives
5. Update own products
6. Override bootstrap if needed

### Comprehensive (6-Point Framework)
1. **Mission Alignment Check** — Tree covers mission? Gaps? Redundancies?
2. **Iteration vs Creation** — Prefer iteration over new products
3. **Structural Decisions** — Add/remove/archive/reorder
4. **Acceptance Decisions** — Content/Decision/Collection rules
5. **Assignments** — Operatives only, prefer same owner
6. **Questions for User** — Sparingly, specific, blocks session

**+ Comprehensive adds:**
- "Your Authority" section
- Product model table (Content, Decision, Collection, Orchestration)
- Directive format template
- structureDelta format

---

## Directive Format

### Simplified
_(Not included)_

### Comprehensive
Required format:
```markdown
**CORE OBJECTIVE:** [One sentence. What to deliver.]
**DEFINITION OF DONE:**
- [Criterion 1]
- [Criterion 2]
**WHY IT MATTERS:** [One sentence. Real-world impact.]
**CONTEXT:** [Reference to reflections/collabs]
```

---

## Bootstrap Overrides

### Simplified
_(Schema only, no guidance)_

### Comprehensive
Full example with guidance:
```json
{
  "bootstrapOverrides": {
    "mission": "Refined mission statement",
    "objectives": "1) Updated objective 1...",
    "personas": {"operative-1": "Updated persona..."},
    "operativeDomains": {...}
  }
}
```

---

## structureDelta Format

### Simplified
_(Not included)_

### Comprehensive
Provides exact syntax:
```markdown
Add Orchestration: "Module Name"
  > Decision: "Decision Name" [operative-1]
  > Collection: "Collection Name"
    > Content: "Item 1" [operative-2]
```

---

## Output Schema Differences

| Field | Simplified | Comprehensive | Issue |
|-------|------------|---------------|-------|
| `responseType` | ❌ Missing | ✅ Required | ⚠️ MISSING |
| `tree_ops` actions | 'create'/'update'/'reparent'/'mark' | 'ADD'/'REMOVE'/'MOVE'/'UPDATE' | ⚠️ DIFFERENT |
| `treeOperations` | `tree_ops` | camelCase | ⚠️ NAMING |
| `assignments[].operative_id` | ✅ | `assignee` | ⚠️ DIFFERENT |
| `assignments[].product_id` | ✅ | `productId` | ⚠️ NAMING |
| `chair_versions` | ✅ | `chairVersions` | ⚠️ NAMING |
| `bootstrap_overrides` | ✅ | `bootstrapOverrides` | ⚠️ NAMING |
| `acceptance` | ❌ Missing | ✅ Required | ⚠️ MISSING |

---

## Missing in Simplified

1. **6-Point Planning Framework** with detailed guidance
2. **Your Authority** section
3. **Product Model** table
4. **Directive Format** template
5. **structureDelta Format** syntax
6. **Common Mistakes** section
7. **Valid IDs** section
8. **Acceptance array** in schema

---

## Added in Simplified

1. Pre-submit **Checklist**
2. **thinking** block (synthesis, prioritization, assignment_rationale)
