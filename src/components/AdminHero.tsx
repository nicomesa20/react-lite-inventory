import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa';

const AdminHero = () => {
  return (
    <div className='font-semibold text-center grid gap-3'>
      <h1 className='page-caption page-caption--spaced'>
        What are you aiming for?
      </h1>
      <p className='page-subcaption'>Please choose from an option below</p>
      <Link to='/create-company' className='btn btn-primary btn-block'>
        <FaQuestionCircle className='mr-2' />
        Create new company
      </Link>
      <Link to='/inventory' className='btn btn-outline btn-block'>
        <FaTicketAlt className='mr-2' />
        Manage inventory
      </Link>
    </div>
  );
};
export default AdminHero;
