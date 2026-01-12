# Bootstrap Schema Comparison

Comparing **system-schemas.md** (official) vs **bootstrap.md** (prompt file).

---

## Response Types

| Feature | Official | Prompt File | Status |
|---------|----------|-------------|--------|
| `request_context` | ✅ | ❌ Not shown | ⚠️ MISSING |
| `halt` | ✅ | ✅ | ✅ MATCH |
| `final_output` | ✅ | ✅ | ✅ MATCH |

---

## `final_output` Schema Comparison

### Identical Fields ✅

| Field | Type |
|-------|------|
| `thinking.interpretation` | string |
| `mission` | string |
| `objectives` | string |
| `personas` | Record<string, string> |

### Different Fields ⚠️

| Field | Official | Prompt File | Notes |
|-------|----------|-------------|-------|
| `thinking` subfields | `interpretation`, `scopeDecisions` | `interpretation`, `objectives_rationale`, `team_design_rationale` | Prompt has MORE thinking fields |
| `responseType` | REQUIRED | ❌ Missing | Prompt lacks discriminator |
| `constraints` | string (required) | string? (optional) | Prompt makes optional |
| `operativeDomains` | camelCase | `operative_domains` (snake_case) | Naming convention differs |
| `initialProducts` | camelCase | `initial_products` (snake_case) | Naming convention differs |

### Missing in Prompt File ❌

| Field | Type | Notes |
|-------|------|-------|
| `responseType` | 'final_output' | Required discriminator |
| `missingDetails` | string[] | Optional array for flagging unknowns |

### Added in Prompt File ➕

| Field | Type | Notes |
|-------|------|-------|
| `thinking.objectives_rationale` | string | Additional thinking |
| `thinking.team_design_rationale` | string | Additional thinking |
| `initial_products[].new_id` | string | Prompt requires explicit ID |
| `initial_products[].parent_id` | string? | Prompt allows hierarchy |

---

## `halt` Schema Comparison

| Field | Official | Prompt File | Status |
|-------|----------|-------------|--------|
| `responseType` | 'halt' (required) | ❌ Missing | ⚠️ MISSING |
| `halt.type` | 'question' \| 'done' | ❌ Missing | ⚠️ MISSING |
| `halt.to` | string[] | ✅ string[] | ✅ MATCH |
| `halt.question` | ❌ (uses `message`) | ✅ | ⚠️ DIFFERENT |
| `halt.message` | ✅ | ❌ | ⚠️ DIFFERENT |
| `halt.reason` | ❌ | ✅ | ➕ ADDED |
| `halt.options` | string[]? | ❌ Missing | ⚠️ MISSING |

---

## Summary

| Category | Count |
|----------|-------|
| Identical | 4 fields |
| Different | 8 fields |
| Missing in prompt | 5 fields |
| Added in prompt | 4 fields |

### Key Issues

1. **Missing `responseType` discriminator** — All responses need this
2. **Naming convention mismatch** — Official uses camelCase, prompt uses snake_case
3. **Halt schema diverges** — `question` vs `message`, missing `type` and `options`
4. **Missing `request_context`** — Prompt doesn't document context request option
