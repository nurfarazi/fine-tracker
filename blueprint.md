# Fine Tracker Blueprint

## Overview

A simple application to track fines for a group of users. Users can be added and removed, rules can be created, and fines can be assigned to users for breaking rules.

## Project Style, Design, and Features

*   **Framework:** Angular v20+
*   **Architecture:** Standalone Components
*   **State Management:** Signals
*   **Styling:** Modern CSS with a clean and simple design.
*   **Components:**
    *   `AppComponent`: The root component of the application.
    *   `UsersComponent`: Displays a list of users and allows for adding and removing them.
    *   `RulesComponent`: Displays a list of rules and allows for adding, editing, and deleting them.
    *   `FinesComponent`: Displays a list of fines that have been assigned to users.

## Current Plan

### Phase 4: Fines Management

1.  **Create a `FineService` to manage fine data.** This service will use signals to hold the list of fines.
2.  **Create a `Fine` interface.** This will define the structure of a fine, linking a user to a rule.
3.  **Implement the `FinesComponent`:**
    *   Display a list of all fines, showing the user's name, the rule description, and the fine amount.
    *   Add a form to assign a new fine to a user for a specific rule.
4.  **Style the `FinesComponent`** for a clean and readable presentation.
