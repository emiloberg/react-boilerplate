import expect from 'expect';

import configureStore from 'store/configureStore.prod';
import { addTodo, toggleTodo } from 'actionCreators';

describe('actionCreator: toggleTodo', () => {
		const store = configureStore();

		store.dispatch(addTodo('First Todo', true));
		store.dispatch(addTodo('Second Todo'));
		store.dispatch(addTodo('Third Todo'));

		store.dispatch(toggleTodo(1));

		const actual = store.getState();

		it('should be changed to completed', () => {
			expect(actual.todos.get(1).get('completed')).toEqual(true);
		});

		it('should leave rest unchanged', () => {
			expect(actual.todos.get(0).get('completed')).toEqual(false);
			expect(actual.todos.get(2).get('completed')).toEqual(false);
		});
});
