import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const CATEGORY_STYLE = {
  "fashion-design": { accent: "#c9a15a", icon: "shirt" },
  photography: { accent: "#6f9d95", icon: "camera" },
  carpentry: { accent: "#b07a4a", icon: "hammer" },
  catering: { accent: "#c9713f", icon: "chef" },
  "makeup-beauty": { accent: "#c97590", icon: "brush" },
  "graphic-design": { accent: "#7d8fc9", icon: "monitor" },
};

const ICON_PATHS = {
  shirt:
    '<path d="M35 20 L45 12 L55 20 L65 12 L75 20 L70 32 L64 29 L64 68 L36 68 L36 29 L30 32 Z" fill="none" stroke="ACCENT" stroke-width="2.2" stroke-linejoin="round"/>',
  camera:
    '<rect x="28" y="34" width="44" height="32" rx="4" fill="none" stroke="ACCENT" stroke-width="2.2"/><circle cx="50" cy="50" r="10" fill="none" stroke="ACCENT" stroke-width="2.2"/><path d="M40 34 L44 26 H56 L60 34" fill="none" stroke="ACCENT" stroke-width="2.2" stroke-linejoin="round"/>',
  hammer:
    '<rect x="46" y="30" width="8" height="42" rx="2" fill="none" stroke="ACCENT" stroke-width="2.2"/><path d="M30 20 H70 L66 34 H34 Z" fill="none" stroke="ACCENT" stroke-width="2.2" stroke-linejoin="round"/>',
  chef:
    '<path d="M32 44 C32 32 40 26 50 26 C60 26 68 32 68 44 L70 62 H30 Z" fill="none" stroke="ACCENT" stroke-width="2.2" stroke-linejoin="round"/><rect x="30" y="62" width="40" height="8" fill="none" stroke="ACCENT" stroke-width="2.2"/>',
  brush:
    '<path d="M60 22 L74 36 L48 62 L38 64 L40 54 Z" fill="none" stroke="ACCENT" stroke-width="2.2" stroke-linejoin="round"/><path d="M38 64 L30 72" fill="none" stroke="ACCENT" stroke-width="2.2"/>',
  monitor:
    '<rect x="26" y="26" width="48" height="32" rx="3" fill="none" stroke="ACCENT" stroke-width="2.2"/><path d="M40 66 H60 M50 58 V66" fill="none" stroke="ACCENT" stroke-width="2.2"/>',
};

function svgFor(categorySlug, seedIndex) {
  const style = CATEGORY_STYLE[categorySlug] ?? { accent: "#98968f", icon: "monitor" };
  const bgShift = 10 + (seedIndex % 4) * 4;
  const bg = `rgb(${16 + bgShift}, ${16 + bgShift}, ${18 + bgShift})`;
  const iconMarkup = ICON_PATHS[style.icon].replaceAll("ACCENT", style.accent);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="600" height="600">
  <rect width="100" height="100" fill="${bg}"/>
  <g opacity="0.9">${iconMarkup}</g>
</svg>`;
}

const ARTISANS = [
  { id: "chioma-okafor", categorySlug: "fashion-design", galleryCount: 6 },
  { id: "blessing-adeyemi", categorySlug: "fashion-design", galleryCount: 5 },
  { id: "emeka-nwosu", categorySlug: "photography", galleryCount: 5 },
  { id: "tunde-adeola", categorySlug: "photography", galleryCount: 5 },
  { id: "samuel-obi", categorySlug: "carpentry", galleryCount: 5 },
  { id: "grace-eze", categorySlug: "catering", galleryCount: 5 },
  { id: "funke-adebayo", categorySlug: "makeup-beauty", galleryCount: 5 },
  { id: "david-mensah", categorySlug: "graphic-design", galleryCount: 5 },
];

const publicDir = join(process.cwd(), "public", "images", "artisans");

for (const artisan of ARTISANS) {
  const dir = join(publicDir, artisan.id);
  mkdirSync(dir, { recursive: true });

  writeFileSync(join(dir, "portrait.svg"), svgFor(artisan.categorySlug, 0));

  for (let i = 1; i <= artisan.galleryCount; i++) {
    writeFileSync(join(dir, `work-${i}.svg`), svgFor(artisan.categorySlug, i));
  }
}

console.log("Placeholder images generated for", ARTISANS.length, "artisans.");
