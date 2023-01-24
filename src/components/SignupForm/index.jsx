import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { AiOutlineGoogle } from "react-icons/ai";
import { SIGNUP_SCHEMA } from "../../utils/validate/validationSchema";
import styles from "./SignupForm.module.scss";

const {
	form,
	input,
	wrapper,
	error,
	label,
	wrapperInputs,
	wrapperInput,
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
					<div className={wrapperInput}>
						<Field
							className={input}
							type="text"
							name="firstName"
							placeholder="First Name"
							autoFocus
						/>
						<ErrorMessage className={error} name="firstName" component="div" />
					</div>
					<div className={wrapperInput}>
						<Field
							className={input}
							type="text"
							name="lastName"
							placeholder="Last Name"
						/>
						<ErrorMessage className={error} name="lastName" component="div" />
					</div>
					<div className={wrapperInput}>
						<Field
							className={input}
							type="text"
							name="displayName"
							placeholder="Display Name"
						/>
						<ErrorMessage
							className={error}
							name="displayName"
							component="div"
						/>
					</div>
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
					<div className={wrapperInput}>
						<Field
							className={input}
							type="password"
							name="passwordConfirmation"
							placeholder="Password Confirmation"
						/>
						<ErrorMessage
							className={error}
							name="passwordConfirmation"
							component="div"
						/>
					</div>
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
