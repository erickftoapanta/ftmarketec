import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Truck,
  MapPin,
  PackageCheck,
  Clock,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { getGeneralInquiryUrl } from '@/lib/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Envíos y Cobertura en Ecuador | FT Market EC',
  description:
    'Conoce nuestras modalidades de entrega en Quito y envíos seguros a todas las provincias del Ecuador para pedidos minoristas y mayoristas.',
};

const SHIPPING_ZONES = [
  {
    icon: MapPin,
    badge: 'ENTREGA LOCAL',
    title: 'Quito y Valles',
    description:
      'Coordinación rápida de entregas locales mediante mensajería motorizada o retiro previamente acordado según tu ubicación.',
    details: [
      'Confirmación de horario de entrega vía WhatsApp',
      'Despacho ágil el mismo día o siguiente día hábil',
      'Opciones especiales de envío en promociones seleccionadas',
    ],
  },
  {
    icon: Truck,
    badge: 'COBERTURA NACIONAL',
    title: 'Envíos a todas las Provincias',
    description:
      'Despachamos tus pedidos minoristas o cajas mayoristas a Costa, Sierra, Oriente y Galápagos mediante couriers certificados.',
    details: [
      'Envío de guía y comprobante de despacho por WhatsApp',
      'Embalaje seguro para proteger cada artículo en tránsito',
      'Entrega a domicilio o retiro en agencia del operador logístico',
    ],
  },
];

export default function EnviosPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Encabezado */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#F8FAFC] border border-slate-200 text-xs font-semibold uppercase tracking-wider text-[#003B8E]">
              <Truck className="w-3.5 h-3.5" />
              <span>Logística y Despachos</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#041E42] tracking-tight">
              Envíos seguros a todo el Ecuador
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Coordinamos cada entrega de forma personalizada para que recibas tus productos con respaldo, seguimiento y puntualidad tanto en compras individuales como en pedidos para comerciantes.
            </p>
          </div>
        </div>
      </section>

      {/* Zonas de cobertura */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {SHIPPING_ZONES.map((zone) => {
            const Icon = zone.icon;
            return (
              <div
                key={zone.title}
                className="bg-white border border-slate-200 rounded-md p-6 sm:p-8 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5820D]">
                    {zone.badge}
                  </span>
                  <Icon className="w-5 h-5 text-[#003B8E]" />
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-[#041E42]">
                  {zone.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {zone.description}
                </p>

                <ul className="pt-3 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
                  {zone.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#003B8E] shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Garantías del proceso */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white border border-slate-200 rounded-md p-5 flex items-start gap-3.5">
            <PackageCheck className="w-5 h-5 text-[#003B8E] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-[#041E42]">
                Revisión previa al envío
              </h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Cada unidad y lote se verifica antes de ser empacado para asegurar que llegue en óptimas condiciones.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-md p-5 flex items-start gap-3.5">
            <Clock className="w-5 h-5 text-[#003B8E] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-[#041E42]">
                Confirmación inmediata
              </h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Te informamos el costo y tiempo estimado de envío a tu ciudad antes de confirmar tu pedido.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-md p-5 flex items-start gap-3.5">
            <ShieldCheck className="w-5 h-5 text-[#003B8E] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-[#041E42]">
                Acompañamiento directo
              </h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Atención directa por WhatsApp desde la cotización hasta la recepción de tu paquete.
              </p>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="bg-[#041E42] text-white rounded-md p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h2 className="text-xl font-extrabold">
              ¿Deseas consultar el envío a tu ciudad?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Escríbenos con el producto que te interesa y tu cantón o provincia para darte el detalle completo.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-[#041E42] text-xs font-bold px-4 py-3 rounded-md transition-colors"
            >
              <span>Ir al catálogo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={getGeneralInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F5820D] hover:bg-[#D96B00] text-white text-xs font-bold px-5 py-3 rounded-md transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Consultar envío por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

