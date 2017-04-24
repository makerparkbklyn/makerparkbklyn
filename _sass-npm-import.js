var path = require('path');
var findup = require('findup-sync');

var cache = {};

function removeExtension(filename) {
	return filename.substr(0, filename.lastIndexOf('.')) || filename;
}

function SASSNPMImporter(url, prev, done) {
	// Fall back to old URL
	var newUrl = url;

	try {
		if (cache[url]) {
			newUrl = cache[url];
			return;
		}

		if (url[0] === '.' || url.indexOf('/') !== -1) {
			return;
		}

		var modulePath = findup(path.join('node_modules', url), {
			cwd: path.dirname(prev),
			nocase: true
		});

		var moduleJson = require(path.join(modulePath, 'package.json'));

		var filename = null;

		if ( /^.*\.(css|sass|scss)$/.test(moduleJson.main) ) {
			filename = moduleJson.main;
		}
		else if ( /^.*\.(css|sass|scss)$/.test(moduleJson.mainSass) ) {
			filename = moduleJson.mainSass;
		}
		else if ( /^.*\.(css|sass|scss)$/.test(moduleJson.style) ) {
			filename = moduleJson.style;
		}
		else {
			return;
		}

		newUrl = path.join(modulePath, removeExtension(filename));

		// console.log('SASS NPM Import: ' + newUrl + "\n");

	}
	catch (e) {
		// Ignore error
	}
	finally {
		cache[url] = newUrl;
		done({ file: newUrl });
	}
}

module.exports = SASSNPMImporter;
