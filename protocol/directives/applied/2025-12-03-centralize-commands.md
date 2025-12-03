# Protocol Change Directive: Centralize Command System

**Date:** 2025-12-03
**Status:** applied
**Priority:** critical

## Change Summary

Centralize all slash commands in `protocol/commands.md` to make them accessible to all AI systems (Claude, Gemini, agents). Commands are invoked with `//command` syntax and looked up from the central registry.

## Rationale

Current state:
- Commands stored in `.claude/commands/` (Claude-specific)
- Other AI systems (Gemini, agents) can't access commands
- No unified command registry

Needed state:
- Single source of truth: `protocol/commands.md`
- All AI systems reference same commands
- Commands invoked with `//command` syntax
- `/directive` command maintains command registry
- Easy command discovery and documentation

## Scope of Change

**Files to create:**
- [ ] `protocol/commands.md` - Central command registry

**Files to modify:**
- [ ] `protocol/rules.md` - Add command system documentation
- [ ] `.claude/commands/directive.md` - Update to maintain protocol/commands.md
- [ ] `CLAUDE.md` - Reference central command system
- [ ] `GEMINI.md` - Reference central command system
- [ ] `AGENTS.md` - Reference central command system

**Files to migrate:**
- [ ] `.claude/commands/session.md` → `protocol/commands.md`
- [ ] `.claude/commands/todo.md` → `protocol/commands.md` (pending)
- [ ] `.claude/commands/directive.md` → `protocol/commands.md`

**Cross-references to check:**
- [ ] All directive references to slash commands
- [ ] Session management documentation

**README updates needed:**
- [ ] `protocol/README.md` - Add commands section

## Detailed Changes

### Change 1: Create protocol/commands.md

**Section:** New file `protocol/commands.md`

**Current state:**
```
File does not exist
```

**New state:**
```markdown
# Command Registry

**Status:** Core Protocol - All AI systems reference this file

## Purpose

This file defines all available commands that AI systems can execute. Commands are invoked using `//command` syntax.

## How Commands Work

**Invocation:**
- User types: `//command [arguments]`
- AI looks up command in this registry
- AI executes command directives as specified

**Command Format:**
Each command includes:
- Name and syntax
- Purpose and description
- Detailed execution instructions
- Examples

---

## Available Commands

### //session

**Syntax:** `//session [description]`

**Purpose:** Initialize a new session with artifact management.

**Execution Instructions:**

1. Generate ISO timestamp: `YYYY-MM-DDTHH-MM-SS`
2. Create session folder: `arbitrary/session_<timestamp>_<description>/`
3. Create `session-summary.md`:
   ```markdown
   # Session Summary: [description]

   **Created:** <ISO-timestamp>
   **Status:** Active

   ## Overview
   [Brief description of session focus]

   ## Tasks Completed
   - [List as work progresses]

   ## Key Decisions
   - [Document important choices made]

   ## Artifacts Created
   - [Link to files created in session-files/]

   ## Notes
   [Any other relevant context]
   ```

4. Create empty directory: `session-files/`
5. Create empty directory: `todo/`
6. Confirm to user: "Session initialized: `session_<timestamp>_<description>/`"

**Examples:**
```
//session api_refactoring
//session debugging_auth_issue
//session research_testing_frameworks
```

---

### //todo

**Syntax:** `//todo [task_description_or_list]`

**Purpose:** Create and manage todo list for current session.

**Execution Instructions:**

1. Check if session is active (session folder exists)
   - If no session: Suggest user run `//session` first
   - If session exists: Continue

2. Create `todo/tasks.md` in current session folder:
   ```markdown
   # Session Todo List

   **Status:** In Progress
   **Created:** <ISO-timestamp>
   **Last Updated:** <ISO-timestamp>

   ## Tasks

   - [ ] Task 1: [description]
   - [ ] Task 2: [description]
   - [ ] Task 3: [description]

   ## Completed

   [Tasks move here when completed]
   ```

3. Parse user input into task list
4. Begin working through tasks sequentially

**Working Through Tasks:**
- Complete one task at a time
- After each completion, update `todo/tasks.md`:
  - Move task to "Completed" section
  - Add checkmark: `[x]`
  - Add metadata:
    ```markdown
    - [x] Task description
      - **Completed:** <ISO-timestamp>
      - **Notes:** [What was done]
      - **Artifacts:** [Files created, if any]
    ```
  - Update "Last Updated" timestamp

**Completion:**
- When all tasks done, update status to "Completed"
- Update session summary with completed work

**Examples:**
```
//todo implement user authentication
//todo research database options, design schema, implement migrations
```

---

### //directive

**Syntax:**
- `//directive list`
- `//directive create [description]`
- `//directive apply [name]`
- `//directive apply-all`
- `//directive rollback [name]`

**Purpose:** Manage protocol change directives.

**Execution Instructions:**

#### //directive list

