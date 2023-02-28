import { Box } from '@mui/material';
import React from 'react';
import DisplayTasks from './DisplayTasks';

const TaskList = (context) => <Box>
	<DisplayTasks { ...context }/>
</Box>;

export default TaskList;
