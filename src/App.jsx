//import React, { Component } from 'react';
//
//export default class App extends Component {
//  render() {
//    return (
//      <h1>Hello, world.</h1>
//    );
//  }
//}





//import { counter } from './counter';
//import { createStore } from 'redux';
//import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

var React = require('react');
var Redux = require('redux');
var ReactDOM = require('react-dom');


const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
};

const Counter = ({
	value,
	onIncrement,
	onDecrement
	}) => (
	<div>
		<h1>{value}</h1>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
	</div>
);

const { createStore } = Redux;
const store = createStore(counter);

const render = () => {
	ReactDOM.render(
		<Counter
			value={store.getState()}
			onIncrement={() =>
        store.dispatch({
          type: 'INCREMENT'
        })
      }
			onDecrement={() =>
        store.dispatch({
          type: 'DECREMENT'
        })
      }
			/>,
		document.getElementById('root')
	);
};

store.subscribe(render);
render();
