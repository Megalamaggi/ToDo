import { React, useState } from 'react';
import { Box } from '@mui/material';
import './App.scss';
import toDosList from './Data';
import TodoManager from './services/TodoManager';
import TaskPane from './components/Tasks';
import ToDoPane from './components/ToDos';

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
		<Box className="App">
			<ToDoPane { ...extendedContext }/>
			<TaskPane { ...extendedContext }/>
		</Box>
	);
};

export default App;
