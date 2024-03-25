import { Field, Form, Formik } from 'formik';

export default function RegisterForm() {
  return (
    <>
      <Formik
        initialValues={{
          username: '',
          useremail: '',
          password: '',
        }}
        onSubmit={() => {}}
      >
        <Form>
          <label htmlFor="username">Username</label>
          <Field type="text" name="username" />
          <label htmlFor="useremail">Email</label>
          <Field type="text" name="useremail" />
          <label htmlFor="password">Password</label>
          <Field type="text" name="password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
