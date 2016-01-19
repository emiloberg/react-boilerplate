import React from 'react';
import functional from 'react-functional';

import { ListItem } from 'react-toolbox/lib/list';

const Todo = ({ onClick, completed, text }) => {
	const icon = completed ? 'done' : 'crop_din';
	return (
		<ListItem
			leftIcon={icon}
			caption={text}
			onClick={onClick}
		/>
	);
};

export default functional(Todo);
