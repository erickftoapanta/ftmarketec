import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Store,
  TrendingUp,
  PackageCheck,
  Truck,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import { getWholesaleInquiryUrl } from '@/lib/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Comerciantes y Mayoristas | FT Market EC',
  description:
    'Abastece tu negocio o emprendimiento en Ecuador con precios preferenciales por volumen y stock disponible para entrega inmediata.',
};

const TIERS = [
  {
    code: 'MODALIDAD 01',
    title: 'Emprendedor y Revendedor Digital',
    subtitle: 'Ideal para ventas en WhatsApp, Facebook, Instagram y TikTok',
    description:
      'Inicia o amplía tu catálogo sin necesidad de grandes inversiones iniciales. Accede a precios especiales desde lotes pequeños en artículos de alta rotación.',
    highlights: [
      'Cantidades mínimas accesibles por producto',
      'Artículos probados de alta demanda diaria',
      'Reposición rápida según tus ventas',
    ],
  },
  {
    code: 'MODALIDAD 02',
    title: 'Comercio y Tienda Física',
    subtitle: 'Para bazares, locales comerciales y puntos de venta establecidos',
    description:
      'Mejora tu margen de ganancia comprando directamente a distribuidor en Ecuador con disponibilidad verificada en bodega.',
    highlights: [
      'Tarifas preferenciales por caja o lote',
      'Atención prioritaria y reserva de inventario',
      'Despachos coordinados a tu local o ciudad',
    ],
  },
  {
    code: 'MODALIDAD 03',
    title: 'Distribución por Volumen',
    subtitle: 'Pedidos mayores y abastecimiento recurrente',
    description:
      'Cotizaciones escalonadas diseñadas para compradores frecuentes y distribuidores provinciales que buscan máxima rentabilidad.',
    highlights: [
      'Escala de precios según volumen solicitado',
      'Posibilidad de combinar distintos productos del catálogo',
      'Asesoría directa sin intermediarios',
    ],
  },
];

const STEPS = [
  {
    step: '01',
    title: 'Revisa los artículos disponibles',
    description:
      'Explora nuestro catálogo actualizado y selecciona los productos que mejor se adapten a tus clientes.',
  },
  {
    step: '02',
    title: 'Solicita la tabla para comerciantes',
    description:
      'Escríbenos por WhatsApp indicando los productos y cantidades estimadas que deseas cotizar.',
  },
  {
    step: '03',
    title: 'Confirma tu pedido y envío',
    description:
      'Te compartimos las tarifas por volumen vigentes y coordinamos el método de entrega más rápido a tu ciudad.',
  },
  {
    step: '04',
    title: 'Recibe mercadería lista para vender',
    description:
      'Despachamos tu pedido con respaldo y seguimiento para que empieces a generar ventas de inmediato.',
  },
];

const FAQS = [
  {
    question: '¿Por qué no aparecen los precios mayoristas publicados en la web?',
    answer:
      'Manejamos tarifas escalonadas según el volumen y la combinación de productos que cada comerciante necesita. Al escribirnos por WhatsApp te enviamos la cotización exacta y actualizada según tu pedido.',
  },
  {
    question: '¿Puedo combinar varios productos en un mismo pedido mayorista?',
    answer:
      'Sí. Puedes armar tu pedido combinando distintas líneas de nuestro catálogo (hogar, cocina, iluminación, deportes o accesorios) sujeto a las cantidades mínimas de cada artículo.',
  },
  {
    question: '¿Realizan envíos a otras provincias fuera de Quito?',
    answer:
      'Sí, realizamos despachos seguros a nivel nacional mediante operadores logísticos confiables, con entregas en Quito y envíos a todas las provincias del Ecuador.',
  },
  {
    question: '¿Tienen stock real disponible en Ecuador?',
    answer:
      'Todos los productos publicados en nuestro catálogo cuentan con inventario verificado en bodega para despacho inmediato, sin largas esperas de importación.',
  },
];

export default function ComerciantesPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO B2B */}
      <section className="bg-[#041E42] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#003B8E] text-xs font-semibold uppercase tracking-wider text-slate-100">
              <Store className="w-3.5 h-3.5" />
              <span>Canal B2B · Emprendedores y Comercios</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.08]">
              Abastece tu negocio con precios directos de proveedor.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              En FT Market EC impulsamos a emprendedores, revendedores digitales y tiendas físicas en todo Ecuador con productos de alta rotación, stock real y tarifas preferenciales por volumen.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
              <a
                href={getWholesaleInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#F5820D] hover:bg-[#D96B00] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Solicitar lista de precios para comerciantes</span>
              </a>
              <Link
                href="/catalogo"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-slate-600 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-md transition-colors"
              >
                <span>Ver productos disponibles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Pilares de valor */}
          <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-[#F5820D] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">Márgenes atractivos</p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Precios diseñados para que obtengas rentabilidad real al revender.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <PackageCheck className="w-5 h-5 text-[#F5820D] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">Inventario verificado</p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Mercadería disponible en Ecuador lista para despacho inmediato.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Truck className="w-5 h-5 text-[#F5820D] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">Cobertura nacional</p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Entregas locales y envíos seguros a todas las provincias.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#F5820D] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">Trato directo</p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Comunicación rápida y personalizada por WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MODALIDADES DE COMPRA */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#003B8E]">
              Esquemas comerciales
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#041E42]">
              Modalidades adaptadas a tu nivel de negocio
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Tanto si estás comenzando a vender desde casa como si abasteces un local comercial, contamos con una opción para ti.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.code}
                className="bg-white border border-slate-200 rounded-md p-6 sm:p-7 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#F5820D]">
                    {tier.code}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#041E42]">
                    {tier.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#003B8E]">
                    {tier.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <ul className="space-y-2">
                    {tier.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#003B8E] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={getWholesaleInquiryUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#041E42] hover:bg-[#003B8E] text-white text-xs font-semibold py-3 px-4 rounded-md transition-colors"
                  >
                    <span>Consultar esta modalidad</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROCESO EN 4 PASOS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#003B8E]">
              Flujo ágil
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#041E42]">
              ¿Cómo realizar tu pedido mayorista?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-[#F8FAFC] border border-slate-200 rounded-md p-5 space-y-2.5"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-sm bg-[#041E42] text-white text-xs font-extrabold">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-[#041E42]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PREGUNTAS FRECUENTES */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#003B8E]">
              <Layers className="w-3.5 h-3.5" />
              <span>Información para compradores</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#041E42]">
              Preguntas frecuentes sobre compras por volumen
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div
                key={faq.question}
                className="bg-white border border-slate-200 rounded-md p-5 sm:p-6 space-y-2"
              >
                <h3 className="text-base font-bold text-[#041E42]">
                  {faq.question}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#041E42] rounded-md p-6 sm:p-8 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              ¿Listo para cotizar tu primer lote?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl mx-auto">
              Escríbenos directamente por WhatsApp y recibe atención personalizada para tu negocio o emprendimiento.
            </p>
            <div className="pt-1">
              <a
                href={getWholesaleInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#F5820D] hover:bg-[#D96B00] text-white font-bold text-sm px-6 py-3.5 rounded-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Hablar con un asesor comercial</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

