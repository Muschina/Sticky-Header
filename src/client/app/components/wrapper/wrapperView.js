import React from 'react';

export default class Wrapper extends React.Component {
	constructor() {
		super();
		this.bars = [];
    this.bodyTop = 0;
	}

	scrollPage (event) {
    let bodyTop = document.getElementsByTagName('body')[0].getBoundingClientRect().top; 

		 if (this.headerTop !== bodyTop) {
      this.headerTop = bodyTop;
			this.props.changeHeaderTop(this.headerTop);
		}
		let wrapperScrollTop = this.wrapper.scrollTop || window.pageYOffset;
		let bo = this.calculateBarsOptions();

		if (wrapperScrollTop < bo[0].top) {
        if (this.consistClassHeader(bo[0].consistsClass)) {
          this.props.removeHeaderClass(bo[0].consistsClass);
        }
      } else {
          bo.forEach(function(item) {
            
            if (wrapperScrollTop >= item.top) {
            	if (!this.consistClassHeader(item.consistsClass)) {
              	this.props.addHeaderClass(item.consistsClass);
              }
            } else {
              if (this.consistClassHeader(item.consistsClass)) {
          			this.props.removeHeaderClass(item.consistsClass);
        			}
            }
          }.bind(this));
      }
		
	}

	calculateBarsOptions () {
      let barsArray = this.bars.map((item) => {
        let rect = item.getBoundingClientRect();
        
        return {
          elem: item,
          consistsClass: item.className,
          top: rect.top + (this.wrapper.scrollTop || window.pageYOffset),
          width: rect.width
        };
      });
      return barsArray.sort((firstObj, secondObj) => (firstObj.top - secondObj.top));
    }

  consistClassHeader(barClass) {
  	return ~this.props.headerClass.indexOf(barClass);
  }

	render() {
    console.log(this.props)
		return (
			<div className="wrapper" ref={(ref) => this.wrapper = ref} onScroll={::this.scrollPage}>
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