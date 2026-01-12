# Bootstrap User Prompt Comparison

Comparing **bootstrap/user-prompt.md** (simplified) vs **examples/user-complete-prompts.md** (comprehensive).

---

## Summary

| Aspect | Simplified | Comprehensive |
|--------|------------|---------------|
| **Lines** | ~50 | ~45 |
| **User Request** | ✅ Present | ✅ Present |
| **Team Section** | ✅ Present | ✅ Present |
| **Users Section** | ✅ Added | ❌ Missing |
| **Output Requirements** | ❌ Missing | ✅ Present |
| **Handlebars/Template** | `{{handlebars}}` | `{{handlebars}}` |

---

## Sections Comparison

### User Request

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| `## User Request` | `## The User's Request` | ✅ MATCH |
| `{{userRequest}}` | `{{rawUserPrompt}}` | ⚠️ Different variable |
| Has `userResponse` conditional | ❌ Not shown | ➕ ADDED |

### Team Section

| Field | Simplified | Comprehensive | Status |
|-------|------------|---------------|--------|
| Header | `## Team` | `## Your Team` | ⚠️ Slight diff |
| Member format | Table format | Markdown sections | ⚠️ Different structure |
| Name | ✅ `{{name}}` | ✅ `{{member.name}}` | ✅ MATCH |
| tempId | ✅ `{{tempId}}` | `{{member.id}}` | ⚠️ NAMING |
| Role | ✅ | ✅ | ✅ MATCH |
| Team Role | ✅ `{{teamRole}}` | ✅ Role/TeamRole combined | ✅ MATCH |
| Expertise | ✅ | ✅ (as `professional` array) | ✅ MATCH |
| Life Story | ✅ | ✅ `background` | ✅ MATCH |
| Style | ❌ Missing | ✅ `personality_style` | ⚠️ MISSING |

### Users Section

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| `## Users` — human collaborators | ❌ Not present | ➕ ADDED |
| `[[u:user-1]]` reference note | ❌ Not present | ➕ ADDED |

### Output Requirements

| Simplified | Comprehensive | Status |
|------------|---------------|--------|
| ❌ Not present | Lists personas & domains needed | ⚠️ MISSING |
| — | Per-member persona requirements | ⚠️ MISSING |
| — | Per-operative domain requirements | ⚠️ MISSING |

---

## User Response Handling

### Simplified (Added)
```markdown
{{#if userResponse}}
---
## User Response

You asked: "{{previousQuestion}}"
User answered: "{{userAnswer}}"

Continue with bootstrap using this information.
{{/if}}
```

### Comprehensive
_(Not shown in comprehensive — likely handled separately)_

---

## Missing in Simplified

1. **Output Requirements section** — Explicit list of what's needed
2. **Personality style** — Only expertise, not style characteristics
3. **Member object nesting** — Comprehensive uses `member.X`, simplified uses flat

## Added in Simplified

1. **Users section** — Human collaborators with roles
2. **User Response handling** — For halt iterations
3. **Reference syntax note** — `[[u:user-1]]` explanation

---

## Recommendation

To align simplified with comprehensive:
1. Add **Output Requirements** section listing personas/domains needed
2. Add **personality_style** characteristics to member display
3. Consider using `member.` prefixed variables for consistency
