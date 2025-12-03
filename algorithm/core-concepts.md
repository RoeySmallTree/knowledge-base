# Core Concepts

**Status:** Core Context - Updated 2025-12-03

## Overview

This document defines the fundamental concepts and data structures that underpin Cabal's multi-agent collaboration system.

## Workspaces and Sessions

### Workspace

A **Workspace** represents a customer account / organization.
- Contains multiple users with roles
- Holds configuration and settings
- Scopes all sessions and data

### Session

A **Session** is a container for one "project" or "mission".

Examples:
- "Create a 3-month launch plan for Product X"
- "Analyze Competitor Y and build an attack strategy"
- "Refactor the onboarding flow and output a PRD"

Each session has:
- A **user-given initial prompt** (raw text)
- A **derived mission statement**
- A set of **mission objectives**
- A set of **products** (nodes in the Product Tree)
- A history of **rounds**, **agent messages**, and **remarks**

## The Mission

### From Messy Prompt to Clear Charter

The user may give a one-liner or a very rough prompt. The **Chair agent** is responsible for:

1. Extracting a **Mission Statement**: a concise description of what the team is actually trying to achieve
2. Defining **Mission Objectives**: concrete, checkable targets or sub-goals
3. Identifying **constraints** and known requirements
4. Listing **missing details / open questions** that must be clarified

These are stored in the session as structured fields:
- `mission_statement`
- `mission_objectives`
- `constraints`
- `open_questions`

## Product Tree and Node Types

Outputs are not just one blob of text. Cabal builds a **Product Tree**: a graph of related nodes, each representing a piece of the deliverable or reasoning.

### Node Types

#### Content Node

A block of text or structured content.
- Examples: "Executive Summary", "Problem Analysis", "Detailed Plan"
- Often hierarchical (sections with subsections)
- Versioned over time

#### Collection Node

A set of gathered items:
- Ideas
- Options
- References
- Research findings

Used as a source for later content or decisions.

#### Decision Node

Captures a **choice** the system makes:
- e.g. "We choose Strategy B over Strategy A and C"

Includes:
- The options considered
- Comparison criteria
- Chosen option
- Rationale

Important for auditability and for users who care about "why".

#### Orchestration Node

Meta-level structures:
- Task breakdowns
- Round plans
- Assignments to agents

Not necessarily shown to the end client, but crucial for the system's internal logic.

### Node Properties

Each node typically has:
- **Type**: Content, Collection, Decision, Orchestration
- **Content / payload**: The actual data
- **Links**: Parent/child relationships
- **Version metadata**: Who/what created it, when, in which round
- **Status**: Draft, under review, accepted

## Rounds: Collaboration Lifecycle

Cabal organizes work in **Rounds**. The typical flow is:

### Round 0: Mission Shaping

- Chair reads user prompt
- Produces mission statement, objectives, unknowns
- Defines agents' personas

### Round 1: Reflect

Each agent receives context & mission. They comment on:
- What success would look like
- Risks & blind spots
- Missing information

### Round 2: Plan & Assign

Chair (with possible agent input) defines:
- The structure of the Product Tree for this mission
- Which agents handle which nodes
- The order in which work should happen

### Round 3: Draft / Write

Operatives produce:
- Content nodes (sections, drafts, lists)
- Collection nodes (options, research)

They may iterate locally.

### Round 4: Peer Review

Agents critique each other's work:
- Propose improvements
- Suggest alternatives
- Flag corrections

### Round 5: Inspection

Watchdog and/or Chair check against:
- Mission objectives
- Defined structure
- Formatting and schema rules
- Output guidelines (e.g. "JSON only", "max N words")

### Round 6: Presentation

Envoy presents:
- Final or current best version of the deliverable
- Summaries or alternative views as needed

User can:
- Ask for changes
- Request new angles
- Start another round

## Context Tree & Remarks

### Context Tree

To keep everything coherent, Cabal maintains a **Context Tree** for each session:

Aggregates:
- Session details (mission, objectives, status)
- Team setup (agents & personas)
- Product tree (nodes & versions)
- Structural changes over time
- Key decisions

The **Context Tree service** can emit:
- **JSON context** (structured, for programmatic use / internal prompts)
- **Serialized text context** (for inclusion in LLM prompts)

### Remarks System

Instead of a simple "missing details" field, Cabal uses a **Remarks** system.

A remark is:
- A message created by an agent or the system
- Has a **target**: User, whole team, or specific agent
- Has a **type**: Question, Suggestion, Warning, Blocker

May reference specific product nodes or objectives.

Remarks allow:
- **Blockers**: Chair or Watchdog can halt progress until resolved
- **Clarification**: System can ask targeted questions instead of guessing
- **Internal notes**: Agents can leave comments about structure, risks, or trade-offs

## Concept Relationships

```
Workspace
    └── Session
            ├── Mission
            │       ├── Mission Statement
            │       ├── Mission Objectives
            │       └── Constraints
            ├── Agent Team
            │       ├── Chair
            │       ├── Operatives[]
            │       ├── Watchdog
            │       └── Envoy
            ├── Product Tree
            │       ├── Content Nodes
            │       ├── Collection Nodes
            │       ├── Decision Nodes
            │       └── Orchestration Nodes
            ├── Rounds[]
            │       └── Round History
            ├── Context Tree
            └── Remarks[]
```

---

**Related:**
- [Approach](./approach.md) - How these concepts are implemented
- [Technical specs](./technical-specs/README.md) - Implementation details
- [Vision](../overview/vision.md) - Why these concepts matter
- [Agents & Roles](../overview/product/agents-and-roles.md) - Agent system details

← Back to [Algorithm Guide](./README.md)
