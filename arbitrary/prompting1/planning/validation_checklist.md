# Validation Checklist: Phase 1 Coverage

**Purpose:** Verify that Phase 1 implementation covers all data structures and sections from the prompt versions.

---

## Source Prompts Analyzed

| Step | Version | System Prompt | User Prompt |
|------|---------|---------------|-------------|
| Bootstrap | V4.10 | ✅ Analyzed | ✅ Analyzed |
| Plan & Assign | V4.8 | ✅ Analyzed | ✅ Analyzed |
| Write | V4.7 | ✅ Analyzed | Referenced |
| Peer Review | V4.7 | ✅ Analyzed | Referenced |

---

## Architecture Validation

### New Format + Includes Model

| Aspect | Specification |
|--------|---------------|
| Format options | Each entity has multiple formats (inline, block, etc.) |
| Includes array | Configurable list of what data to include |
| Presets | Shortcuts for common includes combinations |
| Single function | No separate renderMinimal/renderStandard/renderFull |

### File Location

| Specified | Correct Location |
|-----------|------------------|
| `src/templates/` ❌ | `src/orchestrator/prompter/templates/` ✅ |

---

## Entity Coverage

### Product Entity

| Include | Field | Covered? |
|---------|-------|----------|
| `id` | `id` | ✅ |
| `type` | `type` | ✅ |
| `status` | `status` | ✅ |
| `owner` | `owner_id` → memberMap lookup | ✅ |
| `dod` | `definition_of_done` | ✅ |
| `description` | `description` | ✅ |
| `round_focus` | `is_round_focus` | ✅ |
| `latest_version` | `selected_version_id` → versionMap | ✅ |
| `version_content` | version.content | ✅ |
| `version_history` | `version_ids` → versionMap | ✅ |
| `collabs` | collabsById filter | ✅ |
| `collab_count` | computed from collabs | ✅ |
| `ownership_marker` | highlightOwnedBy comparison | ✅ |

### Version Entity

| Include | Field | Covered? |
|---------|-------|----------|
| `version_number` | `version_number` | ✅ |
| `author` | `author_id` → memberMap | ✅ |
| `author_kind` | `author_kind` | ✅ |
| `change_summary` | `change_summary` | ✅ |
| `content` | `content` | ✅ |
| `created_at` | `created_at` | ✅ |
| `delta` | computed from previousVersion | ✅ |

### Collab Entity

| Include | Field | Covered? |
|---------|-------|----------|
| `status` | `resolved` → [OPEN] / [✓] | ✅ |
| `author` | `author_id` → memberMap | ✅ |
| `author_kind` | `author_kind` | ✅ |
| `product_name` | `about_product_id` → productMap | ✅ |
| `product_id` | `about_product_id` | ✅ |
| `importance` | `importance` | ✅ |
| `content` | `content` | ✅ |
| `summary` | `shortest_summary` | ✅ |
| `addressees` | `addressee_ids` → memberMap | ✅ |
| `references` | `references_product_ids` | ✅ |
| `created_at` | `created_at` | ✅ |

### Member Entity

| Include | Field | Covered? |
|---------|-------|----------|
| `id` | `id` | ✅ |
| `name` | `name` | ✅ |
| `role` | `role` | ✅ (Fixed: now in minimal) |
| `team_role` | `team_role` | ✅ |
| `responsibility` | `operative_responsibility` | ✅ (Fixed: now in standard) |
| `area` | `operative_area` | ✅ |
| `persona` | `custom_persona_prompt` | ✅ |
| `life_story` | `life_story` | ✅ |
| `special_orders` | `special_orders` | ✅ |
| `owned_products` | `owned_products_count` + `owned_pending_products_count` | ✅ (Fixed: assignment preset) |
| `current_marker` | isCurrentMember option | ✅ |

### Session Entity

| Include | Field | Covered? |
|---------|-------|----------|
| `name` | `name` | ✅ |
| `round` | `current_round` | ✅ |
| `status` | `status` | ✅ |
| `mission_charter` | `mission_charter` | ✅ |
| `objectives` | `underlying_objectives` | ✅ |
| `missing_details` | `missing_details` | ✅ |

---

## Format Coverage

### Product Formats

| Format | Use Case | Covered? |
|--------|----------|----------|
| `inline` | Quick references | ✅ |
| `block` | Detailed view | ✅ |
| `tree-node` | Product tree | ✅ |

### Collab Formats

| Format | Use Case | Covered? |
|--------|----------|----------|
| `inline` | Quick references | ✅ |
| `feedback-item` | Feedback lists | ✅ |
| `block` | Full detail | ✅ |
| `directive` | Chair directives | ✅ |

### Member Formats

| Format | Use Case | Covered? |
|--------|----------|----------|
| `inline` | Quick references | ✅ |
| `list-item` | Team roster | ✅ |
| `block` | System prompt persona | ✅ |
| `id-reference` | Valid IDs section | ✅ |

---

## Fixes Applied

### ✅ Member minimal now includes role

**Before:** `['name', 'id']`  
**After:** `['name', 'id', 'role']`

### ✅ Member standard now includes responsibility

**Before:** `['name', 'id', 'role', 'team_role']`  
**After:** `['name', 'id', 'role', 'team_role', 'responsibility']`

### ✅ Member assignment preset for Chair

**New preset:** `['name', 'id', 'role', 'team_role', 'responsibility', 'area', 'owned_products']`

### ✅ Collab handles open vs resolved

- `status` include renders `[OPEN]` or `[✓]` / `[✓ RESOLVED]`
- `filterResolved` option for filtering

### ✅ File paths corrected

**Before:** `src/templates/`  
**After:** `src/orchestrator/prompter/templates/`

### ✅ Single render function per entity

**Before:** Separate `renderMinimal()`, `renderStandard()`, `renderFull()`  
**After:** Single `renderProduct()` with format switch and includes-based conditional logic

---

## Deferred to Phase 2

| Item | Reason |
|------|--------|
| Round Delta | Requires step-specific computation |
| Operative Reflections | Requires Reflect step analysis |
| Products Pending Acceptance | Filter logic on top of product rendering |
| Step-specific template files | Phase 2 scope |

---

## Summary

**All core entities and composites covered with the new architecture:**

- ✅ Format + Includes model implemented
- ✅ Presets for common configurations
- ✅ Single function per entity (no separate minimal/standard/full)
- ✅ All fields mapped to includes
- ✅ All user feedback incorporated
- ✅ File paths corrected
