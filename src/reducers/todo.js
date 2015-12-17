import { Map } from 'immutable';

import { ADD_TODO, TOGGLE_TODO } from 'actionTypes';

export default (state, action) => {
	switch (action.type) {
		case ADD_TODO:
			return new Map({
				id: action.id,
				text: action.text,
				completed: false
			});
		case TOGGLE_TODO:
			if (state.get('id') !== action.id) {
				return state;
			}

			return state.set('completed', !state.get('completed'));

		default:
			return state;
	}
};
