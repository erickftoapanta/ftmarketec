import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import { getGeneralInquiryUrl } from '@/lib/utils/whatsapp';

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/comerciantes', label: 'Comerciantes y Mayoristas' },
  { href: '/ofertas', label: 'Ofertas vigentes' },
  { href: '/nosotros', label: 'Sobre nosotros' },
  { href: '/envios', label: 'Envíos y cobertura' },
  { href: '/contacto', label: 'Contacto' },
];

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#041E42] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Columna 1: Marca */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-10 h-10 bg-white rounded-sm overflow-hidden shrink-0">
                <Image
                  src="/logo.png"
                  alt="FT Market EC"
                  fill
                  sizes="40px"
                  className="object-contain p-1"
                />
              </div>
              <div>
                <span className="block text-base font-extrabold text-white tracking-tight">
                  FT Market EC
                </span>
                <span className="block text-[11px] uppercase tracking-wider text-slate-400">
                  Distribución en Ecuador
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Comercialización directa de productos seleccionados de alta rotación para consumidores finales, emprendedores y comercios en todo el país.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto Directo */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Contacto directo
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F5820D] shrink-0 mt-1" />
                <a
                  href={getGeneralInquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {BUSINESS_CONFIG.whatsappDisplay}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5820D] shrink-0 mt-1" />
                <span>{BUSINESS_CONFIG.location}</span>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F5820D] shrink-0 mt-1" />
                <div className="space-y-0.5">
                  <span className="block">{BUSINESS_CONFIG.hours.weekdays}</span>
                  <span className="block">{BUSINESS_CONFIG.hours.saturday}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna 4: Canales Oficiales */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Canales oficiales
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={BUSINESS_CONFIG.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
                >
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_CONFIG.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
                >
                  <span>TikTok</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/envios"
                className="text-xs text-slate-400 underline hover:text-slate-200 transition-colors"
              >
                Políticas de privacidad y condiciones
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {BUSINESS_CONFIG.name}. Todos los derechos reservados.
          </p>
          <p>Sangolquí, Quito · Ecuador</p>
        </div>
      </div>
    </footer>
  );
}

