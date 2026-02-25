import { useMemo } from 'react';

export const useFilteredTodos = (todos, searchQuery, isSorted) => {
	// Используем useMemo, чтобы не пересчитывать список при каждом рендере,
	// если данные (todos, поиск или сортировка) не изменились.
	const filteredTodos = useMemo(() => {
		// 1. Фильтруем по поисковой фразе
		let result = todos.filter((todo) =>
			todo.title.toLowerCase().includes(searchQuery.toLowerCase()),
		);

		// 2. Сортируем по алфавиту, если флаг активен
		if (isSorted) {
			result = [...result].sort((a, b) => a.title.localeCompare(b.title));
		}

		return result;
	}, [todos, searchQuery, isSorted]);

	return filteredTodos;
};
