import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Sticky from './components/stickyView.js';
import store from './store/store.js';

render(
	<Provider store={store}>	
		<Sticky/>
	</Provider>, 
	document.getElementById('root')
);