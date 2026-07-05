import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import WhatsappButton from "@/components/WhatsappButton";
import SocialLinks from "@/components/Sociallinks";
import GalleryLightbox from "@/components/GalleryLightbox";
import { artisans, getArtisanById } from "@/data/artisans";
import { getCategoryBySlug } from "@/data/categories";

export function generateStaticParams() {
  return artisans.map((a) => ({ id: a.id }));
}

export default async function ArtisanPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const artisan = getArtisanById(id);

  if (!artisan) {
    notFound();
  }

  const category = getCategoryBySlug(artisan.categorySlug);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 px-6 py-10">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
          >
            <ArrowLeft size={16} />
            Back
          </Link>

          <div className="flex flex-col gap-6 border-b border-border pb-10 sm:flex-row">
            <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-2xl bg-black/40">
              <Image src={artisan.portrait} alt={artisan.name} fill className="object-cover" />
            </div>
            <div className="flex-1 pt-1">
              {category && (
                <p className="tracked mb-3 text-xs font-medium uppercase text-gold">
                  {category.name}
                </p>
              )}
              <h1 className="font-display text-3xl font-bold sm:text-4xl">{artisan.name}</h1>
              <p className="mb-4 mt-2 text-sm text-muted">{artisan.specialty}</p>
              <div className="mb-6">
                <SocialLinks artisan={artisan} />
              </div>
              <WhatsappButton whatsappNumber={artisan.whatsappNumber} artisanName={artisan.name} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 pt-10 sm:grid-cols-[minmax(0,1fr)_2fr]">
            <div>
              <p className="tracked mb-3 text-xs font-medium uppercase text-muted">About</p>
              <p className="mb-6 text-sm leading-relaxed text-foreground/90">{artisan.bio}</p>
              <WhatsappButton whatsappNumber={artisan.whatsappNumber} artisanName={artisan.name} fullWidth />
            </div>

            <div>
              <p className="tracked mb-3 text-xs font-medium uppercase text-muted">
                Previous works
              </p>
              <GalleryLightbox images={artisan.gallery} artisanName={artisan.name} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}