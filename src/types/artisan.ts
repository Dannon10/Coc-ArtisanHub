export type Category = {
  slug: string;
  name: string;
  icon: string; 
};

export type Artisan = {
  id: string;
  name: string;
  categorySlug: string;
  specialty: string;
  bio: string;
  portrait: string;
  whatsappNumber: string;
  instagram?: string; 
  email?: string;
  gallery: string[];
};