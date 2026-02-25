export const useAddTodo = (setTodos) => {
	const addTodo = async () => {
		const title = prompt('Название:');
		if (!title) return;
		const res = await fetch('http://localhost:3005/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ title, completed: false }),
		});
		const newTodo = await res.json();
		setTodos((prev) => [...prev, newTodo]);
	};
	return { addTodo };
};
