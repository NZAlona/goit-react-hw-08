import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import css from './RegisterForm.module.css';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { registerRequest } from '../../redux/auth/operations';
// import toast, { Toaster } from 'react-hot-toast';

// const notify = () => toast('Here is your toast.');

// const App = () => {
//   return (
//     <div>
//       <button onClick={notify}>Make me a toast</button>
//       <Toaster />
//     </div>
//   );
// };

const ValidationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
  password: Yup.string().min(7, 'Too short').max(256, 'Too long').required('Required'),
});

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(registerRequest(values));
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
              name: '',
              email: '',
              password: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={ValidationSchema}
          >
            <Form className={css.forma} autoComplete="off">
              <label htmlFor="name" className={css.formLabel}>
                Username
              </label>
              <Field type="text" name="name" className={css.formInput} />
              <ErrorMessage name="name" component="span" className={css.error} />
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
