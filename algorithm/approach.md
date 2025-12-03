# Technical Architecture

**Status:** Core Context - Updated 2025-12-03

## Overview

High-level, technology-agnostic view of Cabal's technical implementation. This is for developers and investors who need to understand how the system works.

## Overall Structure

**SaaS, multi-tenant web application:**
- Backend API and orchestrator
- Frontend web app
- Potential mobile / desktop interfaces in the future

**Primary backend responsibilities:**
- Authentication & authorization
- Session and workspace management
- Orchestration of multi-agent flows and rounds
- Context Tree computation
- Product Tree storage (nodes and versions)
- Integration with LLM providers
- Logging, metrics, and error handling

## Orchestrator & Prompt System

The orchestrator is the core engine that drives multi-agent collaboration.

### Orchestrator Responsibilities

The orchestrator:

1. **Receives high-level commands:**
   - "Run Round X for Session Y"
   - "Execute agent task Z"

2. **Builds context slices** via the Context Tree service:
   - Only the relevant part of session history & products
   - Optimized for token efficiency

3. **Calls the master prompter / step prompts** for each agent & step:
   - System rules
   - Role/persona instructions
   - Mission context
   - Task-specific instructions
   - Expected output structure (e.g. JSON schema)

4. **Validates outputs:**
   - Structure checks (parse JSON, required fields)
   - Semantic checks via Watchdog prompts where applicable

5. **Writes results into:**
   - Product nodes
   - Remarks
   - Session state

### Prompt System

For developers, the code follows a **strict, composable prompt system** rather than ad-hoc string concatenation.

**Prompt components:**
```
[System Rules]
    + [Agent Persona]
    + [Mission Context]
    + [Task Instructions]
    + [Output Schema]
    = [Complete Prompt]
```

**Benefits:**
- Consistent structure across all agent calls
- Testable and maintainable prompts
- Clear separation of concerns
- Easy to iterate and improve

## The Cabal Algorithm: Hierarchical Agent Orchestration

The Cabal Algorithm is an orchestration engine that coordinates a team of autonomous AI agents to complete complex, multi-step
missions. It functions as a **State Machine** that cycles through iterative **Rounds**. In each round, the system decomposes
high-level objectives into granular tasks, assigns them to specialized agents, executes the work, and validates the results.

The system relies on a persistent **Context Tree**—a graph representation of the mission state—that evolves as agents create and
refine artifacts.

### 1. Functional Roles

The algorithm assigns agents to four distinct functional roles. These roles define the agent's behavior and permissions within
the system, separate from their specific domain expertise.

*   **The Chair (Strategist & Planner)**
    *   **Function**: Decomposition and Resource Allocation.
    *   **Behavior**: The Chair does not execute work. Instead, they maintain the high-level view of the mission. They break the
mission down into constituent components ("Products"), define the success criteria ("Definition of Done") for each, and assign
them to the most suitable Operative.
    *   **Key Output**: The **Plan**, consisting of new tasks and assignments for the current round.

*   **The Operatives (Executors)**
    *   **Function**: Production and Expertise.
    **Behavior**: Operatives are the workers. Each Operative has a specific persona (expertise). They receive assignments
from the Chair and produce the actual content. They are the only agents authorized to create "Versions" of products.
    *   **Key Output**: **Artifacts** (Content) and **Reflections** (Feedback).

*   **The Watchdog (Auditor)**
    *   **Function**: Quality Assurance and Compliance.
    *   **Behavior**: The Watchdog enforces standards. They review the work produced by Operatives against the "Definition of
Done" and global safety or quality guidelines. They flag risks or rejections but do not modify the work themselves.
    *   **Key Output**: **Flags** (High-priority alerts regarding quality or safety).

*   **The Envoy (Synthesizer)**
    *   **Function**: Communication Interface.
    *   **Behavior**: The Envoy acts as the narrator. They observe the activity of the entire team (the data changes, decisions,
and discussions) and synthesize it into a coherent, human-readable update for the user.
    *   **Key Output**: **Session Logs** (A narrative summary of the round).

### 2. The Execution Loop

The Orchestrator runs continuously until the mission is complete or halted. Each iteration (Round) executes the following
sequence of steps:

#### Phase A: Strategy & Alignment

**1. Bootstrap (Initialization)**
*   *Trigger*: Occurs only in Round 0.
*   *Process*: The system analyzes the user's initial prompt to generate the **Mission Charter** and **Underlying Objectives**.
It instantiates the necessary agent personas and defines their areas of responsibility.

