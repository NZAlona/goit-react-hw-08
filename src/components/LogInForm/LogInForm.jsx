import { Field, Formik, Form } from 'formik';

export default function LongInForm() {
  return (
    <>
      <Formik
        initialValues={{
          useremail: '',
          userpassword: '',
        }}
        onSubmit={() => {}}
      >
        <Form>
          <label htmlFor="useremail">Email</label>
          <Field type="text" name="useremail" />
          <label htmlFor="userpassword">Password</label>
          <Field type="text" name="userpassword" />
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </>
  );
}
