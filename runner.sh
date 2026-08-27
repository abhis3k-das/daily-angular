docker run --rm -it \
  --name angular-runner \
  -p 4200:4200 \
  -v "$HOME/Desktop/Sample/daily-angular:/workspace" \
  -w /workspace \
  node:22 \
  bash -lc "bash /workspace/scripts/container-init.sh && exec bash"
