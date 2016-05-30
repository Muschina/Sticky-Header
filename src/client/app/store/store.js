import toggleClassHeader from './../components/header/toggleClassHeader.js'; 
import { createStore } from 'redux';

let store = createStore(toggleClassHeader, {className: 'sticky-header'});

const changeHeaderClass = () => {
	let header = document.getElementsByTagName('header')[0];
	header.className = store.getState().className;
}

store.subscribe(changeHeaderClass);

export default store;	