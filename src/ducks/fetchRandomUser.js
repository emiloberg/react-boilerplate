require('isomorphic-fetch');

import { addTodo } from 'ducks/todo';
import { setSnackbar } from 'ducks/snackbar';
import { handleFetchErrors } from 'utils/fetchHelper';

const REQUEST_RANDOM_USER = 'react-boilerplate/random-user/REQUEST_RANDOM_USER';

function requestRandomUser() {
	return {
		type: REQUEST_RANDOM_USER
	};
}

function requestRandomUserError(err) {
	return setSnackbar({
		label: `Error: "${err}"`,
		timeout: 5000
	});
}

function receivedRandomUser(todoName) {
	return setSnackbar({
		label: `Added "${todoName}"`,
		icon: 'add'
	});
}

export function fetchRandomUser() {
	return dispatch => {
		dispatch(requestRandomUser());

		return fetch('https://randomuser.me/api/')
		.then(handleFetchErrors)
		.then(res => res.json())
		.then(json => {
			const resName = json.results[0].user.name;
			const todoName = `${resName.title} ${resName.first} ${resName.last}`;
			dispatch(receivedRandomUser(todoName));
			dispatch(addTodo(todoName));
		})
		.catch(err => {
			dispatch(requestRandomUserError(err.message));
		});
	};
}
