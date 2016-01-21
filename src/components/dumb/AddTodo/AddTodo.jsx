import React from 'react';
import functional from 'react-functional';

import Button from 'react-toolbox/lib/button';

import MdInput from 'components/dumb/mdInput/mdInput';

import styles from './AddTodo.scss';

const AddTodo = ({ onAddClick, onRandomClick }) => {
	let input;
	return (
		<div>
			<MdInput
				className={ styles.todoInput }
				ref={ node => { input = node; }}
				label={__('What needs to be done?')}
				onEnterPress={(value) => {
					onAddClick(value);
				}}
			/>

			<Button
				label={__('Add todo')}
				raised
				primary
				onClick={(e) => {
					e.preventDefault();
					onAddClick(input.state.inputValue);
					input.setState({ inputValue: '' });
				}}
			/>

			<Button
				primary={true}
				onClick={(e) => {
					e.preventDefault();
					onRandomClick();
				}}>
				{__('Add Random')}
			</Button>
		</div>
	);
};

export default functional(AddTodo);
