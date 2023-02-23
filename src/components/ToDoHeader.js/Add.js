import React from 'react';
import { Button } from '@mui/material';
import TodoManager from '../../services/TodoManager';

const Add = (context) => {
	const { setState, state } = context ;
	const { currentValue } = state;

	return (
		<Button
			disabled={ currentValue === '' }
			variant="contained"
			onClick={ () => setState({
				...state,
				currentValue: '',
				toDos: TodoManager.addId(context),
			}) }
		> Add
		</Button>
	);
};

export default Add;
