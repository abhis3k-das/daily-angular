## Story

You are creating a reusable panel shell for several parts of an application. The shell should own layout and visual structure while allowing each parent to project different headers, body content, and actions into it. Your task is to separate reusable container structure from page-specific content so the component stays flexible without growing a long list of specialized inputs.

## What You Are Building

A reusable panel/modal shell that owns layout while callers provide body/actions content.

## Requirements

Support projected body and action areas without adding domain-specific inputs for every possible child.

## Acceptance Criteria

- [ ]  Same shell works for at least two unrelated use cases.

## Break / Debug

Over-design the first API with multiple string inputs, then refactor to composition.

## Interview Connection

Composition vs configuration-heavy reusable components.

## Explain It

Explain what the shell owns and what the consumer owns.