import React from "react";
import SignupForm from "../../components/SignupForm";
import styles from '../pages.module.scss';

const { section, heading, text } = styles;

const SignupPage = () => {
	return (
		<section className={section}>
			<h2 className={heading}>CREATE AN ACCOUNT</h2>
			<p className={text}>
				We always keep your name and email address private.
			</p>
      <SignupForm/>
		</section>
	);
};

export default SignupPage;
