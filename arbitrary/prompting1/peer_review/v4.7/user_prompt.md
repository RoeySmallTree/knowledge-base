# CABAL User Prompt: Peer Review (V4.7)

**Step:** Peer Review  
**Role:** Operative

---

## Source Variables (User Prompt)

| Variable | Source Path |
|----------|-------------|
| `session.mission_charter` | `SessionContext` |
| `session.underlying_objectives` | `SessionContext` |
| `session.current_round` | `SessionContext` |
| `currentMember.id` | `MemberContext.id` |
| `currentMember.team_role` | `MemberContext.team_role` |
| `reviewAssignment.productIds` | `AssignmentContext.productIds` |
| `productToReview` | `ProductContext` |
| `productToReview.latestVersion` | `VersionContext` |

---

## User Prompt Template

### MISSION

{{session.mission_charter}}

### OBJECTIVES

{{session.underlying_objectives}}

### ROUND

{{session.current_round}}

### YOUR ROLE

You are reviewing as **{{currentMember.team_role}}**. Focus on how this product affects your domain.

{{#each productsToReview}}

---

### PRODUCT TO REVIEW: {{this.name}}

**ID:** {{this.id}}
**Type:** {{this.type}}
**Author:** {{this.author_name}} ({{this.author_id}}) — {{this.author_role}}
**DoD:** {{this.definition_of_done}}
**Version:** {{this.latestVersion.version_number}}

### CONTENT

{{this.latestVersion.content}}

### AUTHOR'S CHANGE SUMMARY

{{this.latestVersion.change_summary}}

{{/each}}

### VALID IDS

Products:
{{#each allProducts}}
  {{this.id}} → "{{this.name}}" [{{this.type}}, {{this.status}}]
{{/each}}

Team Members:
{{#each allMembers}}
  {{this.id}} → {{this.name}} ({{this.team_role}})
{{/each}}

---

## Filled Example

### MISSION

THE MISSION: Build MenuSync, an intelligent SaaS platform that transforms how restaurants manage their menus across all channels - from in-store displays to delivery apps to social media.

### OBJECTIVES

Success criteria include: operational efficiency (measuring time saved on menu updates and error reduction), revenue optimization (tracking profit margin improvements from dynamic pricing and inventory sync), customer satisfaction (reducing order cancellations from unavailable items), and platform adoption (measuring integration depth with existing restaurant tech stack).

### ROUND

1

### YOUR ROLE

You are reviewing as **product-manager**. Focus on how this product affects your domain.

---

### PRODUCT TO REVIEW: Core Technical Architecture

**ID:** decision-tech-arch-001
**Type:** Decision
**Author:** Alex (operative-1) — tech-lead
**DoD:** Architecture diagram showing data flow, Technology stack selection, Real-time sync strategy, Scalability plan, Integration approach for POS/delivery platforms
**Version:** 1

### CONTENT

# Core Technical Architecture for MenuSync Real-Time Synchronization

## Options Considered

### 1. Event-Driven Microservices with Message Queue
**Pros:**
- True real-time propagation via event streams
- Excellent fault tolerance and retry mechanisms
- Scales horizontally per service

**Cons:**
- Higher initial complexity
- More infrastructure components to manage

### 2. Monolithic API with Webhook Fan-out
**Pros:**
- Simpler initial development
- Easier debugging

**Cons:**
- Single point of failure
- Limited flexibility

### 3. Hybrid: Sync Engine Core + Platform Adapters
(... options analysis ...)

## Recommendation

**Event-Driven Microservices Architecture** with:
- Node.js + TypeScript
- PostgreSQL + Redis
- Apache Kafka for event streaming
- Kubernetes with auto-scaling

## Real-Time Sync Strategy

**Primary: Event-Driven Push**
- Menu changes trigger events to Kafka
- Target propagation: <10 seconds
- Webhook retry with exponential backoff (max 5 attempts)

**Fallback: Intelligent Polling**
- Health check polling every 30 seconds
- Smart polling during peak hours

## Scalability Plan

- Support 1,000+ restaurants
- Handle 10,000+ menu updates per minute
- Maintain <30-second sync times at peak
- 99.9% uptime SLA

## Integration Approach

**POS:** Square, Toast, Clover (REST APIs)
**Delivery:** DoorDash, Uber Eats, Grubhub partner APIs

### AUTHOR'S CHANGE SUMMARY

Initial version - foundational technical architecture defining event-driven microservices approach with real-time sync capabilities

### VALID IDS

Products:
  decision-tech-arch-001 → "Core Technical Architecture" [Decision, pending]
  decision-integration-001 → "Platform Integration Strategy" [Decision, pending]
  decision-segment-001 → "Target Restaurant Segment & Use Cases" [Decision, pending]
  decision-features-001 → "MVP Feature Prioritization" [Decision, pending]
  decision-pricing-001 → "Pricing Model & Customer Acquisition" [Decision, pending]
  decision-positioning-001 → "Competitive Positioning Strategy" [Decision, pending]

Team Members:
  operative-1 → Alex (tech-lead)
  operative-2 → Jordan (product-manager)
  operative-3 → Casey (growth-marketer)


