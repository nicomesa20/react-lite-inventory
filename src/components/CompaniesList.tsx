import { FC } from 'react';
import CompanyItem from './CompanyItem';
import NoItems from './NoItems';

interface Props {
  companies: Company[];
  isAdmin: boolean;
}

const CompanyList: FC<Props> = ({ companies, isAdmin }) => {
  return (
    <>
      {companies.length > 0 ? (
        <>
          <div className='responsive-grid | mt-6'>
            {companies.map((company) => (
              <CompanyItem key={company.nit} company={company} />
            ))}
          </div>
        </>
      ) : (
        <NoItems
          entity='companies'
          redirectUrl='/create-company'
          showRedirect={isAdmin}
        />
      )}
    </>
  );
};
export default CompanyList;
