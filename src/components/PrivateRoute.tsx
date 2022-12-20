import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router';
import { useAuthStatus } from '../hooks/useAuthStatus';
import Spinner from './Spinner';

interface Props extends PropsWithChildren {
  redirect?: string;
}

const PrivateRoute: FC<Props> = ({ children, redirect = '/login' }) => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) return <Spinner />;

  if (!loggedIn) return <Navigate to={redirect} />;

  return <>{children}</>;
};
export default PrivateRoute;
