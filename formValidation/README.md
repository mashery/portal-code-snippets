# formValidation.js

Augment server-side validation with form validation. This replicates the Mashery server validation with JS when you need to conditionally require fields.

## Getting Started

### 1. Include the script in your Portal.

Add the script under `Manage` > `Portal` > `Portal Settings`. You can either add it as an external script or inline the code.

### 2. Initialize the script.

Call `formValidation(form, checkGroup)` for form you want to validate.

```js
/**
 * Validate a form with JS
 * @param  {String} form       A selector for the form
 * @param  {Array}  checkGroup Checkbox groups to validate
 */
formValidation(form, checkGroup);

// Example
formValidation('[action*="/member/register"]');

// Example with checkboxes
formValidation('[action="http://trainingarea6.mashery.com/member/register"]', [{
	checkboxes: ['#checkbox-1', '#checkbox-2', '#checkbox-3'],
	legend: '#the-field-legend' // The error message will go here
}]);
```