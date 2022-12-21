import { FC } from 'react';
import {
  FaFingerprint,
  FaInfoCircle,
  FaEdit,
  FaTrashAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';

interface Props {
  product: Product;
  isAdmin: boolean;
}

const ProductItem: FC<Props> = ({ product, isAdmin }) => {
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
