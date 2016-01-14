require('isomorphic-fetch');

import { addTodo } from 'ducks/todo';
import { handleFetchErrors } from 'utils/fetchHelper';

const REQUEST_RANDOM_USER = 'react-boilerplate/random-user/REQUEST_RANDOM_USER';
const REQUEST_RANDOM_USER_ERROR = 'react-boilerplate/random-user/REQUEST_RANDOM_USER_ERROR';
const RECEIVED_RANDOM_USER = 'react-boilerplate/random-user/RECEIVED_RANDOM_USER';

function requestRandomUser() {
	return {
		type: REQUEST_RANDOM_USER
	};
}

function requestRandomUserError(err) {
	return {
		type: REQUEST_RANDOM_USER_ERROR,
		message: err
	};
}

function receivedRandomUser() {
	return {
		type: RECEIVED_RANDOM_USER
	};
}

export function fetchRandomUser() {
	return dispatch => {
		dispatch(requestRandomUser());

		return fetch('https://randomuser.me/api/')
		.then(handleFetchErrors)
		.then(res => res.json())
		.then(json => {
			const resName = json.results[0].user.name;
			dispatch(receivedRandomUser());
			dispatch(addTodo(`${resName.title} ${resName.first} ${resName.last}`));
		})
		.catch(err => {
			dispatch(requestRandomUserError(err.message));
		});
	};
}
