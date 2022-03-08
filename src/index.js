import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NoteProvider, ThemeProvider } from "./context";

ReactDOM.render(
	<ThemeProvider>
		<NoteProvider>
			<App />
		</NoteProvider>
	</ThemeProvider>,
	document.querySelector("#root")
);
