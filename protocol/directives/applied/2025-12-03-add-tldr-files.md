# Protocol Change Directive: Add TLDR Files to Session Artifacts

**Date:** 2025-12-03
**Status:** applied
**Priority:** high

## Change Summary

Enhance session artifact management to automatically create `_tldr.md` companion files for each versioned artifact, containing a concise summary and ELI5 explanation.

## Rationale

Users need quick reference summaries without reading full artifacts. TLDR files provide:
- Quick overview of content (TLDR section)
- Simplified explanation for accessibility (ELI5 section)
- Faster context retrieval for future sessions
- Better artifact discoverability

## Scope of Change

**Files to modify:**
- [ ] `protocol/rules.md` - Update "Creating Artifacts" and "Iterating on Artifacts" sections
- [ ] `.claude/commands/session.md` - Update artifact workflow documentation

**Cross-references to check:**
- [ ] Session artifact management directive

**README updates needed:**
- [ ] None - internal workflow change

## Detailed Changes

### Change 1: Update protocol/rules.md

**Section:** Session Artifact Management (lines 36-49)

**Current state:**
```markdown
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
```

**New state:**
```markdown
**Creating Artifacts:**
- Use artifacts for: explanations, reviews, plans, designs, any referenceable content
- Never inline lengthy content when an artifact file is more appropriate
- Initial version: `<name>_V1.md`
- Always create companion file: `<name>_V1_tldr.md` with:
  - **TLDR:** Concise summary of the artifact
  - **ELI5:** Simplified explanation accessible to anyone
- Reference format: "See `<name>_V1.md` (TLDR: `<name>_V1_tldr.md`)"

**Iterating on Artifacts:**
- User requests changes → Create `<name>_V2.md` (increment version)
- Create companion: `<name>_V2_tldr.md` with updated TLDR and ELI5
- Update `<name>_CHANGELOG.md` with concise entry:
  - Version number and timestamp
  - What user requested
  - What was changed
  - Brief rationale
- Changelog should be minimal but clear
```

**Reason:** Establishes TLDR file creation as standard practice for all versioned artifacts

---

### Change 2: Update .claude/commands/session.md

**Section:** "Artifact Workflow" section

**Current state:**
```markdown
**Initial Version:**
- `session-files/explanation_of_X_V1.md` created
- You receive reference: "See explanation_of_X_V1.md"

**After Your Feedback:**
- `session-files/explanation_of_X_V2.md` created
- `session-files/explanation_of_X_CHANGELOG.md` updated:
```

**New state:**
```markdown
**Initial Version:**
- `session-files/explanation_of_X_V1.md` created
- `session-files/explanation_of_X_V1_tldr.md` created with TLDR and ELI5
- You receive reference: "See explanation_of_X_V1.md (TLDR available)"

**After Your Feedback:**
- `session-files/explanation_of_X_V2.md` created
- `session-files/explanation_of_X_V2_tldr.md` created with updated summary
- `session-files/explanation_of_X_CHANGELOG.md` updated:
```

**Reason:** Documents TLDR file creation in user-facing command documentation

---

## Validation Checklist

**Before applying:**
- [x] All affected files identified
- [x] Cross-references mapped
- [x] README navigation paths checked
- [x] No breaking changes to existing workflows
- [x] Rollback plan is clear and executable

**After applying:**
- [x] All files updated successfully
- [x] TLDR file format documented clearly
- [x] Workflow examples include TLDR files
- [x] No broken links

## Rollback Plan

**If this change needs to be reversed:**

1. Revert `protocol/rules.md` to remove TLDR file mentions
2. Revert `.claude/commands/session.md` to remove TLDR file documentation
3. Remove directive from `protocol/directives/README.md`

**Or:** Revert using git:
```bash
git checkout HEAD~1 protocol/rules.md
git checkout HEAD~1 .claude/commands/session.md
git checkout HEAD~1 protocol/directives/README.md
```

## Impact Assessment

**Who/what is affected:**
- [x] Session artifact creation workflow
- [ ] Navigation patterns (none - additive only)
- [ ] Existing context files (documentation updates only)
- [x] File organization (more files per artifact)

**Breaking changes:**
None - existing artifacts continue to work. TLDR files are additive.

**Communication needed:**
Users benefit from quick reference files for all session artifacts.

## Applied

**Applied by:** Claude Code (Session 2025-12-03)
**Applied date:** 2025-12-03
**Verification:** All files updated successfully. TLDR file creation added to protocol/rules.md and .claude/commands/session.md. Workflow now requires TLDR companion files for all versioned artifacts.
**Issues encountered:** None

---

**Related directives:**
- [2025-12-03-session-artifact-management](./applied/2025-12-03-session-artifact-management.md) - Base session management system
