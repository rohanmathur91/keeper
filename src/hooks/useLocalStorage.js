import { useEffect } from "react";

export const useLocalStorage = (notes, setNotes) => {
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
