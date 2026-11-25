import Link from 'next/link';
import { ArrowRight, Store } from 'lucide-react';
import { getWholesaleInquiryUrl } from '@/lib/utils/whatsapp';

export default function HomePage() {
  return (
    <section className="bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white border border-slate-200 text-xs font-semibold uppercase tracking-wider text-[#003B8E]">
            Comercialización y Distribución en Ecuador
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#041E42] leading-[1.08]">
            PRODUCTOS QUE GENERAN OPORTUNIDADES.
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Encuentra productos a precios competitivos, compra para ti o abastece tu negocio con precios especiales para comerciantes.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
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
        </div>
      </div>
    </section>
  );
}

