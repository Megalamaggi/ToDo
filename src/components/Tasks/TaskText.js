import { Box } from '@mui/material';
import React from 'react';

const TaskText = (context) => {
	const { data: { value }} = context;

	return <Box sx={ { display: 'inline-block' } }>{value.text}</Box>;
};

export default TaskText;
