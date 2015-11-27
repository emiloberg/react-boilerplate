import expect from 'expect';
import {todos} from '../src/reducer.jsx';

var deepFreeze = require('deep-freeze');

describe('reducer', () => {
	it('ADD_TODO', () => {
		const stateBefore = [];
		const action = {
			type: 'ADD_TODO',
			id: 0,
			text: 'Learn Redux'
		};
		const stateAfter = [{
			id: 0,
			text: 'Learn Redux',
			completed: false
		}];

		deepFreeze(stateBefore);
		deepFreeze(action);

		expect(todos(stateBefore, action)).toEqual(stateAfter);
	});

	it('TOGGLE_TODO', () => {
		const stateBefore = [
			{
				id: 0,
				text: 'Learn Redux',
				completed: false
			},
			{
				id: 1,
				text: 'Go shopping',
				completed: false
			}
		];
		const action = {
			type: 'TOGGLE_TODO',
			id: 1
		};
		const stateAfter = [
			{
				id: 0,
				text: 'Learn Redux',
				completed: false
			},
			{
				id: 1,
				text: 'Go shopping',
				completed: true
			}
		];

		deepFreeze(stateBefore);
		deepFreeze(action);

		expect(todos(stateBefore, action)).toEqual(stateAfter);

	})
});
