import { SET_VISIBILITY_FILTER } from 'actionTypes';
import { SHOW_ALL } from 'state';

export default (state = SHOW_ALL, action = {}) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
};
