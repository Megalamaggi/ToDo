import React from 'react';
import { Box, Checkbox } from '@mui/material';
import TodoManager from '../../../services/TodoManager';

const SelectAll = (context) => {
	const { state, setState } = context;

	return <Box className="selectAll">
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

export default SelectAll;
