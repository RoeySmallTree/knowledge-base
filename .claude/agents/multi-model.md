# Multi-Model Aggregator Agent

Sends a task to multiple LLM models concurrently and aggregates all responses into a single JSON file.

## Usage

```
Run this task on [models]:
[task description]

Output to: [path]
```

**Examples:**
```
Run this copywriting task on all OpenAI and Google models, output to results.json
Run this on anthropic/claude-opus-4.5, openai/gpt-5.2, google/gemini-3-pro-preview
```

## Process

1. **Query models** from database (or use specified list)
2. **Send task** to all models concurrently via OpenRouter
3. **Aggregate** all responses into single JSON
4. **Report** success/failure counts

## Output Format

```json
{
  "task": "The original prompt",
  "timestamp": "2026-01-20T...",
  "models_attempted": 10,
  "models_succeeded": 9,
  "results": {
    "openai/gpt-5.2": { ...model output... },
    "anthropic/claude-opus-4.5": { ...model output... },
    "google/gemini-3-pro-preview": { ...model output... }
  },
  "errors": {
    "some/failed-model": "Rate limited"
  }
}
```

## CLI Script

`teams-and-missions/workbench/scripts/multi-model.js`

```bash
# Run on specific models
node scripts/multi-model.js \
  --prompt "Rewrite this team copy..." \
  --models "openai/gpt-5.2,anthropic/claude-opus-4.5" \
  --output results.json

# Run on all models from a vendor
node scripts/multi-model.js \
  --prompt-file task.md \
  --models "google/*" \
  --output results.json

# Run on all models
node scripts/multi-model.js \
  --system-prompt-file system.md \
  --prompt-file input.json \
  --models "all" \
  --json-mode \
  --output results.json
```

## Database & API

- **Models:** Supabase `llm_models` table (`api_id` field)
- **API:** OpenRouter `https://openrouter.ai/api/v1/chat/completions`
- **Auth:** `OPEN_ROUTER_API_KEY` from `.env`
