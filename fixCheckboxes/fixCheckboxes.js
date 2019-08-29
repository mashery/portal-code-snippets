/**
 * Fix markup around MashDash added checkboxes
 * @param  {Array}  arr    An array of checkbox IDs
 * @param  {String} legend Text for a checkbox group legend (optional)
 */
var fixCheckboxes = function (arr, legend) {

	// Make sure it's an array
	if (Object.prototype.toString.call(arr) !== '[object Array]') {
		arr = [arr];
	};

	// Cache length
	var len = arr.length - 1;

	// For each checkbox
	arr.forEach(function (id, index) {

		// Variables
		var input = document.querySelector(id);
		if (!input) return;
		var empty = document.querySelector('[name="' + input.name + '"][value="0"]');
		var label = input.parentNode.previousElementSibling.querySelector('label');
		var str = label.textContent;

		// Update checkbox
		if (index < len) {
			input.parentNode.style.marginBottom = '0';
		}
		label.textContent = '';
		if (empty) {
			label.appendChild(empty);
		}
		label.appendChild(input);
		label.innerHTML += str;
		label.id = id.slice(1) + '-label';

		if (legend && index === 0) {
			var elem = document.createElement('strong');
			elem.textContent = legend;
			elem.id = id.slice(1) + '-legend';
			label.parentNode.insertBefore(elem, label);
		}

	});

};