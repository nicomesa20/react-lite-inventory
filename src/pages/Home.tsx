import { FC, useState } from 'react';
import { useAppSelector } from '../app/hooks';
import CompanyList from '../components/CompaniesList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Stats from '../components/Stats';

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

const Home: FC = () => {
  const [companies] = useState(companiesMock);
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <main className='container mt-10 grid'>
        <Stats isAdmin={!!user?.isAdmin} />
        <CompanyList companies={companies} isAdmin={!!user?.isAdmin} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
