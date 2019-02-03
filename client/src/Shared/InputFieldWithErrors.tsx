import React from 'react';
import { FieldProps, ErrorMessage } from 'formik';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const inputFieldWithErrors = ({
  field,
  form: { errors, touched },
  ...props
}: InputProps & FieldProps) => {
  const errorMsg = touched[field.name] && errors[field.name];
  return (
    <div className="field">
      <div className="control">
        <input {...field} {...props} className="input" />
      </div>
      {/* {errorMsg && <div>{errorMsg}</div>}
       */}
      <ErrorMessage
        name={field.name}
        component={'div'}
        className="form-error"
      />
    </div>
  );
};
