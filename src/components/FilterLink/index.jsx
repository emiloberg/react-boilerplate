import React from 'react';
import { connect } from 'react-redux'

import { setVisibilityFilter } from 'actionCreators';
import Link from 'components/FilterLink/components/Link';

// mapStateToLinkProps gives the components props as second argument
const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	}
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter));
		}
	}
};
const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
