import { Button } from '@mui/material';
import React from 'react';
import TodoManager from '../../../services/TodoManager';

const Update = (context) => {
	const { state, setState } = context;

	return (
		<Button
			color="secondary"
			variant="contained"
			sx={ { height: '35px',
				marginTop: '3px' } }
			onClick={ () => setState({
				...state,
				toDos: TodoManager.editTodo(context),
				update: null,
				currentValue: '',
			}) }
		>Update
		</Button>);
};

export default Update;
