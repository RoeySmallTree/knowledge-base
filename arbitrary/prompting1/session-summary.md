# Session: prompting1

**Created:** 2025-12-04  
**Last Updated:** 2025-12-11  
**Status:** Active

---

## Folder Structure Rules

### Directory Layout

```
prompting1/
├── bootstrap/                    # Bootstrap step
│   ├── v4.7/
│   │   ├── system_prompt.md      # THE system prompt for this version
│   │   ├── user_prompt.md        # THE user prompt for this version
│   │   ├── restaurant/           # Test case folder
│   │   │   ├── run.sh            # Executable test script
│   │   │   ├── request.json      # API request payload
│   │   │   ├── result.json       # Raw API response
│   │   │   └── analysis.md       # Analysis against principles
│   │   └── planning/             # Planning for NEXT version
│   │       └── v4.8_changes.md
│   ├── v4.8/
│   ├── v4.9/
│   └── v4.10/
│
├── plan_assign/                  # Plan & Assign step
│   └── v4.7/
│       ├── system_prompt.md
│       ├── user_prompt.md
│       ├── todo/                 # Test case folder
│       └── planning/
│           └── v4.8_root_cause.md
│
├── write/                        # Write step
│   └── v4.7/
├── inspect/                      # Inspect step
│   └── v4.7/
├── archive/                      # Old/deprecated files
│
├── session-summary.md            # This file
└── V1_principles_list.md         # Reference: evaluation criteria
```

### Key Principles

1. **Steps at top level** — Each orchestration step gets its own folder
2. **Versions under steps** — Track prompt evolution per step
3. **Prompts at version level** — `system_prompt.md` and `user_prompt.md` are THE prompts
4. **Test cases as subfolders** — Named by use case (restaurant/, todo/)
5. **Planning folder** — Documents changes needed for next version

### Rules for Adding New Content

**When creating a new prompt version:**
```
1. Create folder: {step}/v{X.Y}/
2. Add: system_prompt.md, user_prompt.md
3. Copy user_prompt.md from previous version if unchanged
```

**When running a test:**
```
1. Create folder: {step}/v{X.Y}/{use_case}/
2. Create: request.json (API payload)
3. Create: run.sh (copy from sibling version, update version number)
4. Run: ./run.sh
5. Create: analysis.md (evaluate result against V1 principles)
```

**When planning improvements:**
```
1. Create: {step}/v{X.Y}/planning/v{X.Y+1}_changes.md
2. Document: root causes, proposed fixes, implementation checklist
```

**When deprecating files:**
```
1. Move to archive/
2. Do NOT delete (keep for reference)
```

### run.sh Template

All `run.sh` files follow this pattern:

```bash
#!/bin/bash
# {Step} V{X.Y} Test - {Use Case}
# Run from: {step}/v{X.Y}/{use_case}/

set -e

ENV_FILE="../../../../.env"
API_KEY=$(grep "^OPEN_ROUTER_API_KEY=" "$ENV_FILE" | cut -d'=' -f2)

curl -s https://openrouter.ai/api/v1/chat/completions \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d @request.json > result.json

echo "Done! Result saved to result.json"
```

### Naming Conventions

| Item | Convention | Example |
|------|------------|---------|
| Step folder | lowercase, underscore | `plan_assign/` |
| Version folder | `v` + semver | `v4.7/`, `v4.10/` |
| Test case folder | lowercase, descriptive | `restaurant/`, `todo/` |
| System prompt | `system_prompt.md` | — |
| User prompt | `user_prompt.md` | — |
| Test result | `result.json` | — |
| Analysis | `analysis.md` | — |
| Planning doc | `v{next}_*.md` | `v4.8_root_cause.md` |

---

## Overview

Prompt engineering for CABAL algorithm steps. Upgrading and validating the prompting architecture to V4.7+ across all 7 orchestration steps.

---

## Session Objectives

1. **Upgrade all 7 step prompts to V4.7** — Bootstrap, Plan & Assign, Write, Reflect, Peer Review, Inspect, Presentation
2. **Create scorecards** verifying principle coverage and backend schema alignment
3. **Generate concrete examples** from production logs
4. **Test with live API calls** and analyze output against V1 principles

---

## Current Status

| Step | Latest Version | Test Status | Score |
|------|----------------|-------------|-------|
| Bootstrap | v4.10 | ✅ v4.9 tested | 70% decision flow |
| Plan & Assign | v4.7 | ✅ tested | Needs v4.8 fixes |
| Write | v4.7 | ⏳ Pending | — |
| Reflect | v4.7 | — | — |
| Peer Review | — | — | — |
| Inspect | v4.7 | — | — |
| Presentation | v4.7 | — | — |

---

## Recent Activity

### 2025-12-11: Session Reorganization

