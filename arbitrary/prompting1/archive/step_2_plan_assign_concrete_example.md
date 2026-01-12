# Step 2: Plan & Assign — Concrete V4.7 Example

**Based on:** `cabal-be/logs/latest/rounds/round-1/steps/2-plan/chair-1/input.txt`  
**Relies on:** `V4.7_plan_assign_system.md` + `V4.7_plan_assign_user.md`

---

## Session Context (Extracted from Logs)

| Field | Value |
|-------|-------|
| Session | TODO List MVP |
| Round | 1 |
| Chair | Richard (chair-1) |
| Products | TODO List MVP (root), Context & Open Questions, Product Development, Marketing & Launch, Market Research |

---

## V4.7 System Prompt (Key Sections)

```markdown
You are **Richard** (chair-1), the **Full-Stack Developer** on this team.

---

You are the **Chair** performing a **Plan & Assign** action in the CABAL system.

You are in the **Plan & Assign** phase — the strategic hub of each round.

---

### Your Authority
As Chair, you are the MISSION OWNER.

### The 6-Point Planning Framework

1. **Mission Alignment Check** — Does tree cover the mission?
2. **Iteration vs Creation** — Prefer iteration over new products
3. **Structural Decisions** — Add/remove/reorder products
4. **Acceptance Decisions** — Accept products meeting DoD
5. **Assignments** — Assign with clear directives
6. **Questions for User** — Surface blocking unknowns

### Directive Format
**CORE OBJECTIVE:** [One sentence]
**DEFINITION OF DONE:** [2-4 bullets]
**WHY IT MATTERS:** [One sentence]
**CONTEXT:** [Reference to reflections/collabs]
```

---

## V4.7 User Prompt (Filled from Logs)

```markdown
[MISSION]
Develop a Minimum Viable Product (MVP) for a simple TODO list web application with core task management features. Core objective: functional prototype for add/edit/delete/complete tasks. DoD: 80% features working, user-friendly interface.

[OBJECTIVES]
1. Speed: Deliver working MVP within tight timeline
2. Simplicity: Any user should understand UI in 10 seconds
3. Reliability: Zero data loss
4. Quality: 80% feature completion with no critical bugs

[TEAM]
- **Richard** (chair-1): chair / Full-Stack Developer
  - Responsibility: Mission ownership, decisions, structure
- **Alex** (operative-1): operative / Full-Stack Developer
  - Responsibility: Full-Stack Development
- **Jordan** (operative-2): operative / Technical Specialist
  - Responsibility: Technical Architecture
- **Marco** (watchdog-1): watchdog / Technical Specialist
  - Responsibility: QA, Security
- **Stacy** (envoy-1): envoy / Product Strategist
  - Responsibility: Communications

[ROUND]
1

[PRODUCT TREE]
[Orchestration] **TODO List MVP** (adc982b9-f52b-431d-bfe8-7cd374e30a29)
  Status: pending | Owner: Richard
  DoD: Root container for session scope
  
  [Content] **Context & Open Questions** (51d70b2c-85a3-4ee4-ab20-8e2c965a34fe)
    Status: pending | Owner: (unassigned)
    DoD: Maintained throughout session with latest unknowns

[ROUND DELTA]
(No changes from prior round - this is Round 1)

[OPERATIVE REFLECTIONS]
(No reflections yet - Round 1)

[COLLABS & FEEDBACK]
[OPEN] User → TODO List MVP (7):
> "Build a simple TODO list web application MVP..."

[PRODUCTS PENDING ACCEPTANCE]
(None)

[VALID IDS]
Products:
  adc982b9-f52b-431d-bfe8-7cd374e30a29 → "TODO List MVP" [Orchestration, pending]
  51d70b2c-85a3-4ee4-ab20-8e2c965a34fe → "Context & Open Questions" [Content, pending]

Team Members (Operatives only for assignments):
  operative-1 → Alex (Full-Stack Developer)
  operative-2 → Jordan (Technical Specialist)
```

---

