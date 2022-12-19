import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Register: FC = () => {
  return (
    <div className='h-screen flex flex-col justify-center'>
      <div className='w-[380px] m-auto bg-indigo-100 py-10 px-4 rounded-lg text-gray-700'>
        <form>
          <h1 className='font-bold text-3xl uppercase text-center mb-4'>
            Registro
          </h1>
          <input
            type='email'
            placeholder='email'
            className='input input-bordered input-primary w-full mb-3 transition-all ease-out'
          />
          <input
            type='password'
            placeholder='password'
            className='input input-bordered input-primary w-full mb-3 transition-all ease-out'
          />
          <p>
            Ya tienes una cuenta?
            <Link to='/login' className='link link-primary ml-2 mb-2'>
              Logeate!
            </Link>
          </p>
          <button className='btn btn-primary w-full'>Adelante</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
