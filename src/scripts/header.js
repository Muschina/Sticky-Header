'use strict';

function Header(options) {
	this._el = options;
}

Header.prototype.getElement = function() {
	return this._el;
}

Header.prototype.toggleClass = function(className) {
	this._el.className = className;
}
