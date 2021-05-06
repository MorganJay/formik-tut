import React from 'react';
import { Styles } from '../styles';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import CustomTextInput from './textbox';
import CustomSelect from './select';
import CustomCheckbox from './checkbox';

function Form1() {
  const state = {
    name: '',
    email: '',
    acceptedTerms: false,
    specialPower: ''
  };

  const schema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least three characters')
      .max(15, 'Must not be more than 15 characters')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    acceptedTerms: Yup.boolean()
      .required('Required')
      .oneOf([true, false], 'You must accept the terms and conditions'),
    specialPower: Yup.string()
      .oneOf(
        ['flight', 'invisibility', 'wealthy bat guy', 'other'],
        'Invalid Special Power'
      )
      .required('Required')
  });

  const handleSubmit = (values, resetForm, setSubmitting) => {
    setSubmitting(true);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
      setSubmitting(false);
    }, 3000);
  };

  return (
    <Styles>
      <Formik
        initialValues={state}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting, resetForm }) =>
          handleSubmit(values, resetForm, setSubmitting)
        }
      >
        {({ isSubmitting }) => (
          <Form>
            <h1>Sign Up</h1>
            <CustomTextInput label="Name" name="name" placeholder="John" />
            <CustomTextInput
              label="Email"
              name="email"
              placeholder="john@doe.com"
              type="email"
            />
            <CustomSelect label="Special Power" name="specialPower">
              <option value="">Select a Special Power</option>
              <option value="flight">Flight</option>
              <option value="invisibility">Invisibility</option>
              <option value="wealthy bat guy">Wealthy bat guy</option>
              <option value="other">Other</option>
            </CustomSelect>
            <CustomCheckbox name="acceptedTerms">
              I accept the term and conditions.
            </CustomCheckbox>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Loading...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </Styles>
  );
}

export default Form1;
