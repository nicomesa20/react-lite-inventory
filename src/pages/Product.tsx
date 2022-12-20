import BackButton from '../components/BackButton';
import Header from '../components/Header';
import Input from '../components/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { patterns } from '../constants';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

type Form = {
  name: string;
  address: string;
  nit: string;
  phone: string;
};

const Product = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    addres: yup.string().required('Address is required'),
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

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<Form>({ mode: 'onTouched', resolver: yupResolver(formSchema) });

  const onCreate = (value: Form) => {
    console.log(value);
  };

  return (
    <div>
      <Header />
      <main className='container | mt-6'>
        <BackButton />
        <div className='text-center mb-4'>
          <h1 className='page-caption m-0'>Create new company </h1>
          <p className='page-subcaption'>Please fill out the form bellow</p>
        </div>
        <form onSubmit={handleSubmit(onCreate)}>
          <Input register={register('name')} errors={errors} type='text' />
          <Input register={register('address')} errors={errors} type='email' />
          <Input register={register('nit')} errors={errors} type='email' />
          <Input register={register('phone')} errors={errors} type='email' />
          <button className='form-button'>Submit</button>
        </form>
      </main>
      {/* form */}
    </div>
  );
};
export default Product;
