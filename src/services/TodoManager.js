/* eslint-disable no-magic-numbers */

import { rndString, rndValue } from '@laufire/utils/random';

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

const addIdTask = (context) => {
	const { config: { tasks, idLength }} = context;

	return	tasks.map((task) => ({ text: task, id: rndString(idLength),
		time: Date.now() }));
};

const removeTask = (context) => {
	const { state: { tasks }, value } = context;

	return tasks.filter((task) => task.id !== value.id);
};

const getTasks = ({ config: { sample, idLength }}) =>
	({ text: rndValue(sample),
		id: rndString(idLength),
		time: Date.now() });

const autoTaskList = (context) => {
	const { setState } = context;

	return setInterval(() =>
		setState((preState) => {
			const { tasks } = preState;

			return {
				...preState,
				tasks: tasks.length < 10
					? [...tasks, getTasks(context)]
					: tasks,
			};
		}), 2000);
};

const oldestFirst = (context) => {
	const { state: { tasks }} = context;

	return tasks.sort((a, b) => a.time - b.time);
};

const latestFirst = (context) => {
	const { state: { tasks }} = context;

	return tasks.sort((a, b) => b.time - a.time);
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
	addIdTask,
	removeTask,
	autoTaskList,
	oldestFirst,
	latestFirst,
};

export default TodoManager;
