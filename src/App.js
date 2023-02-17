import { React, useState } from 'react';
import './App.scss';
import Button from './components/Button';
import Display from './components/Display';
import InputBox from './components/InputBox';
import ClearButton from './components/ClearButton';
import data from './Data';

const initialState = {
	currentValue: '',
	toDos: data,
	update: null,
};

const App = (context) => {
	const [state, setState] = useState(initialState);

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
