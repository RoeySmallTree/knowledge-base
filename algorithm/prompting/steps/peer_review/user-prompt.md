# Peer Review — User Prompt

User prompt assembled from user-segments for Peer Review step.

---

## Segments Used

- `userKernel()` — Round, mission, objectives
- `team()` — Team members with team roles
- `member()` — Current member's expertise
- `productTree()` — Product tree JSON
- `product()` — For each product to review with:
  - `versionHistory()` — Latest version only
  - `content()` — Current content
  - `collabs()` — Existing collabs
  - `previousCollabs()` — Reviewer's own previous feedback
- `requestedContext()` — If context iteration

---

## Assembled User Prompt

```markdown
## Round {{currentRound}}

**Mission:** {{mission}}

---

## Team Reference

{{#each members}}
- `{{tempId}}` → {{name}} ({{teamRole}}){{#if isSelf}} ← you{{/if}}
{{/each}}

---

## Your Expertise

As **{{memberName}}** with expertise in **{{expertise}}**, review from this perspective.

---

## Products to Review

{{#each productsToReview}}
### {{tempId}}: {{name}}
_{{type}} | Owner: {{owner}} | v{{version}}_

**Definition of Done:** {{dod}}

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

#### Existing Collabs
{{#each existingCollabs}}
- **{{id}}** ({{from}}, imp={{importance}}): {{summary}}{{#if resolved}} ✓{{/if}}
{{/each}}
{{#unless existingCollabs}}_(No existing collabs)_{{/unless}}

{{#if previousFeedback}}
#### Your Previous Feedback
{{#each previousFeedback}}
- **{{id}}**: {{summary}}{{#if resolved}} ✓{{/if}}
{{/each}}
{{/if}}

---
{{/each}}

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
| `userKernel()` | `step: 'peer_review'` — mission only |
| `team()` | `step: 'peer_review'`, includes: teamRole |
| `member()` | For current operative — name, expertise |
| `productTree()` | Full tree JSON |
| `product()` | `step: 'peer_review'` |
| `versionHistory()` | Latest version only |
| `content()` | Full content |
| `collabs()` | All collabs on product |
| `previousCollabs()` | `authorId: currentMemberId` — own previous feedback |
| `requestedContext()` | If context iteration active |
