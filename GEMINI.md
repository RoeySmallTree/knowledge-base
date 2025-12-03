# Project Overview

This project is a software application under development, with a strong emphasis on clear structure and contribution guidelines. The project appears to be set up for development using Python and/or TypeScript/JavaScript, based on the naming conventions outlined in the contribution guidelines.

## Directory Layout

- `protocol/` - **Core directives** (must-read at session start)
- `algorithm/` - **Technical architecture** (core concepts, approach, specs)
- `overview/` - Project knowledge (vision, product, legal, branding, market, pitching)
- `src/` - Production code organized by domain
- `tests/` - Test files mirroring `src/` structure
- `tools/` - Developer tooling
- `examples/` - Usage examples

# Required Reading

**MUST READ at every session start:**

1. **[protocol/protocol.md](./protocol/protocol.md)** - How to navigate the context system
2. **[protocol/rules.md](./protocol/rules.md)** - Working rules and constraints
3. **[protocol/commands.md](./protocol/commands.md)** - Command registry

These files establish how to explore the codebase's hierarchical context system, define project standards, and document available commands.

# Protocol Commands

Use protocol commands by typing `//command`:

- `//session [description]` - Initialize session workspace
- `//todo [tasks]` - Create and manage todo list
- `//directive [action]` - Manage protocol directives

See `protocol/commands.md` for full documentation.

# Building and Running

The following commands are recommended for interacting with the project:

*   `make setup`: Install dependencies.
*   `make lint`: Run formatters and linters.
*   `make test`: Execute the test suite.
*   `make run`: Start the primary service or CLI.

*TODO: Implement the Makefile and the corresponding scripts.*

# Development Conventions

## Coding Style
*   Auto-formatting is preferred (e.g., Black/Ruff for Python, Prettier/ESLint for TS/JS).
*   Naming conventions:
    *   Python: `snake_case` for files and functions.
    *   TypeScript/JavaScript: `camelCase` for variables and functions.
    *   `PascalCase` for classes in all languages.

## Testing
*   Tests should be written alongside features and mirror the project structure under `tests/`.
*   Unit tests are favored, and a test coverage of >=80% for new code is expected.

## Commits and Pull Requests
*   Conventional Commits (`feat:`, `fix:`, `chore:`) should be used for commit messages.
*   Pull requests should be small, scoped, and include a clear description of the changes.
