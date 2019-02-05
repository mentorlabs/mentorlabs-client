import React from 'react';
import { Formik, FormikProps, FormikActions } from 'formik';
import * as yup from 'yup';

import { generateFormFields } from '../../Shared/generateFormFields';

import './Signup.scss';
import { FormFields } from '../../types';

interface SignupFormValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const initialValues: SignupFormValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  passwordConfirm: ''
};

const submitForm = (values: SignupFormValues, actions: FormikActions<{}>) => {
  // tslint:disable:no-console
  console.log('submitting form boys..');
  console.log({ values, actions });
};

const signupSchema = yup.object().shape({
  firstname: yup.string().required('No Firtstname provided.'),
  lastname: yup.string().required('No Lastname provided.'),
  email: yup
    .string()
    .email()
    .required('No email provided.'),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - 8 characters minimum.'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match.')
    .required('Passwords do not match.')
});

const formFields: FormFields[] = [
  { name: 'firstname', placeholder: 'Enter Firstname'},
  { name: 'lastname', placeholder: 'Enter Lastname' },
  { name: 'email', placeholder: 'Enter Email' },
  { name: 'password', placeholder: 'Enter password', type: 'password' },
  { name: 'passwordConfirm', placeholder: 'Confirm password', type: 'password' }
];

const mySignupForm = (props: FormikProps<{}>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {generateFormFields(formFields, 'signup-field')}
      <button
        className="button is-block is-link is-medium is-fullwidth"
        type="submit"
      >
        {props.isSubmitting ? 'Submitting... ' : 'Signup'}
      </button>
    </form>
  );
};

export const Signup = () => (
  <div>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-grey">Signup</h3>
            <p className="subtitle has-text-grey">Please signup to proceed.</p>
            <div className="box">
              <Formik
                initialValues={initialValues}
                validationSchema={signupSchema}
                onSubmit={submitForm}
                render={mySignupForm}
              />
            </div>
            <p className="has-text-grey">
              <a href="../">Sign Up</a> &nbsp;·&nbsp;
              <a href="../">Forgot Password</a> &nbsp;
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);
