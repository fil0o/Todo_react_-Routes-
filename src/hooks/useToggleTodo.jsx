export const useToggleTodo = (setTodos) => {
	const toggleTodo = async (id, currentStatus) => {
		try {
			const response = await fetch(`http://localhost:3005/todos/${id}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ completed: !currentStatus }),
			});

			if (response.ok) {
				// Обновляем локальный стейт, чтобы UI сразу изменился
				setTodos((prev) =>
					prev.map((t) =>
						t.id === id ? { ...t, completed: !currentStatus } : t,
					),
				);
			}
		} catch (error) {
			console.error('Ошибка при переключении статуса:', error);
		}
	};

	return { toggleTodo };
};
