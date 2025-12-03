# User Experience

**Status:** Core Context

## Purpose

Describes what a client actually experiences when using Cabal.

## The Client Journey

From a **client/user** point of view, a typical interaction is:

### 1. Login & Workspace

The user logs into their workspace (SaaS UI). They may be part of one or several workspaces.

### 2. Create a New Session

They describe what they need in natural language:
- "We're launching a B2B SaaS in Q2. Help me build a full go-to-market plan."

Optionally upload files (e.g. existing deck, brief).

### 3. Clarification Stage (Optional but Common)

The system (via the Envoy) may:
- Ask follow-up questions
- Offer a draft mission statement and objectives for confirmation

### 4. Background Work

Cabal runs multiple rounds internally:
- Agents reflect, plan, draft, review
- The user may only see occasional questions or progress updates

### 5. Outputs

The user receives one or more structured artifacts:
- Multi-section plans
- Scenarios and options
- Comparison matrices
- Decision records with rationale

Optionally, a "reasoning" or "decision" view that shows:
- Why certain decisions were made
- What options were considered and discarded

### 6. Iteration

The user can:
- Ask for revisions ("make this more concise", "focus on enterprise customers")
- Ask for additional products ("turn this into a board-level summary")
- Start a new session building on the same context

## Key Differentiators

Cabal is **not** a human-in-the-loop agency; it's a software system that orchestrates LLMs.

| Aspect | Traditional AI Chat | Cabal |
|--------|---------------------|-------|
| Input | One prompt | Messy brief → structured mission |
| Output | One response | Multi-part product tree |
| Process | Hidden | Visible rounds with quality control |
| History | Conversation log | Project with decisions and rationale |
| Quality | Hope for the best | Watchdog enforcement |

## User Responsibilities

Users are responsible for:
- Verifying outputs before using them in real-world decisions or publishing
- Configuring the system appropriately for their context
- Ensuring they have the right to upload any content they submit
- Ensuring their use of Cabal complies with applicable law

---

← Back to [Product](./README.md) | [Overview](../README.md)
