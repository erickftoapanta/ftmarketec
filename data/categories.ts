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
    description: 'Artículos activos, entrenamiento y entretenimiento.',
    image: '/products/pelota-saltarina-pogo.jpg',
  },
  {
    slug: 'hogar-limpieza',
    name: 'Hogar y Limpieza',
    description: 'Soluciones prácticas de mantenimiento y desinfección.',
    image: '/products/limpiador-desague.jpg',
  },
  {
    slug: 'cocina-utilitarios',
    name: 'Cocina y Utilitarios',
    description: 'Herramientas funcionales de uso diario para el hogar.',
    image: '/products/pelador-vegetales.jpg',
  },
  {
    slug: 'iluminacion-climatizacion',
    name: 'Iluminación y Climatización',
    description: 'Tecnología LED y ventilación eficiente para interiores.',
    image: '/products/foco-ventilador-f4.jpg',
  },
  {
    slug: 'belleza-accesorios',
    name: 'Belleza y Accesorios',
    description: 'Cuidado personal y accesorios de alta rotación.',
    image: '/products/kit-vinchas.jpg',
  },
  {
    slug: 'automotriz',
    name: 'Accesorios Automotrices',
    description: 'Repuestos ligeros, sujeción y equipamiento vehicular.',
    image: '/products/clips-automotrices.jpg',
  },
];

export function getCategoryBySlug(slug: ProductCategorySlug): CategoryInfo | undefined {
  return CATEGORIES.find((category) => category.slug === slug);
}

