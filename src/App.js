import React from "react";
import NavBar from "./Components/NavigationBar/NavBar";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import Gallery from "./Components/Pages/Gallery/Gallery";
import Home from "./Components/Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
	return (
		<Router>
			<Switch>
				<div className="App">
					<NavBar />
					<Route path="/" exact component={Home} />
					<Route path="/about" exact component={About} />
					<Route path="/contact" exact component={Contact} />
					<Route path="/gallery" exact component={Gallery} />
					{/* <Route path="/home" exact component={Home} /> */}
				</div>
			</Switch>
		</Router>
	);
}

const HOME = () => (
	<div>
		<h1>Home Page</h1>
	</div>
);
export default App;
