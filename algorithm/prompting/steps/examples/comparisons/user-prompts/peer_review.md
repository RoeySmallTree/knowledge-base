# Peer Review User Prompt Comparison

Comparing **peer_review/user-prompt.md** (simplified) vs **examples/user-complete-prompts.md** (comprehensive).

---

## Summary

| Aspect | Simplified | Comprehensive |
|--------|------------|---------------|
| **Lines** | ~65 | ~75 |
| **Mission** | ✅ Present | ✅ Present |
| **Team Reference** | ✅ With team roles | ✅ Without details |
| **Product Tree** | ✅ JSON | ✅ Rendered tree |
| **Your Perspective** | ✅ Added | ✅ Present |
| **Products to Review** | ✅ Present | ✅ Present |
| **Existing Collabs** | ✅ Added | ❌ Missing |
| **Previous Feedback** | ✅ Added | ❌ Missing |

---

## Sections Comparison

### Mission/Context

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| Mission only | Mission + Objectives | ⚠️ MISSING OBJECTIVES |
| Round shown | Round shown | ✅ MATCH |

### Your Perspective

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ✅ "As **{{memberName}}** with expertise in **{{expertise}}**" | ✅ "You are reviewing as **{{currentMember.team_role}}**" | ✅ MATCH |
| Has expertise detail | Just team role | ➕ MORE DETAIL |

### Team Reference

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| List with team roles | ❌ Not in peer review section | ➕ ADDED |
| Has `isSelf` marker | — | ➕ ADDED |

### Products to Review

| Field | Simplified | Comprehensive | Status |
|-------|------------|---------------|--------|
| Header | `## Products to Review` | `## Product to Review: {{product.name}}` | ✅ Similar |
| ID | ✅ | ✅ | ✅ MATCH |
| Type | ✅ | ✅ | ✅ MATCH |
| Owner | ✅ | ✅ with team role | ⚠️ LESS DETAIL |
| DoD | ✅ | ✅ | ✅ MATCH |
| Version | ✅ | ✅ | ✅ MATCH |
| Version History | ✅ Table | ❌ Not shown | ➕ ADDED |
| Content | ✅ | ✅ | ✅ MATCH |
| Change Summary | ❌ | ✅ Separate section | ⚠️ MISSING |

### Existing Collabs

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ✅ Existing collabs on product | ❌ Not shown | ➕ ADDED |
| Shows status (resolved ✓) | — | — |

### Previous Feedback (Own)

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ✅ Your previous feedback | ❌ Not shown | ➕ ADDED |
| Avoids duplicate collabs | — | — |

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
2. **Author's Change Summary** as separate section
3. **Author's team role** in product info
4. **Remarks From Team** section

## Added in Simplified

1. **Team Reference** section with roles
2. **Your Expertise** statement
3. **Version History** table
4. **Existing Collabs** on product
5. **Your Previous Feedback** — helps avoid duplicates
6. **Requested Context** section

---

## Recommendation

1. Add **Objectives** to mission
2. Add **Author's Change Summary** section
3. Include **author's team role** in product info
4. Add **Remarks From Team** section