## Expected V4.7 Output

```json
{
  "structureDelta": "Add Collection: \"Product Development\" [operative-1]\n  > Content: \"Technical Architecture Spec\" [operative-1]\n  > Content: \"Database Schema Design\" [operative-1]\n  > Content: \"API Design Document\" [operative-1]\nAdd Collection: \"Marketing & Launch\" [operative-2]\n  > Content: \"Launch Announcement\" [operative-2]\nAdd Collection: \"Market Research\"\nAdd Decision: \"MVP Features Selection\" [operative-1]",
  
  "changes": [],
  
  "assignments": [
    {
      "productId": "temp:mvp-features",
      "assigneeIds": ["operative-1"],
      "directive": {
        "importance": 10,
        "comment": "**CORE OBJECTIVE:** Define the core features for the TODO List MVP.\n\n**DEFINITION OF DONE:**\n- Prioritized feature list (must-have vs nice-to-have)\n- Rationale for each feature based on user needs\n- Timeline feasibility assessment\n\n**WHY IT MATTERS:** This decision gates all downstream development work.\n\n**CONTEXT:** Round 1 bootstrap. User mission specifies add/edit/delete/complete as core."
      },
      "setRoundFocus": true
    },
    {
      "productId": "temp:tech-arch",
      "assigneeIds": ["operative-1"],
      "directive": {
        "importance": 8,
        "comment": "**CORE OBJECTIVE:** Document the technical architecture for the TODO List MVP.\n\n**DEFINITION OF DONE:**\n- Frontend framework choice with rationale\n- Backend stack with API design approach\n- Database choice and schema overview\n- Deployment strategy\n\n**WHY IT MATTERS:** Your full-stack expertise ensures a scalable design.\n\n**CONTEXT:** Round 1. Must support CRUD operations and responsive UI."
      },
      "setRoundFocus": true
    },
    {
      "productId": "temp:db-schema",
      "assigneeIds": ["operative-1"],
      "directive": {
        "importance": 7,
        "comment": "**CORE OBJECTIVE:** Create the database schema design document.\n\n**DEFINITION OF DONE:**\n- Task entity with all fields\n- Indexing strategy for performance\n- Migration approach\n\n**WHY IT MATTERS:** Solid schema prevents data issues later.\n\n**CONTEXT:** Must support core task management features."
      },
      "setRoundFocus": true
    },
    {
      "productId": "temp:api-design",
      "assigneeIds": ["operative-1"],
      "directive": {
        "importance": 6,
        "comment": "**CORE OBJECTIVE:** Develop the API design document.\n\n**DEFINITION OF DONE:**\n- All CRUD endpoints documented\n- Request/response formats\n- Error handling strategy\n\n**WHY IT MATTERS:** Clear API contract enables parallel frontend/backend work.\n\n**CONTEXT:** Ensure alignment with Technical Architecture."
      },
      "setRoundFocus": true
    },
    {
      "productId": "temp:launch",
      "assigneeIds": ["operative-2"],
      "directive": {
        "importance": 5,
        "comment": "**CORE OBJECTIVE:** Create the launch announcement.\n\n**DEFINITION OF DONE:**\n- Product value proposition\n- Key features highlighted\n- Call-to-action for users\n\n**WHY IT MATTERS:** Your communication skills convey the product's value.\n\n**CONTEXT:** Round 1. Focus on MVP messaging."
      },
      "setRoundFocus": true
    }
  ],
  
  "acceptance": [],
  
  "questionsForUser": []
}
```

---

## Key V4.7 Improvements Over Legacy

| Aspect | Legacy | V4.7 |
|--------|--------|------|
| Directive format | Prose | ✅ CORE OBJECTIVE/DOD/WHY/CONTEXT |
| structureDelta | Mentioned | ✅ Used for hierarchical creation |
| Acceptance workflow | Missing | ✅ Ready (no products to accept yet) |
| Reflections input | Missing | ✅ Section present (empty for R1) |
| Valid IDs | Listed | ✅ Structured with types |
