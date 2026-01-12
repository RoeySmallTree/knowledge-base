#!/bin/bash

# Calculate character counts for all files in system/ folder
# Usage: ./calculate-chars.sh

SYSTEM_DIR="$(dirname "$0")"
OUTPUT_FILE="$SYSTEM_DIR/calculations.md"

echo "# Character Counts" > "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "Generated: $(date '+%Y-%m-%d %H:%M:%S')" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "| File | Chars |" >> "$OUTPUT_FILE"
echo "|------|-------|" >> "$OUTPUT_FILE"

# Find all .md files recursively, excluding calculations.md itself
find "$SYSTEM_DIR" -name "*.md" ! -name "calculations.md" -type f | sort | while read -r file; do
    relative_path="${file#$SYSTEM_DIR/}"
    char_count=$(wc -c < "$file" | tr -d ' ')
    echo "| $relative_path | $char_count |" >> "$OUTPUT_FILE"
done

echo "" >> "$OUTPUT_FILE"
echo "---" >> "$OUTPUT_FILE"
echo "Total files: $(find "$SYSTEM_DIR" -name "*.md" ! -name "calculations.md" -type f | wc -l | tr -d ' ')" >> "$OUTPUT_FILE"

echo "Done. Output: $OUTPUT_FILE"
