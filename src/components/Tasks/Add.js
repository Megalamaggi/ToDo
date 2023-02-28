import { Button } from '@mui/material';
import React from 'react';

const Add = (context) => {
	const { state, setState,
		state: { toDos, tasks }, data: { value }} = context;

	return (
		<Button
			variant="contained"
			size="small"
			onClick={ () => setState({
				...state,
				toDos: [...toDos, { ...value, isSelected: false }],
				tasks: tasks.filter((task) => task.id !== value.id),
			}) }
		>+</Button>
	);
};

export default Add;
