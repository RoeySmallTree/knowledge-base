# Directive Command

Manage protocol change directives.

## Usage

```
/directive [action] [arguments]
```

## Actions

### /directive list
List all pending protocol directives.

**What to do:**
1. Read `protocol/directives/README.md`
2. Show all directives in the "Active Directives" section
3. Format output as:
   ```
   Pending Protocol Directives:

   1. [name] - Priority: [priority]
      [brief description]
      File: protocol/directives/[filename].md

   2. [next directive...]

   Use `/directive apply [name]` to apply a specific directive
   Use `/directive apply-all` to apply all directives
   ```
4. If no pending directives, say: "No pending protocol directives."

---

### /directive create [description]
Create a new protocol change directive.

**Example:** `/directive create add API naming rules to guidelines`

**What to do:**
1. Ask user clarifying questions:
   - What files need to be changed?
   - What specifically should change?
   - Priority (critical/high/medium/low)?

2. Create directive file: `protocol/directives/YYYY-MM-DD-brief-name.md`
   - Use TEMPLATE.md as base
   - Fill in all sections based on user responses
   - Set status: pending
   - Add date and priority

3. Update `protocol/directives/README.md`:
   - Add to "Active Directives" section

4. Ask user: "Directive created. Would you like me to apply it now?"
   - If yes → Apply using the directive application process
   - If no → Leave pending for next session

---

### /directive apply [name]
Apply a specific pending directive.

**Example:** `/directive apply 2025-12-03-add-api-rules`

**What to do:**
1. Check if directive exists in `protocol/directives/[name].md`
2. Read the directive file completely
3. Follow the directive application process from `protocol/changes.md`:
   - Validate directive completeness
   - Execute each change in "Detailed Changes"
   - Check off items in validation checklist
   - Update "Applied" section with metadata
   - Move to `protocol/directives/applied/`
   - Update `protocol/directives/README.md`
4. Report completion with summary

---

### /directive apply-all
Apply all pending directives in order.

**What to do:**
1. Read `protocol/directives/README.md`
2. Get all pending directives
3. Confirm with user: "Found N pending directives. Apply all?"
4. If confirmed, apply each directive sequentially using `/directive apply` logic
5. Report summary of all changes

---

### /directive rollback [name]
Rollback a recently applied directive.

**Example:** `/directive rollback 2025-12-03-add-api-rules`

**What to do:**
1. Read directive from `protocol/directives/applied/[name].md`
2. Find "Rollback Plan" section
3. Confirm with user: "This will undo changes made by [name]. Continue?"
4. Execute rollback steps
5. Update directive status to "rolled-back"
6. Move back to active directives folder if user wants to re-apply later

---

## Notes

- This command integrates with the protocol change management system
- All directive actions follow procedures in `protocol/changes.md`
- Directives are automatically checked at session start
- Use free-form requests to Claude if you prefer: "Create a directive to add X"
