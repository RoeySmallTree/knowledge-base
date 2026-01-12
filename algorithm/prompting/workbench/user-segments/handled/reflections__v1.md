# REFLECTIONS

Summary of operative reflections for Chair to review.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Plan & Assign ✓

---

## Content (Aggregated)

```markdown
## REFLECTIONS THIS ROUND

{{#each reflections}}
### {{agent_name}} on {{product_name}}

> {{reflection_summary}}

**DoD Status:** {{dod_status}}
**Next Action:** {{next_version_delta}}
{{#if blockers}}**Blockers:** {{blockers}}{{/if}}

{{/each}}
```

---

## Content (Step File)

```markdown
## REFLECTIONS THIS ROUND

${reflections_sections}
```

---

## Example

```markdown
## REFLECTIONS THIS ROUND

### Alex on Technical Architecture (p4)

> Reviewed API spec and error format. Need to coordinate with Jordan on auth errors.

**DoD Status:** partially_met
**Next Action:** Add rate limiting documentation and unify error codes with auth specification
**Blockers:** None

### Jordan on Auth Specification (p5)

> Added token refresh mechanism. Addressing XSS concerns from Marco.

**DoD Status:** partially_met
**Next Action:** Switch to httpOnly cookies or document XSS mitigations
**Blockers:** None
```

---

## Notes

- Summarized from Reflect step outputs
- Shows what each operative plans to do
- DoD status guides acceptance decisions
- Blockers need Chair intervention
