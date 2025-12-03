# Session Command

Initialize a new Claude Code session with artifact management.

## Usage

```
/session [optional_description]
```

## What This Does

Creates a structured workspace for the current session:

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

## When to Use

Invoke `/session` at the start of any working session where you expect:
- Explanations or reviews that should be documented
- Plans or designs to be created
- Iterative deliverables that will be refined
- Anything worth referencing later

## How It Works

1. Creates timestamped session folder: `session_2025-12-03T14-30-15_description`
2. Initializes `session-summary.md` with metadata
3. Creates empty `session-files/` directory
4. Claude will then use this workspace throughout the session

## Artifact Workflow

When Claude creates artifacts for you:

**Initial Version:**
- `session-files/explanation_of_X_V1.md` created
- `session-files/explanation_of_X_V1_tldr.md` created with TLDR and ELI5
- You receive reference: "See explanation_of_X_V1.md (TLDR available)"

**After Your Feedback:**
- `session-files/explanation_of_X_V2.md` created
- `session-files/explanation_of_X_V2_tldr.md` created with updated summary
- `session-files/explanation_of_X_CHANGELOG.md` updated:
  ```
  # Changelog: explanation_of_X

  ## Overview
  [Brief description of the artifact]

  ## V2 - 2025-12-03T14:45:00
  **User requested:** Add more detail on async patterns
  **Changes made:** Expanded section 3 with examples, added diagram
  **Rationale:** Clarify event loop behavior

  ## V1 - 2025-12-03T14:30:00
  Initial version
  ```

**Session Summary:**
Continuously updated throughout session with:
- Tasks completed
- Key decisions made
- Artifacts created
- Important context for future sessions

## Examples

```bash
/session api_refactoring
/session debugging_auth_issue
/session research_testing_frameworks
```

---

**Note:** Session folders are never archived or cleaned up - they serve as permanent project history.
