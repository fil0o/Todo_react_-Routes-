import styles from './TodoList.module.css';
import { TodoItem } from '../todo-item/TodoItem';

export const TodoList = ({ todos, onUpdate, onDelete, onToggle }) => (
	<ul className={styles.list}>
		{todos.map((todo) => (
			<TodoItem
				key={todo.id}
				{...todo}
				onUpdate={onUpdate}
				onDelete={onDelete}
				onToggle={onToggle}
			/>
		))}
	</ul>
);
