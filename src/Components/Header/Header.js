import React, { Component } from "react";

class Header extends Component {
	state = {};
	render() {
		return (
			<div className="headerClass">
				<div className="topnav" id="myTopnav">
					<a href="#home" className="active">
						Home
					</a>
					<a href="#about">About</a>
					<a href="#gallery">Gallery</a>
					<a href="#contact">Contact</a>
					<a
						href="javascript:void(0);"
						className="icon"
						onclick="myFunction()"
					>
						<i className="fa fa-bars" />
					</a>
				</div>
			</div>
		);
	}
}

export default Header;
