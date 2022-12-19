import { FC } from 'react';

interface Props {
  action: string;
  icon: JSX.Element;
}

const FormHeader: FC<Props> = ({ action, icon }) => {
  return (
    <div className='text-center'>
      <h1 className='page-caption page-caption--spaced | flex items-center justify-center font-bold'>
        {icon}
        {action}
      </h1>
      <p className='page-subcaption | text-3xl text-gray-500 font-bold mb-12'>
        Please {action} to get inventory access
      </p>
    </div>
  );
};
export default FormHeader;
