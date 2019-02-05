import React from 'react';
import { Formik, FormikProps, FormikActions } from 'formik';
import * as yup from 'yup';

import { generateFormFields } from '../../Shared/generateFormFields';

import './Login.scss';
import { FormFields } from '../../types';

interface LoginFormValues {
  email: string;
  password: string;
}

const initialValues: LoginFormValues = {
  email: '',
  password: ''
};

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('No email provided.'),
  password: yup.string().required('No password provided.')
});

const submitForm = (values: LoginFormValues, actions: FormikActions<{}>) => {
  // tslint:disable:no-console
  console.log('submitting form boys..');
  console.log({ values, actions });
};

const formFields: FormFields[] = [
  { name: 'email', placeholder: 'Enter Email' },
  { name: 'password', placeholder: 'Enter password', type: 'password' }
];

const myLoginForm = (props: FormikProps<{}>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {generateFormFields(formFields, 'login-field')}
      <button
        className="button is-block is-link is-medium is-fullwidth"
        type="submit"
      >
        {props.isSubmitting ? 'Submitting... ' : 'Signup'}
      </button>
    </form>
  );
};

export const Login = () => (
  <div>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-grey">Login</h3>
            <p className="subtitle has-text-grey">Please Login to proceed.</p>
            <div className="box">
              <Formik
                initialValues={initialValues}
                validationSchema={loginSchema}
                onSubmit={submitForm}
                render={myLoginForm}
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
