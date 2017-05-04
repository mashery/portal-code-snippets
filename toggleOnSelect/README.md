# toggleOnSelect.js

Show/hide fields when a specific selection is made from a select field.

## Getting Started

### 1. Include the script in your Portal.

Add the script under `Manage` > `Portal` > `Portal Settings`. You can either add it as an external script or inline the code.

### 2. Initialize the script.

Call `toggleOnSelect(select, target, fields)` for each select field that you want to toggle fields.

```js
/**
 * @param  {String}  selector Selector for the select element to listen for changes on
 * @param  {String}  value    Selector for the select element to show/hide fields in
 * @param  {Object}  fields   The fields to toggle (select_value: [hidden_field_value_1, hidden_field_value_2, ...])
 */
 toggleOnSelect(select, target, fields);

 // Example
 toggleOnSelect('#select1', '#select2', {
 	'london': ['chicken', 'tuna', 'turkey'], // When 'london' is selected, hide 'chicken', 'tuna', and 'turkey'
 	'paris': ['italian', 'grilledcheese'] // When 'paris' is selected, hide 'italian' and 'grilledcheese'
 });
```