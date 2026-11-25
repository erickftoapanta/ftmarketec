import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/whatsapp/FloatingWhatsApp';
import { BUSINESS_CONFIG } from '@/config/business';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS_CONFIG.name} | Proveedores y Distribución en Ecuador`,
    template: `%s | ${BUSINESS_CONFIG.name}`,
  },
  description: BUSINESS_CONFIG.description,
  keywords: [
    'proveedores en Ecuador',
    'productos al por mayor Ecuador',
    'precios para comerciantes',
    'distribución de productos Ecuador',
    'productos para emprendedores',
    'FT Market EC',
  ],
  openGraph: {
    title: `${BUSINESS_CONFIG.name} | Comercialización y Distribución en Ecuador`,
    description: BUSINESS_CONFIG.description,
    type: 'website',
    locale: 'es_EC',
    siteName: BUSINESS_CONFIG.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

