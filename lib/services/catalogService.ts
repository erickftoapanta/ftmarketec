import { INTERNAL_CATALOG } from '@/data/catalog';
import { ProductCategorySlug, ProductInternalRecord, PublicProduct } from '@/types/product';

function toPublicProduct(record: ProductInternalRecord): PublicProduct {
  const { acquisitionCost: _hiddenCost, ...publicData } = record;
  return publicData;
}

export function getPublishedProducts(): PublicProduct[] {
  return INTERNAL_CATALOG.filter((item) => item.isPublished).map(toPublicProduct);
}

export function getFeaturedProducts(): PublicProduct[] {
  return INTERNAL_CATALOG.filter((item) => item.isPublished && item.isFeatured).map(
    toPublicProduct
  );
}

export function getOfferProducts(): PublicProduct[] {
  return INTERNAL_CATALOG.filter(
    (item) =>
      item.isPublished &&
      Boolean(item.pricing.promoBadge || item.pricing.compareAtRetailPrice)
  ).map(toPublicProduct);
}

export function getProductBySlug(slug: string): PublicProduct | undefined {
  const found = INTERNAL_CATALOG.find((item) => item.isPublished && item.slug === slug);
  return found ? toPublicProduct(found) : undefined;
}

export function getRelatedProducts(
  category: ProductCategorySlug,
  excludeId: string,
  limit = 4
): PublicProduct[] {
  const sameCategory = INTERNAL_CATALOG.filter(
    (item) => item.isPublished && item.category === category && item.id !== excludeId
  );
  const others = INTERNAL_CATALOG.filter(
    (item) => item.isPublished && item.category !== category && item.id !== excludeId
  );

  return [...sameCategory, ...others].slice(0, limit).map(toPublicProduct);
}


