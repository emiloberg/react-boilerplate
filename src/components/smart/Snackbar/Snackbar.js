import { connect } from 'react-redux';

import Snackbar from 'react-toolbox/lib/snackbar';

import { hideSnackbar } from 'ducks/snackbar';

const mapStateToProps = ({ snackbar: {
	label,
	icon,
	timeout = 2000,
	active
} }) => {
	return {
		label,
		icon,
		timeout,
		active
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTimeout: () => {
			dispatch(hideSnackbar());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Snackbar);
