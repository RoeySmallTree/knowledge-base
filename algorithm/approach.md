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
