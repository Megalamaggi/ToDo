import { Box } from '@mui/material';
import React from 'react';
import AddTask from './AddTask';
import DeleteTask from './DeleteTask';
import TaskText from './TaskText';

const Task = (context) =>
	<Box className="task">
		<TaskText { ...context }/>
		<AddTask { ...context }/>
		<DeleteTask { ...context }/>
	</Box>;

export default Task;
