import { useState } from 'react';
import BackButton from '../components/BackButton';
import CompanyItem from '../components/CompanyItem';
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
        <BackButton />
        <div className='text-center mb-4'>
          <h1 className='page-caption'>Manage companies</h1>
          <p className='page-subcaption'>Please select a company</p>
        </div>
        <div className='responsive-grid'>
          {companies.map((company) => (
            <CompanyItem key={company.nit} company={company} />
          ))}
        </div>
      </main>
    </div>
  );
};
export default InventoryList;
