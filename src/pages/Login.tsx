import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import FormHeader from '../components/FormHeader';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../components/Input';
type Form = {
  email: string;
  password: string;
};

const Login: FC = () => {
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Emaile is required'),
    password: yup.string().required('Password is required'),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Form>({ mode: 'onTouched', resolver: yupResolver(formSchema) });

  const loginHandle = (value: Form) => {
    toast.success('Logged in!');
    navigate('/');
  };

  return (
    <div className='container'>
      <div className='max-w-4xl mt-24 mx-auto px-4'>
        <FormHeader action='Login' icon={<FaSignInAlt />} />
        <form onSubmit={handleSubmit(loginHandle)}>
          <Input register={register('email')} errors={errors} type='email' />
          <Input
            register={register('password')}
            errors={errors}
            type='password'
          />
          <p className='mb-2'>
            Still have no account?
            <Link to='/register' className='link link-primary ml-2'>
              Register!
            </Link>
          </p>
          <button className='form-button'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
