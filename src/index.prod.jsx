import React from 'react';
import { Provider } from 'react-redux';

import TodoApp from 'components/dumb/TodoApp/TodoApp';

import configureStore from 'store/configureStore.prod';

const store = configureStore();

const Index = () => {
	return (
		<Provider store={store} >
			<div>
				<TodoApp />
			</div>
		</Provider>

	);
};

export default Index;
