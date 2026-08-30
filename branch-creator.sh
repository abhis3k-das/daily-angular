#!/usr/bin/env bash
set -euo pipefail

usage() {
  echo "Usage: ./branch-creator.sh <project name>"
  echo
  echo "Examples:"
  echo "  ./branch-creator.sh 07__Two_Way_Component_Contract_with_model"
  echo "  ./branch-creator.sh \"07 - Two Way Component Contract with model\""
}

die() {
  echo "Error: $*" >&2
  exit 1
}

if [ "$#" -lt 1 ]; then
  usage
  exit 1
fi

raw_name="$*"
branch_name="$(
  printf '%s' "$raw_name" |
    sed -E \
      -e 's/^[[:space:]]+//' \
      -e 's/[[:space:]]+$//' \
      -e 's/[^A-Za-z0-9]+/_/g' \
      -e 's/_+/_/g' \
      -e 's/^_+//' \
      -e 's/_+$//' \
      -e 's/^([0-9][0-9])_/\1__/'
)"

[ -n "$branch_name" ] || die "project name must contain at least one letter or number"
[[ "$branch_name" != -* ]] || die "project name cannot start with '-'"

repo_root="$(git rev-parse --show-toplevel 2>/dev/null)" ||
  die "run this script inside a git repository"

cd "$repo_root"

git config user.name "abhis3k-das"
git config user.email "abhis3k.das@gmail.com"

git check-ref-format --branch "$branch_name" >/dev/null ||
  die "'$branch_name' is not a valid git branch name"

if git show-ref --verify --quiet "refs/heads/$branch_name"; then
  die "branch '$branch_name' already exists"
fi

if ! git diff --quiet || ! git diff --cached --quiet; then
  die "commit or stash tracked changes before creating a new branch"
fi

command -v ng >/dev/null ||
  die "Angular CLI not found. Start the container with ./runner.sh or install @angular/cli."

echo "Project name: $branch_name"
echo "Switching to main..."
git switch main

echo "Updating main..."
git pull --ff-only

if [ -e "$branch_name" ]; then
  die "project directory '$branch_name' already exists on main"
fi

echo "Creating branch..."
git switch -c "$branch_name" 14de3c6

echo "Creating Angular project..."
ng new "$branch_name" \
  --directory "$branch_name" \
  --routing \
  --style css \
  --package-manager npm \
  --skip-git \
  --defaults

echo "Committing initial project..."
git add "$branch_name"
git commit -m "initial commit"

echo "Created branch '$branch_name' and committed Angular project."
