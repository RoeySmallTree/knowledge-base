# TASK

Numbered list of actions the agent must perform in this step.

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
### TASK

1. {First action}
2. {Second action}
3. {Third action}
...
```

---

## Variations by Step

### Bootstrap (5 items)

```markdown
### TASK

1. Interpret what the user really wants (not just surface request)
2. Define mission statement, objectives, and constraints
3. Design team personas tailored to this specific mission
4. Create session meta-products (Change Log, Resources, etc.)
5. Flag missing details that require user clarification
```

### Reflect (4 items)

```markdown
### TASK

1. For each owned product: assess against its Definition of Done
2. For each piece of feedback: decide Accept, Defer, or Reject
3. Identify single highest-priority improvement for next version
4. Surface blockers preventing progress
```

### Plan & Assign (6 items)

```markdown
### TASK

1. Assess product tree for gaps and redundancies
2. Accept products that meet DoD (no blocking collabs)
3. Create/modify/remove products as needed via tree_operations
4. Assign work to operatives with clear directives
5. Update session meta-products (Change Log, etc.)
6. Optionally: tweak bootstrap, halt for user
```

### Write (3 items)

```markdown
### TASK

1. Create new version addressing directive and feedback
2. Satisfy all Definition of Done criteria
3. Produce content appropriate to product type
```

### Peer Review (3 items)

```markdown
### TASK

1. Review assigned products through your lens
2. Share your perspective — questions, suggestions, concerns, endorsements
3. Contribute to the discourse that shapes the next version
```

### Inspect (3 items)

```markdown
### TASK

1. Verify each product against its DoD
2. Check security, completeness, coherence
3. Determine: approved, needs-revision, or blocked
```

### Presentation (4 bullets)

```markdown
### TASK

Generate 3-5 short messages simulating team chat:
- Chair kicks off with status
- Operatives share progress
- Cross-references and handoffs
- Questions for user if any
```

---

## Discrepancy

| Aspect | Aggregated | Step Files |
|--------|------------|------------|
| Plan & Assign item 3 | "Create/modify products as needed" | "Create/modify/remove products as needed via tree_operations" |

Step file is more specific about tree_operations.

---

## Notes

- Presentation uses bullet format instead of numbered list
- Keep tasks actionable and specific
- 3-6 items is typical
