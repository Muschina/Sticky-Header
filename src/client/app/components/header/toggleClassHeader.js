import classNames from 'classNames';

const toggleClassHeader = (state, action) => {
	switch (action.type) {
		case 'REMOVE_CLASS':
			let positionRemoveClass = state.className.indexOf(action.className);
			let headerClass = ~positionRemoveClass ? state.className.slice(0, positionRemoveClass) 
																						 : state.className;
			return {
				className: headerClass
			};
		case 'ADD_CLASS': 
			return {
				className: classNames (state.className, action.className)
			};
		default:
			return state;
	}
}

export default toggleClassHeader;