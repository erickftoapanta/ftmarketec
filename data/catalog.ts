import { ProductInternalRecord } from '@/types/product';

export const INTERNAL_CATALOG: ProductInternalRecord[] = [
  {
    id: 'prod-001',
    sku: 'FTM-PG-001',
    slug: 'pelota-saltarina-pogo-ball',
    name: 'Pelota Saltarina Pogo Ball',
    category: 'deportes-recreacion',
    shortDescription:
      'Plataforma de equilibrio con balón reforzado de alto rebote para ejercicio y recreación infantil y juvenil.',
    description:
      'Pelota saltarina tipo Pogo Ball fabricada con base antideslizante de alta resistencia y balón inflable de PVC grueso. Ideal para mejorar coordinación, equilibrio y actividad física en casa o exteriores. Producto de alta demanda comercial.',
    features: [
      'Plataforma antideslizante reforzada de alta estabilidad',
      'Balón de PVC resistente al desgaste y uso continuo',
      'Apta para niños, jóvenes y entrenamiento funcional ligero',
      'Incluye válvula estándar de inflado rápido',
    ],
    images: {
      main: '/products/pelota-saltarina-pogo.jpg',
      gallery: ['/products/pelota-saltarina-pogo.jpg'],
    },
    acquisitionCost: 0, // Configurar costo interno real (nunca visible al público)
    pricing: {
      retailPrice: 22.99,
      merchantPrice: 14.99,
      merchantMinQty: 12,
      wholesaleTiers: [
        {
          minQty: 12,
          unitPrice: 14.99,
          label: 'Precio Comerciante / Lote desde 12 uds.',
        },
      ],
      promoBadge: 'Envío gratis en Ecuador',
    },
    stock: 20,
    isPublished: true,
    isFeatured: true,
    updatedAt: '2026-11-25',
  },
];

