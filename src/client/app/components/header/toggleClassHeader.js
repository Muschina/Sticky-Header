import classNames from 'classNames';

const toggleClassHeader = (state = 'sticky-header', action) => {
	switch (action.type) {
		case 'REMOVE_CLASS':
			let positionRemoveClass = state.indexOf(action.className);
			let headerClass = ~positionRemoveClass ? state.slice(0, positionRemoveClass) 
																						 : state;
			return headerClass;
			
		case 'ADD_CLASS': 
			return classNames (state, action.className);
		default:
			return state;
	}
}

export default toggleClassHeader;