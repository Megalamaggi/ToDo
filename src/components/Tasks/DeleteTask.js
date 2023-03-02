import { DeleteForever } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import TodoManager from '../../services/TodoManager';

const DeleteTask = (context) => {
	const { state, setState, data: { value }} = context;

	return (
		<Button
			variant="outlined"
			color="error"
			size="small"
			onClick={ () => setState({
				...state,
				tasks: TodoManager.removeTask({ ...context, value }),
			}) }
		> <DeleteForever/>
		</Button>
	);
};

export default DeleteTask;
