# Protocol Change Directive: Simplify Session Naming

**Date:** 2025-12-03
**Status:** applied
**Priority:** high

## Change Summary

Simplify session folder naming by removing timestamps and "session_" prefix. Generate meaningful names based on the task/prompt, defaulting to "new-session-XXXX" when no clear name can be derived.

## Rationale

- Timestamps make folder names unnecessarily long and hard to read
- "session_" prefix is redundant since folders are in `arbitrary/`
- Task-based names are more meaningful and navigable
- Simpler naming improves usability

## Scope of Change

**Files to modify:**
- [ ] `protocol/commands.md` - Update //session command

## Detailed Changes

### Change 1: Update //session command in protocol/commands.md

**Section:** `### //session`

**Current state:**
```markdown
**Syntax:** `//session [description]`

**Purpose:** Initialize a new session with artifact management.

**Execution Instructions:**

1. Generate ISO timestamp: `YYYY-MM-DDTHH-MM-SS`
2. Create session folder: `arbitrary/session_<timestamp>_<description>/`
3. Create `session-summary.md`:
   ...
6. Confirm to user: "Session initialized: `session_<timestamp>_<description>/`"

**Examples:**
```
//session api_refactoring
//session debugging_auth_issue
//session research_testing_frameworks
```
```

**New state:**
```markdown
**Syntax:** `//session [description]`

**Purpose:** Initialize a new session with artifact management.

**Execution Instructions:**

1. **Generate folder name:**
   - If description provided: Convert to kebab-case folder name
     - Example: "API refactoring" → `api-refactoring`
     - Example: "debugging auth issue" → `debugging-auth-issue`
   - If no description or unclear: Use `new-session-XXXX`
     - XXXX = 4 random alphanumeric characters
     - Example: `new-session-a7f2`

2. **Ensure unique name:**
   - Check if folder already exists in `arbitrary/`
   - If exists, append `-2`, `-3`, etc. or regenerate random suffix

3. Create session folder: `arbitrary/<folder-name>/`

4. Create `session-summary.md`:
   ```markdown
   # Session: [folder-name]

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

5. Create empty directory: `session-files/`
6. Create empty directory: `todo/`
7. Confirm to user: "Session initialized: `<folder-name>/`"

**Naming Guidelines:**
- Use kebab-case (lowercase with hyphens)
- Keep names concise but descriptive
- Derive name from the actual task/prompt
- No timestamps in folder names
- No "session_" prefix

**Examples:**
```
//session API refactoring
→ Creates: arbitrary/api-refactoring/

//session debugging auth issue
→ Creates: arbitrary/debugging-auth-issue/

//session
→ Creates: arbitrary/new-session-x7k2/

//session research testing frameworks
→ Creates: arbitrary/research-testing-frameworks/
```
```

**Reason:** Cleaner, more readable folder names based on actual task content

---

## Validation Checklist

**Before applying:**
- [x] All affected files identified
- [x] New naming scheme is clear
- [x] Examples provided

**After applying:**
- [ ] Command updated in protocol/commands.md
- [ ] Examples reflect new naming
- [ ] No references to old naming pattern remain

## Rollback Plan

**If this change needs to be reversed:**

1. Restore previous //session command format in `protocol/commands.md`
2. Re-add timestamp and "session_" prefix requirements

## Impact Assessment

**Who/what is affected:**
- [x] Session creation workflow
- [ ] Existing sessions (no breaking changes - existing folders unchanged)
- [x] Future session naming

**Breaking changes:**
None - only affects new sessions.

## Applied

**Applied by:** Claude
**Applied date:** 2025-12-03
**Verification:** //session command updated with new naming scheme
**Issues encountered:** None

---

**Related directives:**
- 2025-12-03-session-artifact-management.md (original session system)
