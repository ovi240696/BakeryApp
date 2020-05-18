import React, { Component } from "react";

class Header extends Component {
	state = {};
	render() {
		return (
			<section>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
					<div className="container">
						<a className="navbar-brand" href="#">
							<img
								src="./assets/images/logo.jpg"
								alt="Logo"
								height="70px"
								width="70px"
							/>
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarResponsive"
							aria-controls="navbarResponsive"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarResponsive"
						>
							<ul className="navbar-nav ml-auto">
								<li className="nav-item active">
									<a className="nav-link" href="index.html">
										Home
										<span className="sr-only">
											(current)
										</span>
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										href="products.html"
									>
										Products
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="about.html">
										About Us
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="contact.html">
										Contact Us
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</section>
		);
	}
}

export default Header;
