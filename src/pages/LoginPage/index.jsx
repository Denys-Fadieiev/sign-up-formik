import React from "react";
import LoginForm from '../../components/LoginForm';
import styles from '../pages.module.scss';

const { section, heading } = styles;

const LoginPage = () => {
	return (
		<section className={section}>
			<h2 className={heading}>LOGIN TO YOUR ACCOUNT</h2>
			<LoginForm />
		</section>
	);
};

export default LoginPage;
