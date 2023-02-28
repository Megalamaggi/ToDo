import { Box } from '@mui/material';
import React from 'react';
import TodoManager from '../../../services/TodoManager';
import Delete from './Delete';
import CheckBox from './CheckBox';
import ToDoText from './ToDoText';

const Display = (context) => {
	const { state: { tabsValue }} = context;
	const filterToDos = TodoManager.getFilter[tabsValue](context);

	return filterToDos.map((value, key) =>
		<Box key={ key } className="Display">
			<CheckBox { ...{ ...context, data: { value }} }/>
			<ToDoText { ...{ ...context, data: { value }} }/>
			<Delete	{ ...{ ...context, data: { value }} }/>
		</Box>);
};

export default Display;
