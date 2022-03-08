import { useState, useContext, createContext, useEffect } from "react";

const ThemeContext = createContext({ theme: "light" });

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");
	const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");

	useEffect(() => {
		setTheme(localStorage.getItem("theme") ?? "light");
	}, []);

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
