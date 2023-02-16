import { React, useState } from 'react';
import './App.scss';
import Add from './components/Button/Add';
import Display from './components/Display';
import InputBox from './components/InputBox';
import data from './Data';

const initialState = {
	currentValue: '',
	toDo: data,
};

const App = (context) => {
	const [state, setState] = useState(initialState);

	const extendedContext = { ...context, state, setState };

	return (
		<div className="App">
			<InputBox { ...extendedContext }/>
			<Add { ...extendedContext }/>
			<Display { ...extendedContext }/>
		</div>
	);
};

export default App;
