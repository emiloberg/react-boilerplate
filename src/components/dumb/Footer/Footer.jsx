import React from 'react';
import functional from 'react-functional';

import AppBar from 'react-toolbox/lib/app_bar';

import FilterLink from 'components/smart/FilterLink/FilterLink';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from 'ducks/visibilityFilter';

import styles from './Footer.scss';

const Footer = () => {
	return (
		<AppBar className={ styles.footer }>
			{__('Show')}:
			{' '} <FilterLink filter={SHOW_ALL}>{__('All')}</FilterLink>
			{' '} <FilterLink filter={SHOW_ACTIVE}>{__('Active')}</FilterLink>
			{' '} <FilterLink filter={SHOW_COMPLETED}>{__('Completed')}</FilterLink>
		</AppBar>
	);
};

export default functional(Footer);
