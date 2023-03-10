import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { AiOutlineGoogle } from "react-icons/ai";
import { LOGIN_SCHEMA } from "../../utils/validate/validationSchema";
import Input from "../Input";
import styles from "./LoginForm.module.scss";

const initialValues = {
	email: "",
	password: "",
	isRememberMe: false,
};

const {
	form,
	wrapperInputs,
	labelCheckbox,
	wrapperCheckBox,
	checkBox,
	smText,
	btn,
	btnGoogle,
} = styles;

const login = () => {
	alert("Hello! Good to see you again!");
};

const LoginForm = () => {
	const onSubmit = (values, formikBag) => {
		login(values);
		formikBag.resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={LOGIN_SCHEMA}
		>
			<Form className={form}>
				<div className={wrapperInputs}>
					<Input
						type="email"
						name="emailAddress"
						placeholder="Email Addres"
						autoFocus
						styles={styles}
					/>
					<Input
						type="password"
						name="password"
						placeholder="Password"
						styles={styles}
					/>
				</div>
				<label className={labelCheckbox}>
					<div className={wrapperCheckBox}>
						<Field className={checkBox} type="checkbox" name="isRememberMe" />
						<p className={smText}>Remember Me</p>
					</div>
					<p className={smText}>
						<a href="#">Forgot Password</a>
					</p>
				</label>
				<button className={btn} type="submit">
					LOGIN
				</button>
				<button className={btnGoogle} type="submit">
					<AiOutlineGoogle /> Sign up with Google
				</button>
			</Form>
		</Formik>
	);
};

export default LoginForm;
