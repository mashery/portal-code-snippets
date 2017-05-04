# conditionalFormFields.js

Conditionally load fields in the contact form based on a visitors response to a radio button question.

## Getting Started

### 1. Include the script in your Portal.

Add the script under `Manage` > `Portal` > `Portal Settings`. You can either add it as an external script or inline the code.

### 2. Initialize the script.

Call `conditionalFormFields(question, answers, callback)` for each select field that you want to toggle fields.

```js
/**
 * @param {string}   question  Selector for question (uses querySelector)
 * @param {object}   answers   The answers, and the fields to show when they're selected
 * @param {function} callback  A callback to run after fields are shown and hidden
 */
conditionalFormFields(question, answers, callback);

// Example
conditionalFormFields('.radio1', {
	'yes': [
		'input1-wrap',
		'input2-wrap'
	],
	'no': [
		'input3-wrap',
		'select1-wrap'
	]
});
```