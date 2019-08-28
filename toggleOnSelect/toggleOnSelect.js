/**
 * Toggle a field when a select menu's value changes
 * @param  {String}       selectID The ID of the select menu
 * @param  {String}       fieldID  The ID of the field to show/hide
 * @param  {Array|String} values   The select menu values to show the target field for
 */
var toggleOnSelect = function (selectID, fieldID, values) {

	'use strict';

	// Make sure values is an array
	if (Object.prototype.toString.call(values) !== '[object Array]') {
		values = [values];
	}

	// Get the select menu and field to toggle
	var select = document.querySelector(selectID);
	var field = document.querySelector(fieldID);
	if (values.length < 1 || !select || !field) return;
	var label = document.querySelector('label[for="' + field.id + '"]');

	var hide = function () {
		field.setAttribute('hidden', true);
		if (label) {
			label.setAttribute('hidden', true);
		}
		if (field.nextElementSibling && field.nextElementSibling.matches('ul.error')) {
		    field.nextElementSibling.parentNode.removeChild(field.nextElementSibling);
		}
	};

	var show = function () {
		field.removeAttribute('hidden');
		if (label) {
			label.removeAttribute('hidden');
		}
	};

	// Hide/show fields when the select changes
	var changeHandler = function (event) {
		if (values.indexOf(select.value) < 0) {
			hide();
			return;
		}
		show();
	};

	// Hide field on load
	hide();

	// Add our event listener
	select.addEventListener('input', changeHandler, false);

};