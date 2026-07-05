import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Artisan } from "@/types/artisan";
import { getCategoryBySlug } from "@/data/categories";

export default function ArtisanCard({ artisan }: { artisan: Artisan }) {
  const category = getCategoryBySlug(artisan.categorySlug);

  return (
    <Link
      href={`/artisan/${artisan.id}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-border-strong"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40 sm:aspect-[16/11]">
        <Image
          src={artisan.gallery[0] ?? artisan.portrait}
          alt={`${artisan.name} work sample`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {category && (
          <span className="tracked absolute left-4 top-4 rounded-full bg-black/70 px-3.5 py-1.5 text-xs font-medium uppercase text-foreground">
            {category.name}
          </span>
        )}
      </div>

      <div className="flex items-center gap-4 px-5 py-5">
        <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full bg-black/40">
          <Image src={artisan.portrait} alt={artisan.name} fill className="object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-base font-semibold">{artisan.name}</p>
          <p className="truncate text-sm text-muted">{artisan.specialty}</p>
        </div>
        <ChevronRight size={22} className="flex-shrink-0 text-muted transition-colors group-hover:text-foreground" />
      </div>
    </Link>
  );
}