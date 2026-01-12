# Peer Review Schema Comparison

Comparing **system-schemas.md** (official) vs **peer_review.md** (prompt file).

---

## Response Types

| Feature | Official | Prompt File | Status |
|---------|----------|-------------|--------|
| `request_context` | ✅ | ✅ | ✅ MATCH |
| `halt` | ❌ | ❌ | ✅ CORRECT (not available) |
| `final_output` | ✅ | ✅ | ✅ MATCH |

---

## `final_output` Schema Comparison

### Official Schema
```typescript
{
  responseType: 'final_output';
  reviews: Array<{
    productId: string;
    versionId: string;
    assessment: 'approved' | 'needs_revision';
    summary: string;
  }>;
  collabs: CollabOutput[];
  remarks: RemarkOutput[];
}
```

### Prompt Schema
```typescript
{
  thinking: {
    review_approach: string;
    key_observations: string;
    integration_considerations: string;
  };
  collabs: Array<{
    about_product: string;
    about_version?: number;
    importance: 1-10;
    content: string;
    shortest_summary: string;
    references?: string[];
  }>;
  remarks?: Array<{...}>;
}
```

---

## Key Differences

| Field | Official | Prompt File | Status |
|-------|----------|-------------|--------|
| `responseType` | REQUIRED | ❌ Missing | ⚠️ MISSING |
| `reviews` | ✅ Required array | ❌ Not present | ⚠️ MISSING |
| `reviews[].productId` | ✅ | — | ⚠️ MISSING |
| `reviews[].versionId` | ✅ | — | ⚠️ MISSING |
| `reviews[].assessment` | ✅ | — | ⚠️ MISSING |
| `reviews[].summary` | ✅ | — | ⚠️ MISSING |
| `thinking` | ❌ Not in official | ✅ | ➕ ADDED |

---

## Collab Output Comparison

| Field | Official | Prompt File | Status |
|-------|----------|-------------|--------|
| `refersToProduct` | ✅ | `about_product` | ⚠️ DIFFERENT |
| `refersToVersion` | ✅ string | `about_version` number | ⚠️ TYPE MISMATCH |
| `importance` | ✅ | ✅ | ✅ MATCH |
| `comment` | ✅ | `content` | ⚠️ DIFFERENT |
| `shortestSummary` | ✅ | `shortest_summary` | ⚠️ camelCase vs snake_case |
| `referencesProductIds` | ✅ | `references` | ⚠️ DIFFERENT |
| `type` | ✅ | ❌ Missing | ⚠️ MISSING |
| `addresseeIds` | ✅ | ❌ Missing | ⚠️ MISSING |
| `respondingToCollabIds` | ✅ | ❌ Missing | ⚠️ MISSING |

---

## Summary

| Category | Count |
|----------|-------|
| Identical | 2 fields |
| Different | 6 fields |
| Missing in prompt | 7 fields |
| Added in prompt | 3 fields (thinking) |

### Key Issues

1. **Missing `responseType` discriminator**
2. **Missing entire `reviews` array** — Official requires product assessments
3. **Missing collab metadata** — `type`, `addresseeIds`, `respondingToCollabIds`
4. **Version ID type mismatch** — string vs number
