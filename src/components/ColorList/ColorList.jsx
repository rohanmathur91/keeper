import React from "react";
import { colors } from "../../data";

export const ColorList = ({ handleColorClick }) => {
	return (
		<span className="color-list">
			{colors.map((color) => (
				<button
					key={color}
					className="color-picker"
					style={{ background: color }}
					onClick={() => handleColorClick(color)}
				></button>
			))}
		</span>
	);
};
