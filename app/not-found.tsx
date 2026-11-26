import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-[#F8FAFC] min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-md p-8 text-center space-y-5">
        <span className="inline-block px-3 py-1 rounded-sm bg-slate-100 text-xs font-bold uppercase tracking-wider text-[#003B8E]">
          Error 404 · Página no encontrada
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#041E42]">
          No encontramos este enlace
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          Es posible que el producto haya sido actualizado o que la dirección escrita sea incorrecta. Puedes explorar nuestro catálogo vigente o volver al inicio.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#041E42] border border-slate-300 text-xs font-bold px-5 py-3 rounded-md transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al inicio</span>
          </Link>
          <Link
            href="/catalogo"
            className="inline-flex items-center justify-center gap-2 bg-[#F5820D] hover:bg-[#D96B00] text-white text-xs font-bold px-5 py-3 rounded-md transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Explorar catálogo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

