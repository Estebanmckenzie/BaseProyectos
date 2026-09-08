# User Lists

## Intent
This feature allows a user to add names to a list and remove any item from the list with a simple interaction.

## In scope
- Username input field
- Add button to include a new username
- List rendering of all current usernames
- Delete button for each item
- Empty state when the list is empty

## Out of scope
- Persistence in local storage or backend
- Editing existing names
- Sorting or filtering

## Requirements
- The input must ignore empty or whitespace-only values.
- Each user must get a generated unique identifier.
- The list must update immediately after adding or removing a user.
- The list must show an empty state if no names are present.
- The feature must follow the project’s architecture and separation of concerns.

## Constraints
- Reuse existing shared primitives when available.
- Keep the logic in a ViewModel hook and render only JSX in the component.
- Keep the feature self-contained under the feature folder.

## Acceptance criteria
- [ ] A title and label appear for entering a username.
- [ ] The user can type a name and add it to the list.
- [ ] The input clears after a valid add action.
- [ ] Each item has an option to delete it.
- [ ] An empty-state message appears when the list is empty.
