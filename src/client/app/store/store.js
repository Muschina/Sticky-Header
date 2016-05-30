import toggleClassHeader from './../components/header/toggleClassHeader.js'; 
import changeTopHeader from './../components/header/changeTopHeader.js'; 
import { combineReducers } from 'redux'
import { createStore } from 'redux';

let reducer = combineReducers({
	className: toggleClassHeader,
	topHeader: changeTopHeader
});
let store = createStore(reducer);

const changeHeaderClass = () => {
	let header = document.getElementsByTagName('header')[0];
	header.className = store.getState().className;
}

const changeBodyTop = () => {
	let header = document.getElementsByTagName('header')[0];
	let userBrowser = navigator.userAgent;
	let bodyTop = (~userBrowser.search('CriOS')) ? 0 : header.getBoundingClientRect().top;
	header.style.top =  - bodyTop + 'px';
}

store.subscribe(changeHeaderClass);
store.subscribe(changeBodyTop);

export default store;	