# CABAL LLM Models + Teams Interface (Feature Summary)

## Layout & Navigation
- **Upper panel (sticky):** Glass-style top bar labeled “Workspace” with tab buttons for **Models** and **Teams**.
- **Center content:** Scrolls vertically through vendors/families or team categories.
- **Left panel (fixed overlay):** A persistent directory/guide for navigation and ordering.
- **Right panel (fixed overlay, Models only):** Filtering controls; collapsible sections.
- **Scrolling behavior:** Center content scrolls; side panels stay pinned and scroll internally. Horizontal scroll is used for model cards and team members.

## Models Tab (Core Features)
- **Grouping & order:** Models are grouped by vendor → family; vendors and families can be collapsed. Display order controls vendor ordering and family order (via smallest model order). Model cards in a family row are ordered by `display_order`.
- **Drag reordering:**
  - Drag vendors in the left panel to change vendor order.
  - Drag families in the left panel to change family order within a vendor.
  - Drag a model card to change its order within its family.
- **Model cards:** Show vendor, ID, name, description/family, pricing, parameters, context, creativity/deductive scores, traits, “Best For,” notes, and linked teams.
- **Click behaviors:**
  - **Edit (pencil):** Opens the model edit modal.
  - **Archive (trash):** Confirms and moves the model to archive.
  - **Fallback selector:** Button opens a nested vendor → family → model list; the current model’s vendor/family are expanded by default.
- **Archive access:** Left panel shows totals and a button to open the archived models list.

## Left Panel (Models)
- **Counts:** Total models, archived models, filtered count.
- **Search:** Quick name/vendor/best-for filtering.
- **Directory:** Vendor list with counts, expandable families with counts, active section highlighting, and click-to-scroll.

## Right Panel (Models)
- **Filters:** Text search, creativity/deductive ranges, pricing range or “free only,” and trait tags.
- **Clear All:** Resets filters to defaults.

## Teams Tab (Core Features)
- **Structure:** Categories (CORTEX/VITALS/OPS/ARCADE) → teams → members.
- **Collapsible hierarchy:** Categories and teams expand/collapse.
- **Drag reordering:**
  - Drag teams within a category to set their order.
  - Drag members within a team to set member order.
- **Team cards:** Team identity, catch phrase, description, default rounds, quick starts, bootstrap prompt, and tags; edit button opens the team modal.
- **Member cards:** Role, name/team role, model selection, characteristics, traits bars, life story, and special orders; edit and delete actions are available on hover.
- **Model selection:** Uses the same nested picker as fallback selection (vendor → family → model).

## Team Data Fields
**Team:**
- `id`, `name`, `display_order`, `catch_phrase`, `description`, `category` (CORTEX/VITALS/OPS/ARCADE), `quick_starts[]`, `default_starting_rounds`, `bootstrap_prompt`, `tag_ids[]`.

**Team Member:**
- `id`, `team_id`, `display_order`, `name`, `role` (Chair/Envoy/Watchdog/Operative), `team_role`, `color`, `characteristics[]`, `life_story`, `special_orders`, `traits_required` {creativity, logic, content_window, strength}, `model` (model id).
