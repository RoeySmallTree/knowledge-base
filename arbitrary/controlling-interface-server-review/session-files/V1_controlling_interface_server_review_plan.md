# Review + Restructure Plan: controlling-interface server.ts

## Scope
Reviewed:
- `algorithm/llm-models/controlling-interface/server.ts`
- `algorithm/llm-models/controlling-interface/database-structure.sql`
- Frontend calls in `algorithm/llm-models/controlling-interface/src/hooks/*`

Goal: identify risks, validate DB alignment, and propose a modular structure with explicit types and lean routes.

---

## Findings (ordered by severity)

### High
1) Potential invalid vendor_id writes from null -> '' -> 0
- **Where:** `algorithm/llm-models/controlling-interface/server.ts:216,258`
- **Why it matters:** `mapDbModelToAppModel` returns `vendor_id: ''` when DB has null; `mapAppModelToDbUpdate` turns '' into 0, which can violate the `llm_models.vendor_id` FK or incorrectly assign vendor 0. This can cause update failures or bad data.
- **Fix:** Keep null/undefined for null vendor_id. Avoid empty string defaults in model mapping.

2) Member characteristics type mismatch (jsonb vs array)
- **Where:** `algorithm/llm-models/controlling-interface/server.ts:720-758,1076-1082`
- **Schema:** `member.characteristics` is `jsonb` default '{}' (`algorithm/llm-models/controlling-interface/database-structure.sql:341`)
- **Why it matters:** Current mapping forces array defaults and drops object shape. This can overwrite structured json data or break UI expectations.
- **Fix:** Treat `characteristics` as object (`Record<string, unknown>`) and preserve round-trip.

3) Team deletion does not cover all FK dependents
- **Where:** `algorithm/llm-models/controlling-interface/server.ts:1028-1037`
- **Schema:** tables like `team_share`, `team_rating`, `team_tag`, plus `session` reference `team` (`algorithm/llm-models/controlling-interface/database-structure.sql:521-683`)
- **Why it matters:** If FKs are not `ON DELETE CASCADE`, `DELETE team` can fail or leave orphans; current manual cascade only deletes sessions and members.
- **Fix:** Either rely on DB cascade (preferred) and remove manual cascade, or expand cascade deletes to all dependent tables.

### Medium
4) Numeric/bigint fields typed as number; potential precision loss
- **Where:** `DbModelRow` and mapping (`algorithm/llm-models/controlling-interface/server.ts:60-87,234-237,254-292`)
- **Schema:** `price_prompt_micro` and `price_completion_micro` are `bigint`, `parameter_count_b` and `active_parameter_count_b` are `numeric` (`database-structure.sql:275-288`)
- **Why it matters:** PostgREST commonly returns `numeric`/`bigint` as strings; coercing to JS number can lose precision or create runtime inconsistencies.
- **Fix:** Use string types for those DB fields and parse explicitly where needed.

5) Required DB fields not validated on create
- **Where:** `createModelInDb` (`algorithm/llm-models/controlling-interface/server.ts:620-633`)
- **Schema:** `llm_models.api_id`, `slug`, `display_name` are NOT NULL (`database-structure.sql:268-270`)
- **Why it matters:** Creates can hit DB constraint errors without helpful validation; current check only verifies vendor_id/display_name.
- **Fix:** Validate `api_id`, `slug`, `display_name` before insert.

6) last_synced_at omitted from types/mapping
- **Where:** `DbModelRow` and `mapDbModelToAppModel` (`server.ts:60-87,242`)
- **Schema:** `llm_models.last_synced_at` exists (`database-structure.sql:280`)
- **Why it matters:** Lost data in API responses makes syncing/caching logic harder.
- **Fix:** Add field to DB row type and map through.

### Low
7) Unused helper and inline TODO clutter
- **Where:** `ensureSettingsDir` block (`server.ts:480-498`)
- **Why it matters:** Noise makes maintenance harder; also indicates mixed concerns in this file.
- **Fix:** Remove or move to a settings service module.

8) Custom env loader adds behavior and complexity
- **Where:** `loadEnvFromFile` (`server.ts:10-49`)
- **Why it matters:** Custom parsing and multi-level search is brittle; hard to reason about which .env is applied.
- **Fix:** Wrap a standard env loader (`dotenv`) or move to a dedicated config module with explicit search paths.

---

## Schema Alignment Notes (DB vs server)

- `llm_models.api_id`, `slug`, `display_name` are required in DB but optional/nullable in server types. (See `database-structure.sql:268-270`, `server.ts:63-66`)
- `llm_models.capabilities` is NOT NULL default empty array, but server types allow null. (DB: `database-structure.sql:273`; server: `server.ts:68`)
- `llm_models.price_*` are `bigint` and `parameter_count_b` are `numeric`; server treats them as `number`. (DB: `database-structure.sql:275-288`; server: `server.ts:70-77`)
- `member.characteristics` is `jsonb`, not `string[]`. (DB: `database-structure.sql:341`; server: `server.ts:721,756,1076-1082`)
- `member.model_id` is NOT NULL in DB, but server type treats it as nullable. (DB: `database-structure.sql:346`; server: `server.ts:725`)

---

## Componentization Plan (recommended structure)

Proposed structure (backend-only, no frontend impact):

