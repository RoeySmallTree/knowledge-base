# Step 3: Write — Concrete V4.7 Example

**Based on:** `cabal-be/logs/latest/rounds/round-1/steps/3-write/operative-1-full-stack-developer/input.txt`  
**Relies on:** `V4.7_write_system.md` + `V4.7_write_user.md`

---

## Session Context (Extracted from Logs)

| Field | Value |
|-------|-------|
| Session | TODO List MVP |
| Round | 1 |
| Operative | Alex (operative-1, Full-Stack Developer) |
| Assigned Products | MVP Features Selection, Technical Architecture Spec, Database Schema, API Design |

---

## V4.7 System Prompt (Key Sections)

```markdown
You are **Alex** (operative-1), the **Full-Stack Developer** on this team.

You are the full-stack engine of this app. Your obsession is clean code and fast iteration. You treat every unnecessary dependency as a personal insult. React + Node in your sleep.

---

You are an **Operative** performing a **Write** action in the CABAL system.

### Write Execution Flow
For each assigned product:
1. Read the PRODUCT CONTEXT (DoD, directive, feedback)
2. Plan your content
3. Write in markdown (NOT JSON)
4. Summarize which items you addressed

### Output Schema
{
  "versions": [{ "productId": "UUID", "newVersion": { "contentTitle": "...", "content": "...", "changeSummary": "..." } }],
  "collabs": [{ "refersToProduct": "UUID", "importance": 1-10, "comment": "...", "shortestSummary": "..." }]
}
```

---

## V4.7 User Prompt (Filled from Logs)

```markdown
[MISSION]
Develop a TODO List MVP with core task management features.

[OBJECTIVES]
1. Speed: Deliver working MVP within tight timeline
2. Simplicity: Any user should understand UI in 10 seconds
3. Reliability: Zero data loss
4. Quality: 80% feature completion

[TEAM]
- Richard (chair): Mission ownership
- Jordan (operative-2): Technical Architecture
- Marco (watchdog): QA, Security
- Stacy (envoy): Communications

[ROUND]
1

[YOUR PRODUCT #1: Decision: MVP Features Selection]
ID: 54b4ad41-a64d-43fa-9e27-09081f8eed6b
Type: Decision
Status: pending
DoD: Decide which core features to include. Evaluate based on user needs and timeline. Output: Prioritized feature list with rationale.

[DIRECTIVE]
Round 1, Chair (importance 10):
"Define the core features for the MVP based on user needs and development constraints."

[VERSION HISTORY]
(no versions yet)

[FEEDBACK]
(no feedback yet)

---

[YOUR PRODUCT #2: Technical Architecture Spec]
ID: d5d4ae24-3375-48c0-9b41-a4c90fe10fc9
Type: Content
Status: pending
DoD: Document the technical architecture including database schema and API design.

[DIRECTIVE]
Round 1, Chair (importance 8):
"Document the technical architecture. Your full-stack expertise ensures a scalable design."

[VERSION HISTORY]
(no versions yet)

[FEEDBACK]
(no feedback yet)

---

[YOUR PRODUCT #3: Database Schema Design]
ID: fad8e5da-cc6a-4096-9341-e1917cc29292
Type: Content
Status: pending
DoD: Create a database schema design document for the TODO List MVP.

[DIRECTIVE]
Round 1, Chair (importance 7):
"Create the database schema design document. Focus on core task management features."

---

[YOUR PRODUCT #4: API Design Document]
ID: 0734eb0b-68ec-4d78-b5da-361caeb515f8
Type: Content
Status: pending
DoD: Create an API design document for the TODO List MVP.

[DIRECTIVE]
Round 1, Chair (importance 6):
"Develop the API design document. Ensure it aligns with the technical architecture."

[VALID IDS]
Products:
  54b4ad41-a64d-43fa-9e27-09081f8eed6b → "Decision: MVP Features Selection" [Decision]
  d5d4ae24-3375-48c0-9b41-a4c90fe10fc9 → "Technical Architecture Spec" [Content]
  fad8e5da-cc6a-4096-9341-e1917cc29292 → "Database Schema Design" [Content]
  0734eb0b-68ec-4d78-b5da-361caeb515f8 → "API Design Document" [Content]

Team Members:
  operative-2 → Jordan (Technical Specialist)
```

---

## Expected V4.7 Output

