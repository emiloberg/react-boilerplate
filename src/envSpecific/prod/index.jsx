import React from 'react';
import { Provider } from 'react-redux';

import TodoApp from 'components/dumb/TodoApp/TodoApp';

import configureStore from 'envSpecific/configureStore';

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
