import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NoteProvider } from "./context/NoteContext";

ReactDOM.render(
	<NoteProvider>
		<App />
	</NoteProvider>,
	document.querySelector("#root")
);
