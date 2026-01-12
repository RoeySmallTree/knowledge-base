#!/bin/bash

# bump-version.sh
# Versioning CLI for CABAL prompting files
#
# Usage: ./bump-version.sh <path_to_file> OR ./bump-version.sh <base_name>
#
# Examples:
#   ./bump-version.sh Bootstrap__System                    # File in prompting/
#   ./bump-version.sh steps/Bootstrap__System              # File in prompting/steps/
#   ./bump-version.sh steps/Bootstrap__System__v1.md       # Full filename also works
#
# This script:
# 1. Finds the current version of the file
# 2. Moves it to an archive folder (relative to the file's location)
# 3. Creates a duplicate with incremented version
# 4. Outputs the new filename for editing

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Check arguments
if [ -z "$1" ]; then
    echo -e "${RED}Error: No file or base name provided${NC}"
    echo ""
    echo "Usage: ./bump-version.sh <path_to_file>"
    echo ""
    echo "Examples:"
    echo "  ./bump-version.sh Bootstrap__System              # Root level"
    echo "  ./bump-version.sh steps/Bootstrap__System        # In subdirectory"
    echo "  ./bump-version.sh steps/Bootstrap__System__v1.md # Full path works too"
    echo ""
    echo "The base name should not include the version suffix."
    echo "Valid format: [subdir/]{Name}__{Type}"
    exit 1
fi

INPUT="$1"

# Remove .md extension if provided
INPUT="${INPUT%.md}"

# Remove __v{N} suffix if provided (user might pass full filename)
INPUT=$(echo "$INPUT" | sed -E 's/__v[0-9]+$//')

# Determine if input contains a directory path
if [[ "$INPUT" == *"/"* ]]; then
    # Input has a subdirectory
    SUBDIR=$(dirname "$INPUT")
    BASE_NAME=$(basename "$INPUT")
    SEARCH_DIR="$SCRIPT_DIR/$SUBDIR"
else
    # Input is just a base name, search in root
    SUBDIR=""
    BASE_NAME="$INPUT"
    SEARCH_DIR="$SCRIPT_DIR"
fi

# Check if search directory exists
if [ ! -d "$SEARCH_DIR" ]; then
    echo -e "${RED}Error: Directory does not exist: $SUBDIR${NC}"
    exit 1
fi

# Archive dir is relative to the file's location
ARCHIVE_DIR="$SEARCH_DIR/archive"

# Ensure archive directory exists
mkdir -p "$ARCHIVE_DIR"

# Find the current version file
CURRENT_FILE=$(find "$SEARCH_DIR" -maxdepth 1 -name "${BASE_NAME}__v*.md" -type f 2>/dev/null | sort -V | tail -n 1)

if [ -z "$CURRENT_FILE" ]; then
    echo -e "${RED}Error: No file found matching pattern '${BASE_NAME}__v*.md'${NC}"
    echo ""
    if [ -n "$SUBDIR" ]; then
        echo "Looking in: $SUBDIR/"
    else
        echo "Looking in: prompting/ (root)"
    fi
    echo ""
    echo "Available files:"
    ls -1 "$SEARCH_DIR"/*.md 2>/dev/null | xargs -n1 basename 2>/dev/null || echo "  (no .md files found)"
    exit 1
fi

CURRENT_FILENAME=$(basename "$CURRENT_FILE")

# Extract current version number
if [[ $CURRENT_FILENAME =~ __v([0-9]+)\.md$ ]]; then
    CURRENT_VERSION="${BASH_REMATCH[1]}"
else
    echo -e "${RED}Error: Could not parse version from filename '${CURRENT_FILENAME}'${NC}"
    exit 1
fi

# Calculate new version
NEW_VERSION=$((CURRENT_VERSION + 1))
NEW_FILENAME="${BASE_NAME}__v${NEW_VERSION}.md"
NEW_FILE="$SEARCH_DIR/$NEW_FILENAME"

# Perform the version bump
echo -e "${YELLOW}Bumping version...${NC}"
if [ -n "$SUBDIR" ]; then
    echo -e "  ${CYAN}Directory:${NC} $SUBDIR/"
fi
echo "  Current: $CURRENT_FILENAME (v$CURRENT_VERSION)"
echo "  New:     $NEW_FILENAME (v$NEW_VERSION)"
echo ""

# 1. Copy current file to new version
cp "$CURRENT_FILE" "$NEW_FILE"

# 2. Move current file to archive
mv "$CURRENT_FILE" "$ARCHIVE_DIR/"

echo -e "${GREEN}✓ Archived:${NC} $CURRENT_FILENAME -> archive/"
echo -e "${GREEN}✓ Created:${NC}  $NEW_FILENAME"
echo ""
echo -e "${GREEN}Ready for editing:${NC}"
echo "$NEW_FILE"
