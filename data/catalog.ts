import { ProductInternalRecord } from '@/types/product';

export const INTERNAL_CATALOG: ProductInternalRecord[] = [
  {
    id: 'prod-001',
    sku: 'FTM-PG-001',
    slug: 'pogo-ball-infantil-negra',
    name: 'Pogo Ball Infantil Negra',
    category: 'deportes-recreacion',
    shortDescription:
      'Plataforma de equilibrio con balón reforzado de alto rebote para ejercicio, coordinación y recreación.',
    description:
      'Pogo Ball infantil negra diseñada con plataforma antideslizante de alta resistencia y balón inflable de PVC grueso. Ideal para desarrollar equilibrio, motricidad y actividad física en casa o exteriores. Artículo de alta rotación para venta minorista y emprendedores.',
    features: [
      'Plataforma antideslizante reforzada de alta estabilidad',
      'Balón de PVC resistente al desgaste y uso continuo',
      'Fomenta el equilibrio, coordinación y actividad física',
      'Incluye válvula estándar para inflado rápido',
    ],
    images: {
      main: '/products/pogo-ball-1.jpg',
      gallery: [
        '/products/pogo-ball-1.jpg',
        '/products/pogo-ball-2.jpg',
        '/products/pogo-ball-3.jpg',
        '/products/pogo-ball-4.jpg',
      ],
    },
    acquisitionCost: 0,
    pricing: {
      retailPrice: 22.99,
      merchantPrice: 14.99,
      merchantMinQty: 12,
      hasMerchantTier: true,
      promoHighlight: 'Promoción y envío disponibles',
    },
    stock: 20,
    isPublished: true,
    isFeatured: true,
    updatedAt: '2026-11-25',
  },
  {
    id: 'prod-002',
    sku: 'FTM-WT-002',
    slug: 'wild-tornado-limpiador',
    name: 'Wild Tornado Limpiador',
    category: 'hogar-limpieza',
    shortDescription:
      'Fórmula de acción profunda para destapar y limpiar tuberías, lavabos y desagües sin dañar cañerías.',
    description:
      'Wild Tornado Limpiador disuelve eficazmente residuos orgánicos, grasa, cabello y obstrucciones acumuladas en desagües de cocina, baño y lavandería. Producto práctico de reposición recurrente para hogares y comercios.',
    features: [
      'Acción rápida sobre grasa, cabello y residuos acumulados',
      'Seguro para tuberías de PVC y sistemas domésticos estándar',
      'Aplicación directa sin herramientas adicionales',
      'Ayuda a eliminar malos olores en sumideros y sifones',
    ],
    images: {
      main: '/products/wild-tornado-1.jpg',
      gallery: [
        '/products/wild-tornado-1.jpg',
        '/products/wild-tornado-2.jpg',
        '/products/wild-tornado-3.jpg',
        '/products/wild-tornado-4.jpg',
      ],
    },
    acquisitionCost: 0,
    pricing: {
      hasMerchantTier: true,
      promoHighlight: 'Consulta combo por cantidad',
    },
    stock: 200,
    isPublished: true,
    isFeatured: true,
    updatedAt: '2026-11-25',
  },
  {
    id: 'prod-003',
    sku: 'FTM-PV-003',
    slug: 'pelador-de-verduras-mango-madera',
    name: 'Pelador de Verduras con Mango de Madera en Forma de Cuchillo',
    category: 'cocina-utilitarios',
    shortDescription:
      'Pelador ergonómico con hoja afilada de acero inoxidable y mango de madera natural de agarre firme.',
    description:
      'Pelador de verduras y frutas diseñado en forma de cuchillo con hoja de acero inoxidable de corte preciso y mango ergonómico de madera natural. Combina durabilidad, control y comodidad para uso doméstico o gastronómico.',
    features: [
      'Hoja de acero inoxidable de corte limpio y preciso',
      'Mango de madera ergonómico con agarre antideslizante',
      'Diseño ligero en forma de cuchillo para mayor control',
      'Fácil limpieza y alta durabilidad para cocina diaria',
    ],
    images: {
      main: '/products/pelador-verduras-1.jpg',
      gallery: [
        '/products/pelador-verduras-1.jpg',
        '/products/pelador-verduras-2.jpg',
        '/products/pelador-verduras-3.jpg',
        '/products/pelador-verduras-4.jpg',
      ],
    },
    acquisitionCost: 0,
    pricing: {
      hasMerchantTier: true,
      promoHighlight: 'Tarifa especial por lote',
    },
    stock: 400,
    isPublished: true,
    isFeatured: true,
    updatedAt: '2026-11-25',
  },
  {
    id: 'prod-004',
    sku: 'FTM-F4-004',
    slug: 'f4-fan-light',
    name: 'F4+ Fan Light',
    category: 'iluminacion-climatizacion',
    shortDescription:
      'Lámpara ventilador LED multifunción de instalación directa en boquilla estándar con control remoto.',
    description:
      'F4+ Fan Light integra iluminación LED de alta eficiencia y ventilación silenciosa en un solo equipo compacto. Se instala fácilmente en cualquier socket E27 convencional sin cableado complejo, ideal para dormitorios, oficinas y salas.',
    features: [
      'Sistema 2 en 1: iluminación LED y ventilación integrada',
      'Instalación directa en boquilla estándar E27',
      'Control de velocidades de aire e intensidad de luz',
      'Funcionamiento silencioso y bajo consumo energético',
    ],
    images: {
      main: '/products/f4-fan-light-1.jpg',
      gallery: [
        '/products/f4-fan-light-1.jpg',
        '/products/f4-fan-light-2.jpg',
        '/products/f4-fan-light-3.jpg',
        '/products/f4-fan-light-4.jpg',
      ],
    },
    acquisitionCost: 0,
    pricing: {
      hasMerchantTier: true,
      promoHighlight: 'Oferta vigente · Stock inmediato',
    },
    stock: 32,
    isPublished: true,
    isFeatured: true,
    updatedAt: '2026-11-25',
  },
  {
    id: 'prod-005',
    sku: 'FTM-KV-005',
    slug: 'kit-de-vinchas',
    name: 'Kit de Vinchas',
    category: 'belleza-accesorios',
    shortDescription:
      'Set de vinchas suaves y elásticas para rutina facial, maquillaje y cuidado personal diario.',
    description:
      'Kit de vinchas confeccionadas en material suave al tacto y ajuste elástico cómodo que mantiene el cabello recogido sin maltratarlo durante rutinas de skincare, limpieza facial o maquillaje.',
    features: [
      'Tejido suave, absorbente y agradable al contacto con la piel',
      'Banda elástica adaptable sin generar presión excesiva',
      'Ideal para limpieza facial, maquillaje y cuidado diario',
      'Presentación en kit lista para uso personal o reventa',
    ],
    images: {
      main: '/products/kit-vinchas-1.jpg',
      gallery: [
        '/products/kit-vinchas-1.jpg',
        '/products/kit-vinchas-2.jpg',
        '/products/kit-vinchas-3.jpg',
        '/products/kit-vinchas-4.jpg',
      ],
    },
    acquisitionCost: 0,
    pricing: {
      hasMerchantTier: true,
      promoHighlight: 'Ideal para reventa · Consulta pack',
    },
    stock: 24,
    isPublished: true,
    isFeatured: false,
    updatedAt: '2026-11-25',
  },
];

