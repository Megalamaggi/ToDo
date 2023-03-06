import { Box } from '@mui/material';
import React from 'react';
import TabsContainer from './ToDoContainer/TabsContainer';
import ToDoFooter from './ToDoFooter/Index';
import ToDoHeader from './ToDoHeader/Index';

const ToDoPane = (context) =>
	<Box className="toDoPane">
		<label className="header">Todo</label>
		<ToDoHeader { ...context }/>
		<TabsContainer { ...context }/>
		<ToDoFooter { ...context }/>
	</Box>;

export default ToDoPane;
