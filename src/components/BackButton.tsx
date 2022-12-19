import { FC } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Props {
  redirect?: string;
}

const BackButton: FC<Props> = ({ redirect = '../' }) => {
  return (
    <Link
      to={redirect}
      className='group btn btn-primary btn-outline mb-6 transition-all duration-100  ease-out'
    >
      <FaArrowCircleLeft className='mr-2 group-hover:-translate-x-2' />
      Back
    </Link>
  );
};
export default BackButton;
