import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { bgList } from "../data";
import "./App.css";

const App = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [notes, setNotes] = useState([]);
	const [bgColor, setBgColor] = useState("");

	useEffect(() => {
		const notesList = localStorage.getItem("notes");
		if (notesList) setNotes(JSON.parse(notesList));
	}, []);

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	const handleformSubmit = e => {
		e.preventDefault();
		setNotes(prev => [{ id: uuid(), title, content, color: bgColor }, ...prev]);
		setTitle("");
		setContent("");
		setBgColor("");
	};

	const handleClearAll = () => {
		localStorage.removeItem("notes");
		setNotes([]);
	};

	const handleColorClick = color => setBgColor(color);

	return (
		<div className="notes-container">
			<div className="notes">
				<form
					onSubmit={handleformSubmit}
					style={{ background: bgColor }}
					className="p-3"
				>
					<input
						required
						value={title}
						type="text"
						onChange={e => setTitle(e.target.value)}
					/>
					<textarea
						required
						value={content}
						onChange={e => setContent(e.target.value)}
					/>
					<button className="m-1 py-1 px-4 rounded">Add</button>
				</form>

				<span className="color-list">
					{bgList.map(color => {
						console.log(color);
						return (
							<button
								onClick={() => handleColorClick(color)}
								className="color-picker"
								style={{ background: color }}
							></button>
						);
					})}
				</span>

				<button onClick={handleClearAll} className="m-1 py-1 px-4 rounded">
					Clear all
				</button>
			</div>

			<div className="card-container">
				{notes.map(({ id, title, content, color }) => {
					return (
						<div key={id} className="card" style={{ background: color }}>
							<h2>{title}</h2>
							<p>{content}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default App;
