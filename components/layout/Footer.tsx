import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import { getGeneralInquiryUrl } from '@/lib/utils/whatsapp';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#041E42] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Columna 1: Marca */}
          <div className="space-y-4">
            <div className="bg-white inline-block p-2.5 rounded-md">
              <div className="relative h-11 w-36">
                <Image
                  src="/brand/logo-ft-market.png"
                  alt={BUSINESS_CONFIG.name}
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {BUSINESS_CONFIG.description}
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="hover:text-white transition-colors">
                  Catálogo de productos
                </Link>
              </li>
              <li>
                <Link href="/ofertas" className="hover:text-white transition-colors">
                  Ofertas y combos
                </Link>
              </li>
              <li>
                <Link href="/comerciantes" className="hover:text-white transition-colors">
                  Precios para comerciantes
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto Directo */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Contacto Directo
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F5820D] shrink-0 mt-0.5" />
                <a
                  href={getGeneralInquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {BUSINESS_CONFIG.contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5820D] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_CONFIG.contact.city} · {BUSINESS_CONFIG.contact.coverage}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F5820D] shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.contact.schedule}</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Canales Oficiales */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Canales Oficiales
            </h3>
            <ul className="space-y-2.5 text-sm mb-6">
              <li>
                <a
                  href={BUSINESS_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_CONFIG.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>TikTok</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
            <Link
              href="/politicas-privacidad"
              className="text-xs text-slate-400 hover:text-white underline underline-offset-4"
            >
              Políticas de privacidad y condiciones
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {BUSINESS_CONFIG.legalName}. Todos los derechos reservados.
          </p>
          <p>Comercialización y distribución para todo el Ecuador.</p>
        </div>
      </div>
    </footer>
  );
}

