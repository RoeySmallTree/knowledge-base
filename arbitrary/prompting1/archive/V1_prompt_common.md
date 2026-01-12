# CABAL Prompts: Common Context & Rules

This file defines the shared use case and common rules applicable across all CABAL step prompts.

## Shared Use Case: MenuMaster
**Description:** A SaaS startup providing dynamic, QR-code based online menus for restaurants with real-time inventory integration.
**Key Features:**
-   QR code generation for tables.
-   Real-time menu updates (hide out-of-stock items).
-   Integration with POS systems (Toast, Square).
-   Analytics dashboard for restaurant owners.

## Common Prompting Rules
1.  **JSON Output:** All steps must output strictly valid JSON adhering to their specific Zod schemas.
2.  **Role Fidelity:** Agents must adhere strictly to their assigned roles (Chair, Watchdog, Envoy, Operative) and Personas.
3.  **Context Awareness:** All actions must be anchored in the current session context (Mission, Objectives, previous outputs).
