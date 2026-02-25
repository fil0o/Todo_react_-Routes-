import { useState, useEffect } from 'react';

export const useGetTodos = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('http://localhost:3005/todos')
			.then((res) => res.json())
			.then((data) => {
				setTodos(data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.error('Ошибка в загрузке данных', err);
				setIsLoading(false);
			});
	}, []);

	return { todos, setTodos, isLoading };
};

// npx json-server --watch db.json --port 3005
