import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import NoItems from '../components/NoItems';
import ProductItem from '../components/ProductItem';

const productsMock: Product[] = [
  // {
  //   id: '123',
  //   name: 'Rascahuevos',
  //   description: 'Rasca huevos chimba',
  // },
  // {
  //   id: '123',
  //   name: 'Rascahuevos',
  //   description: 'Rasca huevos chimba',
  // },
  // {
  //   id: '123',
  //   name: 'Rascahuevos',
  //   description: 'Rasca huevos chimba',
  // },
  // {
  //   id: '123',
  //   name: 'Rascahuevos',
  //   description: 'Rasca huevos chimba',
  // },
  // {
  //   id: '123',
  //   name: 'Rascahuevos',
  //   description: 'Rasca huevos chimba',
  // },
];

const Inventory: FC = () => {
  const [products, setProducts] = useState(productsMock);
  const { id } = useParams();
  return (
    <div>
      <Header />
      <main className='container | mt-6'>
        <BackButton redirect='../inventory' />
        <h1 className='page-caption | text-center'>Manage inventory</h1>
        {products.length > 0 ? (
          <>
            <div className='mb-4'>
              <p className='page-subcaption'>Please select a company</p>
            </div>
            <div className='responsive-grid'>
              {products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <NoItems entity='products' redirectUrl='./' />
        )}
      </main>
    </div>
  );
};
export default Inventory;
