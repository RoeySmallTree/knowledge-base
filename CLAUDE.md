# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CABAL is an early-stage multi-language project (Python and TypeScript/JavaScript) focused on maintainable architecture and clear contribution patterns. The codebase is minimal currently, organized by domain-specific modules.

## Required Reading - Start Here

**MUST READ at every session start:**

1. **[protocol/protocol.md](./protocol/protocol.md)** - How to navigate the context system
2. **[protocol/rules.md](./protocol/rules.md)** - Working rules and constraints

These files establish how to explore the codebase's hierarchical context system and define project standards. After reading the protocol, explore [overview/README.md](./overview/README.md) to understand the project scope.

## Permissions & Autonomy

**Claude has full permission to perform file operations without approval:**

- ✓ Create new files (source, tests, docs, configs, session artifacts)
- ✓ Edit existing files after reading them
- ✓ Create directories and organize file structure
- ✓ Run builds, tests, lints, and standard development workflows
- ✓ Read any file in the codebase
- ✓ Install dependencies and run local servers

**Still requires user approval:**
- Git operations (commit, push, force push)
- Destructive operations (delete files, drop databases)
- External API calls that cost money
- Changes affecting production systems

This autonomy enables efficient development while maintaining appropriate safeguards. All file operations are tracked via git and can be reviewed or reverted. See [protocol/rules.md](./protocol/rules.md#permissions--autonomy) for complete details.

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

See `//session` command documentation in `protocol/commands.md` for details.

## Protocol Commands

All AI systems (Claude, Gemini, agents) use the same command system:

**Available commands:**
- `//session [description]` - Initialize session workspace
- `//todo [tasks]` - Create and manage todo list
- `//directive [action]` - Manage protocol directives

**Full documentation:** `protocol/commands.md`

**Usage:** Type `//command` to invoke. The `//` prefix indicates a protocol command.

## Development Commands

The project uses `make` as the unified interface for all development tasks:

- `make setup` - Install dependencies
- `make lint` - Run formatters/linters (Black/Ruff for Python, Prettier/ESLint for TS/JS)
- `make test` - Execute full test suite (should fail fast)
- `make run` - Start the primary service or CLI

**Note:** The Makefile is not yet implemented. When creating it, ensure these targets wrap language-specific commands (e.g., `npm test`, `uv run pytest`).

## Architecture & Structure

### Directory Layout

- `protocol/` - **Core directives** (must-read at session start)
  - Context navigation system, working rules, maintenance procedures, commands
- `algorithm/` - **Technical architecture** (core concepts, approach, specs)
  - How Cabal works technically
- `overview/` - Project knowledge (vision, product, legal, branding, market)
  - Hierarchical context files with README navigation
- `src/` - Production code organized by domain (e.g., `src/api/`, `src/core/`)
  - Avoid catch-all utility folders
  - Keep modules focused on single responsibilities
- `tests/` - Test files mirroring `src/` structure for predictable navigation
  - Example: `tests/api/test_routes.py` corresponds to `src/api/routes.py`
- `tools/` - Developer tooling (formatters, data prep scripts)
- `examples/` - Usage examples and smoke test scenarios

### Language Conventions

**Python:**
- Files and functions: `snake_case`
- Classes: `PascalCase`
- Auto-format with Black/Ruff

**TypeScript/JavaScript:**
- Variables and functions: `camelCase`
- Classes: `PascalCase`
- Auto-format with Prettier/ESLint

### Testing Strategy

- Mirror production layout under `tests/<module>/`
- Favor fast unit tests; isolate network/IO with fakes
- Mark slow/integration tests separately
- Target ≥80% coverage for new code
- Fail builds on coverage regressions

### Module Design

- Extract shared helpers rather than duplicating logic
- Add brief module docstrings when intent is non-obvious
- Each module should have one clear responsibility

## Commit Standards

Use Conventional Commits for all commits:
- `feat:` - New features
- `fix:` - Bug fixes
- `chore:` - Maintenance tasks

Keep commits atomic and scoped; call out breaking changes explicitly.

## Configuration & Security

- Never commit secrets; use environment variables
- Provide `.env.example` with required values and safe defaults
- Validate inputs at system boundaries (API handlers, CLIs)
- Document required environment variables in `overview/` or service READMEs
