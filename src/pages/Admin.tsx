import { FC } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AdminHero from '../components/AdminHero';

const Admin: FC = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <main className='container'>
        <AdminHero />
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
