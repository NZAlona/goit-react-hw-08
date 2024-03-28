import { Field, Formik, Form } from 'formik';
import css from './LoginForm.module.css';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../../redux/authentication/operations';

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email!').required('Required'),
  password: Yup.string().min(7, 'Too short').max(256, 'Too long').required('Required'),
});

export default function LongInForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(loginRequest(values));
    console.log(values);
    actions.resetForm();
  };
  return (
    <div className={css.container}>
      <h2 className={css.text}>Log In</h2>
      <span className={css.spanWrapper}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={ValidationSchema}
        >
          <Form className={css.forma} autoComplete="off">
            <label htmlFor="email" className={css.formLabel}>
              Email
            </label>
            <Field type="text" name="email" className={css.formInput} />
            <ErrorMessage name="email" component="span" className={css.error} />
            <label htmlFor="password" className={css.formLabel}>
              Password
            </label>
            <Field type="password" name="password" className={css.formInput} />
            <ErrorMessage name="password" component="span" className={css.error} />
            <button type="submit" className={css.btn}>
              Log In
            </button>
            <p className={css.ptext}>
              Do not have an account?
              <Link to="/register" className={css.link}>
                Register
              </Link>
            </p>
          </Form>
        </Formik>
      </span>
    </div>
  );
}
