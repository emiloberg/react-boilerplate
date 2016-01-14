import React from 'react';
import functional from 'react-functional';

import FilterLink from 'components/smart/FilterLink/FilterLink';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from 'ducks/visibilityFilter';

const Footer = () => {
	return (
		<p>
			Show:
			{' '} <FilterLink filter={SHOW_ALL}>All</FilterLink>
			{' '} <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
			{' '} <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
		</p>
	);
};

export default functional(Footer);
