# Working Rules - Must Read

**Status:** Core Directive - Read at start of every session

## Purpose

This document defines the working rules, constraints, and standards for contributing to CABAL. These rules ensure consistency, quality, and maintainability.

## Context Navigation Rules

### When Starting a Session

**Required Reading (in order):**
1. `CLAUDE.md` - Entry point and project overview
2. `protocol/protocol.md` - How to navigate context
3. `protocol/rules.md` - This file

**Optional Reading:**
- `overview/README.md` - Scan to understand project scope
- Area-specific context as needed during work

### During Development

- **Read before modifying**: Never propose changes to code you haven't read
- **Navigate efficiently**: Use README.md files to find relevant context
- **Respect boundaries**: Follow guidelines in area-specific README files
- **Update context**: When making significant changes, update related context files

### Session Artifact Management

**Session Initialization:**
- Invoke `/session [description]` at start of working sessions
- Creates timestamped folder: `arbitrary/session_<ISO-timestamp>_<description>/`
- Initializes `session-summary.md` and `session-files/` directory

**Creating Artifacts:**
- Use artifacts for: explanations, reviews, plans, designs, any referenceable content
- Never inline lengthy content when an artifact file is more appropriate
- Initial version: `V1_<name>.md`
- Always create companion file: `V1_<name>_tldr.md` with:
  - **TLDR:** Concise summary of the artifact
  - **ELI5:** Simplified explanation accessible to anyone
- Reference format: "See `V1_<name>.md` (TLDR: `V1_<name>_tldr.md`)"

**Iterating on Artifacts:**
- User requests changes → Create `V2_<name>.md` (increment version)
- Create companion: `V2_<name>_tldr.md` with updated TLDR and ELI5
- Update `CHANGELOG_<name>.md` with concise entry:
  - Version number and timestamp
  - What user requested
  - What was changed
  - Brief rationale
- Changelog should be minimal but clear

**Session Summary:**
- Update `session-summary.md` continuously throughout session
- Include: tasks completed, decisions made, artifacts created
- Serves as session audit trail

**Persistence:**
- Session folders are permanent - never archive or delete
- Provides project history and context for future sessions

### Session Todo Management

**Creating Todos:**
- User invokes `/todo [description]` to create task list
- Creates `todo/tasks.md` in session folder
- Todo format:
  - Tasks section (unchecked items)
  - Completed section (checked items with metadata)
  - Status: In Progress | Completed
  - Timestamps for creation and updates

**Working Through Todos:**
- Work on tasks sequentially from top to bottom
- Update todo list after each task completion:
  - Move task to "Completed" section
  - Add checkmark `[x]`
  - Add timestamp
  - Add completion notes (what was done)
  - Reference artifacts created (if any)
- Continue until all tasks complete

**Todo Completion:**
- Update status to "Completed" when all tasks done
- Update session summary with completed work
- Session is "mission accomplished"

**Todo Format Example:**
```markdown
## Tasks
- [ ] Remaining task

## Completed
- [x] Completed task
  - **Completed:** 2025-12-03T14:30:00
  - **Notes:** Brief description of work done
  - **Artifacts:** `V1_file.md`, `V1_file_tldr.md`
```

### Command System

**Command Invocation:**
- User types: `//command [arguments]`
- AI looks up command in `protocol/commands.md`
- AI executes command following documented instructions

**Available Commands:**
- `//session` - Initialize session with artifact management
- `//todo` - Create and manage session todo list
- `//directive` - Manage protocol directives
- See `protocol/commands.md` for full command registry

**Command Discovery:**
- All commands defined in `protocol/commands.md`
- Read command registry at session start
- Execute commands exactly as documented

**Note:** The `//` prefix distinguishes protocol commands from regular conversation.

## Code Organization Rules

### Directory Structure

**Production Code** (`src/`)
- Organize by domain (e.g., `src/api/`, `src/core/`)
- Never create catch-all utility folders
- One module = one responsibility
- Extract shared logic into focused helpers

**Tests** (`tests/`)
- Mirror `src/` structure exactly
- Example: `tests/api/test_routes.py` ↔ `src/api/routes.py`
- Keep navigation predictable

**Tools** (`tools/`)
- Developer tooling only (formatters, scripts)
- Not for production code

**Examples** (`examples/`)
- Usage demonstrations
- Smoke test scenarios

**Context** (`overview/`, `protocol/`)
- Project knowledge and guidelines
- Follow hierarchical README pattern

### Module Design Principles

1. **Single Responsibility**: Each module has one clear purpose
2. **No Duplication**: Extract shared helpers rather than copying code
3. **Clear Intent**: Add brief docstrings when logic isn't self-evident
4. **Domain Focus**: Group by what the code does, not by type

## Language-Specific Standards

### Python

**Naming:**
- Files and functions: `snake_case`
- Classes: `PascalCase`
- Constants: `UPPER_SNAKE_CASE`

**Formatting:**
- Auto-format with Black/Ruff before committing
- Run `make lint` to verify

**Imports:**
- Standard library first
- Third-party packages second
- Local imports last
- Alphabetically within groups

### TypeScript/JavaScript

**Naming:**
- Variables and functions: `camelCase`
- Classes and types: `PascalCase`
- Constants: `UPPER_SNAKE_CASE`
- Files: `kebab-case.ts` or `camelCase.ts` (be consistent within project)

