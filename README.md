## Story

You are creating a reusable user summary card for several screens in an admin portal. Different parent components need to supply user data and optional display preferences, but the card itself should remain focused, typed, and independent of global state. Your task is to design a small standalone component API that makes invalid usage difficult and keeps data ownership with the parent.

## What You Are Building

A reusable standalone `UserCard` with a small, typed component API.

## Requirements

Accept a required user model and optional display mode. Render only from inputs; do not reach into a global service.

## Must Use

Signal-based `input()` APIs where appropriate.

## Acceptance Criteria

- [ ]  Missing required data is caught by TypeScript/template tooling.
- [ ]  Parent can reuse the card with different users.

## Break / Debug

Pass the wrong shape from the parent and inspect where type safety stops the bug.

## Interview Connection

What makes a component API maintainable?

## Explain It

Explain input ownership and why children should not mutate parent-owned domain objects.