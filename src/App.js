import { React, useState } from 'react';
import { Box } from '@mui/material';
import './App.scss';
import toDosList from './Data';
import ToDoHeader from './components/ToDoHeader.js/Index';
import ToDoFooter from './components/ToDoFooter.js/Index';
import TabsContainer from './components/ToDoContainer/TabsContainer';

const initialState = {
	currentValue: '',
	toDos: toDosList,
	update: null,
	tabsValue: '1',
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState };

	return (
		<div className="App">
			<Box className="box">
				<ToDoHeader { ...extendedContext }/>
				<ToDoFooter { ...extendedContext }/>
				<TabsContainer { ...extendedContext }/>
			</Box>
		</div>
	);
};

export default App;
