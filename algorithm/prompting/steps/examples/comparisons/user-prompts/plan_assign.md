# Plan & Assign User Prompt Comparison

Comparing **plan_assign/user-prompt.md** (simplified) vs **examples/user-complete-prompts.md** (comprehensive).

---

## Summary

| Aspect | Simplified | Comprehensive |
|--------|------------|---------------|
| **Lines** | ~100 | ~145 |
| **Mission/Objectives** | ✅ Present | ✅ Present with override notes |
| **Team Reference** | ✅ List format | ✅ Table format |
| **Session Parameters** | ✅ Operative domains | ❌ Not shown |
| **Product Tree** | ✅ JSON | ✅ Rendered tree |
| **Pending Products** | ✅ Present | ✅ Present |
| **What Changed** | ❌ Missing | ✅ Present |
| **Operative Reflections** | ❌ Combined | ✅ Own section |
| **Collabs** | ✅ High-priority | ✅ Open/Resolved sections |

---

## Sections Comparison

### Mission/Objectives

| Field | Simplified | Comprehensive | Status |
|-------|------------|---------------|--------|
| Mission | ✅ | ✅ | ✅ MATCH |
| Objectives | ✅ | ✅ | ✅ MATCH |
| Override notes | ❌ Missing | ✅ "Can be modified via `bootstrapOverrides`" | ⚠️ MISSING |
| Constraints | ✅ | ❌ Not shown | ➕ ADDED |

### Current State / Team

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| List: `{{name}} ({{role}})` | Table with owned products count | ⚠️ LESS DETAIL |
| Has `isSelf` marker | ❌ | ➕ ADDED |
| — | Owned products count & pending count | ⚠️ MISSING |

### Session Parameters

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ✅ Operative domains section | ❌ Not shown | ➕ ADDED |
| Lists responsibility per operative | — | — |

### Product Tree

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| JSON blob | Rendered tree with more fields | ⚠️ DIFFERENT |
| `{{productTreeJson}}` | Name, type, status, owner, summary, latest version | ⚠️ LESS DETAIL |
| — | Round 1 fallback message | ⚠️ MISSING |

### What Changed This Round

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ❌ Not present | ✅ Lists changed products with change type | ⚠️ MISSING |

### Pending Products

| Field | Simplified | Comprehensive | Status |
|-------|------------|---------------|--------|
| Header | `## Pending Products` | `## Products Pending Acceptance` | ✅ Similar |
| DoD | ✅ | ✅ | ✅ MATCH |
| Owner | ✅ | ✅ | ✅ MATCH |
| Latest Reflection | ✅ | ❌ In separate section | ⚠️ DIFFERENT |
| Last Directive | ✅ | ❌ Not shown | ➕ ADDED |
| Previous Collabs | ✅ Per-product | ❌ Not per-product | ➕ ADDED |
| Open/Blocking collab counts | ❌ | ✅ | ⚠️ MISSING |
| Ready/Blockers indicator | ❌ | ✅ `✅ No blockers` / `⚠️ Has blocking collabs` | ⚠️ MISSING |

### Operative Reflections

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| Embedded in pending products | ✅ Separate section | ⚠️ DIFFERENT |
| — | Severity indicator | ⚠️ MISSING |
| — | Addressed status | ⚠️ MISSING |

### Feedback & Collabs

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| `## High-Priority Collabs (≥7)` | `## Feedback & Collabs` | ⚠️ DIFFERENT |
| Only high-importance | Open + Resolved sections | ⚠️ LESS COMPLETE |
| — | Collab ID formatting | ⚠️ MISSING |
| — | Summary field | ⚠️ MISSING |

### Remarks

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ✅ Present | ✅ Present | ✅ MATCH |
| Has BLOCKER flag | ✅ | ✅ | ✅ MATCH |

### User Response / Requested Context

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ✅ User Response section | ❌ Not shown | ➕ ADDED |
| ✅ Requested Context section | ❌ Not shown | ➕ ADDED |

---

## Missing in Simplified

1. **Bootstrap override notes** on mission/objectives
2. **What Changed This Round** section
3. **Owned products count** per team member
4. **Open/blocking collab counts** on pending products
5. **Ready/blocker indicators** (`✅`/`⚠️`)
6. **Resolved collabs** section
7. **Severity/addressed status** for reflections

## Added in Simplified

1. **Session Parameters** with operative domains
2. **Constraints** line under mission
3. **Latest Reflection** per pending product
4. **Last Directive** per pending product
5. **Previous Collabs** per pending product
6. **User Response** and **Requested Context** sections

---

## Recommendation

1. Add **What Changed This Round** section
2. Add **open/blocking counts** and **ready indicators** for pending products
3. Split collabs into **Open/Resolved** subsections
4. Add **severity/addressed** status for reflections
