# FIELD_LIMITS

Table showing constraints on specific output fields (max length, min/max values, etc.)

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Bootstrap ✓ (step file only)
- Reflect ✓ (step file only)
- Plan & Assign ✓ (step file only)
- Write ✓ (step file only)
- Peer Review ✓ (step file only)
- Inspect ✓ (step file only)
- Presentation ✓ (step file only)

---

## Pattern

```markdown
## FIELD LIMITS

| Field | Constraint |
|-------|------------|
| {field_name} | {constraint} |
...
```

---

## Note

**This segment ONLY exists in step files, NOT in the aggregated file.**

The aggregated file has these constraints embedded in the SCHEMA.

---

## Variations by Step

### Bootstrap

```markdown
## FIELD LIMITS

| Field | Max Length |
|-------|------------|
| mission | 1000 chars |
| objectives | 500 chars |
| constraints | 300 chars |
| persona (each) | 200 chars |
| dod (each product) | 300 chars |
```

### Reflect

```markdown
## FIELD LIMITS

| Field | Constraint |
|-------|------------|
| context_requests | max 5 per request |
| shortestSummary | ≤120 chars |
| importance | 1-10 |
```

### Plan & Assign

```markdown
## FIELD LIMITS

| Field | Constraint |
|-------|------------|
| context_requests | max 5 per request |
| attach_context | max 3 per assignment |
| chair_versions | max 5 per round |
| importance | 1-10 |
```

### Write

```markdown
## FIELD LIMITS

| Field | Constraint |
|-------|------------|
| context_requests | max 5 per request |
| importance | 1-10 |
| shortestSummary | ≤ 120 chars |
| content | ≥ 50 chars |
```

### Peer Review

```markdown
## FIELD LIMITS

| Field | Constraint |
|-------|------------|
| context_requests | max 5 per request |
| importance | 1-10 |
| shortestSummary | ≤ 120 chars |
```

### Inspect

```markdown
## FIELD LIMITS

| Field | Constraint |
|-------|------------|
| context_requests | max 5 per request |
| severity | 1-10 |
| importance | 1-10 |
| shortestSummary | ≤ 120 chars |
```

### Presentation

```markdown
## FIELD LIMITS

| Field | Constraint |
|-------|------------|
| messages | 3-5 per round |
| content | 1-2 sentences |
| as_agent | chair or operative only |
```

---

## Notes

- Quick reference for LLM during generation
- Prevents common errors (too long, wrong type)
- More concise than embedding in schema
- Should match SCHEMA constraints exactly
