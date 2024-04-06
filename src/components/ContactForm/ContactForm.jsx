import { Formik, Field, Form } from 'formik';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { addContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const phoneRegex = /^([0-9]+-)*[0-9]+$/;

const ValidationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(phoneRegex, 'Phone number is not valid')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    )
      .unwrap()
      .then(() => toast.success('You have just added a new user'))
      .catch(() => toast.error('Something went wrong'));

    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
      >
        <Form className={css.form}>
          <label htmlFor="name" className={css.labelName}>
            Name
          </label>
          <Field type="text" name="name" className={css.inputName}></Field>
          <ErrorMessage name="name" component="span" className={css.error} />
          <label htmlFor="number" className={css.labelNumber}>
            Number
          </label>
          <Field type="tel" name="number" className={css.inputName}></Field>
          <ErrorMessage name="number" component="span" className={css.error} />
          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
