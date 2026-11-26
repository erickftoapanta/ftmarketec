import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Building2,
  Target,
  ShieldCheck,
  Users,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';
import {
  getGeneralInquiryUrl,
  getWholesaleInquiryUrl,
} from '@/lib/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | FT Market EC',
  description:
    'Conoce a FT Market EC, comercializadora y distribuidora en Ecuador enfocada en productos de alta rotación para consumidores finales y comerciantes.',
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Inventario real verificado',
    description:
      'Trabajamos con mercadería física disponible en Ecuador, revisada antes de cada despacho para garantizar funcionalidad y presentación.',
  },
  {
    icon: Users,
    title: 'Doble enfoque comercial',
    description:
      'Atendemos con la misma agilidad tanto al cliente final que busca un producto práctico como al emprendedor que abastece su negocio.',
  },
  {
    icon: Target,
    title: 'Selección de alta rotación',
    description:
      'Incorporamos artículos útiles para hogar, cocina, iluminación, deporte y cuidado personal con demanda comprobada en el mercado ecuatoriano.',
  },
];

export default function NosotrosPage() {
  return (
    <div className="bg-white">
      {/* Encabezado */}
      <section className="bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white border border-slate-200 text-xs font-semibold uppercase tracking-wider text-[#003B8E]">
              <Building2 className="w-3.5 h-3.5" />
              <span>Identidad Corporativa</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#041E42] tracking-tight leading-[1.08]">
              Comercialización y distribución directa en Ecuador.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              En <strong className="text-[#041E42]">FT Market EC</strong> conectamos productos funcionales y de alta demanda con hogares y emprendedores de todo el país, eliminando intermediarios innecesarios y brindando atención directa.
            </p>
          </div>
        </div>
      </section>

      {/* Propuesta y pilares */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 space-y-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#003B8E]">
              Nuestro modelo operativo
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#041E42]">
              Más que una tienda: un aliado para comprar mejor o emprender
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Operamos desde Quito con cobertura logística hacia todas las provincias del Ecuador. Nuestro catálogo está diseñado para ofrecer soluciones prácticas a precios competitivos, permitiendo que cada cliente elija entre compra individual, combos promocionales o abastecimiento por volumen.
            </p>
            <ul className="space-y-2.5 pt-2">
              {[
                'Atención personalizada y cotizaciones rápidas vía WhatsApp.',
                'Precios diferenciados para revendedores, tiendas físicas y emprendedores.',
                'Coordinación transparente de entregas locales y envíos interprovinciales.',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#F5820D] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 gap-4">
            {VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-[#F8FAFC] border border-slate-200 rounded-md p-5 sm:p-6 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-sm bg-[#041E42] text-white flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#041E42]">
                      {val.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bloque de cierre con doble llamado a la acción */}
        <div className="bg-[#041E42] text-white rounded-md p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl font-extrabold">
              Explora nuestro inventario o solicita tu cotización
            </h2>
            <p className="text-sm text-slate-300">
              Revisa las fotografías y especificaciones de cada producto o escríbenos directamente para recibir asesoría.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#041E42] font-bold text-xs sm:text-sm px-5 py-3 rounded-md transition-colors"
            >
              <span>Ver catálogo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={getWholesaleInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F5820D] hover:bg-[#D96B00] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-md transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

