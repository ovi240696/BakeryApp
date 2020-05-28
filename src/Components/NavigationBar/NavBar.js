import React from "react";
// import "./App.css";
import { Link } from "react-router-dom";
function NavBar() {
	const NAVSTYLE = {
		color: "white",
	};
	return (
		<nav>
			<ul className="nav-links">
				<Link style={NAVSTYLE} to="/">
					<li> Home</li>
				</Link>
				<Link style={NAVSTYLE} to="/about">
					<li> About</li>
				</Link>
				<Link style={NAVSTYLE} to="/gallery">
					<li> Gallery</li>
				</Link>
				<Link style={NAVSTYLE} to="/contact">
					<li> Contact</li>
				</Link>
			</ul>
		</nav>
	);
}
export default NavBar;
