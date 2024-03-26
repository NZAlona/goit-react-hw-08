import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import css from './RegisterForm.module.css';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';

const ValidationSchema = Yup.object().shape({
  username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  useremail: Yup.string().email('Must be a valid email!').required('Required'),
  password: Yup.string().min(3, 'Too short').max(256, 'Too long').required('Required'),
});

export default function RegisterForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <>
      <div className={css.wrapper}>
        <h2 className={css.text}>Register</h2>
        <span className={css.spanWrapper}>
          <Formik
            initialValues={{
              username: '',
              useremail: '',
              password: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={ValidationSchema}
          >
            <Form className={css.forma}>
              <label htmlFor="username" className={css.formLabel}>
                Username
              </label>
              <Field type="text" name="username" className={css.formInput} />
              <ErrorMessage name="username" component="span" className={css.error} />
              <label htmlFor="useremail" className={css.formLabel}>
                Email
              </label>
              <Field type="text" name="useremail" className={css.formInput} />
              <ErrorMessage name="useremail" component="span" className={css.error} />
              <label htmlFor="password" className={css.formLabel}>
                Password
              </label>
              <Field type="password" name="password" className={css.formInput} />
              <ErrorMessage name="password" component="span" className={css.error} />
              <button type="submit" className={css.btn}>
                Register
              </button>
              <p className={css.ptext}>
                Already have an account?
                <Link to="/login" className={css.link}>
                  Log In
                </Link>
              </p>
            </Form>
          </Formik>
        </span>
      </div>
    </>
  );
}
