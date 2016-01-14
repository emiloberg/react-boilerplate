//import React from 'react';
import { connect } from 'react-redux';
import { addTodo, fetchRandomUser } from 'actionCreators';
import AddTodo from 'components/dumb/AddTodo/AddTodo';

const mapDispatchToProps = (dispatch) => {
	return {
		onAddClick: (textInput) => {
			dispatch(addTodo(textInput));
		},
		onRandomClick: () => {
			dispatch(fetchRandomUser());
		}
	};
};

const AddTodoContainer = connect(null, mapDispatchToProps)(AddTodo);

export default AddTodoContainer;

