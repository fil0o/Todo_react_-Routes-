import { useState, useEffect } from 'react';

export const useDebounce = (value, delay) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		// Устанавливаем таймер
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		// Очищаем таймер, если значение изменилось до истечения времени
		// (Это и есть магия дебаунса — сброс при каждом нажатии клавиши)
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
};
