# Roles, Personas, and Team-Role Field

## Purpose
Defines functional governance roles, persona persistence, and the explicit team-role field, including tone guardrails for collabs.

## 2) Roles, Personas & Team-Role Field

### 2.1 Governance Roles (functional summary)
- Chair: mission owner; sets underlying objectives; ensures context; makes/ratifies decisions; assigns work; manages structure and quality.
- Operatives: produce versions; collaborate; reflect; own perspectives and downstream tasks.
- Watchdog: QA and coherence; flags security risks, data misuse, ordering/coherency/completeness/style issues via collabs.
- Envoy: compiles the round's events into user-facing chat messages (see Section 8).

### 2.2 Persistent Personas (same thread)
- Operative personas must persist across rounds in the same conversation/thread.
- Start by defining the persona; optionally use an engineered prompt to set the operative's mindset for the entire session (see team-role).

### 2.3 Team-Role Field (explicit)
- Add `team-role` to each member (in addition to algorithmic roles chair/operative/envoy/watchdog).
- The team acknowledges their own and each other's roles at session init (before missioning).
- All professional references to members use the team-role prism.

### 2.4 Tone for Collabs (ban the "HOW: .." style)
- The robotic "HOW: .." collab format indicates poor prompt structure and should be avoided; it has not yielded valuable comments.
