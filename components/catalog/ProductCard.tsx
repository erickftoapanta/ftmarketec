import Link from 'next/link';
import Image from 'next/image';
import {
  MessageSquare,
  PackageCheck,
  PackageX,
  ArrowUpRight,
  Tag,
  Store,
} from 'lucide-react';
import { PublicProduct } from '@/types/product';
import { getCategoryBySlug } from '@/data/categories';
import { buildProductOrderUrl } from '@/lib/utils/whatsapp';
import { BUSINESS_CONFIG } from '@/config/business';

interface ProductCardProps {
  product: PublicProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const category = getCategoryBySlug(product.category);
  const inStock = product.stock > 0;
  const productFullUrl = `${BUSINESS_CONFIG.domain}/producto/${product.slug}`;
  const secondaryImage = product.images.gallery[1];

  const inquiryUrl = buildProductOrderUrl({
    productName: product.name,
    sku: product.sku,
    quantity: 1,
    customerType: 'Minorista (Uso personal)',
    productUrl: productFullUrl,
  });

  return (
    <article className="group bg-white border border-slate-200 rounded-md overflow-hidden flex flex-col justify-between transition-colors hover:border-slate-300">
      <div>
        <Link
          href={`/producto/${product.slug}`}
          className="relative block aspect-square bg-slate-50 border-b border-slate-100 overflow-hidden"
        >
          <Image
            src={product.images.main}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={`object-cover object-center transition-all duration-300 ${
              secondaryImage ? 'group-hover:opacity-0' : 'group-hover:scale-[1.03]'
            }`}
          />

          {secondaryImage && (
            <Image
              src={secondaryImage}
              alt={`${product.name} - vista alternativa`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}

          {product.commercial.promoHighlight && (
            <span className="absolute top-3 left-3 z-10 bg-[#F5820D] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
              {product.commercial.promoHighlight}
            </span>
          )}
        </Link>

        <div className="p-4 sm:p-5 space-y-2.5">
          <div className="flex items-center justify-between gap-2 text-xs">
            <span className="font-medium text-slate-500 truncate">
              {category?.name ?? 'Catálogo'}
            </span>
            {inStock ? (
              <span className="inline-flex items-center gap-1 text-[#0D7A3E] font-medium shrink-0">
                <PackageCheck className="w-3.5 h-3.5" />
                <span>Stock disponible</span>
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

      {/* Bloque de propuesta comercial sin precios numéricos */}
      <div className="px-4 sm:px-5 pb-5 pt-3 border-t border-slate-100 space-y-3">
        <div className="bg-[#F8FAFC] border border-slate-200 rounded-sm p-2.5 space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#041E42]">
              <Tag className="w-3.5 h-3.5 text-[#F5820D]" />
              <span>Venta individual y combos</span>
            </span>
            <span className="text-[11px] font-medium text-slate-500">
              Desde 1 ud.
            </span>
          </div>

          {product.commercial.hasMerchantTier && (
            <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-200/70">
              <span className="inline-flex items-center gap-1.5 font-semibold text-[#003B8E]">
                <Store className="w-3.5 h-3.5" />
                <span>Tarifa especial comerciante</span>
              </span>
              <span className="text-[11px] font-semibold text-[#003B8E]">
                {product.commercial.merchantMinQty
                  ? `Desde ${product.commercial.merchantMinQty} uds.`
                  : 'Por volumen'}
              </span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-5 gap-2">
          <Link
            href={`/producto/${product.slug}`}
            className="col-span-2 inline-flex items-center justify-center gap-1 bg-white hover:bg-slate-50 text-[#041E42] border border-slate-300 text-xs font-semibold py-2.5 px-2 rounded-md transition-colors"
          >
            <span>Detalles</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href={inquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-3 inline-flex items-center justify-center gap-1.5 bg-[#F5820D] hover:bg-[#D96B00] text-white text-xs font-semibold py-2.5 px-2.5 rounded-md transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 shrink-0" />
            <span>Consultar precio</span>
          </a>
        </div>
      </div>
    </article>
  );
}

