import { Box } from '@mui/material';
import React from 'react';
import DisplayTasks from './DisplayTasks';

const TaskList = (context) => <Box className="taskBox">
	<Box className="taskContainer"><DisplayTasks { ...context }/></Box>
</Box>;

export default TaskList;
