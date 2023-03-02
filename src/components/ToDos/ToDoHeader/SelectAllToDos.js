import React from 'react';
import { Box, Checkbox } from '@mui/material';
import TodoManager from '../../../services/TodoManager';

const SelectAllToDos = (context) => {
	const { state, setState } = context;

	return <Box>
		<Checkbox
			color="secondary"
			checked={ TodoManager.isEverySelected(context) }
			onClick={ ({ target: { checked }}) => setState({
				...state,
				toDos: TodoManager.SelectAll({ ...context, checked }),
			}) }
		/>
	</Box>;
};

export default SelectAllToDos;
