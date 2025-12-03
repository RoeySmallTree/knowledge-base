# Agents and Roles

**Status:** Core Context

## Purpose

Detailed explanation of Cabal's multi-agent system and role semantics.

## The Multi-Agent Team

Conceptually, a Cabal "team" looks like this:

```
┌─────────────────────────────────────────────────────────┐
│                        USER                             │
│                          ↕                              │
│                       ENVOY                             │
│                    (liaison)                            │
├─────────────────────────────────────────────────────────┤
│                       CHAIR                             │
│            (mission owner, orchestrator)                │
│                          ↓                              │
│    ┌──────────────┬──────────────┬──────────────┐      │
│    │  OPERATIVE   │  OPERATIVE   │  OPERATIVE   │      │
│    │ (specialist) │ (specialist) │ (specialist) │      │
│    └──────────────┴──────────────┴──────────────┘      │
│                          ↓                              │
│                      WATCHDOG                           │
│              (quality & constraints)                    │
└─────────────────────────────────────────────────────────┘
```

## Agent Roles

### Chair

**Function:** Project lead / mission owner

**Responsibilities:**
- Reads the user's prompt and evolving context
- Defines mission statement and objectives
- Creates **persona prompts** for each operative
- Chooses strategy and orchestrates rounds
- Approves key decisions
- Resolves conflicts between operatives

**Key outputs:**
- Mission statement
- Mission objectives
- Agent assignments
- Round plans

### Operatives

**Function:** Specialists executing specific tasks

**Responsibilities:**
- Each has a **specialty persona** (e.g. "Product strategist", "Skeptical analyst", "Copywriter")
- Receive chair-defined role and context
- Perform tasks: research, outlining, drafting, critiquing, proposing alternatives
- May iterate locally before submitting

**Example personas:**
- "Strategic Product Manager" - Focuses on user value and market fit
- "Devil's Advocate Analyst" - Challenges assumptions and finds weaknesses
- "Implementation Specialist" - Focuses on execution and feasibility
- "Communication Expert" - Ensures clarity and persuasiveness

**Key outputs:**
- Content nodes (sections, drafts)
- Collection nodes (research, options)
- Critiques and alternatives

### Watchdog

**Function:** Quality and constraints enforcement

**Responsibilities:**
- Enforces **rules, structure, and Definition of Done (DoD)**
- Checks for:
  - Logical consistency
  - Structural correctness (schema, required sections, JSON shape)
  - Violations of constraints or boundaries
- Marks outputs as acceptable or flags issues
- Cannot be overridden without explicit user permission

**Key outputs:**
- Validation reports
- Blocking remarks
- Structure verification

### Envoy

**Function:** User-facing liaison

**Responsibilities:**
- Represents the team to the **human user**
- Asks clarifying questions
- Summarizes progress
- Presents final results in human-friendly form
- Translates internal work into user-appropriate communication

**Key outputs:**
- User questions
- Progress summaries
- Final presentations
- Status updates

## Agent Interactions

### Information Flow

1. **User → Envoy**: Initial prompt, answers, feedback
2. **Envoy → Chair**: Structured user input
3. **Chair → Operatives**: Tasks, context, personas
4. **Operatives → Chair**: Drafts, proposals, critiques
5. **Chair → Watchdog**: Outputs for validation
6. **Watchdog → Chair**: Approval or issues
7. **Chair → Envoy**: Final outputs, questions
8. **Envoy → User**: Presentation, questions

### Collaboration Patterns

**Parallel work:** Multiple operatives can work simultaneously on different nodes

**Sequential review:** Work flows through Chair → Watchdog for quality control

**Iteration loops:** Failed validation triggers revision cycles

**User checkpoints:** Envoy surfaces blockers that need human input

## Implementation Notes

The actual implementation uses LLM prompts + orchestration logic, but these role semantics are stable for legal and product framing.

Each agent is instantiated with:
- System prompt (role definition)
- Context slice (relevant session data)
- Task prompt (specific instructions)
- Output schema (expected format)

---

← Back to [Product](./README.md) | [Overview](../README.md)
