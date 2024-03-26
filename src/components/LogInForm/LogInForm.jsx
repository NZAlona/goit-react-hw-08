import { Field, Formik, Form } from 'formik';
import css from './LoginForm.module.css';

export default function LongInForm() {
  return (
    <div className={css.container}>
      <h2 className={css.text}>Log In</h2>
      <span className={css.spanWrapper}>
        <Formik
          initialValues={{
            useremail: '',
            userpassword: '',
          }}
          onSubmit={() => {}}
        >
          <Form className={css.forma}>
            <label htmlFor="useremail" className={css.formLabel}>
              Email
            </label>
            <Field type="text" name="useremail" className={css.formInput} />
            <label htmlFor="userpassword" className={css.formLabel}>
              Password
            </label>
            <Field type="text" name="userpassword" className={css.formInput} />
            <button type="submit" className={css.btn}>
              Log In
            </button>
          </Form>
        </Formik>
      </span>
    </div>
  );
}
