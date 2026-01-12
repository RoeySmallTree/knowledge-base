# Bootstrap — User Prompt

User prompt assembled from user-segments for Bootstrap step.

---

## Segments Used

- `userKernel()` — Round, mission, objectives (skip — Bootstrap creates these)
- `team()` — Team members with configurable includes
- `users()` — Human collaborators
- `userRequest()` — The user's initial request

---

## Assembled User Prompt

```markdown
## Team

You will design personas for this team:

{{#each members}}
### {{name}} (`{{tempId}}`)

| Field | Value |
|-------|-------|
| Role | {{role}} |
| Team Role | {{teamRole}} |
| Expertise | {{expertise}} |
{{#if lifeStory}}
| Background | {{lifeStory}} |
{{/if}}

{{/each}}

---

## Users

Human collaborators in this session:

{{#each users}}
### {{name}} (`{{tempId}}`)

| Field | Value |
|-------|-------|
| Role | {{role}} |
{{#if context}}| Context | {{context}} |{{/if}}

{{/each}}

_Use `[[u:user-1]]` to reference users in content._

---

## User Request

> {{userRequest}}

{{#if userResponse}}
---

## User Response

You asked: "{{previousQuestion}}"

User answered: "{{userAnswer}}"

Continue with bootstrap using this information.
{{/if}}
```

---

## Segment Configuration

| Segment | Options |
|---------|---------|
| `team()` | `step: 'bootstrap'`, includes: name, role, teamRole, expertise, lifeStory |
| `users()` | `format: 'full'` — includes role and context |
| `userRequest()` | `step: 'bootstrap'` — includes userResponse conditional |
