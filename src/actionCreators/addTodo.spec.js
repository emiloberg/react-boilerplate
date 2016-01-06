import expect from 'expect';

import { List, Map } from 'immutable';

import configureStore from 'store/configureStore.prod';
import { addTodo } from 'actionCreators';

describe('actionCreator: addTodo', () => {
	describe('add 1 todo', () => {
		const store = configureStore();

		store.dispatch(addTodo('myText', true));

		const actual = store.getState();
		const expected = [{
			'id': 0,
			'text': 'myText',
			'completed': false
		}];

		it('should be added', () => {
			expect(actual.todos.toJS()).toEqual(expected);
		});

		it('should have 1 todo', () => {
			expect(actual.todos.size).toEqual(1);
		});

		it('should be an immutable list', () => {
			expect(List.isList(actual.todos)).toEqual(true);
		});

		it('should be a list of immutable maps', () => {
			expect(Map.isMap(actual.todos.get(0))).toEqual(true);
		});
	});

	describe('add 2 todos', () => {
		const store = configureStore();

		store.dispatch(addTodo('First Todo', true));
		store.dispatch(addTodo('Second Todo'));

		const actual = store.getState();
		const expected = [{
			'id': 0,
			'text': 'First Todo',
			'completed': false
		}, {
			'id': 1,
			'text': 'Second Todo',
			'completed': false
		}];

		it('should be added', () => {
			expect(actual.todos.toJS()).toEqual(expected);
		});

		it('should have 2 todos', () => {
			expect(actual.todos.size).toEqual(2);
		});

		it('should be an immutable list', () => {
			expect(List.isList(actual.todos)).toEqual(true);
		});

		it('should be a list of immutable maps', () => {
			expect(Map.isMap(actual.todos.get(1))).toEqual(true);
		});
	});
});
