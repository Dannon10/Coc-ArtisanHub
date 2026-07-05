"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { artisans } from "@/data/artisans";
import { categories } from "@/data/categories";
import CategoryIcon from "@/components/CategoryIcon";
import ArtisanCard from "@/components/ArtisanCard";

export default function BrowseSection() {
  const [query, setQuery] = useState("");
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    return artisans.filter((a) => {
      const matchesCategory = !activeSlug || a.categorySlug === activeSlug;
      const matchesQuery =
        trimmed.length === 0 ||
        a.name.toLowerCase().includes(trimmed) ||
        a.specialty.toLowerCase().includes(trimmed);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeSlug]);

  return (
    <div>
      <div className="relative mx-auto w-full max-w-md">
        <Search
          size={16}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or craft..."
          className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm placeholder:text-muted focus:border-border-strong focus:outline-none"
        />
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActiveSlug(null)}
          className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
            activeSlug === null
              ? "bg-foreground text-background"
              : "border border-border text-foreground hover:border-border-strong"
          }`}
        >
          All
        </button>
        {categories.map((category) => {
          const isActive = category.slug === activeSlug;
          return (
            <button
              key={category.slug}
              onClick={() => setActiveSlug(category.slug)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm transition-colors ${
                isActive
                  ? "bg-foreground text-background"
                  : "border border-border text-foreground hover:border-border-strong"
              }`}
            >
              <CategoryIcon name={category.icon} size={14} />
              {category.name}
            </button>
          );
        })}
      </div>

      <p className="mt-10 mb-4 text-sm text-muted">
        {filtered.length} {filtered.length === 1 ? "member" : "members"}
      </p>

      {filtered.length === 0 ? (
        <p className="text-sm text-muted">No members match that search.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {filtered.map((artisan) => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>
      )}
    </div>
  );
}
