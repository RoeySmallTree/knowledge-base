# Protocol Change Management

**Status:** Core Directive - How to change the protocol itself

## Purpose

This document establishes the process for efficiently and robustly updating the protocol system. Use this when the protocol needs to change, ensuring changes propagate correctly across all affected files.

## Quick Start

**To make a protocol change:**

1. Create directive file in `protocol/directives/YYYY-MM-DD-change-name.md`
2. Use the directive template (see below)
3. Apply the change using Claude Code
4. Archive the directive once applied

## Change Directive System

### What is a Directive?

A directive is a structured command that specifies:
- **What** to change (which files, which sections)
- **Why** the change is needed
- **How** to apply it (specific edits)
- **Impact** (what else needs updating)

### Directive Workflow

```
1. Create Directive
   ↓
2. Validate Directive (check completeness)
   ↓
3. Apply Changes (execute all edits)
   ↓
4. Verify Changes (check cross-references)
   ↓
5. Archive Directive (move to applied/)
```

## Directive Template

Create new directives using this structure:

```markdown
# Protocol Change Directive: [Change Name]

**Date:** YYYY-MM-DD
**Status:** pending | applied | superseded
**Priority:** critical | high | medium | low

## Change Summary

[1-2 sentences describing what's changing and why]

## Rationale

[Why this change is needed - problem being solved or improvement being made]

## Scope of Change

**Files to modify:**
- [ ] `path/to/file1.md` - [What to change]
- [ ] `path/to/file2.md` - [What to change]
- [ ] `path/to/file3.md` - [What to change]

**Cross-references to check:**
- [ ] Files that link TO changed content
- [ ] Files that changed content links FROM

**README updates needed:**
- [ ] Which README files need updates

## Detailed Changes

### Change 1: [File path]

**Section:** [Section name or line numbers]

**Current state:**
```
[Current content]
```

**New state:**
```
[New content]
```

**Reason:** [Why this specific change]

---

### Change 2: [File path]

[Follow same structure]

---

## Validation Checklist

Before applying:
- [ ] All affected files identified
- [ ] Cross-references mapped
- [ ] README navigation paths checked
- [ ] No breaking changes to existing workflows (or documented)

After applying:
- [ ] All files updated successfully
- [ ] Cross-references still valid
- [ ] README navigation works
- [ ] Breadcrumbs intact

## Rollback Plan

**If this change needs to be reversed:**

[Steps to undo the change - specific enough to execute]

## Impact Assessment

**Who/what is affected:**
- [ ] Claude Code session startup
- [ ] Navigation patterns
- [ ] Existing context files
- [ ] Development workflow

**Breaking changes:**
[Any breaking changes and mitigation]

**Communication needed:**
[If this needs to be communicated to team]

## Applied

**Applied by:** [Name/Session]
**Applied date:** [YYYY-MM-DD]
**Verification:** [Confirmation that changes were applied correctly]

---

**Related directives:**
- [Link to related change directives]
```

## Types of Protocol Changes

### Type 1: Structural Changes

**Examples:** Adding new folders, reorganizing content, changing navigation

**Process:**
1. Create comprehensive directive mapping all moves/changes
2. Update all affected README files
3. Update all cross-references
4. Verify all navigation paths

**Validation:** Manual navigation test from CLAUDE.md through affected areas

---

### Type 2: Content Updates

**Examples:** Updating rules, changing conventions, modifying templates

**Process:**
1. Create directive specifying exact content changes
2. Update affected files
3. Check cross-references for outdated info
4. Update examples if needed

**Validation:** Search for related terms to ensure consistency

---

### Type 3: Process Changes

**Examples:** Changing how context is maintained, updating workflows

**Process:**
1. Create directive documenting old vs. new process
2. Update protocol.md, rules.md, or maintenance.md
3. Update any examples or templates
4. Check for references to old process

**Validation:** Trace through new process to ensure it works

---

### Type 4: Emergency Fixes

**Examples:** Fixing broken links, correcting errors, urgent updates

**Process:**
1. Create minimal directive (can be abbreviated)
2. Apply fix immediately
3. Verify related areas
4. Document in directive for audit trail

**Validation:** Spot check affected areas

## Directive Execution Process

### Step 1: Create Directive

```bash
# Create new directive file
touch protocol/directives/$(date +%Y-%m-%d)-change-name.md
```

Copy template and fill in all sections.

### Step 2: Validate Directive

**Validation checklist:**
- [ ] Change summary is clear
- [ ] All affected files listed
- [ ] Specific edits documented
- [ ] Cross-references identified
- [ ] Rollback plan exists
- [ ] Impact assessed

### Step 3: Apply Changes

Execute each change in the directive:

1. **For each file:**
   - Open file
   - Make specified changes
   - Verify change applied correctly
   - Check in directive

2. **Update cross-references:**
   - Find files linking to changed content
   - Update references as needed
   - Verify links work

3. **Update navigation:**
   - Update README files if structure changed
   - Verify navigation paths
   - Test breadcrumbs

### Step 4: Verify Changes

**Verification steps:**

1. **Navigation test:**
   ```
   Start at CLAUDE.md
   → Follow path to changed area
   → Verify all links work
   → Check breadcrumbs back
   ```

2. **Cross-reference check:**
   ```bash
   # Find references to changed content
   grep -r "changed-term" . --include="*.md"
   # Verify each reference is still accurate
   ```

