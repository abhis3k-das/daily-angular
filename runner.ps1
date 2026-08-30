$ErrorActionPreference = 'Stop'

$repositoryPath = (Resolve-Path -LiteralPath $PSScriptRoot).Path

docker run --rm -it `
  --name angular-runner `
  -p 4200:4200 `
  --mount "type=bind,source=$repositoryPath,target=/workspace" `
  -w /workspace `
  node:22 `
  bash -lc "bash /workspace/scripts/container-init.sh && exec bash"
