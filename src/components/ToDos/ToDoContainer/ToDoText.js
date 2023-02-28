import { Box } from '@mui/material';
import React from 'react';

const ToDoText = (context) => {
	const { data: { value }, setState, state } = context;

	return (
		<Box
			className="toDoText"
			onClick={ () => setState({
				...state,
				currentValue: value.text,
				update: value,
			}) }
		> {value.text}
		</Box>
	);
};

export default ToDoText;
