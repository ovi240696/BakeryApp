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
					<a href="#news">About</a>
					<a href="#contact">Gallery</a>
					<a href="#about">Contact</a>
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
