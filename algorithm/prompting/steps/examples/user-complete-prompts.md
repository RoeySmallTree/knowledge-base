# Assembled USER Prompts by Step

---

## Step 1: Bootstrap — USER PROMPT

**Actor:** Chair

```
## The User's Request

> {{rawUserPrompt}}

---

## Your Team

These are the team members you'll be working with. Use their backgrounds to craft mission-specific personas.

{{#each members}}
### {{member.name}} ({{member.id}})

**Role:** {{member.role}} / {{member.team_role}}
{{#if member.characteristics.professional.length > 0}}
**Expertise:** {{join member.characteristics.professional ", "}}
{{/if}}
{{#if member.characteristics.personality_style.length > 0}}
**Style:** {{join member.characteristics.personality_style ", "}}
{{/if}}
{{#if member.life_story}}
**Background:** {{member.life_story}}
{{/if}}

{{/each}}

---

## Output Requirements

Your response must include personas for each team member and domains for each operative.

**Personas needed** (for `personas`):
{{#each members}}
- `"{{member.id}}"`: persona for {{member.name}}
{{/each}}

**Domains needed** (for `operativeDomains` — operatives only):
{{#each operatives}}
- `"{{operative.id}}"`: responsibility and area for {{operative.name}}
{{/each}}
```

---

## Step 2: Reflect — USER PROMPT

**Actor:** Each Operative (runs per operative)

```
## Mission

> {{session.mission_charter}}

## Objectives

> {{session.underlying_objectives}}

---

## Product Tree

{{#renderProductTree root_id highlightOwnedBy=currentMember.id}}
### {{product.name}} `{{product.id}}`
- **Type:** {{product.type}}
- **Status:** {{product.status}}
- **Owner:** {{product.owner_id}}
- **DoD:** {{product.definition_of_done}}
{{#if isHighlighted}}← **YOUR PRODUCT**{{/if}}
{{/renderProductTree}}

---

## Context

**Round:** {{session.current_round}}

### Team

{{#each members}}
### {{member.name}}

| Field | Value |
|-------|-------|
| **ID** | `{{member.id}}` |
| **Role** | {{member.role}} |
| **Team Role** | {{member.team_role}} |
| **Responsibility** | {{#if member.operative_responsibility}}{{member.operative_responsibility}}{{else}}{{#if member.role == 'operative'}}*Not assigned*{{else}}—{{/if}}{{/if}} |

{{/each}}

---

{{#each ownedProducts}}
## Your Product: {{product.name}}

| Field | Value |
|-------|-------|
| **ID** | `{{product.id}}` |
| **Type** | {{product.type}} |
| **Status** | {{product.status}} |
| **DoD** | {{product.definition_of_done}} |

### Chair Directives

{{#if chairDirectives.length > 0}}
{{#each chairDirectives}}
**Round {{session.current_round}}:** "{{directive.content}}" (importance: {{directive.importance}})
- Status: {{#if directive.resolved}}Fulfilled{{else}}Pending{{/if}}

{{/each}}
{{else}}
*No directives yet.*
{{/if}}

### Version History

{{#each versions sorted_by=version_number}}
{{#if collabsBeforeVersion.length > 0}}
#### Feedback Before V{{version.version_number}}

{{#each collabsBeforeVersion}}
> **{{authorName}}**: "{{collab.content}}" — importance {{collab.importance}}
> *Collab ID: `{{collab.id}}`*

{{/each}}
{{/if}}

#### V{{version.version_number}} by You

{{#if version.last_directive}}
**Directive:** "{{version.last_directive.content}}"
{{/if}}
**Change:** {{version.change_summary}}
{{#if version.id == product.selected_version_id}}
✅ *Selected by Chair*
{{/if}}

{{/each}}

### Current Content (V{{latestVersion.version_number}})

{{latestVersion.content}}

### Feedback on Current Version

{{#if latestCollabs.length > 0}}
{{#each latestCollabs}}
**[{{#if collab.resolved}}✓ Resolved{{else}}◯ Open{{/if}}]** **{{authorName}}** (importance: {{collab.importance}})
> "{{collab.content}}"
> *Collab ID: `{{collab.id}}`*

{{/each}}
{{else}}
*No feedback yet.*
{{/if}}

{{/each}}

---

## Peer Products

For context, here's what your teammates are working on:

{{#each peerProducts}}
### {{product.name}} ({{ownerName}})

- **Status:** {{product.status}}
- **Latest:** V{{latestVersion.version_number}} — {{latestVersion.change_summary}}

{{/each}}

---

{{#if remarksForMember.length > 0}}
## Remarks From Team

{{#each remarksForMember}}
**From {{authorName}}** ({{remark.type}}){{#if remark.is_blocker}} ⚠️ BLOCKER{{/if}}

> {{remark.content}}

{{/each}}
{{/if}}
```

