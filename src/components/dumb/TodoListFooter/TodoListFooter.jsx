import React from 'react';
import functional from 'react-functional';

import styles from './TodoListFooter.scss';

const TodoListFooter = ({ noOfTodos }) => {
	return (
		<div className={ styles.todoListFooter }>
			{(() => {
				if (noOfTodos === 1) {
					return __('Now showing %1 todo').replace('%1', noOfTodos);
				}
				return __('Now showing %1 todos').replace('%1', noOfTodos);
			})()}
		</div>
	);
};

export default functional(TodoListFooter);
