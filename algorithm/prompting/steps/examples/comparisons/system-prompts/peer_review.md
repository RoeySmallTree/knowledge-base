# Peer Review System Prompt Comparison

Comparing **peer_review/system-prompt.md** (simplified) vs **examples/system-prompts.md** (comprehensive).

---

## Summary

| Aspect | Simplified | Comprehensive |
|--------|------------|---------------|
| **Lines** | ~120 | ~165 |
| **Kernel** | 6 absolute rules inline | Uses `{{kernel}}` template |
| **Identity** | Role statement only | `{{identity}}`, `{{CABAL_IDENTITY}}` |
| **Empowerment** | None | `{{AGENT_EMPOWERMENT}}`, `{{TONE_ETHOS}}` |
| **Valid IDs** | None | `{{renderValidIds}}` section |
| **When to Collab** | None | When to / When NOT to sections |
| **Empty Collabs** | None | Explicit validation |
| **Importance Scale** | Severity Scale | 6-10 only guidance |

---

## Role Definition

### Simplified
```markdown
**Your Role:** You are **{{memberName}}** (`{{memberId}}`), an Operative reviewing peers' work.
**Task:** Review assigned products and provide constructive feedback.
```

### Comprehensive
```markdown
You are an **Operative** performing a **Peer Review** action in the CABAL system.
Review through the lens of your **{{operative.team_role}}** expertise.
Provide high-impact, concrete feedback.
```

---

## Responsibilities

### Simplified (5 items)
1. Review from unique perspective
2. Provide specific, actionable feedback
3. Consider integration with your domain
4. Endorse quality work
5. Avoid duplicating existing feedback

### Comprehensive (4 items)
1. **Review from YOUR Perspective** — Integration with your domain
2. **Be Constructive** — Collaborative, not adversarial
3. **Be Specific** — Reference specific sections
4. **Be Actionable** — Suggest concrete improvements

---

## What to Look For

### Simplified
- Issues others might miss
- Integration points
- Quality standards

### Comprehensive
- **Integration:** Works with your domain?
- **Completeness:** Gaps affecting your work?
- **Feasibility:** Can you build on this?
- **Quality:** Meets mission standard?
- **Mission Alignment:** Advances objectives?

---

## When to Leave Collabs

### Simplified
_(Not included)_

### Comprehensive
**DO leave collabs for:**
- Concrete issue affecting mission
- Gap in DoD coverage
- Integration problem with your domain
- Significant quality/UX issue

**Do NOT leave collabs for:**
- Cosmetic/style preferences
- Minor rewording
- Issues outside your domain
- Generic praise

---

## Empty Collabs Validation

### Simplified
_(Not included)_

### Comprehensive
Explicitly valid to return empty:
```json
{
  "reasoning": "Reviewed from [your role] perspective. Architecture is solid because [reasons].",
  "collabs": []
}
```

---

## Importance Scale

### Simplified
- 1-3: Style/preference
- 4-6: Quality issues
- 7-8: Significant gaps
- 9-10: Blocking

### Comprehensive
Only 6-10 allowed:
- 10: Critical blocker
- 9: Major issue
- 8: Important
- 7: Notable
- 6: Minor but valid

**"Do not use 1-5"** — those aren't worth flagging

---

## Output Schema Differences

| Field | Simplified | Comprehensive | Issue |
|-------|------------|---------------|-------|
| `responseType` | ❌ Missing | ✅ Required | ⚠️ MISSING |
| `reviews` array | ❌ Missing | ✅ Required | ⚠️ MISSING |
| `reviews[].productId` | — | ✅ | ⚠️ MISSING |
| `reviews[].versionId` | — | ✅ | ⚠️ MISSING |
| `reviews[].assessment` | — | 'approved' \| 'needs_revision' | ⚠️ MISSING |
| `reviews[].summary` | — | ✅ | ⚠️ MISSING |
| `thinking` | ✅ (3 fields) | `reasoning` | ⚠️ DIFFERENT |
| `collabs[].about_product` | ✅ | `refersToProduct` | ⚠️ NAMING |
| `collabs[].content` | ✅ | `comment` | ⚠️ NAMING |
| `collabs[].type` | ❌ Missing | ✅ Required | ⚠️ MISSING |

---

## Missing in Simplified

1. **reviews array** — entire product assessment array
2. **When to / When NOT to collab** guidance
3. **Empty collabs validation** explicit
4. **"6-10 only"** importance guidance
5. **Output Format** section (pure JSON)
6. **Common Mistakes** section
7. **Valid IDs** section

---

## Added in Simplified

1. Pre-submit **Checklist**
2. **thinking** block instead of `reasoning`
3. **Your Unique Perspective** section
