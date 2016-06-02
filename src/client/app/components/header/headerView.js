import React from 'react';

export default class Header extends React.Component {
	constructor() {
		super();
	} 

	render() {
		let headerStyle = {
			top: - this.props.topHeader + "px"
		};
		return <header className={this.props.headerClass} style={headerStyle}></header>;
		
	}
}