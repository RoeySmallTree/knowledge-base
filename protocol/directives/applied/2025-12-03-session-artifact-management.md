# Protocol Change Directive: Session-Based Artifact Management

**Date:** 2025-12-03
**Status:** applied
**Priority:** critical

## Change Summary

Establish a standardized session-based artifact management system where each session creates a timestamped folder under `/arbitrary/` to store session summaries, working artifacts, and versioned deliverables with changelogs.

## Rationale

Claude Code needs a consistent way to:
- Track session progress and decisions
- Create referenceable artifacts for explanations, reviews, and plans
- Maintain version history when iterating on deliverables
- Provide users with clear file references instead of long inline content
- Enable session continuity and historical reference

This creates a structured workspace that improves communication, reduces noise in chat, and provides a clear audit trail.

## Scope of Change

**Files to create:**
- [ ] `.claude/commands/session.md` - Slash command to initialize session
- [ ] `arbitrary/.gitkeep` - Ensure arbitrary folder is tracked

**Files to modify:**
- [ ] `protocol/rules.md` - Add session management rules
- [ ] `CLAUDE.md` - Reference session workflow

**Cross-references to check:**
- [ ] None - this is new functionality

**README updates needed:**
- [ ] None - session folders are self-contained

## Detailed Changes

### Change 1: Create `/session` slash command

**Section:** New file `.claude/commands/session.md`

**Current state:**
```
File does not exist
```

**New state:**
```markdown
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
- You receive reference: "See explanation_of_X_V1.md"

**After Your Feedback:**
- `session-files/explanation_of_X_V2.md` created
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
```

**Reason:** Provides user-invoked entry point for session initialization with clear documentation

---

### Change 2: Add session management rules

**Section:** `protocol/rules.md` - Add new section after "Context Navigation Rules"

**Current state:**
```
[Section ends at line 27 with "### During Development"]
```

**New state:**
```markdown
### Session Artifact Management

**Session Initialization:**
- Invoke `/session [description]` at start of working sessions
- Creates timestamped folder: `arbitrary/session_<ISO-timestamp>_<description>/`
- Initializes `session-summary.md` and `session-files/` directory

**Creating Artifacts:**
- Use artifacts for: explanations, reviews, plans, designs, any referenceable content
- Never inline lengthy content when an artifact file is more appropriate
- Initial version: `<name>_V1.md`
- Reference format: "See `<name>_V1.md` in session-files/"

**Iterating on Artifacts:**
- User requests changes → Create `<name>_V2.md` (increment version)
- Update `<name>_CHANGELOG.md` with concise entry:
  - Version number and timestamp
  - What user requested
  - What was changed
  - Brief rationale
- Changelog should be minimal but clear

**Session Summary:**
- Update `session-summary.md` continuously throughout session
- Include: tasks completed, decisions made, artifacts created
- Serves as session audit trail

**Persistence:**
- Session folders are permanent - never archive or delete
- Provides project history and context for future sessions
```

**Reason:** Establishes clear behavioral rules for Claude Code's session management

---

### Change 3: Update CLAUDE.md

**Section:** `CLAUDE.md` - Add new section before "Development Commands"

**Current state:**
```
[After "Required Reading" section, before "Development Commands"]
```

**New state:**
```markdown
## Session Workflow

**Start every working session with:**
```bash
/session [brief_description_of_focus]
```

This creates a structured workspace:
- `arbitrary/session_<timestamp>_<description>/session-summary.md` - Session log
- `arbitrary/session_<timestamp>_<description>/session-files/` - Working artifacts

Claude will use this workspace to store:
- Explanations and reviews (instead of long inline responses)
- Plans and designs
- Versioned deliverables with changelogs

See `/session` command documentation for details.
```

**Reason:** Makes users aware of session workflow without overwhelming the main documentation

---

### Change 4: Create arbitrary directory

**Section:** New file `arbitrary/.gitkeep`

**Current state:**
```
Directory does not exist
```

**New state:**
```
# Session Artifacts

This directory contains timestamped session folders created by `/session` command.

Each session folder contains:
- `session-summary.md` - Session activity log
- `session-files/` - Versioned artifacts and deliverables

Session folders are permanent and serve as project history.
```

**Reason:** Ensures the directory structure exists and is documented

---

## Validation Checklist

**Before applying:**
- [x] All affected files identified
- [x] Cross-references mapped (none - new functionality)
- [x] README navigation paths checked (self-contained)
- [x] No breaking changes to existing workflows
- [x] Rollback plan is clear and executable

**After applying:**
- [x] All files created successfully
- [x] `/session` command works and creates proper structure
- [x] Session folder naming uses ISO timestamps correctly
- [x] Artifact versioning workflow tested
- [x] Session summary updates correctly
- [x] No broken links

## Rollback Plan

**If this change needs to be reversed:**

1. Delete `.claude/commands/session.md`
2. Remove "Session Artifact Management" section from `protocol/rules.md`
3. Remove "Session Workflow" section from `CLAUDE.md`
4. Delete `arbitrary/` directory
5. Remove directive from `protocol/directives/README.md`

**Or:** Revert using git:
```bash
git checkout HEAD~1 .claude/commands/session.md
git checkout HEAD~1 protocol/rules.md
git checkout HEAD~1 CLAUDE.md
git checkout HEAD~1 arbitrary/
git checkout HEAD~1 protocol/directives/README.md
```

## Impact Assessment

**Who/what is affected:**
- [x] Claude Code session startup flow (new optional `/session` command)
- [ ] Navigation patterns (none - self-contained)
- [ ] Existing context files (minimal additions)
- [x] Development workflow (new standardized artifact management)

**Breaking changes:**
None - this is purely additive functionality. Existing workflows continue unchanged.

**Communication needed:**
Users should be informed that `/session` command is available and recommended for working sessions.

## Applied

**Applied by:** Claude Code (Session 2025-12-03)
**Applied date:** 2025-12-03
**Verification:** All files created and updated successfully. Session management rules added to protocol/rules.md, session workflow documented in CLAUDE.md, /session command created and functional.
**Issues encountered:** None

---

**Related directives:**
- None
