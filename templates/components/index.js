const componentExist = require('../utils/componentExists');
const paths = require('../path');

module.exports = {
	description: 'add an component',
	prompts:[{
		type: 'input',
		name: 'name',
		message: 'What is the name of the Component?',
		validate: (value) => {
			console.log("value1 ::: ",value);
			if((/.+/).test(value)){
				console.log("value2 ::: ",value);
				return componentExist(value) ? 'Component exists with the name' : true;
			}
			console.log("value3 ::: ",value);
			return 'The name is required';
		}
	}],
	actions:[{
		type: 'add',
		templateFile: `${paths.templateComponents}/es6.js.hbs`,
		path: `${paths.srcCompenents}/{{ properCase name}}/{{properCase name}}.jsx`
	}]
};