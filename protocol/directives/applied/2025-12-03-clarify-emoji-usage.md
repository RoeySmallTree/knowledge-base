# Protocol Change Directive: Clarify Emoji Usage Guidelines

**Date:** 2025-12-03
**Status:** applied
**Priority:** low

## Change Summary

Add explicit guidance on emoji usage to branding/vibe.md to ensure consistency in documentation and user-facing content.

## Rationale

Currently branding/vibe.md has a placeholder "Policy on emoji and special characters" but no actual policy. This directive fills in concrete guidelines to prevent inconsistent emoji usage.

## Scope of Change

**Files to modify:**
- [ ] `overview/branding/vibe.md` - Fill in emoji usage section

**Cross-references to check:**
- [ ] No cross-references affected (self-contained change)

**README updates needed:**
- [ ] None (content update only, no structure change)

## Detailed Changes

### Change 1: overview/branding/vibe.md

**Section:** Special Considerations → Emoji & Symbols

**Current state:**
```markdown
### Emoji & Symbols

[Policy on emoji and special characters]
- [When appropriate / when not]
```

**New state:**
```markdown
### Emoji & Symbols

**Policy:** Minimal and purposeful use only

**Allowed contexts:**
- Documentation section headers (✓, ⚠️, 📝 for visual scanning)
- Success/error states in UI (✓ success, ✗ error)
- File type indicators in technical docs (📁, 📄)

**Avoid in:**
- Body copy and prose
- Marketing headlines and taglines
- Formal documentation
- API responses or error messages
- Code comments

**Guideline:** If the emoji doesn't aid comprehension or navigation, don't use it.

**Examples:**
- ✓ Good: "## 📝 Quick Start Guide" (aids navigation)
- ✗ Bad: "CABAL makes your work easy! 🎉" (unnecessary flair)
```

**Reason:** Provides clear, actionable guidance on emoji usage that maintains professional tone while allowing functional use.

---

## Validation Checklist

**Before applying:**
- [x] All affected files identified (only vibe.md)
- [x] Cross-references mapped (none affected)
- [x] README navigation paths checked (no structure change)
- [x] No breaking changes to existing workflows

**After applying:**
- [ ] File updated successfully
- [ ] Content matches brand voice
- [ ] No broken links
- [ ] Guidance is clear and actionable

## Rollback Plan

**If this change needs to be reversed:**

1. Edit `overview/branding/vibe.md`
2. Revert emoji section back to placeholder:
   ```markdown
   ### Emoji & Symbols

   [Policy on emoji and special characters]
   - [When appropriate / when not]
   ```

## Impact Assessment

**Who/what is affected:**
- [ ] Claude Code session startup - No impact
- [ ] Navigation patterns - No impact
- [x] Existing context files - Clarifies existing placeholder
- [ ] Development workflow - No impact

**Breaking changes:**
None - this is a clarification of existing placeholder content.

**Communication needed:**
None - internal documentation update.

## Applied

**Applied by:** Claude Code (Session 2025-12-03)
**Applied date:** 2025-12-03
**Verification:** ✓ File updated successfully, content matches brand voice, no broken links, guidance is clear and actionable
**Issues encountered:** None

---

**Related directives:**
- None (first directive)
