import React from 'react';
import { Provider } from 'react-redux';

import TodoApp from 'components/dumb/TodoApp/TodoApp';

import configureStore from 'envSpecific/configureStore';
import DevTools from 'utils/DevTools';

const store = configureStore();

const Index = () => {
	return (
		<Provider store={store} >
			<div>
				<TodoApp />
				<DevTools />
			</div>
		</Provider>

	);
};

export default Index;
