import React from 'react';
import functional from 'react-functional';

const Link = ({ active, children, onClick }) => {
	if (active) {
		return (<span>{children}</span>);
	}
	return (
		<a href="#" onClick={(e) => {
			e.preventDefault();
			onClick();
		}}>
			{children}
		</a>
	);
};

export default functional(Link);
