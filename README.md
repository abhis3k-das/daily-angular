## Story

You are building a user list where each child row can notify the parent which user was selected. The parent owns the selected user state and uses that state to update another part of the screen. Your task is to model a clean parent/child event contract so data flows down through inputs and user intent flows back up through outputs without the child reaching into parent state directly.

## What You Are Building

A list of reusable child cards that emit selection and deletion intents to the parent.

## Requirements

The child emits IDs/events; the parent owns the collection and performs state changes.

## Must Use

Modern output API where suitable.

## Must Not Use

A shared service merely to communicate between direct parent and child.

## Acceptance Criteria

- [ ]  Selection and deletion are controlled by the parent.

## Break / Debug

Have the child mutate a shared object directly, observe coupling, then refactor to an event contract.

## Interview Connection

Inputs vs outputs vs shared service: when would you choose each?

## Explain It

Describe one-way data flow in this component tree.