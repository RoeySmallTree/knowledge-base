# TLDR: CABAL Algorithm Prompts Design

**Artifact:** `V1_prompts_design.md`
**Version:** 1.0
**Date:** 2025-12-04

## TLDR
This document defines the specific **User Prompts**, **System Prompts**, and **Principles** for all 7 steps of the CABAL algorithm:
1.  **Bootstrap:** Chair initializes session, defines mission/objectives/personas.
2.  **Plan & Assign:** Chair creates product hierarchy and assigns tasks.
3.  **Inspect:** Watchdog reviews new content for safety/alignment.
4.  **Peer Review:** Operatives review each other's work based on personas.
5.  **Present:** Envoy summarizes progress/questions for the user.
6.  **Reflect:** Operatives plan their work and address feedback.
7.  **Write:** Operatives generate/update product content.

It uses a "MenuMaster" SaaS use case to demonstrate the prompts in action and includes Zod schemas for structured JSON outputs.

## ELI5
We wrote the "instructions" that tell the AI agents exactly what to do at each step of their job.
-   **Bootstrap:** "Start the project and tell everyone their roles."
-   **Plan:** "Decide what files we need to write."
-   **Inspect:** "Check for dangerous mistakes."
-   **Peer Review:** "Check your teammate's homework."
-   **Present:** "Tell the human what we did."
-   **Reflect:** "Think before you write."
-   **Write:** "Actually write the code or documents."

We also made sure the AI always answers in a specific computer-readable format (JSON) so the system doesn't break.
