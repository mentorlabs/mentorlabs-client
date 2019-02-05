import { withFormik } from 'formik';
import { Signup } from './Signup.component';
import * as yup from 'yup';

const logger = console;

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

export const EnhancedSignup = withFormik({
  displayName: 'Signup Form',
  mapValuesToPayload: () => ({
    firstname: '',
    lastnmae: '',
    email: '',
    password: '',
    passwordConfirm: ''
  }),
  mapPropsToValues: props => {
    logger.log(props);
    return {};
  },
  validationSchema: signupSchema,

  // find way to type this, it's already infering some
  // of the values.
  handleSubmit: (values, { setSubmitting }) => {
    logger.log('sumbit');
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
})(Signup);
