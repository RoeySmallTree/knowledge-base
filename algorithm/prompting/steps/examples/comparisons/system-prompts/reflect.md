# Reflect System Prompt Comparison

Comparing **reflect/system-prompt.md** (simplified) vs **examples/system-prompts.md** (comprehensive).

---

## Summary

| Aspect | Simplified | Comprehensive |
|--------|------------|---------------|
| **Lines** | ~130 | ~200 |
| **Kernel** | 6 absolute rules inline | Uses `{{kernel}}` template |
| **Identity** | Role statement only | `{{identity}}`, `{{CABAL_IDENTITY}}` |
| **Empowerment** | None | `{{AGENT_EMPOWERMENT}}`, `{{TONE_ETHOS}}` |
| **Valid IDs** | None | `{{renderValidIds}}` section |
| **Framework** | None | 7-Point Reflection Script |
| **Domain Ownership** | None | "Own Your Domain" section |
| **Aim High** | None | Aim High section |

---

## Role Definition

### Simplified
```markdown
**Your Role:** You are **{{memberName}}** (`{{memberId}}`), an Operative.
**Task:** Assess your products and prepare improvement notes.
```

### Comprehensive
```markdown
You are an **Operative** performing a **Reflect** action in the CABAL system.
You are in the **Reflect** phase — the first step of each round.
This is your moment to step back, assess your work, analyze feedback, and plan.
```

**+ Comprehensive adds:**
- "Own Your Domain" section — YOU are THE authority
- Domain expertise emphasis

---

## Responsibilities

### Simplified (5 items)
1. Assess current products
2. Review unresolved feedback
3. Create collabs on other products
4. Note improvements needed
5. Flag blockers

### Comprehensive (7-Point Script)
1. **Mission Alignment Check** — Charter alignment, objective support
2. **Break Work Into Parts** — Solid, weak, risky analysis
3. **Feedback Analysis** — Accept/Defer/Reject with rationale
4. **Peer Compatibility Check** — Integration, conflicts, needs
5. **Brutal Quality Evaluation** — Self-critique
6. **Immediate Course Correction** — Highest impact change
7. **Structural Requests** — Decision products, restructuring

**Major difference:** Comprehensive has structured framework with sub-questions.

---

## Collab & Remark Guidance

### Simplified
_(Not included)_

### Comprehensive
**When to post Collab:**
- Need input from specific peer
- Planning changes affecting others
- Want to coordinate before Write

**When to post Remark:**
- Blocker — Can't proceed without Chair
- Observation — Strategic insight
- Question — Mission clarification

---

## Reflection Note Structure

### Simplified
_(Not included)_

### Comprehensive
Provides example format:
```markdown
**Mission Alignment:** [How product serves objectives]
**Parts Analysis:**
- ✅ Solid: [...]
- ⚠️ Weak: [...]
- ❌ Risky: [...]
**Feedback Responses:**
- [Author] (Accept/Defer/Reject): [Rationale] → [Action]
**Improvement Plan:** 1. [...] 2. [...] 3. [...]
**Confidence:** [X]%
```

---

## Output Schema Differences

| Field | Simplified | Comprehensive | Issue |
|-------|------------|---------------|-------|
| `responseType` | ❌ Missing | ✅ Required | ⚠️ MISSING |
| `reflections[].refersToProduct` | ✅ | ✅ | ✅ MATCH |
| `reflections[].dodStatus` | ✅ | ✅ | ✅ MATCH |
| `reflections[].dodGaps` | ✅ | ✅ | ✅ MATCH |
| `reflections[].feedbackResponses` | ✅ | ✅ | ✅ MATCH |
| `reflections[].nextVersionDelta` | ✅ | ✅ | ✅ MATCH |
| `reflections[].blockers` | ✅ | ✅ | ✅ MATCH |
| `thinking` | ✅ (3 fields) | ❌ Not in official | ➕ ADDED |

---

## Missing in Simplified

1. **7-Point Reflection Script** with detailed sub-questions
2. **"Own Your Domain"** authority statement
3. **Aim High** encouragement
4. **Collab & Remark guidance** (when to use each)
5. **Reflection note structure** template
6. **Common Mistakes** section
7. **Valid IDs** section

---

## Added in Simplified

1. Pre-submit **Checklist**
2. **thinking** block (assessment, feedback_review, improvement_priorities)