1. Read `protocol/directives/README.md`
2. Extract "Active Directives" section
3. Display to user:
   ```
   Pending Protocol Directives:

   1. [name] - Priority: [priority]
      [brief description]
      File: protocol/directives/[filename].md

   Use //directive apply [name] to apply a specific directive
   Use //directive apply-all to apply all directives
   ```
4. If no pending directives: "No pending protocol directives."

#### //directive create [description]

1. Ask user clarifying questions:
   - What files need to be changed?
   - What specifically should change?
   - Priority (critical/high/medium/low)?

2. Create directive file: `protocol/directives/YYYY-MM-DD-brief-name.md`
   - Use `protocol/directives/TEMPLATE.md` as base
   - Fill in all sections based on user responses
   - Set status: pending
   - Add date and priority

3. Update `protocol/directives/README.md`:
   - Add to "Active Directives" section

4. **If directive creates/modifies a command:**
   - Add command update to directive's "Detailed Changes"
   - Directive must include updating `protocol/commands.md`

5. Ask user: "Directive created. Would you like me to apply it now?"
   - If yes → Apply using directive application process
   - If no → Leave pending for next session

#### //directive apply [name]

1. Check if directive exists in `protocol/directives/[name].md`
2. Read the directive file completely
3. Follow application process from `protocol/changes.md`:
   - Validate directive completeness
   - Execute each change in "Detailed Changes"
   - **If directive modifies commands:** Update `protocol/commands.md`
   - Check off items in validation checklist
   - Update "Applied" section with metadata
   - Move to `protocol/directives/applied/`
   - Update `protocol/directives/README.md`
4. Report completion with summary

#### //directive apply-all

1. Read `protocol/directives/README.md`
2. Get all pending directives
3. Confirm with user: "Found N pending directives. Apply all?"
4. If confirmed, apply each directive sequentially
5. Report summary of all changes

#### //directive rollback [name]

1. Read directive from `protocol/directives/applied/[name].md`
2. Find "Rollback Plan" section
3. Confirm with user: "This will undo changes made by [name]. Continue?"
4. Execute rollback steps
5. Update directive status to "rolled-back"
6. Move back to active directives folder if user wants to re-apply

**Examples:**
```
//directive list
//directive create add API naming rules to guidelines
//directive apply 2025-12-03-add-api-rules
//directive apply-all
```

---

## Adding New Commands

**Process:**

1. Create protocol directive for the new command
2. Directive must include:
   - Addition to this file (`protocol/commands.md`)
   - Command name, syntax, purpose
   - Detailed execution instructions
   - Examples

3. Apply directive to activate command

**Command Naming:**
- Use lowercase
- Use hyphens for multi-word commands
- Keep concise (prefer single words)
- Examples: `session`, `todo`, `directive`, `plan`, `review`

---

## Command Discovery

**For AI Systems:**
- Read this file at session start
- Parse available commands
- When user types `//command`, lookup and execute

**For Users:**
- Type `//help` to see available commands
- Type `//[command] --help` for command details
- All commands documented in this file

---

**Related:**
- [Protocol Guide](./protocol.md) - Context navigation system
- [Working Rules](./rules.md) - Development standards
- [Directives](./directives/README.md) - Protocol change management

← Back to [Protocol](./README.md)
```

**Reason:** Creates single source of truth for all commands accessible to all AI systems

---

### Change 2: Add command system to protocol/rules.md

**Section:** After "Session Todo Management" section

**Current state:**
```
[Section ends after todo management]

## Code Organization Rules
```

**New state:**
```markdown
### Command System

**Command Invocation:**
- User types: `//command [arguments]`
- AI looks up command in `protocol/commands.md`
- AI executes command following documented instructions

**Available Commands:**
- `//session` - Initialize session with artifact management
- `//todo` - Create and manage session todo list
- `//directive` - Manage protocol directives
- See `protocol/commands.md` for full command registry

**Command Discovery:**
- All commands defined in `protocol/commands.md`
- Read command registry at session start
- Execute commands exactly as documented

**Note:** The `//` prefix distinguishes protocol commands from regular conversation.

## Code Organization Rules
```

**Reason:** Documents command system in core rules

---

### Change 3: Update CLAUDE.md

**Section:** After "Session Workflow" section

**Current state:**
```
See `/session` command documentation for details.

## Development Commands
```

**New state:**
```
See `//session` command documentation in `protocol/commands.md` for details.

## Protocol Commands

All AI systems (Claude, Gemini, agents) use the same command system:

**Available commands:**
- `//session [description]` - Initialize session workspace
- `//todo [tasks]` - Create and manage todo list
- `//directive [action]` - Manage protocol directives

**Full documentation:** `protocol/commands.md`

**Usage:** Type `//command` to invoke. The `//` prefix indicates a protocol command.

## Development Commands
```

**Reason:** Unifies command documentation and makes Claude aware of central registry

---

### Change 4: Update GEMINI.md

**Section:** After "Project Overview" section, before "Building and Running"

**Current state:**
```
The project structure is designed to be organized by domain, with separate directories for source code (`src`), tests (`tests`), tooling (`tools`), and examples (`examples`).

