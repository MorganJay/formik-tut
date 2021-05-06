import React from 'react';
import { Formik } from 'formik';
import { TextField } from '@material-ui/core';

const Form2 = () => {
  const values = {
    firstName: 'bob'
  };
  return (
    <div>
      <Formik initialValues={values}>
        {() => (
          <form>
            <TextField />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form2;
