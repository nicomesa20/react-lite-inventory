import React, { FC } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: FC = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <main className='container'>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
