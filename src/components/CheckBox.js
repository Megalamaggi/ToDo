import { Checkbox } from '@mui/material';
import React from 'react';
import TodoManager from '../services/TodoManager';

const CheckBox = (context) => {
	const { state, setState, data: value } = context;
	const { isSelected } = value;

	return (
		<Checkbox
			checked={ isSelected }
			onClick={ () => setState({
				...state,
				toDos: TodoManager.toggleText({ ...context, value }),
			}) }
		/>);
};

export default CheckBox;
