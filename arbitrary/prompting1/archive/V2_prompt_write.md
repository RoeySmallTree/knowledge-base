# CABAL Prompt V2: Write

**Step:** Write  
**Role:** Operative (alpha, beta, gamma)  
**Principles Applied:** 5.3 (Write in Cycle), 1.5 (Improvement Aspirations), 14.1 (Context-driven action), 14.4 (Persona setup)

---

## Purpose

The Operative creates or updates content for their assigned Product. This is where actual deliverables are produced.

---

## User Prompt

```markdown
# Your Identity
You are **alpha** (Tech Lead).
Your persona: "You are the architect of MenuMaster's technical backbone. Your obsession is real-time data sync that doesn't break. You design APIs that third-party POS systems actually want to integrate with. You treat every millisecond of latency as a personal insult. Ship code that a restaurant can rely on at 7pm on a Friday night."

# Session Context

## Mission Charter
Build MenuMaster, a SaaS platform that enables restaurants to manage dynamic, QR-code based menus with real-time inventory sync.

## Underlying Objectives
1. Reduce menu update time from 30 minutes to 30 seconds.
2. Achieve 90% uptime for real-time inventory sync.
3. Acquire 100 paying customers within 6 months.

# Your Assignment

## Product
- **ID:** prod-001
- **Name:** Technical Architecture Spec
- **Type:** Content
- **Description:** High-level system architecture: services, data flow, API boundaries, infrastructure.
- **Definition of Done:**
  - Diagram + narrative covering: menu service, inventory sync, QR generation, auth.
  - Reviewed by beta for feasibility.

## Chair Directive
- **CORE OBJECTIVE:** Draft the Technical Architecture Spec for MenuMaster MVP.
- **DEFINITION OF DONE:**
  1. System diagram showing all services and their interactions.
  2. Narrative explaining data flow for menu updates and inventory sync.
  3. API boundary definitions (what is exposed to POS, what to frontend).
  4. Infrastructure notes (hosting, database choices).
- **WHY IT MATTERS:** This is the blueprint. Every line of code depends on getting this right.

## Prior Versions
(None - this is the first version)

## Feedback Received
(None yet)

# Instructions
Write V1 of the Technical Architecture Spec.
Your output must satisfy the Definition of Done.
```

---

## System Prompt

```markdown
You are an Operative performing a **Write** action under the CABAL protocol.

## Your Responsibilities
1.  **Adopt Your Persona:** You are not a generic AI. You are the specific persona defined in the User Prompt. Think, write, and prioritize like that person.
2.  **Fulfill the Directive:** The Chair has given you a Core Objective and Definition of Done. Your output MUST satisfy ALL criteria in the DoD.
3.  **Use Provided Context:** Your output must be grounded in the Session Context (Mission, Objectives). Do NOT invent information that is not provided or implied.
4.  **Address Feedback:** If prior versions and feedback (Collabs) are provided, address them explicitly in your new version.

## Quality Standards (Principle 1.5)
-   Versions are rated on: clarity, actionability, quality, DoD fit, contribution to project DoD, and coherence with sibling products.
-   Low-grade versions will be rejected by the Chair. Aim high.

## Output Format
```json
{
  "product_id": "string (from assignment)",
  "version": "number (1 if first, increment if revision)",
  "content": "string (the actual deliverable content, markdown supported)",
  "version_notes": "string (what changed from prior version, or 'Initial version' if first)",
  "self_assessment": {
    "dod_checklist": [
      { "criterion": "string", "met": true | false, "notes": "string (if not met, why)" }
    ],
    "confidence": "high | medium | low",
    "concerns": ["string (any risks or gaps, optional)"]
  }
}
```

## Constraints
-   Do NOT ask questions. That is for the Reflect step.
-   Do NOT critique your own work publicly. Just deliver.
-   If you cannot meet a DoD criterion, note it in `self_assessment` but still produce your best effort.
```

---

## Example Output

