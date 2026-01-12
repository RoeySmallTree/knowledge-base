# CABAL: Collaborative AI Business Assembly Layer

## Executive Summary

CABAL is a multi-agent orchestration algorithm that transforms a single user prompt into structured, high-quality outputs through simulated team collaboration. Rather than relying on a single LLM response, CABAL creates a virtual team of specialized AI agents who plan, write, review, and refine work products through iterative rounds—mimicking how real teams deliver complex projects.

---

# Part 1: The Premise

## The Problem with Single-Shot Prompting

Traditional LLM interactions follow a simple pattern: user asks → model answers. This works for simple queries but breaks down for complex tasks because:

1. **No iteration** — First drafts are rarely good enough
2. **No specialization** — One perspective handles everything
3. **No quality gates** — Nothing catches errors before delivery
4. **No structure** — Complex work isn't decomposed properly
5. **No accountability** — No one "owns" different aspects of the work

## The CABAL Solution

CABAL addresses these limitations by introducing:

| Problem | CABAL Solution |
|---------|----------------|
| No iteration | Multiple rounds of refinement |
| No specialization | Role-based agents with domains |
| No quality gates | Watchdog inspection before acceptance |
| No structure | Product tree with typed artifacts |
| No accountability | Ownership assignment per product |

## Core Philosophy

**"Decide, then build. Never the reverse."**

CABAL enforces a discipline where:
- Information is gathered before work begins
- Decisions are made explicitly before implementation
- Structure is designed before content is created
- Quality is verified before delivery

This prevents the common anti-pattern of building first and discovering problems later.

---

# Part 2: The Team Model

## Governance Roles

CABAL defines four distinct governance roles, each with specific responsibilities:

### Chair (`chair-1`)
The project leader who owns the mission.

| Responsibility | Actions |
|----------------|---------|
| Mission ownership | Defines objectives, constraints, success criteria |
| Structure design | Creates and modifies the product tree |
| Work assignment | Assigns products to operatives with directives |
| Decision authority | Accepts or rejects completed products |
| Session control | Can halt for user input or declare completion |

### Operatives (`operative-1`, `operative-2`, ...)
The workers who produce content.

| Responsibility | Actions |
|----------------|---------|
| Content creation | Write versions of assigned products |
| Reflection | Assess own work against DoD |
| Collaboration | Provide feedback on peer products |
| Domain expertise | Own specific areas (frontend, backend, etc.) |

### Watchdog (`watchdog-1`)
The quality guardian.

| Responsibility | Actions |
|----------------|---------|
| Quality assurance | Inspect products before acceptance |
| Security review | Flag vulnerabilities and risks |
| Coherence check | Ensure products align with mission |
| Integration verification | Check products work together |

### Envoy (`envoy-1`)
The communicator.

| Responsibility | Actions |
|----------------|---------|
| Progress translation | Convert round activity into natural conversation |
| User communication | Present updates in accessible language |
| Team voice | Speak as team members, not as system |

## Personas

Each agent has a **persistent persona** that defines their character, expertise, and communication style. Personas are:

- **Mission-specific** — Tailored to the project at hand
- **Role-appropriate** — Match the governance role's responsibilities
- **Persistent** — Maintained throughout the session

Example:
```
chair-1: "You are Richard, Full-Stack Developer leading this MVP. 
         You own architecture decisions and integration quality."

operative-1: "You are Alex, Full-Stack Developer owning frontend. 
             Focus: React components, responsive UI, user experience."
```

## Domains

Operatives have **domains** that define their area of ownership:

```json
{
  "operative-1": {
    "responsibility": "Frontend implementation including React components",
    "area": "Frontend Development"
  },
  "operative-2": {
    "responsibility": "Backend architecture including API design",
    "area": "Backend Development"
  }
}
```

Work is assigned to operatives whose domains match the product's nature.

---

# Part 3: The Product Model

## Product Types

CABAL organizes work into a **product tree** with four node types:

### Content Product
A single atomic piece of content.

| Attribute | Description |
|-----------|-------------|
| Purpose | Self-contained deliverable |
| Structure | Title → Context → Content |
| Children | None (leaf node) |
| Example | "API Specification", "Database Schema" |

### Decision Product
A place to evaluate options and make a choice.

