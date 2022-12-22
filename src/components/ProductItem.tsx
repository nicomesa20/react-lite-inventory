import { FC, useEffect } from 'react';
import { FaInfoCircle, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { deleteItem } from '../features/product';
import CardItem from './CardItem';

interface Props {
  product: Product;
  isAdmin: boolean;
}

const ProductItem: FC<Props> = ({ product, isAdmin }) => {
  const { isError, isSuccess, message } = useAppSelector(
    (state) => state.products
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) toast.error(message);
  }, [isError, isSuccess, message]);

  const handleProductDelete = () => {
    dispatch(deleteItem(product.id));
  };

  return (
    <CardItem>
      <div className='flex justify-between items-center'>
        <h2 className='text-3xl text-secondary'>{product.name}</h2>
      </div>
      <div className='flex text-xl items-center'>
        <FaInfoCircle className='mr-2 text-secondary' /> {product.description}
      </div>
      <div className='flex text-xl items-center '>
        <p className='badge'>
          {product.quantity} <span className='ml-3'> items </span>
        </p>
      </div>
      {isAdmin && (
        <div className='flex justify-end items-center gap-2'>
          <button onClick={handleProductDelete}>
            <FaTrashAlt />
          </button>
        </div>
      )}
    </CardItem>
  );
};
export default ProductItem;
