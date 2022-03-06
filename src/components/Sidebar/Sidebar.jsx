import React from "react";
import "./Sidebar.css";

export const Sidebar = () => {
	return (
		<div>
			<ul className="sidebar">
				<li className="sidebar-item">All Notes</li>
				<li className="sidebar-item">Archive</li>
				<li className="sidebar-item">Bin</li>
			</ul>
		</div>
	);
};
