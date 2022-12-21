import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import BackButton from '../components/BackButton';
import CompanyList from '../components/CompaniesList';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import { useCompany } from '../hooks/useCompany';
import { User } from '../models/user';

const InventoryList = () => {
  const { companies, isLoading } = useCompany();
  const { user: userData } = useAppSelector((state) => state.auth);

  const user = new User(userData!);

  if (isLoading) return <Spinner />;
  return (
    <div>
      <Header />
      <main className='container | mt-6'>
        <BackButton redirect='/admin' />
        <h1 className='page-caption | text-center'>Manage companies</h1>
        <Link to='/create-company' className='btn btn-outline mt-6'>
          <FaPlus className='mr-2' />
          New company
        </Link>
        <CompanyList companies={companies} isAdmin={user.isAdmin} />
      </main>
    </div>
  );
};
export default InventoryList;
