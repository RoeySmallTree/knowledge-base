# Presentation Schema Comparison

Comparing **system-schemas.md** (official) vs **presentation.md** (prompt file).

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
  messages: Array<{
    content: string;
    asAgent: string;
  }>;  // min: 1, max: 10
}
```

### Prompt Schema
```typescript
{
  thinking: {
    round_summary: string;
    key_highlights: string;
    communication_approach: string;
  };
  messages: Array<{
    author_id: string;
    content: string;
    highlights?: string[];
  }>;
}
```

---

## Key Differences

| Field | Official | Prompt File | Status |
|-------|----------|-------------|--------|
| `responseType` | REQUIRED | ❌ Missing | ⚠️ MISSING |
| `messages[].asAgent` | ✅ | `author_id` | ⚠️ DIFFERENT NAME |
| `messages[].content` | ✅ | ✅ | ✅ MATCH |
| `messages[].highlights` | ❌ | ✅ | ➕ ADDED |
| `thinking` | ❌ Not in official | ✅ | ➕ ADDED |
| Min/max constraints | 1-10 | ❌ Not specified | ⚠️ MISSING |

---

## Summary

| Category | Count |
|----------|-------|
| Identical | 1 field |
| Different | 2 fields |
| Missing in prompt | 2 details |
| Added in prompt | 4 fields |

### Key Issues

1. **Missing `responseType` discriminator**
2. **Field name difference** — `asAgent` vs `author_id`
3. **Added `highlights`** — Not in official schema
4. **Added `thinking`** — Not in official schema
5. **Missing constraints** — Official specifies 1-10 messages
