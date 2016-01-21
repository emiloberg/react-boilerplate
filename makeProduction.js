#!/usr/bin/env node

/*eslint no-var:0, vars-on-top:0, func-names:0, no-console:0, no-unused-expressions:0*/
/*global exec, rm*/

/**
 * This helper will scan the src/language directory for all language files
 * and then spawn a webpack production build for each language.
 */

require('shelljs/global');
var fs = require('fs');
var path = require('path');

var languages = fs.readdirSync('src/language').map(function(language) {
	var languageParts = path.parse(language);
	if (languageParts.ext === '.json') {
		return languageParts.name;
	}
	return false;
}).filter(function (language) {
	return language;
});

languages.forEach(function (language) {
	console.log('Running Webpack for language: ' + language);
	exec('CLEANEDDIST=true BUILDLANG=' + language + ' NODE_ENV=production node_modules/webpack/bin/webpack.js --config webpack/webpack.config.js', { silent: false, async: false }).output;
	console.log('\n');
});

console.log('All done, created files for language(s): ' + languages.join(', '));
