import { combineReducers } from 'redux';

import todos from 'ducks/todo';
import visibilityFilter from 'ducks/visibilityFilter';
import snackbar from 'ducks/snackbar';

export default combineReducers({
	todos,
	visibilityFilter,
	snackbar
});
