#!/bin/bash
# Bootstrap V4.7 Test - Restaurant SaaS
# Run from: bootstrap/v4.7/restaurant/

set -e

# Get API key from .env (4 levels up)
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

# Check for request.json
if [ ! -f "request.json" ]; then
  echo "Error: request.json not found. Create it first."
  exit 1
fi

echo "Running Bootstrap V4.7 test..."

curl -s https://openrouter.ai/api/v1/chat/completions \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d @request.json > result.json

echo "Done! Result saved to result.json"
