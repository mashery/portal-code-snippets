# toggleOnSelect.js

Show/hide fields when a specific selection is made from a select field.

## Getting Started

### 1. Include the script in your Portal.

Add the script under `Manage` > `Portal` > `Portal Settings`. You can either add it as an external script or inline the code.

### 2. Initialize the script.

Call `toggleOnSelect(selectID, fieldID, values)` for each select field that you want to toggle fields.

```js
/**
 * Toggle a field when a select menu's value changes
 * @param  {String}       selectID The ID of the select menu
 * @param  {String}       fieldID  The ID of the field to show/hide
 * @param  {Array|String} values   The select menu values to show the target field for
 */
toggleOnSelect(selectID, fieldID, values);

// Example
toggleOnSelect('#select-field', '#some-other-field', ['Yes', 'Maybe']);
```