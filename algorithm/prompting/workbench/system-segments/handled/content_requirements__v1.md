# CONTENT_REQUIREMENTS

Specific requirements for version content fields.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Write ✓ (step file only)

---

## Note

**This segment ONLY exists in step file, NOT in the aggregated file.**

---

## Content (Step File)

```markdown
## CONTENT REQUIREMENTS

| Field | Requirement |
|-------|-------------|
| title | < 200 chars |
| content | ≥ 50 chars, valid markdown |
| change_summary | Describes what changed, references addressed collabs |
| shortestSummary | ≤ 120 chars |
```

---

## Notes

- Title appears in product tree UI
- Content is the actual deliverable
- change_summary should reference `[[c:id]]` for addressed collabs
- Minimum content length ensures substantive work
