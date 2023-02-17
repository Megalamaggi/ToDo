import { React, useState } from 'react';
import './App.scss';
import Button from './components/Button';
import Display from './components/Display';
import InputBox from './components/InputBox';
import ClearButton from './components/ClearButton';
import data from './Data';
import { peek } from '@laufire/utils/debug';

const initialState = {
	currentValue: '',
	toDo: data,
	update: null,
};

const App = (context) => {
	const [state, setState] = useState(initialState);

	peek(state.toDo);
	const extendedContext = { ...context, state, setState };

	return (
		<div className="App">
			<InputBox { ...extendedContext }/>
			<Button { ...extendedContext }/>
			<Display { ...extendedContext }/>
			<ClearButton { ...extendedContext }/>
		</div>
	);
};

export default App;
