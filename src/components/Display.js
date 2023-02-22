import { Box } from '@mui/material';
import React from 'react';
import TodoManager from '../services/TodoManager';
import Delete from './Button/Delete';
import CheckBox from './CheckBox';
import ToDoText from './ToDoText';

const Display = (context) => {
	const { state: { index }} = context;
	const filterToDo = TodoManager.getFilter[index](context);

	return filterToDo.map((value, key) =>
		<Box key={ key } className="Display">
			<CheckBox { ...{ ...context, data: value } }/>
			<ToDoText { ...{ ...context, data: value } }/>
			<Delete	{ ...{ ...context, data: value } }/>
		</Box>);
};

export default Display;
