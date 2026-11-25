import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, PackageCheck, PackageX, ArrowUpRight } from 'lucide-react';
import { PublicProduct } from '@/types/product';
import { getCategoryBySlug } from '@/data/categories';
import { formatUSD } from '@/lib/utils/currency';
import { buildProductOrderUrl } from '@/lib/utils/whatsapp';
import { BUSINESS_CONFIG } from '@/config/business';

interface ProductCardProps {
  product: PublicProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const category = getCategoryBySlug(product.category);
  const inStock = product.stock > 0;
  const productFullUrl = `${BUSINESS_CONFIG.domain}/producto/${product.slug}`;

  const quickOrderUrl = buildProductOrderUrl({
    productName: product.name,
    sku: product.sku,
    quantity: 1,
    unitPrice: product.pricing.retailPrice,
    customerType: 'Minorista',
    productUrl: productFullUrl,
  });

  return (
    <article className="group bg-white border border-slate-200 rounded-md overflow-hidden flex flex-col justify-between transition-colors hover:border-slate-300">
      <div>
        {/* Contenedor de fotografía 1:1 */}
        <Link
          href={`/producto/${product.slug}`}
          className="relative block aspect-square bg-slate-50 border-b border-slate-100 overflow-hidden"
        >
          <Image
            src={product.images.main}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
          />

          {/* Etiqueta de oferta solo si está configurada */}
          {product.pricing.promoBadge && (
            <span className="absolute top-3 left-3 bg-[#F5820D] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
              {product.pricing.promoBadge}
            </span>
          )}
        </Link>

        {/* Información comercial */}
        <div className="p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between gap-2 text-xs">
            <span className="font-medium text-slate-500 truncate">
              {category?.name ?? 'Catálogo'}
            </span>
            {inStock ? (
              <span className="inline-flex items-center gap-1 text-[#0D7A3E] font-medium shrink-0">
                <PackageCheck className="w-3.5 h-3.5" />
                <span>Disponible</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-slate-400 font-medium shrink-0">
                <PackageX className="w-3.5 h-3.5" />
                <span>Bajo pedido</span>
              </span>
            )}
          </div>

          <div>
            <Link href={`/producto/${product.slug}`}>
              <h3 className="text-base font-bold text-[#041E42] group-hover:text-[#003B8E] transition-colors line-clamp-2">
                {product.name}
              </h3>
            </Link>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
              {product.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Bloque de precios diferenciados y acciones */}
      <div className="px-4 sm:px-5 pb-5 pt-3 border-t border-slate-100 space-y-3.5">
        <div className="flex items-end justify-between gap-2">
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-medium">
              Precio minorista
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-extrabold text-[#041E42] tabular-price">
                {formatUSD(product.pricing.retailPrice)}
              </span>
              {product.pricing.compareAtRetailPrice && (
                <span className="text-xs text-slate-400 line-through tabular-price">
                  {formatUSD(product.pricing.compareAtRetailPrice)}
                </span>
              )}
            </div>
          </div>

          {product.pricing.merchantPrice !== undefined && (
            <div className="text-right bg-[#F8FAFC] border border-slate-200 px-2.5 py-1.5 rounded-sm">
              <span className="block text-[10px] uppercase tracking-wider text-[#003B8E] font-semibold">
                Comerciante{product.pricing.merchantMinQty ? ` (${product.pricing.merchantMinQty}+)` : ''}
              </span>
              <span className="text-sm font-bold text-[#003B8E] tabular-price">
                {formatUSD(product.pricing.merchantPrice)}
              </span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link
            href={`/producto/${product.slug}`}
            className="inline-flex items-center justify-center gap-1 bg-white hover:bg-slate-50 text-[#041E42] border border-slate-300 text-xs font-semibold py-2.5 px-3 rounded-md transition-colors"
          >
            <span>Ver ficha</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href={quickOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 bg-[#F5820D] hover:bg-[#D96B00] text-white text-xs font-semibold py-2.5 px-3 rounded-md transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Consultar</span>
          </a>
        </div>
      </div>
    </article>
  );
}

