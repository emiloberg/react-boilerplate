import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { todoApp } from './reducer';
import { Provider, connect } from 'react-redux'



// "Action Creators" - call them this.
// Separate these as they describe all actions which can be done
// and are thus documenting the software

let nextTodoId = 0;
const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text
	};
};

const setVisibilityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	};
};

const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	};
};

// "Components"


const Todo = ({ onClick, completed, text }) => (
	<li
		onClick={onClick}
		style={{ textDecoration: completed ? 'line-through' : 'none' }}
	>
	 	{text}
	</li>
);

const TodoList = ({ todos, onTodoClick }) => (
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

const getVisibleTodos = (todos, filter) => {
	switch(filter) {
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_COMPLETED':
			return todos.filter(curTodo => curTodo.completed);
		case 'SHOW_ACTIVE':
			return todos.filter(curTodo => !curTodo.completed);
	}
};


let AddTodo = ({ dispatch }) => { //Second argument is the context!
	let input;
	return (
		<div>
			{/* bind the input DOM element to this.newTodoInput
			 so that we can grab a hold of its value further down */}
			<input ref={ node => { input = node; } } />

			<button onClick={() => {
				dispatch(addTodo(input.value));
				input.value = '';
			}}>
			Add Todo
			</button>
		</div>
	)
};
// First argument of connect is mapStateToProps. But as we do not need any state for rendering the AddTodo
// we don't need to subscribe to the store (it would just be wasteful), therefor we can send in 'null', e.g.
// AddTodo = connect(null, somethingElse);
// The second argument if connect is mapDispatchToProps. But as we're not sending in any callback properties, but
// rather just the 'dispatch' object itself, we could write:
// AddTodo = connect(null, dispatch => { return { dispatch }; })
// However, as this is a common use case. When sending in a falsy value it always returns the 'dispatch' object
// therefor we could write
// AddTodo = connect(null, null);
// or simple:
AddTodo = connect()(AddTodo);


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

// mapStateToLinkProps gives the components props as second argument
const mapStateToLinkProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	}
};
const mapDispatchToLinkProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter));
		}
	}
};
const FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);

const Footer = () => {
	return (
		<p>
			Show:
			{' '} <FilterLink filter="SHOW_ALL">All</FilterLink>
			{' '} <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
			{' '} <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
		</p>
	)
};

const mapStateToTodoListProps = (state) => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	};
};
const mapDispatchToTodoListProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id))
		}
	};
};
// This takes care of subscribing to store, specifying content type etc.
// TodoList is the name of the component to pass in the props to.
// It gets the store from being wrapped in <Provider store={createStore(todoApp)} >
const VisibleTodoList = connect(mapStateToTodoListProps, mapDispatchToTodoListProps)(TodoList);

const TodoApp = () => {
	return (
		<div>
			<AddTodo />
			<VisibleTodoList />
			<Footer />
		</div>
	);
};


import { createStore } from 'redux';

ReactDOM.render(
	<Provider store={createStore(todoApp)} >
		<TodoApp  />
	</Provider>,
	document.getElementById('root')
);

