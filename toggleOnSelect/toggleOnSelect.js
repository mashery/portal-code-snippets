/**
 * Show/hide fields when a specific selection is made from a select field
 * Copyright (c) 2017. TIBCO Software Inc. All Rights Reserved.
 * @author Chris Ferdinandi
 * @param  {String}       selector Selector for the select element to listen for changes on
 * @param  {String}       value    The select field value that should toggle other fields
 * @param  {Object}       fields   The fields to toggle
 */
var toggleOnSelect = function ( selector, target, fields ) {

	'use strict';

	// Get the select fields
	var select1 = document.querySelector(selector);
	var select2 = document.querySelector(target);

	// Sanity check
	if (!select1 || !select2 || Object.prototype.toString.call(fields) !== '[object Object]' || fields.length < 1) return;

	// Hide/show fields when the select changes
	var changeHandler = function (event) {

		// Variables
		var selectValue = select1[select1.selectedIndex].value;
		var selected = false;

		// Loop through each field in the target select element
		for (var i = 0; i < select2.options.length; i++) {

			// If the field is flagged for hiding, hide it
			if (fields[selectValue].indexOf(select2.options[i].value) !== -1) {
				select2.options[i].style.display = 'none';
				select2.options[i].style.visibility = 'hidden';
				continue;
			}

			// Otherwise, make sure it's visible
			select2.options[i].style.display = 'block';
			select2.options[i].style.visibility = 'visible';

			// Select the first visible field
			if (!selected) {
				select2.options[i].selected = true;
				selected = true;
			}
		}
	};

	// Add our event listener
	select1.addEventListener('change', changeHandler, false);

};