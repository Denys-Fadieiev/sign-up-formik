import React from "react";
import { Field, Form, Formik } from "formik";
import { AiOutlineGoogle } from "react-icons/ai";
import { SIGNUP_SCHEMA } from "../../utils/validate/validationSchema";
import styles from "./SignupForm.module.scss";
import Input from "../Input";

const {
	form,
	wrapper,
	label,
	wrapperInputs,
	bigText,
	smText,
	radio,
	btn,
	labelCheckbox,
	checkBox,
	text,
	link,
	btnGoogle,
} = styles;

const initialValues = {
	firstName: "",
	lastName: "",
	displayName: "",
	emailAddress: "",
	password: "",
	passwordConfirmation: "",
	isBuyer: false,
	isAllow: false,
};

const signupMessage = (displayName) => {
	alert(
		`Congratulations! You have successfully registered under the name ${displayName}`
	);
};

const SignupForm = () => {
	const onSubmit = (values, formikBag) => {
		signupMessage(values);
		formikBag.resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={SIGNUP_SCHEMA}
		>
			<Form className={form}>
				<div className={wrapperInputs}>
					<Input
						type="text"
						name="firstName"
						placeholder="First Name"
						autoFocus
						styles={styles}
					/>
					<Input
						type="text"
						name="lastName"
						placeholder="Last Name"
						styles={styles}
					/>
					<Input
						type="text"
						name="displayName"
						placeholder="Display Name"
						styles={styles}
					/>
					<Input
						type="email"
						name="emailAddress"
						placeholder="Email Address"
						styles={styles}
					/>
					<Input
						type="password"
						name="password"
						placeholder="Password"
						styles={styles}
					/>
					<Input
						type="password"
						name="passwordConfirmation"
						placeholder="Password Confirmation"
						styles={styles}
					/>
				</div>
				<div className={wrapper}>
					<label className={label}>
						<Field
							className={radio}
							type="radio"
							name="isBuer"
							value={"buyer"}
						/>
						<p className={bigText}>Join As a Buyer</p>
						<p className={smText}>
							I am looking for a Name, Logo or Tagline for my business, brand or
							product.
						</p>
					</label>
					<label className={label}>
						<Field
							className={radio}
							type="radio"
							name="isBuer"
							value={"seller"}
						/>
						<p className={bigText}>Join As a Buyer</p>
						<p className={smText}>
							I am looking for a Name, Logo or Tagline for my business, brand or
							product.
						</p>
					</label>
				</div>
				<label className={labelCheckbox}>
					<Field className={checkBox} type="checkbox" name="isAllow" />
					<p className={smText}>
						Allow Squadhelp to send marketing/promotional offers from time to
						time
					</p>
				</label>
				<button className={btn} type="submit">
					Create account
				</button>
				<p className={text}>
					By clicking this button, you agree to our{" "}
					<a className={link} href="#">
						Terms of Service
					</a>
					.
				</p>
				<button className={btnGoogle} type="submit">
					<AiOutlineGoogle /> Sign up with Google
				</button>
			</Form>
		</Formik>
	);
};

export default SignupForm;
