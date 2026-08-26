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
