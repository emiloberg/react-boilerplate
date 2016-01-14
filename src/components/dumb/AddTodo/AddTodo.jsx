import React from 'react';
import functional from 'react-functional';

const AddTodo = ({ onAddClick, onRandomClick }) => {
	let input;
	return (
		<div>
			{/* bind the input DOM element to this.newTodoInput
			 so that we can grab a hold of its value further down */}
			<input ref={ node => { input = node; } } />

			<button onClick={(e) => {
				e.preventDefault();
				onAddClick(input.value);
				input.value = '';
			}}>
				Add Todo
			</button>
			<button
				onClick={(e) => {
					e.preventDefault();
					onRandomClick();
				}}>
				Async Add Random Todo from Network
			</button>
		</div>
	);
};

export default functional(AddTodo);
