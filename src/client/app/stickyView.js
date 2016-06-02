import React from 'react';
import { render } from 'react-dom'; 
import Header from './components/header/headerView.js';
import Wrapper from './components/wrapper/wrapperView.js';

export default class Sticky extends React.Component {
	constructor() {
		super();
		this.state = {
			headerClass: 'sticky-header',
			topHeader: 0
		}
	} 

	addHeaderClass (newClass) {
		let newHeaderClass = this.state.headerClass + ' ' + newClass;
		this.setState({headerClass: newHeaderClass});
	}

	removeHeaderClass (removeClass) {
		let positionRemoveClass = this.state.headerClass.indexOf(removeClass);
		let newHeaderClass = this.state.headerClass.slice(0, positionRemoveClass);
		this.setState({headerClass: newHeaderClass});
	}

	changeHeaderTop (newTop) {
		let userBrowser = navigator.userAgent;
		let bodyTop = (~userBrowser.search('CriOS')) ? 0 : newTop;
		this.setState({topHeader: bodyTop});
	}

	render() {
		return (		
		<div>
			<Header headerClass={this.state.headerClass} topHeader={this.state.topHeader}/>
			<Wrapper 	headerClass={this.state.headerClass} 
								addHeaderClass={::this.addHeaderClass} 
								removeHeaderClass={::this.removeHeaderClass}
							 	changeHeaderTop={::this.changeHeaderTop}/>
		</div>
		);
	}
}


render (
	<Sticky/>,
	document.getElementById('root')
)

	
