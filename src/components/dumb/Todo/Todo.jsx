import React from 'react';
import functional from 'react-functional';

const Todo = ({ onClick, completed, text }) => (
	<li
		onClick={onClick}
		style={{ textDecoration: completed ? 'line-through' : 'none' }}
		>
		{text}
	</li>
);

export default functional(Todo);
