import React from 'react';

import AddTodoContainer from 'components/smart/AddTodoContainer/AddTodoContainer';
import TodoList from 'components/smart/TodoList/TodoList';
import Footer from 'components/dumb/Footer/Footer';

const TodoApp = () => {
	return (
		<div>
			<AddTodoContainer />
			<TodoList />
			<Footer />
		</div>
	);
};

export default TodoApp;
