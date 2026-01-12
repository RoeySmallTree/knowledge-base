# CHECKLIST

Table of verification criteria the agent must satisfy before submitting output.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Bootstrap ✓
- Reflect ✓
- Plan & Assign ✓
- Write ✓
- Peer Review ✓
- Inspect ✓
- Presentation ✓ (as Do/Don't table)

---

## Pattern

```markdown
### CHECKLIST

| Check | Requirement |
|-------|-------------|
| {Check name} | {What must be true} |
...
```

---

## Variations by Step

### Bootstrap

```markdown
### CHECKLIST

| Check | Requirement |
|-------|-------------|
| Mission | Clear statement of what we're building/achieving |
| Objectives | 3-5 measurable success criteria |
| Constraints | Scope limits, if user specified any |
| Personas | Mission-specific focus for each team member |
| Domains | Clear responsibility and area for each operative |
| Meta-Products | Change Log (always), others if relevant |
```

### Reflect

```markdown
### CHECKLIST

| Check | Requirement |
|-------|-------------|
| DoD Assessment | Every criterion evaluated as met/unmet |
| Feedback Response | Every open collab addressed |
| History Review | Previous versions considered |
| Next Action | Specific improvement identified |
| Blockers | External dependencies flagged |
```

### Plan & Assign

```markdown
### CHECKLIST

| Check | Requirement |
|-------|-------------|
| Tree Coverage | All mission objectives have products |
| Acceptance | Only accept if DoD met AND no blocking collabs |
| New Products | All ADD ops have new_id, parent_id, product |
| Assignments | Only to operatives, with full directive |
| Directives | Must include OBJECTIVE, DOD, WHY, CONTEXT |
| Attachments | Relevant products attached to assignments |
| Meta-Products | Change Log updated |
```

### Write

```markdown
### CHECKLIST

| Check | Requirement |
|-------|-------------|
| DoD | Every criterion explicitly addressed |
| Feedback | All importance ≥8 collabs resolved |
| Directive | Chair's objective met |
| Format | Matches product type template |
| References | Valid [[type:id]] syntax |
```

### Peer Review

```markdown
### CHECKLIST

| Check | Requirement |
|-------|-------------|
| DoD | Product meets its Definition of Done? |
| Integration | Works with your domain products? |
| Quality | Meets mission standards? |
| Specificity | Feedback references exact sections |
```

### Inspect

```markdown
### CHECKLIST

| Check | Focus |
|-------|-------|
| Security | Auth, data exposure, injection risks |
| Completeness | All DoD criteria met |
| Coherence | Aligns with mission objectives |
| Integration | Works with peer products |
```

### Presentation (Do/Don't format)

```markdown
### RULES

| Do | Don't |
|----|-------|
| 1-2 sentences per message | Long paragraphs |
| Product NAMES not IDs | Technical jargon |
| Specific details | "Made improvements" |
| Natural reactions | "Hey team!", "Great job!" |
```

---

## Discrepancy

| Aspect | Aggregated | Step Files |
|--------|------------|------------|
| Plan & Assign | 6 items | 7 items (adds "New Products" check) |
| Inspect column header | "Requirement" | "Focus" |
| Presentation | Different format entirely | Uses "RULES" header with Do/Don't columns |

---

## Notes

- Checklist serves as pre-flight verification
- Agent should mentally check each item before submitting
- Keep items specific and verifiable
