import { Box } from '@mui/material';
import React from 'react';
import Tasks from './DisplayTasks';
import TaskHeader from './TaskHeader';

const TaskPane = (context) =>
	<Box className="taskBox">
		<label className="taskHeader">TASK</label>
		<TaskHeader { ...context }/>
		<Tasks { ...context }/>
	</Box>;

export default TaskPane;
