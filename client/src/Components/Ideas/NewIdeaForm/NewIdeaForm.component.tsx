import React from 'react';
import { Formik, FormikProps, FormikActions } from 'formik';
import * as yup from 'yup';

import './NewIdeaForm.scss';
import { FormFields, WrapWithRouterProps } from '../../../types';
import { generateFormFields } from '../../../Shared/generateFormFields';
import { Link } from 'react-router-dom';

interface LoginFormValues {
  name: string;
  description: string;
}

const initialValues: LoginFormValues = {
  name: '',
  description: ''
};

const newIdeaSchema = yup.object().shape({
  name: yup.string().required('No name provided'),
  description: yup.string().required('No description provided')
});

const submitForm = (values: LoginFormValues, actions: FormikActions<{}>) => {
  // tslint:disable:no-console
  console.log('submitting form boys..');
  console.log({ values, actions });
};

const formFields: FormFields[] = [
  { name: 'name', placeholder: 'Enter name for idea' },
  { name: 'description', placeholder: 'Enter description' }
];

const newIdeaForm = (props: FormikProps<{}>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {generateFormFields(formFields, 'new-idea-field')}
      <button
        className="button is-block is-link is-medium is-fullwidth"
        type="submit"
      >
        {props.isSubmitting ? 'Submitting... ' : 'Submit'}
      </button>
    </form>
  );
};

export const NewIdeaForm: React.SFC<WrapWithRouterProps<{}>> = props => {
  console.log(props);
  return (
    <div>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Submit Idea</h3>
              <p className="subtitle has-text-grey">
                Let us hear you thoughts.
              </p>
              <div className="box">
                <Formik
                  initialValues={initialValues}
                  validationSchema={newIdeaSchema}
                  onSubmit={submitForm}
                  render={newIdeaForm}
                />
              </div>
              <p className="has-text-grey">
                <Link to={'/ideas'}>Go back</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
