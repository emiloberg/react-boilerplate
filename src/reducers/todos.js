import todo from 'reducers/todo';
import { ADD_TODO, TOGGLE_TODO } from 'actionTypes';

export default (state = [], action = {}) => {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				todo(undefined, action)
			];
		case TOGGLE_TODO:
			return state.map((curTodo) => todo(curTodo, action));
		default:
			return state;
	}
};
