import { FaPlus } from 'react-icons/fa';
import { FC, useEffect } from 'react';
import { getProducts, reset } from '../features/product';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import BackButton from '../components/BackButton';
import DownloadPdf from '../components/DownloadPdf';
import Header from '../components/Header';
import ProductsList from '../components/ProductsList';
import Spinner from '../components/Spinner';
import { User } from '../models/user';
import { downloadPdf } from '../features/product/productSlice';

const Inventory: FC = () => {
  const { products, isLoading, isSuccess } = useAppSelector(
    (state) => state.products
  );
  const { user: userData } = useAppSelector((state) => state.auth);

  const { id } = useParams();
  const dispatch = useAppDispatch();

  const user = new User(userData!);

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getProducts(id!));
  }, [id, dispatch]);

  const handleDownload = ({ email }: { email: string }) => {
    dispatch(downloadPdf({ id, email }));
  };

  if (isLoading) return <Spinner />;
  return (
    <div>
      <Header />
      <main className='container | mt-6'>
        <BackButton redirect={user.isAdmin ? '../inventory' : '../'} />
        <h1 className='page-caption | text-center'>
          {user.isAdmin ? 'Manage inventory' : 'Inventory'}
        </h1>
        <div className='action-buttons | flex justify-end gap-2 mt-6'>
          {user.isAdmin && (
            <Link to='./product' className='btn btn-outline'>
              <FaPlus className='mr-2' />
              New product
            </Link>
          )}
          {products.length > 0 && (
            <DownloadPdf handleDownload={handleDownload} />
          )}
        </div>
        <ProductsList products={products} isAdmin={user.isAdmin} />
      </main>
    </div>
  );
};
export default Inventory;
