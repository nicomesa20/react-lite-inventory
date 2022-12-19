import { FC } from 'react';
import Header from '../components/Header';

const Home: FC = () => {
  return (
    <div className='h-screen max-w-7xl mx-auto'>
      <Header />
      <section>Home Page</section>
    </div>
  );
};

export default Home;
