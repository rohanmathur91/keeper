import { useEffect } from "react";
import { useNotes } from "../context/NoteContext";

export const useLocalStorage = () => {
	const { notes, setNotes } = useNotes();

	useEffect(() => {
		setNotes(JSON.parse(localStorage.getItem("notes")) ?? []);
	}, []);

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	const clearAll = () => {
		localStorage.removeItem("notes");
		setNotes([]);
	};

	return { clearAll };
};
