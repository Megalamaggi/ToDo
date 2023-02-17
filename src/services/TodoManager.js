/* eslint-disable no-console */

import { peek } from '@laufire/utils/debug';

const remove = (context, value) => {
	const { state: { toDo }} = context;

	return (
		toDo.filter((a) => a.id !== value.id)
	);
};

const editTodo = (context) => {
	const { state: { currentValue, update, toDo }} = context;

	return toDo.map((data) =>
		(data.id === update.id ? { ...data, text: currentValue } : data));
};

const clear = (context) => {
	const { state: { toDo }} = context;

	return toDo.filter((value) => value.isActive === false) ;
};

const changeIsActive = (context) => {
	const { state: { toDo }, value } = context;

	peek(value);

	return (
		toDo.map((data) => {
			const { isActive } = data;

			return data.id === value.id
				? { ...data, isActive: !isActive }
				: data;
		})
	);
};

const TodoManager = {
	remove,
	editTodo,
	clear,
	changeIsActive,
};

export default TodoManager;
