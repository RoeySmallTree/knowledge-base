# Write System Prompt Comparison

Comparing **write/system-prompt.md** (simplified) vs **examples/system-prompts.md** (comprehensive).

---

## Summary

| Aspect | Simplified | Comprehensive |
|--------|------------|---------------|
| **Lines** | ~130 | ~250 |
| **Kernel** | 6 absolute rules inline | Uses `{{kernel}}` template |
| **Identity** | Role statement only | `{{identity}}`, `{{CABAL_IDENTITY}}` |
| **Empowerment** | None | `{{AGENT_EMPOWERMENT}}`, `{{TONE_ETHOS}}` |
| **Valid IDs** | None | `{{renderValidIds}}` section |
| **Domain Ownership** | None | "Own Your Domain" section |
| **Structure by Type** | None | Content/Decision templates |
| **Self-Check** | See checklist | 6-item self-check list |

---

## Role Definition

### Simplified
```markdown
**Your Role:** You are **{{memberName}}** (`{{memberId}}`), an Operative.
**Task:** Create or update content for your assigned product(s).
```

### Comprehensive
```markdown
You are an **Operative** performing a **Write** action in the CABAL system.
You are in the **Write** phase.
You are THE authority on {{operative.team_role}} matters.
Ship something you'd stake your reputation on.
```

---

## Responsibilities

### Simplified (5 items)
1. Follow Chair's directive
2. Address feedback marked "to address"
3. Create quality content meeting DoD
4. Cite references using [[p:id]]
5. Explain changes in change_summary

### Comprehensive (4 items + extras)
1. **Fulfill the DoD** — ALL criteria must be satisfied
2. **Advance Objectives** — Show how work moves mission forward
3. **Address All Feedback** — Explicitly address each piece
4. **Follow Chair Directives** — Priority when specified

**+ Comprehensive adds:**
- Aim High section (push beyond minimum, quality over quantity)
- Meet Success Metrics (show HOW targets achieved)
- Trace Everything (anchor to charter, directive, feedback)
- Structure Your Output (markdown formatting guide)

---

## Structure by Product Type

### Simplified
_(Not included)_

### Comprehensive
Provides templates:

**Content:**
```markdown
# [Title]
## Context
[Why this exists]
## Content
[The actual deliverable]
```

**Decision:**
```markdown
# [Question]
## Options Considered
1. [Option A] — pros, cons
2. [Option B] — pros, cons
## Recommendation
[Choice and rationale]
```

---

## Output Schema Differences

| Field | Simplified | Comprehensive | Issue |
|-------|------------|---------------|-------|
| `responseType` | ❌ Missing | ✅ Required | ⚠️ MISSING |
| `versions[].product_id` | ✅ | `productId` | ⚠️ NAMING |
| `versions[].newVersion` wrapper | ❌ Missing | ✅ Required | ⚠️ MISSING |
| `versions[].content` | Direct | Inside `newVersion` | ⚠️ STRUCTURE |
| `versions[].contentTitle` | ❌ Missing | ✅ Required | ⚠️ MISSING |
| `versions[].change_summary` | ✅ | `changeSummary` | ⚠️ NAMING |
| `thinking` | ✅ (3 fields) | ❌ Not shown | — |

---

## Critical Rules

### Simplified
_(Not included)_

### Comprehensive
Explicit rules:
- `versions` array is REQUIRED
- `contentTitle` is REQUIRED (max 200 chars)
- `content` must be plain text prose, NOT JSON
- `content` must be at least 50 characters

---

## Missing in Simplified

1. **"Own Your Domain"** authority statement
2. **Aim High** section (push beyond, quality over quantity)
3. **Meet Success Metrics** guidance
4. **Trace Everything** requirement
5. **Structure Your Output** markdown guide
6. **Structure by Product Type** templates
7. **Self-Check** 6-item list
8. **Common Mistakes** section
9. **Valid IDs** section
10. **newVersion wrapper** structure
11. **contentTitle** required field

---

## Added in Simplified

1. Pre-submit **Checklist**
2. **thinking** block (approach, feedback_addressed, quality_check)
