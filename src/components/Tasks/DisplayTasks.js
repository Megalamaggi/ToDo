import { Box } from '@mui/material';
import React from 'react';
import AddTask from './AddTask';
import DeleteTask from './DeleteTask';
import TaskText from './TaskText';

const DisplayTasks = (context) => {
	const { state: { tasks }} = context;

	return tasks.map((value, i) =>
		<Box key={ i } className="DisplayText">
			<TaskText { ...{ ...context, data: { value }} }/>
			<AddTask { ...{ ...context, data: { value }} }/>
			<DeleteTask { ...{ ...context, data: { value }} }/>
		</Box>);
};

export default DisplayTasks;
