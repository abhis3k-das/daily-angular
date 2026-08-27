# Daily Angular

Main branch setup notes for daily Angular projects.

## Create a Branch

Create a new branch from `main` for each project.

```bash
git switch main
git pull
git switch -c <number>__<project_name>
```

Example:

```bash
git switch -c 01__Fresh_Angular_22_Standalone_App_From_Scratch
```

## Setup Docker

Make the runner script executable:

```bash
chmod +x runner.sh
```

Start the Docker container:

```bash
./runner.sh
```

The script mounts this repository at `/workspace` inside the container.

The container is started with `--rm`, so it is deleted after it exits. Any tools installed inside the container are not kept after stopping it.

## Initial Container Installation

The runner executes `scripts/container-init.sh` every time the container starts.

Currently installed tools:

```bash
npm install -g @angular/cli@22.1.6
```

Add future global tools or setup commands to `scripts/container-init.sh`.

Inside the container:

```bash
cd /workspace
```

To open another terminal in the same running container:

```bash
docker ps
docker exec -it <container_id> bash
```

If the repository path changes, update the volume mount path in `runner.sh`.

## Projects

| # | Branch | Notion | Project description |
|---|---|---|---|
| 01 | [`01__Fresh_Angular_22_Standalone_App_From_Scratch`](https://github.com/abhis3k-das/daily-angular/tree/01__Fresh_Angular_22_Standalone_App_From_Scratch) | [01 - Fresh Angular 22 Standalone App From Scratch](https://app.notion.com/p/3c7498bf03a1814cbb7ec2a1ab18fe36?pvs=204) | A clean modern Angular application built from an empty folder, covering Angular CLI setup, standalone bootstrap, routing, strict TypeScript, local dev, testing, and production build verification. |
| 02 | [`01__Fresh_Angular_22_Standalone_App_From_Scratch`](https://github.com/abhis3k-das/daily-angular/tree/01__Fresh_Angular_22_Standalone_App_From_Scratch) | [02 - Angular Project Anatomy & npm Scripts Drill](https://app.notion.com/p/3c7498bf03a18158ad4eddc251f2536d?pvs=204) | A one-page Angular project map covering application code, public assets, TypeScript settings, build configuration, npm scripts, and the difference between `ng serve` and `ng build`. |
