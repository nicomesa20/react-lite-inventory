import React, { FC, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import FormHeader from '../components/FormHeader';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { patterns } from '../constants';

const Login: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const loginHandle = (e: FormEvent) => {
    e.preventDefault();
    toast.success('Logged in!');
  };
  return (
    <div className='container'>
      <div className='max-w-4xl mt-24 mx-auto px-4'>
        <FormHeader action='Login' icon={<FaSignInAlt />} />
        <form onSubmit={loginHandle}>
          <input type='email' placeholder='email' className='form-input' />
          <input
            {...register('email', {
              required: true,
              pattern: {
                value: patterns.EMAIL_PATTERN,
                message: 'Please enter a valid email',
              },
            })}
            type='password'
            placeholder='password'
            className='form-input'
          />
          <div className='form-group'>
            <input
              {...register('password', {
                required: true,
                minLength: {
                  value: 8,
                  message: 'Min length 8',
                },
              })}
              type='password'
              placeholder='password'
              className='form-input'
            />
            {errors.password?.type === 'pattern' && (
              <div className='alert alert-warning shadow-lg'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='stroke-current flex-shrink-0 h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                    />
                  </svg>
                  <span>Warning: {}</span>
                </div>
              </div>
            )}
          </div>
          <p className='mb-2'>
            Still have no account?
            <Link to='/register' className='link link-primary ml-2'>
              Register!
            </Link>
          </p>
          <button className='btn btn-primary btn-block'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
