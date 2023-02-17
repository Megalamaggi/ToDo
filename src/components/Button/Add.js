import React from 'react';
import { Button } from '@mui/material';
import { rndString } from '@laufire/utils/random';

const Add = (context) => {
	const { setState, state, config: { idLength }} = context ;
	const { currentValue, toDos } = state;

	return (
		<Button
			disabled={ currentValue === '' }
			variant="contained"
			onClick={ () => setState({
				...state,
				currentValue: '',
				toDos: [...toDos, {
					text: currentValue,
					id: rndString(idLength),
					isSelected: false,
				}],
			}) }
		> Add
		</Button>
	);
};

export default Add;
