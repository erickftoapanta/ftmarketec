import type { Metadata } from 'next';
import {
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Truck,
  Store,
} from 'lucide-react';
import { ContactInquiryForm } from '@/components/contact/ContactInquiryForm';
import { BUSINESS_CONFIG } from '@/config/business';
import {
  getGeneralInquiryUrl,
  getWholesaleInquiryUrl,
} from '@/lib/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Contacto y Atención Comercial | FT Market EC',
  description:
    'Comunícate directamente con FT Market EC por WhatsApp para cotizaciones minoristas, precios para comerciantes y envíos en todo Ecuador.',
};

export default function ContactoPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Encabezado */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#003B8E]">
            Atención Directa · Ecuador
          </span>
          <h1 className="mt-1.5 text-3xl sm:text-4xl font-extrabold text-[#041E42] tracking-tight">
            Contacto y cotizaciones
          </h1>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Nuestro canal principal de atención es WhatsApp para brindarte respuestas rápidas sobre disponibilidad, promociones vigentes y precios por volumen.
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Columna izquierda: Canales e información */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white border border-slate-200 rounded-md p-6 space-y-5">
              <h2 className="text-lg font-extrabold text-[#041E42]">
                Canales de atención comercial
              </h2>

              <div className="space-y-4 divide-y divide-slate-100 text-sm">
                <div className="flex items-start gap-3 pt-1">
                  <Phone className="w-5 h-5 text-[#F5820D] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#041E42]">
                      WhatsApp Oficial
                    </p>
                    <p className="text-slate-600 mt-0.5">
                      {BUSINESS_CONFIG.whatsappDisplay}
                    </p>
                    <a
                      href={getGeneralInquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#003B8E] hover:underline mt-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Iniciar chat directo</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-4">
                  <MapPin className="w-5 h-5 text-[#003B8E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#041E42]">
                      Ubicación y Cobertura
                    </p>
                    <p className="text-slate-600 mt-0.5">
                      {BUSINESS_CONFIG.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-4">
                  <Clock className="w-5 h-5 text-[#003B8E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#041E42]">
                      Horario de Atención
                    </p>
                    <p className="text-slate-600 mt-0.5">
                      {BUSINESS_CONFIG.hours.weekdays}
                    </p>
                    <p className="text-slate-600">
                      {BUSINESS_CONFIG.hours.saturday}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-4">
                  <Truck className="w-5 h-5 text-[#003B8E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#041E42]">
                      Logística y Entregas
                    </p>
                    <p className="text-slate-600 mt-0.5">
                      Coordinación ágil de entregas locales en Sangolquí / Quito y despachos interprovinciales.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta acceso rápido B2B */}
            <div className="bg-[#041E42] text-white rounded-md p-6 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#F5820D]">
                <Store className="w-4 h-4" />
                <span>¿Tienes un negocio?</span>
              </div>
              <h3 className="text-lg font-extrabold">
                Atención directa para comerciantes
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Si compras para revender, solicita nuestro catálogo con tarifas preferenciales por volumen.
              </p>
              <div className="pt-1">
                <a
                  href={getWholesaleInquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#F5820D] hover:bg-[#D96B00] text-white text-xs font-bold px-4 py-2.5 rounded-md transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Cotizar como comerciante</span>
                </a>
              </div>
            </div>
          </div>

          {/* Columna derecha: Formulario */}
          <div className="lg:col-span-7">
            <ContactInquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}

