import { Box } from '@mui/material';
import React from 'react';
import Tasks from './DisplayTasks';

const TaskPane = (context) =>
	<Box className="taskBox">
		<Tasks { ...context }/>
	</Box>;

export default TaskPane;
