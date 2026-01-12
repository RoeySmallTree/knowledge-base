#!/bin/bash
# Plan & Assign V4.7 Test - MenuMaster MVP
# Run from: plan_assign/v4.7/todo/

set -e

# Try multiple .env locations
ENV_PATHS=(
  "/Users/roeyki/workspace/CABAL/cabal-be/.env"
  "/Users/roeyki/workspace/ai-suite/projects/CABAL/.env"
  "../../../../.env"
)

API_KEY=""
for ENV_FILE in "${ENV_PATHS[@]}"; do
  if [ -f "$ENV_FILE" ]; then
    API_KEY=$(grep "^OPEN_ROUTER_API_KEY=" "$ENV_FILE" | cut -d'=' -f2)
    if [ -n "$API_KEY" ]; then
      echo "Using .env from: $ENV_FILE"
      break
    fi
  fi
done

if [ -z "$API_KEY" ]; then
  echo "Error: OPEN_ROUTER_API_KEY not found in any .env location"
  exit 1
fi

if [ ! -f "request.json" ]; then
  echo "Error: request.json not found. Create it first."
  exit 1
fi

echo "Running Plan & Assign V4.7 test..."

curl -s https://openrouter.ai/api/v1/chat/completions \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d @request.json > result.json

echo "Done! Result saved to result.json"
