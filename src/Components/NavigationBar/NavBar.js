import React from "react";
// import "./App.css";
import { Link } from "react-router-dom ";
function NavBar() {
	const NAVSTYLE = {
		color: "white",
	};

	return (
		<nav>
			<ul className="nav-links">
				<Link style={NAVSTYLE} to="/home">
					<li> Home</li>
				</Link>
				<li> About</li>
				<li> Contact</li>
				<li> Gallery</li>
			</ul>
		</nav>
	);
}
export default NavBar;
