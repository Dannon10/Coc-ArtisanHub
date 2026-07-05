export type Category = {
  slug: string;
  name: string;
  icon: string; // lucide-react icon name, e.g. "Shirt"
};

export type Artisan = {
  id: string;
  name: string;
  categorySlug: string;
  specialty: string; // one-line, e.g. "Bridal & Occasion Wear"
  bio: string;
  portrait: string; // path under /public
  whatsappNumber: string; // digits only, international format, e.g. "2348012345678"
  instagram?: string; // handle without "@", e.g. "chioma.designs"
  email?: string;
  gallery: string[]; // 5-10 image paths under /public
};