#!/usr/bin/env bash
# Design system compliance check — runs after Claude writes/edits a .vue file in src/components/

FILE=$(jq -r '.tool_input.file_path // empty' 2>/dev/null)

# Only check .vue files inside src/components/
[[ "$FILE" == */src/components/*.vue ]] || exit 0
[[ -f "$FILE" ]] || exit 0

ISSUES=""

# 1. Hardcoded hex colors (skip lines that are inside var(--…) or CSS comments)
HEX=$(grep -nE '#[0-9a-fA-F]{3,6}\b' "$FILE" 2>/dev/null \
  | grep -v 'var(--' \
  | grep -v '^\s*//' \
  | grep -v '^\s*\*' \
  | grep -Ev '(cherry|neutral|lake|lapis|rose|burgundy)' \
  | head -3)
[[ -n "$HEX" ]] && ISSUES+="• Hardcoded hex color found — add to tokens.css instead:\n$HEX\n"

# 2. Raw px in spacing properties that have token equivalents
PX=$(grep -nE '(gap|padding|margin(-top|-bottom|-left|-right)?)\s*:\s*[0-9]+px' "$FILE" 2>/dev/null \
  | grep -v 'var(--' \
  | grep -v 'clamp(' \
  | head -3)
[[ -n "$PX" ]] && ISSUES+="• Raw px spacing found — use spacing tokens (--spacing-*):\n$PX\n"

# 3. cursor: pointer without AppButton import (possible ad-hoc interactive element)
if grep -q 'cursor: pointer' "$FILE" 2>/dev/null && ! grep -q 'AppButton' "$FILE" 2>/dev/null; then
  ISSUES+="• cursor: pointer detected without AppButton — if this is a CTA button, use <AppButton> instead\n"
fi

[[ -z "$ISSUES" ]] && exit 0

# Output additionalContext to inject warning back to Claude
jq -n --arg ctx "⚠️ Design system check: $(basename "$FILE")\n${ISSUES}參考 src/design-system/token-audit.md 確認修正方式。" \
  '{"hookSpecificOutput":{"hookEventName":"PostToolUse","additionalContext":$ctx}}'
