import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';

const productsMock: Product[] = [
  {
    id: '123',
    name: 'Rascahuevos',
    description: 'Rasca huevos chimba',
  },
];

const Inventory: FC = () => {
  const [products, setProducts] = useState(productsMock);
  const { id } = useParams();
  return (
    <div>
      <Header />
      <main className='container | mt-6'>
        <BackButton redirect='../inventory' />
        <div className='text-center mb-4'>
          <h1 className='page-caption'>Manage inventory</h1>
          <p className='page-subcaption'>Please select a company</p>
        </div>
        <div>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};
export default Inventory;
