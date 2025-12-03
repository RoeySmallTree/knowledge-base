# Protocol Change Directive: Session Todo Management

**Date:** 2025-12-03
**Status:** applied
**Priority:** critical

## Change Summary

Add todo list management to session workflow with `/todo` command that creates task lists in session folders, tracks progress with checkmarks and comments, and references created artifacts.

## Rationale

Sessions need structured task tracking that:
- Creates persistent todo lists within session folders
- Tracks completion with checkmarks and progress comments
- Links completed tasks to artifacts created for them
- Provides clear "mission accomplished" criteria
- Maintains todo state throughout session lifecycle

This integrates task management directly into the session artifact system.

## Scope of Change

**Files to create:**
- [ ] `.claude/commands/todo.md` - Slash command for todo creation and management

**Files to modify:**
- [ ] `protocol/rules.md` - Add "Session Todo Management" section
- [ ] `.claude/commands/session.md` - Update structure to include /todo folder

**Cross-references to check:**
- [ ] Session artifact management directive
- [ ] TLDR files directive

**README updates needed:**
- [ ] None - self-contained within session workflow

## Detailed Changes

### Change 1: Create `/todo` slash command

**Section:** New file `.claude/commands/todo.md`

**Current state:**
```
File does not exist
```

**New state:**
```markdown
# Todo Command

Create and manage a todo list for the current session.

## Usage

```
/todo [task_description_or_list]
```

## What This Does

Creates or updates a todo list at:
```
arbitrary/session_<timestamp>_<description>/
  todo/
    tasks.md                    # Main todo list
```

## How It Works

**Initial todo creation:**
1. User invokes `/todo [description]` or provides task list
2. Claude creates `todo/tasks.md` with structured checklist
3. Claude begins working through tasks sequentially
4. Each completed task gets:
   - Checkmark: `- [x]`
   - Completion comment
   - References to artifacts created (if any)

**Todo format:**
```markdown
# Session Todo List

**Status:** In Progress | Completed
**Created:** 2025-12-03T14:30:00
**Last Updated:** 2025-12-03T15:45:00

## Tasks

- [ ] Task 1: Brief description
- [ ] Task 2: Brief description
- [ ] Task 3: Brief description

## Completed

- [x] Task 1: Brief description
  - **Completed:** 2025-12-03T14:35:00
  - **Notes:** Implemented feature X
  - **Artifacts:** `feature_design_V1.md`, `feature_design_V1_tldr.md`

- [x] Task 2: Brief description
  - **Completed:** 2025-12-03T14:50:00
  - **Notes:** Fixed bug in module Y
  - **Artifacts:** None
```

## Working Through Todos

**Claude's behavior:**
1. Read current todo list
2. Work on next unchecked task
3. Update todo list when task is complete:
   - Move task to "Completed" section
   - Add timestamp
   - Add completion notes
   - Reference any artifacts created
4. Continue to next task
5. When all tasks complete → Update status to "Completed"

## Examples

**Single task:**
```bash
/todo implement user authentication
```

**Multiple tasks:**
```bash
/todo research database options, design schema, implement migrations
```

**Free-form request:**
"Create a todo for refactoring the API layer"

## Mission Accomplished

Session is considered complete when:
- All tasks in todo list are checked off
- Todo status is "Completed"
- Session summary reflects all completed work

---

**Note:** Todo lists persist in session folders as permanent task history.
```

**Reason:** Provides user-invoked entry point for task management with clear workflow

---

### Change 2: Update protocol/rules.md

**Section:** After "Session Artifact Management" section (after line 58)

**Current state:**
```
[Section ends with "Persistence" subsection]

## Code Organization Rules
```

**New state:**
```markdown
### Session Todo Management

**Creating Todos:**
- User invokes `/todo [description]` to create task list
- Creates `todo/tasks.md` in session folder
- Todo format:
  - Tasks section (unchecked items)
  - Completed section (checked items with metadata)
  - Status: In Progress | Completed
  - Timestamps for creation and updates

**Working Through Todos:**
- Work on tasks sequentially from top to bottom
- Update todo list after each task completion:
  - Move task to "Completed" section
  - Add checkmark `[x]`
  - Add timestamp
  - Add completion notes (what was done)
  - Reference artifacts created (if any)
- Continue until all tasks complete

**Todo Completion:**
- Update status to "Completed" when all tasks done
- Update session summary with completed work
- Session is "mission accomplished"

**Todo Format Example:**
```markdown
## Tasks
- [ ] Remaining task

## Completed
- [x] Completed task
  - **Completed:** 2025-12-03T14:30:00
  - **Notes:** Brief description of work done
  - **Artifacts:** `file_V1.md`, `file_V1_tldr.md`
```

## Code Organization Rules
```

**Reason:** Establishes todo management as core session workflow behavior

---

### Change 3: Update .claude/commands/session.md

**Section:** "What This Does" section - update directory structure

**Current state:**
```markdown
```
arbitrary/
  session_<ISO-timestamp>_<description>/
    session-summary.md          # Ongoing session log
    session-files/              # Working artifacts
      <artifact-name>_V1.md
      <artifact-name>_V2.md
      <artifact-name>_CHANGELOG.md
```
```

**New state:**
```markdown
```
arbitrary/
  session_<ISO-timestamp>_<description>/
    session-summary.md          # Ongoing session log
    session-files/              # Working artifacts
      <artifact-name>_V1.md
      <artifact-name>_V2.md
      <artifact-name>_CHANGELOG.md
    todo/                       # Task management
      tasks.md                  # Todo list with progress tracking
```
```

**Reason:** Documents todo folder as part of standard session structure

---

## Validation Checklist

**Before applying:**
- [x] All affected files identified
- [x] Cross-references mapped
- [x] README navigation paths checked
- [x] No breaking changes to existing workflows
- [x] Rollback plan is clear and executable

**After applying:**
- [x] All files created/updated successfully
- [x] `/todo` command works and creates proper structure
- [x] Todo format documented clearly
- [x] Task completion workflow clear
- [x] Artifact references work correctly
- [x] No broken links

## Rollback Plan

**If this change needs to be reversed:**

1. Delete `.claude/commands/todo.md`
2. Remove "Session Todo Management" section from `protocol/rules.md`
3. Revert session structure in `.claude/commands/session.md`
4. Remove directive from `protocol/directives/README.md`

**Or:** Revert using git:
```bash
git checkout HEAD~1 .claude/commands/todo.md
git checkout HEAD~1 protocol/rules.md
git checkout HEAD~1 .claude/commands/session.md
git checkout HEAD~1 protocol/directives/README.md
```

## Impact Assessment

**Who/what is affected:**
- [x] Session workflow (adds task management capability)
- [ ] Navigation patterns (none - self-contained)
- [ ] Existing context files (documentation updates only)
- [x] Session folder structure (adds /todo folder)

**Breaking changes:**
None - this is purely additive functionality. Existing workflows continue unchanged.

**Communication needed:**
Users should be informed that `/todo` command is available for task management within sessions.

## Applied

**Applied by:** Claude Code (Session 2025-12-03)
**Applied date:** 2025-12-03
**Verification:** All files created successfully. Todo management added to protocol/rules.md, /todo command created, session structure updated to include todo/ folder.
**Issues encountered:** None

---

**Related directives:**
- [2025-12-03-session-artifact-management](./applied/2025-12-03-session-artifact-management.md) - Base session management system
- [2025-12-03-add-tldr-files](./applied/2025-12-03-add-tldr-files.md) - TLDR companion files for artifacts
