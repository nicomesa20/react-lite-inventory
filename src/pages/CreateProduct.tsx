import { patterns } from '../constants';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import Input from '../components/Input';

type Form = {
  name: string;
  description: string;
};

const CreateProduct = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    description: yup
      .string()
      .required('Description is required')
      .min(10, 'At least 10 characters needed'),
  });

  const {
    formState: { errors },
    register,
  } = useForm<Form>({ mode: 'onTouched', resolver: yupResolver(formSchema) });

  return (
    <div>
      <Header />
      <main className='container | mt-6'>
        <BackButton redirect='../' />
        <div className='text-center mb-4'>
          <h1 className='page-caption m-0'>Create new product </h1>
          <p className='page-subcaption'>Please fill out the form bellow</p>
        </div>
        <form>
          <Input register={register('name')} errors={errors} type='text' />
          <Input
            register={register('description')}
            errors={errors}
            type='text'
          />
          <button className='form-button'>Submit</button>
        </form>
      </main>
      {/* form */}
    </div>
  );
};
export default CreateProduct;
