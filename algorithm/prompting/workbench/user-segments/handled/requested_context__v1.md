# REQUESTED_CONTEXT

Context received after a request_context response.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Reflect ✓ (context iteration)
- Plan & Assign ✓ (context iteration)
- Write ✓ (context iteration)
- Peer Review ✓ (context iteration)
- Inspect ✓ (context iteration)
- Presentation ✓ (context iteration)

---

## Content (Step Files - Variations section)

```markdown
## REQUESTED CONTEXT

You requested additional context. Here it is:

### ${product_id}: ${product_name} (${context_type})

${requested_content}

---

**You have ${remaining_iterations} context request iterations remaining.**

Now produce your final output.
```

---

## Example

```markdown
## REQUESTED CONTEXT

You requested additional context. Here it is:

### p5: Auth Specification (full_content)

# Authentication Specification

## Flow
1. User submits credentials
2. Backend validates, returns JWT
3. Frontend stores in httpOnly cookie
4. JWT included in subsequent requests

## Token Details
- JWT expiry: 1 hour
- Refresh token: 7 days
- Contains: user_id, email, exp

## Error Codes
| Code | Meaning |
|------|---------|
| AUTH_001 | Invalid credentials |
| AUTH_002 | Token expired |
| AUTH_003 | Invalid refresh token |

---

**You have 2 context request iterations remaining.**

Now produce your final output.
```

---

## Context Types

| Type | Content Returned |
|------|-----------------|
| `full_content` | Complete product content |
| `version_history` | All versions table |
| `all_feedback` | All collabs on product |
| `peer_content` | Content from peer products |

---

## Notes

- Added when agent requested context
- Shows remaining iterations (starts at 3)
- Must produce final_output after context
- Max 5 products per request