**Task:** Reorganize session folder from flat structure to step-first hierarchy.

**Changes:**
- Created step folders: `bootstrap/`, `plan_assign/`, `write/`, `inspect/`
- Moved prompts to versioned subfolders
- Created test case folders with `run.sh` scripts
- Created planning folders for next-version docs
- Moved deprecated files to `archive/`
- Established naming conventions and maintenance rules

**Root Cause Analysis:** Created `plan_assign/v4.7/planning/v4.8_root_cause.md` identifying:
1. **CRITICAL:** Schema deviation (LLM outputs text before JSON)
2. **CRITICAL:** Missing `reasoning` field in schema
3. structureDelta format mismatch
4. Collection vs Orchestration clarity

---

### 2025-12-11: V4.10 Bootstrap Created

**Task:** Fix remaining brand name invention issue.

**Change:** Added explicit prohibition to "What You Must NOT Do":
```markdown
- ❌ **Invent a product/brand name** — Refer to it as "this platform" or "the product"
```

**Location:** `bootstrap/v4.10/system_prompt.md`

---

### 2025-12-11: V4.9 Test Results

**Result: Significant improvement!**

| Issue | V4.7 | V4.8 | V4.9 |
|-------|------|------|------|
| Brand name | ❌ "MenuMaster" | ❌ "MenuMaster" | ❌ "MenuSync" (still invents) |
| Specific numbers | ❌ Many | ❌ Still many | ✅ **None in charter** |
| Persona intensity | ✅ High | ⚠️ Regressed | ✅ **High (restored)** |
| missing_details | ⚠️ Questions | ⚠️ Slightly better | ✅ **Decision-oriented** |

**Scoring:**
- V4.7: 30% decision flow compliance
- V4.8: 35% (+5%, with regression)
- V4.9: **70%** (+35% improvement)

**Location:** `bootstrap/v4.9/restaurant/`

---

### 2025-12-11: V4.8 Test Results

**Result: Instruction did NOT work.**

**Why it failed:**
1. Single instruction line too weak
2. Example output still shows specific numbers — LLM follows examples
3. "Be precise" contradicts "don't invent numbers"
4. Persona quality regressed

**Location:** `bootstrap/v4.8/restaurant/`

---

### 2025-12-11: V4.7 Bootstrap Restaurant SaaS Test

**Results:**
- **Overall Score: 84/100** (after decision flow issues identified)
- Governance Principles: 92%
- Roles & Personas: 95%
- Quality & Metrics: 95%

**Issues:**
1. Branding in charter — "MenuMaster" created without Decision Product
2. Assumptions as facts — Timeline, budget, uptime stated without backing
3. Metrics without ownership

**Location:** `bootstrap/v4.7/restaurant/`

---

## Artifact Locations

### Bootstrap Prompts
| Version | System | User | Tests |
|---------|--------|------|-------|
| v4.7 | `bootstrap/v4.7/system_prompt.md` | `bootstrap/v4.7/user_prompt.md` | `bootstrap/v4.7/restaurant/` |
| v4.8 | `bootstrap/v4.8/system_prompt.md` | `bootstrap/v4.8/user_prompt.md` | `bootstrap/v4.8/restaurant/` |
| v4.9 | `bootstrap/v4.9/system_prompt.md` | `bootstrap/v4.9/user_prompt.md` | `bootstrap/v4.9/restaurant/` |
| v4.10 | `bootstrap/v4.10/system_prompt.md` | `bootstrap/v4.10/user_prompt.md` | — |

### Plan & Assign Prompts
| Version | System | User | Tests | Planning |
|---------|--------|------|-------|----------|
| v4.7 | `plan_assign/v4.7/system_prompt.md` | `plan_assign/v4.7/user_prompt.md` | `plan_assign/v4.7/todo/` | `plan_assign/v4.7/planning/v4.8_root_cause.md` |

### Reference Documents
- `V1_principles_list.md` — Evaluation criteria for all steps

### Archive
- `archive/` — All deprecated prompts, old analyses, legacy versions

---

## Next Steps

1. ✅ Reorganize session folder structure
2. ✅ Create V4.10 Bootstrap (brand name fix)
3. ✅ Create Plan & Assign v4.8 root cause analysis
4. ⏳ Create Plan & Assign v4.8 with fixes (reasoning field, pure JSON, examples)
5. ⏳ Test Bootstrap v4.10
6. ⏳ Complete Write step live test
7. ⏳ Apply fixes to remaining steps

---

## Key Decisions

- **Step-first folder structure** — Prompts organized by step, then version
- **Prompts at version level** — `system_prompt.md` and `user_prompt.md` are canonical
- **Test cases as subfolders** — Each test run isolated with its artifacts
- **Planning folder** — Root cause analysis before creating new version
- **Archive for deprecation** — Never delete, always archive
