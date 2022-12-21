import { FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { logout, reset } from '../features/auth';

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div className='container'>
      <header className='bg-gray-200 flex items-center justify-between mt-5 p-3 rounded-lg h-18'>
        {/* logo */}
        <Link to='/' className='flex items-center'>
          <img className='w-10 h-10' src='/images/inventory.png' alt='' />
          <p className='ml-2'>Stapp</p>
        </Link>
        <button
          onClick={() => {
            dispatch(logout());
            dispatch(reset());
            navigate('/login');
          }}
          className='btn btn-primary flex items-center gap-1'
        >
          Logout
          <FaSignOutAlt />
        </button>
      </header>
    </div>
  );
};

export default Header;
