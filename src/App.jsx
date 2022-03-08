import { NoteList, NotesForm, Sidebar } from "./components";
import { useTheme } from "./context";
import "./css/style.css";

const App = () => {
	const { theme, changeTheme } = useTheme();

	return (
		<div>
			<h1>Keeper</h1>
			<div className="container">
				<Sidebar />
				<div className="notes-container">
					<button onClick={changeTheme}>{theme}</button>
					<NotesForm />
					<NoteList />
				</div>
			</div>
		</div>
	);
};

export default App;
