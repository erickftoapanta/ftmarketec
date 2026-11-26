import Link from 'next/link';
import type { Metadata } from 'next';
import { Tag, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';
import { getOfferProducts } from '@/lib/services/catalogService';
import { ProductCard } from '@/components/catalog/ProductCard';
import { getGeneralInquiryUrl } from '@/lib/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Ofertas y Promociones Vigentes | FT Market EC',
  description:
    'Descubre los productos con combos activos, beneficios por cantidad y promociones vigentes en FT Market EC.',
};

export default function OfertasPage() {
  const offerProducts = getOfferProducts();

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Encabezado */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-orange-50 border border-orange-200 text-xs font-bold uppercase tracking-wider text-[#F5820D]">
              <Tag className="w-3.5 h-3.5" />
              <span>Promociones y Combos Activos</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#041E42] tracking-tight">
              Beneficios y ofertas disponibles
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Consulta directamente por WhatsApp nuestras promociones por compra de 2 o más unidades, combos familiares y tarifas especiales por volumen.
            </p>
          </div>
        </div>
      </section>

      {/* Listado de productos con promoción */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {offerProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-md p-10 text-center max-w-xl mx-auto space-y-4">
            <h2 className="text-lg font-bold text-[#041E42]">
              Consulta nuestras promociones del día por WhatsApp
            </h2>
            <p className="text-sm text-slate-600">
              Contamos con precios especiales por combo y descuentos para comerciantes en todo nuestro inventario.
            </p>
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#003B8E] hover:underline"
            >
              <span>Explorar catálogo completo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Banner informativo de combos */}
        <div className="bg-white border border-slate-200 rounded-md p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#003B8E]">
              <Sparkles className="w-4 h-4 text-[#F5820D]" />
              <span>Ahorra más en tu pedido</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#041E42]">
              ¿Buscas combos para regalo, hogar o reventa?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Al escribirnos por WhatsApp indícanos cuántas unidades necesitas y tu ciudad de destino para enviarte las opciones promocionales vigentes.
            </p>
          </div>

          <a
            href={getGeneralInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#F5820D] hover:bg-[#D96B00] text-white font-bold text-sm px-6 py-3.5 rounded-md transition-colors shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consultar promociones vigentes</span>
          </a>
        </div>
      </section>
    </div>
  );
}

