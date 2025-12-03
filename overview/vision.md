# Vision - What Cabal Is

**Status:** Core Context - Updated 2025-12-03

## Purpose

This document explains what Cabal is, who it serves, and the core problem it solves. It's designed for:
- Lawyers needing background for legal documents
- Engineers understanding what we're building
- Clients understanding what Cabal does for them
- Investors understanding the product and its edge

## What Cabal Is (Plain Language)

**Cabal is a multi-agent AI collaboration engine.**

Instead of "one chatbot answering a prompt", Cabal runs a **team of AI agents** (Chair, Operatives, Watchdog, Envoy) that:

* Take an arbitrary user prompt (often vague or messy)
* Turn it into a **clear mission** (with objectives and success criteria)
* Break the mission into structured work
* Collaborate through **rounds** (reflection, planning, drafting, review, inspection, presentation)
* Produce a graph of **structured outputs** (documents, decision records, collections, plans) called the **Product Tree**

### The Core Difference

| Normal AI Tools | Cabal |
|-----------------|-------|
| One-shot answers to one prompt | Runs a full **project** |
| No history or structure | Mission, roles, history, DoDs |
| Hope for quality | Internal quality control |
| Single perspective | Multiple specialist agents |

Think of it as a "virtual project team" of LLMs with:
* A project lead (Chair)
* Specialists (Operatives)
* A quality and constraints officer (Watchdog)
* A user-facing liaison (Envoy)

All orchestrated by Cabal's backend.

## Who Uses Cabal

### Target Users

* **Knowledge workers & teams**: Founders, PMs, strategists, consultants, analysts, marketers, ops leaders
* **Technical teams**: Dev teams doing architecture breakdowns, test plans, refactor plans (structured text, not code execution)
* **Agencies & studios**: Need repeatable, high-quality multi-part deliverables (campaigns, strategies, playbooks, reports)

### Typical Use Cases

* Research & synthesis (market/competitor/product research)
* Multi-part documents (PRDs, plans, playbooks, policies, reports)
* Structured brainstorming + convergence (ideas → options → chosen path with rationale)
* Execution blueprints (step-by-step plans, initiatives, milestones)
* Review & refinement of existing text (critique, alternative structures, QA passes)

**Positioning:**
> A system that **owns the process** of getting from fuzzy input → structured, defensible outputs.

Users interact through a web UI (and in future, potentially via API).

## Glossary of Key Terms

| Term | Definition |
|------|------------|
| **Cabal** | The product/platform: a multi-agent AI collaboration engine |
| **Workspace** | A logical organization/account where a team uses Cabal |
| **Session** | A single project/mission container within a workspace |
| **Mission Statement** | A concise description of what the session aims to achieve |
| **Mission Objectives** | Concrete, checkable goals under the mission |
| **Agent** | An LLM role with a specific function (Chair, Operative, Watchdog, Envoy) |
| **Chair** | The "team lead" agent that defines mission, personas, plans |
| **Operative** | A specialist agent focused on specific tasks or perspectives |
| **Watchdog** | The agent that enforces rules, structure, and Definition of Done |
| **Envoy** | The agent that communicates with the human user |
| **Product Tree** | The graph of all outputs (nodes) produced in a session |
| **Content Node** | A node representing structured content (text, sections) |
| **Collection Node** | A node collecting options, ideas, or references |
| **Decision Node** | A node capturing a choice, its options, and rationale |
| **Orchestration Node** | A node representing meta-level plans and assignments |
| **Round** | A phase of multi-agent collaboration (Reflect, Plan, Write, Review, etc.) |
| **Context Tree** | Structured representation of all relevant session data for prompts |
| **Remark** | A structured internal message (question, comment, warning, blocker) |
| **Blocker** | A remark indicating work cannot proceed until an issue is resolved |
| **LLM Provider** | External AI model provider (e.g. OpenAI, Anthropic, etc.) |
| **User Content** | Any text or files the user submits |
| **Generated Content** | Any text or structure that Cabal produces via LLMs |

---

**Related:**
- [Product Concepts](./product/README.md) - Detailed product mechanics
- [Algorithm](../algorithm/README.md) - Technical implementation
- [Market Positioning](./market/positioning.md) - Business model and value prop

← Back to [Overview](./README.md)
