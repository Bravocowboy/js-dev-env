// This file isn't transpiled, sp must use CommonJS and ES5

// Refister babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};