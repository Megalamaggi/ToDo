import { Button } from '@mui/material';
import React from 'react';
import TodoManager from '../../services/TodoManager';

const Update = (context) => {
	const { state, setState } = context;

	return (
		<Button
			onClick={ () => setState({
				...state,
				toDo: TodoManager.editTodo(context),
				update: null,
				currentValue: '',
			}) }
		>Update
		</Button>);
};

export default Update;