# Building and Running
```

**New state:**
```
The project structure is designed to be organized by domain, with separate directories for source code (`src`), tests (`tests`), tooling (`tools`), and examples (`examples`).

# Required Reading

**MUST READ at every session start:**

1. **[protocol/protocol.md](./protocol/protocol.md)** - How to navigate the context system
2. **[protocol/rules.md](./protocol/rules.md)** - Working rules and constraints
3. **[protocol/commands.md](./protocol/commands.md)** - Command registry

These files establish how to explore the codebase's hierarchical context system, define project standards, and document available commands.

# Protocol Commands

Use protocol commands by typing `//command`:

- `//session [description]` - Initialize session workspace
- `//todo [tasks]` - Create and manage todo list
- `//directive [action]` - Manage protocol directives

See `protocol/commands.md` for full documentation.

# Building and Running
```

**Reason:** Gives Gemini access to protocol system and commands

---

### Change 5: Update AGENTS.md

**Section:** At the beginning, before "Repository Guidelines"

**Current state:**
```
# Repository Guidelines

This guide sets expectations for contributing to CABAL.
```

**New state:**
```
# Repository Guidelines

This guide sets expectations for contributing to CABAL. Keep it updated as the codebase grows so new agents can ramp up quickly.

## Required Reading - Start Here

**MUST READ at every session start:**

1. **[protocol/protocol.md](./protocol/protocol.md)** - How to navigate the context system
2. **[protocol/rules.md](./protocol/rules.md)** - Working rules and constraints
3. **[protocol/commands.md](./protocol/commands.md)** - Command registry

These files establish how to explore the codebase's hierarchical context system, define project standards, and document available commands.

## Protocol Commands

Use protocol commands by typing `//command`:

- `//session [description]` - Initialize session workspace
- `//todo [tasks]` - Create and manage todo list
- `//directive [action]` - Manage protocol directives

See `protocol/commands.md` for full documentation.

---

# Project Structure & Module Organization
```

**Reason:** Gives all agents access to protocol system and commands

---

### Change 6: Update protocol/README.md

**Section:** Add commands section to the navigation guide

**Current state:**
[Need to read file first to determine insertion point]

**New state:**
Add section about commands registry with link to `commands.md`

**Reason:** Makes commands discoverable through protocol navigation

---

## Validation Checklist

**Before applying:**
- [x] All affected files identified
- [x] Migration path for existing commands clear
- [x] Cross-references mapped
- [x] README navigation paths checked
- [x] No breaking changes (// syntax is additive)
- [x] Rollback plan is clear and executable

**After applying:**
- [x] `protocol/commands.md` created with all commands
- [x] All AI entry files (CLAUDE.md, GEMINI.md, AGENTS.md) reference commands
- [x] Command execution works with `//` syntax
- [x] `//directive` command maintains `protocol/commands.md`
- [x] Existing commands migrated successfully
- [x] No broken links

## Rollback Plan

**If this change needs to be reversed:**

1. Delete `protocol/commands.md`
2. Restore `.claude/commands/` directory with original files
3. Revert changes to `protocol/rules.md`
4. Revert changes to `CLAUDE.md`, `GEMINI.md`, `AGENTS.md`
5. Revert changes to `protocol/README.md`
6. Remove directive from `protocol/directives/README.md`

**Or:** Revert using git:
```bash
git checkout HEAD~1 protocol/commands.md
git checkout HEAD~1 protocol/rules.md
git checkout HEAD~1 CLAUDE.md GEMINI.md AGENTS.md
git checkout HEAD~1 protocol/README.md
git checkout HEAD~1 .claude/commands/
```

## Impact Assessment

**Who/what is affected:**
- [x] All AI systems (Claude, Gemini, agents) - now share command system
- [x] Command invocation - new `//` syntax
- [x] Directive creation - must maintain command registry
- [ ] Existing workflows - `//` syntax is additive (old `/` still works during transition)
- [x] Documentation - unified across all AI systems

**Breaking changes:**
None - `//` syntax is additive. During transition, both `/command` and `//command` can work.

**Communication needed:**
Users should be informed that:
- Commands now use `//` prefix
- All AI systems share the same commands
- Command documentation centralized in `protocol/commands.md`

## Applied

**Applied by:** Claude Code (Session 2025-12-03)
**Applied date:** 2025-12-03
**Verification:** All files created and updated successfully. Command registry established in protocol/commands.md. All AI entry points (CLAUDE.md, GEMINI.md, AGENTS.md) now reference central command system. Command system documented in protocol/rules.md and protocol/README.md.
**Issues encountered:** None

---

**Related directives:**
- [2025-12-03-session-artifact-management](./applied/2025-12-03-session-artifact-management.md) - Session management system
- [2025-12-03-session-todo-management](./2025-12-03-session-todo-management.md) - Todo management system
