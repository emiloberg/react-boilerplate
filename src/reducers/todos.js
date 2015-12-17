import { List } from 'immutable';

import todo from 'reducers/todo';
import { ADD_TODO, TOGGLE_TODO } from 'actionTypes';

const initState = new List();

export default (state = initState, action = {}) => {
	switch (action.type) {
		case ADD_TODO:
			return state.push(todo(undefined, action));
		case TOGGLE_TODO:
			return state.map((curTodo) => todo(curTodo, action));
		default:
			return state;
	}
};
