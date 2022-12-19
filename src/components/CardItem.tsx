import { FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props extends PropsWithChildren {
  color?: TailwindThemeColors;
  redirect?: string;
}

const CardItem: FC<Props> = ({ color = 'primary', children, redirect }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    redirect && navigate(redirect);
  };

  return (
    <div
      className={`relative grid gap-1 pl-6 pr-3 py-3 bg-slate-50 rounded-lg overflow-hidden before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-${color} hover:bg-slate-200 hover:shadow-lg transition-all duration-75 ease-out ${
        redirect && 'hover:cursor-pointer'
      }`}
      onClick={handleRedirect}
    >
      {children}
    </div>
  );
};
export default CardItem;
