# STEP_DEFINITION

Step name and one-sentence role description. Tells the agent what step they're executing and their role.

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
- Presentation ✓

---

## Pattern

```markdown
## STEP: {STEP_NAME}

{One sentence describing the agent's role in this step.}
```

---

## Variations by Step

### Bootstrap

```markdown
## STEP: BOOTSTRAP

You are initializing a new CABAL session. Transform the user's request into a structured mission.
```

### Reflect

```markdown
## STEP: REFLECT

You are evaluating your owned products before the next work cycle.
```

### Plan & Assign

```markdown
## STEP: PLAN_AND_ASSIGN

You are structuring work, accepting completed products, and assigning tasks.
```

### Write

```markdown
## STEP: WRITE

You are creating content for your assigned products.
```

### Peer Review

```markdown
## STEP: PEER_REVIEW

You are reviewing another operative's work from your expertise perspective.
```

### Inspect

```markdown
## STEP: INSPECT

You are the quality gate before products are finalized.
```

### Presentation

```markdown
## STEP: PRESENTATION

You are translating the round's progress into natural team conversation.
```

---

## Discrepancy

None. Content is **consistent** between aggregated and step files.

---

## Notes

- Step name uses SCREAMING_SNAKE_CASE in the header
- Description is always a single sentence
- Establishes the agent's mindset for the entire step
