# Presentation User Prompt Comparison

Comparing **presentation/user-prompt.md** (simplified) vs **examples/user-complete-prompts.md** (comprehensive).

---

## Summary

| Aspect | Simplified | Comprehensive |
|--------|------------|---------------|
| **Lines** | ~95 | ~130 |
| **Session Overview** | ✅ Present | ✅ Present |
| **Product Tree** | ✅ JSON | ✅ Rendered tree |
| **Team Section** | ✅ With characteristics | ✅ With characteristics |
| **What Happened** | ✅ Custom section | ✅ Round Events |
| **Summary Stats** | ✅ Present | ✅ Present |
| **Valid Speakers** | ✅ Present | ✅ Present |
| **Team Remarks** | ❌ Missing | ✅ Present |

---

## Sections Comparison

### Session Overview

| Field | Simplified | Comprehensive | Status |
|-------|------------|---------------|--------|
| Name | ✅ `{{sessionName}}` | ✅ `{{session.name}}` | ✅ MATCH |
| Round | ✅ | ✅ | ✅ MATCH |
| Mission | ✅ | ✅ | ✅ MATCH |

### Your Team

| Field | Simplified | Comprehensive | Status |
|-------|------------|---------------|--------|
| Name/ID | ✅ | ✅ | ✅ MATCH |
| Team Role | ✅ | ✅ | ✅ MATCH |
| Characteristics | ✅ | ✅ with `flatten` | ✅ MATCH |
| Persona | ✅ | ✅ | ✅ MATCH |
| Speaker restrictions | ✅ | ✅ | ✅ MATCH |

### What Happened / Round Events

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| `## What Happened This Round` | `## Round {{X}} Events` | ✅ Similar |
| **Chair Actions** | ❌ Not present | ➕ ADDED |
| **Operative Updates** | Matches "New Versions Created" | ✅ MATCH |
| **Watchdog Findings** | ❌ Not in comprehensive | ➕ ADDED |
| **Key Collabs** | ✅ `### Feedback Posted` | ✅ MATCH |
| **Products Accepted** | ✅ | ✅ | ✅ MATCH |
| **Products Blocked** | ❌ Not in comprehensive | ➕ ADDED |
| **User Questions** | ✅ `### Blockers & Questions` | ✅ MATCH |
| Decisions Made | ❌ Not shown | ✅ | ⚠️ MISSING |
| Assignments Made | ❌ Not shown | ✅ | ⚠️ MISSING |

### Summary of Changes

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ✅ versions, collabs, accepted | ✅ versions, collabs, accepted | ✅ MATCH |

### Team Remarks

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ❌ Not present | ✅ Full section with BLOCKER | ⚠️ MISSING |
| — | Shows recipients, type | — |

### Valid Speaker IDs

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ✅ Present | ✅ Present | ✅ MATCH |
| Excludes Envoy/Watchdog note | Characteristics included | ⚠️ DIFFERENT |

### Requested Context

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ✅ Present | ❌ Not shown | ➕ ADDED |

---

## Missing in Simplified

1. **Decisions Made** section
2. **Assignments Made** section
3. **Team Remarks** section
4. **Characteristics** in Valid Speaker IDs

## Added in Simplified

1. **Chair Actions** — What Chair did this round
2. **Operative Updates** — More structured per-operative
3. **Watchdog Findings** — QA results
4. **Products Blocked** — Blocked products
5. **Requested Context** section

---

## Recommendation

1. Add **Decisions Made** section
2. Add **Assignments Made** section
3. Add **Team Remarks** section
4. Add characteristics to **Valid Speaker IDs**
