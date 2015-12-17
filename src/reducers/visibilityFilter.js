import { fromJS } from 'immutable';

import { SET_VISIBILITY_FILTER } from 'actionTypes';
import { SHOW_ALL } from 'state';

const initState = fromJS({
	filter: SHOW_ALL
});

export default (state = initState, action = {}) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return state.set('filter', action.filter);
		default:
			return state;
	}
};
