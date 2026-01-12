# Inspect Schema Comparison

Comparing **system-schemas.md** (official) vs **inspect.md** (prompt file).

---

## Response Types

| Feature | Official | Prompt File | Status |
|---------|----------|-------------|--------|
| `request_context` | ✅ | ✅ | ✅ MATCH |
| `halt` | ❌ | ❌ | ✅ CORRECT (not available) |
| `final_output` | ✅ | ✅ | ✅ MATCH |

---

## `final_output` Schema Comparison

### Identical Fields ✅

| Field | Type |
|-------|------|
| `inspections[].productId` | string (different case) |
| `inspections[].versionId` | string (different case) |
| `inspections[].assessment` | 'approved' \| 'needs_revision' \| 'blocked' |
| `inspections[].findings` | Array of finding objects |
| `inspections[].findings[].category` | category enum |
| `inspections[].findings[].severity` | number 1-10 |
| `inspections[].findings[].issue` | string |
| `inspections[].findings[].recommendation` | string |
| `inspections[].findings[].dodCriterion` | string? |
| `collabs` | CollabOutput[] |
| `remarks` | RemarkOutput[] |

### Different Fields ⚠️

| Field | Official | Prompt File | Notes |
|-------|----------|-------------|-------|
| `responseType` | REQUIRED | ❌ Missing | Prompt lacks discriminator |
| `productId` | `productId` | `product_id` | camelCase vs snake_case |
| `versionId` | `versionId` | `version_id` | camelCase vs snake_case |
| `dodCriterion` | `dodCriterion` | `dod_criterion` | camelCase vs snake_case |
| `thinking` | ❌ Not in official | ✅ | ➕ ADDED |

---

## Findings Category Enum

| Official | Prompt | Status |
|----------|--------|--------|
| 'security' | ✅ | ✅ MATCH |
| 'completeness' | ✅ | ✅ MATCH |
| 'coherence' | ✅ | ✅ MATCH |
| 'integration' | ✅ | ✅ MATCH |
| 'quality' | ✅ | ✅ MATCH |

---

## Missing in Prompt File ❌

| Field | Type | Notes |
|-------|------|-------|
| `responseType` | 'final_output' | Required discriminator |

### Added in Prompt File ➕

| Field | Type | Notes |
|-------|------|-------|
| `thinking.inspection_approach` | string | How watchdog approached |
| `thinking.quality_assessment` | string | Overall quality notes |
| `thinking.cross_product_check` | string | Integration notes |
| `inspections[].summary` | string | Per-product summary |
| `inspections[].dod_checklist` | Array | DoD criteria checklist |

---

## Summary

| Category | Count |
|----------|-------|
| Identical | 11 concepts |
| Different | 5 fields (naming) |
| Missing in prompt | 1 field |
| Added in prompt | 5 fields |

### Key Issues

1. **Missing `responseType` discriminator**
2. **Naming convention mismatch** — camelCase vs snake_case
3. **Added DoD checklist** — Prompt adds structured checklist not in official
4. **Added summary** — Prompt requires per-inspection summary
