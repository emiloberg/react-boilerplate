import expect from 'expect';

import { Map } from 'immutable';

import configureStore from 'store/configureStore.prod';
import { setVisibilityFilter } from 'actionCreators';

describe('actionCreator: setVisibilityFilter', () => {
	describe('set "show active"', () => {
		const store = configureStore();
		store.dispatch(setVisibilityFilter('SHOW_ACTIVE'));
		const actual = store.getState();

		it('should be changed', () => {
			expect(actual.visibilityFilter.get('filter')).toEqual('SHOW_ACTIVE');
		});

		it('should be an immutable map', () => {
			expect(Map.isMap(actual.visibilityFilter)).toEqual(true);
		});
	});

	describe('set "show completed"', () => {
		const store = configureStore();
		store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));
		const actual = store.getState();

		it('should be changed', () => {
			expect(actual.visibilityFilter.get('filter')).toEqual('SHOW_COMPLETED');
		});

		it('should be an immutable map', () => {
			expect(Map.isMap(actual.visibilityFilter)).toEqual(true);
		});
	});

	describe('set "show all"', () => {
		const store = configureStore();
		store.dispatch(setVisibilityFilter('SHOW_ALL'));
		const actual = store.getState();

		it('should be changed', () => {
			expect(actual.visibilityFilter.get('filter')).toEqual('SHOW_ALL');
		});

		it('should be an immutable map', () => {
			expect(Map.isMap(actual.visibilityFilter)).toEqual(true);
		});
	});
});
