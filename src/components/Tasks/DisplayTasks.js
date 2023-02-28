import { Box } from '@mui/material';
import React from 'react';
import Add from './Add';
import Delete from './Delete';
import TasksText from './TasksText';

const DisplayTasks = (context) => {
	const { state: { tasks }} = context;

	return tasks.map((value, i) =>
		<Box key={ i } className="DisplayText">
			<Delete { ...{ ...context, data: { value }} }/>
			<TasksText { ...{ ...context, data: { value }} }/>
			<Add { ...{ ...context, data: { value }} }/>
		</Box>);
};

export default DisplayTasks;
