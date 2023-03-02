import React from 'react';
import { Button } from '@mui/material';
import TodoManager from '../../../services/TodoManager';

const Add = (context) => {
	const { setState, state } = context ;
	const { currentValue } = state;

	return (
		<Button
			disabled={ currentValue === '' }
			color="secondary"
			variant="contained"
			sx={ { height: '39px',
				marginTop: '3px' } }
			onClick={ () => setState({
				...state,
				currentValue: '',
				toDos: TodoManager.addId(context),
			}) }
		> +Add
		</Button>
	);
};

export default Add;
