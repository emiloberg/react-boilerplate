import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';
import DevTools from 'utils/DevTools';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
	applyMiddleware(thunk),
	DevTools.instrument() // Include this middleware last of all middlewares.
)(createStore);

export default function configureStore(initialState) {
	const store = finalCreateStore(rootReducer, initialState);

	// Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
	if (module.hot) {
		module.hot.accept('../reducers', () =>
			store.replaceReducer(require('../reducers')/* .default if you use Babel 6+ */)
		);
	}

	return store;
}