| Attribute | Description |
|-----------|-------------|
| Purpose | Document decision with rationale |
| Structure | Question → Options → Recommendation → Rationale |
| Children | Any type (for research/context) |
| Example | "Tech Stack Selection", "Authentication Strategy" |

### Collection Product
Groups multiple content nodes of the same type.

| Attribute | Description |
|-----------|-------------|
| Purpose | Organize related content items |
| Structure | Title → Semantic Category |
| Children | Only Content nodes |
| Example | "API Endpoints", "User Stories", "Chapters" |

### Orchestration Product
Organizes complex, multi-domain work.

| Attribute | Description |
|-----------|-------------|
| Purpose | Structure cross-domain projects |
| Structure | Title → Purpose/Scope |
| Children | Any type |
| Example | "TODO App MVP", "Marketing Campaign" |

## Composition Rules

```
Orchestration → can contain → Content, Decision, Collection, Orchestration
Decision      → can contain → Content, Decision, Collection, Orchestration
Collection    → can contain → Content ONLY
Content       → can contain → Nothing (leaf node)
```

## Product Lifecycle

```
Created → Assigned → Written → Reviewed → Inspected → Accepted
           ↑                                    |
           └────────── Rejected ←───────────────┘
```

Each product has:
- **Owner** — The operative responsible for it
- **DoD** — Definition of Done criteria
- **Versions** — History of content iterations
- **Collabs** — Feedback from team members
- **Status** — Pending, Accepted, or Rejected

---

# Part 4: The Round Flow

## Overview

CABAL operates in **rounds**. Each round moves the project forward through a fixed sequence of steps:

