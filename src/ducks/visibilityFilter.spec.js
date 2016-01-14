import expect from 'expect';

import { Map } from 'immutable';

import configureStore from 'store/configureStore.prod';
import { setVisibilityFilter } from 'ducks/visibilityFilter';

describe('actionCreator: visibilityFilter', () => {
	describe('set "show active"', () => {
		const store = configureStore();
		store.dispatch(setVisibilityFilter('react-boilerplate/visibility-filter/SHOW_ACTIVE'));
		const actual = store.getState();

		it('should be changed', () => {
			expect(actual.visibilityFilter.get('filter')).toEqual('react-boilerplate/visibility-filter/SHOW_ACTIVE');
		});

		it('should be an immutable map', () => {
			expect(Map.isMap(actual.visibilityFilter)).toEqual(true);
		});
	});

	describe('set "show completed"', () => {
		const store = configureStore();
		store.dispatch(setVisibilityFilter('react-boilerplate/visibility-filter/SHOW_COMPLETED'));
		const actual = store.getState();

		it('should be changed', () => {
			expect(actual.visibilityFilter.get('filter')).toEqual('react-boilerplate/visibility-filter/SHOW_COMPLETED');
		});

		it('should be an immutable map', () => {
			expect(Map.isMap(actual.visibilityFilter)).toEqual(true);
		});
	});

	describe('set "show all"', () => {
		const store = configureStore();
		store.dispatch(setVisibilityFilter('react-boilerplate/visibility-filter/SHOW_ALL'));
		const actual = store.getState();

		it('should be changed', () => {
			expect(actual.visibilityFilter.get('filter')).toEqual('react-boilerplate/visibility-filter/SHOW_ALL');
		});

		it('should be an immutable map', () => {
			expect(Map.isMap(actual.visibilityFilter)).toEqual(true);
		});
	});
});
