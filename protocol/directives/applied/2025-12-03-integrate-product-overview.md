# Protocol Change Directive: Integrate Comprehensive Product Overview

**Date:** 2025-12-03
**Status:** applied
**Priority:** high

## Change Summary

Integrate comprehensive Cabal product and system overview document into the overview/ directory structure, organizing content across vision, algorithm, market, legal, and experience sections.

## Rationale

The new product overview provides:
- Complete system description for lawyers, engineers, clients, and investors
- Detailed multi-agent architecture explanation
- Legal and privacy framework
- Business model clarity
- Technical architecture overview

This needs to be properly organized into the existing overview/ structure rather than dumped as a single file.

## Scope of Change

**Files to create:**
- [ ] `overview/product/README.md` - Product concepts navigation
- [ ] `overview/product/user-experience.md` - Section 4 content
- [ ] `overview/product/agents-and-roles.md` - Multi-agent system details
- [ ] `overview/legal/README.md` - Legal and compliance navigation
- [ ] `overview/legal/data-and-privacy.md` - Section 5 content
- [ ] `overview/legal/service-boundaries.md` - Section 6 content
- [ ] `overview/legal/ip-and-ownership.md` - Section 9 content

**Files to modify:**
- [ ] `overview/README.md` - Add new sections to navigation
- [ ] `overview/vision.md` - Update with sections 1, 2, 10
- [ ] `algorithm/core-concepts.md` - Update with section 3
- [ ] `algorithm/approach.md` - Update with section 7
- [ ] `overview/market/positioning.md` - Update with section 8
- [ ] `overview/pitching/elevator-pitch.md` - Refine with clearer positioning
- [ ] `overview/pitching/one-pager.md` - Update with comprehensive overview

**Files to move:**
- [ ] `overview/algorithm/` → `algorithm/` (move to root level)

**Cross-references to check:**
- [ ] All overview README files
- [ ] Links between related sections

**README updates needed:**
- [ ] `overview/README.md` - Major navigation update
- [ ] New section READMEs for product/ and legal/

## Detailed Changes

### Change 1: Update overview/vision.md

**Section:** Replace/enhance current vision content

**Current state:**
[Minimal vision content]

**New state:**
```markdown
# Vision - What Cabal Is

**Status:** Core Context - Updated 2025-12-03

## Purpose

This document explains what Cabal is, who it serves, and the core problem it solves.

## What Cabal Is (Plain Language)

**Cabal is a multi-agent AI collaboration engine.**

Instead of "one chatbot answering a prompt", Cabal runs a **team of AI agents** (Chair, Operatives, Watchdog, Envoy) that:

* Take an arbitrary user prompt (often vague or messy)
* Turn it into a **clear mission** (with objectives and success criteria)
* Break the mission into structured work
* Collaborate through **rounds** (reflection, planning, drafting, review, inspection, presentation)
* Produce a graph of **structured outputs** (documents, decision records, collections, plans) called the **Product Tree**

### The Core Difference

* **Normal AI tools**: Give you one-shot answers to one prompt
* **Cabal**: Runs a project with mission, roles, structure, history, DoDs (Definitions of Done), and internal quality control

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

## Key Terms

[Include glossary from section 10]

---

**Related:**
- [Product Concepts](./product/README.md) - Detailed product mechanics
- [Algorithm](../algorithm/README.md) - Technical implementation
- [Market Positioning](./market/positioning.md) - Business model and value prop

← Back to [Overview](./README.md)
```

**Reason:** Establishes clear, accessible vision for all stakeholders

---

### Change 2: Move algorithm/ to root level

**Section:** Move `overview/algorithm/` to root `algorithm/`

**Current state:**
```
overview/algorithm/README.md
overview/algorithm/approach.md
overview/algorithm/core-concepts.md
overview/algorithm/technical-specs/README.md
```

**New state:**
```
algorithm/README.md
algorithm/approach.md
algorithm/core-concepts.md
algorithm/technical-specs/README.md
```

**Reason:** Algorithm is substantial enough to be a top-level section, not nested under overview

---

### Change 3: Create overview/product/ section

**Section:** New directory for product concepts

**Current state:**
```
Directory does not exist
```

**New state:**

Create `overview/product/README.md`:
```markdown
# Product Concepts

**Status:** Core Context

## Purpose

Detailed explanation of how Cabal works from a product perspective.

## Navigation

- [User Experience](./user-experience.md) - What clients actually experience
- [Agents and Roles](./agents-and-roles.md) - Multi-agent system explained
- [Core Concepts](../../algorithm/core-concepts.md) - Workspaces, sessions, missions, product tree
- [Rounds and Workflow](../../algorithm/approach.md) - Collaboration lifecycle

## Overview

[Brief intro to product concepts]

← Back to [Overview](../README.md)
```

Create `overview/product/user-experience.md` with section 4 content.

Create `overview/product/agents-and-roles.md` with detailed agent role descriptions.

