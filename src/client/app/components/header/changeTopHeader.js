const changeTopHeader = (state = 0, action) => {
	if(action.type === 'CHANGE_TOP') {
		return action.topHeader; 
		
	} else {
		return state;
	}
}

export default changeTopHeader;