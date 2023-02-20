import { Box, Checkbox } from '@mui/material';
import React from 'react';
import TodoManager from '../services/TodoManager';

const SelectAll = (context) => {
	const { state, setState } = context;
	const { toDos } = state;

	return <Box>
		<Checkbox
			checked={ toDos.every((toDo) => toDo.isSelected === true) }
			onClick={ ({ target: { checked }}) => setState({
				...state,
				toDos: TodoManager.SelectAll(context, checked),
			}) }
		/> SelectAll
	</Box>;
};

export default SelectAll;
