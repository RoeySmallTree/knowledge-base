# Reflect User Prompt Comparison

Comparing **reflect/user-prompt.md** (simplified) vs **examples/user-complete-prompts.md** (comprehensive).

---

## Summary

| Aspect | Simplified | Comprehensive |
|--------|------------|---------------|
| **Lines** | ~70 | ~140 |
| **Mission/Objectives** | ✅ Round + mission | ✅ Mission + objectives |
| **Product Tree** | ✅ JSON | ✅ Rendered tree |
| **Team Reference** | ✅ Compact | ✅ Full table |
| **Products Section** | ✅ "Your Products" | ✅ "Your Product" with full history |
| **Peer Products** | ❌ Missing | ✅ Present |
| **Remarks** | ✅ Present | ✅ Present |

---

## Sections Comparison

### Mission/Context

| Field | Simplified | Comprehensive | Status |
|-------|------------|---------------|--------|
| Round | ✅ `## Round {{currentRound}}` | ✅ `**Round:** {{session.current_round}}` | ✅ MATCH |
| Mission | ✅ | ✅ | ✅ MATCH |
| Objectives | ✅ | ✅ | ✅ MATCH |

### Team Reference

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| Compact list: `- {{tempId}} → {{name}}` | Full table with ID, Role, Team Role, Responsibility | ⚠️ DIFFERENT |
| Has `isSelf` marker | ❌ Not shown | ➕ ADDED |

### Product Tree

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| JSON blob | Rendered markdown tree | ⚠️ DIFFERENT |
| `{{productTreeJson}}` | `{{#renderProductTree}}...{{/renderProductTree}}` | ⚠️ DIFFERENT |
| — | Has "YOUR PRODUCT" highlight | ⚠️ MISSING |

### Your Products

| Field | Simplified | Comprehensive | Status |
|-------|------------|---------------|--------|
| Header | `## Your Products` | `## Your Product: {{product.name}}` | ⚠️ DIFFERENT |
| Temp ID & name | ✅ | ✅ | ✅ MATCH |
| Type/Status | ✅ Combined | ✅ Table format | ⚠️ DIFFERENT |
| DoD | ✅ | ✅ | ✅ MATCH |
| Chair Directive | ✅ Simple format | ✅ Full with importance, status | ⚠️ LESS DETAIL |
| Version History | ✅ Table | ✅ Full with collabs before each version | ⚠️ LESS DETAIL |
| Collabs before version | ❌ Missing | ✅ Present | ⚠️ MISSING |
| Current Content | ✅ | ✅ | ✅ MATCH |
| Feedback on Current | `## Unresolved Feedback` | `### Feedback on Current Version` | ⚠️ DIFFERENT |
| Collab IDs | ❌ Just `{{id}}` | ✅ Full `*Collab ID: {{collab.id}}*` | ⚠️ LESS DETAIL |
| Resolved status | Implicit | ✅ `[✓ Resolved]` / `[◯ Open]` | ⚠️ MISSING |

### Peer Products

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ❌ Not present | ✅ Full section with status, latest version | ⚠️ MISSING |

### Remarks

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| `## Remarks for You` | `## Remarks From Team` | ✅ Similar |
| Table format | Quote block format | ⚠️ DIFFERENT |
| Has round | ❌ | ⚠️ ADDED |
| Has type | ✅ | ✅ | ✅ MATCH |
| Has BLOCKER flag | ❌ | ✅ | ⚠️ MISSING |

### Requested Context

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ✅ Present | ❌ Not shown | ➕ ADDED |

---

## Missing in Simplified

1. **Peer Products section** — What teammates are working on
2. **Collabs before each version** — Full feedback history
3. **BLOCKER flag** on remarks
4. **Resolved indicators** — `[✓ Resolved]` / `[◯ Open]`
5. **Full collab ID formatting**
6. **Selected by Chair indicator**

## Added in Simplified

1. **Requested Context section** — For context iterations
2. **isSelf marker** in team reference
3. **Round column** in remarks table

---

## Recommendation

1. Add **Peer Products** section
2. Show **collabs before each version** for full history
3. Add **BLOCKER flag** to remarks
4. Add **resolved/open indicators** for collabs
