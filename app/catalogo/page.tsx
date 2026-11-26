import { Suspense } from 'react';
import type { Metadata } from 'next';
import { getPublishedProducts } from '@/lib/services/catalogService';
import { CatalogExplorer } from '@/components/catalog/CatalogExplorer';

export const metadata: Metadata = {
  title: 'Catálogo de Productos | FT Market EC',
  description:
    'Explora nuestro catálogo completo de productos disponibles en Ecuador para compra individual y abastecimiento de comerciantes.',
};

export default function CatalogoPage() {
  const products = getPublishedProducts();

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Encabezado institucional */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#003B8E]">
            Distribución Nacional · Ecuador
          </span>
          <h1 className="mt-1.5 text-3xl sm:text-4xl font-extrabold text-[#041E42] tracking-tight">
            Catálogo de productos
          </h1>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Selecciona cualquier producto para revisar su galería de imágenes, especificaciones y solicitar precios minoristas, combos o tarifas preferenciales para comerciantes.
          </p>
        </div>
      </section>

      {/* Explorador interactivo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <Suspense
          fallback={
            <div className="bg-white border border-slate-200 rounded-md p-8 text-sm text-slate-500">
              Cargando catálogo de productos...
            </div>
          }
        >
          <CatalogExplorer initialProducts={products} />
        </Suspense>
      </section>
    </div>
  );
}

