import Image from "next/image";
import { Phone } from "lucide-react";
import { Artisan } from "@/types/artisan";

// Converts an international number like "2348012345678" to a local
// dialable format "08012345678" for the tel: link.
function toLocalPhone(number: string) {
    if (number.startsWith("234")) {
        return "0" + number.slice(3);
    }
    return number;
}

export default function SocialLinks({ artisan }: { artisan: Artisan }) {
    const hasAny = artisan.instagram || artisan.email || artisan.whatsappNumber;
    if (!hasAny) return null;

    return (
        <div className="flex items-center gap-3">
            {artisan.whatsappNumber && (
                <a
                    href={`tel:${toLocalPhone(artisan.whatsappNumber)}`}
                    aria-label={`Call ${artisan.name}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
                >
                    <Phone size={20} />
                </a>
            )}

            {artisan.instagram && (
                <a
                    href={`https://instagram.com/${artisan.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${artisan.name} on Instagram`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-border-strong"
                >
                    <Image src="/instagram.svg" alt="" width={20} height={20} />
                </a>
            )}

            {artisan.email && (
                <a
                    href={`mailto:${artisan.email}`}
                    aria-label={`Email ${artisan.name}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-border-strong"
                >
                    <Image src="/mail.svg" alt="" width={20} height={20} />
                </a>
            )}
        </div>
    );
}