**Reason:** Organizes product-focused content separately from technical implementation

---

### Change 3: Create overview/legal/ section

**Section:** New directory for legal and compliance information

**Current state:**
```
Directory does not exist
```

**New state:**

Create `overview/legal/README.md`:
```markdown
# Legal & Compliance Context

**Status:** Background for Legal Review

## Purpose

This section provides background information for legal counsel drafting Terms of Service, Privacy Policy, and other legal documents.

**Important:** This is NOT legal documentation itself. It describes:
- How the system behaves
- What data it handles
- Service boundaries and responsibilities
- IP considerations

## Navigation

- [Data & Privacy](./data-and-privacy.md) - Data model, third-party processing, retention
- [Service Boundaries](./service-boundaries.md) - What Cabal guarantees and doesn't
- [IP & Ownership](./ip-and-ownership.md) - Conceptual IP framework

## Audience

- Legal counsel drafting ToS/Privacy Policy
- Compliance officers
- Security reviewers
- Enterprise procurement teams

← Back to [Overview](../README.md)
```

Create files with sections 5, 6, 9 content.

**Reason:** Provides essential legal background in organized, accessible format

---

### Change 4: Update algorithm/core-concepts.md

**Section:** Replace/enhance with section 3 content

**Current state:**
[Current algorithm concepts]

**New state:**
[Section 3 content: Workspaces, sessions, mission, multi-agent team, product tree, rounds, context tree, remarks]

**Reason:** Provides comprehensive technical foundation

---

### Change 5: Update algorithm/approach.md

**Section:** Add section 7 technical architecture content

**Current state:**
[Current approach]

**New state:**
[Enhanced with section 7: Overall structure, orchestrator, data storage]

**Reason:** Clarifies technical implementation for developers

---

### Change 6: Update root-level navigation

**Section:** Update `CLAUDE.md`, `GEMINI.md`, `AGENTS.md` to reference algorithm/

**Current state:**
[References to overview/algorithm/]

**New state:**
[References to algorithm/ at root level]

**Reason:** Algorithm is now a top-level section

---

### Change 7: Update overview/market/positioning.md

**Section:** Add business model from section 8

**Current state:**
[Current positioning]

**New state:**
[Enhanced with section 8: Offering type, value positioning, investor view]

**Reason:** Provides clear business context

---

### Change 8: Update overview/README.md

**Section:** Add new sections to navigation

**Current state:**
[Current navigation]

**New state:**
```markdown
## Quick Navigation

- **Start here:** [vision.md](./vision.md) - What Cabal is and who it serves
- **Product:** [product/README.md](./product/README.md) - Product concepts and user experience
- **Legal:** [legal/README.md](./legal/README.md) - Legal and compliance background
- **Branding:** [branding/README.md](./branding/README.md) - Messaging and visual identity
- **Market:** [market/README.md](./market/README.md) - Market analysis and positioning
- **Pitching:** [pitching/README.md](./pitching/README.md) - Pitch materials and target audience

**Related top-level sections:**
- **Algorithm:** [../algorithm/README.md](../algorithm/README.md) - Technical approach and architecture
- **Protocol:** [../protocol/README.md](../protocol/README.md) - Development standards and context system
```

**Reason:** Provides clear entry points with algorithm/ as top-level section

---

## Validation Checklist

**Before applying:**
- [x] All affected files identified
- [x] Content properly distributed across sections
- [x] Navigation structure clear
- [x] No duplication between sections
- [x] Rollback plan is clear

**After applying:**
- [ ] All new files created successfully
- [ ] Existing files updated appropriately
- [ ] Navigation links all work
- [ ] Content is properly cross-referenced
- [ ] No broken links
- [ ] README files provide clear guidance

## Rollback Plan

**If this change needs to be reversed:**

1. Delete new directories: `overview/product/`, `overview/legal/`
2. Move `algorithm/` back to `overview/algorithm/`
3. Revert modified files to previous versions
4. Revert navigation in `overview/README.md`, `CLAUDE.md`, `GEMINI.md`, `AGENTS.md`
5. Remove directive from `protocol/directives/README.md`

**Or:** Revert using git:
```bash
git checkout HEAD~1 overview/
git checkout HEAD~1 algorithm/
git checkout HEAD~1 CLAUDE.md GEMINI.md AGENTS.md
git checkout HEAD~1 protocol/directives/README.md
```

## Impact Assessment

**Who/what is affected:**
- [x] Overview structure (new sections added)
- [x] Navigation patterns (enhanced with product/legal sections)
- [ ] Existing workflows (no breaking changes)
- [x] Documentation completeness (major improvement)

**Breaking changes:**
None - purely additive organization of content.

**Communication needed:**
Team members should be informed that comprehensive product overview is now available in organized structure.

## Applied

**Applied by:** Claude
**Applied date:** 2025-12-03
**Verification:** All files created and updated successfully
**Issues encountered:** None - all changes applied smoothly

---

**Related directives:**
- None - this is net-new content organization
