import { Box } from '@mui/material';
import React from 'react';
import Task from './Task';

const Tasks = (context) => {
	const { state: { tasks }} = context;

	return <Box className="taskContainer">
		{tasks.map((value, i) =>
			<Task key={ i } { ...{ ...context, data: { value }} }/>)}
	</Box>;
};

export default Tasks;
