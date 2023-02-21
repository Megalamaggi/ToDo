import { React, useState } from 'react';
import './App.scss';
import Button from './components/Button';
import Display from './components/Display';
import InputBox from './components/InputBox';
import ClearButton from './components/ClearButton';
import data from './Data';
import SelectAll from './components/SelectAll';
import { peek } from '@laufire/utils/debug';
import { Box } from '@mui/material';

const initialState = {
	currentValue: '',
	toDos: data,
	update: null,
};

const App = (context) => {
	const [state, setState] = useState(initialState);

	peek(state.toDos);
	const extendedContext = { ...context, state, setState };

	return (
		<div className="App">
			<Box className="box">
				<InputBox { ...extendedContext }/>
				<Button { ...extendedContext }/>
				<SelectAll { ...extendedContext }/>
				<Display { ...extendedContext }/>
				<ClearButton { ...extendedContext }/>
			</Box>
		</div>
	);
};

export default App;
