import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from "react-router-dom";
import { Topics } from "./components/Topics"
import { Home } from "./components/Home"

export function Main() {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/topics">Topics</Link>
					</li>
				</ul>

				<hr />

				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/topics">
						<Topics />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
