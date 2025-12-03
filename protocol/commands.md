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

### //push

**Syntax:** `//push [commit_message]`

**Purpose:** Commit and push current changes to GitHub repository.

**Execution Instructions:**

1. Check git status:
   ```bash
   git status
   ```

2. If no changes, inform user: "No changes to commit."

3. If changes exist:
   - Stage all changes:
     ```bash
     git add .
     ```

4. Create commit:
   - If commit message provided by user:
     ```bash
     git commit -m "[user_message]

     🤖 Generated with [Claude Code](https://claude.com/claude-code)

     Co-Authored-By: Claude <noreply@anthropic.com>"
     ```

   - If no commit message provided, create descriptive commit based on changes:
     - Read git diff to understand changes
     - Categorize changes (feat/fix/docs/chore)
     - Create concise commit message following Conventional Commits
     - Example format:
       ```
       feat: add session artifact management

       - Created protocol/commands.md with command registry
       - Added //session, //todo, //directive commands
       - Updated CLAUDE.md, GEMINI.md, AGENTS.md

       🤖 Generated with [Claude Code](https://claude.com/claude-code)

       Co-Authored-By: Claude <noreply@anthropic.com>
       ```

5. Push to remote:
   ```bash
   git push
   ```

6. Report to user:
   - Commit hash
   - Files changed
   - GitHub repository URL

**Examples:**
```
//push
//push Add new session management features
//push Fix directive application bug
```

**Notes:**
- Always uses Conventional Commits format (feat:, fix:, docs:, chore:)
- Always includes Claude Code attribution
- Automatically determines commit type from changes
- Pushes to 'origin' remote by default

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
