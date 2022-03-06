import React from "react";
import { useNotes } from "../../context/NoteContext";

export const NoteList = () => {
	const { notes } = useNotes();

	return (
		<div className="card-list-container">
			{notes.map(({ id, title, content, color }) => (
				<div key={id} className="card" style={{ background: color }}>
					<h2>{title}</h2>
					<p>{content}</p>
				</div>
			))}
		</div>
	);
};
