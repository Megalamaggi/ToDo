import { Box } from '@mui/material';
import React from 'react';
import TabsContainer from './ToDoContainer/TabsContainer';
import ToDoFooter from '../ToDoFooter/Index';
import ToDoHeader from '../ToDoHeader.js/Index';

const ToDos = (context) =>
	<Box className="toDoBox">
		<ToDoHeader { ...context }/>
		<TabsContainer { ...context }/>
		<ToDoFooter { ...context }/>
	</Box>;

export default ToDos;
