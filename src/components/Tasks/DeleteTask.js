import { Button } from '@mui/material';
import React from 'react';
import TodoManager from '../../services/TodoManager';
import { DeleteForever } from '@mui/icons-material';

const DeleteTask = (context) => {
	const { state, setState, data: { value }} = context;

	return (
		<Button
			variant="contained"
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
