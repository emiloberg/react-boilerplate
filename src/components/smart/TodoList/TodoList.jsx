import React from 'react';
import { connect } from 'react-redux';

import { List } from 'react-toolbox/lib/list';

import Todo from 'components/dumb/Todo/Todo';
import { toggleTodo } from 'ducks/todo';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from 'ducks/visibilityFilter';

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case SHOW_ALL:
			return todos;
		case SHOW_COMPLETED:
			return todos.filter(curTodo => curTodo.get('completed'));
		case SHOW_ACTIVE:
			return todos.filter(curTodo => !curTodo.get('completed'));
		default:
			return todos;
	}
};

let TodoList = ({ todos, onTodoClick }) => (
	<List>
		{todos.map(todo =>
			<Todo
				key={todo.get('id')}
				text={todo.get('text')}
				completed={todo.get('completed')}
				onClick={() => onTodoClick(todo.get('id'))}
			/>
		)}
	</List>
);

const mapStateToTodoListProps = (state) => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter.get('filter'))
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
