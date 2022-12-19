import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='max-w-7xl mx-auto bg-slate-500 flex items-center justify-between mt-3 p-3 rounded-lg'>
      {/* logo */}
      <Link to='/' className='flex items-center'>
        <img className='w-12 h-12' src='/images/inventory.png' alt='' />
        <p className='text-white ml-2'>InvenApp</p>
      </Link>
      {/* links */}
      {/* <div>Link</div> */}
    </header>
  );
};

export default Header;
