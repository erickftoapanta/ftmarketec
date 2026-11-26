import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '@/data/categories';

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
      {CATEGORIES.map((category) => (
        <Link
          key={category.slug}
          href={`/catalogo?categoria=${category.slug}`}
          className="group bg-white border border-slate-200 rounded-md overflow-hidden flex flex-col justify-between transition-colors hover:border-[#003B8E]"
        >
          <div className="relative aspect-[4/3] bg-slate-50 border-b border-slate-100 overflow-hidden">
            <Image
              src={category.image}
              alt={category.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.04]"
            />
          </div>
          <div className="p-4 flex items-start justify-between gap-2">
            <div>
              <h3 className="text-sm font-bold text-[#041E42] group-hover:text-[#003B8E] transition-colors">
                {category.name}
              </h3>
              <p className="mt-1 text-xs text-slate-600 line-clamp-2">
                {category.description}
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#F5820D] shrink-0 mt-0.5 transition-colors" />
          </div>
        </Link>
      ))}
    </div>
  );
}

