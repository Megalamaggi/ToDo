import React from 'react';
import { Button } from '@mui/material';
import TodoManager from '../../../services/TodoManager';

const ClearButton = (context) => {
	const { state, setState } = context;

	return (
		<Button
			color="error"
			variant="contained"
			onClick={ () => setState({
				...state,
				toDos: TodoManager.clearToDo(context),
			}) }
		>Clear All
		</Button>
	);
};

const Clear = (context) => {
	const { state: { toDos }} = context;

	return toDos.some((toDo) => toDo.isSelected)
	&& <ClearButton { ...context }/>;
};

export default Clear;
