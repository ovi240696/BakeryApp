import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import Home from "./Components/Pages/Home/Home";
// import About from "./Components/Pages/About/About";
// import Gallery from "./Components/Pages/Gallery/Gallery";
// import Contact from "./Components/Pages/Contact/Contact";

import "bootstrap/dist/css/bootstrap.css";
ReactDOM.render(
	<React.StrictMode>{<App />}</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
