const fs = require('fs');
const paths = require('../path');

const pageComponents = fs.readdirSync(paths.srcCompenents);

function componentExists(comp) {
	return pageComponents.indexOf(comp) >= 0;
}

module.exports = componentExists;