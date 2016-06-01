import React from 'react';
import store from './../../store/store.js';
import {removeClassHeader, addClassHeader, changeTopHeader} from './../../actions/index.js';


export default class Wrapper extends React.Component {
	constructor() {
		super();
		this.bars = [];
    this.headerTop = 0;
	}

	scrollPage (event) {
		 if (this.headerTop !== store.getState().topHeader) {
		 	this.headerTop = store.getState().topHeader;
			store.dispatch(changeTopHeader(headerTop));
		}
		let wrapperScrollTop = this.getWrapperScroll().top;
		let bo = this.calculateBarsOptions();

		if (wrapperScrollTop - headerTop < bo[0].top) {
        if (this.consistClassHeader(bo[0].consistsClass)) {
          store.dispatch(removeClassHeader(bo[0].consistsClass));
        }
      } else {
          bo.forEach(function(item) {
            
            if (wrapperScrollTop - headerTop > item.top) {
            	if (!this.consistClassHeader(item.consistsClass)) {
              	store.dispatch(addClassHeader(item.consistsClass));
              }
              // header.style.width = getBarWidth();
              // header.style.top =  - bodyTop + 'px';
              // body.style.top = 0;
            } else {
              if (this.consistClassHeader(item.consistsClass)) {
          			store.dispatch(removeClassHeader(item.consistsClass));
        			}
            }
          }.bind(this));
      }
		
	}

	calculateBarsOptions () {
      let barsArray = this.bars.map((item) => {
        let rect = item.getBoundingClientRect();
        let wrapperScroll = this.getWrapperScroll();
        
        return {
          elem: item,
          consistsClass: item.className,
          left: rect.left + wrapperScroll.left,
          top: rect.top + wrapperScroll.top,
          width: rect.width,
          height: rect.height
        };
      });
      return barsArray.sort(this.sortBarsTopPosition);
    }

  getWrapperScroll() {
    return {
      top:  this.wrapper.scrollTop || window.pageYOffset,
      left: this.wrapper.scrollLeft || window.pageXOffset 
    }
  }

  sortBarsTopPosition (firstObj, secondObj) {
      return firstObj.top - secondObj.top;
  }

  consistClassHeader(barClass) {
  	return ~store.getState().className.indexOf(barClass);
  }

	render() {
		return (
			<div className="wrapper" ref={(ref) => this.wrapper = ref} onScroll={this.scrollPage.bind(this)}>
				<div class="container">
	      	<a href="https://github.com/ltebean/sticky-header">
	        	<img className="sticky-github" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" />
	        </a>
	        <div className="placeholder" ></div>
	        <div className="bar-black" ref={(ref) => this.bars[0] = ref}></div>
	        <div className="placeholder"></div>
	        <div className="bar-grey" ref={(ref) => this.bars[1] = ref}></div>
        </div>
      </div>
		);
	}
}