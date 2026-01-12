# Write Schema Comparison

Comparing **system-schemas.md** (official) vs **write.md** (prompt file).

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
| `versions[].productId` | string (different case) |
| `collabs` | CollabOutput[] |
| `remarks` | RemarkOutput[] |

### Different Fields ⚠️

| Field | Official | Prompt File | Notes |
|-------|----------|-------------|-------|
| `responseType` | REQUIRED | ❌ Missing | Prompt lacks discriminator |
| `versions[].productId` | `productId` | `product_id` | camelCase vs snake_case |
| `versions[].newVersion` | Object wrapper | ❌ No wrapper | Prompt lacks nesting |
| `versions[].newVersion.contentTitle` | ✅ | ❌ Missing | ⚠️ MISSING |
| `versions[].content` | nested in `newVersion` | Direct | Different structure |
| `versions[].changeSummary` | `newVersion.changeSummary` | `change_summary` | Different nesting |
| `thinking` | ❌ Not in official | ✅ Has `approach`, `feedback_addressed`, `quality_check` | ➕ ADDED |

---

## Version Structure Comparison

### Official Structure
```typescript
versions: Array<{
  productId: string;
  newVersion: {
    contentTitle: string;    // Max 200 chars
    content: string;         // Min 50 chars
    changeSummary: string;
  };
}>;
```

### Prompt Structure
```typescript
versions: Array<{
  product_id: string;
  content: string;
  change_summary: string;
}>;
```

### Key Differences

| Aspect | Official | Prompt | Issue |
|--------|----------|--------|-------|
| Wrapper `newVersion` | ✅ | ❌ | Prompt flattens structure |
| `contentTitle` | ✅ Required | ❌ Missing | Lost in prompt |
| Nesting | 2 levels | 1 level | Structural mismatch |

---

## Summary

| Category | Count |
|----------|-------|
| Identical | 3 concepts |
| Different | 6 fields |
| Missing in prompt | 2 fields |
| Added in prompt | 3 fields (thinking) |

### Key Issues

1. **Missing `responseType` discriminator**
2. **Missing `newVersion` wrapper** — Prompt flattens version structure
3. **Missing `contentTitle`** — Required field in official
4. **Naming convention mismatch** — camelCase vs snake_case
