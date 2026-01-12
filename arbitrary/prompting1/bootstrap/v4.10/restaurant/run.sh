#!/bin/bash
# Bootstrap V4.10 Test - Restaurant SaaS
# Run from: bootstrap/v4.10/restaurant/

set -e

ENV_FILE="../../../../.env"
if [ ! -f "$ENV_FILE" ]; then
  echo "Error: .env file not found at $ENV_FILE"
  exit 1
fi

API_KEY=$(grep "^OPEN_ROUTER_API_KEY=" "$ENV_FILE" | cut -d'=' -f2)
if [ -z "$API_KEY" ]; then
  echo "Error: OPEN_ROUTER_API_KEY not found in .env"
  exit 1
fi

if [ ! -f "request.json" ]; then
  echo "Error: request.json not found. Create it first."
  exit 1
fi

echo "Running Bootstrap V4.10 test..."

curl -s https://openrouter.ai/api/v1/chat/completions \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d @request.json > result.json

echo "Done! Result saved to result.json"
