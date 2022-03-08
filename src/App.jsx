import { useTheme } from "./context";
import { NoteList, NotesForm, Sidebar } from "./components";
import "./css/style.css";

const App = () => {
	const { theme, changeTheme } = useTheme();

	return (
		<div class={`app ${theme}`}>
			<div className="header">
				<h1>Keeper</h1>
				<button className="theme-btn" onClick={changeTheme}>
					<i class={`fa-solid ${theme === "light" ? "fa-moon" : "fa-sun"}`}></i>
				</button>
			</div>
			<div className="container">
				<Sidebar />
				<div className="notes-container">
					<NotesForm />
					<NoteList />
				</div>
			</div>
		</div>
	);
};

export default App;
