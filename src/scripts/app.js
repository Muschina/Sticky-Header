'use strict';

var page = document.querySelector('#page');
var header = document.querySelector('#header');
var scrollerElement = document.querySelector('#wrapper');
var scroller = {};
var topHeader = 0; // parameter , which sets the indention for header;


var bars = document.querySelectorAll('[data-bar]');
scroller.barsOptions = calculateBarsOptions(bars);
scroller.monitorPosition = document.querySelector('#position');
scroller.topHeader = topHeader;
scroller.probeType = 3;
scroller.scrollbars = true;
scroller.momentum = true;
scroller.mouseWheel = true;
scroller.interactiveScrollbars= true;
scroller.shrinkScrollbars = 'scale';
scroller.fadeScrollbars = true;

var Page = new Page({
	el: page,
	header: header,
	scrollerElement: scrollerElement,
	scroller: scroller,
	topHeader: topHeader
	});

function calculateBarsOptions (arr) {
	var elems = Array.prototype.slice.call(arr)// we do array of collection 

	var barsOptionArray = elems.map(function(item) {
		var rect = item.getBoundingClientRect();
		var windowScroll = getWindowScroll();

		return {
			elem: item,
			className: item.className,
			left: rect.left + windowScroll.left,
      top: rect.top + windowScroll.top,
      width: rect.width,
      height: rect.height
		};
	});

	return barsOptionArray.sort(sortBarsTopPosition);
}

  function getWindowScroll() {
    return {
      top: window.pageYOffset || document.documentElement.scrollTop,
      left: window.pageXOffset || document.documentElement.scrollLeft
    }
  }

  function sortBarsTopPosition (firstObj, secondObj) {
  	return firstObj.top - secondObj.top;
  }