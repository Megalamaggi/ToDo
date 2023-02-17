import { Box } from '@mui/material';
import React from 'react';
import Delete from './Button/Delete';
import CheckBox from './CheckBox';
import ToDoText from './ToDoText';

const Display = (context) => {
	const { state: { toDos }} = context;

	return toDos.map((value, key) =>
		<Box key={ key }>
			<CheckBox { ...{ ...context, data: value } }/>
			<ToDoText { ...{ ...context, data: value } }/>
			<Delete	{ ...{ ...context, data: value } }/>
		</Box>);
};

export default Display;
