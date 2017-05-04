# disableOnSelect.js

Disable fields when a specific selection is made from a select field.

## Getting Started

### 1. Include the script in your Portal.

Add the script under `Manage` > `Portal` > `Portal Settings`. You can either add it as an external script or inline the code.

### 2. Initialize the script.

Call `disableOnSelect(selector, value, fields)` for each select field that you want to disable fields.

```js
/**
 * @param  {String}  selector Selector for the select element to listen for changes on
 * @param  {String}  value    The select field value that should disable other fields
 * @param  {Object}  fields   The field or fields to disable and the value to set for them
 */
 disableOnSelect(selector, value, fields);

 // Example
 disableOnSelect('#select1', 'paris', {
 	'#input1': 'France',
 	'#select2': 'tuna'
 });
```