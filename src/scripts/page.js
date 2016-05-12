'use strict';

function Page (options) {
	this._el = options.el;
	this._el.style.paddingTop = options.topHeader ? options.topHeader + 'px' : '' ;
	this._header = new Header(options.header);
	this.scroller = new Scroller(options.scrollerElement, options.scroller);

	this.scroller.on('scroll', this._toucheMoveScroller.bind(this));
	this._el.addEventListener('addHeaderClass', this._toggleStickyHeader.bind(this));
	this._el.addEventListener('deleteHeaderClass', this._toggleStickyHeader.bind(this));
}

Page.prototype._toucheMoveScroller = function() {
	if(this._topHeader) {
		this._el.style.top = this._topHeader + 'px';
	}
	this.scroller.toucheMoveScroller();
}

Page.prototype._toggleStickyHeader = function(event) {
	this._header.toggleClass(event.detail.headerClass);
}
