# Inspect — User Prompt

User prompt assembled from user-segments for Inspect step.

---

## Segments Used

- `userKernel()` — Round, mission, objectives
- `team()` — Team members with roles
- `productTree()` — Product tree JSON
- `product()` — For each product to inspect with:
  - `versionHistory()` — Full version history
  - `content()` — Content to review
  - `collabs()` — Peer feedback already received
- `requestedContext()` — If context iteration

---

## Assembled User Prompt

```markdown
## Round {{currentRound}}

**Mission:** {{mission}}

---

## Team Reference

{{#each members}}
- `{{tempId}}` → {{name}} ({{role}}){{#if isSelf}} ← you{{/if}}
{{/each}}

---

## Products to Inspect

{{#each productsToInspect}}
### {{tempId}}: {{name}}
_{{type}} | Owner: {{owner}} | v{{version}}_

**Definition of Done:**
{{dod}}

#### DoD Criteria Checklist
{{#each dodCriteria}}
- [ ] {{criterion}}
{{/each}}

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

#### Peer Feedback Already Received
{{#each peerFeedback}}
- **{{id}}** ({{from}}, imp={{importance}}): {{summary}}
{{/each}}
{{#unless peerFeedback}}_(No peer feedback yet)_{{/unless}}

{{#if previousFindings}}
#### Previous Findings (addressed)
{{#each previousFindings}}
- **{{id}}**: {{issue}} → {{resolution}}
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
| `userKernel()` | `step: 'inspect'` — mission only |
| `team()` | `step: 'inspect'`, includes: role |
| `productTree()` | Full tree JSON |
| `product()` | `step: 'inspect'` |
| `versionHistory()` | Full history |
| `content()` | Selected version's content |
| `collabs()` | All collabs — peer review feedback |
| `requestedContext()` | If context iteration active |

### Special: DoD Criteria Extraction

The `dodCriteria` array is extracted by parsing the product's `definition_of_done` string:
- Split by newlines or numbered list patterns
- Each line becomes a checkbox item
