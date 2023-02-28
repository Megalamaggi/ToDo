import { Box } from '@mui/material';
import React from 'react';

const TasksText = (context) => {
	const { data: { value }} = context;

	return <Box sx={ { display: 'inline-block' } }>{value.text}</Box>;
};

export default TasksText;
