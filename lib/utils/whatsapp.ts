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

export interface ProductOrderParams {
  productName: string;
  sku: string;
  quantity: number;
  unitPrice: number;
  customerType: 'Minorista' | 'Comerciante / Mayorista';
  productUrl: string;
}

export function buildProductOrderUrl({
  productName,
  sku,
  quantity,
  unitPrice,
  customerType,
  productUrl,
}: ProductOrderParams): string {
  const subtotal = (quantity * unitPrice).toFixed(2);
  const message = [
    `Hola FT Market EC, deseo consultar disponibilidad / realizar el siguiente pedido:`,
    ``,
    `• Producto: ${productName} (${sku})`,
    `• Tipo de cliente: ${customerType}`,
    `• Cantidad solicitada: ${quantity} ${quantity === 1 ? 'unidad' : 'unidades'}`,
    `• Precio unitario aplicado: $${unitPrice.toFixed(2)}`,
    `• Total estimado: $${subtotal}`,
    `• Enlace: ${productUrl}`,
  ].join('\n');

  return buildWhatsAppUrl(message);
}

