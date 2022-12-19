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

type TailwindBackgroundThemeColors = 'bg-primary' | 'bg-accent' | 'bg-secondary' | 'bg-info' | 'bg-success'