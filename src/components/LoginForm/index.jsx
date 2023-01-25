import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { AiOutlineGoogle } from "react-icons/ai";
import { LOGIN_SCHEMA } from "../../utils/validate/validationSchema";
import styles from "./LoginForm.module.scss";

const initialValues = {
	email: "",
	password: "",
	isRememberMe: false,
};

const login = () => {
	alert("Hello! Good to see you again!");
};

const LoginForm = () => {
	const onSubmit = (values, formikBag) => {
		login(values);
		formikBag.resetForm();
	};

	const {
		form,
		wrapperInputs,
		wrapperInput,
		input,
		error,
		labelCheckbox,
		wrapperCheckBox,
		checkBox,
		smText,
		btn,
		btnGoogle,
	} = styles;

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={LOGIN_SCHEMA}
		>
			<Form className={form}>
				<div className={wrapperInputs}>
					<div className={wrapperInput}>
						<Field
							className={input}
							type="email"
							name="emailAddress"
							placeholder="Email Address"
						/>
						<ErrorMessage
							className={error}
							name="emailAddress"
							component="div"
						/>
					</div>
					<div className={wrapperInput}>
						<Field
							className={input}
							type="password"
							name="password"
							placeholder="Password"
						/>
						<ErrorMessage className={error} name="password" component="div" />
					</div>
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
