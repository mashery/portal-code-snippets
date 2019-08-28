# toggleOnChange.js

Show/hide fields when a specific selection is made from a radio button group.

## Getting Started

### 1. Include the script in your Portal.

Add the script under `Manage` > `Portal` > `Portal Settings`. You can either add it as an external script or inline the code.

### 2. Initialize the script.

Call `toggleOnChange(radioName, value, fieldIDs)` for each radio button field that you want to toggle fields.

```js
/**
 * Show/hide fields when a specific selection is made from a radio button group
 * @param  {String} radioName Name of the radio group
 * @param  {String} value     The value to show the fields on
 * @param  {Array}  fieldIDs  The fields to show if selection is made
 */
toggleOnChange(radioName, value, fieldIDs);

// Example
toggleOnChange('#my-field', 'field-value', ['#field-1', '#field-2']);
```