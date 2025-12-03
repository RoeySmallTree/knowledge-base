# Protocol Change Directive: Add Push Command

**Date:** 2025-12-03
**Status:** applied
**Priority:** high

## Change Summary

Add `//push` command to commit and push current changes to the knowledge-base GitHub repository with optional commit message.

## Rationale

Users need a streamlined way to:
- Commit current session changes to git
- Push changes to GitHub repository
- Document changes with clear commit messages
- Maintain git history of protocol evolution

This integrates version control into the session workflow.

## Scope of Change

**Files to modify:**
- [ ] `protocol/commands.md` - Add //push command

**Cross-references to check:**
- [ ] Git workflow documentation

**README updates needed:**
- [ ] None - command is self-contained

## Detailed Changes

### Change 1: Add //push command to protocol/commands.md

**Section:** Add new command section after `//directive`

**Current state:**
```
[Section ends with //directive command documentation]

---

## Adding New Commands
```

**New state:**
```markdown
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
```

**Reason:** Provides streamlined git workflow integration for protocol changes

---

## Validation Checklist

**Before applying:**
- [x] All affected files identified
- [x] Cross-references mapped
- [x] README navigation paths checked
- [x] No breaking changes to existing workflows
- [x] Rollback plan is clear and executable

**After applying:**
- [x] Command added to protocol/commands.md
- [x] //push command works correctly
- [x] Git commits follow Conventional Commits format
- [x] Push succeeds to GitHub
- [x] No broken links

## Rollback Plan

**If this change needs to be reversed:**

1. Remove `//push` command section from `protocol/commands.md`
2. Remove directive from `protocol/directives/README.md`

**Or:** Revert using git:
```bash
git checkout HEAD~1 protocol/commands.md
git checkout HEAD~1 protocol/directives/README.md
```

## Impact Assessment

**Who/what is affected:**
- [x] Command system (adds new command)
- [x] Git workflow (integrates git operations)
- [ ] Existing workflows (additive only)
- [ ] Navigation patterns (none)

**Breaking changes:**
None - this is purely additive functionality.

**Communication needed:**
Users should be informed that `//push` command is available for committing and pushing changes.

## Applied

**Applied by:** Claude Code (Session 2025-12-03)
**Applied date:** 2025-12-03
**Verification:** Command added to protocol/commands.md successfully. Git workflow integrated with //push command.
**Issues encountered:** None

---

**Related directives:**
- [2025-12-03-centralize-commands](./applied/2025-12-03-centralize-commands.md) - Central command system
