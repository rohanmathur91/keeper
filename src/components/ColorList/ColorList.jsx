import React from "react";
import { colors } from "./data";
import "./ColorList.css";

export const ColorList = ({ handleOnChange }) => {
	return (
		<span className="color-list">
			{colors.map((color) => (
				<button
					key={color}
					className="color-picker"
					style={{ background: color }}
					onClick={() => handleOnChange("backgroundColor", color)}
				></button>
			))}
		</span>
	);
};
