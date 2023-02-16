import React from 'react';
import { TextField } from '@mui/material';

const InputBox = (context) => {
	const { state, setState } = context;

	return (
		<TextField
			placeholder="To-Do"
			value={ state.currentValue }
			onChange={ ({ target: { value }}) => setState({
				...state,
				currentValue: value,
			}) }
		/>
	);
};

export default InputBox;
