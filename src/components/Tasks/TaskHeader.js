/* eslint-disable max-lines-per-function */
import { Box, Button } from '@mui/material';
import React from 'react';
import TodoManager from '../../services/TodoManager';

const TaskHeader = (context) => {
	const { setState, state } = context ;

	return <Box className="sort">
		<label>SORT: </label>
		<Button
			size="small"
			variant="outlined"
			onClick={ () => setState({
				...state,
				tasks: TodoManager.oldestFirst(context),
			}) }
		>Oldest first</Button>
		<Button
			size="small"
			variant="outlined"
			onClick={ () => setState({
				...state,
				tasks: TodoManager.latestFirst(context),
			}) }
		>Latest first</Button>
	</Box>;
};

export default TaskHeader;
