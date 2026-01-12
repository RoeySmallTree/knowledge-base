# UPLOADED_FILES

Optional section for files attached to the session.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Bootstrap ✓ (optional)

---

## Content (Aggregated)

```markdown
{{#if uploaded_files}}
## UPLOADED FILES

{{#each uploaded_files}}
- {{filename}}: {{description}}
{{/each}}
{{/if}}
```

---

## Content (Step File - Variations section)

```markdown
## With Uploaded Files

When the user has uploaded files, add:

## UPLOADED FILES

- requirements.pdf: Product requirements document
- wireframes.png: Initial UI wireframes
```

---

## Example

```markdown
## UPLOADED FILES

- requirements.pdf: Product requirements document
- wireframes.png: Initial UI wireframes
- brand-guidelines.md: Company branding standards
```

---

## Notes

- Only included when files are attached
- Filename + brief description format
- May include PDFs, images, documents
- Content may be extracted and injected elsewhere
