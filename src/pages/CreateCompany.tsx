import BackButton from '../components/BackButton';
import Header from '../components/Header';
import Input from '../components/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { patterns } from '../constants';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { createCompany, reset } from '../features/companies/companySlice';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const formSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  address: yup.string().required('Address is required'),
  nit: yup
    .string()
    .trim()
    .required('NIT is required')
    .matches(
      patterns.NIT_PATTERN,
      'NIT is incorrect, please follow this pattern: XXXXXX-X'
    ),
  phone: yup
    .string()
    .required('Phone is required')
    .matches(/\d{10}/),
});

type Form = {
  name: string;
  address: string;
  nit: string;
  phone: string;
};

const useCreateTicket = () => {
  const { isSuccess, isError, isLoading, message, company } = useAppSelector(
    (state) => state.company
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      dispatch(reset());
      navigate('/');
      toast.success('Company created');
    }

    dispatch(reset());
  }, [isError, isSuccess, navigate, dispatch, message, company]);

  const createCompanyHandle = (value: Company) => {
    dispatch(createCompany(value));
  };

  return { createCompanyHandle, isSuccess, isError, isLoading, company };
};

const CreateCompany = () => {
  const { createCompanyHandle, isLoading, company } = useCreateTicket();
  const {
    formState: { errors },
    register,
    handleSubmit,
    setValue,
  } = useForm<Form>({ mode: 'onTouched', resolver: yupResolver(formSchema) });

  useEffect(() => {
    if (company) {
      setValue('name', company.name);
      setValue('address', company.address);
      setValue('nit', company.nit);
      setValue('phone', company.phone);
    }
  }, [company, setValue]);

  if (isLoading) return <Spinner />;

  return (
    <div>
      <Header />
      <main className='container | mt-6'>
        <BackButton redirect='/admin' />
        <div className='text-center mb-4'>
          <h1 className='page-caption m-0'>Create new company </h1>
          <p className='page-subcaption'>Please fill out the form bellow</p>
        </div>
        <form onSubmit={handleSubmit(createCompanyHandle)}>
          <Input register={register('name')} errors={errors} type='text' />
          <Input register={register('address')} errors={errors} type='text' />
          <Input register={register('nit')} errors={errors} type='text' />
          <Input register={register('phone')} errors={errors} type='text' />
          <button className='form-button'>Submit</button>
        </form>
      </main>
    </div>
  );
};
export default CreateCompany;
