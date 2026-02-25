import styles from './TodoItem.module.css';

export const TodoItem = ({ title }) => (
	<div className={styles.item}>
		{/* Класс truncatedText отвечает за обрезку текста */}
		<span className={styles.truncatedText}>{title}</span>
	</div>
);
