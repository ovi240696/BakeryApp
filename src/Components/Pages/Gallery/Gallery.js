import React from "react";

function GalleryContent() {
	return (
		<section id="team" className="team-area pt-120 pb-130">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-10">
						<div className="section-title text-center pb-30">
							<h3 className="title">Welcome in Gallery</h3>
							<p className="text">
								Stop wasting time and money designing and
								managing a website that doesn’t get results.
								Happiness guaranteed!
							</p>
						</div>{" "}
						{/* section title */}
					</div>
				</div>{" "}
				{/* row */}
				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div
							className="team-style-eleven text-center mt-30 wow fadeIn"
							data-wow-duration="1s"
							data-wow-delay="0s"
						>
							<div className="team-image">
								<img src="assets/images/g1.jpg" alt="Image1" />
							</div>
							<div className="team-content">
								<div className="team-social">
									<ul className="social">
										<li>
											<a href="#">
												<i className="lni lni-facebook-filled" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="lni lni-twitter-original" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="lni lni-linkedin-original" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="lni lni-instagram" />
											</a>
										</li>
									</ul>
								</div>
								<h4 className="team-name">
									<a href="#">Jeffery Riley</a>
								</h4>
								<span className="sub-title">Art Director</span>
							</div>
						</div>{" "}
						{/* single team */}
					</div>
					<div className="col-lg-4 col-sm-6">
						<div
							className="team-style-eleven text-center mt-30 wow fadeIn"
							data-wow-duration="1s"
							data-wow-delay="0s"
						>
							<div className="team-image">
								<img src="assets/images/g2.jpg" alt="Team" />
							</div>
							<div className="team-content">
								<div className="team-social">
									<ul className="social">
										<li>
											<a href="#">
												<i className="lni lni-facebook-filled" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="lni lni-twitter-original" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="lni lni-linkedin-original" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="lni lni-instagram" />
											</a>
										</li>
									</ul>
								</div>
								<h4 className="team-name">
									<a href="#">Riley Beata</a>
								</h4>
								<span className="sub-title">Web Developer</span>
							</div>
						</div>{" "}
						{/* single team */}
					</div>
					<div className="col-lg-4 col-sm-6">
						<div
							className="team-style-eleven text-center mt-30 wow fadeIn"
							data-wow-duration="1s"
							data-wow-delay="0s"
						>
							<div className="team-image">
								<img src="assets/images/g3.jpg" alt="Team" />
							</div>
							<div className="team-content">
								<div className="team-social">
									<ul className="social">
										<li>
											<a href="#">
												<i className="lni lni-facebook-filled" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="lni lni-twitter-original" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="lni lni-linkedin-original" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="lni lni-instagram" />
											</a>
										</li>
									</ul>
								</div>
								<h4 className="team-name">
									<a href="#">Mark A. Parker</a>
								</h4>
								<span className="sub-title">UX Designer</span>
							</div>
						</div>{" "}
						{/* single team */}
					</div>
				</div>{" "}
				{/* row */}
			</div>{" "}
			{/* container */}
		</section>
	);
}

export default GalleryContent;
