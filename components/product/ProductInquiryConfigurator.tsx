'use client';

import { useState } from 'react';
import {
  MessageSquare,
  User,
  Store,
  Minus,
  Plus,
  Truck,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { PublicProduct } from '@/types/product';
import { buildProductOrderUrl } from '@/lib/utils/whatsapp';
import { BUSINESS_CONFIG } from '@/config/business';

interface ProductInquiryConfiguratorProps {
  product: PublicProduct;
}

type CustomerMode = 'Minorista (Uso personal)' | 'Comerciante / Mayorista';

export function ProductInquiryConfigurator({
  product,
}: ProductInquiryConfiguratorProps) {
  const [customerType, setCustomerType] = useState<CustomerMode>(
    'Minorista (Uso personal)'
  );
  const [quantity, setQuantity] = useState<number>(1);

  const suggestedMerchantQty = product.commercial.merchantMinQty ?? 12;

  const handleSelectMode = (mode: CustomerMode) => {
    setCustomerType(mode);
    if (mode === 'Comerciante / Mayorista' && quantity < suggestedMerchantQty) {
      setQuantity(suggestedMerchantQty);
    } else if (mode === 'Minorista (Uso personal)' && quantity >= suggestedMerchantQty) {
      setQuantity(1);
    }
  };

  const decreaseQty = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleManualQty = (value: string) => {
    const parsed = parseInt(value, 10);
    if (!Number.isNaN(parsed) && parsed >= 1) {
      setQuantity(parsed);
    } else if (value === '') {
      setQuantity(1);
    }
  };

  const productFullUrl = `${BUSINESS_CONFIG.domain}/producto/${product.slug}`;

  const whatsappUrl = buildProductOrderUrl({
    productName: product.name,
    sku: product.sku,
    quantity,
    customerType,
    productUrl: productFullUrl,
  });

  const quickQuantities =
    customerType === 'Minorista (Uso personal)'
      ? [
          { qty: 1, label: '1 ud.' },
          { qty: 2, label: '2 uds. (Combo)' },
          { qty: 3, label: '3 uds. (Pack)' },
        ]
      : [
          { qty: suggestedMerchantQty, label: `${suggestedMerchantQty} uds.` },
          { qty: 24, label: '24 uds.' },
          { qty: 50, label: '50+ uds.' },
        ];

  return (
    <div className="bg-[#F8FAFC] border border-slate-200 rounded-md p-5 sm:p-6 space-y-5">
      {/* Paso 1: Modalidad de compra */}
      <div className="space-y-2.5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#041E42]">
          1. Selecciona tu modalidad de compra
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => handleSelectMode('Minorista (Uso personal)')}
            className={`text-left p-3.5 rounded-md border transition-all ${
              customerType === 'Minorista (Uso personal)'
                ? 'bg-white border-[#003B8E] ring-1 ring-[#003B8E]'
                : 'bg-white/70 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-sm text-[#041E42]">
              <User className="w-4 h-4 text-[#F5820D]" />
              <span>Uso Personal</span>
            </div>
            <p className="mt-1 text-xs text-slate-600">
              Compra desde 1 unidad o pregunta por combos promocionales.
            </p>
          </button>

          <button
            type="button"
            onClick={() => handleSelectMode('Comerciante / Mayorista')}
            className={`text-left p-3.5 rounded-md border transition-all ${
              customerType === 'Comerciante / Mayorista'
                ? 'bg-white border-[#003B8E] ring-1 ring-[#003B8E]'
                : 'bg-white/70 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-sm text-[#003B8E]">
              <Store className="w-4 h-4" />
              <span>Comerciante / Mayorista</span>
            </div>
            <p className="mt-1 text-xs text-slate-600">
              Tarifas preferenciales por volumen para reventa y negocios.
            </p>
          </button>
        </div>
      </div>

      {/* Paso 2: Cantidad estimada */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <label
            htmlFor="product-qty"
            className="text-xs font-bold uppercase tracking-wider text-[#041E42]"
          >
            2. Cantidad de interés
          </label>
          <span className="text-xs text-slate-500">
            Stock actual: <strong className="text-[#041E42]">{product.stock} uds.</strong>
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center bg-white border border-slate-300 rounded-md">
            <button
              type="button"
              onClick={decreaseQty}
              aria-label="Disminuir cantidad"
              className="p-2.5 text-slate-600 hover:text-[#041E42] hover:bg-slate-50 rounded-l-md transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <input
              id="product-qty"
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => handleManualQty(e.target.value)}
              className="w-16 text-center text-sm font-bold text-[#041E42] focus:outline-none"
            />
            <button
              type="button"
              onClick={increaseQty}
              aria-label="Aumentar cantidad"
              className="p-2.5 text-slate-600 hover:text-[#041E42] hover:bg-slate-50 rounded-r-md transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {quickQuantities.map((preset) => (
              <button
                key={preset.qty}
                type="button"
                onClick={() => setQuantity(preset.qty)}
                className={`px-2.5 py-1.5 text-xs font-semibold rounded-sm border transition-colors ${
                  quantity === preset.qty
                    ? 'bg-[#041E42] text-white border-[#041E42]'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Beneficio dinámico según selección */}
      <div className="bg-white border border-slate-200 rounded-sm p-3.5 flex items-start gap-2.5 text-xs text-slate-700">
        <Sparkles className="w-4 h-4 text-[#F5820D] shrink-0 mt-0.5" />
        <div>
          {customerType === 'Comerciante / Mayorista' ? (
            <p>
              <strong className="text-[#041E42]">Cotización preferencial activada:</strong>{' '}
              Recibirás nuestra tabla de precios por volumen y condiciones de despacho para comerciantes en Ecuador.
            </p>
          ) : (
            <p>
              <strong className="text-[#041E42]">Atención inmediata por WhatsApp:</strong>{' '}
              Te enviaremos el precio vigente, promociones por combo y opciones de envío a tu ciudad.
            </p>
          )}
        </div>
      </div>

      {/* Botón principal de conversión */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2.5 bg-[#F5820D] hover:bg-[#D96B00] text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-md transition-colors"
      >
        <MessageSquare className="w-5 h-5" />
        <span>Solicitar precio y oferta por WhatsApp</span>
      </a>

      {/* Garantías operativas */}
      <div className="pt-2 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-[#003B8E] shrink-0" />
          <span>Envíos seguros a todo el país</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#003B8E] shrink-0" />
          <span>Trato directo sin intermediarios</span>
        </div>
      </div>
    </div>
  );
}

