/**
 * Add a legend to a form
 * @param {String}  before  A selector for the element to inject it before
 * @param {String}  title   The text to use
 * @param {Boolean} divider If true, also add an divider (<hr>)
 */
var addLegend = function (before, title, divider) {

	// Get the element
	var target = document.querySelector(before);
	if (!target) return;

	// Create legend
	var legend = document.createElement('legend');
	legend.textContent = title;

	// Inject into the DOM
	target.parentNode.insertBefore(legend, target);

	// If a divider, add
	if (divider) {
		var hr = document.createElement('hr');
		legend.parentNode.insertBefore(hr, legend);
	}

};