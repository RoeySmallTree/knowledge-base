# Algorithm - Context Guide

## Purpose

This area documents CABAL's technical and algorithmic approach to solving the core problem. It covers high-level concepts, implementation strategies, and technical specifications.

## Quick Navigation

- **Start here:** [approach.md](./approach.md) - High-level algorithmic approach
- **For fundamentals:** [core-concepts.md](./core-concepts.md) - Key concepts and principles
- **For operating principles:** [principles/README.md](./principles/README.md) - Governance, roles, artifacts, process, and quality specification
- **For prompts & context:** [context-builder.md](./context-builder.md) - Context envelope, master prompter, and prompt structuring rules
- **For technical depth:** [technical-specs/README.md](./technical-specs/README.md) - Detailed technical specifications

## File Descriptions

### approach.md
**When:** Understanding how CABAL works technically
**What:** High-level overview of the algorithmic approach and problem-solving strategy

Use when you need to understand the "how" behind CABAL's solution.

### core-concepts.md
**When:** Need to understand fundamental technical concepts
**What:** Key concepts, principles, and terminology that underpin the approach

Use when you need deeper understanding of the technical foundations.

### principles/ (folder)
**When:** Establishing or auditing orchestration governance, roles, artifacts, round flow, and quality gates
**What:** Restructured Unified Team Orchestration specification with stable numbering and examples

Start with [principles/README.md](./principles/README.md) for navigation to governance, roles, artifacts, process, and quality files.

### context-builder.md
**When:** Building or updating the prompt system and context envelope; defining master bootstrap and step outputs
**What:** State envelope entities, master prompter bootstrap, prompt structuring patterns, and step-specific output expectations

### technical-specs/ (folder)
**When:** Implementing features or need detailed specifications
**What:** Detailed technical specifications, data structures, algorithms

Use when you need implementation-level detail.

## Sub-areas

### technical-specs/
Detailed technical specifications and implementation details.
-> Start with [technical-specs/README.md](./technical-specs/README.md)

**Contains:**
- Data structures
- Algorithm specifications
- Performance characteristics
- Implementation notes

## Related Context

- **Vision:** See [overview/vision.md](../overview/vision.md) for the problem being solved
- **Pitching:** See [overview/pitching/one-pager.md](../overview/pitching/one-pager.md) for non-technical explanation
- **Development:** See [CLAUDE.md](../CLAUDE.md) for code organization

## When to Explore This

**Explore when:**
- Implementing core features
- Making architectural decisions
- Need to explain technical approach
- Auditing or updating orchestration rules and round flow
- Optimizing or debugging algorithms
- Writing technical documentation

**Read approach.md when:**
- First time working on the project
- Need high-level technical understanding
- Explaining approach to technical stakeholders

**Read core-concepts.md when:**
- Need to understand specific technical concepts
- Implementing features that depend on core principles
- Documenting or explaining technical decisions

**Navigate to technical-specs/ when:**
- Implementing specific features
- Need detailed algorithm specifications
- Writing tests or optimizing performance

**Skip when:**
- Working on non-technical aspects (branding, marketing)
- Making minor bug fixes that don't affect core algorithms
- Already familiar with technical approach from current session

---

<- Back to [Project Root](../CLAUDE.md) | [Overview](../overview/README.md)
