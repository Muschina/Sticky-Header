import React from 'react';
import store from './../../store/store.js';

export default class Header extends React.Component {
	constructor() {
		super();
		//this.className = store.subscribe( this.changeHeaderClass);
	}

	render() {
		return (
			<header></header>
		);	
	}
}