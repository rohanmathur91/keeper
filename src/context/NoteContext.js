import { createContext, useContext, useState } from "react";

const NoteContext = createContext(null);

const NoteProvider = ({ children }) => {
	const [notes, setNotes] = useState([]);
	const addNotes = (note) => setNotes((prevNotes) => [note, ...prevNotes]);

	return (
		<NoteContext.Provider value={{ notes, setNotes, addNotes }}>
			{children}
		</NoteContext.Provider>
	);
};

const useNotes = () => useContext(NoteContext);

export { useNotes, NoteProvider };
