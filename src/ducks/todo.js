import { Map, List } from 'immutable';

export const ADD_TODO = 'react-boilerplate/todo/ADD_TODO';
export const TOGGLE_TODO = 'react-boilerplate/todo/TOGGLE_TODO';

const initState = new List([]);

export default function reducer(state = initState, action = {}) {
	switch (action.type) {
		case ADD_TODO:
			return state.push(new Map({
				id: action.payload.id,
				text: action.payload.text,
				completed: false
			}));
		case TOGGLE_TODO:
			return state.map((curTodo) => {
				if (curTodo.get('id') !== action.payload.id) {
					return curTodo;
				}
				return curTodo.set('completed', !curTodo.get('completed'));
			});
		default:
			return state;
	}
}

let nextTodoId = 0;
export function addTodo(text, resetId) {
	if (resetId) {
		nextTodoId = 0;
	}

	return {
		type: ADD_TODO,
		payload: {
			id: nextTodoId++,
			text
		}
	};
}

export function toggleTodo(id) {
	return {
		type: TOGGLE_TODO,
		payload: {
			id
		}
	};
}
