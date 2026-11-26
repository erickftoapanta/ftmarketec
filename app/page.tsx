import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Store,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Tag,
} from 'lucide-react';
import { CategoryGrid } from '@/components/catalog/CategoryGrid';
import { ProductCard } from '@/components/catalog/ProductCard';
import {
  getFeaturedProducts,
  getOfferProducts,
} from '@/lib/services/catalogService';
import { getWholesaleInquiryUrl } from '@/lib/utils/whatsapp';

const MERCHANT_BENEFITS = [
  'Precios especiales por volumen para maximizar tu margen comercial.',
  'Acceso directo al catálogo actualizado con stock disponible en Ecuador.',
  'Disponibilidad inmediata de productos de alta rotación.',
  'Oportunidades reales de reventa en redes sociales, WhatsApp y tiendas físicas.',
  'Atención personalizada directa con proveedor sin intermediarios.',
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const offerProducts = getOfferProducts();

  return (
    <div>
      {/* 1. HERO PRINCIPAL */}
      <section className="bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white border border-slate-200 text-xs font-semibold uppercase tracking-wider text-[#003B8E]">
                Proveedor y Distribuidor en Ecuador
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#041E42] leading-[1.06]">
                PRODUCTOS QUE GENERAN OPORTUNIDADES.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Encuentra productos a precios competitivos, compra para ti o abastece tu negocio con precios especiales para comerciantes.
              </p>

              <div className="pt-1 flex flex-col sm:flex-row gap-3.5">
                <Link
                  href="/catalogo"
                  className="inline-flex items-center justify-center gap-2 bg-[#F5820D] hover:bg-[#D96B00] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-md transition-colors"
                >
                  <span>Explorar catálogo</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </Link>
                <a
                  href={getWholesaleInquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#041E42] border border-slate-300 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-md transition-colors"
                >
                  <Store className="w-4 h-4 text-[#003B8E]" strokeWidth={2} />
                  <span>Comprar a precio mayorista</span>
                </a>
              </div>

              {/* Indicadores operativos */}
              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-[#003B8E] shrink-0" />
                  <span>Tarifas minoristas y por volumen</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#003B8E] shrink-0" />
                  <span>Despachos seguros a todo el país</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#003B8E] shrink-0" />
                  <span>Stock real verificado en bodega</span>
                </div>
              </div>
            </div>

            {/* Vitrina visual de productos reales */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-200 rounded-md p-4 sm:p-5 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/producto/pogo-ball-infantil-negra"
                    className="group relative aspect-square bg-slate-50 border border-slate-100 rounded-sm overflow-hidden"
                  >
                    <Image
                      src="/products/pogo-ball-1.jpg"
                      alt="Pogo Ball Infantil Negra"
                      fill
                      sizes="(max-width: 1024px) 45vw, 22vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      priority
                    />
                  </Link>
                  <Link
                    href="/producto/f4-fan-light"
                    className="group relative aspect-square bg-slate-50 border border-slate-100 rounded-sm overflow-hidden"
                  >
                    <Image
                      src="/products/f4-fan-light-1.jpg"
                      alt="F4+ Fan Light"
                      fill
                      sizes="(max-width: 1024px) 45vw, 22vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      priority
                    />
                  </Link>
                  <Link
                    href="/producto/wild-tornado-limpiador"
                    className="group relative aspect-square bg-slate-50 border border-slate-100 rounded-sm overflow-hidden"
                  >
                    <Image
                      src="/products/wild-tornado-1.jpg"
                      alt="Wild Tornado Limpiador"
                      fill
                      sizes="(max-width: 1024px) 45vw, 22vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </Link>
                  <Link
                    href="/producto/pelador-de-verduras-mango-madera"
                    className="group relative aspect-square bg-slate-50 border border-slate-100 rounded-sm overflow-hidden"
                  >
                    <Image
                      src="/products/pelador-verduras-1.jpg"
                      alt="Pelador de Verduras con Mango de Madera"
                      fill
                      sizes="(max-width: 1024px) 45vw, 22vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </Link>
                </div>
                <div className="flex items-center justify-between pt-1 text-xs">
                  <span className="font-semibold text-[#041E42]">
                    Catálogo activo · Entrega inmediata
                  </span>
                  <Link
                    href="/catalogo"
                    className="font-semibold text-[#003B8E] hover:underline"
                  >
                    Ver todos los artículos →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN DE CATEGORÍAS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#003B8E]">
                Líneas de distribución
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#041E42]">
                Explora por categoría
              </h2>
            </div>
            <Link
              href="/catalogo"
              className="text-sm font-semibold text-[#041E42] hover:text-[#003B8E] inline-flex items-center gap-1"
            >
              <span>Ver catálogo completo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <CategoryGrid />
        </div>
      </section>

      {/* 3. PRODUCTOS DESTACADOS */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#003B8E]">
                Selección comercial
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#041E42]">
                Productos destacados
              </h2>
            </div>
            <Link
              href="/catalogo"
              className="text-sm font-semibold text-[#041E42] hover:text-[#003B8E] inline-flex items-center gap-1"
            >
              <span>Filtrar y buscar productos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN PARA COMERCIANTES (B2B) */}
      <section className="py-16 lg:py-20 bg-[#041E42] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3 py-1 rounded-sm bg-[#003B8E] text-xs font-semibold uppercase tracking-wider text-slate-100">
                Programa para Emprendedores y Revendedores
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                ¿Tienes un negocio? Conviértete en nuestro cliente mayorista.
              </h2>
              <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
                Abastece tu tienda física, catálogo de WhatsApp o ventas en Facebook, Instagram y TikTok comprando directamente a un proveedor en Ecuador.
              </p>

              <ul className="space-y-3 pt-2">
                {MERCHANT_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-[#F5820D] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-col sm:flex-row gap-3.5">
                <a
                  href={getWholesaleInquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#F5820D] hover:bg-[#D96B00] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-md transition-colors"
                >
                  <span>Consultar precios para comerciantes</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/comerciantes"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-slate-600 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-md transition-colors"
                >
                  <span>Conocer condiciones mayoristas</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white/5 border border-slate-700/80 rounded-md p-6 sm:p-8 space-y-5">
                <h3 className="text-lg font-bold text-white">
                  Modalidades de compra disponibles
                </h3>
                <div className="space-y-4 divide-y divide-slate-800">
                  <div className="pt-1">
                    <p className="text-xs uppercase tracking-wider text-[#F5820D] font-semibold">
                      01 · Cliente Minorista
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Compra desde 1 unidad para uso personal con entrega a domicilio a nivel nacional.
                    </p>
                  </div>
                  <div className="pt-4">
                    <p className="text-xs uppercase tracking-wider text-[#F5820D] font-semibold">
                      02 · Cliente Comerciante
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Tarifas preferenciales para emprendedores y revendedores digitales desde cantidades mínimas accesibles.
                    </p>
                  </div>
                  <div className="pt-4">
                    <p className="text-xs uppercase tracking-wider text-[#F5820D] font-semibold">
                      03 · Distribución Mayorista
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Precios escalonados por volumen para tiendas físicas, distribuidores y abastecimiento recurrente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN DE OFERTAS VIGENTES */}
      {offerProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#F5820D]">
                  Promociones y combos activos
                </span>
                <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#041E42]">
                  Productos con beneficios vigentes
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Consulta directamente por WhatsApp nuestros precios de temporada, combos por unidad y descuentos por volumen.
                </p>
              </div>
              <Link
                href="/ofertas"
                className="text-sm font-semibold text-[#041E42] hover:text-[#003B8E] inline-flex items-center gap-1 shrink-0"
              >
                <span>Ver promociones disponibles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {offerProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

