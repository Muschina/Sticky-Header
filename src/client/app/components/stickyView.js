import React from 'react';

import Header from './header/headerView.js';
import Wrapper from './wrapper/wrapperView.js';

export default class Sticky extends React.Component {
	constructor() {
		super();
		this.state = {
			classHeader: "",
		};
	}

	getClassHeader () {
		return this.state.classHeader;
	}

	changeHeader(newClass) {
		this.setState({classHeader: newClass});
	}


	render() {
		return (
			<div>
				<Header classHeader={this.getClassHeader()} />
				<Wrapper changeHeader={this.changeHeader.bind(this)} />
			</div>
		);
	}
}