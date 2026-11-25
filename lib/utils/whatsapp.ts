import { BUSINESS_CONFIG } from '@/config/business';

export function buildWhatsAppUrl(message: string): string {
  const cleanPhone = BUSINESS_CONFIG.contact.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function getGeneralInquiryUrl(): string {
  return buildWhatsAppUrl(
    'Hola FT Market EC, vengo desde su página web y deseo recibir información sobre sus productos y precios.'
  );
}

export function getWholesaleInquiryUrl(): string {
  return buildWhatsAppUrl(
    'Hola FT Market EC, tengo un negocio / emprendimiento y me interesa conocer el catálogo y precios para comerciantes y mayoristas.'
  );
}

