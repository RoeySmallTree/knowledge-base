# Reflect — User Prompt

User prompt assembled from user-segments for Reflect step.

---

## Segments Used

- `userKernel()` — Round, mission, objectives
- `team()` — Team members (compact reference)
- `productTree()` — Product tree JSON
- `product()` — For each owned product with:
  - `versionHistory()` — Version history
  - `collabs()` — Feedback on product
  - `content()` — Current content
  - `chairDirective()` — Chair's directive (simple format)
- `remarks()` — Remarks addressed to this operative
- `requestedContext()` — If context iteration

---

## Assembled User Prompt

```markdown
## Round {{currentRound}}

**Mission:** {{mission}}

**Objectives:** {{objectives}}

---

## Team Reference

{{#each members}}
- `{{tempId}}` → {{name}}{{#if isSelf}} ← you{{/if}}
{{/each}}

---

## Product Tree

```json
{{productTreeJson}}
```

---

## Your Products

{{#each ownedProducts}}
### {{tempId}}: {{name}}
_{{type}} | {{status}} | v{{version}}_

**Definition of Done:** {{dod}}

{{#if chairDirective}}
#### Chair Directive (Round {{directiveRound}})
> {{chairDirective}}
{{/if}}

#### Version History
| V | Author | Change |
|---|--------|--------|
{{#each versionHistory}}
| {{version}} | {{author}} | {{changeSummary}} |
{{/each}}

#### Unresolved Feedback
{{#each unresolvedFeedback}}
- **{{id}}** ({{author}}, imp={{importance}}): {{summary}}
{{/each}}
{{#unless unresolvedFeedback}}_(No unresolved feedback)_{{/unless}}

#### Current Content
```
{{content}}
```

---
{{/each}}

{{#if remarksForYou}}
## Remarks for You

| From | Type | Round | Note |
|------|------|-------|------|
{{#each remarksForYou}}
| {{from}} | {{type}} | {{round}} | {{content}} |
{{/each}}
{{/if}}

{{#if requestedContext}}
## Requested Context

You requested additional context. Here it is:

{{requestedContext}}

**You have {{remainingIterations}} context request iterations remaining.**

Now produce your final output.
{{/if}}
```

---

## Segment Configuration

| Segment | Options |
|---------|---------|
| `userKernel()` | `step: 'reflect'` |
| `team()` | `step: 'reflect'`, format: compact ID → Name |
| `productTree()` | Full tree JSON |
| `product()` | `step: 'reflect'`, includes: versionHistory, collabs, content, chairDirective |
| `chairDirective()` | `format: 'simple'` |
| `collabs()` | `versionFilter: 'latest'`, `statusFilter: 'unresolved'` |
| `remarks()` | `mode: 'forYou'` |
| `requestedContext()` | If context iteration active |
