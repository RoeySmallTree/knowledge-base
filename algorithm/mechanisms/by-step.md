# Algorithm Steps Flow

> Step-by-step guide through the Cabal execution loop, detailing what each step does, who performs it, and what mechanisms it uses.

---

## Overview

The algorithm executes in **Rounds**. Each round flows through these steps in sequence:

```
Bootstrap → Reflect → Plan & Assign → Write → Peer Review → Inspect → Presentation
   (R0)      (R1+)       (R1+)        (R1+)      (R1+)        (R1+)       (R1+)
```

---

## Phase A: Strategy & Alignment

### 1. Bootstrap

> **Genesis step — runs only in Round 0**

| Field | Value |
|-------|-------|
| **Actor** | Chair |
| **Purpose** | Transform user's raw request into a structured mission with a tailored team |
| **Trigger** | Session initialization |

#### Responsibilities
1. **Interpret** the user's request — understand underlying intent
2. **Define** mission statement, objectives, and constraints
3. **Design** team personas tailored to mission needs
4. **Create** initial products (meta-products like Change Log, roadmap)
5. **Identify** missing information → can `halt` to ask user

#### Outputs
- Mission statement and objectives
- Persona definitions for each operative
- Operative domains (responsibility + area)
- Initial product tree structure

#### Mechanisms Used
| Mechanism | How Used |
|-----------|----------|
| **Product** | Creates initial products with DoD and ownership |
| **Halt** | Pauses to ask user for critical missing info |

#### Output Alternatives
- `final_output` — Complete bootstrap with mission, team, products
- `halt` — Request clarification from user

---

### 2. Reflect

> **Context gathering — operatives assess their situation before acting**

| Field | Value |
|-------|-------|
| **Actor** | Operatives (each independently) |
| **Purpose** | Analyze current state, identify blockers, prepare notes for planning |
| **Trigger** | Start of each round (R1+) |

#### Responsibilities
1. **Assess** owned products — what's working, what isn't
2. **Review** unresolved feedback from peers
3. **Create** collabs on other products where insights exist
4. **Note** improvements needed for Chair's consideration
5. **Flag** blockers that require Chair attention

#### Receives
- Mission and objectives
- Product tree overview
- Owned products with content, version history, unresolved feedback
- Remarks addressed to self

#### Mechanisms Used
| Mechanism | How Used |
|-----------|----------|
| **Collab** | Creates feedback on own or others' products |
| **Remark** | Notes to self, team, or specific agents |
| **Reflection** | Internal analysis captured in thinking |
| **Context Request** | Can request more product details |

#### Output Alternatives
- `final_output` — Submit reflection with collabs and remarks
- `request_context` — Get more product information first

---

### 3. Plan & Assign

> **Orchestration — Chair synthesizes reflections and distributes work**

| Field | Value |
|-------|-------|
| **Actor** | Chair |
| **Purpose** | Create directives for operatives based on reflections and mission state |
| **Trigger** | After all operatives reflect |

#### Responsibilities
1. **Synthesize** operative reflections into actionable insights
2. **Prioritize** high-importance unresolved feedback
3. **Create/modify** products via tree operations
4. **Assign** operatives to products with clear directives
5. **Update** own products (Change Log, etc.)
6. **Override** bootstrap parameters if scope evolved

#### Produces
- Tree operations (create, update, reparent, mark products)
- Assignments with detailed directives (objective, DoD, why, context)
- Attached context for assignees
- Chair versions (updates to own products)
- Optional bootstrap overrides

#### Mechanisms Used
| Mechanism | How Used |
|-----------|----------|
| **Product** | Creates new, modifies existing, marks status |
| **Assignment** | Links operative → product with directive |
| **Version** | Chair can version own products |
| **Remark** | Notes to team or specific agents |
| **Halt** | Can pause for user clarification |

#### Output Alternatives
- `final_output` — Submit plan with tree ops and assignments
- `halt` — Request user clarification
- `request_context` — Get more product details

---

