import React from 'react';
// import { Link, NavLink } from "react-router-dom";

import { FormikProps, FormikValues, Field } from 'formik';
import { inputFieldWithErrors } from '../../../Shared';
import '../Signup.scss';

export const Signup: React.FunctionComponent<
  FormikProps<FormikValues>
> = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props;

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // tslint:disable
    console.log('submit form');
    handleSubmit();
  };

  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-grey">Signup</h3>
            <p className="subtitle has-text-grey">Please signup to proceed.</p>
            <div className="box">
              <form onSubmit={submitForm}>
                <Field
                  name="firstname"
                  placeholder="Enter Firstname"
                  component={inputFieldWithErrors}
                />
                <Field
                  name="lastname"
                  placeholder="Enter Lastname"
                  component={inputFieldWithErrors}
                />
                <Field
                  name="email"
                  placeholder="Enter email"
                  component={inputFieldWithErrors}
                />
                <Field
                  name="password"
                  placeholder="Password"
                  component={inputFieldWithErrors}
                />
                <Field
                  name="passwordConfirm"
                  placeholder="Confirm Password"
                  component={inputFieldWithErrors}
                />

                <button
                  className="button is-block is-link is-medium is-fullwidth"
                  type="submit"
                  // onClick={() => handleSubmit}
                >
                  {isSubmitting ? 'Submitting... ' : 'Signup'}
                </button>
              </form>
            </div>
            <p className="has-text-grey">
              <a href="../">Sign Up</a> &nbsp;·&nbsp;
              <a href="../">Forgot Password</a> &nbsp;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
