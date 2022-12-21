import { FC } from 'react';
import { useAppSelector } from '../app/hooks';
import CompanyList from '../components/CompaniesList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import Stats from '../components/Stats';
import { useCompany } from '../hooks/useCompany';
import { User } from '../models/user';

const Home: FC = () => {
  const { companies, isLoading } = useCompany();
  const { user: userData } = useAppSelector((state) => state.auth);

  const user = new User(userData!);

  if (isLoading) return <Spinner />;

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
