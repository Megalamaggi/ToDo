import { React, useState } from 'react';
import { Box } from '@mui/material';
import './App.scss';
import toDosList from './Data';
import ToDoHeader from './components/ToDoHeader.js/Index';
import ToDoFooter from './components/ToDoFooter.js/Index';
import TabsContainer from './components/ToDoContainer/TabsContainer';
import TodoManager from './services/TodoManager';
import TaskList from './components/Tasks';

const initialState = (context) => ({
	currentValue: '',
	toDos: toDosList,
	update: null,
	tabsValue: '1',
	tasks: TodoManager.addIdTask(context),
});

const App = (context) => {
	const { once } = context;
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...context, state, setState };

	once(() => TodoManager.autoTaskList(extendedContext));

	return (
		<div className="App">
			<Box className="box">
				<ToDoHeader { ...extendedContext }/>
				<TabsContainer { ...extendedContext }/>
				<ToDoFooter { ...extendedContext }/>
			</Box>
			<TaskList { ...extendedContext }/>
		</div>
	);
};

export default App;
