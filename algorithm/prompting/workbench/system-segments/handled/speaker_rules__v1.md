# SPEAKER_RULES

Defines who can appear as message speakers in presentation.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Presentation ✓

---

## Content

```markdown
### SPEAKER RULES

Allowed: chair-1, operative-1, operative-2, ...
Never: watchdog, envoy (you're the narrator)
```

---

## Speaker Constraints (Step File)

```markdown
## SPEAKER CONSTRAINTS

| Agent Type | Can Speak | Rationale |
|------------|-----------|-----------|
| chair-1 | ✓ Yes | Leads discussion |
| operative-N | ✓ Yes | Reports progress |
| watchdog-1 | ✗ No | Findings shown separately |
| envoy-1 | ✗ No | You're the narrator |
```

---

## Notes

- Envoy generates messages but doesn't appear as speaker
- Watchdog findings appear in separate UI, not chat
- Chair typically kicks off and wraps up discussion
- Operatives report their own progress
