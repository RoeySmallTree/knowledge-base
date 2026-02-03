# Session Todo List

**Status:** Completed
**Created:** 2026-02-02T20:05:26+02:00
**Last Updated:** 2026-02-02T20:48:17+02:00

## Tasks

## Completed
- [x] Task 1: Scaffold new server module layout (config, db, mappers, repositories, services, routes, types)
  - **Completed:** 2026-02-02T20:05:51+02:00
  - **Notes:** Created `server/` folder with subdirectories for config, db, repositories, mappers, routes, services, types, and utils.
- [x] Task 2: Define DB row types aligned with database-structure.sql
  - **Completed:** 2026-02-02T20:06:57+02:00
  - **Notes:** Added `server/types/db.ts` with schema-aligned row types and numeric string aliases.
- [x] Task 3: Define API DTO types and update frontend types to match
  - **Completed:** 2026-02-02T20:09:26+02:00
  - **Notes:** Added `server/types/api.ts` and updated `src/types.ts` to new DTO shapes and list responses.
- [x] Task 4: Implement supabase client + repositories per resource
  - **Completed:** 2026-02-02T20:13:09+02:00
  - **Notes:** Added env/config utilities, `server/db/supabase.ts`, and repositories for models, vendors, teams, members, users, and sessions.
- [x] Task 5: Implement mappers for DB <-> API/domain entities
  - **Completed:** 2026-02-02T20:14:51+02:00
  - **Notes:** Added mappers for models, vendors, teams, members, users, and sessions in `server/mappers/`.
- [x] Task 6: Implement services (explore cache + settings storage)
  - **Completed:** 2026-02-02T20:15:27+02:00
  - **Notes:** Added `server/services/exploreService.ts` and `server/services/settingsService.ts` for cache + settings IO.
- [x] Task 7: Implement lean routes map (no legacy endpoints)
  - **Completed:** 2026-02-02T20:17:57+02:00
  - **Notes:** Added route modules for models, vendors, teams, members, users, sessions, settings, and explore.
- [x] Task 8: Update server entrypoint to use new routes and remove old code
  - **Completed:** 2026-02-02T20:18:29+02:00
  - **Notes:** Rewrote `server.ts` as a minimal bootstrap wiring new routers and error handler.
- [x] Task 9: Update frontend hooks to new routes and payloads
  - **Completed:** 2026-02-02T20:30:48+02:00
  - **Notes:** Updated hooks and App/components to use new endpoints, list responses, and stricter DTO types.
- [x] Task 10: Verify imports/tsconfig and fix any build errors introduced by refactor
  - **Completed:** 2026-02-02T20:48:17+02:00
  - **Notes:** `npm run check` passes; fixed type/unused errors and added Vite env typings.
