/**
 * Toggle a select value by query string key
 * @param  {string} selector The select menu selector (ID, class, etc.)
 * @param  {string} key      The key whose value to use
 */
var toggleSelectByQueryString = function (selector, key) {

	'use strict';

	// Sanity check
	if (!selector || !key) return;

	/**
	 * Get the value of a query string from a URL
	 * @param  {String} field The field to get the value of
	 * @param  {String} url   The URL to get the value from [optional]
	 * @return {String}       The value
	 */
	var getQueryString = function ( field, url ) {
		var href = url ? url : window.location.href;
		var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
		var string = reg.exec(href);
		return string ? string[1] : null;
	};

	// Variables
	var select = document.querySelector(selector);
	var value = decodeURIComponent(getQueryString(key));
	if (!select || !value) return;

	// Set value
	for (var i = 0; i < select.options.length; i++) {
		if (select.options[i].value.toLowerCase() !== value.toLowerCase()) continue;
		select.selectedIndex = i;
		break;
	}

};
