import * as yup from 'yup';

const namesValid = yup.string().trim().min(2).max(24).required();
const email = yup.string().email().required();
const password = yup
  .string()
  .trim()
  .min(6)
  .max(24)
  // .matches(/^.[A-Z]/, 'Password must have capital letter!')
  // .matches(/^.[a-z]/, 'Password must have lower letter!')
  // .matches(/^.[0-9]$/, 'Password must have number!')
  .required();

export const LOGIN_SCHEMA = yup.object({
  emailAddress: email,
  password: password,
  isSubscribed: yup.bool(),
});

export const SIGNUP_SCHEMA = yup.object({
  firstName: namesValid,
  lastName: namesValid,
  displayName: namesValid,
  emailAddress: email,
  password: password,
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});