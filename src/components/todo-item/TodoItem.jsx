import styles from './TodoItem.module.css';

export const TodoItem = ({ id, title, completed, onToggle, onUpdate, onDelete }) => (
	<li className={`${styles.item} ${completed ? styles.completed : ''}`}>
		<div className={styles.todoContent}>
			<input
				type="checkbox"
				checked={completed}
				onChange={() => onToggle(id, completed)}
				className={styles.checkbox}
			/>
			<span className={styles.title}>{title}</span>
		</div>

		<div className={styles.actions}>
			<button
				className={`${styles.button} ${styles.updateButton}`}
				onClick={() => onUpdate(id, title)}
			>
				✎
			</button>
			<button
				className={`${styles.button} ${styles.deleteButton}`}
				onClick={() => onDelete(id)}
			>
				✖
			</button>
		</div>
	</li>
);
