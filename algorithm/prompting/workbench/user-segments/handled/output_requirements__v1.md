# OUTPUT_REQUIREMENTS

Lists what Bootstrap must output: personas and domains.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Bootstrap ✓

---

## Content (Aggregated)

```markdown
## OUTPUT REQUIREMENTS

**Personas needed** (for each team member):
{{#each team}}
- `{{id}}`: persona for {{name}}
{{/each}}

**Domains needed** (for operatives only):
{{#each operatives}}
- `{{id}}`: responsibility and area for {{name}}
{{/each}}
```

---

## Content (Step File)

```markdown
## OUTPUT REQUIREMENTS

**Personas needed**:
${persona_list}

**Domains needed**:
${domain_list}
```

---

## Example

```markdown
## OUTPUT REQUIREMENTS

**Personas needed**:
- `chair-1`: persona for Richard
- `watchdog-1`: persona for Marco
- `envoy-1`: persona for Stacy
- `operative-1`: persona for Alex
- `operative-2`: persona for Jordan

**Domains needed**:
- `operative-1`: responsibility and area for Alex
- `operative-2`: responsibility and area for Jordan
```

---

## Notes

- Personas needed for ALL team members
- Domains needed for OPERATIVES ONLY
- Serves as checklist for output completeness
