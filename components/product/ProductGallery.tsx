'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ProductGalleryProps {
  productName: string;
  images: string[];
  promoHighlight?: string;
}

export function ProductGallery({
  productName,
  images,
  promoHighlight,
}: ProductGalleryProps) {
  const gallery = images.length > 0 ? images : ['/products/placeholder.jpg'];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-3.5">
      {/* Miniaturas laterales (escritorio) / inferiores (móvil) */}
      {gallery.length > 1 && (
        <div className="flex sm:flex-col gap-2.5 overflow-x-auto sm:overflow-y-auto sm:w-20 shrink-0 pb-1 sm:pb-0">
          {gallery.map((imgSrc, index) => {
            const isSelected = index === activeIndex;
            return (
              <button
                key={`${imgSrc}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                aria-label={`Ver imagen ${index + 1} de ${productName}`}
                className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-sm overflow-hidden border-2 bg-slate-50 shrink-0 transition-all ${
                  isSelected
                    ? 'border-[#003B8E] ring-1 ring-[#003B8E]'
                    : 'border-slate-200 hover:border-slate-400 opacity-80 hover:opacity-100'
                }`}
              >
                <Image
                  src={imgSrc}
                  alt={`${productName} - vista ${index + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover object-center"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Visor principal con zoom al pasar el cursor */}
      <div className="relative flex-1 aspect-square bg-white border border-slate-200 rounded-md overflow-hidden group">
        <div
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
          className="relative w-full h-full cursor-zoom-in overflow-hidden"
        >
          <Image
            src={gallery[activeIndex]}
            alt={`${productName} - fotografía ${activeIndex + 1}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={
              isZoomed
                ? {
                    transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                    transform: 'scale(1.65)',
                  }
                : undefined
            }
            className="object-cover object-center transition-transform duration-150 ease-out"
          />
        </div>

        {/* Etiqueta promocional */}
        {promoHighlight && (
          <span className="absolute top-3.5 left-3.5 z-10 bg-[#F5820D] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm pointer-events-none">
            {promoHighlight}
          </span>
        )}

        {/* Indicador de zoom y contador */}
        <div className="absolute bottom-3 left-3.5 right-3.5 z-10 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-xs border border-slate-200 text-[11px] font-medium text-slate-600 px-2.5 py-1 rounded-sm">
            <ZoomIn className="w-3.5 h-3.5 text-[#003B8E]" />
            <span className="hidden sm:inline">Pasa el cursor para acercar</span>
            <span className="sm:hidden">Vista detallada</span>
          </span>

          {gallery.length > 1 && (
            <span className="bg-[#041E42]/85 text-white text-[11px] font-semibold px-2.5 py-1 rounded-sm">
              {activeIndex + 1} / {gallery.length}
            </span>
          )}
        </div>

        {/* Flechas de navegación */}
        {gallery.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Imagen anterior"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white border border-slate-200 text-[#041E42] flex items-center justify-center shadow-xs transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Imagen siguiente"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white border border-slate-200 text-[#041E42] flex items-center justify-center shadow-xs transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

