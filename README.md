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

#### Debug Mode
* Redux DevTools enabled
* Inline CSS (for hot loading)

#### CLI commands

```
# Start in development mode (available at http://localhost:3000)
npm start

# Start in production mode (available at http://localhost:3000)
npm run start:prod

# Run ESLint
npm run lint

# Run tests & lint & create code coverage report
npm test

# Continiously run tests & lint & create code coverage report
npm run test:watch
```


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

### Styling

Uses [CSS Modules](https://github.com/css-modules/css-modules) for modular and reusable CSS without conflicts or global scope.

Uses [PostCSS](https://github.com/postcss/postcss) which can load plugins to transform the CSS. Currently installed plugins:

* [Autoprefixer](https://github.com/postcss/autoprefixer) - Parse CSS and add vendor prefixes to rules by Can I Use. Autoprefixer uses [browserslist](https://github.com/ai/browserslist) which means that you can specify which browsers you want to support by editing the `browserslist` file in the root of the app. See [browserslist documentation](https://github.com/ai/browserslist#queries) for syntax.

### Webpack

Depending on the environment variable `NODE_ENV` different Webpack configurations will be loaded. Valid values are `development` and `test`, if empty or something else, _production_ mode is assumed.

All webpack configurations live in `/webpack/`. The individual `webpack.config.dev.js`, `webpack.config.test.js` and `webpack.config.prod.js` files add/deletes configurations from the inherited `webpack.config.js`.