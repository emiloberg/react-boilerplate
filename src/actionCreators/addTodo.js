import { ADD_TODO } from 'actionTypes'

let nextTodoId = 0;
const addTodo = (text) => {
	return {
		type: ADD_TODO,
		id: nextTodoId++,
		text
	};
};

export default addTodo;