---

## Step 3: Plan & Assign — USER PROMPT

**Actor:** Chair

```
## Mission

> {{session.mission_charter}}

*Can be modified via `bootstrapOverrides.mission` if scope needs adjustment.*

## Objectives

> {{session.underlying_objectives}}

*Can be modified via `bootstrapOverrides.objectives` if priorities change.*

---

## Current State

**Round:** {{session.current_round}}

### Team

{{#each members}}
| Agent | Role | Team Role | Owned Products | Pending |
|-------|------|-----------|----------------|---------|
{{#each members}}
| {{member.name}} (`{{member.id}}`) | {{member.role}} | {{member.team_role}} | {{member.owned_products_count}} | {{member.owned_pending_products_count}} |
{{/each}}
{{/each}}

### Product Tree

{{#if root_id}}
{{#renderProductTree root_id includes=[name, type, status, owner, summary, latestVersion]}}
### {{product.name}} `{{product.id}}`
- **Type:** {{product.type}}
- **Status:** {{product.status}}
- **Owner:** {{ownerName}}
- **Summary:** {{product.summary}}
- **Latest Version:** V{{latestVersion.version_number}} — {{latestVersion.change_summary}}
{{/renderProductTree}}
{{else}}
*No products yet — this is Bootstrap/Round 1.*
{{/if}}

---

## What Changed This Round

{{#if changedProducts.length > 0}}
{{#each changedProducts}}
- **{{product.name}}** ({{product.id}}): {{changeType}}
{{/each}}
{{else}}
No changes from prior round.
{{/if}}

---

## Operative Reflections

{{#if operativeReflections.length > 0}}
{{#each operativeReflections}}
### {{member.name}} on {{product.name}}

> {{reflection_note.note}}
{{#if reflection_note.severity > 0}}
> *Severity: {{reflection_note.severity}}/10*
{{/if}}
{{#if reflection_note.is_addressed}}
> *Status: Addressed*
{{/if}}

{{/each}}
{{else}}
*No reflections yet.*
{{/if}}

---

## Feedback & Collabs

{{#if openCollabs.length > 0}}
**Open ({{openCollabs.length}}):**

{{#each openCollabs}}
**{{authorName}}** → {{productName}} (importance: {{collab.importance}})
> "{{collab.content}}"
> Summary: {{collab.shortest_summary}}
> *Collab ID: `{{collab.id}}`*

{{/each}}
{{/if}}

{{#if resolvedCollabs.length > 0}}
**Resolved ({{resolvedCollabs.length}}):**

{{#each resolvedCollabs}}
[✓ RESOLVED] **{{authorName}}** → {{productName}}
{{/each}}
{{/if}}

{{#if openCollabs.length == 0 && resolvedCollabs.length == 0}}
*No feedback yet.*
{{/if}}

---

{{#if pendingProducts.length > 0}}
## Products Pending Acceptance

{{#each pendingProducts}}
### {{product.name}} `{{product.id}}`

- **Type:** {{product.type}}
- **Owner:** {{ownerName}}
- **DoD:** {{product.definition_of_done}}
- **Latest Version:** V{{latestVersionNumber}}
- **Open collabs:** {{openCollabCount}} | **Blocking:** {{blockingCollabCount}}

{{#if blockingCollabCount > 0}}
⚠️ Has blocking collabs — address before accepting.
{{else}}
✅ No blockers — ready for acceptance.
{{/if}}

{{/each}}
{{/if}}

---

{{#if remarksForMember.length > 0}}
## Remarks From Team

{{#each remarksForMember}}
**From {{authorName}}** ({{remark.type}}){{#if remark.is_blocker}} ⚠️ BLOCKER{{/if}}

> {{remark.content}}

{{/each}}
{{/if}}
```

