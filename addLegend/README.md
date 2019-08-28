# addLegend.js

Adds a legend to a form.

## Getting Started

### 1. Include the script in your Portal.

Add the script under `Manage` > `Portal` > `Portal Settings`. You can either add it as an external script or inline the code.

### 2. Initialize the script.

Call `addLegend(before, title, divider)` for each legend you want to add.

```js
/**
 * Add a legend to a form
 * @param {String}  before  A selector for the element to inject it before
 * @param {String}  title   The text to use
 * @param {Boolean} divider If true, also add an divider (<hr>)
 */
addLegend(before, title, divider);

// Example
addLegend('[for="members-handle"]', 'Account Setup');

// Example with line/divider before it
addLegend('[for="members-handle"]', 'Account Setup', true);
```