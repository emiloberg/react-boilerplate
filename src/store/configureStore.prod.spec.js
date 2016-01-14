import expect from 'expect';

import { List, Map } from 'immutable';

import configureStore from 'store/configureStore.prod';

describe('configureStore', () => {
		const store = configureStore();
		const actual = store.getState();

		it('should contain an immutable list of quotes', () => {
			expect(List.isList(actual.todos)).toEqual(true);
		});

		it('list of quotes should be empty', () => {
			expect(actual.todos.size).toEqual(0);
		});

		it('should contain an immutable map with visibility filter', () => {
			expect(Map.isMap(actual.visibilityFilter)).toEqual(true);
		});

		it('should have visibility filter set to "show all"', () => {
			expect(actual.visibilityFilter.get('filter')).toEqual('react-boilerplate/visibility-filter/SHOW_ALL');
		});
});
