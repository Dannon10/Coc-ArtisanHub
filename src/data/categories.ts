import { Category } from "@/types/artisan";

export const categories: Category[] = [
  { slug: "fashion-design", name: "Fashion Design", icon: "Shirt" },
  { slug: "carpentry", name: "Carpentry", icon: "Hammer" },
  // { slug: "catering", name: "Catering", icon: "ChefHat" },
  { slug: "tech", name: "Tech", icon: "Monitor" },
  { slug: "aluminium-fabrication", name: "Aluminium Fabrication", icon: "Frame" },
  { slug: "welding-and-metal-work", name: "Welding and Metal works", icon: "Flame" },
  { slug: "house-painting", name: "House Painting", icon: "PaintRoller" },
  { slug: "electrician", name: "Electrician", icon: "Zap" },
  { slug: "footwear", name: "Footwear & Leather Goods", icon: "Footprints" },
  { slug: "printing", name: "Printing & Design", icon: "Printer" },
  { slug: "cream-soap-making", name: "Cream & Soap Making", icon: "Droplet" },
  { slug: "mechanic", name: "Mechanic", icon: "Wrench" },
];
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}