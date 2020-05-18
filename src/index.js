import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.css";
// import "./public/assets/css/flex-slider.css";
// import "./public/css/fontawesome.css";
// import "./public/css/owl.css";
// import "./public/assets/css/tooplate-main.css";
// import "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700";
// import "./public/js/owl.js";
// import "./public/js/custom.js";

ReactDOM.render(
	<React.StrictMode>
		{/* <App /> */}
		<Header />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
