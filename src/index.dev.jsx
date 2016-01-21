import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';

import TodoApp from 'components/dumb/TodoApp/TodoApp';

import configureStore from 'store/configureStore.dev';
import DevTools from 'utils/DevTools';

import styles from './index.dev.scss';

const store = configureStore();

const Index = () => {
	return (
		<Provider store={store} >
			<div>
				<TodoApp />
				<div className={ styles.devFooter } >Development mode in {LANGUAGE}</div>
				<DevTools />
			</div>
		</Provider>

	);
};

export default Index;
