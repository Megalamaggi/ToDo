/* eslint-disable no-console */

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

	return toDos.filter((value) => value.isSelected === false) ;
};

const toggleText = (context) => {
	const { state: { toDos }, value } = context;

	return (
		toDos.map((data) => {
			const { isSelected } = data;

			return data.id === value.id
				? { ...data, isSelected: !isSelected }
				: data;
		})
	);
};

const SelectAll = (context, checked) => {
	const { state: { toDos }} = context;

	return toDos.map((toDo) => ({ ...toDo, isSelected: checked }));
};

const isEverySelected = (context) => {
	const { state: { toDos }} = context;

	return toDos.length && toDos.every((toDo) => toDo.isSelected);
};

const TodoManager = {
	remove,
	editTodo,
	clear,
	toggleText,
	SelectAll,
	isEverySelected,
};

export default TodoManager;
