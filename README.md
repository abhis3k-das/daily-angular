## Story

You are building a reusable preference control whose value can be owned by a parent component while still being edited naturally inside the child. The component should behave like a well-designed Angular form-like control: the parent supplies the current value, the child updates it through a two-way contract, and both sides stay synchronized without duplicating state or wiring separate input/output pairs manually.

## What You Are Building

A reusable quantity/editor control whose value can participate in two-way binding without hiding ownership.

## Requirements

Implement the first version with separate input/output, then refactor to `model()` and compare the public API.

## Acceptance Criteria

- [ ]  Parent and child remain synchronized.
- [ ]  Validation prevents invalid values.

## Break / Debug

Create competing local copies of the value and reproduce state drift.

## Interview Connection

When is two-way binding convenient, and when does it make state flow harder to reason about?

## Explain It

Compare explicit input/output with a model input.