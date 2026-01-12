# Algorithm Mechanisms Summary

> A concise reference for all communication and data mechanisms in the Cabal algorithm flow.

---

## Product
The primary unit of work. Represents *what* needs to be created.

### Properties
`id`, `name`, `type`, `parent_id`, `owner`, `dod` (Definition of Done), `status`

### Type Capabilities
| Type | Can Contain | Typical Use |
|------|-------------|-------------|
| Content | Nothing (leaf) | Single deliverable: spec, schema, code |
| Decision | Any type | Choice with rationale: tech stack, strategy |
| Collection | Content only | Grouped items: endpoints, chapters |
| Orchestration | Any type | Multi-domain coordination: project root |

### Uses
- Organize work into hierarchical structure
- Define deliverables with clear completion criteria
- Track ownership and accountability
- Enable cross-referencing via `[[p:id]]`

### Flow
| Aspect | Details |
|--------|--------|
| **Invoking** | Chair (Bootstrap: `initial_products`, Plan & Assign: `tree_operations`) |
| **Consuming** | All agents (product tree in every prompt) |
| **Duration** | Entire session |

---

## Version
An immutable snapshot of a Product's content at a point in time.

### Properties
`id`, `product_id`, `author`, `title`, `content`, `change_summary`

### Uses
- Track content evolution over rounds
- Document what changed and why
- Enable rollback/comparison
- Reference specific versions via `[[v:id]]`

### Flow
| Aspect | Details |
|--------|---------|
| **Invoking** | Operatives (Write step only) |
| **Consuming** | Peer Reviewers, Watchdog, Chair (for acceptance), Envoy (for presentation) |
| **Schema** | `product_id`, `content`, `change_summary`, `version_number` |
| **Duration** | Immutable, permanent within session |

---

## Collab
Discourse on a product. How agents communicate about specific work.

### Properties
`id`, `refersToProduct`, `type`, `importance` (1-10), `author`, `comment`, `shortestSummary`

### Collab Types
| Type | When to Use |
|------|-------------|
| feedback | Quality issues or gaps |
| question | Need clarification |
| suggestion | Improvement idea |
| endorsement | Validate approach |
| concern | Worried about direction |

### Importance Scale
| Level | Meaning | Impact |
|-------|---------|--------|
| 9-10 | Critical | Blocks acceptance |
| 7-8 | High | Should strongly influence next version |
| 4-6 | Notable | Worth considering |
| 1-3 | Minor | Take it or leave it |

### Uses
- Provide feedback on peer products
- Ask clarifying questions
- Endorse good work
- Block acceptance (importance ≥8)

### Flow
| Aspect | Details |
|--------|--------|
| **Invoking** | Operatives, Watchdog (Reflect, Write, Peer Review, Inspect) |
| **Consuming** | Product owner (Reflect), Chair (Plan & Assign), Envoy |
| **Duration** | Until addressed in `feedback_responses` |

---

## Remark
Side communication not targeting a product. Team communication channel.

### Properties
`recipients`, `type` (question/suggestion/observation/note), `content`

### Recipient Types
| Recipient | Meaning |
|-----------|--------|
| `["chair-1"]` | Private to chair |
| `["operative-1"]` | To specific operative |
| `["u:all"]` | To all users |
| `["self"]` | Note to self (persists within round) |

### Uses
- Save note to self for later step
- Give broad feedback not tied to product
- Ask chair about priorities
- Flag cross-cutting concerns

### Flow
| Aspect | Details |
|--------|---------|
| **Invoking** | All agents, all steps |
| **Consuming** | Recipients; Envoy (for user-targeted) |
| **Duration** | Self-notes: within round; Others: 1 round |

---

## Directive
Chair's instructions accompanying an assignment. Defines what success looks like.

### Properties
`importance` (1-10), `objective`, `dod`, `why`, `context`

### Uses
- Give operatives clear success criteria
- Explain the "why" behind assignments
- Link work to specific feedback
- Provide mission alignment context

### Flow
| Aspect | Details |
|--------|--------|
| **Invoking** | Chair (Plan & Assign) |
| **Consuming** | Assigned operative (Write step) |
| **Duration** | Until product version addresses it |

---

## Assignment
Work allocation from Chair to Operatives.

### Properties
`product_id`, `assignee_ids`, `directive`, `attach_context`

### Uses
- Assign products to operatives
- Provide context from related products
- Enable multi-operative collaboration
- Link to newly created products (`new-N` IDs)

### Flow
| Aspect | Details |
|--------|--------|
| **Invoking** | Chair (Plan & Assign) |
| **Consuming** | Assigned operatives (Write step) |
| **Duration** | Until product accepted |

---

## Tree Operation
Structural changes to the product tree.

### Actions
| Action | Purpose | Required Fields |
|--------|---------|----------------|
| ADD | Create new product | `new_id`, `parent_id`, `product` |
| REMOVE | Delete product | `product_id`, `reason` |
| MOVE | Change parent | `product_id`, `parent_id` |
| UPDATE | Modify fields | `product_id`, `product` (partial) |

### Uses
- Add products as project evolves
- Remove obsolete products
- Reorganize hierarchy
- Update DoD or metadata

### Flow
| Aspect | Details |
|--------|--------|
| **Invoking** | Chair (Plan & Assign) |
| **Consuming** | Backend (creates/modifies DB) |
| **Duration** | Permanent (session lifetime) |

---

## Acceptance
Chair's decision to accept or reject a product.

### Properties
`product_id`, `accepted`, `version_id`, `rejection_reason`

### Criteria
- DoD met
- No blocking collabs (importance ≥8)
- Watchdog inspection passed

