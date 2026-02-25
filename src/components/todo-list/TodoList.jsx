import styles from './TodoList.module.css';
import { TodoItem } from '../todo-item/TodoItem';
import { Link } from 'react-router-dom';

export const TodoList = ({ todos }) => (
	<div className={styles.todoGrid}>
		{todos.map((todo) => (
			// Обертываем каждый элемент в ссылку на страницу задачи
			<Link key={todo.id} to={`/task/${todo.id}`} className={styles.todoCard}>
				<TodoItem title={todo.title} />
			</Link>
		))}
	</div>
);
