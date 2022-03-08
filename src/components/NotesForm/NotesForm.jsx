import { useState } from "react";
import { v4 as uuid } from "uuid";
import { ColorList } from "../index";
import { useNotes } from "../../context";
import { useLocalStorage } from "../../hooks";

export const NotesForm = () => {
	const [note, setNote] = useState({
		title: "",
		content: "",
		backgroundColor: "",
	});
	const { addNotes } = useNotes();
	const { clearAll } = useLocalStorage();
	const { title, content, backgroundColor } = note;

	const handleformSubmit = (event) => {
		event.preventDefault();
		addNotes({
			...note,
			id: uuid(),
			backgroundColor: backgroundColor || "#d4d4d4",
		});
		setNote({
			title: "",
			content: "",
			backgroundColor: "",
		});
	};

	const handleOnChange = (key, value) => {
		setNote((prevNote) => ({ ...prevNote, [key]: value }));
	};

	return (
		<div className="notes">
			<form
				onSubmit={handleformSubmit}
				className="note-form border-radius-sm"
				style={{ background: backgroundColor }}
			>
				<input
					required
					type="text"
					value={title}
					placeholder="Title"
					className="note-title-input"
					onChange={(event) => handleOnChange("title", event.target.value)}
				/>
				<textarea
					required
					value={content}
					placeholder="Take a note..."
					className="note-task-input"
					onChange={(event) => handleOnChange("content", event.target.value)}
				/>
				<button className="btn">Add</button>
			</form>

			<ColorList handleOnChange={handleOnChange} />
			<button onClick={clearAll} className="btn">
				Clear all
			</button>
		</div>
	);
};
