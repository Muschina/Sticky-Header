'use strict';

var Sticky = React.createClass({
  handleScroll: function(e) {
    
  },
  render: function() {
    return (
      	<div>	
	      	<header id="sticky-header"></header>
	    	<div id="wrapper" className="wrapper" onScroll="{this.handleScroll}">
	      	<div className="container">
	        	<a href="https://github.com/Muschina/Sticky-Header">
	        		<img id="github" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"/>
	        	</a>
	        	<div className="placeholder"></div>
	        	<div className="bar-black" data-bar="firstBar"></div>
	        	<div className="placeholder"></div>
	        	<div className="bar-grey" data-bar="secondBar"></div>
	     	</div>
	    	</div>
	    </div>
    );
  }
});

ReactDOM.render(
    <Sticky/>,
    document.getElementById('#root')
  );