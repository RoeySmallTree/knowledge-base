# Context Protocol - Must Read

**Status:** Core Directive - Read at start of every session

## Purpose

This protocol establishes how context is organized and navigated in CABAL. It enables efficient knowledge discovery through self-documenting, hierarchical context files.

## How the Context System Works

### Navigation Pattern

The context system follows a **recursive exploration model**:

```
Entry Point (CLAUDE.md)
    ↓
Area Guide (e.g., overview/README.md)
    ↓
Sub-area Guide (e.g., overview/branding/README.md)
    ↓
Specific Content (e.g., overview/branding/vibe.md)
```

### File Types & Purposes

1. **README.md** (Navigation Hubs)
   - Located at the root of each folder
   - Provides context map for that area
   - Answers: "What's here?" and "Where should I go?"
   - Contains quick navigation paths based on use cases

2. **Content Files** (Knowledge Sources)
   - Contain actual information (e.g., vibe.md, elevator-pitch.md)
   - Focused on specific topics
   - Include breadcrumbs back to parent README
   - Cross-reference related content

3. **Core Directives** (Must-Read)
   - protocol/protocol.md (this file) - How to navigate
   - protocol/rules.md - Working constraints and standards

### When to Read Context

**At Session Start:**
- Always read: CLAUDE.md → protocol/protocol.md → protocol/rules.md
- **Check for protocol changes:** protocol/directives/README.md (see if pending directives exist)
  - If pending directives found → Offer to apply them before proceeding
  - If no pending directives → Continue silently
- Scan: overview/README.md to understand available areas

**During Work:**
- **When user mentions an area**: Navigate to that area's README.md
- **When clarification needed**: Follow README.md guidance to specific files
- **When making decisions**: Check protocol/rules.md for constraints
- **When unsure**: Start at parent README.md and navigate down

**When NOT to read:**
- Don't read everything upfront (context bloat)
- Don't read unrelated areas (e.g., don't read marketing if doing algorithm work)
- Skip technical specs unless specifically needed

### Navigation Commands

When navigating context, follow these patterns:

1. **Top-Down Discovery**
   ```
   User: "Tell me about our branding"
   → Read: overview/README.md
   → Identify: branding/ folder
   → Read: overview/branding/README.md
   → Follow guidance to relevant files
   ```

2. **Targeted Lookup**
   ```
   User: "What's our elevator pitch?"
   → Read: overview/README.md (if not already read)
   → Navigate: overview/pitching/README.md
   → Read: overview/pitching/elevator-pitch.md
   ```

3. **Cross-Area Reference**
   ```
   Working on marketing copy, need brand tone
   → Check current file for cross-references
   → Or navigate via overview/README.md → branding/vibe.md
   ```

## File Naming Conventions

- **Folders**: lowercase, hyphen-separated (e.g., `target-audience/`)
- **README files**: Always `README.md` (uppercase)
- **Content files**: lowercase, hyphen-separated, descriptive (e.g., `elevator-pitch.md`)
- **Core directives**: lowercase (e.g., `protocol.md`, `rules.md`)

## Context File Structure

Every README.md should follow this template:

```markdown
# [Area Name] - Context Guide

## Purpose
[1-2 sentences: What this area covers]

## Quick Navigation
- **Start here:** [file.md] - [When to read this]
- **For [specific need]:** [file.md] - [Brief description]

## Sub-areas
- **[folder]/**: [Description] → Start with [folder]/README.md

## Related Context
- See [path/to/related.md] for [related topic]

## When to Explore This
[Guidelines on when Claude should read files in this area]
```

## Maintaining Context Coherence

1. **Breadcrumbs**: Every file should reference its parent README
2. **Cross-links**: Link related concepts across areas
3. **Updates**: When information changes, update linked references
4. **Deprecation**: Mark outdated info with `[DEPRECATED]` and point to new location

## Guiding Principles

1. **Self-Explanatory**: Files should guide their own discovery
2. **Layered Depth**: Surface → detail → technical specs
3. **Just-In-Time**: Read what you need, when you need it
4. **Bidirectional**: Navigate both down (to details) and up (to context)
5. **Living Documentation**: Update as project evolves

## Example Session Flow

```
1. Session starts → Read CLAUDE.md
2. CLAUDE.md → "See protocol/ for context protocol"
3. Read protocol/protocol.md (this file)
4. Read protocol/rules.md
5. Check protocol/directives/README.md for pending changes
   → If pending: Offer to apply
   → If none: Continue
6. User: "What's our product vision?"
7. Navigate: overview/README.md
8. Find: vision.md is the starting point
9. Read: overview/vision.md
10. Continue work with project context
```

---

**Next:** Read [rules.md](./rules.md) for project-specific working rules.

**For maintenance:** See [maintenance.md](./maintenance.md) when updating context files.

**For protocol changes:** See [changes.md](./changes.md) for how to modify the protocol itself.
