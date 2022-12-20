import { FC } from 'react';
import {
  FaFingerprint,
  FaInfoCircle,
  FaEdit,
  FaTrashAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import CardItem from './CardItem';

interface Props {
  product: Product;
}

const ProductItem: FC<Props> = ({ product }) => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <CardItem>
      <h2 className='text-3xl text-secondary'>{product.name}</h2>
      <div className='flex text-xl items-center '>
        <FaFingerprint className='mr-2 text-primary' /> {product.id}
      </div>
      <div className='flex text-xl items-center '>
        <FaInfoCircle className='mr-2 text-secondary' /> {product.description}
      </div>
      {user?.isAdmin && (
        <div className='flex justify-end items-center gap-2'>
          <Link to='/product'>
            <FaEdit />
          </Link>
          <button>
            <FaTrashAlt />
          </button>
        </div>
      )}
    </CardItem>
  );
};
export default ProductItem;
