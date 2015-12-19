# react-boilerplate

### What is this?
Minimal React boilerplate

#### Stage 1 does:
* ES6 support
* JSX support
* Webpack Dev server with hot loading (changes are reflected in your browser as you press save)
* Linting with ESLint

#### Stage 2 does:
* _Very_ simple testing with Mocha

### Install

```
npm install
```

### Running

```
DEBUG=true npm start
```
to start in debug mode (Redux DevTools enabled).

or 

```
npm start
```
to start in production mode.

Then open [http://localhost:3000](http://localhost:3000)


### Docs

#### Functional components
This app uses [stateless functional components](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components) (a.k.a _pure function components_). There are however a few caveats doing it this one.

1. Currently, react hot loader can not hot load statless functional components

2. Immutable object can give a performance benefit as you, in the `didComponentUpdate` lifecycle method, can do shallow `immutableObject === immutableObject` checks. However, as statless functional components has no lifecycle methods, we can not use this.

Fear not. Included in this package is [react-functional](https://www.npmjs.com/package/react-functional) which is a small tool which adds lifecycle methods to stateless functional components.

To make a component hot loadable, just add 

```
import functional from 'react-functional';
```

and wrap your component with it. E.g. 

```
export default functional(YourComponent);
```

You can also use this wrapper to add lifecycle methods (such as `didComponentUpdate`), [see the documentation](https://www.npmjs.com/package/react-functional).


### Linting

```
npm run lint
```