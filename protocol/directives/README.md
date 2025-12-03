# Protocol Change Directives - Index

**⚠️ IMPORTANT: This file is checked at session start**

Claude Code checks this file during session initialization. If pending directives exist, Claude will offer to apply them.

## Active Directives

**Status:** Pending directives that need to be applied

<!-- List pending directives here. Format: -->
<!-- - [YYYY-MM-DD-name](./YYYY-MM-DD-name.md) - Priority: [high/medium/low] - [Brief description] -->

*No pending directives*

## Recently Applied

**Status:** Directives applied in the last 30 days

<!-- List recently applied directives here -->
<!-- - [YYYY-MM-DD-name](./applied/YYYY-MM-DD-name.md) - Applied: YYYY-MM-DD - [Brief description] -->

- [2025-12-03-integrate-product-overview](./applied/2025-12-03-integrate-product-overview.md) - Applied: 2025-12-03 - Integrate comprehensive Cabal product overview into overview/ structure
- [2025-12-03-add-push-command](./applied/2025-12-03-add-push-command.md) - Applied: 2025-12-03 - Add //push command for committing and pushing changes to GitHub repository
- [2025-12-03-centralize-commands](./applied/2025-12-03-centralize-commands.md) - Applied: 2025-12-03 - Centralize all commands in protocol/commands.md with // syntax for all AI systems
- [2025-12-03-session-todo-management](./applied/2025-12-03-session-todo-management.md) - Applied: 2025-12-03 - Add `/todo` command for task management within sessions with progress tracking and artifact references
- [2025-12-03-add-tldr-files](./applied/2025-12-03-add-tldr-files.md) - Applied: 2025-12-03 - Add TLDR companion files with summaries and ELI5 explanations for all session artifacts
- [2025-12-03-session-artifact-management](./applied/2025-12-03-session-artifact-management.md) - Applied: 2025-12-03 - Establish session-based artifact management with `/session` command and versioned deliverables
- [2025-12-03-clarify-emoji-usage](./applied/2025-12-03-clarify-emoji-usage.md) - Applied: 2025-12-03 - Add explicit emoji usage guidelines to branding/vibe.md

## Instructions for Claude Code

### Session Start Check

**At every session start, after reading protocol.md and rules.md:**

1. **Check this file** for Active Directives section
2. **If pending directives exist:**
   - List them to the user
   - Ask: "I found [N] pending protocol directive(s). Would you like me to apply them now?"
   - If yes → Apply each directive following protocol/changes.md process
   - If no → Continue session (directives remain pending)

3. **If no pending directives:**
   - Continue session silently (no need to mention)

### Applying a Directive

**Process:**
1. Read the directive file completely
2. Validate completeness using validation checklist
3. Execute each change in "Detailed Changes" section
4. Check off items in "Scope of Change" and "Validation Checklist"
5. Update "Applied" section with metadata
6. Move directive to `applied/` folder
7. Update this README:
   - Remove from Active Directives
   - Add to Recently Applied
8. Report completion to user

**Example application:**
```
Reading directive: 2025-12-03-example-change.md
✓ Validated directive completeness
✓ Applied 3 file changes
✓ Updated 2 cross-references
✓ Verified navigation paths
✓ Archived directive
✓ Updated directive index

Protocol directive "example-change" applied successfully.
```

## Creating New Directives

### For Users

To create a new protocol change:

1. **Copy template:**
   ```bash
   cp protocol/directives/TEMPLATE.md protocol/directives/$(date +%Y-%m-%d)-your-change-name.md
   ```

2. **Fill in all sections** in the new file

3. **Update this README:**
   - Add to "Active Directives" section
   - Set priority (critical/high/medium/low)
   - Add brief description

4. **Commit the directive:**
   ```bash
   git add protocol/directives/
   git commit -m "directive: add [change-name] protocol change"
   ```

5. **Next Claude session** will detect and offer to apply it

### For Claude Code

When user asks to create a protocol change:

1. **Ask clarifying questions** about the change
2. **Create directive file** using TEMPLATE.md
3. **Fill in all sections** based on user input
4. **Update this README** to list the new directive
5. **Ask user:** "Would you like me to apply this directive now, or leave it pending for next session?"

## Directive Archive

All applied directives are archived in `protocol/directives/applied/` for historical reference.

**View archive:**
```bash
ls -la protocol/directives/applied/
```

---

**Related:**
- [Change process](../changes.md) - Full protocol change documentation
- [Template](./TEMPLATE.md) - Template for new directives
- [Protocol](../protocol.md) - How context system works

← Back to [Protocol Guide](../README.md)
