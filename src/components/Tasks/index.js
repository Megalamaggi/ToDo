import { Box } from '@mui/material';
import React from 'react';
import DisplayTasks from './DisplayTasks';

const Tasks = (context) => <Box className="taskBox">
	<Box className="taskContainer"><DisplayTasks { ...context }/></Box>
</Box>;

export default Tasks;
