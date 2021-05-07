import React from 'react';
import { ErrorMessage, useField } from 'formik';

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label htmlFor={field.name}>{label}</label>
      <input
        type={props.type || 'text'}
        className={`form-control shadow-none ${meta.touched ? meta.error ? 'is-invalid' : 'is-valid' : ''}`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage component="div" className="error" name={field.name} />
    </div>
  );
};

export default TextField;
