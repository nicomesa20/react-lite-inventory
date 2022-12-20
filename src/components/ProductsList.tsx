import { FC } from 'react';
import NoItems from './NoItems';
import ProductItem from './ProductItem';

interface Props {
  products: Product[];
  isAdmin: boolean;
}

const ProductsList: FC<Props> = ({ products, isAdmin }) => {
  return (
    <>
      {products.length > 0 ? (
        <div className='responsive-grid | mt-6'>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <NoItems
          entity='products'
          redirectUrl='./product'
          showRedirect={isAdmin}
        />
      )}
    </>
  );
};
export default ProductsList;
