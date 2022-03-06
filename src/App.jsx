import { NoteList, NotesForm, Sidebar } from "./components";
import "./css/style.css";

const App = () => {
	return (
		<div>
			<h1>Keeper</h1>
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