---

## Step 4: Write — USER PROMPT

**Actor:** Each Operative (runs per operative for assigned products)

```
## Mission

> {{session.mission_charter}}

## Objectives

> {{session.underlying_objectives}}

---

## Product Tree

{{#renderProductTree root_id highlightOwnedBy=currentMember.id}}
### {{product.name}} `{{product.id}}`
- **Type:** {{product.type}}
- **Status:** {{product.status}}
- **Owner:** {{product.owner_id}}
- **DoD:** {{product.definition_of_done}}
{{#if isHighlighted}}← **YOUR PRODUCT**{{/if}}
{{/renderProductTree}}

---

## Context

**Round:** {{session.current_round}}

### Team

{{#each members}}
### {{member.name}}

| Field | Value |
|-------|-------|
| **ID** | `{{member.id}}` |
| **Role** | {{member.role}} |
| **Team Role** | {{member.team_role}} |
| **Responsibility** | {{#if member.operative_responsibility}}{{member.operative_responsibility}}{{else}}{{#if member.role == 'operative'}}*Not assigned*{{else}}—{{/if}}{{/if}} |

{{/each}}

---

{{#each assignedProducts}}
## Your Assignment: {{product.name}}

**ID:** `{{product.id}}`  
**Type:** {{product.type}}  
**Definition of Done:** {{product.definition_of_done}}

{{#if previousVersions.length > 0}}
### Previous Versions

{{#each previousVersions sorted_by=version_number}}
#### V{{version.version_number}} by {{authorName}}

**Change Summary:** {{version.change_summary}}
{{#if version.reflection_note}}
**Your Reflection:** {{version.reflection_note.note}}
{{/if}}

{{/each}}
{{/if}}

{{#if latestVersion}}
### Current Content (V{{latestVersion.version_number}})

{{latestVersion.content}}

### What Changed

{{latestVersion.change_summary}}
{{/if}}

{{#if peerFeedback.length > 0}}
### Peer Feedback

{{#each peerFeedback}}
**{{authorName}}** (importance: {{collab.importance}}) {{#if collab.resolved}}[Resolved]{{else}}[Open]{{/if}}
> "{{collab.content}}"
> *Collab ID: `{{collab.id}}`*

{{/each}}
{{/if}}

{{#if reflectionNote}}
### Your Reflection

> {{reflectionNote.note}}
{{#if reflectionNote.severity > 0}}
> *Severity: {{reflectionNote.severity}}/10*
{{/if}}
{{/if}}

{{#if chairDirective}}
### Chair's Directive

**Importance:** {{chairDirective.importance}}

> {{chairDirective.content}}

{{#if chairDirective.referencesProductIds.length > 0}}
**References:** {{#each chairDirective.referencesProductIds}}`{{this}}`{{#unless @last}}, {{/unless}}{{/each}}
{{/if}}
{{/if}}

---

{{/each}}

{{#if remarksForMember.length > 0}}
## Remarks From Team

{{#each remarksForMember}}
**From {{authorName}}** ({{remark.type}}){{#if remark.is_blocker}} ⚠️ BLOCKER{{/if}}

> {{remark.content}}

{{/each}}
{{/if}}
```

---

## Step 5: Peer Review — USER PROMPT

