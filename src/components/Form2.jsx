import React from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
import {
  Button,
  FormGroup,
  Checkbox,
  Select,
  MenuItem
} from '@material-ui/core';
import * as Yup from 'yup';

import { MUICheckBox, MUIRadio, MUITextField } from './MuiInputs';

const validationSchema = Yup.object({
  firstName: Yup.string().required().max(10),
  pets: Yup.array().of(
    Yup.object({
      name: Yup.string().required('A name for your pet is required')
    })
  )
});

const Form2 = () => {
  const state = {
    firstName: '',
    lastName: '',
    isTall: false,
    cookies: [],
    yoghurt: '',
    pets: []
  };

  const handleSubmit = (data, setSubmitting, resetForm) => {
    setSubmitting(true);
    // make async call
    console.log('submit:', data);
    setSubmitting(false);
    resetForm();
  };

  return (
    <div style={{ flexBasis: '45%', padding: '2rem'}}>
      <Formik
        initialValues={state}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) =>
          handleSubmit(data, setSubmitting, resetForm)
        }
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <FormGroup>
              <MUITextField placeholder="First Name" name="firstName" />
            </FormGroup>
            <FormGroup>
              <MUITextField placeholder="Last Name" name="lastName" />
            </FormGroup>
            <Field name="isTall" type="checkbox" as={Checkbox} />
            <div>Cookies: </div>
            <MUICheckBox
              name="cookies"
              type="checkbox"
              value="chocolate"
              label="Chocolate"
            />
            <MUICheckBox
              name="cookies"
              type="checkbox"
              value="vanilla"
              label="Vanilla"
            />
            <MUICheckBox
              name="cookies"
              type="checkbox"
              value="sugar"
              label="Sugar"
            />

            <div>Yoghurt</div>
            <MUIRadio
              name="yoghurt"
              type="radio"
              value="blueberry"
              label="Blueberry"
            />
            <MUIRadio
              name="yoghurt"
              type="radio"
              value="strawberry"
              label="Strawberry"
            />
            <MUIRadio
              name="yoghurt"
              type="radio"
              value="greek"
              label="Greek"
            />
            <FieldArray name="pets">
              {arrayHelpers => (
                <div>
                  <Button
                    onClick={() =>
                      arrayHelpers.push({
                        type: 'cat',
                        name: '',
                        id: Math.random()
                      })
                    }
                  >
                    Add Pet
                  </Button>
                  {values.pets.map((pet, index) => {
                    return (
                      <div key={pet.id}>
                        <MUITextField
                          placeholder="Pet Name"
                          name={`pets.${index}.name`}
                        />
                        <Field
                          name={`pets.${index}.type`}
                          type="select"
                          as={Select}
                        >
                          <MenuItem value="dog">Dog</MenuItem>
                          <MenuItem value="cat">Cat</MenuItem>
                          <MenuItem value="chicken">Chicken</MenuItem>
                        </Field>
                        <Button onClick={() => arrayHelpers.remove(index)}>
                          &times;
                        </Button>
                      </div>
                    );
                  })}
                </div>
              )}
            </FieldArray>
            <FormGroup>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </FormGroup>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Form2;
