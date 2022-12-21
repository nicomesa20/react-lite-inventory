import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import Input from '../components/Input';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { createProduct, reset } from '../features/product';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';

type Form = {
  name: string;
  description: string;
  quantity: number;
};

const formSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup
    .string()
    .required('Description is required')
    .min(10, 'At least 10 characters needed'),
  quantity: yup.number().min(0, 'Min 0').required('Quantity is required'),
});

const CreateProduct = () => {
  const { isError, isLoading, isSuccess, message } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();
  const { id, productId } = useParams();
  const navigate = useNavigate();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<Form>({ mode: 'onTouched', resolver: yupResolver(formSchema) });

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [message, isError, isSuccess, navigate, dispatch]);

  const handleCreate = (value: Form) => {
    const product: CreateProductRequest = {
      ...value,
      companyId: id!,
    };
    dispatch(createProduct(product));
    toast.success('Product created!');
    navigate(-1);
  };

  if (isLoading) return <Spinner />;

  return (
    <div>
      <Header />
      <main className='container | mt-6'>
        <BackButton redirect='/inventory' />
        <div className='text-center mb-4'>
          <h1 className='page-caption m-0'>Create new product </h1>
          <p className='page-subcaption'>Please fill out the form bellow</p>
        </div>
        <form onSubmit={handleSubmit(handleCreate)}>
          <Input register={register('name')} errors={errors} type='text' />
          <Input
            register={register('description')}
            errors={errors}
            type='text'
          />
          <Input
            register={register('quantity')}
            errors={errors}
            type='number'
            min='0'
          />
          <button className='form-button'>Submit</button>
        </form>
      </main>
      {/* form */}
    </div>
  );
};
export default CreateProduct;
