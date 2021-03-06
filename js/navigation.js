/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens and enables tab
 * support for dropdown menus.
 */
var navigation = function () {
	var container, menu, links, subMenus;

	function init() {
		container = document.getElementById('site-navigation');
		if (!container) {
			return;
		}


		menu = container.getElementsByTagName('ul')[0];
		menu.setAttribute('aria-expanded', 'false');

		if (-1 === menu.className.indexOf('nav-menu')) {
			menu.className += ' nav-menu';
		}

		// Get all the link elements within the menu.
		links = menu.getElementsByTagName('a');
		subMenus = menu.getElementsByTagName('ul');

		// Set menu items with submenus to aria-haspopup="true".
		for (var i = 0, len = subMenus.length; i < len; i++) {
			subMenus[i].parentNode.setAttribute('aria-haspopup', 'true');
		}

		// Each time a menu link is focused or blurred, toggle focus.
		for (i = 0, len = links.length; i < len; i++) {
			links[i].addEventListener('focus', toggleFocus, true);
			links[i].addEventListener('blur', toggleFocus, true);
		}
	}

	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus() {
		var self = this;

		// Move up through the ancestors of the current link until we hit .nav-menu.
		while (-1 === self.className.indexOf('nav-menu')) {

			// On li elements toggle the class .focus.
			if ('li' === self.tagName.toLowerCase()) {
				if (-1 !== self.className.indexOf('focus')) {
					self.className = self.className.replace(' focus', '');
				} else {
					self.className += ' focus';
				}
			}

			self = self.parentElement;
		}
	}

	return {
		Init: init
	};

}();