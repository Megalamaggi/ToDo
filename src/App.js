import { React, useState } from 'react';
import './App.scss';
import Button from './components/Button';
import InputBox from './components/InputBox';
import ClearButton from './components/ClearButton';
import data from './Data';
import SelectAll from './components/SelectAll';
import { Box } from '@mui/material';
import TabsContainer from './components/TabsContainer';
import { peek } from '@laufire/utils/debug';

const initialState = {
	currentValue: '',
	toDos: data,
	update: null,
	index: '1',
};

const App = (context) => {
	const [state, setState] = useState(initialState);

	peek(state);
	const extendedContext = { ...context, state, setState };

	return (
		<div className="App">
			<Box className="box">
				<InputBox { ...extendedContext }/>
				<Button { ...extendedContext }/>
				<SelectAll { ...extendedContext }/>
				<TabsContainer { ...extendedContext }/>
				<ClearButton { ...extendedContext }/>
			</Box>
		</div>
	);
};

export default App;
