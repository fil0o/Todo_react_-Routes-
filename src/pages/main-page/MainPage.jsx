import { useState } from 'react';
import { useAddTodo, useDebounce, useFilteredTodos, useGetTodos } from '../../hooks';
import { ControlPanel } from '../../components/control-panel/ControlPanel';
import { Link } from 'react-router-dom';
import styles from './MainPage.module.css';
import { TodoList } from '../../components/todo-list/TodoList';

export const MainPage = () => {
	// Логика данных
	const { todos, setTodos, isLoading } = useGetTodos();
	const [isSorted, setIsSorted] = useState(false);

	const [searchQuery, setSearchQuery] = useState(''); // Быстрый стейт для инпута
	// Замедленная версия поискового запроса
	const debouncedSearch = useDebounce(searchQuery, 300);

	// Логика действий (передача доступа к setTodos)
	const { addTodo } = useAddTodo(setTodos);

	// Логика отображения (фильтрация и сортировка)
	const finalTodos = useFilteredTodos(todos, debouncedSearch, isSorted);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1 className={styles.title}>Список задач</h1>
				<ControlPanel
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
					isSorted={isSorted}
					setIsSorted={setIsSorted}
					onAdd={addTodo}
				/>

				{isLoading ? (
					<div className="loader"></div>
				) : (
					<TodoList todos={finalTodos} />
					// {/* {finalTodos.map((todo) => (
					// 	<Link
					// 		key={todo.id}
					// 		to={`/task/${todo.id}`}
					// 		className={styles.todoCard}
					// 	>
					// 		<span className={styles.truncatedText}>{todo.title}</span>
					// 	</Link>
					// ))} */}
				)}
			</div>
		</div>
	);
};
