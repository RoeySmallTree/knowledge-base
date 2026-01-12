# Plan & Assign — User Prompt

User prompt assembled from user-segments for Plan & Assign step.

---

## Segments Used

- `userKernel()` — Round, mission, objectives
- `sessionParameters()` — Operative domains
- `team()` — Team roster with owned products
- `users()` — Human collaborators (compact format)
- `productTree()` — Product tree JSON
- `roundProducts()` — Pending products with details
- `collabs()` — High-priority open collabs
- `previousCollabs()` — Collabs from operatives
- `remarks()` — Remarks for chair
- `userRequest()` — User response if halted
- `requestedContext()` — If context iteration

---

## Assembled User Prompt

```markdown
## Round {{currentRound}}

**Mission:** {{mission}}

**Objectives:** {{objectives}}

{{#if constraints}}**Constraints:** {{constraints}}{{/if}}

---

## Team Reference

{{#each members}}
- `{{tempId}}` → {{name}} ({{role}}){{#if isSelf}} ← you{{/if}}
{{/each}}

---

## Users

{{#each users}}
- `{{tempId}}` → {{name}}{{#if role}} ({{role}}){{/if}}
{{/each}}

---

## Session Parameters

**Operative Domains:**
{{#each operativeDomains}}
- **{{operativeId}}:** {{responsibility}} — {{area}}
{{/each}}

---

## Product Tree

```json
{{productTreeJson}}
```

---

## Pending Products

{{#each pendingProducts}}
### {{tempId}}: {{name}}
_{{type}} | Owner: {{owner}} | v{{version}}_

**Definition of Done:** {{dod}}

{{#if latestReflection}}
#### Latest Reflection
> {{latestReflection}}
{{/if}}

{{#if lastDirective}}
#### Last Directive
- {{lastDirective}}
{{/if}}

#### Previous Collabs on This Product
{{#each previousCollabs}}
- ({{from}}, imp={{importance}}): {{summary}}
{{/each}}
{{#unless previousCollabs}}_(No previous collabs)_{{/unless}}

---
{{/each}}

{{#if highPriorityCollabs}}
## High-Priority Collabs (importance ≥7)

{{#each highPriorityCollabs}}
- **{{id}}** on {{product}}: ({{from}}, imp={{importance}}): {{summary}}
{{/each}}
{{/if}}

{{#if remarksForChair}}
## Remarks for You

{{#each remarksForChair}}
- **{{from}}** ({{type}}): {{content}}
{{/each}}
{{/if}}

{{#if userResponse}}
## User Response

You asked: "{{previousQuestion}}"

User answered: "{{userAnswer}}"

Continue with planning using this information.
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
| `userKernel()` | `step: 'plan_assign'` |
| `sessionParameters()` | Operative domains from bootstrap |
| `team()` | `step: 'plan_assign'`, includes owned count |
| `users()` | `format: 'compact'` — ID → Name (Role) |
| `productTree()` | Full tree JSON |
| `roundProducts()` | `filter: 'pending'`, includes reflection, directive |
| `collabs()` | `importanceThreshold: 7`, `statusFilter: 'unresolved'` |
| `previousCollabs()` | Per-product, from operatives |
| `remarks()` | `mode: 'forYou'`, recipient: chair |
| `userRequest()` | `step: 'plan_assign'` — userResponse only |
| `requestedContext()` | If context iteration active |
