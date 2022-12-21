import { FC, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormHeader from '../components/FormHeader';
import { FaUser } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../components/Input';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { register as registerAction, reset } from '../features/auth';
import Spinner from '../components/Spinner';

type Form = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

const Register: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user, isLoading, isSuccess, message, isError } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Redirect when logged in
    if (isSuccess || user) {
      toast.success('Register successfull!');
      navigate('/login');
    }

    // Reset
    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const formSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: Yup.string()
      .min(4, 'Password should be at least 4 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .min(4, 'Password should be at least 4 characters')
      .required('Confirm password is required')
      .oneOf([Yup.ref('password')], 'Passwords do not match'),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Form>({ mode: 'onTouched', resolver: yupResolver(formSchema) });

  const registerHandle = (value: Form) => {
    const { confirmPassword, ...registerPayload } = value;
    dispatch(registerAction(registerPayload));
  };

  if (isLoading) return <Spinner />;

  return (
    <div className='container'>
      <div className='max-w-4xl mt-24 mx-auto px-4'>
        <FormHeader action='Register' icon={<FaUser />} />
        <form onSubmit={handleSubmit(registerHandle)}>
          <Input register={register('name')} errors={errors} type='text' />
          <Input register={register('email')} errors={errors} type='email' />
          <Input
            register={register('password')}
            errors={errors}
            type='password'
          />
          <Input
            register={register('confirmPassword')}
            errors={errors}
            type='password'
          />
          <p className='mb-2'>
            Have an account?
            <Link to='/login' className='link link-primary ml-2'>
              Login!
            </Link>
          </p>
          <button className='form-button'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
