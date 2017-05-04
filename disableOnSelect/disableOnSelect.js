/**
 * Disable fields when a specific selection is made from a select field
 * Copyright (c) 2017. TIBCO Software Inc. All Rights Reserved.
 * @author Chris Ferdinandi
 * @param  {String}  selector Selector for the select element to listen for changes on
 * @param  {String}  value    The select field value that should disable other fields
 * @param  {Object}  fields   The field or fields to disable and the value to set for them
 */
var disableOnSelect = function ( selector, value, fields ) {

	'use strict';

	// Get the select field
	var select = document.querySelector(selector);
	if (!select || Object.prototype.toString.call(fields) !== '[object Object]' || fields.length < 1) return;

	// Add hidden fields for select form submission (disabled fields won't submit)
	var addHiddenFields = function () {
		for ( var key in fields ) {
			if ( Object.prototype.hasOwnProperty.call( fields, key ) ) {
				var field = document.querySelector(key);
				if (!field || field.tagName.toLowerCase() !== 'select') continue;
				var input = document.createElement( 'input' );
				input.type = 'hidden';
				input.id = field.id + '_disabled-hidden';
				field.parentNode.insertBefore(input, field);
			}
		}
	};

	// Disable or enable the field
	var disableField = function (field, value, disable) {
		var hiddenField = document.querySelector('#' + field.id + '_disabled-hidden');
		if (disable) {
			field.value = value;
			field.classList.add('disabled');
			if (hiddenField) {
				hiddenField.value = value;
				hiddenField.name = field.name;
				field.setAttribute('disabled', true);
			} else {
				field.setAttribute('readonly', true);
			}
		} else {
			field.value = '';
			field.classList.remove('disabled');
			if (hiddenField) {
				hiddenField.name = '';
				field.removeAttribute('disabled');
			} else {
				field.removeAttribute('readonly');
			}
		}
	};

	// Loop through each field when the select changes and disable or enable the field
	var changeHandler = function (event) {
		var disable = event.target.value.toLowerCase() === value.toLowerCase() ? true : false;
		for ( var key in fields ) {
			if ( Object.prototype.hasOwnProperty.call( fields, key ) ) {
				var field = document.querySelector(key);
				if (!field) continue;
				disableField(field, fields[key], disable);
			}
		}
	};

	// Add our hidden fields
	addHiddenFields();

	// Add our event listener
	select.addEventListener('change', changeHandler, false);

};