import { Button } from '@mui/material';
import React from 'react';
import TodoManager from '../../services/TodoManager';

const Update = (context) => {
	const { state, setState } = context;

	return (
		<Button
			color="secondary"
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
