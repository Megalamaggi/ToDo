import { Checkbox } from '@mui/material';
import React from 'react';
import TodoManager from '../services/TodoManager';

const CheckBox = (context) => {
	const { state, setState, data: value } = context;
	const { isActive } = value;

	return (
		<Checkbox
			checked={ isActive }
			onClick={ () => setState({
				...state,
				toDo: TodoManager.changeIsActive({ ...context, value }),
			}) }
		/>);
};

export default CheckBox;
