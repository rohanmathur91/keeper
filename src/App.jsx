import { NoteList, NotesForm } from "./components";
import "./css/style.css";

const App = () => {
	return (
		<div>
			<h1>Keeper</h1>
			<div className="notes-container">
				<NotesForm />
				<NoteList />
			</div>
		</div>
	);
};

export default App;