```
┌─────────────────────────────────────────────────────────────────┐
│                         ROUND N                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────┐   ┌─────────────┐   ┌───────┐   ┌─────────────┐  │
│  │ Reflect  │ → │ Plan/Assign │ → │ Write │ → │ Peer Review │  │
│  └──────────┘   └─────────────┘   └───────┘   └─────────────┘  │
│       ↓                                              ↓          │
│  Operatives      Chair            Operatives    Operatives      │
│  assess own      structures       create new    critique        │
│  products        work             versions      peer work       │
│                                                                  │
│  ┌─────────┐   ┌──────────────┐                                 │
│  │ Inspect │ → │ Presentation │                                 │
│  └─────────┘   └──────────────┘                                 │
│       ↓               ↓                                          │
│  Watchdog        Envoy                                          │
│  QA gate         translates                                     │
│                  to user                                         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Step Details

### Step 1: Reflect (Operatives)

Each operative evaluates their owned products before the next work cycle.

**Inputs:**
- Owned products with current content
- Feedback (collabs) from peers
- Chair directive from previous round
- Version history

**Actions:**
1. Assess each product against its DoD
2. Respond to each piece of feedback (accept/defer/reject)
3. Identify the single most important improvement needed
4. Surface any blockers

**Outputs:**
```json
{
  "reflections": [{
    "refersToProduct": "p4",
    "dod_status": "partially_met",
    "dod_gaps": ["Rate limiting not documented"],
    "feedback_responses": [{
      "collab_id": "c6",
      "action": "accept",
      "planned_change": "Add rate limiting section"
    }],
    "next_version_delta": "Add rate limiting documentation"
  }],
  "collabs": [...],
  "remarks": [...]
}
```

### Step 2: Plan & Assign (Chair)

The chair synthesizes reflections, assesses progress, and structures work.

**Inputs:**
- Current product tree
- Operative reflections
- High-priority collabs
- Mission objectives

**Actions:**
1. Modify product tree (add/remove/move/update nodes)
2. Accept products that meet DoD
3. Assign work with detailed directives
4. Update session parameters if needed
5. Halt for user input if required

**Outputs:**
```json
{
  "thinking": {
    "tree_assessment": "Missing error handling doc",
    "acceptance_rationale": "Cannot accept p4 — blocking collabs",
    "assignment_rationale": "Alex to add rate limiting"
  },
  "tree_operations": [{
    "action": "ADD",
    "new_id": "new-1",
    "parent_id": "p1",
    "product": { "name": "Error Handling", "type": "Content", "dod": "..." }
  }],
  "assignments": [{
    "product_id": "p4",
    "assignee_ids": ["operative-1"],
    "directive": {
      "importance": 8,
      "objective": "Add rate limiting documentation",
      "dod": "Rate limiting section with specific limits",
      "why": "Security requirement — prevents brute force",
      "context": "Addressing [[c:c6]] from Marco"
    }
  }],
  "acceptance": [...],
  "chair_versions": [...]
}
```

### Step 3: Write (Operatives)

Operatives create new versions of their assigned products.

**Inputs:**
- Assigned products with directives
- Current content and version history
- Feedback to address
- Attached context from related products

**Actions:**
1. Create new version addressing directive
2. Satisfy DoD criteria
3. Reference related products with `[[p:id]]` syntax
4. Optionally create collabs on peer products

**Outputs:**
```json
{
  "versions": [{
    "product_id": "p4",
    "title": "Technical Architecture",
    "content": "# Technical Architecture\n\n## Rate Limiting...",
    "change_summary": "Added rate limiting section. Addressed [[c:c6]]."
  }],
  "collabs": [...],
  "remarks": [...]
}
```

### Step 4: Peer Review (Operatives)

Operatives review another operative's work from their expertise perspective.

**Inputs:**
- Product to review with current content
- Reviewer's expertise context
- Related products for reference

**Actions:**
1. Review through domain expertise lens
2. Create collabs (feedback, questions, suggestions, endorsements, concerns)
3. Assign importance to each collab

**Outputs:**
```json
{
  "collabs": [{
    "refersToProduct": "p5",
    "type": "suggestion",
    "importance": 7,
    "comment": "Consider adding 'remember me' option for longer sessions",
    "shortestSummary": "Consider 'remember me' option"
  }]
}
```

### Step 5: Inspect (Watchdog)

The watchdog acts as quality gate before products are finalized.

**Inputs:**
- Products to inspect with DoD criteria
- Product tree for context

**Actions:**
1. Verify each product against its DoD
2. Check security, completeness, coherence, integration
3. Assign assessment: approved, needs_revision, or blocked

**Outputs:**
```json
{
  "inspections": [{
    "product_id": "p5",
    "version_id": "v3",
    "assessment": "approved",
    "findings": [{
      "category": "security",
      "severity": 3,
      "issue": "Password policy could be stronger",
      "recommendation": "Require special characters"
    }]
  }]
}
```

**Assessment Rules:**
| Assessment | Condition |
|------------|-----------|
| approved | No findings with severity ≥8 |
| needs_revision | Findings 5-7, none ≥8 |
| blocked | Any finding with severity ≥8 |

### Step 6: Presentation (Envoy)

The envoy translates the round's progress into natural team conversation.

**Inputs:**
- Round summary (chair actions, operative updates, watchdog findings)
- Key collabs this round
- Acceptance/blocking status

**Actions:**
1. Generate 3-5 short messages simulating team chat
2. Speak as team members (chair, operatives)
3. Use product names, not IDs
4. Keep it natural and specific

**Outputs:**
```json
{
  "messages": [
    {
      "content": "Auth spec now uses httpOnly cookies. Should be more secure.",
      "as_agent": "operative-2"
    },
    {
      "content": "I've aligned my API error codes with Jordan's format. Ready for review.",
      "as_agent": "operative-1"
    }
  ]
}
```

---

# Part 5: Collaboration Mechanics

## Collabs (Product Discourse)

Collabs are how team members communicate about products. They:

- Target a specific product
- Come from a specific role's perspective
- Have an importance level (1-10)
- Drive improvements in subsequent versions

**Types:**
| Type | When to Use | Example |
|------|-------------|---------|
| feedback | Quality or gaps observed | "Error codes lack HTTP mapping" |
| question | Need clarification | "How handle offline refresh?" |
| suggestion | Ideas for improvement | "Consider rate limiting" |
| endorsement | Validate good work | "Solid error handling" |
| concern | Worried about direction | "May not scale to SSO" |

**Importance Scale:**
| Level | Meaning | Impact |
|-------|---------|--------|
| 10 | Critical | Blocks progress |
| 7-9 | Significant | Should influence next version |
| 4-6 | Notable | Worth considering |
| 1-3 | Minor | Take it or leave it |

High-importance collabs (≥8) can block product acceptance.

## Remarks (Team Communication)

Remarks are for communication that doesn't target a product:

- Questions for the chair
- Process suggestions
- Observations about the project
- **Self-notes** that persist within the round

```json
{
  "recipients": ["chair-1"],
  "type": "question",
  "content": "Should we prioritize security over features?"
}

