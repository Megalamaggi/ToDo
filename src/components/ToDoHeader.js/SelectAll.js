import React from 'react';
import { Box, Checkbox } from '@mui/material';
import TodoManager from '../../services/TodoManager';

const SelectAll = (context) => {
	const { state, setState } = context;

	return <Box>
		<Checkbox
			color="secondary"
			checked={ TodoManager.isEverySelected(context) }
			onClick={ ({ target: { checked }}) => setState({
				...state,
				toDos: TodoManager.SelectAll({ ...context, checked }),
			}) }
		/> SelectAll
	</Box>;
};

export default SelectAll;
