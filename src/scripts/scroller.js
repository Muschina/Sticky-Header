'use strict';

function Scroller(el, options) {
	IScroll.apply(this, arguments);

	this.wrapper = el;
	this.scroller = this.wrapper.children[0];
	this.scrollerStyle = this.scroller.style;

	this._headerFlag = false; 
	this._topHeader = options.topHeader || 0;
	this._monitorPosition = options.monitorPosition;
	this._barsOptions = options.barsOptions; //height and top
}

Scroller.prototype = Object.create(IScroll.prototype);
Scroller.constructor = Scroller;

Scroller.prototype.toucheMoveScroller = function() {
	this._monitorPosition.innerHTML = this.y>>0;

	if(Math.abs(this.y) < this._barsOptions[0].top - this._topHeader) {
		if(this._headerFlag) {
			this.wrapper.dispatchEvent(new CustomEvent('deleteHeaderClass', 
				{bubbles: true, detail: {headerClass: '', headerTop: 0, wrapperTop: 0}}));
			this._barsOptions[0].elem.classList.remove('barOpacity');
			this._headerFlag = false;
		}
	}
	else {
		this._barsOptions.forEach(function(item) {
			if(Math.abs(this.y) > item.top - this._topHeader) {
				item.elem.classList.add('barOpacity');
				var barClass = item.className;
				var barHeight = item.height;
				var barTop = barHeight;
				this.wrapper.dispatchEvent(new CustomEvent('addHeaderClass', 
					{bubbles: true, detail: {headerClass: barClass, headerTop: barHeight, wrapperTop: barTop}}));
			}
			else {
				if(item.elem.classList.contains('barOpacity')) {
					item.elem.classList.remove('barOpacity');
				}
			}
		}.bind(this));
		this._headerFlag = true;
	}
}