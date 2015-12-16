import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from 'actionCreators';

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

export default AddTodo;

