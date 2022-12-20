import { useState } from 'react';
import BackButton from '../components/BackButton';
import CompanyItem from '../components/CompanyItem';
import Header from '../components/Header';
import NoItems from '../components/NoItems';

const companiesMock: Company[] = [
  // {
  //   address: 'Calle 123',
  //   name: 'SirPollo',
  //   nit: '12345',
  //   phone: '1234567',
  // },
  // {
  //   address: 'Calle 123',
  //   name: 'SirPollo',
  //   nit: '12345',
  //   phone: '1234567',
  // },
  // {
  //   address: 'Calle 123',
  //   name: 'SirPollo',
  //   nit: '12345',
  //   phone: '1234567',
  // },
  // {
  //   address: 'Calle 123',
  //   name: 'SirPollo',
  //   nit: '12345',
  //   phone: '1234567',
  // },
];

const InventoryList = () => {
  const [companies, setCompanies] = useState(companiesMock);
  return (
    <div>
      <Header />
      <main className='container | mt-6'>
        <BackButton />
        <h1 className='page-caption | text-center'>Manage companies</h1>
        {companies.length > 0 ? (
          <>
            <div className='text-center mb-4'>
              <p className='page-subcaption'>Please select a company</p>
            </div>
            <div className='responsive-grid'>
              {companies.map((company) => (
                <CompanyItem key={company.nit} company={company} />
              ))}
            </div>
          </>
        ) : (
          <NoItems entity='companies' redirectUrl='../create-company' />
        )}
      </main>
    </div>
  );
};
export default InventoryList;
