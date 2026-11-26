'use client';

import { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/utils/whatsapp';

type InquiryTopic =
  | 'Cotización Minorista (Uso personal)'
  | 'Precios para Comerciante / Mayorista'
  | 'Disponibilidad y Envíos a Provincias'
  | 'Consulta General';

export function ContactInquiryForm() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [topic, setTopic] = useState<InquiryTopic>(
    'Cotización Minorista (Uso personal)'
  );
  const [details, setDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `Hola FT Market EC, me comunico desde la sección de contacto de su web:`,
      ``,
      name.trim() ? `• Nombre: ${name.trim()}` : null,
      city.trim() ? `• Ciudad / Provincia: ${city.trim()}` : null,
      `• Motivo: ${topic}`,
      details.trim()
        ? `• Consulta: ${details.trim()}`
        : `• Consulta: Deseo recibir información sobre productos, precios y promociones vigentes.`,
    ].filter(Boolean);

    const url = buildWhatsAppUrl(lines.join('\n'));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-slate-200 rounded-md p-6 sm:p-8 space-y-5"
    >
      <div className="space-y-1">
        <h2 className="text-xl font-extrabold text-[#041E42]">
          Envíanos tu consulta directa
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          Completa estos datos y se abrirá nuestro chat de WhatsApp con tu mensaje estructurado para atenderte de inmediato.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label
            htmlFor="contact-name"
            className="block text-xs font-bold uppercase tracking-wider text-[#041E42]"
          >
            Tu nombre
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej. Carlos Mendoza"
            className="w-full px-3.5 py-2.5 text-sm text-[#041E42] bg-[#F8FAFC] border border-slate-300 rounded-md focus:outline-none focus:border-[#003B8E] focus:bg-white"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="contact-city"
            className="block text-xs font-bold uppercase tracking-wider text-[#041E42]"
          >
            Ciudad o provincia
          </label>
          <input
            id="contact-city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Ej. Quito, Guayaquil, Cuenca..."
            className="w-full px-3.5 py-2.5 text-sm text-[#041E42] bg-[#F8FAFC] border border-slate-300 rounded-md focus:outline-none focus:border-[#003B8E] focus:bg-white"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="contact-topic"
          className="block text-xs font-bold uppercase tracking-wider text-[#041E42]"
        >
          Tipo de solicitud
        </label>
        <select
          id="contact-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value as InquiryTopic)}
          className="w-full px-3.5 py-2.5 text-sm font-medium text-[#041E42] bg-[#F8FAFC] border border-slate-300 rounded-md focus:outline-none focus:border-[#003B8E] focus:bg-white"
        >
          <option value="Cotización Minorista (Uso personal)">
            Cotización Minorista (Uso personal)
          </option>
          <option value="Precios para Comerciante / Mayorista">
            Precios para Comerciante / Mayorista
          </option>
          <option value="Disponibilidad y Envíos a Provincias">
            Disponibilidad y Envíos a Provincias
          </option>
          <option value="Consulta General">Consulta General</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="contact-details"
          className="block text-xs font-bold uppercase tracking-wider text-[#041E42]"
        >
          Productos o cantidades de interés
        </label>
        <textarea
          id="contact-details"
          rows={4}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Cuéntanos qué artículos te interesan o cuántas unidades deseas cotizar..."
          className="w-full px-3.5 py-2.5 text-sm text-[#041E42] bg-[#F8FAFC] border border-slate-300 rounded-md focus:outline-none focus:border-[#003B8E] focus:bg-white resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-[#F5820D] hover:bg-[#D96B00] text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-md transition-colors cursor-pointer"
      >
        <MessageSquare className="w-4 h-4" />
        <span>Continuar en WhatsApp</span>
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}

