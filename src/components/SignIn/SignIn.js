import { Formik, Form } from 'formik';
import { SlArrowLeftCircle } from 'react-icons/sl';
// GOCSPX - LTj0Hk - D3aWo1Xtb4OIqOJ5t_HFx;
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { TextInput } from '../../utils/FormLib';
import * as Yup from 'yup';

const Register = () => {
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };
  return (
    <div className='login_in_home'>
      <div className='login_container'>
        <SlArrowLeftCircle
          size={30}
          onClick={handleGoBack}
          color='rgb(109, 113, 119)'
        />
        <div className='login__container'>
          <div className='login_left'>
            <h3>Create an account</h3>
            {/* <h5>Lo</h5> */}
            <Formik
              initialValues={{ email: '', password: '', rememberMe: false }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Required'),
                password: Yup.string()
                  .min(3, 'password is too short')
                  .max(70, 'password is too long')
                  .required('Required'),
              })}
              onSubmit={values => {
                console.log(values);
              }}
            >
              {() => (
                <Form className='form_container'>
                  <TextInput
                    label='First & Lastname'
                    type='text'
                    name='text'
                    className='input'
                    placeholder='Enter Your First and LastName'
                  />
                  <TextInput
                    label='Your Email*'
                    type='email'
                    name='email'
                    className='input'
                    placeholder='Email your email'
                  />
                  <TextInput
                    label='password*'
                    type='email'
                    name='password'
                    className='input'
                    placeholder='Email your password'
                  />
                  <TextInput
                    label='Confirm password*'
                    type='password'
                    name='password'
                    className='input'
                    placeholder='Confirm your password'
                  />

                  {/* <div className='input_container'>
                    <label htmlFor='password'>password*</label>
                    <Field
                      type='password'
                      name='password'
                      className='input'
                      placeholder='Email your password'
                    />
                  </div> */}
                  <button type='submit' className='login__btn'>
                    <Link to='/user/login' className='button'>
                      Create account
                    </Link>
                  </button>
                </Form>
              )}
            </Formik>
            <div className='not_registered'>
              Already have an account?{' '}
              <Link to='/create_account' className='register_link'>
                Login
              </Link>
            </div>
          </div>
          <div className='login_right'>
            <img
              src='https://ik.imagekit.io/nz8zngrxv/amazon-image/NA_SEP._29_c_vx_aD0n.jpg?updatedAt=1688509162107'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
