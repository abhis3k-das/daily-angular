## Story

You are building a support-ticket list where records can appear, disappear, and change order as users work with them. The screen must show loading, empty and populated states, and Angular must preserve the identity of each ticket when rows are reordered or deleted. Your task is to use modern Angular control flow and deliberately reproduce a row-identity bug first, then fix it with stable tracking so row-local UI stays attached to the correct domain record.

## What You Are Building

A reorderable ticket list using modern Angular control flow.

## Requirements

Render loading/empty/data states with `@if`, `@for` and `@empty`. Give every ticket a stable domain ID and support deletion/reordering.

## Restrictions

First create an intentionally poor tracking expression so row-local UI behaves incorrectly; then fix it with stable identity.

## Acceptance Criteria

- [ ]  Empty state renders correctly.
- [ ]  Reordering preserves the correct row identity.

## Break / Debug

Document Symptom → Reproduction → Evidence → Root Cause → Fix → Prevention.

## Interview Connection

Why does stable identity matter in repeated UI?

## Explain It

Compare modern control flow with legacy `*ngIf/*ngFor` syntax.
```
<div *ngFor="let ticket of tickets; trackBy: trackByTicketId">
  ...
</div>
```


### Notes : 
Symptom:
After reordering tickets, the text entered in a row input stayed at the same screen position instead of following the correct ticket.

Reproduction:
1. Render tickets using track $index.
2. Enter different text in each row input.
3. Move a ticket up or down.
4. Observe that the input value stays with the index position.

Evidence:
Ticket 101 had note "AAA".
After moving ticket 101 down, "AAA" appeared beside ticket 102.

Root Cause:
$index represents the current array position, not the stable identity of the ticket. When items are reordered or deleted, Angular can reuse the existing DOM row for a different ticket.

Fix:
Changed:

track $index

to:

track ticket.id

Prevention:
For dynamic lists where items can be inserted, removed, or reordered, track by a unique and stable domain identifier.