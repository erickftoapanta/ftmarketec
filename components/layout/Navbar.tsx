'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageSquare, Store } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import { getGeneralInquiryUrl, getWholesaleInquiryUrl } from '@/lib/utils/whatsapp';

const NAV_ITEMS = [
  { label: 'Inicio', href: '/' },
  { label: 'Catálogo', href: '/catalogo' },
  { label: 'Ofertas', href: '/ofertas' },
  { label: 'Precios para comerciantes', href: '/comerciantes' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200">
      {/* Barra superior informativa B2B / B2C */}
      <div className="bg-[#041E42] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <p className="truncate font-medium tracking-wide text-slate-200">
            Distribución directa en Ecuador · Ventas al por menor y mayor
          </p>
          <a
            href={getWholesaleInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-[#F5820D] hover:text-amber-300 font-semibold transition-colors"
          >
            <Store className="w-3.5 h-3.5" strokeWidth={2} />
            <span>Atención a emprendedores y revendedores</span>
          </a>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logotipo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative h-12 w-36 sm:w-40">
              <Image
                src="/brand/logo-ft-market.png"
                alt={BUSINESS_CONFIG.name}
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Enlaces Desktop */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors py-1 border-b-2 ${
                    isActive
                      ? 'text-[#041E42] border-[#F5820D] font-semibold'
                      : 'text-slate-600 border-transparent hover:text-[#041E42]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA WhatsApp Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getGeneralInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#041E42] hover:bg-[#003B8E] text-white text-sm font-semibold px-4 py-2.5 rounded-md transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#F5820D]" strokeWidth={2} />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>

          {/* Botón Menú Móvil */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-[#041E42] hover:bg-slate-100 border border-slate-200"
            aria-expanded={mobileOpen}
            aria-label="Abrir menú de navegación"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm font-medium ${
                  isActive
                    ? 'bg-slate-100 text-[#041E42] font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-slate-100">
            <a
              href={getGeneralInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#F5820D] hover:bg-[#D96B00] text-white text-sm font-semibold px-4 py-3 rounded-md transition-colors"
            >
              <MessageSquare className="w-4 h-4" strokeWidth={2} />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

