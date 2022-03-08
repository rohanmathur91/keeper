import { useState, useContext, createContext } from "react";

const ThemeContext = createContext({ theme: "light" });

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");
	const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
