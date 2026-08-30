## Story

You are building a lightweight activity counter that must show both the current value and a history of changes. The goal is to model local reactive state with Angular signals, update that state predictably from user actions, and make every UI change come from signal updates rather than manual DOM work.

## What You Are Building

A counter plus immutable history list using Signals.

## Requirements

Increment/decrement/reset, record each change and render derived history.

## Must Use

`signal`, `set`/`update`; immutable collection updates.

## Acceptance Criteria

- [ ]  UI always reflects the latest signal value.
- [ ]  History updates without mutation bugs.

## Break / Debug

Mutate an array/object in place and compare behavior/reasoning with immutable replacement.

## Interview Connection

What is a Signal and what problem does it solve?

## Explain It

Explain how a signal read establishes a reactive dependency.