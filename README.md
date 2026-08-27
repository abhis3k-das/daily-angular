## Story

You are building a small employee profile/status card for an internal team directory. The card must display employee information from component state, visually reflect whether the employee is active or unavailable, disable an action when it should not be allowed, and update when the user interacts with it. Your task is to make the template react entirely through Angular binding syntax so you understand how component state flows into text, DOM properties and CSS classes, and how DOM events flow back into the component without manually manipulating the page.

## What You Are Building

A typed profile/status card whose label, disabled state, classes and click behavior come from component state.

## Requirements

Use interpolation for text, property binding for a button state, event binding for actions and class binding for status styling.

## Must Not Use

Direct DOM manipulation.

## Acceptance Criteria

- [ ]  UI updates only through component state.
- [ ]  Disabled action cannot fire.

## Break / Debug

Mix up an HTML attribute and a DOM property binding, observe the behavior, then correct it.

## Interview Connection

Explain interpolation vs property binding vs event binding.

## Explain It

Trace one click from DOM event to component state to template update.