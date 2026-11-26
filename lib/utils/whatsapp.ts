import { BUSINESS_CONFIG } from '@/config/business';

export function buildWhatsAppUrl(message: string): string {
  const cleanPhone = BUSINESS_CONFIG.contact.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function getGeneralInquiryUrl(): string {
  return buildWhatsAppUrl(
    'Hola FT Market EC, vengo desde su página web y deseo conocer sus precios y promociones vigentes.'
  );
}

export function getWholesaleInquiryUrl(): string {
  return buildWhatsAppUrl(
    'Hola FT Market EC, tengo un negocio / emprendimiento y me interesa conocer el catálogo con precios especiales para comerciantes y mayoristas.'
  );
}

export interface ProductOrderParams {
  productName: string;
  sku: string;
  quantity: number;
  customerType: 'Minorista (Uso personal)' | 'Comerciante / Mayorista';
  productUrl: string;
}

export function buildProductOrderUrl({
  productName,
  sku,
  quantity,
  customerType,
  productUrl,
}: ProductOrderParams): string {
  const message = [
    `Hola FT Market EC, me interesa este producto de su catálogo y quisiera conocer su precio y promociones vigentes:`,
    ``,
    `• Producto: ${productName} (${sku})`,
    `• Modalidad de compra: ${customerType}`,
    `• Cantidad estimada: ${quantity} ${quantity === 1 ? 'unidad' : 'unidades'}`,
    `• Enlace: ${productUrl}`,
  ].join('\n');

  return buildWhatsAppUrl(message);
}

