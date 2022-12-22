import { FC } from 'react';

interface Props {
  isAdmin: boolean;
  companyCount: number;
}

const Stats: FC<Props> = ({ isAdmin, companyCount }) => {
  return (
    <div className='flex gap-4 text-white'>
      <div className='flex-1 bg-primary rounded-box flex items-center p-4 shadow-xl'>
        <div className='flex-1 px-2'>
          <h2 className='text-xl md:text-3xl font-extrabold'>{companyCount}</h2>{' '}
          <p className='text-sm text-opacity-80'>Companies</p>
        </div>
      </div>
      {/* <div className='flex-1 bg-secondary rounded-box flex items-center p-4 shadow-xl'>
        <div className='flex-1 px-2'>
          <h2 className='text-xl md:text-3xl font-extrabold'>1000</h2>
          <p className='text-sm text-opacity-80'>Products</p>
        </div>
      </div> */}
      {isAdmin && (
        <div className='flex-1 bg-info rounded-box flex items-center p-4 shadow-xl'>
          <div className='flex-1 px-2'>
            <h2 className='text-xl md:text-3xl font-extrabold'>3</h2>
            <p className='text-sm text-opacity-80'>Users</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Stats;
