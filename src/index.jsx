import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import reducers from 'reducers';
import TodoApp from 'components/TodoApp';

ReactDOM.render(
	<Provider store={createStore(reducers)} >
		<TodoApp  />
	</Provider>,
	document.getElementById('root')
);
