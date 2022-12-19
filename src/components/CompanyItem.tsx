import { FC, PropsWithChildren } from 'react';
import { FaFingerprint, FaRegAddressBook, FaPhone } from 'react-icons/fa';
import CardItem from './CardItem';

interface Props extends PropsWithChildren {
  company: Company;
}

const CompanyItem: FC<Props> = ({ company }) => {
  return (
    <CardItem redirect={`./${company.nit}`}>
      <h2 className='text-3xl text-primary'>{company.name}</h2>
      <div className='flex text-xl items-center '>
        <FaFingerprint className='mr-2 text-primary' /> {company.nit}
      </div>
      <div className='flex text-xl items-center '>
        <FaRegAddressBook className='mr-2 text-secondary' /> {company.address}
      </div>
      <div className='flex text-xl items-center '>
        <FaPhone className='mr-2 text-info' /> {company.phone}
      </div>
    </CardItem>
  );
};
export default CompanyItem;
