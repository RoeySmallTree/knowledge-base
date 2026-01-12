# Inspect System Prompt Comparison

Comparing **inspect/system-prompt.md** (simplified) vs **examples/system-prompts.md** (comprehensive).

---

## Summary

| Aspect | Simplified | Comprehensive |
|--------|------------|---------------|
| **Lines** | ~113 | ~150 |
| **Kernel** | 6 absolute rules inline | Uses `{{kernel}}` template |
| **Identity** | None | `{{identity}}`, `{{CABAL_IDENTITY}}` |
| **Empowerment** | None | `{{AGENT_EMPOWERMENT}}`, `{{TONE_ETHOS}}` |
| **Valid IDs** | None | `{{renderValidIds}}` |
| **Framework** | None | 6-Point Inspection Framework |
| **Mistakes** | None | ⚠️ Common Mistakes section |
| **Response Type** | None | `{{renderResponseTypeInstructions}}` |

---

## KERNEL / Absolute Rules

| Simplified | Comprehensive |
|------------|---------------|
| 6 inline rules | Uses `{{kernel}}` helper |
| Lists same concepts | Adds reference syntax example |

**Identical concepts:**
1. JSON only
2. Valid IDs only
3. No hallucination
4. Collaborative discourse
5. Output alternatives
6. No out-of-band communication

---

## Role/Task Definition

### Simplified
```markdown
**Your Role:** You are the **Watchdog**, the quality gatekeeper.
**Task:** Inspect products for quality and determine if they meet DoD.
```

### Comprehensive
```markdown
You are the **Watchdog** performing an **Inspect** action in the CABAL system.
You are in the **Inspect** phase — the quality gate before products are finalized.
```

**+ Comprehensive adds:**
- Authority section (BLOCK, FLAG, APPROVE powers)
- Chair reliance statement
- Override protections

---

## Responsibilities

### Simplified (5 items)
1. Verify each product meets DoD
2. Check technical accuracy
3. Assess integration
4. Recommend approval/revision/blocking
5. Provide actionable feedback

### Comprehensive (6-Point Framework)
1. **Security Review** — Auth, authz, data exposure, injection, rate limiting
2. **Completeness Check** — Line-by-line DoD verification
3. **Mission Coherence** — Charter alignment, objective support
4. **Sequence & Prerequisites** — Dependencies, decisions, external refs
5. **Quality & Clarity** — Newcomer clarity, actionability, structure
6. **Peer Coherence** — Team alignment, conflicts, integration

**⚠️ Major difference:** Comprehensive has detailed sub-points for each category.

---

## Assessment Criteria

### Simplified
- **approved** — Meets DoD
- **needs_revision** — Minor issues
- **blocked** — Critical issues

### Comprehensive
Same three values, plus severity table:
| 9-10 | Critical/Blocker |
| 7-8 | High |
| 5-6 | Medium |
| 3-4 | Low |
| 1-2 | Observation |

---

## What NOT To Do

### Simplified
_(Not included)_

### Comprehensive
- ❌ Rewrite content
- ❌ Subjective style critiques
- ❌ Invent issues
- ❌ Be vague

---

## Output Schema

### Differences

| Field | Simplified | Comprehensive | Issue |
|-------|------------|---------------|-------|
| `responseType` | ❌ Missing | ✅ Required | ⚠️ MISSING |
| `versionId` | ❌ Missing | ✅ Required | ⚠️ MISSING |
| `verdict` | ✅ | `assessment` | ⚠️ DIFFERENT |
| `summary` | ✅ | ❌ Not shown | — |
| `dod_checklist` | ✅ Array | ❌ Not in official | ➕ ADDED |
| `collabs` field names | snake_case | camelCase | ⚠️ DIFFERENT |

### Simplified Schema
```typescript
{
  thinking: {...};
  inspections: Array<{
    product_id: string;
    verdict: 'approved' | 'needs_revision' | 'blocked';
    summary: string;
    dod_checklist: Array<{...}>;
  }>;
  collabs?: [...];
  remarks?: [...];
}
```

### Comprehensive Schema
```typescript
{
  responseType: 'final_output';
  inspections: Array<{
    productId: string;
    versionId: string;
    assessment: 'approved' | 'needs_revision' | 'blocked';
    findings: Array<{
      category: 'security' | 'completeness' | 'coherence' | 'integration' | 'quality';
      severity: 1-10;
      issue: string;
      recommendation: string;
      dodCriterion?: string;
    }>;
  }>;
  collabs: [...];
  remarks: [...];
}
```

---

## Missing in Simplified

1. **Identity/persona** — No `{{identity}}` template
2. **CABAL Identity** — No product tree/round flow explanation
3. **Agent Empowerment** — No ownership/force multiplier language
4. **Tone & Ethos** — No style guidance
5. **Valid IDs section** — No ID list for validation
6. **User profile** — No principal context
7. **Tag prompts** — No team-specific instructions
8. **Response type instructions** — No discriminator docs
9. **Common mistakes** — No error guidance
10. **6-Point Framework details** — Just 5 high-level bullets

---

## Added in Simplified

1. **Checklist** — Pre-submit verification list
2. **dod_checklist** in output — Structured DoD verification

---

## Recommendation

To align simplified with comprehensive:

1. Add `responseType` to schema
2. Add `versionId` to inspections
3. Rename `verdict` → `assessment`
4. Use camelCase for field names
5. Add severity table
6. Add "What NOT to do" section
7. Expand 5 responsibilities → 6-Point Framework
8. Add Common Mistakes section
