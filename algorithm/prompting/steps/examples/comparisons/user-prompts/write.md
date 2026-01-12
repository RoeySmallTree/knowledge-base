# Write User Prompt Comparison

Comparing **write/user-prompt.md** (simplified) vs **examples/user-complete-prompts.md** (comprehensive).

---

## Summary

| Aspect | Simplified | Comprehensive |
|--------|------------|---------------|
| **Lines** | ~90 | ~120 |
| **Mission/Objectives** | ✅ Mission only | ✅ Mission + Objectives |
| **Team Reference** | ✅ Compact | ✅ Full table |
| **Product Tree** | ✅ JSON | ✅ Rendered tree |
| **Assigned Products** | ✅ Present | ✅ Present |
| **Chair Directive** | ✅ Structured | ✅ Present |
| **Attached Context** | ✅ Present | ❌ Not shown |
| **Self Notes** | ✅ Present | ❌ Not shown |

---

## Sections Comparison

### Mission/Context

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| Mission only | Mission + Objectives | ⚠️ MISSING OBJECTIVES |
| Round shown | Round shown | ✅ MATCH |

### Team Reference

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| Compact: `{{tempId}} → {{name}}` | Full table with ID, Role, Team Role, Responsibility | ⚠️ LESS DETAIL |
| Has `isSelf` marker | ❌ | ➕ ADDED |

### Assigned Products

| Field | Simplified | Comprehensive | Status |
|-------|------------|---------------|--------|
| Header | `## Assigned Products` | `## Your Assignment: {{product.name}}` | ⚠️ DIFFERENT |
| Type/Status | ✅ | ✅ | ✅ MATCH |
| DoD | ✅ | ✅ | ✅ MATCH |
| Version History | ✅ Table | ✅ With change summary + reflection | ⚠️ LESS DETAIL |
| Reflection note | ❌ In versions | ✅ Per-version reflection note | ⚠️ DIFFERENT |
| Current Content | ✅ | ✅ | ✅ MATCH |
| What Changed | ❌ | ✅ Separate section | ⚠️ MISSING |
| Peer Feedback | ✅ "Feedback to Address" | ✅ "Peer Feedback" | ✅ MATCH |
| Collab IDs | ✅ `{{id}}` | ✅ Full `*Collab ID: {{collab.id}}*` | ⚠️ LESS DETAIL |

### Chair Directive

| Field | Simplified | Comprehensive | Status |
|-------|------------|---------------|--------|
| Present | ✅ Structured | ✅ Present | ✅ MATCH |
| Summary | ✅ | ❌ Uses `content` | ⚠️ DIFFERENT |
| Importance | ✅ | ✅ | ✅ MATCH |
| Objective | ✅ | ❌ Not shown | ➕ ADDED |
| Why | ✅ | ❌ Not shown | ➕ ADDED |
| Context | ✅ | ❌ Not shown | ➕ ADDED |
| References | ❌ | ✅ | ⚠️ MISSING |

### Attached Context

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ✅ Full section with content/history | ❌ Not shown | ➕ ADDED |
| Lists per-product with includes | — | — |

### Self Notes

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ✅ Self-notes from earlier | ❌ Not shown | ➕ ADDED |
| Table with round and note | — | — |

### Remarks

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ❌ Not shown explicitly | ✅ `## Remarks From Team` | ⚠️ MISSING |
| — | BLOCKER flag | ⚠️ MISSING |

### Requested Context

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ✅ Present | ❌ Not shown | ➕ ADDED |

---

## Missing in Simplified

1. **Objectives** — Only mission shown
2. **What Changed** section under current content
3. **References** in directive
4. **Remarks From Team** section
5. **Full collab ID formatting**

## Added in Simplified

1. **Structured Chair Directive** — objective, dod, why, context
2. **Attached Context** — Related products with content/history
3. **Self Notes** — Self-remarks from earlier rounds
4. **Requested Context** section

---

## Recommendation

1. Add **Objectives** to mission section
2. Add **What Changed** under current content
3. Add **Remarks From Team** section
4. Add **references** to directive
