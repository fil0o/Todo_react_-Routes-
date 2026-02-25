export const useDeleteTodo = (setTodos) => {
	const deleteTodo = async (id) => {
		await fetch(`http://localhost:3005/todos/${id}`, { method: 'DELETE' });
		setTodos((prev) => prev.filter((t) => t.id !== id));
	};
	return { deleteTodo };
};
