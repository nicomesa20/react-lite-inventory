interface Company {
  address: string;
  name: string;
  nit: string;
  phone: string;
  [key: string]: any;
}

interface Product {
  id: string;
  name: string;
  description: string;
}

type TailwindThemeColors = 'primary' | 'accent' | 'secondary' | 'info' | 'success'