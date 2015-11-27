/*







		Sett nummer 17, ska kolla på nummer 18







*/


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { todoApp } from './reducer';

const store = createStore(todoApp);

let nextTodoId = 0;

class TodoApp extends Component {
	render() {
		return (
			<div>
				{/* bind the input DOM element to this.newTodoInput
				 so that we can grab a hold of its value further down */}
				<input ref={ node => { this.newTodoInput = node; } } />

				<button onClick={() => {
					store.dispatch({
						type: 'ADD_TODO',
						text: this.newTodoInput.value,
						id: nextTodoId++
					});
					this.newTodoInput.value = '';
				}}>
					Add Todo
				</button>

				<ul>
					{
						this.props.todos.map(todo =>
							<li key={todo.id}>
								{todo.text}
							</li>
						)
					}
				</ul>
			</div>
		);
	}
}

const render = () => {
	ReactDOM.render(
		<TodoApp todos={store.getState().todos } />,
		document.getElementById('root')
	);
};
store.subscribe(render);
render();