### Flow
| Aspect | Details |
|--------|--------|
| **Invoking** | Chair (Plan & Assign) |
| **Consuming** | Backend, Envoy (reports), Chair (tracks remaining) |
| **Duration** | Permanent |

---

## Bootstrap Override
Mid-session updates to session parameters.

### Properties
`mission`, `objectives`, `constraints`, `personas`, `operative_domains`

### Uses
- Refine mission as understanding improves
- Adjust scope based on user feedback
- Reassign domains between operatives
- Change constraints as requirements shift

### Flow
| Aspect | Details |
|--------|--------|
| **Invoking** | Chair (Plan & Assign) |
| **Consuming** | All agents (next round) |
| **Duration** | Rest of session |

---

## Halt
Pause session for user input or completion.

### Types
| Type | Purpose |
|------|--------|
| question | Need user input to proceed |
| done | Session complete |

### Properties
`type`, `to` (recipients), `message`, `options`

### Flow
| Aspect | Details |
|--------|--------|
| **Invoking** | Chair (Bootstrap, Plan & Assign) |
| **Consuming** | Backend (pauses), User (answers), Chair (receives) |
| **Duration** | Until user responds |

---

## Reflection
Operative's self-assessment of owned products.

### Properties
`refersToProduct`, `dod_status`, `dod_gaps`, `feedback_responses`, `lessons_from_history`, `next_version_delta`, `blockers`

### Feedback Response Actions
- `accept` — Will incorporate
- `defer` — Valid but not now
- `reject` — Disagree, with rationale

### Flow
| Aspect | Details |
|--------|--------|
| **Invoking** | Operatives (Reflect step) |
| **Consuming** | Chair (Plan & Assign) |
| **Duration** | 1 round |

---

## Inspection
Quality assessment before acceptance.

### Properties
`product_id`, `version_id`, `assessment`, `findings`

### Assessments
| Verdict | Condition |
|---------|----------|
| approved | No findings ≥8 |
| needs_revision | Findings 5-7, none ≥8 |
| blocked | Any finding ≥8 |

### Finding Categories
`security`, `completeness`, `coherence`, `integration`, `quality`

### Flow
| Aspect | Details |
|--------|--------|
| **Invoking** | Watchdog (Inspect step) |
| **Consuming** | Chair (blocks acceptance), Product owner, Envoy |
| **Duration** | Until next version |

---

## Message
Natural language team conversation for user presentation.

### Properties
`content` (1-2 sentences), `as_agent` (speaker ID)

### Speaker Rules
- Can speak: `chair-1`, `operative-N`
- Cannot speak: `watchdog-1`, `envoy-1`

### Flow
| Aspect | Details |
|--------|--------|
| **Invoking** | Envoy (Presentation step) |
| **Consuming** | Frontend (displays as chat), User |
| **Duration** | Permanent |

---

## Context Request
Request for additional information mid-step.

### Need Types
| Need | What's Returned |
|------|----------------|
| full_content | Complete current version |
| version_history | All versions with change summaries |
| all_feedback | All collabs on product |
| peer_content | Content of related peer products |

### Limits
- Max 5 requests per iteration
- 3 iterations per step
- Not available in Bootstrap

### Flow
| Aspect | Details |
|--------|--------|
| **Invoking** | Any agent (except Bootstrap) |
| **Consuming** | Same agent (receives in REQUESTED CONTEXT) |
| **Duration** | Within step |

---

## Reference Syntax
Cross-referencing system for traceability.

| Reference | Meaning |
|-----------|--------|
| `[[p:id]]` | Product |
| `[[v:id]]` | Version |
| `[[c:id]]` | Collab |
| `[[a:id]]` | Agent |
| `[[u:id]]` | User |

**Used in:** Version content, collab comments, directive context, change summaries

---

## Context Tree
The live graph tracking all mission state and relationships.

### Uses
- Provide agents with relevant, scoped context
- Enable delta loading (only what changed)
- Maintain relationships between products, agents, feedback
- Support efficient token usage in prompts

### Flow
| Aspect | Details |
|--------|--------|
| **Invoking** | Orchestrator (every step) |
| **Consuming** | All agents (tailored context slices) |
| **Duration** | Continuously updated |

---

## Persistence Durations

| Entity | Duration | Notes |
|--------|----------|-------|
| Product | Session | Until removed or session ends |
| Version | Session | Permanent history |
| Collab | Until addressed | Cleared when feedback_response given |
| Remark (to others) | 1 round | Delivered then cleared |
| Remark (to self) | Within round | Available to later steps |
| Reflection | 1 round | Consumed by Chair |
| Inspection | Until next version | Re-inspect after changes |
| Assignment | Until accepted | Persists until product complete |

---

## Quick Reference Matrix

| Mechanism | Who Creates | When | Lifespan |
|-----------|-------------|------|----------|
| Product | Chair | Bootstrap, Plan & Assign | Session |
| Version | Operatives, Chair | Write, Plan & Assign | Permanent |
| Collab | Operatives, Watchdog | Reflect, Write, Peer Review, Inspect | Until addressed |
| Remark | All | Any step | 1 round |
| Directive | Chair | Plan & Assign | Until addressed |
| Assignment | Chair | Plan & Assign | Until accepted |
| Tree Op | Chair | Plan & Assign | Permanent |
| Acceptance | Chair | Plan & Assign | Permanent |
| Reflection | Operatives | Reflect | 1 round |
| Inspection | Watchdog | Inspect | Until next version |
| Message | Envoy | Presentation | Permanent |
| Halt | Chair | Bootstrap, Plan & Assign | Until user responds |
