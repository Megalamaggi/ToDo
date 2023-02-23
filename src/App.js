import { React, useState } from 'react';
import { Box } from '@mui/material';
import './App.scss';
import ClearButton from './components/ToDoFooter.js/ClearButton';
import toDosList from './Data';
import TabsContainer from './components/ToDoContainer/TabsContainer';
import ToDoHeader from './components/ToDoHeader.js/Index';

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
				<TabsContainer { ...extendedContext }/>
				<ClearButton { ...extendedContext }/>
			</Box>
		</div>
	);
};

export default App;
