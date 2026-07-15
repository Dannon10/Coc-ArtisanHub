import {
  Shirt,
  Hammer,
  ChefHat,
  Monitor,
  Frame,
  PaintRoller,
  Zap,
  Footprints,
  Printer,
  Droplet,
  Wrench,
  LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Shirt,
  Hammer,
  ChefHat,
  Monitor,
  Frame,
  PaintRoller,
  Zap,
  Footprints,
  Printer,
  Droplet,
  Wrench,
};

export default function CategoryIcon({ name, size = 14 }: { name: string; size?: number }) {
  const Icon = ICONS[name] ?? Monitor;
  return <Icon size={size} strokeWidth={2} />;
}