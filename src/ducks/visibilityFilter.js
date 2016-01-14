import { fromJS } from 'immutable';

export const SHOW_ALL = 'react-boilerplate/visibility-filter/SHOW_ALL';
export const SHOW_ACTIVE = 'react-boilerplate/visibility-filter/SHOW_ACTIVE';
export const SHOW_COMPLETED = 'react-boilerplate/visibility-filter/SHOW_COMPLETED';

export const SET_VISIBILITY_FILTER = 'react-boilerplate/visibility-filter/SET_VISIBILITY_FILTER';

const initState = fromJS({
	filter: SHOW_ALL
});

export default function reducer(state = initState, action = {}) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return state.set('filter', action.filter);
		default:
			return state;
	}
}

export function setVisibilityFilter(filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	};
}
