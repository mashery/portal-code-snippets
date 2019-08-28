/**
 * Show/hide fields when a specific selection is made from a radio button group
 * @param  {String} radioName Name of the radio group
 * @param  {String} value     The value to show the fields on
 * @param  {Array}  fieldIDs  The fields to show if selection is made
 */
var toggleOnChange = function (radioName, value, fieldIDs) {

	'use strict';

	// Get the fields to toggle
	var fields = fieldIDs.map(function (fieldID) {
		return [document.querySelector('#' + fieldID), document.querySelector('[for="' + fieldID + '"]')];
	});

	// Sanity check
	if (!radioName || value === null || Object.prototype.toString.call(fields) !== '[object Array]' || fields.length < 1) return;

	// Clear fields on hide
	var clearField = function (field) {

		// Variables
		var input = field.tagName.toLowerCase() === 'label' ? field.querySelector('input, textarea') : field;
		if (!input) return;

		// Clear the input
		if (['radio', 'checkbox'].indexOf(input.type) > -1) {
			input.checked = false;
		} else {
			input.value = '';
		}

	};

	// Hide/show fields when the select changes
	var changeHandler = function (event) {

		// Only run on our fields
		if (!event.target.name || event.target.name !== radioName) return;

		// Hide/show the field
		fields.forEach(function (fieldSet) {
			fieldSet.forEach(function (field) {
				if (!field) return;
				if (event.target.value === value) {
					field.removeAttribute('hidden');
				} else {
					field.setAttribute('hidden', 'true');
					if (field.nextElementSibling && field.nextElementSibling.matches('ul.error')) {
					    field.nextElementSibling.parentNode.removeChild(field.nextElementSibling);
					}
					clearField(field);
				}
			});
		});

	};

	// Hide the fields on load
	var hideOnLoad = function () {
		var input = document.querySelector('[name="' + radioName + '"][value="' + value + '"]');
		if (input.checked) return;
		fields.forEach(function (fieldSet) {
			fieldSet.forEach(function (field) {
				if (!field) return;
				field.setAttribute('hidden', 'true');
			});
		});
	};

	// Hide fields on load
	hideOnLoad();

	// Add our event listener
	document.addEventListener('input', changeHandler, false);

};