{
  "recipients": ["self"],
  "type": "note",
  "content": "Check p5's error format before finalizing"
}
```

## Reference Syntax

CABAL uses double-bracket syntax for cross-references:

| Reference | Meaning |
|-----------|---------|
| `[[p:p3]]` | Product p3 |
| `[[v:v5]]` | Version v5 |
| `[[c:c1]]` | Collab c1 |
| `[[a:operative-1]]` | Agent operative-1 |
| `[[u:user-1]]` | User user-1 |

This enables:
- Traceability of feedback
- Explicit dependencies
- Clear attribution

---

# Part 6: Session Lifecycle

## Bootstrap (Session Initialization)

Before rounds begin, the Chair executes Bootstrap:

```
User Prompt → Bootstrap → Mission + Team + Initial Products
```

**Bootstrap outputs:**
1. **Mission** — What we're building/achieving
2. **Objectives** — Measurable success criteria
3. **Constraints** — Scope limits
4. **Personas** — Mission-specific character for each agent
5. **Domains** — Operative responsibilities
6. **Initial Products** — Starting product tree

**Example:**
```json
{
  "mission": "Build a TODO list web application MVP with task CRUD, 
             secure auth, and responsive UI.",
  "objectives": "1) Functional CRUD. 2) Secure auth. 3) Responsive UI.",
  "personas": {
    "chair-1": "Richard, Full-Stack Developer leading this MVP.",
    "operative-1": "Alex, Frontend specialist. Focus: React, UI/UX."
  },
  "initial_products": [
    { "name": "Change Log", "type": "Content", "owner": "chair-1" },
    { "name": "Technical Architecture", "type": "Content", "owner": null }
  ]
}
```

## Round Execution

Rounds continue until the Chair declares completion:

```
Bootstrap
    ↓
Round 1 → Round 2 → Round 3 → ... → Round N
    ↓
