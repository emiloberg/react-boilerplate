import React from 'react';

import AddTodo from 'components/AddTodo'
import TodoList from 'components/TodoList'
import Footer from 'components/Footer'

const TodoApp = () => {
	return (
		<div>
			<AddTodo />
			<TodoList />
			<Footer />
		</div>
	);
};

export default TodoApp;
