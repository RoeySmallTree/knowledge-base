#!/bin/bash
# V4.7 Write Prompt Test - OpenRouter API Call
# Outputs to results/write_v47_result.txt

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
mkdir -p "$SCRIPT_DIR/results"
OUTPUT_FILE="$SCRIPT_DIR/results/write_v47_result.txt"

echo "Running Write V4.7 test..."
echo "Output will be saved to: $OUTPUT_FILE"

curl --max-time 180 -s https://openrouter.ai/api/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer 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" \
  -d '{
  "model": "anthropic/claude-3.5-sonnet",
  "messages": [
    {
      "role": "system",
      "content": "You are Jordan (operative-2), the Technical Specialist. You are an Operative performing a Write action in the CABAL system.\n\nOutput JSON with:\n- reasoning: your thought process\n- content: markdown deliverable (NOT JSON)\n- changeSummary: what changed or Initial version\n- collabs: [{refersToProduct, importance, comment}]\n- remarks: [{recipients, type, content, isBlocker}]"
    },
    {
      "role": "user",
      "content": "[MISSION] Build TODO list MVP with <500ms response, >99% uptime.\n\n[YOUR ASSIGNMENT]\nProduct: System Architecture Design\nType: Decision\nDoD: Architecture diagram, tech stack, data flow, performance, security\n\n[CHAIR DIRECTIVE]\nCreate comprehensive system architecture for TODO list app including:\n- Architecture diagram showing all components\n- Tech stack decisions with justifications (TypeScript/React/Node.js)\n- Data flow and API contract\n- Performance optimization strategies for <500ms\n- Security considerations\n\n[PEER PRODUCTS]\nCore UI Components - Alex building frontend, needs your API contract\n\n[VALID IDS]\ntemp:4 → Core UI Components"
    }
  ],
  "response_format": { "type": "json_object" }
}' > "$OUTPUT_FILE"

echo "Done! Result saved to: $OUTPUT_FILE"
echo ""
echo "To view result: cat $OUTPUT_FILE | jq ."
