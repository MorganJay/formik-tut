import React from 'react';
import { useField } from 'formik';
import {
  TextField,
  FormControlLabel,
  Radio,
  Checkbox
} from '@material-ui/core';

export const MUITextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

export const MUIRadio = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

export const MUICheckBox = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel control={<Checkbox />} label={label} {...field} />;
};
