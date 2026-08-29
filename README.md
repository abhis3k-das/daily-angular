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