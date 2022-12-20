import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';
import CompanyList from '../components/CompaniesList';
import Header from '../components/Header';

const companiesMock: Company[] = [
  {
    address: 'Calle 123',
    name: 'SirPollo',
    nit: '12345',
    phone: '1234567',
  },
  {
    address: 'Calle 123',
    name: 'SirPollo',
    nit: '12345',
    phone: '1234567',
  },
  {
    address: 'Calle 123',
    name: 'SirPollo',
    nit: '12345',
    phone: '1234567',
  },
  {
    address: 'Calle 123',
    name: 'SirPollo',
    nit: '12345',
    phone: '1234567',
  },
];

const InventoryList = () => {
  const [companies, setCompanies] = useState(companiesMock);
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
        <CompanyList companies={companies} isAdmin={true} />
      </main>
    </div>
  );
};
export default InventoryList;