**2. Reflect (Context Analysis)**
*   *Actor*: Operatives.
*   *Process*: Before taking action, Operatives analyze the current state of the mission. They identify dependencies, blockers,
or ambiguities in their assigned areas. This step ensures that agents do not work in isolation or on outdated assumptions.
*   *Output*: Internal notes ("Reflections") and cross-team questions ("Collabs").

**3. Plan & Assign (Decomposition)**
*   *Actor*: Chair.
*   *Process*: The Chair reviews the mission status and the team's reflections. They perform three key actions:
    *   **Structure**: Create new Products (tasks) or refine existing ones.
    *   **Assign**: Map specific Products to specific Operatives based on expertise and availability.
    *   **Accept**: Review completed items and mark them as `Done` if criteria are met.

#### Phase B: Production

**4. Write (Execution)**
*   *Actor*: Operatives (Parallel Execution).
*   *Process*: Operatives execute their assigned tasks. They generate content based on the "Definition of Done."
*   *Validation*: The system strictly enforces ownership—an agent can only write to the Product ID they were assigned.
*   *Output*: **Versions** (Snapshots of content) or **Collabs** (if blocked).

#### Phase C: Review

**5. Peer Review (Horizontal Feedback)**
*   *Actor*: Operatives.
*   *Condition*: Triggered if new work was produced.
*   *Process*: Operatives review work produced by *other* agents that impacts their own domain. This creates a feedback loop
where agents catch logical inconsistencies between different parts of the project.

**6. Inspection (Vertical Feedback)**
*   *Actor*: Watchdog.
*   *Condition*: Triggered if new work was produced.
*   *Process*: The Watchdog performs a compliance pass. They verify that the output strictly meets the requirements defined by
the Chair. If criteria are unmet, they flag the item, preventing it from being marked as "Done" in the next planning phase.

#### Phase D: Reporting

**7. Presentation (Synthesis)**
*   *Actor*: Envoy.
*   *Process*: The Envoy analyzes the "Deltas" (all changes, comments, and new files) from the round. They generate a
conversational log that simulates the team's internal dialogue, providing the user with transparency into the progress and
decisions made.

### 3. The Data Model

The algorithm manages the project state using four primary entities:

1.  **Product**: A generic unit of work. It represents *what* needs to be built (e.g., "Chapter 1," "Budget Spreadsheet,"
"Database Schema"). It has a hierarchical relationship (Parent/Child) to support complex projects.
2.  **Version**: The immutable content of a Product at a specific point in time.
3.  **Collab**: A unit of communication. It represents feedback, questions, directives, or flags attached to a Product.
4.  **Assignment**: A temporary link between an Operative and a Product for the duration of a single round.

### 4. Key Mechanisms

