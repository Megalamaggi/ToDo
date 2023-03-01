import React from 'react';
import { Box } from '@mui/material';
import InputBox from './InputBox';
import ActionButton from './ActionButton';
import SelectAllToDos from './SelectAllToDos';

const ToDoHeader = (context) =>
	<Box className="toDoHeader">
		<InputBox { ...context }/>
		<ActionButton { ...context }/>
		<SelectAllToDos { ... context }/>
	</Box>;

export default ToDoHeader;
