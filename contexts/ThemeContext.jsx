import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	useEffect(() => {
		const doc = document.documentElement;
		doc.classList.remove('light', 'dark');
		doc.classList.add(theme);
	});

	return (
		<ThemeContext.Provider value={toggleTheme}>
			{children}
		</ThemeContext.Provider>
	);
};
