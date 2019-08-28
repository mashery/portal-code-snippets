/**
 * Validate a form with JS
 * @param  {String} form       A selector for the form
 * @param  {Array}  checkGroup Checkbox groups to validate
 */
var formValidation = function (form, checkGroup) {

	'use strict';

	//
	// Variables
	//

	var form = document.querySelector(form);
	if (!form) return;
	var fields = Array.prototype.slice.call(form.querySelectorAll('input.require, textarea.require, select.require'));
	var fieldError = 'This value is not allowed to be blank.';


	//
	// Methods
	//

	var shiftFocus = function (field) {
		if (!field) return;
		field.focus();
	};

	var removeErrors = function () {
		var errors = Array.prototype.slice.call(form.querySelectorAll('ul.error'));
		errors.forEach(function (error) {
			var field = error.parentNode.querySelector('.failure');
			error.parentNode.removeChild(error);
			if (field) {
				field.classList.remove('failure');
			}
		});
	};

	var showFormError = function () {

		// If error already exists, use it
		var existing = form.querySelector('ul.failure');
		if (existing) return;

		// Otherwise, create one
		var error = document.createElement('ul');
		error.className = 'failure';
		error.innerHTML = '<li>Please correct the noted errors.</li>';
		form.insertBefore(error, form.firstChild);

	};

	var showFieldError = function (field) {

		// Get target location
		var target = field;
		if (field.type === 'radio') {

			// Get radio button last input
			var allFields = form.querySelectorAll('[name="' + field.name + '"]');
			target = allFields[allFields.length - 1].parentNode;

			// If an error is already there, bail
			if (target.parentNode.querySelector('ul.error li')) return
				;
		}

		// Insert error
		var error = document.createElement('ul');
		error.className = 'error';
		error.innerHTML = '<li>' + fieldError + '</li>';
		target.parentNode.insertBefore(error, target.nextSibling);
		target.classList.add('failure');

	};

	var isValid = function (field) {
		if (field.hasAttribute('hidden') || field.type === 'submit' || field.type === 'hidden') return true;
		if (field.type !== 'radio' && field.value.length > 0) return true;
		if (field.type === 'radio') {
			var allFields = Array.prototype.slice.call(form.querySelectorAll('[name="' + field.name + '"]'));
			var valid = false;
			allFields.forEach(function (radio) {
				if (radio.checked) {
					valid = true;
				}
			});
			return valid;
		}
		return false;
	};

	/**
	 * Validate form
	 */
	var submitHandler = function (event) {

		// // Stop form from submitting
		// event.preventDefault();

		// Default form validity
		var valid = true;
		var first;

		// Remove existing errors
		removeErrors();

		// Validate all fields
		fields.forEach(function (field) {
			if (isValid(field)) return;
			showFieldError(field);
			valid = false;
			if (!first) {
				first = field;
			}
		});

		// Checkboxes
		if (checkGroup && checkGroup.length > 0) {
			checkGroup.forEach(function (checkboxes) {

				var selectedCheckboxes = checkboxes.checkboxes.filter(function (selector) {
					var checkbox = document.querySelector(selector);
					return (!!checkbox && checkbox.checked);
				});

				var isHidden = checkboxes.checkboxes.filter(function (selector) {
					var checkbox = document.querySelector(selector);
					return (!!checkbox && checkbox.closest('[hidden]'));
				});

				if (isHidden.length > 0) return;

				if (selectedCheckboxes.length < 1) {
					showFieldError(document.querySelector(checkboxes.legend));
					valid = false;
				}

			});
		}

		if (valid) return;

		// Stop form from submitting
		event.preventDefault();
		showFormError();
		shiftFocus(first);

	};


	//
	// Event Listeners
	//

	form.addEventListener('submit', submitHandler, false);

};