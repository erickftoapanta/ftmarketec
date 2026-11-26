import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  ChevronRight,
  PackageCheck,
  PackageX,
  CheckCircle2,
  ArrowLeft,
} from 'lucide-react';
import {
  getProductBySlug,
  getPublishedProducts,
  getRelatedProducts,
} from '@/lib/services/catalogService';
import { getCategoryBySlug } from '@/data/categories';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductInquiryConfigurator } from '@/components/product/ProductInquiryConfigurator';
import { ProductCard } from '@/components/catalog/ProductCard';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getPublishedProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Producto no encontrado | FT Market EC',
    };
  }

  return {
    title: `${product.name} | FT Market EC`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} — FT Market EC`,
      description: product.shortDescription,
      images: [product.images.main],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.category);
  const relatedProducts = getRelatedProducts(product.category, product.id, 4);
  const inStock = product.stock > 0;

  return (
    <div className="bg-white">
      {/* Barra de navegación estructural (Breadcrumbs) */}
      <div className="bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav
            aria-label="Ruta de navegación"
            className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500"
          >
            <Link href="/" className="hover:text-[#041E42] transition-colors">
              Inicio
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link
              href="/catalogo"
              className="hover:text-[#041E42] transition-colors"
            >
              Catálogo
            </Link>
            {category && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <Link
                  href={`/catalogo?categoria=${category.slug}`}
                  className="hover:text-[#041E42] transition-colors"
                >
                  {category.name}
                </Link>
              </>
            )}
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-[#041E42] truncate max-w-[220px] sm:max-w-md">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Sección principal: Galería + Configurador de cotización */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Columna izquierda: Galería multifoto */}
          <div className="lg:col-span-6">
            <ProductGallery
              productName={product.name}
              images={product.images.gallery}
              promoHighlight={product.commercial.promoHighlight}
            />
          </div>

          {/* Columna derecha: Información comercial y consulta */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  {category && (
                    <Link
                      href={`/catalogo?categoria=${category.slug}`}
                      className="font-semibold uppercase tracking-wider text-[#003B8E] hover:underline"
                    >
                      {category.name}
                    </Link>
                  )}
                  <span className="text-slate-300">|</span>
                  <span className="font-mono text-slate-500">
                    SKU: {product.sku}
                  </span>
                </div>

                {inStock ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-emerald-50 text-[#0D7A3E] font-semibold">
                    <PackageCheck className="w-4 h-4" />
                    <span>Disponible para entrega</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-slate-100 text-slate-600 font-semibold">
                    <PackageX className="w-4 h-4" />
                    <span>Disponible bajo pedido</span>
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#041E42] leading-tight">
                {product.name}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Configurador interactivo WhatsApp */}
            <ProductInquiryConfigurator product={product} />
          </div>
        </div>

        {/* Descripción extendida y características técnicas */}
        <div className="mt-12 pt-10 border-t border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7 space-y-3">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#041E42]">
              Descripción general
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#F8FAFC] border border-slate-200 rounded-md p-5 sm:p-6 space-y-4">
            <h2 className="text-base sm:text-lg font-extrabold text-[#041E42]">
              Características principales
            </h2>
            <ul className="space-y-2.5">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#003B8E] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Productos relacionados */}
      {relatedProducts.length > 0 && (
        <section className="bg-[#F8FAFC] border-t border-slate-200 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#003B8E]">
                  Más opciones del inventario
                </span>
                <h2 className="mt-1 text-xl sm:text-2xl font-extrabold text-[#041E42]">
                  También te puede interesar
                </h2>
              </div>

              <Link
                href="/catalogo"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#041E42] hover:text-[#003B8E]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver al catálogo</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

