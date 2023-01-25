import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import styles from "./Header.module.scss";

const Header = () => {
	return (
		<header className={styles.header}>
			<Router>
				<Link to="/">
					<img src="https://www.squadhelp.com/img/logo.png" alt="logo" />
				</Link>
				<Switch>
					<Route path="/signup">
						<Link className={styles.link} to="/">
							Login
						</Link>
					</Route>
					<Route path="/" exact>
						<Link className={styles.link} to="/signup">
							Signup
						</Link>
					</Route>
				</Switch>
			</Router>
		</header>
	);
};

export default Header;
