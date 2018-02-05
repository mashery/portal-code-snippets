var fixIntegratedDashboardLinks = function (find, replace) {

	// Only run on SSO admin login
	if (!/admin.mashery.com/.test(window.location.href)) return;

	var removeTrailingSlash = function (str) {
		return str.substring(str.length - 1) === '/' ? str.substring(0, str.length - 1) : str;
	};

	// Strip trailing slashes
	find = removeTrailingSlash(find);
	replace = removeTrailingSlash(replace);

	// Get links
	var links = document.querySelectorAll('#nav-user a, #nav-1 a, #nav-footer a, div#signin a[href*="/member/lost/"], div#signin a[href*="/member/lost-username/"]');
	
	for (var i = 0; i < links.length; i++) {

		// If password lost URL
		if (/\/member\/lost\//.test(links[i])) {
			links[i].href = replace + '/member/lost/';
			continue;
		}

		// If username lost URL
		if (/\/member\/lost-username\//.test(links[i])) {
			links[i].href = replace + '/member/lost-username/';
			continue;
		}

		links[i].href = links[i].href.replace(new RegExp(find, 'i'), replace);
	}

}; 