**Actor:** Each Operative (reviews others' products)

```
## Mission

> {{session.mission_charter}}

## Objectives

> {{session.underlying_objectives}}

---

## Product Tree

{{#renderProductTree root_id highlightOwnedBy=currentMember.id}}
### {{product.name}} `{{product.id}}`
- **Type:** {{product.type}}
- **Status:** {{product.status}}
- **Owner:** {{product.owner_id}}
{{#if isHighlighted}}← **YOUR PRODUCT**{{/if}}
{{/renderProductTree}}

---

## Your Perspective

**Round:** {{session.current_round}}

You are reviewing as **{{currentMember.team_role}}**. Focus on how this product integrates with your domain.

---

{{#each reviewProducts}}
## Product to Review: {{product.name}}

| Field | Value |
|-------|-------|
| **ID** | `{{product.id}}` |
| **Type** | {{product.type}} |
| **Author** | {{authorName}} ({{product.owner_id}}) — {{authorMember.team_role}} |
| **DoD** | {{product.definition_of_done}} |
| **Version** | {{latestVersion.version_number}} |

### Content

{{#if latestVersion.content}}
{{latestVersion.content}}
{{else}}
*No content yet.*
{{/if}}

### Author's Change Summary

{{#if latestVersion.change_summary}}
{{latestVersion.change_summary}}
{{else}}
*No summary.*
{{/if}}

---

{{/each}}

{{#if remarksForMember.length > 0}}
## Remarks From Team

{{#each remarksForMember}}
**From {{authorName}}** ({{remark.type}}){{#if remark.is_blocker}} ⚠️ BLOCKER{{/if}}

> {{remark.content}}

{{/each}}
{{/if}}
```

---

## Step 6: Inspection — USER PROMPT

**Actor:** Watchdog

```
## Mission

> {{session.mission_charter}}

## Objectives

> {{session.underlying_objectives}}

---

## Product Tree

{{#renderProductTree root_id}}
### {{product.name}} `{{product.id}}`
- **Type:** {{product.type}}
- **Status:** {{product.status}}
- **Owner:** {{ownerName}}
{{/renderProductTree}}

---

## Context

**Round:** {{session.current_round}}

### Team

{{#each members}}
### {{member.name}}

| Field | Value |
|-------|-------|
| **ID** | `{{member.id}}` |
| **Role** | {{member.role}} |
| **Team Role** | {{member.team_role}} |
| **Responsibility** | {{#if member.operative_responsibility}}{{member.operative_responsibility}}{{else}}{{#if member.role == 'operative'}}*Not assigned*{{else}}—{{/if}}{{/if}} |

{{/each}}

---

{{#each productsToInspect}}
## Product to Inspect: {{product.name}}

| Field | Value |
|-------|-------|
| **ID** | `{{product.id}}` |
| **Type** | {{product.type}} |
| **Owner** | {{ownerName}} (`{{product.owner_id}}`) |
| **Status** | {{product.status}} |

### Definition of Done

{{product.definition_of_done}}

### Version History

{{#each versions sorted_by=version_number}}
#### V{{version.version_number}} by {{authorName}}

{{#if version.directive}}
**Directive:** {{version.directive}}
{{/if}}
**Change:** {{version.change_summary}}
{{#if version.id == product.selected_version_id}}
✅ *Selected for Review*
{{/if}}

{{/each}}

### Content to Review (V{{selectedVersion.version_number}})

{{#if selectedVersion.content}}
{{selectedVersion.content}}
{{else}}
*No content yet.*
{{/if}}

### Peer Feedback Already Received

{{#if productCollabs.length > 0}}
{{#each productCollabs}}
> **{{authorName}}** (importance: {{collab.importance}}): "{{collab.content}}"

{{/each}}
{{else}}
*No peer feedback yet.*
{{/if}}

### Related Products

{{#if relatedProducts.length > 0}}
{{#each relatedProducts}}
- **{{product.name}}** ({{ownerName}}): {{product.status}} — {{#if selectedVersion}}V{{selectedVersion.version_number}}{{else}}No version yet{{/if}}
{{/each}}
{{else}}
*No related products.*
{{/if}}

---

{{/each}}

{{#if remarksForMember.length > 0}}
## Remarks From Team

{{#each remarksForMember}}
**From {{authorName}}** ({{remark.type}}){{#if remark.is_blocker}} ⚠️ BLOCKER{{/if}}

> {{remark.content}}

{{/each}}
{{/if}}
```

---

## Step 7: Presentation — USER PROMPT

**Actor:** Envoy

```
## Session Overview

**Name:** {{session.name}}  
**Round:** {{session.current_round}}

### Mission

> {{#if session.mission_charter}}{{session.mission_charter}}{{else}}*No mission charter yet.*{{/if}}

---

## Product Tree

{{#renderProductTree root_id}}
### {{product.name}} `{{product.id}}`
- **Type:** {{product.type}}
- **Status:** {{product.status}}
- **Owner:** {{ownerName}}
{{/renderProductTree}}

---

## Your Team

Use each team member's characteristics to make their messages sound authentic.

{{#each members}}
### {{member.name}} (`{{member.id}}`) — {{member.team_role}}

{{#if member.characteristics}}
**Characteristics:** {{flatten member.characteristics.professional}}, {{flatten member.characteristics.personality_style}}
{{/if}}

{{#if member.custom_persona_prompt}}
**Persona:** {{member.custom_persona_prompt}}
{{/if}}

{{#if member.role == 'watchdog'}}
*(Cannot be a speaker — findings come through operative responses)*
{{/if}}
{{#if member.role == 'envoy'}}
*(Cannot be a speaker — you are the narrator)*
{{/if}}

{{/each}}

---

## Round {{session.current_round}} Events

### New Versions Created

{{#if recentVersions.length > 0}}
{{#each recentVersions}}
- **{{product.name}}** V{{version.version_number}} by {{authorName}}
  - {{version.change_summary}}

{{/each}}
{{else}}
*No new versions this round.*
{{/if}}

### Feedback Posted

{{#if recentCollabs.length > 0}}
{{#each recentCollabs}}
- **{{authorName}}** → {{product.name}} (importance: {{collab.importance}})
  - "{{collab.shortest_summary}}"{{#if collab.resolved}} — *Resolved*{{/if}}

{{/each}}
{{else}}
*No collabs this round.*
{{/if}}

### Products Accepted

{{#if acceptedProducts.length > 0}}
{{#each acceptedProducts}}
- ✅ **{{product.name}}** accepted (V{{selectedVersion.version_number}})
{{/each}}
{{else}}
*No products accepted this round.*
{{/if}}

### Decisions Made

{{#if decisions.length > 0}}
{{#each decisions}}
- **{{product.name}}**: {{#if product.summary}}{{product.summary}}{{else}}Decision finalized{{/if}}
{{/each}}
{{else}}
*No decisions finalized this round.*
{{/if}}

### Blockers & Questions

{{#if session.missing_details.length > 0}}
{{#each session.missing_details}}
❓ **QUESTION:** {{this}}

{{/each}}
{{else}}
*No blockers.*

*No questions for user.*
{{/if}}

### Assignments Made

{{#if pendingProducts.length > 0}}
{{#each pendingProducts limit=3}}
- **{{product.name}}** → {{ownerName}}
{{/each}}
{{else}}
*No new assignments.*
{{/if}}

---

## Summary of Changes

- {{versionsCreated}} new versions
- {{collabsPosted}} collabs posted
- {{productsAccepted}} products accepted

---

{{#if allRemarks.length > 0}}
## Team Remarks

{{#each allRemarks}}
**{{authorName}}** → {{#each remark.recipients}}`{{this}}`{{#unless @last}}, {{/unless}}{{/each}} ({{remark.type}}){{#if remark.is_blocker}} ⚠️ BLOCKER{{/if}}

> {{remark.content}}

{{/each}}
{{/if}}

---

## Valid Speaker IDs

Only these IDs can speak in your messages. Envoy and Watchdog cannot be speakers.

{{#each speakerMembers}}
- `{{member.id}}` → {{member.name}} ({{member.team_role}}){{#if member.characteristics}} — {{flatten member.characteristics}}{{/if}}
{{/each}}
```

---

## Summary: User Prompt Content by Step

| Step | Key Sections in User Prompt |
|------|----------------------------|
| **Bootstrap** | User's request, Team roster with backgrounds, Output requirements |
| **Reflect** | Mission, Objectives, Product tree, Team context, Owned products with versions & feedback, Peer products, Remarks |
| **PlanAssign** | Mission (modifiable), Objectives (modifiable), Current state, Team roster, Product tree, What changed, Operative reflections, Feedback & collabs, Products pending acceptance, Remarks |
| **Write** | Mission, Objectives, Product tree, Team context, Assigned products with full work history (versions, feedback, reflection, directive), Remarks |
| **PeerReview** | Mission, Objectives, Product tree, Reviewer perspective, Products to review (content + change summary), Remarks |
| **Inspection** | Mission, Objectives, Product tree, Team context, Products to inspect (DoD, version history, content, peer feedback, related products), Remarks |
| **Presentation** | Session overview, Product tree, Team with characteristics, Round events (versions, feedback, accepted, decisions, blockers, assignments), Summary stats, Team remarks, Valid speaker IDs |