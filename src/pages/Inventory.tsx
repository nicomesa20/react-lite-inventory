import { FC, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import DownloadPdf from '../components/DownloadPdf';
import Header from '../components/Header';
import ProductsList from '../components/ProductsList';

const productsMock: Product[] = [
  {
    id: '123',
    name: 'Rascahuevos',
    description: 'Rasca huevos chimba',
  },
  {
    id: '123',
    name: 'Rascahuevos',
    description: 'Rasca huevos chimba',
  },
  {
    id: '123',
    name: 'Rascahuevos',
    description: 'Rasca huevos chimba',
  },
  {
    id: '123',
    name: 'Rascahuevos',
    description: 'Rasca huevos chimba',
  },
  {
    id: '123',
    name: 'Rascahuevos',
    description: 'Rasca huevos chimba',
  },
];

const Inventory: FC = () => {
  const [products] = useState(productsMock);
  const { id } = useParams();
  return (
    <div>
      <Header />
      <main className='container | mt-6'>
        <BackButton redirect='../inventory' />
        <h1 className='page-caption | text-center'>Manage inventory</h1>
        <div className='action-buttons | flex justify-end gap-2 mt-6'>
          <Link to='./product' className='btn btn-outline'>
            <FaPlus className='mr-2' />
            New product
          </Link>
          <DownloadPdf />
        </div>
        <ProductsList products={products} />
      </main>
    </div>
  );
};
export default Inventory;
