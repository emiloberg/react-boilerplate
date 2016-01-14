import { connect } from 'react-redux';

import { setVisibilityFilter } from 'ducks/visibilityFilter';
import Link from 'components/dumb/Link/Link';

// mapStateToLinkProps gives the components props as second argument
const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter.get('filter')
	};
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter));
		}
	};
};
const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
