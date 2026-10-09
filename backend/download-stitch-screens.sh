#!/bin/bash
# Download Stitch project screens for Creative Project Design

PROJECT_ID="883714642416664840"
SCREENS=(
  "4192102401428898962"   # DESIGN.md
  "8f42d2abfb9744d19207f0bc6423cb20"  # Generating Screen 2
  "27a176c309c94514b1e58bac286d1177"  # Generating Screen 3
  "1dfda326628c460c8aceed3909feb061"  # Generating Screen 4
  "e0f4564af64f40baba483fffe3006abb"  # Generating Screen 5
)

mkdir -p stitch-output/screens

for screen in "${SCREENS[@]}"; do
  echo "Downloading screen ID: $screen"
  # Try hosted URL patterns
  curl -L -o "stitch-output/screens/${screen}.html" \
    "https://stitch.withgoogle.com/project/${PROJECT_ID}/screen/${screen}" 2>/dev/null || echo "  URL 1 failed"

  # Try alternative endpoint with download parameter
  curl -L -o "stitch-output/screens/${screen}.json" \
    "https://stitch.withgoogle.com/project/${PROJECT_ID}/api/screen/${screen}" 2>/dev/null || echo "  URL 2 failed"

  # Try code export endpoint
  curl -L -o "stitch-output/screens/${screen}_code.html" \
    "https://stitch.withgoogle.com/project/${PROJECT_ID}/export/${screen}" 2>/dev/null || echo "  URL 3 failed"
done

echo "Download attempts completed. Check stitch-output/screens/ for results."
