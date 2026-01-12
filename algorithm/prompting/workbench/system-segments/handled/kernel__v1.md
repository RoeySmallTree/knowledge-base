# KERNEL

Core absolute rules that apply to every step. This is the foundation of all system prompts.

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

## Content (Aggregated)

From `system-prompts__v1.md`:

```
{{KERNEL}}
```

This is a placeholder that gets replaced with the actual kernel content.

---

## Content (Step Files)

All step files have the KERNEL expanded inline. The content is **identical** across all steps:

```markdown
## ABSOLUTE RULES

1. **JSON Only** — Return valid JSON matching the schema. No markdown fences, no commentary.

2. **Valid IDs Only** — Use only IDs provided in context:
   - Products: from product tree (p1, p2...)
   - Versions: from version history (v1, v2...)
   - Collabs: from feedback lists (c1, c2...)
   - Agents: from team reference (chair-1, operative-1...)
   - Users: from user list (user-1, user-2...)
   Never invent IDs.

3. **No Guessing** — If required info is missing, request context or emit a halt/remark. Don't fabricate.

4. **This Step Only** — Execute only what this step requires. Don't do other steps' work.

5. **Escape Strings** — In JSON string fields, escape quotes as \" and newlines as \n.

6. **References** — Use [[type:id]] syntax for references:
   - [[p:p3]] — product
   - [[v:v5]] — version
   - [[c:c1]] — collab
   - [[a:operative-1]] — agent
   - [[u:user-1]] — user (human collaborator)
```

---

## Discrepancy

| Aspect | Aggregated | Step Files |
|--------|------------|------------|
| Format | Placeholder `{{KERNEL}}` | Expanded inline |

**Decision Needed:** Should KERNEL be a placeholder or inline text?

---

## Token Count

~170 tokens (from `common-system-parts__v1.md`)

---

## Notes

- KERNEL must appear at the **very beginning** of every system prompt
- These rules are non-negotiable and never change
- The agent ID line (`You are ${agent_id} in CABAL executing the ${step_name} step.`) is technically part of KERNEL but varies per step
