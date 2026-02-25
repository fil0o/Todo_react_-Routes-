import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage, TaskPage, NotFoundPage } from './pages';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/task/:id" element={<TaskPage />} />
			<Route path="/404" element={<NotFoundPage />} />
			<Route path="*" element={<Navigate to="/404" />} />
		</Routes>
	);
};

export default App;
