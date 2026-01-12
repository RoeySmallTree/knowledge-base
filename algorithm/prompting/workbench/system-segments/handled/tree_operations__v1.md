# TREE_OPERATIONS

Explains how to modify the product tree structure.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Plan & Assign ✓

---

## Content (Step File)

```markdown
### TREE OPERATIONS

Modify the product tree using structured operations:

| Action | When | Required Fields |
|--------|------|-----------------|\
| ADD | Create new product | new_id, parent_id, product |
| REMOVE | Delete product | product_id |
| MOVE | Change parent | product_id, parent_id |
| UPDATE | Modify fields | product_id, product (partial) |

**Creating New Products:**
- Use `new_id` with format `new-1`, `new-2`, etc.
- Can reference `new-1` in assignments, chair_versions, or as parent for other new products
- Parent must be declared BEFORE child in the array

```json
{
  "action": "ADD",
  "new_id": "new-1",
  "parent_id": "p1",
  "product": {
    "name": "Error Handling",
    "type": "Content",
    "dod": "Define error codes and response formats",
    "assignee": "operative-1"
  }
}
```
```

---

## Content (Aggregated)

The aggregated file mentions tree_operations in SCHEMA but doesn't have the detailed explanation table.

---

## Tree Operation Rules

From step file:

```markdown
## TREE OPERATION RULES

| Action | new_id | product_id | parent_id | product |
|--------|--------|------------|-----------|---------|
| ADD | Required | N/A | Required | Required |
| REMOVE | N/A | Required | N/A | N/A |
| MOVE | N/A | Required | Required | N/A |
| UPDATE | N/A | Required | N/A | Partial |
```

---

## Notes

- `new-N` IDs are temporary until backend replaces with permanent `p-N`
- ADD operations must be ordered: parent before child
- REMOVE should include `reason` field
- UPDATE only needs fields being changed (partial update)
