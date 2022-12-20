type TailwindBackgroundThemeColors = 'bg-primary' | 'bg-accent' | 'bg-secondary' | 'bg-info' | 'bg-success';

interface IUser {
  id: string;
  name: string;
  email: string
  token: string;
  [key: string]: any;
}

interface LoginUser extends Pick<IUser, 'email'> {
  password: string
}

interface UserWithPassword extends Omit<IUser, 'id' | 'role'> {
  password: string
}

interface Company {
  address: string;
  name: string;
  nit: string;
  phone: string;
  [key: string]: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
}