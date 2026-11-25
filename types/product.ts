export type ProductCategorySlug =
  | 'hogar-limpieza'
  | 'cocina-utilitarios'
  | 'iluminacion-climatizacion'
  | 'deportes-recreacion'
  | 'belleza-accesorios'
  | 'automotriz';

export interface WholesaleTier {
  minQty: number;
  maxQty?: number;
  unitPrice: number;
  label?: string;
}

export interface ProductPricing {
  retailPrice: number;
  compareAtRetailPrice?: number;
  merchantPrice?: number;
  merchantMinQty?: number;
  wholesaleTiers?: WholesaleTier[];
  promoBadge?: string;
}

export interface ProductInternalRecord {
  id: string;
  sku: string;
  slug: string;
  name: string;
  category: ProductCategorySlug;
  shortDescription: string;
  description: string;
  features: string[];
  images: {
    main: string;
    gallery: string[];
  };
  videoUrl?: string;
  // Uso exclusivo interno / futuro panel admin (nunca se envía al cliente)
  acquisitionCost: number;
  pricing: ProductPricing;
  stock: number;
  isPublished: boolean;
  isFeatured: boolean;
  updatedAt: string;
}

export type PublicProduct = Omit<ProductInternalRecord, 'acquisitionCost'>;

