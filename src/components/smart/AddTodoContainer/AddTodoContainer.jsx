//import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from 'actionCreators';
import AddTodo from 'components/dumb/AddTodo/AddTodo';

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (textInput) => {
			dispatch(addTodo(textInput));
		}
	};
};

const AddTodoContainer = connect(null, mapDispatchToProps)(AddTodo);

export default AddTodoContainer;

