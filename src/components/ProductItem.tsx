import { FC } from 'react';
import { FaFingerprint, FaInfoCircle } from 'react-icons/fa';
import CardItem from './CardItem';

interface Props {
  product: Product;
}

const ProductItem: FC<Props> = ({ product }) => {
  return (
    <CardItem color='secondary'>
      <h2 className='text-3xl text-secondary'>{product.name}</h2>
      <div className='flex text-xl items-center '>
        <FaFingerprint className='mr-2 text-primary' /> {product.id}
      </div>
      <div className='flex text-xl items-center '>
        <FaInfoCircle className='mr-2 text-secondary' /> {product.description}
      </div>
    </CardItem>
  );
};
export default ProductItem;
