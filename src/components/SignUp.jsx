import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from './textField';

const SignUp = () => {
  const values = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const validateSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'First Name must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(25, 'Last Name must be 25 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email address is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Please enter a valid and strong password'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required()
  });

  return (
    <Formik
      initialValues={values}
      validationSchema={validateSchema}
      onSubmit={() => console.log(values)}
    >
      {({ isSubmitting }) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">SIGN UP</h1>
          <Form>
            <TextField label="First Name" name="firstName" />
            <TextField label="Last Name" name="lastName" />
            <TextField label="Email Address" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button className="btn btn-primary" type="submit">
              Register
            </button>
            <button className="btn btn-danger m-3" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;
