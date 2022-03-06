import React from "react";
import { useNotes } from "../../context/NoteContext";

export const NoteList = () => {
	const { notes, archiveNote, deleteNote } = useNotes();

	return (
		<div className="note-list-container">
			{notes.map(({ id, title, content, color }) => (
				<div key={id} className="note" style={{ background: color }}>
					<h2>{title}</h2>
					<p>{content}</p>
					<button
						onClick={() => archiveNote({ id, title, content, color })}
						className="btn"
					>
						Archive
					</button>

					<button
						onClick={() => deleteNote({ id, title, content, color })}
						className="btn"
					>
						Delete
					</button>
				</div>
			))}
		</div>
	);
};
