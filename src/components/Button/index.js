import React from 'react';
import Add from './Add';
import Update from './Update';

const Button = (context) => {
	const { state: { update }} = context;

	return	update
		? <Update { ...context }/>
		: <Add { ...context }/>;
};

export default Button;
