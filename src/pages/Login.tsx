import { FC, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import FormHeader from '../components/FormHeader';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../components/Input';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { login, reset } from '../features/auth';
import Spinner from '../components/Spinner';
type Form = {
  email: string;
  password: string;
};

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Emaile is required'),
  password: yup.string().required('Password is required'),
});

const Login: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isError, user, isLoading, isSuccess, message } = useAppSelector(
    (state) => state.auth
  );

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Form>({ mode: 'onTouched', resolver: yupResolver(formSchema) });

  useEffect(() => {
    isError && toast.error(message);

    if (isSuccess || user) {
      toast.success('Login successfull!');
      navigate('/');
    }
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const loginHandle = (value: Form) => {
    dispatch(login(value));
  };

  if (isLoading) return <Spinner />;

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
