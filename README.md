## Story

You are reviewing a dashboard where totals and labels are stored separately from the source state that already determines them. This duplication has created synchronization bugs. Your task is to refactor the feature so derived values are calculated with `computed()` from the real source signals, giving the UI one source of truth and removing state that can drift out of sync.

## What You Are Building

A cart summary where subtotal, item count and discount eligibility are derived from one cart signal.

## Requirements

First store a duplicated subtotal manually, reproduce inconsistency, then remove it with `computed()`.

## Acceptance Criteria

- [ ]  No event handler manually synchronizes derived totals.

## Break / Debug

Create a code path that forgets to update duplicated subtotal.

## Interview Connection

Why is derived state dangerous when stored separately?

## Explain It

`signal` vs `computed`: source state vs derived state.