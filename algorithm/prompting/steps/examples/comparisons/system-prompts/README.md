# System Prompt Comparisons

Comparing **simplified** prompts in step folders vs **comprehensive** versions in `examples/system-prompts.md`.

---

## Global Findings

Issues appearing across **all steps**:

| Issue | Description |
|-------|-------------|
| **Missing `responseType`** | All simplified prompts lack the discriminator |
| **Missing identity templates** | No `{{identity}}`, `{{CABAL_IDENTITY}}` |
| **Missing empowerment** | No `{{AGENT_EMPOWERMENT}}`, `{{TONE_ETHOS}}` |
| **Missing Valid IDs** | No `{{renderValidIds}}` section |
| **Missing frameworks** | Comprehensive has N-point structured frameworks |
| **Missing mistakes section** | No ⚠️ Common Mistakes guidance |
| **Naming convention** | snake_case in simplified vs camelCase in comprehensive |

---

## Per-Step Summary

| Step | Simplified Lines | Comprehensive Lines | Key Gap |
|------|-----------------|---------------------|---------|
| Bootstrap | ~110 | ~250 | 5-Point Framework, Mission Charter format |
| Reflect | ~130 | ~200 | 7-Point Reflection Script |
| Plan & Assign | ~180 | ~300 | 6-Point Framework, Directive format |
| Write | ~130 | ~250 | Structure by Type, Self-Check |
| Peer Review | ~120 | ~165 | `reviews` array, When to Collab guidance |
| Inspect | ~113 | ~150 | 6-Point Inspection Framework |
| Presentation | ~90 | ~150 | Conversation Formula, Style Guide |

---

## Critical Schema Gaps

| Step | Missing Fields |
|------|----------------|
| Bootstrap | `responseType`, `missingDetails`, halt `type`/`options` |
| Reflect | `responseType` |
| Plan & Assign | `responseType`, `acceptance` array, ACTION names differ |
| Write | `responseType`, `newVersion` wrapper, `contentTitle` |
| Peer Review | `responseType`, entire `reviews` array, collab `type` |
| Inspect | `responseType`, `versionId`, `verdict` vs `assessment` |
| Presentation | `responseType`, message constraints (1-10) |

---

## Files

- [bootstrap.md](./bootstrap.md) — Bootstrap comparison
- [reflect.md](./reflect.md) — Reflect comparison
- [plan_assign.md](./plan_assign.md) — Plan & Assign comparison
- [write.md](./write.md) — Write comparison
- [peer_review.md](./peer_review.md) — Peer Review comparison
- [inspect.md](./inspect.md) — Inspect comparison
- [presentation.md](./presentation.md) — Presentation comparison

---

## Recommendation

To align simplified prompts with comprehensive:

1. **Add `responseType`** to all output schemas
2. **Use camelCase** for field names
3. **Add N-point frameworks** from comprehensive versions
4. **Add Common Mistakes** sections
5. **Fix schema gaps** per step (see table above)
6. **Consider extracting templates** (`{{kernel}}`, `{{identity}}`, etc.)
