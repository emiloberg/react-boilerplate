import { TOGGLE_TODO } from 'actionTypes'

const toggleTodo = (id) => {
	return {
		type: TOGGLE_TODO,
		id
	};
};

export default toggleTodo;
