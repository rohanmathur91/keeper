import { createContext, useContext, useState } from "react";

const NoteContext = createContext(null);

const NoteProvider = ({ children }) => {
	const [notes, setNotes] = useState([]);
	const [archiveNotesList, setArchiveNotesList] = useState([]);
	const [deletedNotesList, setDeletedNotesList] = useState([]);

	const addNotes = (note) => {
		setNotes((prevNotes) => [note, ...prevNotes]);
	};

	const clearList = () => setNotes([]);

	const updateList = (list) => setNotes((prevList) => list);

	const archiveNote = (note) => {
		setArchiveNotesList((prevNotes) => [note, ...prevNotes]);
	};

	const deleteNote = (note) => {
		setNotes((prevNotes) => prevNotes.filter((item) => note.id !== item.id));
		setDeletedNotesList((prevNotes) => [
			{ ...note, status: "deleted" },
			...prevNotes,
		]);
	};

	return (
		<NoteContext.Provider
			value={{
				notes,
				archiveNotesList,
				archiveNote,
				updateList,
				clearList,
				addNotes,
				deleteNote,
			}}
		>
			{children}
		</NoteContext.Provider>
	);
};

const useNotes = () => useContext(NoteContext);

export { useNotes, NoteProvider };
