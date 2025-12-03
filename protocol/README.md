# Protocol - Context Guide

## Purpose

The protocol folder contains the core directives and guidelines for working with CABAL. These files establish how to navigate context, follow project standards, and maintain documentation.

## Quick Navigation

- **Start here:** [protocol.md](./protocol.md) - **MUST READ** at session start - How the context system works
- **Next read:** [rules.md](./rules.md) - **MUST READ** at session start - Working rules and constraints
- **Command registry:** [commands.md](./commands.md) - **MUST READ** at session start - Available protocol commands
- **Check directives:** [directives/README.md](./directives/README.md) - Pending protocol changes (checked at session start)
- **For updates:** [maintenance.md](./maintenance.md) - How to maintain and update context files
- **For protocol changes:** [changes.md](./changes.md) - How to modify the protocol itself

## Reading Order

**At Every Session Start (Required):**
1. `protocol.md` - Understand how to navigate context
2. `rules.md` - Know the working constraints and standards
3. `commands.md` - Learn available protocol commands
4. `directives/README.md` - Check for pending protocol changes

**When Updating Documentation:**
- `maintenance.md` - Follow maintenance procedures

**When Changing the Protocol:**
- `changes.md` - Protocol change management process

## File Descriptions

### protocol.md (Must-Read)
**When:** Start of every session
**What:** Defines the hierarchical context system, navigation patterns, file naming conventions, and how to discover information efficiently.

**Key concepts:**
- Recursive exploration model (CLAUDE.md → area README → sub-area README → content)
- When to read vs. when to skip
- Navigation commands and patterns
- Context file structure templates

### rules.md (Must-Read)
**When:** Start of every session
**What:** Project-specific working rules, code standards, testing requirements, commit conventions, and decision-making guidelines.

**Key concepts:**
- Code organization and module design
- Language-specific standards (Python & TypeScript/JavaScript)
- Testing requirements (80% coverage)
- Conventional Commits format
- Security and secrets management
- What to do vs. what NOT to do

### commands.md (Must-Read)
**When:** Start of every session
**What:** Registry of all available protocol commands that AI systems can execute. Commands use `//command` syntax.

**Key concepts:**
- Command invocation with `//` prefix
- Available commands: `//session`, `//todo`, `//directive`
- Detailed execution instructions for each command
- How to add new commands via directives
- Works across all AI systems (Claude, Gemini, agents)

### maintenance.md (Reference)
**When:** Updating or adding context files
**What:** Procedures for maintaining context files, adding new areas, updating navigation, deprecating content, and ensuring consistency.

**Key concepts:**
- When and how to update context
- Adding new areas and sub-areas
- README.md and content file templates
- Deprecation strategies
- Consistency checks and validation

### changes.md (Reference)
**When:** Modifying the protocol system itself
**What:** Protocol change management process, directive system, and how to safely update core protocol files.

**Key concepts:**
- Directive-based protocol changes
- Change validation and application
- Rollback procedures
- Change types and patterns
- Audit trail and archiving

### directives/README.md (Session Hook)
**When:** Automatically checked at every session start
**What:** Index of pending and applied protocol change directives. Claude checks this file to offer applying pending changes.

**Key concepts:**
- Active (pending) directives list
- Recently applied directives
- Instructions for Claude Code to apply directives
- Creating new protocol change directives

## Related Context

- **For project overview:** See [../overview/README.md](../overview/README.md)
- **For development setup:** See [../CLAUDE.md](../CLAUDE.md)

## When to Explore This

**Always explore:**
- At the start of every session (read protocol.md and rules.md)

**Explore when:**
- Adding new documentation areas
- Restructuring existing context
- Unsure about file naming or organization
- Need to deprecate or update outdated info

**Skip when:**
- Already familiar with protocol from current session
- Working purely on code without documentation changes

---

← Back to [Project Root](../CLAUDE.md)
