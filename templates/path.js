'use strict'

const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());

function resolveApp(relativePath){
	return path.resolve(appDirectory,relativePath);
}

module.exports = {
	appSrc: resolveApp('app'),
	templateComponents: resolveApp('templates/components'),
	srcCompenents: resolveApp('app/src/components')
}