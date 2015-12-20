import React from 'react';
import functional from 'react-functional';

import styles from './Link.css';

const Link = ({ active, children, onClick }) => {
	if (active) {
		return (<span>{children}</span>);
	}
	return (
		<a className={ styles.text } href="#" onClick={(e) => {
			e.preventDefault();
			onClick();
		}}>
			{children}
		</a>
	);
};

export default functional(Link);
