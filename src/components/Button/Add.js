import React from 'react';
import { Button } from '@mui/material';
import { rndString } from '@laufire/utils/random';

const Add = (context) => {
	const { setState, state, config: { idLength }} = context ;
	const { currentValue, toDo } = state;

	return (
		<Button
			disabled={ currentValue === '' }
			variant="contained"
			onClick={ () => setState({
				...state,
				currentValue: '',
				toDo: [...toDo, {
					text: currentValue,
					id: rndString(idLength),
				}],
			}) }
		> Add
		</Button>
	);
};

export default Add;
