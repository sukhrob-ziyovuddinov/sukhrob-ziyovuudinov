#!/usr/bin/env bash
set -euo pipefail

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI (gh) is required. Install: https://cli.github.com/"
  exit 1
fi

gh auth status >/dev/null

if [ ! -d .git ]; then
  git init
fi

git branch -M main

git add .
git reset .env 2>/dev/null || true

git commit -m "Prepare ASII Sovereign for private GitHub + Vercel deployment" || true

if ! git remote get-url origin >/dev/null 2>&1; then
  gh repo create asii-sovereign-v1 --private --source=. --remote=origin --push
else
  git push -u origin main
fi

echo "Repository pushed."
echo "Next: import the repo in Vercel, set VITE_FIREBASE_* and GEMINI_API_KEY env vars, then deploy."
