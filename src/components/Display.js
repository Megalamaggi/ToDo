import { Box } from '@mui/material';
import React from 'react';
import Delete from './Button/Delete';

const Display = (context) => {
	const { state: { toDo }} = context;

	return toDo.map((value, key) =>
		<Box key={ key }>
			<Box sx={ { display: 'inline-block' } }>{value.text}</Box>
			<Delete { ...{ ...context, data: value } }/>
		</Box>);
};

export default Display;