*   **Context Tree**: An in-memory graph that tracks the relationships between all products, members, and feedback. It allows the
system to provide agents with context-aware prompts (e.g., "You are working on X, which depends on Y, and Z just changed").
*   **Stall Detection**: A safety mechanism that monitors the rate of artifact creation. If the team cycles through rounds
without producing tangible outputs (Versions), the system halts to prevent infinite loops.
*   **Adaptive Retry**: The system uses strict schema validation for all agent outputs. If an agent produces malformed data, the
system feeds the error back to the agent and requests a correction within the same step, ensuring robust operation.
1. Functional Roles
The algorithm abstracts agency into four distinct functional roles. These roles define how an agent interacts with the system and
the mission data, independent of their specific subject-matter expertise.
The Chair (The Strategist)
Function: Decomposition, Planning, and Resource Allocation.
Behavior: The Chair holds the "master plan." They do not execute individual tasks. Their responsibility is to maintain the
structural integrity of the mission. They analyze the current state, break high-level objectives into granular components
("Products"), and assign these components to the most suitable Operative based on the available roster.
Capabilities:
Create/Edit/Archive Products.
Issue Assignments.
Mark Products as "Done" (Acceptance).
Example: In a Film Production mission, the Chair identifies that "Script," "Casting," and "Location Scouting" are necessary
steps. They assign "Script" to the Writer agent and "Casting" to the Casting Director agent.
The Operatives (The Executors)
Function: Production and Expertise.
Behavior: Operatives are the specialized workers. Each Operative possesses a specific persona (e.g., Historian, Mathematician,
Coder). They receive precise assignments from the Chair, execute the work, and produce the actual content. They are the only
agents authorized to create "Versions."
Capabilities:
Create Versions (Content).
Create Reflections (Internal analysis).
Create Collabs (Feedback/Questions).
Example: In the Film Production mission, the "Writer" Operative receives the "Script" assignment and produces "Draft 1.0" (a
Version).
The Watchdog (The Auditor)
Function: Compliance and Quality Assurance.
Behavior: The Watchdog acts as a safety valve. They review new work against the "Definition of Done," mission constraints, and
safety guidelines. They cannot modify content; they can only flag issues or reject work.
Capabilities:
Create Collabs (Flags/Rejections).
Example: The Watchdog reviews the "Script" and flags that it exceeds the required page count or violates a content rating
restriction.
The Envoy (The Narrator)
Function: Synthesis and Interface.
Behavior: The Envoy acts as the bridge between the autonomous team and the user. They observe the "Deltas" (changes) from the
round—decisions made, files created, issues flagged—and synthesize them into a coherent, human-readable narrative log.
Capabilities:
Generate Chat Logs.
Example: The Envoy reports: "The Writer completed the first draft of the script. The Chair has now unlocked the Casting phase."
2. The Artifact Model (Data Structure)
The algorithm operates on a strict data model. These entities are the "memory" of the system, persisting state across rounds.
Product (The Container)
A generic unit of work or requirement. It represents what needs to exist.
Properties:
id: Unique Identifier.
type:
Decision: A strategic choice (e.g., "Choose Genre").
Content: A tangible deliverable (e.g., "Chapter 1").
Collection: A grouping of related products (e.g., "Act 1").
definition_of_done: The acceptance criteria.
status: Pending, In Progress, Done, Archived.
owner_id: The Operative currently responsible for it.
Version (The Content)
An immutable snapshot of the work produced for a Product.
Properties:
product_id: Link to the parent Product.
content: The actual data (text, code, JSON, etc.).
change_summary: The author's explanation of what this version achieves.
version_number: Sequential integer (v1, v2, v3).
Collab (The Signal)
A unit of communication or metadata attached to Products.
Properties:
refers_to_product: The target of the feedback.
type: Directive, Critique, Question, Flag.
content: The message payload.
importance: Priority level (1-10).
resolved: Boolean status.
Assignment (The Link)
A temporary, round-specific instruction from Chair to Operative.
Properties:
round: The round number.
product_id: The task to work on.
assignee_id: The agent responsible.
directive: Specific instructions for this round (e.g., "Focus on the intro").
3. The Execution Loop (The Algorithm)
The Orchestrator executes a continuous loop. Each iteration is a Round.
Phase A: Strategy & Alignment
Bootstrap (Genesis)
Trigger: Round 0 only.
Logic: The system analyzes the User's Prompt. It generates a Mission Charter (the north star) and instantiates the necessary
Personas for the team members, defining their expertise and roles.
Reflect (Context Gathering)
Actor: Operatives.
Logic: Operatives scan the Context Tree. They look for:
New dependencies (Has the task I was waiting on been finished?).
Ambiguities (Do I understand the Definition of Done?).
Outcome: They post Collabs (Questions) or Reflections (Notes) to align before execution.
Plan & Assign (Orchestration)
Actor: Chair.
Logic: The Chair digests the mission status and team reflections.
Decomposition: If a task is too big, they break it into sub-Products.
Assignment: They look at the roster's skills and assign pending Products to the best-fit Operatives.
Acceptance: They review completed items. If the Definition of Done is met, they mark it Done.
Outcome: A set of Assignments for the current round.
Phase B: Production
Write (Execution)
Actor: Operatives (Parallel).
Logic: Each assigned Operative enters deep work mode. They read the history of their Product and the Chair's directive. They
generate the content.
Constraint: An Operative can only create versions for the Product ID they were assigned.
Outcome: New Versions of artifacts.
Phase C: Quality Control
Peer Review (Cross-Check)
Actor: Operatives.
Logic: Operatives review artifacts created by others that interface with their own work.
Example: In a Construction mission, the "Plumber" agent reviews the "Framer's" blueprints to ensure there is space for pipes.
Outcome: Collabs (Critiques/Approvals).
Inspection (Compliance)
Actor: Watchdog.
Logic: The Watchdog scans all new Versions. They check strictly against the specific "Definition of Done" and global safety
rules.
Outcome: Collabs (Flags) if issues are found.
Phase D: Reporting
Presentation (Synthesis)
Actor: Envoy.
Logic: The Envoy queries the "Deltas" (changeset) of the round. They filter out low-level noise and format the key events into a
narrative update for the user.
Outcome: A chat stream entry.
4. Core Mechanisms
Context Tree: The system maintains a live graph of the mission. Agents query this tree to understand the state of the world. It
supports "Delta Loading," meaning agents only need to process what has changed since they last looked, keeping the system
efficient.
Stall Detection: The Orchestrator monitors the "velocity" of the mission. If multiple rounds pass without new Versions or
significant Product state changes, the system triggers a halt to prevent infinite looping or "spinning wheels."
Structured Outputs: Every interaction with the underlying LLM is strictly schema-validated (using Zod). If an agent returns
malformed data, the system uses Adaptive Retry—it catches the error, feeds it back to the agent, and asks for a correction within
the same step.
Hierarchical Decomposition: The algorithm enforces a tree structure for tasks. A root Product can have children, which can have
children. Work is typically executed at the leaf nodes, while status aggregates up to the root.

