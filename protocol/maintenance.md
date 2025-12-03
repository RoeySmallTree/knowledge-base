# Context Maintenance Guide

**Status:** Reference - Read when updating context files

## Purpose

This guide explains how to maintain, update, and extend the hierarchical context system. Follow these procedures to keep documentation accurate and navigable.

## When to Update Context

### Triggers for Updates

**Immediate Updates Required:**
- New major feature added → Update relevant overview area
- Architecture changed → Update overview/algorithm/ or affected areas
- New development process → Update protocol/rules.md
- Navigation structure changed → Update affected README.md files
- Information becomes outdated → Mark deprecated or update

**Periodic Reviews:**
- After each milestone → Review all context for accuracy
- Monthly → Check cross-references are still valid
- When onboarding new contributors → Test navigation flows

### What Needs Updating

**Code Changes:**
- Major features → overview/[relevant-area]/
- API changes → Technical specs or algorithm docs
- Build/test process → CLAUDE.md or protocol/rules.md

**Process Changes:**
- New conventions → protocol/rules.md
- Navigation changes → protocol/protocol.md
- Maintenance procedures → This file

**Project Evolution:**
- Vision shifts → overview/vision.md
- Market positioning → overview/market/
- Branding updates → overview/branding/

## How to Update Context Files

### Step-by-Step Update Process

1. **Identify Affected Files**
   - Start at area's README.md
   - Follow links to specific content
   - Note cross-references that mention the topic

2. **Update Primary Content**
   - Edit the main content file
   - Keep changes focused and clear
   - Maintain existing structure unless reorganizing

3. **Update Cross-References**
   - Check files that link TO the updated content
   - Check files the updated content links FROM
   - Update or verify all related links

4. **Update Navigation (if needed)**
   - If adding new file: Add to parent README.md
   - If moving file: Update all referencing README.md files
   - If removing file: Remove from README.md and mark deprecated

5. **Verify Navigation Flow**
   - Trace path from CLAUDE.md to updated content
   - Ensure README.md guidance is clear
   - Test that cross-references work

### Example Update Flow

**Scenario:** Adding new file `overview/algorithm/data-pipeline.md`

```
1. Create new file: overview/algorithm/data-pipeline.md
   - Include breadcrumb: "← Back to [Algorithm Guide](./README.md)"
   - Add cross-references to related concepts

2. Update: overview/algorithm/README.md
   - Add to "Quick Navigation" section
   - Add to "Sub-areas" if it spawns a folder

3. Check: overview/README.md
   - Verify algorithm/ section mentions data processing

4. Update related: overview/algorithm/approach.md
   - Add cross-reference to data-pipeline.md if relevant

5. Test navigation:
   - Can you reach data-pipeline.md from CLAUDE.md?
   - Are all links valid?
```

## Adding New Areas

### Creating a New Top-Level Area

**Example:** Adding `market/` to `overview/`

1. **Create Directory Structure**
   ```bash
   mkdir -p overview/market
   touch overview/market/README.md
   ```

2. **Create README.md** (use template below)

3. **Update Parent README**
   - Edit `overview/README.md`
   - Add market/ to navigation

4. **Create Initial Content Files**
   - Add core files referenced in market/README.md
   - Ensure each has breadcrumb back to README

5. **Update CLAUDE.md** (if major addition)
   - Mention new area in overview section

### Creating a Sub-Area

**Example:** Adding `overview/branding/visual-identity/`

1. **Create subfolder and README**
   ```bash
   mkdir -p overview/branding/visual-identity
   touch overview/branding/visual-identity/README.md
   ```

2. **Update parent README**
   - Edit `overview/branding/README.md`
   - Add visual-identity/ to "Sub-areas" section

3. **Create content files**
   - Add files referenced in visual-identity/README.md
   - Include breadcrumbs back to parent

## README.md Template

Use this template when creating new README.md files:

```markdown
# [Area Name] - Context Guide

## Purpose
[1-2 sentences describing what this area covers and why it exists]

## Quick Navigation
- **Start here:** [primary-file.md] - [When to read: describe the use case]
- **For [specific need]:** [another-file.md] - [Brief description]
- **For [another need]:** [third-file.md] - [Brief description]

## Sub-areas
[Only include if sub-folders exist]
- **[subfolder-name]/**: [Description] → Start with [subfolder-name]/README.md
- **[another-subfolder]/**: [Description] → Start with [another-subfolder]/README.md

## Related Context
[Cross-references to related areas]
- See [../other-area/file.md] for [related topic]
- Refer to [/protocol/rules.md] for [specific rules]

## When to Explore This
[Guidelines for when Claude should read files in this area]
- Read when: [scenario 1]
- Read when: [scenario 2]
- Skip when: [scenario that doesn't need this]

---
← Back to [Parent Area](../README.md)
```

