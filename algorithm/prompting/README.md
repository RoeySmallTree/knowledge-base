# Prompting - Versioned Prompt Management

## Purpose

This folder contains all prompts used in CABAL's orchestration system. Each prompt follows a strict versioning protocol to maintain history, enable rollbacks, and track evolution over time.

## Folder Structure

```
prompting/
├── README.md              # This file
├── bump-version.sh        # CLI tool for version management
├── archive/               # Historical versions
│   ├── Bootstrap__System__v1.md
│   ├── Bootstrap__System__v2.md
│   └── ...
├── Bootstrap__System__v3.md       # Current system prompt (v3)
├── Bootstrap__User__v2.md         # Current user prompt (v2)
├── Plan_Assign__System__v5.md
├── Plan_Assign__User__v4.md
└── ...
```

## File Naming Convention

All files follow this pattern:

```
{Name}__{Type}__v{Version}.md
```

| Component | Description | Examples |
|-----------|-------------|----------|
| **Name** | Identifier using `snake_case` or `PascalCase` | `Bootstrap`, `Plan_Assign`, `Peer_Review` |
| **Type** | Category of the file | `System`, `User`, `Schema`, `Examples` |
| **Version** | Integer version number | `v1`, `v2`, `v15` |

### Step Prompts

Each orchestration step has two prompt files:

| Step | System Prompt | User Prompt |
|------|---------------|-------------|
| Bootstrap | `Bootstrap__System__vX.md` | `Bootstrap__User__vX.md` |
| Reflect | `Reflect__System__vX.md` | `Reflect__User__vX.md` |
| Plan & Assign | `Plan_Assign__System__vX.md` | `Plan_Assign__User__vX.md` |
| Write | `Write__System__vX.md` | `Write__User__vX.md` |
| Peer Review | `Peer_Review__System__vX.md` | `Peer_Review__User__vX.md` |
| Inspect | `Inspect__System__vX.md` | `Inspect__User__vX.md` |
| Presentation | `Presentation__System__vX.md` | `Presentation__User__vX.md` |

## Versioning Protocol

### Creating a New File

1. Name the file following the convention: `{Name}__{Type}__v1.md`
2. The file lives in the main `prompting/` folder

### Editing an Existing File

**Never edit files in place.** Instead, use the version bump workflow:

1. Run the CLI tool with the file's base name (without version):
   ```bash
   ./bump-version.sh Plan_Assign__System
   ```

2. The tool will:
   - Find the current version (e.g., `Plan_Assign__System__v5.md`)
   - Move it to `archive/`
   - Create a duplicate with incremented version (e.g., `Plan_Assign__System__v6.md`)
   - Output the new filename

3. Edit the **new version** file (the one output by the CLI)

### Archive

The `archive/` folder contains all previous versions. Files here are **read-only history** - never modify archived files.

## CLI Usage

```bash
# Bump version and get new filename
./bump-version.sh <base_name>

# Examples
./bump-version.sh Bootstrap__System
./bump-version.sh Plan_Assign__User
./bump-version.sh Custom_Directive__Schema
```

**Output:** The script prints the path to the new version file, ready for editing.

## Best Practices

1. **Atomic changes** - Each version bump should represent a meaningful, describable change
2. **No in-place edits** - Always bump version before making changes
3. **Test before bumping** - Validate changes work before committing to a new version
4. **Document changes** - Consider adding a changelog comment at the top of the file

## Related

- [../context-builder.md](../context-builder.md) - Prompt structuring rules
- [../principles/prompting.md](../principles/prompting.md) - Prompting principles and patterns
- [../approach.md](../approach.md) - Overall orchestration architecture
