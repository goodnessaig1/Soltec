import { Formik, Field, Form } from 'formik';
import { SlArrowLeftCircle } from 'react-icons/sl';
// GOCSPX - LTj0Hk - D3aWo1Xtb4OIqOJ5t_HFx;
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { TextInput } from '../../utils/FormLib';
import * as Yup from 'yup';

const SalesRepLogin = () => {
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
            <h3>Welcome</h3>
            <h5>Login</h5>
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
                    label='Your Email*'
                    type='email'
                    name='email'
                    className='input'
                    placeholder='Email your email'
                  />
                  <div className='input_container'>
                    <label htmlFor='password'>password*</label>
                    <Field
                      type='password'
                      name='password'
                      className='input'
                      placeholder='Email your password'
                    />
                  </div>
                  <div className='input__container'>
                    <label htmlFor='rememberMe'>
                      <Field
                        type='checkbox'
                        id='rememberMe'
                        name='rememberMe'
                      />
                      Remember me
                    </label>
                  </div>

                  <button type='submit' className='login__btn'>
                    <Link to='/user/dashboard' className='button'>
                      Login
                    </Link>
                  </button>
                </Form>
              )}
            </Formik>
            <div className='not_registered'>
              Not registered yet?{' '}
              <Link to='/create_account' className='register_link'>
                Create a new account
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

export default SalesRepLogin;
