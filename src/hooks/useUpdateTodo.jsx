export const useUpdateTodo = (setTodos) => {
	const updateTodo = async (id, oldTitle) => {
		const newTitle = prompt('Новое название:', oldTitle);
		if (!newTitle || newTitle === oldTitle) return;
		await fetch(`http://localhost:3005/todos/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ title: newTitle }),
		});
		setTodos((prev) =>
			prev.map((todo) => (todo.id === id ? { ...todo, title: newTitle } : todo)),
		);
	};
	return { updateTodo };
};
