import { MessageSquare } from 'lucide-react';
import { getGeneralInquiryUrl } from '@/lib/utils/whatsapp';

export function FloatingWhatsApp() {
  return (
    <a
      href={getGeneralInquiryUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp a FT Market EC"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 bg-[#041E42] hover:bg-[#003B8E] text-white border border-slate-700 px-4 py-3 rounded-md shadow-md transition-colors group"
    >
      <span className="flex h-2.5 w-2.5 relative">
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F5820D]" />
      </span>
      <MessageSquare className="w-4 h-4 text-[#F5820D]" strokeWidth={2} />
      <span className="text-xs sm:text-sm font-semibold tracking-tight">
        Asesoría WhatsApp
      </span>
    </a>
  );
}

