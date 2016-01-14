import { combineReducers } from 'redux';

import todos from 'ducks/todo';
import visibilityFilter from 'ducks/visibilityFilter';

export default combineReducers({
	todos,
	visibilityFilter
});
