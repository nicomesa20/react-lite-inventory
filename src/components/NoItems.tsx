import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  entity: string;
  redirectUrl: string;
}

const NoItems: FC<Props> = ({ entity, redirectUrl }) => {
  return (
    <div className='flex flex-col items-center text-2xl pt-10 text-center'>
      <img className='w-40' src='/images/no-results.png' alt='No results' />
      <p className='md:w-75'>
        Opss ... looks like there are no {entity},{' '}
        <Link to={redirectUrl} className='link link-primary'>
          Click here
        </Link>{' '}
        to create one!
      </p>
    </div>
  );
};

export default NoItems;
