## Story

You are building two dependent selectors, such as country and city, where the second selection becomes invalid whenever the first selection changes. Your task is to use `linkedSignal()` so the dependent state can react to its source, preserve a valid choice when possible, and reset predictably when the upstream value makes the current selection invalid.

## What You Are Building

Country → city selection where the selected city resets intelligently when the available city list changes.

## Requirements

Implement the dependent writable state without an effect that manually watches and resets everything.

## Acceptance Criteria

- [ ]  Valid selection is preserved when possible.
- [ ]  Invalid selection resets predictably.

## Break / Debug

Implement an effect-based reset first and note the extra synchronization logic.

## Interview Connection

What problem does linked dependent state solve compared with `computed`?

## Explain It

Why is this state writable even though it depends on another source?