# Write — User Prompt

User prompt assembled from user-segments for Write step.

---

## Segments Used

- `userKernel()` — Round, mission, objectives
- `team()` — Team members (compact reference)
- `productTree()` — Product tree JSON
- `product()` — For each assigned product with:
  - `versionHistory()` — Version history
  - `collabs()` — Feedback to address
  - `content()` — Current content
  - `chairDirective()` — Chair's directive (structured format)
- `attachedContext()` — Related products for reference
- `remarks()` — Self-notes from earlier
- `requestedContext()` — If context iteration

---

## Assembled User Prompt

```markdown
## Round {{currentRound}}

**Mission:** {{mission}}

---

## Team Reference

{{#each members}}
- `{{tempId}}` → {{name}}{{#if isSelf}} ← you{{/if}}
{{/each}}

---

## Assigned Products

{{#each assignedProducts}}
### {{tempId}}: {{name}}
_{{type}} | {{status}} | v{{version}}_

**Definition of Done:** {{dod}}

#### Chair Directive (Round {{directiveRound}})
> {{directive.summary}}

**Importance:** {{directive.importance}}/10
**Objective:** {{directive.objective}}
**Why:** {{directive.why}}
**Context:** {{directive.context}}

#### Version History
| V | Author | Change |
|---|--------|--------|
{{#each versionHistory}}
| {{version}} | {{author}} | {{changeSummary}} |
{{/each}}

#### Current Content (v{{version}})
```
{{content}}
```

#### Feedback to Address
{{#each feedbackToAddress}}
- **{{id}}** ({{from}}, imp={{importance}}): {{summary}}
{{/each}}
{{#unless feedbackToAddress}}_(No feedback to address)_{{/unless}}

{{#if attachedContext}}
#### Attached Context

{{#each attachedContext}}
##### {{tempId}}: {{name}}
_Attached for: {{reason}}_

{{#if includeContent}}
```
{{content}}
```
{{/if}}
{{#if includeHistory}}
| V | Author | Change |
|---|--------|--------|
{{#each history}}
| {{version}} | {{author}} | {{changeSummary}} |
{{/each}}
{{/if}}
{{/each}}
{{/if}}

---
{{/each}}

{{#if selfNotes}}
## Self-Notes from Earlier

| Round | Note |
|-------|------|
{{#each selfNotes}}
| {{round}} | {{content}} |
{{/each}}
{{/if}}

{{#if requestedContext}}
## Requested Context

{{requestedContext}}

**You have {{remainingIterations}} context request iterations remaining.**

Now produce your final output.
{{/if}}
```

---

## Segment Configuration

| Segment | Options |
|---------|---------|
| `userKernel()` | `step: 'write'` — mission only, no objectives |
| `team()` | `step: 'write'`, format: compact |
| `productTree()` | Full tree JSON |
| `product()` | `step: 'write'`, includes: versionHistory, collabs, content, chairDirective |
| `chairDirective()` | `format: 'structured'` — full objective, dod, why, context |
| `collabs()` | `versionFilter: 'latest'`, `mode: 'toAddress'` |
| `attachedContext()` | Per directive's `attach_context` |
| `remarks()` | `mode: 'self'` — self-notes only |
| `requestedContext()` | If context iteration active |
