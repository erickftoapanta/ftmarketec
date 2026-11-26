'use client';

import { useMemo, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  Search,
  SlidersHorizontal,
  X,
  Tag,
  MessageSquare,
} from 'lucide-react';
import { PublicProduct, ProductCategorySlug } from '@/types/product';
import { CATEGORIES } from '@/data/categories';
import { ProductCard } from '@/components/catalog/ProductCard';
import { getGeneralInquiryUrl } from '@/lib/utils/whatsapp';

interface CatalogExplorerProps {
  initialProducts: PublicProduct[];
}

type SortOption = 'featured' | 'name-asc' | 'stock-desc';

export function CatalogExplorer({ initialProducts }: CatalogExplorerProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const categoryParam = searchParams.get('categoria') as ProductCategorySlug | null;

  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryParam || 'all'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyPromos, setOnlyPromos] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  useEffect(() => {
    setSelectedCategory(categoryParam || 'all');
  }, [categoryParam]);

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    if (slug === 'all') {
      router.replace('/catalogo', { scroll: false });
    } else {
      router.replace(`/catalogo?categoria=${slug}`, { scroll: false });
    }
  };

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const filtered = initialProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      const matchesPromo =
        !onlyPromos || Boolean(product.commercial.promoHighlight);

      const matchesQuery =
        normalizedQuery === '' ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.shortDescription.toLowerCase().includes(normalizedQuery) ||
        product.sku.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesPromo && matchesQuery;
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name, 'es');
      }
      if (sortBy === 'stock-desc') {
        return b.stock - a.stock;
      }
      if (a.isFeatured === b.isFeatured) return 0;
      return a.isFeatured ? -1 : 1;
    });
  }, [initialProducts, selectedCategory, searchQuery, onlyPromos, sortBy]);

  const hasActiveFilters =
    selectedCategory !== 'all' || searchQuery.trim() !== '' || onlyPromos;

  const resetFilters = () => {
    setSearchQuery('');
    setOnlyPromos(false);
    setSortBy('featured');
    handleCategoryChange('all');
  };

  return (
    <div className="space-y-8">
      {/* Barra superior de búsqueda y ordenamiento */}
      <div className="bg-white border border-slate-200 rounded-md p-4 sm:p-5 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
          {/* Buscador */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nombre, uso o código (ej. Pogo Ball, F4+, Tornado)..."
              className="w-full pl-10 pr-9 py-2.5 text-sm text-[#041E42] bg-[#F8FAFC] border border-slate-300 rounded-md focus:outline-none focus:border-[#003B8E] focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Limpiar búsqueda"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filtro rápido de promociones */}
          <div className="md:col-span-3">
            <button
              type="button"
              onClick={() => setOnlyPromos((prev) => !prev)}
              className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-3.5 text-xs sm:text-sm font-semibold rounded-md border transition-colors ${
                onlyPromos
                  ? 'bg-[#F5820D] text-white border-[#F5820D]'
                  : 'bg-white text-[#041E42] border-slate-300 hover:bg-slate-50'
              }`}
            >
              <Tag className="w-4 h-4 shrink-0" />
              <span>Solo con promoción</span>
            </button>
          </div>

          {/* Selector de orden */}
          <div className="md:col-span-3 flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-slate-500 shrink-0 hidden sm:block" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              aria-label="Ordenar productos"
              className="w-full py-2.5 px-3 text-xs sm:text-sm font-medium text-[#041E42] bg-white border border-slate-300 rounded-md focus:outline-none focus:border-[#003B8E]"
            >
              <option value="featured">Orden: Destacados</option>
              <option value="name-asc">Orden: Nombre (A - Z)</option>
              <option value="stock-desc">Orden: Mayor disponibilidad</option>
            </select>
          </div>
        </div>

        {/* Pestañas de categorías */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => handleCategoryChange('all')}
            className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === 'all'
                ? 'bg-[#041E42] text-white'
                : 'bg-[#F8FAFC] text-slate-700 border border-slate-200 hover:border-slate-300'
            }`}
          >
            Todos ({initialProducts.length})
          </button>

          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => handleCategoryChange(cat.slug)}
                className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-[#041E42] text-white'
                    : 'bg-[#F8FAFC] text-slate-700 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Contador y limpiar filtros */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-slate-600">
        <p>
          Mostrando{' '}
          <span className="font-bold text-[#041E42]">
            {filteredProducts.length}
          </span>{' '}
          {filteredProducts.length === 1 ? 'producto disponible' : 'productos disponibles'}
        </p>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex items-center gap-1.5 font-semibold text-[#003B8E] hover:underline"
          >
            <X className="w-3.5 h-3.5" />
            <span>Limpiar filtros activos</span>
          </button>
        )}
      </div>

      {/* Grilla de resultados o estado vacío */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-md p-10 text-center max-w-xl mx-auto space-y-4">
          <h3 className="text-lg font-bold text-[#041E42]">
            No encontramos artículos con ese filtro
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Puedes restablecer los filtros o escribirnos directamente por WhatsApp si buscas algún producto específico para tu hogar o negocio.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={resetFilters}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#041E42] bg-white border border-slate-300 rounded-md hover:bg-slate-50 transition-colors"
            >
              Ver todo el catálogo
            </button>
            <a
              href={getGeneralInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#F5820D] hover:bg-[#D96B00] rounded-md transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Consultar disponibilidad por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

