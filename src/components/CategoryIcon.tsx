import { Shirt, Camera, Hammer, ChefHat, Brush, Monitor, LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Shirt,
  Camera,
  Hammer,
  ChefHat,
  Brush,
  Monitor,
};

export default function CategoryIcon({ name, size = 14 }: { name: string; size?: number }) {
  const Icon = ICONS[name] ?? Monitor;
  return <Icon size={size} strokeWidth={2} />;
}
