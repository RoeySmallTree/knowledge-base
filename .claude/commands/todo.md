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