## Data Storage & Structure

Cabal uses (conceptually):

### Relational Database

For structured data:
- Users, workspaces, sessions
- Products (nodes)
- Versions and history
- Remarks and logs

### Object/File Storage

For larger artifacts:
- Uploads (if supported)
- Possibly large artifacts

### Schema Design Principles

The schema is designed to:
- Keep a full history of how a product was produced
- Allow replay / inspection of decisions
- Support eventual analytics (e.g. which agent types work best)
- Enable audit trails for enterprise requirements

## LLM Integration

### External Providers

Cabal does **not** run its own foundational models. It orchestrates **external LLM providers**.

**Supported/potential providers:**
- OpenAI (GPT-4, etc.)
- Anthropic (Claude)
- Others as needed

### Integration Pattern

```
┌─────────────────────────────────────────────────────────┐
│                    CABAL BACKEND                        │
│                                                         │
│  ┌──────────────┐     ┌──────────────┐                 │
│  │ Orchestrator │────▶│ Prompt       │                 │
│  │              │     │ Builder      │                 │
│  └──────────────┘     └──────────────┘                 │
│         │                    │                          │
│         ▼                    ▼                          │
│  ┌──────────────┐     ┌──────────────┐                 │
│  │ Context Tree │     │ LLM Router   │◀───────────────┐│
│  │ Service      │     │              │                ││
│  └──────────────┘     └──────────────┘                ││
│                              │                         ││
└──────────────────────────────│─────────────────────────┘│
                               ▼                          │
                    ┌──────────────────┐                  │
                    │  External LLMs   │                  │
                    │  ┌────┐ ┌────┐   │                  │
                    │  │GPT │ │Claude│  │──────────────────┘
                    │  └────┘ └────┘   │    (responses)
                    └──────────────────┘
```

### Key Points

- User content is transmitted to third-party LLMs
- Responses are returned and processed by Cabal
- Multiple providers can be used within a session
- Model selection can be configurable per workspace

## Scalability Considerations

### Horizontal Scaling

- Stateless API servers
- Database connection pooling
- Background job processing
- Cache layers for context

### Performance Optimization

- Context compression and summarization
- Incremental context updates
- Parallel agent execution where possible
- Efficient node versioning

### Cost Management

- Token usage tracking
- Budget limits per workspace
- Model tier selection
- Context optimization to reduce tokens

## Security Architecture

### Authentication & Authorization

- Standard auth patterns (OAuth, JWT)
- Workspace-level access control
- Role-based permissions

### Data Isolation

- Multi-tenant data separation
- Workspace data isolation
- Session-level access control

### Audit & Compliance

- Action logging
- Data access logs
- GDPR/compliance hooks

## Future Architecture Considerations

**Potential extensions:**
- Custom models per enterprise
- Integration into internal tools & workflows
- API-first / embedded workflows inside other products
- On-premise deployment options
- Real-time collaboration features

---

**Related:**
- [Core concepts](./core-concepts.md) - Fundamental concepts referenced here
- [Technical specs](./technical-specs/README.md) - Implementation details
- [Vision](../overview/vision.md) - Problem this approach solves
- [Data & Privacy](../overview/legal/data-and-privacy.md) - Data handling details

← Back to [Algorithm Guide](./README.md)