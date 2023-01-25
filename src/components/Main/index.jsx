import React from "react";
import { Switch, Route } from "react-router-dom";
import SignupPage from "../../pages/SignupPage";
import LoginPage from "../../pages/LoginPage";

const Main = () => {
	return (
		<main>
			<Switch>
				<Route path="/signup" exact component={SignupPage} />
				<Route path="/" exact component={LoginPage} />
			</Switch>
		</main>
	);
};

export default Main;
