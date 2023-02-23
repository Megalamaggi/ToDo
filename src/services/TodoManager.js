
import { rndString } from '@laufire/utils/random';

const addId = (context) => {
	const { config: { idLength },
		state: { currentValue, toDos }} = context;

	return [...toDos, {
		text: currentValue,
		id: rndString(idLength),
		isSelected: false,
	}];
};

const editTodo = (context) => {
	const { state: { currentValue, update, toDos }} = context;

	return toDos.map((toDo) =>
		(toDo.id === update.id
			? { ...toDo, text: currentValue }
			: toDo));
};

const SelectAll = (context) => {
	const { state: { toDos }, checked } = context;

	return toDos.map((toDo) => ({ ...toDo, isSelected: checked }));
};

const isEverySelected = (context) => {
	const { state: { toDos }} = context;

	return toDos.length && toDos.every((toDo) => toDo.isSelected);
};

const toggleText = (context) => {
	const { state: { toDos }, value } = context;

	return (
		toDos.map((todo) => {
			const { isSelected } = todo;

			return todo.id === value.id
				? { ...todo, isSelected: !isSelected }
				: todo;
		})
	);
};

const removeToDo = (context) => {
	const { state: { toDos }, value } = context;

	return toDos.filter((toDo) => toDo.id !== value.id);
};

const clearToDo = ({ state: { toDos }}) =>
	toDos.filter((toDo) => !toDo.isSelected) ;

const getFilter = {
	1: ({ state: { toDos }}) => toDos,
	2: (context) => clearToDo(context),
	3: ({ state: { toDos }}) => toDos.filter((toDo) =>
		toDo.isSelected),
};

const TodoManager = {
	addId,
	editTodo,
	SelectAll,
	isEverySelected,
	toggleText,
	removeToDo,
	clearToDo,
	getFilter,
};

export default TodoManager;
