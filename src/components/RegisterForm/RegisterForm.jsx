import { Field, Form, Formik } from 'formik';
import css from './RegisterForm.module.css';

export default function RegisterForm() {
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
            onSubmit={() => {}}
          >
            <Form className={css.forma}>
              <label htmlFor="username" className={css.formLabel}>
                Username
              </label>
              <Field type="text" name="username" className={css.formInput} />
              <label htmlFor="useremail" className={css.formLabel}>
                Email
              </label>
              <Field type="text" name="useremail" className={css.formInput} />
              <label htmlFor="password" className={css.formLabel}>
                Password
              </label>
              <Field type="text" name="password" className={css.formInput} />
              <button type="submit" className={css.btn}>
                Register
              </button>
            </Form>
          </Formik>
        </span>
      </div>
    </>
  );
}
