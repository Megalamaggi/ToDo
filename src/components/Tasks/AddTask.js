import { AddTaskOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';

const AddTask = (context) => {
	const { state, setState,
		state: { toDos, tasks }, data: { value }} = context;

	return (
		<Button
			onClick={ () => setState({
				...state,
				toDos: [...toDos, { ...value, isSelected: false }],
				tasks: tasks.filter((task) => task.id !== value.id),
			}) }
		><AddTaskOutlined/> </Button>
	);
};

export default AddTask;
