import { useState } from "react";
import { colors } from "./data";
import { v4 as uuid } from "uuid";
import { useLocalStorage } from "./hooks/useLocalStorage";
import "./css/style.css";

const App = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [notes, setNotes] = useState([]);
	const [backgroundColors, setBackgroundColors] = useState("");
	const { clearAll } = useLocalStorage(notes, setNotes);

	const handleformSubmit = e => {
		e.preventDefault();
		setNotes(prev => [
			{ id: uuid(), title, content, color: backgroundColors },
			...prev,
		]);
		setTitle("");
		setContent("");
		setBackgroundColors("");
	};

	const handleColorClick = color => setBackgroundColors(color);

	return (
		<div>
			<h1>Keeper</h1>

			<div className="notes-container">
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

					<span className="color-list">
						{colors.map(color => {
							return (
								<button
									onClick={() => handleColorClick(color)}
									className="color-picker"
									style={{ background: color }}
								></button>
							);
						})}
					</span>

					<button onClick={clearAll} className="btn">
						Clear all
					</button>
				</div>

				<div className="card-list-container">
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
		</div>
	);
};

export default App;
