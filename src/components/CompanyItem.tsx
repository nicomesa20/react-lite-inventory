import { FC, PropsWithChildren, MouseEvent } from 'react';
import {
  FaFingerprint,
  FaRegAddressBook,
  FaPhone,
  FaEdit,
  FaTrashAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { deleteCompany, getCompanies } from '../features/companies';
import { selectCompany } from '../features/companies/companySlice';
import CardItem from './CardItem';
import Spinner from './Spinner';

interface Props extends PropsWithChildren {
  company: Company;
  isAdmin: boolean;
}

const CompanyItem: FC<Props> = ({ company, isAdmin }) => {
  const { isLoading } = useAppSelector((state) => state.company);
  const dispatch = useAppDispatch();

  const handleEdit = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(selectCompany(company));
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(deleteCompany(company.id));
    toast.success('Company deleted');
  };

  if (isLoading) return <Spinner />;
  return (
    <CardItem
      redirect={isAdmin ? `./${company.id}` : `./inventory/${company.id}`}
    >
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
      {isAdmin && (
        <div className='flex justify-end items-center gap-2'>
          <button onClick={handleEdit}>
            <FaEdit />
          </button>
          <button onClick={handleDelete}>
            <FaTrashAlt />
          </button>
        </div>
      )}
    </CardItem>
  );
};
export default CompanyItem;