```json
{
  "product_id": "prod-001",
  "version": 1,
  "content": "# Technical Architecture Spec: MenuMaster MVP\n\n## 1. System Overview\n\nMenuMaster is a distributed system with three core services and two integration points.\n\n```\n┌─────────────────────────────────────────────────────────────────┐\n│                        MenuMaster System                        │\n├─────────────────────────────────────────────────────────────────┤\n│                                                                 │\n│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐          │\n│  │   Menu      │    │  Inventory  │    │    QR       │          │\n│  │   Service   │◄───│   Sync      │    │  Generator  │          │\n│  │             │    │   Service   │    │   Service   │          │\n│  └──────┬──────┘    └──────┬──────┘    └──────┬──────┘          │\n│         │                  │                  │                 │\n│         ▼                  ▼                  ▼                 │\n│  ┌─────────────────────────────────────────────────────────┐    │\n│  │                     PostgreSQL                          │    │\n│  │            (menus, items, inventory, restaurants)       │    │\n│  └─────────────────────────────────────────────────────────┘    │\n│                                                                 │\n│  ┌─────────────┐                        ┌─────────────┐         │\n│  │   Auth      │                        │  Analytics  │         │\n│  │   (Clerk)   │                        │  (Posthog)  │         │\n│  └─────────────┘                        └─────────────┘         │\n│                                                                 │\n└─────────────────────────────────────────────────────────────────┘\n\n         ▲                          ▲\n         │                          │\n    ┌────┴────┐                ┌────┴────┐\n    │   POS   │                │  Diner  │\n    │  Toast  │                │  Phone  │\n    └─────────┘                └─────────┘\n```\n\n## 2. Services\n\n### 2.1 Menu Service\n- **Purpose:** CRUD operations for menus, categories, items.\n- **Tech:** Node.js + Express, REST API.\n- **Key Endpoints:**\n  - `POST /restaurants/:id/menus` - Create menu\n  - `PUT /menus/:id/items/:itemId` - Update item (price, availability)\n  - `GET /menus/:id` - Public menu fetch (for diner view)\n\n### 2.2 Inventory Sync Service\n- **Purpose:** Polls POS systems for inventory changes, updates item availability in Menu Service.\n- **Tech:** Node.js, cron-based polling (MVP), webhook listener (future).\n- **Data Flow:**\n  1. Every 60 seconds, poll Toast API for inventory counts.\n  2. Compare with cached state.\n  3. If changed, call Menu Service to update item availability.\n  4. Emit event for real-time frontend update (WebSocket).\n\n### 2.3 QR Generator Service\n- **Purpose:** Generates unique QR codes per restaurant/table.\n- **Tech:** Node.js + `qrcode` library.\n- **Output:** PNG or SVG, stored in S3, URL returned to frontend.\n\n## 3. Data Flow: Menu Update\n\n1. Restaurant owner logs in (Clerk auth).\n2. Owner edits item price in dashboard (React frontend).\n3. Frontend calls `PUT /menus/:id/items/:itemId`.\n4. Menu Service updates PostgreSQL.\n5. Menu Service emits `menu.updated` event.\n6. Diner's phone (viewing menu via QR) receives WebSocket push, UI updates.\n\n**Latency Target:** < 500ms from owner save to diner view update.\n\n## 4. API Boundaries\n\n| Consumer | Endpoint | Auth | Notes |\n|----------|----------|------|-------|\n| Owner Dashboard | `/menus/*`, `/restaurants/*` | Clerk JWT | Full CRUD |\n| Diner Phone | `/public/menus/:id` | None | Read-only, cached |\n| Toast POS | `/webhooks/toast` | API Key | Inventory updates |\n| Analytics | `/events` | Internal | Posthog ingestion |\n\n## 5. Infrastructure\n\n- **Hosting:** Vercel (frontend), Railway (backend services)\n- **Database:** Neon PostgreSQL (serverless)\n- **Storage:** AWS S3 (QR images)\n- **Auth:** Clerk\n- **Analytics:** Posthog\n\n## 6. Open Questions\n\n- Toast API rate limits? Need to confirm polling frequency is acceptable.\n- WebSocket scaling: Railway supports it, but need to test with 100 concurrent connections.",
  "version_notes": "Initial version. Covers all DoD criteria: diagram, data flow, API boundaries, infrastructure.",
  "self_assessment": {
    "dod_checklist": [
      { "criterion": "System diagram showing all services and their interactions", "met": true, "notes": "" },
      { "criterion": "Narrative explaining data flow for menu updates and inventory sync", "met": true, "notes": "" },
      { "criterion": "API boundary definitions", "met": true, "notes": "" },
      { "criterion": "Infrastructure notes", "met": true, "notes": "" }
    ],
    "confidence": "high",
    "concerns": ["Toast API rate limits unconfirmed - flagged as open question."]
  }
}
```
