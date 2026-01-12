# TLDR: CABAL Algorithm Prompts Design

**Artifact:** `V2_prompts_design.md`
**Version:** 2.0
**Date:** 2025-12-04

## TLDR
This document defines the specific **User Prompts**, **System Prompts**, and **Principles** for all 7 steps of the CABAL algorithm.
**Key Change in V2:** The **Bootstrap** step now handles vague/lean user inputs (e.g., "I want a menu app") by instructing the Chair to extrapolate details and define the mission, rather than expecting a detailed prompt from the user.

## ELI5
We updated the "instructions" for the AI boss (Chair).
-   **Before:** We expected the human to give a detailed plan.
-   **Now:** The human can just say "I want X," and the AI boss has to figure out the details (Mission, Objectives, Roles) itself.

This makes the system much easier for humans to use.
