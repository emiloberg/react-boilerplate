import React from 'react';
import functional from 'react-functional';

import { Button } from 'react-toolbox/lib/button';

const Link = ({ active, children, onClick }) => {
	return (
		<Button
			disabled={active}
			onClick={(e) => {
				e.preventDefault();
				onClick();
			}}
		>
			{children}
		</Button>
	);
};

export default functional(Link);
