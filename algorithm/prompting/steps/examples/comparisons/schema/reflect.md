# Reflect Schema Comparison

Comparing **system-schemas.md** (official) vs **reflect.md** (prompt file).

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
| `reflections[].refersToProduct` | string |
| `reflections[].dodStatus` | 'met' \| 'partially_met' \| 'not_met' |
| `reflections[].dodGaps` | string[]? |
| `reflections[].feedbackResponses[].collabId` | string |
| `reflections[].feedbackResponses[].action` | 'accept' \| 'defer' \| 'reject' |
| `reflections[].feedbackResponses[].rationale` | string |
| `reflections[].feedbackResponses[].plannedChange` | string? |
| `reflections[].nextVersionDelta` | string |
| `reflections[].blockers` | string[]? |
| `collabs` | CollabOutput[] |
| `remarks` | RemarkOutput[] |

### Different Fields ⚠️

| Field | Official | Prompt File | Notes |
|-------|----------|-------------|-------|
| `responseType` | REQUIRED | ❌ Missing | Prompt lacks discriminator |
| `thinking` | ❌ Not in official | ✅ In prompt | Prompt adds thinking block |

### Missing in Prompt File ❌

| Field | Type | Notes |
|-------|------|-------|
| `responseType` | 'final_output' | Required discriminator |

### Added in Prompt File ➕

| Field | Type | Notes |
|-------|------|-------|
| `thinking.assessment` | string | Assessment summary |
| `thinking.feedback_review` | string | Feedback review notes |
| `thinking.improvement_priorities` | string | Priority improvements |

---

## `request_context` Schema

| Field | Official | Prompt File | Status |
|-------|----------|-------------|--------|
| `responseType` | ✅ | ❌ Not shown | ⚠️ MISSING |
| `contextRequests[].productId` | ✅ product_id | ✅ | ✅ MATCH |
| `contextRequests[].need` | ✅ context_type | ⚠️ Different name | ⚠️ DIFFERENT |
| `contextRequests[].reason` | ✅ | ✅ | ✅ MATCH |

---

## Collab Output Comparison

| Field | Official | Prompt File | Status |
|-------|----------|-------------|--------|
| `refersToProduct` | ✅ | `about_product` | ⚠️ DIFFERENT |
| `type` | ❌ Not in official | ❌ Not in prompt either | — |
| `importance` | ✅ | ✅ | ✅ MATCH |
| `comment` | ✅ | `content` | ⚠️ DIFFERENT |
| `shortestSummary` | ✅ | `shortest_summary` | ⚠️ camelCase vs snake_case |
| `refersToVersion` | ✅ | `about_version` | ⚠️ DIFFERENT |
| `referencesProductIds` | ✅ | `references` | ⚠️ DIFFERENT |
| `addresseeIds` | ✅ | ❌ Missing | ⚠️ MISSING |
| `respondingToCollabIds` | ✅ | ❌ Missing | ⚠️ MISSING |

---

## Summary

| Category | Count |
|----------|-------|
| Identical | 11 fields |
| Different | 7 fields |
| Missing in prompt | 3 fields |
| Added in prompt | 3 fields |

### Key Issues

1. **Missing `responseType` discriminator**
2. **Naming convention mismatch** — camelCase vs snake_case throughout
3. **Field name differences** — `refersToProduct` vs `about_product`, `comment` vs `content`
4. **Missing addressee tracking** — `addresseeIds`, `respondingToCollabIds`
