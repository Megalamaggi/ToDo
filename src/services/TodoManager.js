
const remove = (context, value) => {
	const { state: { toDo }} = context;

	return (
		toDo.filter((a) => a.id !== value.id)
	);
};

const TodoManager = {
	remove,
};

export default TodoManager;
