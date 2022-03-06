import { useState } from "react";
import { v4 as uuid } from "uuid";
import { ColorList } from "../index";
import { useNotes } from "../../context/NoteContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const NotesForm = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [backgroundColors, setBackgroundColors] = useState("");
	const { clearAll } = useLocalStorage();
	const { addNotes } = useNotes();

	const handleformSubmit = e => {
		e.preventDefault();
		addNotes({ id: uuid(), title, content, color: backgroundColors });
		setTitle("");
		setContent("");
		setBackgroundColors("");
	};

	const handleColorClick = color => setBackgroundColors(color);

	return (
		<div className="notes">
			<form
				onSubmit={handleformSubmit}
				className="note-form border-radius-sm"
				style={{ background: backgroundColors }}
			>
				<input
					required
					type="text"
					value={title}
					placeholder="Title"
					className="note-title-input"
					onChange={e => setTitle(e.target.value)}
				/>
				<textarea
					required
					value={content}
					placeholder="Take a note..."
					className="note-task-input"
					onChange={e => setContent(e.target.value)}
				/>
				<button className="btn">Add</button>
			</form>

			<ColorList handleColorClick={handleColorClick} />
			<button onClick={clearAll} className="btn">
				Clear all
			</button>
		</div>
	);
};