Completion (Chair halts with type: "done")
```

## Completion

The Chair can halt the session when:

1. All products are accepted
2. Mission objectives are met
3. User is satisfied

```json
{
  "response_type": "halt",
  "halt": {
    "type": "done",
    "to": ["u:all"],
    "message": "Mission complete! All products accepted. 
               The TODO app MVP specification is ready."
  }
}
```

## User Interaction

At any point, the Chair can halt for user input:

```json
{
  "response_type": "halt",
  "halt": {
    "type": "question",
    "to": ["user-1"],
    "message": "Should we use httpOnly cookies or localStorage?",
    "options": ["httpOnly cookies", "localStorage with mitigations"]
  }
}
```

Users can also interject between rounds to:
- Provide feedback
- Change requirements
- Answer pending questions
- Request specific changes

---

# Part 7: Quality Assurance

## Definition of Done (DoD)

Every product has a DoD that defines completion criteria:

```json
{
  "name": "Technical Architecture",
  "dod": "Document database schema, API design, tech stack decisions"
}
```

Products cannot be accepted until:
1. DoD criteria are met
2. No blocking collabs (importance ≥8) remain
3. Watchdog inspection passes

## Version Pressure

CABAL enforces continuous improvement:

- Every version must improve on the previous
- Low-quality versions are flagged/rejected
- Versions are rated on clarity, actionability, DoD fit
- Change summaries document what improved

## Inspection Categories

The Watchdog evaluates products across five categories:

| Category | Focus |
|----------|-------|
| Security | Auth, data exposure, injection risks |
| Completeness | All DoD criteria addressed |
| Coherence | Aligns with mission objectives |
| Integration | Works with peer products |
| Quality | Content quality, clarity, correctness |

## Blocking vs Non-Blocking Findings

| Severity | Impact | Action |
|----------|--------|--------|
| 8-10 | Blocks acceptance | Must fix before proceeding |
| 5-7 | Needs revision | Should address soon |
| 1-4 | Nice to have | Optional improvement |

---

# Part 8: Technical Implementation

## Prompt Architecture

Each step has a structured prompt with three layers:

```
┌─────────────────────────────────────────┐
│ KERNEL (Absolute Rules)                 │  ← Same for all steps
│ - JSON only                             │
│ - Valid IDs only                        │
│ - No guessing                           │
│ - This step only                        │
│ - Escape strings                        │
│ - Reference syntax                      │
├─────────────────────────────────────────┤
│ STEP PACK (Step-Specific Instructions)  │  ← Unique per step
│ - Task definition                       │
│ - Checklist                             │
│ - Output options                        │
│ - Schema                                │
├─────────────────────────────────────────┤
│ IDENTITY (Persona)                      │  ← From Bootstrap
│ - Name, role, focus                     │
└─────────────────────────────────────────┘
```

## Context Management

User prompts contain only relevant context:

| Step | Context Included |
|------|------------------|
| Reflect | Owned products (full), peer products (summary) |
| Plan & Assign | Reflections, high-priority collabs, product tree |
| Write | Assigned products (full), attached context |
| Peer Review | Review product (full), related products (summary) |
| Inspect | Products to inspect (full), DoD criteria |
| Presentation | Round summary (pre-digested) |

## ID System

CABAL uses temporary IDs that are human-readable:

| Entity | Format | Example |
|--------|--------|---------|
| Products | p + number | p1, p2, p3 |
| Versions | v + number | v1, v2, v3 |
| Collabs | c + number | c1, c2, c3 |
| New products | new- + number | new-1, new-2 |

These are mapped to UUIDs by the backend.

## Output Discrimination

Every step response has a discriminator:

```json
{
  "response_type": "request_context" | "halt" | "final_output",
  ...
}
```

This enables:
- Clean parsing
- Appropriate backend handling
- Retry logic for context requests

---

# Part 9: Example Session

## User Prompt
> "Build a simple TODO list web application MVP"

## Bootstrap Output
```
Mission: Build a TODO list MVP with CRUD, auth, responsive UI
Team: Richard (chair), Alex (frontend), Jordan (backend), Marco (QA), Stacy (comms)
Products: Change Log, MVP Features Selection, Technical Architecture
```

## Round 1
```
Reflect: (skipped, first round)
Plan & Assign: Chair assigns MVP Features to Jordan, Tech Architecture to Alex
Write: Jordan drafts features, Alex drafts architecture
Peer Review: Jordan reviews Alex's work, Alex reviews Jordan's
Inspect: Marco finds JWT in localStorage is XSS-vulnerable (severity 9)
Presentation: "Hit a security issue with auth. Need to switch to httpOnly cookies."
```

## Round 2
```
Reflect: Jordan plans to switch to httpOnly, Alex will align error codes
Plan & Assign: Chair assigns security fixes, creates Error Handling product
Write: Jordan implements httpOnly, Alex adds rate limiting
Peer Review: Cross-review of security changes
Inspect: Marco approves both products
Presentation: "Auth spec solid now. API aligned. Ready for acceptance."
```

## Round 3
```
Plan & Assign: Chair accepts all products, halts with "done"
Presentation: "Mission complete! TODO app MVP specification ready."
```

---

# Part 10: Design Principles

## Decide → Build (Never Reverse)

Information and decisions come before implementation:

✅ **Correct:** Create Decision Product for auth strategy → Build Auth Specification
❌ **Wrong:** Build Auth Specification → Figure out strategy later

## Perspective Ownership

Domain expertise creates accountability:

- Owner is responsible for product quality
- Owner has weighted input on related decisions
- Derived tasks route to original owner

## Sequence Discipline

Work follows logical dependencies:

✅ **Correct:** Define API → Document endpoints → Implement handlers
❌ **Wrong:** Implement handlers → Hope API matches

## Context Completeness

All required information captured before proceeding:

- If research needed → Create research Content Product
- If user input needed → Halt for question
- If dependency missing → Surface blocker

## Continuous Improvement

Every version must advance the product:

- Version 2 must be better than Version 1
- Change summaries document improvements
- Watchdog blocks stagnant or regressing work

---

# Appendix: Glossary

| Term | Definition |
|------|------------|
| **CABAL** | Collaborative AI Business Assembly Layer |
| **Round** | One complete cycle through all steps |
| **Product** | A node in the product tree (Content, Decision, Collection, Orchestration) |
| **Version** | An iteration of a product's content |
| **Collab** | Feedback/discourse targeting a product |
| **Remark** | Communication not targeting a product |
| **DoD** | Definition of Done — completion criteria |
| **Directive** | Chair's instructions for an assignment |
| **Persona** | Agent's character, expertise, and style |
| **Domain** | Operative's area of responsibility |
| **Halt** | Pause for user input or session completion |
| **Blocking Collab** | High-importance feedback (≥8) preventing acceptance |
| **KERNEL** | Absolute rules shared across all steps |