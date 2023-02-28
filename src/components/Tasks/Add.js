import { Button } from '@mui/material';
import React from 'react';

const Add = (context) => {
	const { state, setState,
		state: { toDos, tasks }, data: { value }} = context;

	return (
		<Button onClick={ () => setState({
			...state,
			toDos: [...toDos, { ...value, isSelected: false }],
			tasks: tasks.filter((task) => task.id !== value.id),
		}) }
		>add</Button>
	);
};

export default Add;
