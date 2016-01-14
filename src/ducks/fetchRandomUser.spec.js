import * as chai from 'chai';
chai.should();
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

const fetchMock = require('fetch-mock');

//import chaiThings from 'chai-things';
//chai.use(chaiThings);

import { fetchRandomUser } from 'ducks/fetchRandomUser';

describe('duck: fetchRandomUser', () => {
	it('should get random user from remote service', (done) => {
		const spyDispatch = sinon.spy();
		const mockedResponse = {
			results: [{
				user: {
					name: {
						title: 'Lord',
						first: 'Emil',
						last: 'Oberg'
					}
				}
			}]
		};
		fetchMock.mock('https://randomuser.me/api/', mockedResponse);

		fetchRandomUser()(spyDispatch);

		setTimeout(() => {
			spyDispatch.should.have.callCount(3);
			spyDispatch.should.have.been.calledWith(sinon.match({ type: 'react-boilerplate/random-user/REQUEST_RANDOM_USER' }));
			spyDispatch.should.have.been.calledWith(sinon.match({ type: 'react-boilerplate/random-user/RECEIVED_RANDOM_USER' }));
			spyDispatch.should.have.been.calledWith(sinon.match({
				type: 'react-boilerplate/todo/ADD_TODO',
				text: 'Lord Emil Oberg',
				id: sinon.match.number
			}));
			spyDispatch.should.not.have.been.calledWith(sinon.match({ type: 'react-boilerplate/random-user/REQUEST_RANDOM_USER_ERROR' }));
			fetchMock.called('https://randomuser.me/api/').should.equal(true);

			spyDispatch.reset();
			fetchMock.restore();
			done();
		}, 0);
	});

	it('should fail if server responds with 400', (done) => {
		const spyDispatch = sinon.spy();
		const mockedResponse = {
			status: 400,
			body: {}
		};
		fetchMock.mock('https://randomuser.me/api/', mockedResponse);

		fetchRandomUser()(spyDispatch);

		setTimeout(() => {
			spyDispatch.should.have.callCount(2);
			spyDispatch.should.have.been.calledWith(sinon.match({
				type: 'react-boilerplate/random-user/REQUEST_RANDOM_USER_ERROR',
				message: 'Error 400'
			}));
			spyDispatch.should.not.have.been.calledWith(sinon.match({ type: 'react-boilerplate/random-user/RECEIVED_RANDOM_USER' }));
			spyDispatch.should.have.been.calledWith(sinon.match({ type: 'react-boilerplate/random-user/REQUEST_RANDOM_USER' }));
			fetchMock.called('https://randomuser.me/api/').should.equal(true);

			spyDispatch.reset();
			fetchMock.restore();
			done();
		}, 0);
	});
});
