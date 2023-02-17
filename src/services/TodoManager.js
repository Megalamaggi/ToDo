/* eslint-disable no-console */

import { peek } from '@laufire/utils/debug';

const remove = (context, value) => {
	const { state: { toDos }} = context;

	return (
		toDos.filter((a) => a.id !== value.id)
	);
};

const editTodo = (context) => {
	const { state: { currentValue, update, toDos }} = context;

	return toDos.map((data) =>
		(data.id === update.id ? { ...data, text: currentValue } : data));
};

const clear = (context) => {
	const { state: { toDos }} = context;

	return toDos.filter((value) => value.isActive === false) ;
};

const changeIsActive = (context) => {
	const { state: { toDos }, value } = context;

	peek(value);

	return (
		toDos.map((data) => {
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
