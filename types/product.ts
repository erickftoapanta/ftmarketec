export type ProductCategorySlug =
  | 'deportes-recreacion'
  | 'hogar-limpieza'
  | 'cocina-utilitarios'
  | 'iluminacion-climatizacion'
  | 'belleza-accesorios';

export interface WholesaleTier {
  minQty: number;
  maxQty?: number;
  unitPrice: number;
  label?: string;
}

export interface ProductPricing {
  retailPrice?: number;
  compareAtRetailPrice?: number;
  merchantPrice?: number;
  merchantMinQty?: number;
  wholesaleTiers?: WholesaleTier[];
  hasMerchantTier: boolean;
  promoHighlight?: string;
}

export interface ProductCommercialInfo {
  hasMerchantTier: boolean;
  merchantMinQty?: number;
  promoHighlight?: string;
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
  acquisitionCost: number;
  pricing: ProductPricing;
  stock: number;
  isPublished: boolean;
  isFeatured: boolean;
  updatedAt: string;
}

export type PublicProduct = Omit<
  ProductInternalRecord,
  'acquisitionCost' | 'pricing'
> & {
  commercial: ProductCommercialInfo;
};

