import { useEffect } from "react";
import { useNotes } from "../context";

export const useLocalStorage = () => {
	const { notes, updateList, clearList } = useNotes();

	useEffect(() => {
		updateList(JSON.parse(localStorage.getItem("notes")) ?? []);
	}, []);

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	const clearAll = () => {
		clearList();
		localStorage.removeItem("notes");
	};

	return { clearAll };
};
