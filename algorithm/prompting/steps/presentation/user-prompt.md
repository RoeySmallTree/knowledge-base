# Presentation — User Prompt

User prompt assembled from user-segments for Presentation step.

---

## Segments Used

- `userKernel()` — Round, mission
- `team()` — Team members with characteristics
- `users()` — Human collaborators
- `productTree()` — Product tree JSON
- `whatHappened()` — Comprehensive round summary:
  - Chair actions
  - Operative updates
  - Watchdog findings
  - Key collabs
  - Products accepted/blocked
  - Pending user questions
- `requestedContext()` — If context iteration

---

## Assembled User Prompt

```markdown
## Session Overview

**Name:** {{sessionName}}  
**Round:** {{currentRound}}

### Mission

> {{mission}}

---

## Product Tree

```json
{{productTreeJson}}
```

---

## Your Team

Use each team member's characteristics to make their messages sound authentic.

{{#each members}}
### {{name}} (`{{tempId}}`) — {{teamRole}}

{{#if characteristics}}
**Characteristics:** {{professionalTraits}}, {{personalityTraits}}
{{/if}}

{{#if persona}}
**Persona:** {{persona}}
{{/if}}

{{#if role == 'watchdog'}}
_(Cannot be a speaker — findings come through operative responses)_
{{/if}}
{{#if role == 'envoy'}}
_(Cannot be a speaker — you are the narrator)_
{{/if}}

{{/each}}

---

## What Happened This Round

### Chair Actions ({{chairName}})
{{chairActions}}

### Operative Updates

{{#each operativeUpdates}}
**{{name}} ({{tempId}}) on {{products}}:**
{{#each updates}}
- {{update}}
{{/each}}
{{#if changeSummary}}
- Change: "{{changeSummary}}"
{{/if}}

{{/each}}

### Watchdog Findings ({{watchdogName}})

{{#each watchdogFindings}}
**{{productName}}:** {{verdict}}
{{#each findings}}
- {{severity}}: {{finding}}
{{/each}}

{{/each}}

### Key Collabs This Round

| From | On | Summary |
|------|-----|---------|
{{#each keyCollabs}}
| {{from}} | {{product}} | {{summary}} |
{{/each}}

### Products Accepted
{{productsAccepted}}

### Products Blocked
{{productsBlocked}}

### User Questions Pending
{{userQuestions}}

---

## Summary of Changes

- {{versionsCreated}} new versions
- {{collabsPosted}} collabs posted
- {{productsAccepted}} products accepted

---

## Valid Speaker IDs

Only these IDs can speak in your messages. Envoy and Watchdog cannot be speakers.

{{#each speakerMembers}}
- `{{tempId}}` → {{name}} ({{teamRole}})
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
| `userKernel()` | `step: 'presentation'` — mission, round only |
| `team()` | `step: 'presentation'`, includes: characteristics, persona |
| `users()` | `format: 'compact'` |
| `productTree()` | Full tree JSON |
| `whatHappened()` | Full round summary |
| `requestedContext()` | If context iteration active |

### Special: Speaker Filtering

`speakerMembers` excludes:
- Envoy (narrator)
- Watchdog (findings come through operatives)
