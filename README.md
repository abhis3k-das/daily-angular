## Story

You are adding a side effect to a signal-driven feature, such as persisting a preference or logging a state change. A careless implementation causes repeated updates or a feedback loop. Your task is to keep `effect()` at the side-effect boundary, understand what it tracks, and fix the loop without moving derived state into an effect.

## What You Are Building

Persist a user preference and log changes without using an effect to calculate normal derived state.

## Requirements

Use an effect only for an external side effect. Build one incorrect effect that writes back into its own dependency and diagnose it.

## Acceptance Criteria

- [ ]  Derived values use `computed`, not effect-driven synchronization.
- [ ]  Persistence side effect works.

## Break / Debug

Create and fix a reactive loop.

## Interview Connection

When should you avoid `effect()`?

## Explain It

Give one valid and one invalid effect use case.