# Fine Tracker Application Blueprint

## Overview

Fine Tracker is a simple web application for managing fines within a community or organization. It allows for the creation of users, the definition of rules with associated fines, and the assignment of fines to users who break those rules.

## Project Structure & Features

### Core Technologies

- **Framework:** Angular v20+
- **State Management:** Angular Signals
- **Component Architecture:** 100% Standalone Components
- **Styling:** Bootstrap 5
- **Control Flow:** Native `@` syntax (`@if`, `@for`, `@switch`)

### Implemented Features

- **User Management**
  - View a list of all users.
  - Add new users to the system.
  - Remove existing users.

- **Rule Management**
  - View a list of all rules and their corresponding fine amounts.
  - Add new rules with a description and fine amount.
  - Remove existing rules.

- **Fine Management**
  - View a detailed list of all assigned fines, including the user's name, the rule they broke, and the fine amount.
  - Assign new fines to users for specific rule violations.

### Design and Style

- **Layout:** A clean, modern interface using Bootstrap for a responsive and consistent look and feel.
- **Navigation:** A top navigation bar allows for easy switching between the Users, Rules, and Fines sections.
- **Interactivity:** Forms and buttons are styled with Bootstrap for a clear and intuitive user experience.

## Current Task: Add Bootstrap Styling

### Plan & Steps

1.  **[COMPLETED]** Add the Bootstrap CSS CDN link to `src/index.html`.
2.  **[COMPLETED]** Update `src/app/app.component.ts` to include a Bootstrap navbar for navigation.
3.  **[COMPLETED]** Refactor `src/app/users/users.ts` to use Bootstrap form and list-group classes.
4.  **[COMPLETED]** Refactor `src/app/rules/rules.ts` to use Bootstrap form and list-group classes.
5.  **[COMPLETED]** Refactor `src/app/fines/fines.ts` to use Bootstrap form, select, and list-group classes.
6.  **[COMPLETED]** Run `ng build` and fix any resulting compilation errors.
    - **[COMPLETED]** Imported `RouterOutlet` and `RouterLink` into `AppComponent` to resolve template errors.
7.  **[COMPLETED]** Final build successful. Styling applied.
