import styles from './ControplPanel.module.css';

export const ControlPanel = ({
	searchQuery,
	setSearchQuery,
	isSorted,
	setIsSorted,
	onAdd,
}) => (
	<div className={styles.toolbar}>
		<input
			className={styles.searchInput}
			placeholder="Поиск задач"
			value={searchQuery}
			onChange={(e) => setSearchQuery(e.target.value)}
		/>
		<button
			className={`${styles.button} ${isSorted ? styles.sorted : ''}`}
			onClick={() => setIsSorted(!isSorted)}
		>
			{isSorted ? 'Сортировка: А-Я' : 'Без сортировки'}
		</button>
		<button className={`${styles.button} ${styles.addButton}`} onClick={onAdd}>
			Добавить задачу
		</button>
	</div>
);
