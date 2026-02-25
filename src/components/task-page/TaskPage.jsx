import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useGetTodos, useUpdateTodo, useDeleteTodo } from '../../hooks';
import styles from './TaskPage.module.css';

export const TaskPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { todos, setTodos, isLoading } = useGetTodos();
	const { deleteTodo } = useDeleteTodo(setTodos);
	const { updateTodo } = useUpdateTodo(setTodos);

	// Находим нужную задачу по id
	const task = todos.find((t) => String(t.id) === String(id));

	if (isLoading) {
		return <div className="loader"></div>;
	}

	if (!task) {
		return <Navigate to="/404" />;
	}

	const handleDelete = () => {
		deleteTodo(task.id);
		navigate('-1'); // Возвращаемся назад после удаления
	};

	return (
		<div className={styles.taskPage}>
			<button onClick={() => navigate(-1)} className={styles.backBtn}>
				← Назад
			</button>
			<div className={styles.content}>
				<h2>Полное описание задачи:</h2>
				<p className={styles.fullTitle}>{task.title}</p>
				<div className={styles.actions}>
					<button onClick={() => updateTodo(id, task.title)}>
						✎ Редактировать
					</button>
					<button onClick={handleDelete}>✖ Удалить</button>
				</div>
			</div>
		</div>
	);
};
