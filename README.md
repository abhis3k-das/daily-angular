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
| 03 | [`03__Template_Binding_Profile_Status_Card`](https://github.com/abhis3k-das/daily-angular/tree/03__Template_Binding_Profile_Status_Card) | [03 - Template Binding: Profile Status Card](https://app.notion.com/p/3c7498bf03a18188bc39c536f5228e62?pvs=204) | A typed employee profile/status card covering interpolation, property binding, event binding, class binding, disabled actions, and state-driven template updates without direct DOM manipulation. |
| 04 | [`04_Modern_Control_Flow_Stable_Row_Identity_Bug_Lab`](https://github.com/abhis3k-das/daily-angular/tree/04_Modern_Control_Flow_Stable_Row_Identity_Bug_Lab) | [04 - Modern Control Flow + Stable Row Identity Bug Lab](https://app.notion.com/p/04-Modern-Control-Flow-Stable-Row-Identity-Bug-Lab-3c7498bf03a1813f85d5f4898f975ba7) | A support ticket list bug lab covering Angular `@if`, `@for`, `@empty`, stable `track` identity, item deletion, and row reordering without losing local input state. |
| 05 | [`05__Typed_Standalone_User_Card_API`](https://github.com/abhis3k-das/daily-angular/tree/05__Typed_Standalone_User_Card_API) | [05 - Typed Standalone User Card API](https://app.notion.com/p/05-Typed-Standalone-User-Card-API-3c7498bf03a181c1bca7ce54cc4bbaab) | A reusable standalone `UserCard` component covering typed signal-based inputs, required user data, optional display preferences, parent-owned data, and template tooling checks for invalid usage. |
| 06 | [`06__Output_Events_Parent_Child_Selection_Flow`](https://github.com/abhis3k-das/daily-angular/tree/06__Output_Events_Parent_Child_Selection_Flow) | [06 - Output Events: Parent/Child Selection Flow](https://app.notion.com/p/3c7498bf03a18181ac90e5557d63adf7?pvs=204) | A parent/child selection flow covering Angular `output()` events, child-emitted selection and deletion intents, parent-owned collection state, and one-way data flow without a shared service. |
| 07 | [`07__Two_Way_Component_Contract_with_model`](https://github.com/abhis3k-das/daily-angular/tree/07__Two_Way_Component_Contract_with_model) | [07 - Two-Way Component Contract with model()](https://app.notion.com/p/3c7498bf03a18145bde7d63df00eae5a?pvs=204) | A reusable quantity editor covering Angular `model()`, two-way binding, parent-owned value state, child-driven updates, and validation that prevents invalid quantity values. |
