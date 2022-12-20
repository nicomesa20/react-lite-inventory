import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router';
import { useAppSelector } from '../app/hooks';
import { Roles } from '../models/user';
import Spinner from './Spinner';

interface Props extends PropsWithChildren {
  redirect: string;
  role: Roles;
}

const RoleGuardRoute: FC<Props> = ({ children, role, redirect }) => {
  const { isLoading, user } = useAppSelector((state) => state.auth);

  if (isLoading) return <Spinner />;

  if (user?.role !== role) return <Navigate to={redirect} />;

  return <>{children}</>;
};
export default RoleGuardRoute;
