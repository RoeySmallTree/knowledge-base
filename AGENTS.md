# Repository Guidelines

This guide sets expectations for contributing to CABAL. Keep it updated as the codebase grows so new agents can ramp up quickly.

## Required Reading - Start Here

**MUST READ at every session start:**

1. **[protocol/protocol.md](./protocol/protocol.md)** - How to navigate the context system
2. **[protocol/rules.md](./protocol/rules.md)** - Working rules and constraints
3. **[protocol/commands.md](./protocol/commands.md)** - Command registry

These files establish how to explore the codebase's hierarchical context system, define project standards, and document available commands.

## Protocol Commands

Use protocol commands by typing `//command`:

- `//session [description]` - Initialize session workspace
- `//todo [tasks]` - Create and manage todo list
- `//directive [action]` - Manage protocol directives

See `protocol/commands.md` for full documentation.

---

## Project Structure & Module Organization
- Current tree is minimal; store long-form notes and diagrams in `overview/`.
- Place production code in `src/` organized by domain (e.g., `src/api/`, `src/core/`); avoid catch-all utility folders.
- Mirror production layout in `tests/` (e.g., `tests/api/test_routes.py`, `tests/core/test_services.ts`) to keep navigation predictable.
- Keep developer tooling in `tools/` (formatters, data prep scripts) and examples or smoke scenarios in `examples/` when they help explain usage.

## Build, Test, and Development Commands
- Expose entry points via `make` (or `just`) so contributors have one front door.
- Recommended targets:
  - `make setup` installs dependencies.
  - `make lint` runs formatters/linters.
  - `make test` executes the full test suite (fail fast).
  - `make run` starts the primary service or CLI.
- If language-specific commands differ (e.g., `npm test`, `uv run pytest`), wrap them in these targets and update this file when they change.

## Coding Style & Naming Conventions
- Prefer auto-formatting (e.g., Black/Ruff for Python, Prettier/ESLint for TS/JS); run before pushing.
- Use snake_case for files and functions in Python; camelCase for variables/functions in TS/JS; PascalCase for classes across languages.
- Keep modules focused on one responsibility; extract shared helpers rather than duplicating logic.
- Add short module docstrings or README snippets when intent is non-obvious.

## Testing Guidelines
- Write tests alongside features; mirror layout under `tests/<module>/` for quick discovery.
- Favor fast unit tests; isolate network/IO with fakes; mark slow/integration suites separately.
- Target ≥80% coverage for new code and fail builds on regressions.
- Provide minimal fixtures and property-based cases for critical logic or data transformations.

## Commit & Pull Request Guidelines
- History is new; use Conventional Commits (`feat:`, `fix:`, `chore:`) for clarity and automation hooks.
- Each PR should include: purpose/impact summary, linked issue or ticket, test evidence (`make test` output), and screenshots for UI changes.
- Keep PRs small and scoped; call out breaking changes explicitly in both commits and PR descriptions.

## Security & Configuration Tips
- Never commit secrets; prefer environment variables and provide a `.env.example` describing required values and safe defaults.
- Document required env vars and operational limits in `overview/` or service-specific READMEs.
- Validate inputs at boundaries (API handlers, CLIs) and log carefully to avoid leaking sensitive payloads.
