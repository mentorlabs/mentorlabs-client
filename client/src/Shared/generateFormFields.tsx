import React from 'react';
import { Field } from 'formik';
import { inputFieldWithErrors } from './InputFieldWithErrors';
import { FormFields } from '../types';

export const generateFormFields = (fields: FormFields[], keyPrefix: string) => {
  return fields.map((props, idx) => (
    <Field
      {...props}
      key={`${keyPrefix}-${idx}`}
      component={inputFieldWithErrors}
    />
  ));
};
