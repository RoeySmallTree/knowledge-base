# Plan & Assign Schema Comparison

Comparing **system-schemas.md** (official) vs **plan_assign.md** (prompt file).

---

## Response Types

| Feature | Official | Prompt File | Status |
|---------|----------|-------------|--------|
| `request_context` | ✅ | ✅ | ✅ MATCH |
| `halt` | ✅ | ✅ | ✅ MATCH |
| `final_output` | ✅ | ✅ | ✅ MATCH |

---

## `final_output` Schema Comparison

### Identical Fields ✅

| Field | Type |
|-------|------|
| `thinking.roundStrategy` | string (prompt: different name) |
| `treeOperations` | TreeOperation[] |
| `assignments` | AssignmentOutput[] |
| `acceptance` | AcceptanceDecision[] |
| `chairVersions` | ChairVersion[]? |
| `remarks` | RemarkOutput[] |
| `bootstrapOverrides` | object? |

### Different Fields ⚠️

| Field | Official | Prompt File | Notes |
|-------|----------|-------------|-------|
| `responseType` | REQUIRED | ❌ Missing | Prompt lacks discriminator |
| `thinking.roundStrategy` | ✅ | `synthesis` | Different name |
| `thinking.acceptanceRationale` | ✅ | `prioritization`, `assignment_rationale` | Different structure |

---

## TreeOperation Comparison

### ADD Operation

| Field | Official | Prompt File | Status |
|-------|----------|-------------|--------|
| `action` | 'ADD' | ❌ 'create' | ⚠️ DIFFERENT |
| `newId` | ✅ | `new_id` | ⚠️ camelCase vs snake_case |
| `parentId` | ✅ | `parent_id` | ⚠️ camelCase vs snake_case |
| `product.name` | ✅ | ✅ | ✅ MATCH |
| `product.type` | ✅ | ✅ | ✅ MATCH |
| `product.dod` | ✅ | ✅ | ✅ MATCH |
| `product.description` | ✅ | ❌ Missing | ⚠️ MISSING |
| `product.assignee` | ✅ | `owner` | ⚠️ DIFFERENT |
| `reason` | ✅ | ❌ Missing | ⚠️ MISSING |

### REMOVE Operation

| Field | Official | Prompt File | Status |
|-------|----------|-------------|--------|
| `action` | 'REMOVE' | ❌ Not shown | ⚠️ MISSING |

### MOVE Operation

| Field | Official | Prompt File | Status |
|-------|----------|-------------|--------|
| `action` | 'MOVE' | `reparent` | ⚠️ DIFFERENT |

### UPDATE Operation

| Field | Official | Prompt File | Status |
|-------|----------|-------------|--------|
| `action` | 'UPDATE' | `update` | ✅ Similar |
| `productId` | ✅ | `product_id` | ⚠️ camelCase vs snake_case |

---

## Assignment Comparison

| Field | Official | Prompt File | Status |
|-------|----------|-------------|--------|
| `productId` | ✅ | `product_id` | ⚠️ DIFFERENT |
| `assignee` | ✅ | `operative_id` | ⚠️ DIFFERENT |
| `directive.objective` | ✅ | ✅ | ✅ MATCH |
| `directive.dod` | ✅ | ✅ | ✅ MATCH |
| `directive.why` | ✅ | ✅ | ✅ MATCH |
| `directive.context` | ✅ | ✅ | ✅ MATCH |
| `attachedContext` | ✅ | `attach_context` | ⚠️ camelCase vs snake_case |
| `attachedContext[].include` | `('content' \| 'feedback')[]` | `('content' \| 'history' \| 'feedback')[]` | ➕ Prompt adds 'history' |

---

## Acceptance Comparison

| Field | Official | Prompt File | Status |
|-------|----------|-------------|--------|
| `productId` | ✅ | `product_id` | ⚠️ DIFFERENT |
| `accepted` | ✅ | ❌ Not in prompt | ⚠️ MISSING |
| `versionId` | ✅ | ❌ Not shown | ⚠️ MISSING |
| `rejectionReason` | ✅ | ❌ Not shown | ⚠️ MISSING |

---

## Bootstrap Overrides Comparison

| Field | Official | Prompt File | Status |
|-------|----------|-------------|--------|
| `mission` | ✅ | ✅ | ✅ MATCH |
| `objectives` | ✅ | ✅ | ✅ MATCH |
| `personas` | ✅ | ❌ Missing | ⚠️ MISSING |
| `operativeDomains` | ✅ | `operative_domains` | ⚠️ camelCase vs snake_case |
| `constraints` | ❌ | ✅ | ➕ ADDED |

---

## Summary

| Category | Count |
|----------|-------|
| Identical | 12 fields |
| Different | 18 fields |
| Missing in prompt | 8 fields |
| Added in prompt | 2 fields |

### Key Issues

1. **Missing `responseType` discriminator**
2. **Action name mismatch** — 'ADD' vs 'create', 'MOVE' vs 'reparent'
3. **Naming convention mismatch** — camelCase vs snake_case throughout
4. **Missing REMOVE operation** — Not shown in prompt
5. **Missing acceptance details** — `accepted`, `versionId`, `rejectionReason`
