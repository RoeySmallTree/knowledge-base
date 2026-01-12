# Step 5: Inspect — Concrete V4.7 Example

**Based on:** `cabal-be/logs/latest/rounds/round-1/steps/5-inspect/watchdog-1-technical-specialist/input.txt`  
**Relies on:** `V4.7_inspect_system.md` + `V4.7_inspect_user.md`

---

## Session Context (Extracted from Logs)

| Field | Value |
|-------|-------|
| Session | TODO List MVP |
| Round | 1 |
| Watchdog | Marco (watchdog-1, Technical Specialist) |
| Products to Inspect | MVP Features Selection, Technical Architecture, Database Schema, API Design, Launch Announcement |

---

## V4.7 User Prompt (Key Sections)

```markdown
[MISSION]
Develop a TODO List MVP with core task management features. 80% features working, user-friendly interface.

[ROUND]
1

[PRODUCTS CHANGED THIS ROUND]
- **Decision: MVP Features Selection** (54b4ad41...) → V1
  changeSummary: "Defined core features for the MVP based on user needs and development constraints."
  
- **Technical Architecture Spec** (d5d4ae24...) → V1
  changeSummary: "Documented the technical architecture for the MVP, focusing on scalability."
  
- **Database Schema Design** (fad8e5da...) → V1
  changeSummary: "Created a database schema design document focusing on core task management."
  
- **API Design Document** (0734eb0b...) → V1
  changeSummary: "Developed the API design document aligned with technical architecture."
  
- **Launch Announcement** (759e700b...) → V1
  changeSummary: "Created a launch announcement with key features and productivity focus."

[FEEDBACK ALREADY POSTED]
- operative-1 → Launch Announcement (7): "Add specific core features and user feedback call-to-action."
- operative-2 → MVP Features Selection (8): "Add prioritization and rationale for feature selection."
- operative-2 → Technical Architecture (7): "Include scalability and performance metrics."
- operative-2 → Database Schema (7): "Explain schema support for core features."
- operative-2 → API Design (6): "Add error handling and response formats."

[VALID IDS]
Products: (all 10 products listed with UUIDs)
Team: chair-1, operative-1, operative-2, watchdog-1, envoy-1
```

---

## Expected V4.7 Output

```json
{
  "reasoning": "Round 1 inspection. 5 new versions created. Peer review already caught many issues. Focusing on security (my specialty), DoD coverage, and mission coherence. MVP Features Selection needs stronger prioritization rationale per DoD.",
  
  "inspections": [
    {
      "productId": "54b4ad41-a64d-43fa-9e27-09081f8eed6b",
      "productName": "Decision: MVP Features Selection",
      "overallAssessment": "needs-revision",
      "findings": [
        {
          "category": "completeness",
          "severity": 8,
          "issue": "DoD requires 'prioritized feature list with rationale' but V1 lacks explicit prioritization framework (effort/impact matrix).",
          "recommendation": "Add prioritization matrix showing why core 4 features were selected over deferred features.",
          "dodCriterion": "Output: Prioritized feature list with rationale"
        }
      ]
    },
    {
      "productId": "d5d4ae24-3375-48c0-9b41-a4c90fe10fc9",
      "productName": "Technical Architecture Spec",
      "overallAssessment": "needs-revision",
      "findings": [
        {
          "category": "security",
          "severity": 7,
          "issue": "No mention of input validation for API endpoints. Task titles could be attack vector for XSS.",
          "recommendation": "Add input validation section specifying sanitization for title/description fields.",
          "dodCriterion": "Document the technical architecture"
        },
        {
          "category": "completeness",
          "severity": 6,
          "issue": "Performance targets stated (<2s load, <200ms API) but no measurement/monitoring strategy.",
          "recommendation": "Add section on how performance will be measured and monitored.",
          "dodCriterion": "Technical architecture including API design"
        }
      ]
    },
    {
      "productId": "fad8e5da-cc6a-4096-9341-e1917cc29292",
      "productName": "Database Schema Design",
      "overallAssessment": "approved",
      "findings": []
    },
    {
      "productId": "0734eb0b-68ec-4d78-b5da-361caeb515f8",
      "productName": "API Design Document",
      "overallAssessment": "needs-revision",
      "findings": [
        {
          "category": "security",
          "severity": 7,
          "issue": "No rate limiting mentioned for endpoints. Delete endpoint vulnerable to abuse.",
          "recommendation": "Add rate limiting strategy (e.g., 100 req/min per IP for mutations).",
          "dodCriterion": "Create an API design document"
        }
      ]
    },
    {
      "productId": "759e700b-b7eb-48f5-aefe-15e267d97de6",
      "productName": "Launch Announcement",
      "overallAssessment": "approved",
      "findings": []
    }
  ]
}
```

---

## Key V4.7 Improvements Over Legacy

| Aspect | Legacy | V4.7 |
|--------|--------|------|
| Assessment output | Notes only | ✅ approved/needs-revision/blocked |
| Finding structure | Prose | ✅ category/severity/issue/recommendation/dodCriterion |
| Severity scoring | Just 1-10 | ✅ Severity table with meaning |
| Security focus | Generic | ✅ 6-point framework with security first |
| DoD reference | Missing | ✅ Explicit dodCriterion field |
