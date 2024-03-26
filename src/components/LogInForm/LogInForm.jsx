import { Field, Formik, Form } from 'formik';
import css from './LoginForm.module.css';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

const ValidationSchema = Yup.object().shape({
  useremail: Yup.string().email('Must be a valid email!').required('Required'),
  userpassword: Yup.string().min(3, 'Too short').max(256, 'Too long').required('Required'),
});

export default function LongInForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <div className={css.container}>
      <h2 className={css.text}>Log In</h2>
      <span className={css.spanWrapper}>
        <Formik
          initialValues={{
            useremail: '',
            userpassword: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={ValidationSchema}
        >
          <Form className={css.forma}>
            <label htmlFor="useremail" className={css.formLabel}>
              Email
            </label>
            <Field type="text" name="useremail" className={css.formInput} />
            <ErrorMessage name="useremail" component="span" className={css.error} />
            <label htmlFor="userpassword" className={css.formLabel}>
              Password
            </label>
            <Field type="password" name="userpassword" className={css.formInput} />
            <ErrorMessage name="userpassword" component="span" className={css.error} />
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