3. **Consistency check:**
   - Changed files use consistent terminology
   - Templates match new structure
   - Examples reflect new approach

### Step 5: Archive Directive

```bash
# Create applied archive if it doesn't exist
mkdir -p protocol/directives/applied

# Move directive to archive
mv protocol/directives/YYYY-MM-DD-change-name.md \
   protocol/directives/applied/YYYY-MM-DD-change-name.md
```

Update directive status to "applied" and add application metadata.

## Common Change Patterns

### Pattern: Adding New Context Area

**Directive includes:**
- New folder creation
- README.md for new area
- Initial content files
- Updates to parent README.md
- Cross-references from related areas

**Template:**
```
1. Create folder: overview/new-area/
2. Create: overview/new-area/README.md
3. Create initial files: [list]
4. Update: overview/README.md (add new-area to Quick Navigation)
5. Add cross-references from: [related files]
```

---

### Pattern: Renaming/Moving Content

**Directive includes:**
- Old path → new path mapping
- All files with links to old path
- README updates
- Breadcrumb updates

**Template:**
```
1. Move: old/path/file.md → new/path/file.md
2. Update links in: [list all files with links]
3. Update: old/path/README.md (remove reference)
4. Update: new/path/README.md (add reference)
5. Update breadcrumb in moved file
```

---

### Pattern: Updating Protocol Rules

**Directive includes:**
- Specific rule changes
- Rationale for change
- Impact on existing content
- Updates to examples

**Template:**
```
1. Update: protocol/rules.md [section X]
2. Update examples in: [files with examples]
3. Check existing content for violations
4. Update templates if needed
```

---

### Pattern: Deprecating Content

**Directive includes:**
- What's being deprecated
- Replacement (if any)
- Migration path for users
- Archive strategy

**Template:**
```
1. Add [DEPRECATED] marker to: [file]
2. Add pointer to new location
3. Update README to show deprecated status
4. Update cross-references to point to new content
5. Archive after [timeframe]
```

## Directive Management

### Active Directives

**Location:** `protocol/directives/*.md`

**Naming:** `YYYY-MM-DD-brief-description.md`

**Status values:**
- `pending` - Not yet applied
- `in-progress` - Currently being applied
- `applied` - Successfully applied and verified
- `superseded` - Replaced by another directive

### Applied Directives Archive

**Location:** `protocol/directives/applied/*.md`

**Purpose:** Audit trail and change history

**Retention:** Keep indefinitely for historical reference

### Directive Index

Maintain index in `protocol/directives/README.md`:

```markdown
# Protocol Change Directives

## Active Directives

- [2025-12-03-example-change](./2025-12-03-example-change.md) - Status: pending

## Recently Applied

- [2025-12-01-another-change](./applied/2025-12-01-another-change.md) - Applied

## All Applied Directives

- [Archive list](./applied/)
```

## Best Practices

### Writing Directives

1. **Be specific:** Exact file paths, exact changes
2. **Be complete:** List all affected files, including cross-references
3. **Be reversible:** Always include rollback plan
4. **Be clear:** Anyone should be able to execute your directive

### Applying Changes

1. **Validate first:** Check directive completeness before starting
2. **Apply atomically:** Complete all changes in one session if possible
3. **Verify thoroughly:** Test navigation and cross-references
4. **Document completion:** Update directive with application metadata

### Managing Directives

1. **One change per directive:** Keep focused and manageable
2. **Sequential application:** Apply in date order
3. **Archive promptly:** Move applied directives out of active folder
4. **Link related directives:** Cross-reference dependent changes

## Emergency Protocol Changes

For critical fixes that can't wait for full directive process:

### Fast-Track Process

1. **Create minimal directive:**
   - What's changing
   - Why it's urgent
   - Specific edits

2. **Apply immediately**

3. **Verify quickly:**
   - Direct impact only
   - Skip full cross-reference check

4. **Follow-up:**
   - Complete full verification later
   - Update directive with full details
   - Check for related issues

### When to Use Fast-Track

- Broken links blocking work
- Critical errors in process
- Security/safety issues
- Blocking bugs in protocol

## Conflict Resolution

### If Multiple Directives Conflict

1. **Identify conflict:** Which directives touch same files/areas
2. **Determine order:** Which should apply first
3. **Merge if possible:** Combine into single directive
4. **Update both:** Reflect dependencies in each directive

### If Applied Change Causes Issues

1. **Create rollback directive:** Document reverting the change
2. **Apply rollback:** Execute immediately if critical
3. **Mark original as superseded:** Update status
4. **Create fix directive:** If modification rather than full rollback

## Tools & Automation

### Helpful Commands

**Find files referencing a term:**
```bash
grep -r "term-to-find" . --include="*.md"
```

**Validate all markdown links:**
```bash
# Manual check - verify each link exists
find . -name "*.md" -exec grep -H "\[.*\](\..*\.md)" {} \;
```

**List all README files:**
```bash
find . -name "README.md"
```

**Check directive completeness:**
```bash
# Verify all sections present in directive
grep -E "^## " protocol/directives/YYYY-MM-DD-name.md
```

### Future Automation

Consider creating:
- Script to validate directive format
- Link checker for markdown files
- Directive application tracker
- Navigation path tester

---

**Related:**
- [Protocol](./protocol.md) - How the protocol system works
- [Maintenance](./maintenance.md) - Regular maintenance procedures
- [Rules](./rules.md) - Rules that might be changed via directives

← Back to [Protocol Guide](./README.md)
