'use strict'

const fs = require('fs');
const componentGenerator = require('./components/index.js');

module.exports = (plop) => {
	plop.setGenerator('component',componentGenerator);
}