# fixCheckboxes.js

Show/hide fields when a specific selection is made from a select field.

## Getting Started

### 1. Include the script in your Portal.

Add the script under `Manage` > `Portal` > `Portal Settings`. You can either add it as an external script or inline the code.

### 2. Initialize the script.

Call `fixCheckboxes(arr, legend)` for each set of checkboxes to fix.

```js
/**
 * Fix markup around MashDash added checkboxes
 * @param  {Array}  arr    An array of checkbox IDs
 * @param  {String} legend Text for a checkbox group legend (optional)
 */
fixCheckboxes(arr, legend);

// Example
fixCheckboxes(['#checkbox-1', '#checkbox-2'], 'Heading for the checkboxes');
```