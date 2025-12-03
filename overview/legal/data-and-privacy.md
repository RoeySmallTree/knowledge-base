# Data & Privacy

**Status:** Background for Legal - Updated 2025-12-03

## Purpose

Documents what data Cabal handles and how, for legal review and privacy policy drafting.

## Categories of Data

### 1. Account & Identity Data

- Email address, name, login identifier
- Workspace membership & roles (e.g. admin, regular user)
- Authentication metadata (timestamps, IP, device info to a limited extent)

### 2. Workspace & Configuration Data

- Workspace name and basic settings
- Model configuration (which LLM providers/models are used, if configurable)
- Feature flags or experimental toggles (where applicable)

### 3. User Content (Inputs)

All text the user submits:
- Prompts
- Follow-up messages
- Answers to questions
- Files the user uploads (documents, notes, etc., where supported)

### 4. Derived Content (Outputs)

- Internal agent messages and drafts
- Mission statements and objectives
- Product nodes and versions (content, collections, decisions, orchestration)
- Remarks and blockers
- Summaries and final user-facing outputs

### 5. Usage & Telemetry Data

- Timestamps, durations, latencies
- Token counts (approximate cost tracking)
- Error logs and exception traces (without deliberately logging passwords etc.)
- High-level usage metrics (e.g. number of sessions created per workspace)

### 6. Technical Data

- Standard web logs (IP address, user agent, request metadata)
- Cookies / session tokens for authentication and experience (not browsing history)

## Third-Party Processing

### LLM Providers

Cabal does **not** run its own foundational models. It orchestrates **external LLM providers**.

- User content and derived context are sent to one or more LLM APIs (e.g., OpenAI / Anthropic / others)
- Their responses are returned to Cabal and used to construct products, update context, and generate final outputs

**Key points for lawyers:**
- Some user content is transmitted to third-party LLMs
- Those third parties have their own terms and privacy policies
- The platform must obtain user consent (via ToS/Privacy Policy) for:
  - Such transmission
  - Any data processing for logging, abuse detection, and service improvement

### Cloud Infrastructure

Additionally, Cabal relies on common cloud services:
- Hosting (e.g. cloud VM / managed services)
- Database (e.g. managed PostgreSQL)
- Object storage (for files)
- Monitoring & logging (error tracking, performance metrics)
- Possibly analytics (e.g. page usage)

## Retention & Access

### Conceptual Behavior

- Session data (prompts, products, remarks) is **stored** so that:
  - Users can revisit past sessions
  - Outputs remain reproducible and auditable
  - Bugs can be diagnosed

### Access Controls

- Workspace users can access their own workspace's sessions, subject to roles
- Platform operators may access data when:
  - Providing support (on request)
  - Investigating abuse or security issues
  - Running maintenance or debugging (subject to internal policies)

### Policy Decisions Needed

The exact **retention periods** and **data deletion mechanisms** (e.g. workspace deletion, user requests) are policy decisions the ToS/Privacy Policy must define.

## Sensitive Data

Cabal is **not designed as a HIPAA / PCI / banking system**.

### Policy Considerations

- The service should discourage users from submitting:
  - Highly sensitive personal data (health, financial identifiers, minors, etc.)
- The ToS can:
  - Restrict certain categories of data
  - Limit liability if users choose to submit such data anyway
- The privacy policy should:
  - Address international data transfers (where relevant)
  - Outline data subject rights (if serving GDPR regions)

---

← Back to [Legal](./README.md) | [Overview](../README.md)