**Formatting:**
- Auto-format with Prettier/ESLint before committing
- Run `make lint` to verify

**Imports:**
- External packages first
- Internal imports second
- Types separate from values (if using separate import syntax)

## Testing Standards

### Test Organization

- **Mirror structure**: `tests/` layout matches `src/` exactly
- **Co-locate**: Write tests alongside features
- **Fast by default**: Favor unit tests over integration tests
- **Isolate side effects**: Mock network/IO with fakes

### Coverage Requirements

- **Minimum**: 80% coverage for new code
- **Enforcement**: Fail builds on coverage regressions
- **Focus**: Critical logic and data transformations require thorough testing
- **Property-based**: Use property tests for complex transformations

### Test Naming

```python
# Python: test_<function>_<scenario>_<expected>
def test_calculate_total_with_discount_returns_reduced_price():
    pass
```

```typescript
// TypeScript: describe > it pattern
describe('calculateTotal', () => {
  it('returns reduced price when discount is applied', () => {
    // ...
  });
});
```

## Commit & PR Standards

### Commit Messages

Use Conventional Commits format:
```
<type>: <description>

[optional body]

[optional footer]
```

**Types:**
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation only
- `chore:` - Maintenance (deps, configs)
- `refactor:` - Code restructuring without behavior change
- `test:` - Adding or fixing tests
- `perf:` - Performance improvements

**Examples:**
```
feat: add user authentication endpoint
fix: resolve null pointer in data processor
docs: update protocol navigation guide
```

### Pull Requests

**Required in PR:**
1. **Purpose**: Clear summary of what and why
2. **Impact**: What changes for users/developers
3. **Tests**: Evidence of `make test` passing
4. **Breaking changes**: Called out explicitly in title and description
5. **Related issues**: Link to tickets/issues

**PR Size:**
- Keep PRs small and focused
- One feature/fix per PR
- Split large changes into logical chunks

## Security & Configuration

### Secrets Management

**Never commit:**
- API keys, tokens, passwords
- Private keys, certificates
- Database credentials
- Any sensitive configuration

**Always:**
- Use environment variables for secrets
- Provide `.env.example` with safe defaults
- Document required env vars in `overview/` or service READMEs
- Add secrets files to `.gitignore`

### Input Validation

- **Validate at boundaries**: API handlers, CLI inputs, external data
- **Trust internal code**: Don't over-validate between trusted modules
- **Fail safely**: Return clear errors, don't expose internals
- **Log carefully**: Avoid logging sensitive data

## Decision-Making Framework

### When to Ask User

- **Architectural choices**: Multiple valid approaches exist
- **Breaking changes**: Will affect existing functionality
- **Unclear requirements**: Need clarification on intent
- **Trade-offs**: Performance vs. simplicity, etc.

### When to Proceed

- **Standard patterns**: Clear, established way to do it
- **Non-breaking additions**: New features that don't affect existing code
- **Bug fixes**: Clear error with clear solution
- **Documentation updates**: Improving clarity or accuracy

## Context Maintenance Rules

### When to Update Context

- **After major features**: Add to relevant overview areas
- **Architectural changes**: Update overview/algorithm/ or related areas
- **New conventions**: Update protocol/rules.md
- **Process changes**: Update protocol/protocol.md or protocol/maintenance.md

### How to Update Context

1. Navigate to relevant area's README.md
2. Follow links to specific content file
3. Update content file
4. Check cross-references are still valid
5. Update README.md if navigation changed

See [maintenance.md](./maintenance.md) for detailed maintenance procedures.

## Permissions & Autonomy

### File Operations - Always Allowed

Claude has **full permission** to perform the following operations without requiring user approval:

**File Creation:**
- Create new files in any directory (source, tests, docs, configs, etc.)
- Create session artifacts and working files
- Create configuration files (.env.example, .gitignore, etc.)
- Create new modules, components, or utilities

**File Modification:**
- Edit existing files after reading them
- Refactor code when necessary
- Update documentation and context files

**File Organization:**
- Create new directories as needed
- Reorganize file structure when appropriate
- Move or rename files following project conventions

**Rationale:** File operations are fundamental to development work. Requiring approval for each file creation would slow down productivity without adding meaningful safety, as all changes are tracked via git and can be reviewed or reverted.

### Tool Usage - Default Permissions

**Always Proceed Without Asking:**
- Read any file in the codebase
- Run build, test, and lint commands
- Use grep, glob, and search tools
- Create session folders and artifacts
- Execute standard development workflows (install deps, run servers, etc.)

**Ask User First:**
- Git operations (commit, push, force push)
- Destructive operations (delete files, drop databases)
- External API calls that cost money
- Changes that affect production systems

## Boundaries & Constraints

### Do NOT

- Over-engineer solutions
- Add features not requested
- Refactor working code without reason
- Create abstractions prematurely
- Add extensive error handling for internal code
- Commit commented-out code
- Use backwards-compatibility hacks for unused code

### DO

- Solve the specific problem asked
- Keep solutions simple and focused
- Trust framework guarantees
- Delete unused code completely
- Validate at system boundaries only
- Write code that's easy to delete

---

**Next Steps:**
- For context maintenance: See [maintenance.md](./maintenance.md)
- For project overview: See [../overview/README.md](../overview/README.md)
- For development commands: See [../CLAUDE.md](../CLAUDE.md)
