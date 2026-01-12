# Inspect User Prompt Comparison

Comparing **inspect/user-prompt.md** (simplified) vs **examples/user-complete-prompts.md** (comprehensive).

---

## Summary

| Aspect | Simplified | Comprehensive |
|--------|------------|---------------|
| **Lines** | ~70 | ~115 |
| **Mission** | ✅ Present | ✅ Present |
| **Team Reference** | ✅ Present | ✅ Full table |
| **Product Tree** | ✅ JSON | ✅ Rendered tree |
| **Products to Inspect** | ✅ Present | ✅ Present |
| **DoD Checklist** | ✅ Pre-formatted | ❌ Just text |
| **Related Products** | ❌ Missing | ✅ Present |
| **Previous Findings** | ✅ Added | ❌ Missing |

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
| Compact: `{{tempId}} → {{name}} ({{role}})` | Full table with ID, Role, Team Role, Responsibility | ⚠️ LESS DETAIL |
| Has `isSelf` marker | ❌ | ➕ ADDED |

### Products to Inspect

| Field | Simplified | Comprehensive | Status |
|-------|------------|---------------|--------|
| Header | `## Products to Inspect` | `## Product to Inspect: {{product.name}}` | ✅ Similar |
| ID | ✅ | ✅ | ✅ MATCH |
| Type | ✅ | ✅ | ✅ MATCH |
| Owner | ✅ | ✅ | ✅ MATCH |
| Status | ❌ | ✅ | ⚠️ MISSING |

### Definition of Done

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ✅ Present | ✅ Present | ✅ MATCH |
| Pre-formatted as checklist | Plain text | ➕ BETTER |

### DoD Criteria Checklist

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ✅ Extracted to `[ ]` checklist | ❌ Not pre-extracted | ➕ ADDED |
| Parsed from DoD text | — | — |

### Version History

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ✅ Table format | ✅ Expanded sections | ⚠️ DIFFERENT |
| — | Directive per version | ⚠️ MISSING |
| — | "Selected for Review" indicator | ⚠️ MISSING |

### Current Content

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ✅ Present | ✅ Present | ✅ MATCH |
| Uses `v{{version}}` | Uses `V{{selectedVersion.version_number}}` | ✅ Similar |

### Peer Feedback

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ✅ Listed | ✅ Listed | ✅ MATCH |
| Table format | Quote block format | ⚠️ DIFFERENT |
| — | Importance shown | ⚠️ MISSING |

### Related Products

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ❌ Not present | ✅ Full section | ⚠️ MISSING |
| — | Status, version, owner | — |

### Previous Findings

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ✅ "Previous Findings (addressed)" | ❌ Not shown | ➕ ADDED |
| Shows issue → resolution | — | — |

### Remarks

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ❌ Not shown | ✅ `## Remarks From Team` | ⚠️ MISSING |

### Requested Context

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ✅ Present | ❌ Not shown | ➕ ADDED |

---

## Missing in Simplified

1. **Objectives** — Only mission
2. **Status** in product info
3. **Directive per version** in version history
4. **"Selected for Review"** indicator
5. **Related Products** section
6. **Remarks From Team** section

## Added in Simplified

1. **DoD Criteria Checklist** — Pre-extracted checkboxes
2. **Previous Findings** — Addressed issues for continuity
3. **isSelf marker** in team reference
4. **Requested Context** section

---

## Recommendation

1. Add **Objectives** to mission
2. Add **Related Products** section
3. Add **directive per version** in history
4. Add **Remarks From Team** section
5. Consider adding **status** to product info
