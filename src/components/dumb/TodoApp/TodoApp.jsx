import React from 'react';

import { Card } from 'react-toolbox/lib/card';

import AddTodoContainer from 'components/smart/AddTodoContainer/AddTodoContainer';
import TodoList from 'components/smart/TodoList/TodoList';
import Footer from 'components/dumb/Footer/Footer';
import Snackbar from 'components/smart/Snackbar/Snackbar';

import styles from './TodoApp.scss';

const TodoApp = () => {
	return (
		<Card className={ styles.card }>
			<AddTodoContainer />
			<TodoList />
			<Footer />
			<Snackbar />
		</Card>
	);
};

export default TodoApp;
