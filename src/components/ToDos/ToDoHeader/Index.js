import React from 'react';
import { Box } from '@mui/material';
import InputBox from './InputBox';
import ActionButton from './ActionButton';
import SelectAll from './SelectAll';

const ToDoHeader = (context) =>
	<Box className="toDoHeader">
		<InputBox { ...context }/>
		<ActionButton { ...context }/>
		<SelectAll { ... context }/>
	</Box>;

export default ToDoHeader;
