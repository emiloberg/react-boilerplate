import React from 'react';
import { connect } from 'react-redux';

import Todo from 'components/TodoList/components/Todo';
import { toggleTodo } from 'actionCreators';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from 'state';

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case SHOW_ALL:
			return todos;
		case SHOW_COMPLETED:
			return todos.filter(curTodo => curTodo.completed);
		case SHOW_ACTIVE:
			return todos.filter(curTodo => !curTodo.completed);
		default:
			return todos;
	}
};

let TodoList = ({ todos, onTodoClick }) => (
	<ul>
		{todos.map(todo =>
				<Todo
					key={todo.id}
					{...todo}
					onClick={() => onTodoClick(todo.id)}
					/>
		)}
	</ul>
);

const mapStateToTodoListProps = (state) => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	};
};
const mapDispatchToTodoListProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id));
		}
	};
};
// This takes care of subscribing to store, specifying content type etc.
// TodoList is the name of the component to pass in the props to.
// It gets the store from being wrapped in <Provider store={createStore(todoApp)} >
TodoList = connect(mapStateToTodoListProps, mapDispatchToTodoListProps)(TodoList);

export default TodoList;
