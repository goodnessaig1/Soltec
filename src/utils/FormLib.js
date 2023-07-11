import { Field, useField } from 'formik';
import './Formik.css';

export const TextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div style={{ position: 'relative' }}>
      <div className='input_container'>
        <label htmlFor={props.name}>{props.label}</label>
        <Field className='inputs' {...field} {...props} />
      </div>
      {meta.touched && meta.error ? (
        <div className='error_message'>{meta.error}</div>
      ) : (
        <div style={{ visibility: 'hidden' }} className='error_message'></div>
      )}
    </div>
  );
};
