import React from "react";
import { useNotes } from "../../context";
import "./NoteList.css";

export const NoteList = () => {
	const { notes, archiveNote, deleteNote } = useNotes();

	return (
		<div className="note-list-container">
			{notes.map((note) => (
				<div
					key={note.id}
					className="note"
					style={{ background: note.backgroundColor }}
				>
					<h2 className="note-title">{note.title}</h2>
					<p className="note-content">{note.content}</p>
					<button onClick={() => archiveNote(note)} className="btn">
						Archive
					</button>

					<button onClick={() => deleteNote(note)} className="btn">
						Delete
					</button>
				</div>
			))}
		</div>
	);
};
