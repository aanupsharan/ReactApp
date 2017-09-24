import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Global/Menu';
import Anchor from './components/Anchor/Anchor';

ReactDOM.render(
	<Menu />,
	document.getElementById('header')
);
ReactDOM.render(
	<Anchor />,
	document.getElementById('footer')
);

