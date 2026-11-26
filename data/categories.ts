import { ProductCategorySlug } from '@/types/product';

export interface CategoryInfo {
  slug: ProductCategorySlug;
  name: string;
  description: string;
  image: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    slug: 'deportes-recreacion',
    name: 'Deportes y Recreación',
    description: 'Equilibrio, actividad física y entretenimiento de alta demanda.',
    image: '/products/pogo-ball-1.jpg',
  },
  {
    slug: 'hogar-limpieza',
    name: 'Hogar y Limpieza',
    description: 'Soluciones prácticas y efectivas para el mantenimiento del hogar.',
    image: '/products/wild-tornado-1.jpg',
  },
  {
    slug: 'cocina-utilitarios',
    name: 'Cocina y Utilitarios',
    description: 'Herramientas funcionales y resistentes para preparación diaria.',
    image: '/products/pelador-verduras-1.jpg',
  },
  {
    slug: 'iluminacion-climatizacion',
    name: 'Iluminación y Climatización',
    description: 'Iluminación LED integrada con ventilación eficiente para interiores.',
    image: '/products/f4-fan-light-1.jpg',
  },
  {
    slug: 'belleza-accesorios',
    name: 'Belleza y Accesorios',
    description: 'Cuidado personal y sets de accesorios de alta rotación.',
    image: '/products/kit-vinchas-1.jpg',
  },
];

export function getCategoryBySlug(slug: ProductCategorySlug): CategoryInfo | undefined {
  return CATEGORIES.find((category) => category.slug === slug);
}

