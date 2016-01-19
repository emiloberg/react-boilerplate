export const NOTIFY_SNACKBAR = 'react-boilerplate/snackbar/SET_SNACKBAR';
export const HIDE_SNACKBAR = 'react-boilerplate/snackbar/HIDE_SNACKBAR';

export function setSnackbar({ label, icon, timeout }) {
	return {
		type: NOTIFY_SNACKBAR,
		label,
		icon,
		timeout
	};
}

export function hideSnackbar() {
	return {
		type: HIDE_SNACKBAR
	};
}

const initState = { label: '' };
export default function reducer(state = initState, action) {
	switch (action.type) {
		case NOTIFY_SNACKBAR:
			return {
				...state,
				label: action.label,
				icon: action.icon,
				timeout: action.timeout,
				active: true
			};
		case HIDE_SNACKBAR:
			return {
				...state,
				active: false
			};
		default:
			return state;
	}
}
