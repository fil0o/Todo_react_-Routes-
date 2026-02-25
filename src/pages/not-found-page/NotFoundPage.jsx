import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
	return (
		<div className={styles.notFoundPage}>
			<h1 className={styles.title}>404 - Страница не найдена</h1>
			<p className={styles.description}>
				К сожалению, запрашиваемая страница не существует.
			</p>
		</div>
	);
};
