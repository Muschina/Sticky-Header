export const removeClassHeader = (className = '') => {
	return {
		type: 'REMOVE_CLASS',
		className
	};
}

export const addClassHeader = (className) => {
	return {
		type: 'ADD_CLASS',
		className
	}
}