## Phase B: Production

### 4. Write

> **Execution — operatives produce content for assigned products**

| Field | Value |
|-------|-------|
| **Actor** | Operatives (parallel execution) |
| **Purpose** | Create or update content per Chair's directive |
| **Trigger** | After Chair assigns work |

#### Responsibilities
1. **Follow** Chair's directive precisely
2. **Address** feedback marked for resolution
3. **Create** quality content meeting Definition of Done
4. **Cite** references using `[[p:id]]`, `[[a:id]]` syntax
5. **Explain** changes in change summary

#### Receives
- Assigned products with directive, DoD, version history
- Feedback to address
- Attached context (related products)
- Self-notes from earlier rounds

#### Mechanisms Used
| Mechanism | How Used |
|-----------|----------|
| **Version** | Creates new version of assigned product |
| **Collab** | Can create feedback on related products |
| **Remark** | Notes to self for later, or to team |
| **Assignment** | Consumes — scopes what can be written |

#### Constraints
- Can **only** create versions for assigned product IDs
- Must address "to address" feedback

#### Output Alternatives
- `final_output` — Submit versions with change summaries
- `request_context` — Get more information first

---

## Phase C: Quality Control

### 5. Peer Review

> **Horizontal feedback — operatives review each other's work**

| Field | Value |
|-------|-------|
| **Actor** | Operatives (reviewing others' work) |
| **Purpose** | Catch issues from domain expertise perspective |
| **Trigger** | After new work is produced |

#### Responsibilities
1. **Review** products from unique domain perspective
2. **Provide** specific, actionable feedback
3. **Consider** integration points with own products
4. **Endorse** quality work
5. **Avoid** duplicating existing feedback

#### Unique Value
Each operative reviews from their expertise:
- Catch domain-specific issues others miss
- Identify integration problems
- Apply specialized quality standards

#### Mechanisms Used
| Mechanism | How Used |
|-----------|----------|
| **Collab** | Primary output — feedback on reviewed products |
| **Remark** | Cross-cutting observations to team/agents |
| **Context Request** | Can request more details before reviewing |

#### Importance Scale
- **1-3**: Style/preference
- **4-6**: Should address
- **7-8**: Must address
- **9-10**: Blocking issue

#### Output Alternatives
- `final_output` — Submit collabs with feedback
- `request_context` — Get more product details

---

### 6. Inspect

> **Vertical feedback — Watchdog enforces compliance and quality**

| Field | Value |
|-------|-------|
| **Actor** | Watchdog |
| **Purpose** | Verify products meet DoD and quality standards |
| **Trigger** | After peer review |

#### Responsibilities
1. **Verify** each product meets its Definition of Done
2. **Check** technical accuracy and consistency
3. **Assess** integration with other products
4. **Recommend** verdict: approved, needs revision, or blocked
5. **Provide** specific, actionable feedback for issues

#### Verdicts
| Verdict | Meaning |
|---------|---------|
| `approved` | Meets DoD, ready for acceptance |
| `needs_revision` | Minor issues, fixable in-round |
| `blocked` | Critical issues, requires major rework |

#### Produces
- Inspection results with DoD checklist
- Per-criterion pass/fail with notes
- Collabs for specific issues

#### Mechanisms Used
| Mechanism | How Used |
|-----------|----------|
| **Flag** | High-severity collabs block acceptance |
| **Collab** | Specific issues with severity ratings |
| **Remark** | Observations to Chair or team |

#### Severity Scale
- **1-3**: Style/preference (nice to have)
- **4-6**: Quality issues (should address)
- **7-8**: Significant gaps (must address)
- **9-10**: Blocking issues (cannot proceed)

#### Output Alternatives
- `final_output` — Submit inspections with verdicts
- `request_context` — Get more product details

---

## Phase D: Reporting

### 7. Presentation

> **Synthesis — Envoy communicates progress to users**

| Field | Value |
|-------|-------|
| **Actor** | Envoy |
| **Purpose** | Summarize round progress for human users |
| **Trigger** | End of round |

#### Responsibilities
1. **Summarize** round progress in human-friendly format
2. **Highlight** key achievements and blockers
3. **Communicate** per team member in chat format
4. **Maintain** professional but personable tone
5. **Prioritize** what users need to know

#### Receives
- All round deltas: Chair actions, operative updates, Watchdog findings
- Key collabs, accepted products, blocked products
- User questions pending
- Remarks targeted at users

#### Produces
- Chat messages per team member
- Synthesized narrative of round activity
- Highlights for user attention

#### Mechanisms Used
| Mechanism | How Used |
|-----------|----------|
| **Session Log** | Primary output — narrative for user |
| **Remark** | User-targeted remarks included in narrative |

#### Output Alternatives
- `final_output` — Submit presentation messages
- `request_context` — Get more details for narrative

---

## Quick Reference: Steps × Mechanisms

| Step | Products | Versions | Collabs | Remarks | Assignments | Flags | Session Log |
|------|:--------:|:--------:|:-------:|:-------:|:-----------:|:-----:|:-----------:|
| Bootstrap | ✓ create | – | – | – | – | – | – |
| Reflect | read | read | ✓ create | ✓ create | – | – | – |
| Plan & Assign | ✓ CRUD | ✓ Chair | read | ✓ create | ✓ create | – | – |
| Write | read | ✓ create | ✓ create | ✓ create | consume | – | – |
| Peer Review | read | read | ✓ create | ✓ create | – | – | – |
| Inspect | read | read | ✓ create | ✓ create | – | ✓ create | – |
| Presentation | read | read | read | read | – | – | ✓ create |

---

## Conditional Execution

| Step | Condition |
|------|-----------|
| Bootstrap | Round 0 only |
| Reflect | Round 1+ |
| Plan & Assign | Round 1+ |
| Write | Only if assignments exist |
| Peer Review | Only if new work was produced |
| Inspect | Only if new work was produced |
| Presentation | Every round |

---

## Context Request Loop

All steps (except Bootstrap) support an iterative `request_context` mechanism:

1. Agent requests additional product details
2. System provides requested context
3. Agent produces final output

**Limits**: Max 5 products per request, 3 iterations per step.

---

## Data Flow Between Steps

```
Bootstrap
    │
    ├─→ mission, objectives, personas, domains, initial_products
    │
    ▼
Reflect ─────────────────→ reflections ─────────────→ Plan & Assign
    │                                                      │
    └─→ collabs ──────────────────────────────────────────┘
                                                           │
                    ┌──────────────────────────────────────┘
                    │
                    ├─→ assignments ─────────────────→ Write
                    │                                    │
                    ├─→ tree_operations ─→ (backend)     │
                    │                                    │
                    ├─→ acceptance ─→ (backend)          │
                    │                                    │
                    └─→ chair_versions ─→ (backend)      │
                                                         │
                    ┌────────────────────────────────────┘
                    │
                    ├─→ versions ─→ (backend) ──────→ Peer Review
                    │                                    │
                    └─→ collabs ─────────────────────────┤
                                                         │
                    ┌────────────────────────────────────┘
                    │
                    └─→ collabs ─────────────────────→ Inspect
                                                         │
                    ┌────────────────────────────────────┘
                    │
                    ├─→ inspections ─→ (backend)
                    │
                    └─→ collabs ─────────────────────→ Presentation
                                                         │
                                                         ▼
                                                      messages ─→ User
```

---

## What Each Step Creates

| Step | Primary Outputs | Secondary Outputs |
|------|-----------------|-------------------|
| Bootstrap | mission, objectives, personas, initial_products | halt |
| Reflect | reflections | collabs, remarks |
| Plan & Assign | assignments, tree_ops | acceptance, chair_versions, bootstrap_overrides, halt, remarks |
| Write | versions | collabs, remarks |
| Peer Review | collabs | remarks |
| Inspect | inspections | collabs, remarks |
| Presentation | messages | — |