```json
{
  "versions": [
    {
      "productId": "54b4ad41-a64d-43fa-9e27-09081f8eed6b",
      "newVersion": {
        "contentTitle": "MVP Features Selection Decision",
        "content": "## Core Features for TODO List MVP\n\n### Must-Have (V1)\n1. **Add Task** — Title (required), description (optional)\n2. **View Tasks** — List all tasks with status indicator\n3. **Mark Complete/Incomplete** — Toggle task status\n4. **Delete Task** — Remove task permanently\n\n### Nice-to-Have (V2+)\n- Edit task title/description\n- Due dates\n- Categories/tags\n- Search/filter\n\n### Rationale\n- User mission explicitly states: add, complete, delete, view\n- 10-second usability goal requires minimal UI complexity\n- Edit can be deferred — users can delete + re-add\n\n### Timeline Feasibility\n✅ 4 features in core set = achievable in tight timeline\n⚠️ Edit deferred to reduce scope creep",
        "changeSummary": "Defined core features (add/view/complete/delete) with rationale. Deferred edit to V2 for timeline."
      }
    },
    {
      "productId": "d5d4ae24-3375-48c0-9b41-a4c90fe10fc9",
      "newVersion": {
        "contentTitle": "Technical Architecture Spec V1",
        "content": "## Technical Architecture Overview\n\n### Frontend\n- **Framework**: React\n- **State Management**: Context API (simple scope)\n- **Styling**: CSS Modules\n\n### Backend\n- **Framework**: Node.js + Express\n- **Database**: MongoDB (flexible schema for MVP)\n- **API**: REST endpoints\n\n### Deployment\n- **Target**: Railway or Vercel\n- **CI/CD**: GitHub Actions\n\n### Data Flow\n1. User action → React component\n2. API call → Express endpoint\n3. DB operation → MongoDB\n4. Response → Update UI state\n\n### Performance Targets\n- Page load: <2s\n- API response: <200ms",
        "changeSummary": "Documented React/Node/MongoDB stack with deployment strategy. Performance targets defined."
      }
    },
    {
      "productId": "fad8e5da-cc6a-4096-9341-e1917cc29292",
      "newVersion": {
        "contentTitle": "Database Schema Design V1",
        "content": "## Database Schema\n\n### Tasks Collection\n```javascript\n{\n  taskId: ObjectId,      // Primary key\n  title: String,         // Required\n  description: String,   // Optional\n  isCompleted: Boolean,  // Default: false\n  createdAt: Date,       // Default: Date.now\n  updatedAt: Date        // Auto-update on change\n}\n```\n\n### Indexes\n- `taskId` — Primary key (automatic)\n- `isCompleted` — Filter completed/active\n- `createdAt` — Sort by creation date\n\n### Migration Strategy\n- MongoDB: No explicit migrations needed\n- Use mongoose schema validation",
        "changeSummary": "Created Tasks schema with core fields. Added indexes for isCompleted and createdAt."
      }
    },
    {
      "productId": "0734eb0b-68ec-4d78-b5da-361caeb515f8",
      "newVersion": {
        "contentTitle": "API Design Document V1",
        "content": "## API Endpoints\n\n### POST /tasks\nCreate a new task.\n```json\nRequest: { \"title\": \"string\", \"description\": \"string\" }\nResponse: { \"taskId\": \"...\", \"title\": \"...\", ... }\n```\n\n### GET /tasks\nRetrieve all tasks.\n```json\nResponse: [{ \"taskId\": \"...\", ... }]\n```\n\n### PUT /tasks/:id\nUpdate task (mark complete).\n```json\nRequest: { \"isCompleted\": true }\nResponse: { \"taskId\": \"...\", ... }\n```\n\n### DELETE /tasks/:id\nDelete a task.\n```json\nResponse: { \"deleted\": true }\n```\n\n### Error Handling\n- 400: Bad Request (missing title)\n- 404: Task not found\n- 500: Server error",
        "changeSummary": "Developed CRUD endpoints aligned with Technical Architecture. Added error handling."
      }
    }
  ],
  "collabs": [
    {
      "refersToProduct": "759e700b-b7eb-48f5-aefe-15e267d97de6",
      "importance": 7,
      "comment": "The launch announcement should mention specific core features: add, complete, delete, view. Also include a call-to-action for user feedback.",
      "shortestSummary": "Add specific features and feedback CTA to launch announcement"
    }
  ]
}
```

---

## Key V4.7 Improvements Over Legacy

| Aspect | Legacy | V4.7 |
|--------|--------|------|
| Content format | JSON warning | ✅ Clear markdown examples |
| Directive context | Shown | ✅ Explicit per-product |
| Version history | Present | ✅ Rich narrative format |
| Feedback display | Listed | ✅ With resolved status |
| Collab guidance | Brief | ✅ Full importance guidance |
