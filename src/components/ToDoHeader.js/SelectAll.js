import { Box, Checkbox } from '@mui/material';
import React from 'react';
import TodoManager from '../../services/TodoManager';

const SelectAll = (context) => {
	const { state, setState } = context;
	const { isEverySelected } = TodoManager;

	return <Box>
		<Checkbox
			checked={ isEverySelected(context) }
			onClick={ ({ target: { checked }}) => setState({
				...state,
				toDos: TodoManager.SelectAll({ ...context, checked }),
			}) }
		/> SelectAll
	</Box>;
};

export default SelectAll;