```
algorithm/llm-models/controlling-interface/
  server/
    index.ts              # bootstrap only (app, middleware, routes, listen)
    config/
      env.ts              # load + validate env, typed config
      paths.ts            # cache/settings file paths
    db/
      supabase.ts         # supabaseRequest + typed helpers
      repositories/
        llmModelsRepo.ts
        vendorsRepo.ts
        teamsRepo.ts
        membersRepo.ts
        usersRepo.ts
        sessionsRepo.ts
    mappers/
      llmModelsMapper.ts
      vendorsMapper.ts
      teamsMapper.ts
      membersMapper.ts
      usersMapper.ts
      sessionsMapper.ts
    routes/
      modelsRoutes.ts
      vendorsRoutes.ts
      teamsRoutes.ts
      membersRoutes.ts
      usersRoutes.ts
      sessionsRoutes.ts
      exploreRoutes.ts
      settingsRoutes.ts
    services/
      exploreService.ts   # OpenRouter fetch + cache
      settingsService.ts  # model-settings read/write
    types/
      db.ts               # DB row types (aligned with schema)
      api.ts              # request/response DTOs
    utils/
      parse.ts            # toInteger, toNumber, parseNumericString
      http.ts             # response helpers + error wrapper
```

Module patterns:
- **routes** only parse/validate input, call repos/services, and shape response
- **repositories** speak in DB row types
- **mappers** convert DB row types to API/domain types and back
- **services** handle external APIs or filesystem cache
- **config** owns env + constants

---

## Types Plan (DB and API)

### DB row types (server/types/db.ts)
Use string types for numeric/bigint to avoid precision loss and match PostgREST.

```ts
export type NumericString = string; // from PostgREST numeric/bigint

export interface DbModelRow {
  id: number;
  vendor_id: number | null;
  api_id: string;
  slug: string;
  display_name: string;
  display_order: number;
  description: string | null;
  capabilities: string[]; // not null in DB
  context_length: number | null;
  price_prompt_micro: NumericString; // bigint
  price_completion_micro: NumericString; // bigint
  price_tier: number;
  fallback_model_id: number | null;
  is_active: boolean;
  last_synced_at: string;
  created_at: string;
  updated_at: string;
  parameter_count_b: NumericString | null;
  active_parameter_count_b: NumericString | null;
  personality_traits: string[] | null;
  professional_traits: string[] | null;
  best_for: string[] | null;
  creativity_score: number | null;
  logic_score: number | null;
  efficiency_score: number | null;
  model_family: string | null;
  name_within_family: string | null;
}

export interface DbMemberRow {
  id: string;
  name: string;
  role: string;
  team_role: string | null;
  color: string | null;
  characteristics: Record<string, unknown>; // jsonb
  life_story: string | null;
  special_orders: string | null;
  team_id: string;
  model_id: number;
  display_order: number;
  created_at: string;
  llm_models?: { display_name: string } | null;
}
```

### API DTOs (server/types/api.ts)
Define explicit request/response contracts for each route.

```ts
export interface ListResponse<T> {
  generatedAt: string;
  total: number;
  items: T[];
}

export interface ModelsResponse {
  generatedAt: string;
  totalModels: number;
  models: LlmModel[];
}

export interface UpdateModelsRequest {
  models: LlmModelUpdate[];
}

export interface UpdateModelRequest {
  model: LlmModelUpdate;
}

export interface UpdateOrderRequest {
  orders: Array<{ id?: string | number; api_id?: string; display_order: number }>;
}
```

Notes:
- Decide whether to keep UI types in `src/types.ts` or move shared types to a `shared/` folder. If shared, ensure frontend bundler includes it.
- Prefer `zod` (or manual validators) for request validation and type guards.

---

## Lean Routes Map (minimize overlap)

Current routes have duplicates (`/api/models` vs `/api/models/update`, `/api/archive` vs active filter). Proposed lean set:

Models:
- `GET /api/models?active=true|false` (replaces `/api/archive`)
- `POST /api/models` (create)
- `PATCH /api/models/:id` (update single)
- `PATCH /api/models` (bulk update)
- `PATCH /api/models/order` (reorder)
- `DELETE /api/models/:id` (delete by id; optionally support `api_id` query)

Vendors:
- `GET /api/vendors`
- `POST /api/vendors` (create)
- `PATCH /api/vendors/:id` (update single)
- `PATCH /api/vendors` (bulk update)
- `PATCH /api/vendors/order` (reorder)

Teams:
- `GET /api/teams`
- `POST /api/teams`
- `PATCH /api/teams/:id`
- `PATCH /api/teams/order`
- `DELETE /api/teams/:id`
- `POST /api/teams/:id/duplicate`

Members:
- `GET /api/members`
- `POST /api/members`
- `PATCH /api/members/:id`
- `PATCH /api/members/order`
- `DELETE /api/members/:id`

Users/Sessions:
- `GET /api/users`, `PATCH /api/users/:id`
- `GET /api/sessions`

Settings/Explore:
- `GET /api/settings/models`, `PUT /api/settings/models`
- `GET /api/explore/models`

Migration strategy:
- Keep legacy endpoints temporarily, but route them to new handlers to avoid breaking `src/hooks/*` until frontend is updated.

---

## Suggested Sequencing (low-risk refactor)
1) Add `server/` folder and move helper utilities (env, supabase, parse utils) without changing routes.
2) Extract DB row types + mappers into `server/types` and `server/mappers`.
3) Extract repositories (db access) per resource.
4) Replace inline route handlers with Router modules.
5) Add validation and consolidate routes to the lean set; update frontend hooks accordingly.
6) Add unit tests for mappers + request validators (small, fast).

---

## Quick Wins (no behavior change)
- Fix vendor_id null handling.
- Align `DbMemberRow.characteristics` with jsonb.
- Add `last_synced_at` mapping.
- Remove unused `ensureSettingsDir`.