## Content File Template

Use this structure for content files:

```markdown
# [Topic Title]

[Brief introduction - what this document covers]

## [Section 1]
[Content]

## [Section 2]
[Content]

## [Additional Sections]
[Content]

---

**Related:**
- [Related file](./related-file.md)
- [Cross-area reference](../other-area/file.md)

← Back to [Area Guide](./README.md)
```

## Deprecating Content

When information becomes outdated:

### Option 1: Update in Place
- Preferred for minor changes
- Keep same file path
- Update content and cross-references

### Option 2: Mark Deprecated
For major changes where old info might still be referenced:

```markdown
# [Old Topic Title]

**[DEPRECATED]** This information is outdated as of [date].

**See instead:** [new-file.md](./new-file.md) or [new location](../new-area/file.md)

## Why Deprecated
[Brief explanation of what changed]

---

[Keep old content below for reference, or remove if no longer useful]
```

### Option 3: Remove Completely
- Delete the file
- Remove from parent README.md
- Update all cross-references
- Check with `grep -r "filename.md" .` to find references

## Consistency Checks

### Regular Maintenance Tasks

**Weekly:**
- Verify new files have breadcrumbs
- Check recent updates have cross-references

**Monthly:**
- Run link checker (manual or automated)
- Review README.md files for accuracy
- Update "When to Explore This" sections if patterns changed

**Quarterly:**
- Full navigation audit from CLAUDE.md down
- Remove outdated content
- Reorganize if structure is awkward

### Link Validation

Check for broken links:
```bash
# Manual check
grep -r "\[.*\](\..*\.md)" . --include="*.md"

# Verify files exist
find . -name "*.md" -exec grep -H "\[.*\](\..*\.md)" {} \; | \
  # Parse and verify each link exists
```

### Consistency Rules

1. **Breadcrumbs**: Every content file links back to parent README
2. **README completeness**: Every folder with >1 file has README.md
3. **Cross-references**: Bidirectional when both topics reference each other
4. **Naming**: Follow conventions in protocol/protocol.md
5. **Structure**: Use templates for consistency

## Common Maintenance Scenarios

### Scenario: Reorganizing an Area

**Problem:** `overview/algorithm/` has grown messy

**Solution:**
1. Plan new structure in a document
2. Create new folders/README files
3. Move files to new locations
4. Update all README.md files with new paths
5. Search and update cross-references: `grep -r "old-path" . --include="*.md"`
6. Test navigation flows
7. Commit with clear message: `docs: reorganize algorithm context structure`

### Scenario: Splitting a Large File

**Problem:** `overview/vision.md` too long, needs splitting

**Solution:**
1. Create new files for sub-topics
2. Add files to `overview/README.md`
3. Update `vision.md` to be overview with links to details
4. Ensure new files have breadcrumbs
5. Update cross-references that linked to specific sections

### Scenario: Merging Overlapping Content

**Problem:** `branding/tone.md` and `branding/voice.md` overlap

**Solution:**
1. Create unified `branding/vibe.md` (or keep one, delete other)
2. Merge content, removing duplication
3. Update `branding/README.md`
4. Find and update cross-references to old files
5. Mark old files deprecated or delete entirely

## Tools & Automation

### Manual Tools

```bash
# Find all README files
find . -name "README.md"

# Find broken markdown links (basic check)
grep -r "\[.*\](.*.md)" . --include="*.md" | grep -v "^Binary"

# Find files without breadcrumbs (search for ← symbol)
find . -name "*.md" ! -name "README.md" -exec grep -L "←" {} \;

# List all markdown files to verify organization
tree -P "*.md"
```

### Future Automation

Consider adding:
- Pre-commit hook to validate links
- CI check for README existence in multi-file folders
- Script to generate navigation graph
- Automated cross-reference validation

## Best Practices

1. **Update immediately**: Don't let docs drift from reality
2. **Small, focused changes**: One logical update per commit
3. **Test navigation**: Manually verify paths after updates
4. **Keep it DRY**: Don't duplicate info; link to single source
5. **Clear commit messages**: `docs: add data pipeline overview`
6. **Ask when unsure**: Better to clarify than guess at structure

---

**Related:**
- [protocol.md](./protocol.md) - How context system works
- [rules.md](./rules.md) - What rules to follow

← Back to [Protocol Guide](./README.md)
