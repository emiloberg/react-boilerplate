import expect from 'expect';
import * as actions from '../../src/nested/secondToBeTested';

describe('actions', () => {
	it('second should create an action to add a todo', () => {
		const text = 'Finish docs';
		const expectedAction = {
			type: 'ADD_TODO',
			text
		};
		expect(actions.addTodo(text)).toEqual(expectedAction)
	})
});
