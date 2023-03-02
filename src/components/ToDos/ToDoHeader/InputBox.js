import React from 'react';
import { TextField } from '@mui/material';

const InputBox = (context) => {
	const { state, setState, state: { currentValue }} = context;

	return (
		<TextField
			class="inputBox"
			size="small"
			placeholder="To-Do"
			value={ currentValue }
			onChange={ ({ target: { value }}) => setState({
				...state,
				currentValue: value,
			}) }
		/>
	);
};

export default InputBox;
