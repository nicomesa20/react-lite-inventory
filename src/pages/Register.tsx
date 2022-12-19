import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import FormHeader from '../components/FormHeader';
import { FaUser } from 'react-icons/fa';

const Register: FC = () => {
  return (
    <div className='container'>
      <div className='max-w-4xl mt-24 mx-auto px-4'>
        <FormHeader action='Register' icon={<FaUser />} />
        <form>
          <input type='email' placeholder='email' className='form-input ' />
          <input
            type='password'
            placeholder='password'
            className='form-input '
          />
          <p className='mb-2'>
            Have an account?
            <Link to='/login' className='link link-primary ml-2'>
              Login!
            </Link>
          </p>
          <button className='btn btn-primary btn-block'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
